
/**
 * @description 基础节点类
 * @author: minfive
 * @createDate: 2018-06-18
 * @lastModify minfive
 * @lastDate: 2018-06-18
 */

import { downloadFile } from './utils.js';

const COLOR_TRANSPRENT = 'transprent';

export default class Element {
    /**
     * 节点
     *
     * @param {Object} config 节点配置
     * @param {Number} config.left 离画布左边的距离
     * @param {Number} config.top 离画布顶部的距离
     * @param {Number} config.width 节点宽度
     * @param {Number} config.height 节点高度
     * @param {String} config.border 边框配置
     * @param {Array}  config.padding 节点内边距
     * @param {String} config.text 文本内容
     * @param {Number} config.fontSize 字体大小
     * @param {Number} config.lineHeight 行高
     * @param {String} config.textAlign 字体对齐方式 ['left', 'center', 'right']
     * @param {String} config.textVerticalAlign 字体垂直方向对齐方式 ['top', 'middle', 'bottom']
     * @param {String} config.color 字体颜色
     * @param {String} config.fontWeigth 字体的粗细
     * @param {String} config.fontStyle 字体样式
     * @param {String} config.fontFamily 字体族名
     * @param {String} config.backgroundColor 背景颜色
     * @param {String} config.backgroundImage 背景图片
     * @param {String} config.backbroundSize 背景图片大小 [40, 40]
     * @param {String} config.zIndex 层级，高级在上，低级在下
     */
    constructor(config) {
        this.config = {
            left: 0,
            top: 0,
            width: '100%',
            height: null,
            border: null,
            padding: [0, 0, 0, 0],
            text: '',
            fontSize: '20px',
            lineHeight: 1.3,
            textAlign: 'left',
            textVerticalAlign: 'top',
            color: '#000000',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontFamily: 'sans-serif',
            backgroundColor: COLOR_TRANSPRENT,
            backgroundImage: null,
            backgroundSize: null,
            zIndex: 0,
            ...config
        };
    }

    // 处理节点内容
    _processText(text, maxWidth) {
        let { config, _ctx, _adaptation } = this;

        // 全局字体，用于检查字体宽度
        _ctx.font = [
            config.fontStyle,
            config.fontWeigth,
            _adaptation(0, parseFloat(config.fontSize))[1] + 'px',
            config.fontFamily
        ].filter(val => val != null).join(' ');

        function calc(str) {
            let width = _ctx.measureText(str).width;

            if (width > maxWidth) {
                let len = str.length;
                let idx = 0;
                let result = [];

                while (idx < len) {
                    let nowStr = str.substring(0, idx + 1);
                    let strWidth = _ctx.measureText(nowStr).width;

                    if (strWidth <= maxWidth) {
                        result[0] = {
                            text: nowStr,
                            width: strWidth
                        };
                    } else {
                        break;
                    }

                    idx++;
                }

                return idx === len ? result : result.concat(calc(str.substring(idx)));
            } else {
                return [{ text: str, width }];
            }
        }

        let contents = calc(text);
        console.log(contents);
        return contents;
    }

    // 处理边框
    _processBorder() {
        let { border } = this.config;
        let borderStr = border == null ? '0 #000000' : border;
        let borderSetting = borderStr.split(' ');

        return {
            width: this._adaptation(parseFloat(borderSetting[0]), 0)[0],
            color: borderSetting[1]
        };
    }

    // 适配配置项
    _adaptationSetting() {
        let { config, _adaptation } = this;
        let border = this._processBorder();
        let adaptationConfig = {
            position: _adaptation(config.left, config.top),
            border: border,
            borderWidth: border.width,
            padding: [
                _adaptation(0, config.padding[0])[1],
                _adaptation(config.padding[1], 0)[0],
                _adaptation(0, config.padding[2])[1],
                _adaptation(config.padding[3], 0)[0]
            ],
            fontSize: _adaptation(0, parseFloat(config.fontSize))[1]
        };

        adaptationConfig.lineHeight = typeof config.lineHeight === 'number'
            ? config.lineHeight * adaptationConfig.fontSize
            : _adaptation(0, parseFloat(config.lineHeight))[1];

        const calcRect = () => {
            let { padding, borderWidth } = adaptationConfig;
            let paddingSize = [
                padding[1] + padding[3],
                padding[0] + padding[2]
            ];
            let borderSize = [
                borderWidth * 2,
                borderWidth * 2
            ];
            const rectWidth = _adaptation(config.width, 0)[0];
            const containerWidth = rectWidth - paddingSize[0] - borderSize[0];
            const contentStrs = this._processText(config.text, containerWidth);

            Object.assign(adaptationConfig, {
                rect: {
                    width: rectWidth,
                    height: config.height == null
                        ? contentStrs.length * adaptationConfig.lineHeight + borderSize[1] + paddingSize[1]
                        : _adaptation(0, config.height)[1]
                },
                content: contentStrs
            });

            Object.assign(adaptationConfig, {
                containerWidth,
                containerHeight: adaptationConfig.rect.height - borderSize[1] - paddingSize[1]
            });
        };

        calcRect();

        this._adaptationConfig = adaptationConfig;
    }

