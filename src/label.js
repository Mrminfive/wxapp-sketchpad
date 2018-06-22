
/**
 * @description 文字
 * @author: minfive
 * @createDate: 2018-06-19
 * @lastModify minfive
 * @lastDate: 2018-06-19
 */

import Element from './element.js';

export default class Label extends Element {
    /**
     * 文本节点
     *
     * @param {Object} config 节点配置
     * @param {Number} config.left 离画布左边的距离
     * @param {Number} config.top 离画布顶部的距离
     * @param {Number} config.width 节点宽度
     * @param {Number} config.height 节点高度
     * @param {String} config.text 文本内容
     * @param {Number} config.fontSize 字体大小
     * @param {Number} config.lineHeight 行高
     * @param {String} config.textAlign 字体对齐方式 ['left', 'center', 'right']
     * @param {String} config.color 字体颜色
     * @param {String} config.fontWeigth 字体的粗细
     * @param {String} config.fontStyle 字体样式
     * @param {String} config.fontFamily 字体族名
     * @param {Array}  config.shadow 字体的阴影
     */
    constructor(config) {
        super({
            left: 0,
            top: 0,
            text: '',
            textAlign: 'left',
            color: '#000000',
            fontStyle: 'normal',
            fontWeigth: 'normal',
            fontFamily: 'sans-serif',
            ...config
        });
    }

    render(ctx, adaptation) {
        let { config } = this;

        ctx.font = [
            config.fontStyle,
            config.fontWeigth,
            config.fontSize + 'px',
            config.fontFamily
        ].filter(val => val != null).join(' ');

        ctx.setFillStyle(config.color);
        ctx.setTextBaseline('top');
        ctx.setTextAlign(config.textAlign);
        ctx.fillText(config.text, ...adaptation(config.left, config.top), adaptation(config.maxWidth, 0)[0]);
    }
};