    _drawContainer() {
        let { _ctx, _adaptationConfig } = this;
        const { position, border, padding, containerWidth, containerHeight } = _adaptationConfig;

        _ctx.save();
        // 界定内容区域
        _ctx.beginPath();
        _ctx.rect(
            position[0] + border.width + padding[3],
            position[1] + border.width + padding[0],
            containerWidth,
            containerHeight
        );
        _ctx.clip();
    }

    _drawBorder() {
        let { _ctx, _adaptationConfig } = this;
        let { width, height } = _adaptationConfig.rect;
        let { border } = _adaptationConfig;

        if (border.width === 0) return;

        _ctx.setLineWidth(border.width);
        _ctx.setStrokeStyle(border.color);
        _ctx.strokeRect(
            ..._adaptationConfig.position.map(num => num + (border.width / 2)),
            width - border.width,
            height - border.width
        );
    }

    _drawBackground(ctx, adaptation) {
        let { _ctx, _adaptationConfig, config } = this;
        let { width, height } = _adaptationConfig.rect;
        let { border } = _adaptationConfig;

        if (config.backgroundColor && config.backgroundColor !== COLOR_TRANSPRENT) {
            _ctx.setFillStyle(config.backgroundColor);
            _ctx.fillRect(
                ..._adaptationConfig.position.map(num => num + border.width),
                width - (border.width * 2),
                height - (border.width * 2)
            );
        }
        if (config.backgroundImage) {
            _ctx.drawImage(
                this._bgImage,
                ..._adaptationConfig.position.map(num => num + border.width),
                width - (border.width * 2),
                height - (border.width * 2)
            );
        }
    }

    _drawContent() {
        const { _ctx, _adaptationConfig, config } = this;
        const { content, position, border, padding, lineHeight, containerWidth, containerHeight, fontSize } = _adaptationConfig;
        const alignMap = {
            'top': 0,
            'middle': 0.5,
            'bottom': 1,
            'left': 0,
            'center': 0.5,
            'right': 1
        };

        _ctx.font = [
            config.fontStyle,
            config.fontWeight,
            fontSize + 'px',
            config.fontFamily
        ].filter(val => val != null).join(' ');
        _ctx.setFillStyle(config.color);
        // _ctx.setTextAlign(config.textAlign);
        _ctx.setTextBaseline('middle');

        content.forEach((item, idx) => {
            _ctx.fillText(
                item.text,
                position[0] + border.width + padding[3] +
                    alignMap[config.textAlign] * (containerWidth - item.width),
                position[1] + border.width + padding[0] +
                    // 这里是因为字体基准线设置成 middle
                    lineHeight * (idx + 0.5) +
                    // 这里为了实现字体设置垂直方向上的位置
                    alignMap[config.textVerticalAlign] * (containerHeight - content.length * lineHeight),
                containerWidth
            );
        });
    }

    /**
     * 暴露给场景的渲染方法
     * 在该方法中执行当前节点的内容渲染
     *
     * @param {Object} ctx canvas 绘图上下文
     * @param {Function} adaptation 尺寸适配器
     * @api public
     */
    render(ctx, adaptation) {
        this._ctx = ctx;
        this._adaptation = adaptation;

        this._adaptationSetting();
        this._drawBorder();
        this._drawBackground();
        this._drawContainer();
        this._drawContent();

        ctx.restore();
    }

    /**
     * 渲染前需要预加载资源的操作
     *
     * @param {Object} config 当前节点的所有配置信息
     * @return {Promise}
     */
    async preload() {
        let { backgroundImage } = this.config;

        if (backgroundImage) {
            this._bgImage = await downloadFile(backgroundImage);
        }
    }
};
