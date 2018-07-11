
/**
 * @description canvas渲染场景
 * @author: minfive
 * @createDate: 2018-06-18
 * @lastModify minfive
 * @lastDate: 2018-06-18
 */

import Element from './element.js';
import { errorInfo } from './utils.js';

class Scene {
    /**
     * 创建新的 canvas 绘画场景
     *
     * @param {String}   id canvas 节点 id，请保证 canvas-id 与 id 相同
     * @param {Object}   options 场景配置
     * @param {Object}   options.context canvas 所在上下文，可以是 page 也可以是 component
     * @param {Array}    options.original 设计稿尺寸，格式为 [width, height]
     * @param {String}   options.background 绘画场景的背景
     * @param {Function} options.initRect 初始化 canvas 规格
     */
    constructor(id, options) {
        this._canvasId = id;
        this.options = { ...options };
        this._elements = [];
        this._canvasRect = null;
        this._ctx = wx.createCanvasContext(id, options.context);
        this._aidctx = wx.createCanvasContext(options.aidid, options.context);
        this._systemInfo = wx.getSystemInfoSync();
        this._adaptationSize();
    }

    /**
     * 获取 canvas 大小
     *
     * @return {Promise}
     * @api private
     */
    _getClientRect() {
        return this._canvasRect
            ? Promise.resolve({ ...this._canvasRect })
            : new Promise(resolve => {
                let query = wx.createSelectorQuery();

                if (this.options.context) {
                    query = query.in(this.options.context);
                }

                query
                    .select('#' + this._canvasId)
                    .boundingClientRect(res => {
                        this._canvasRect = res;
                        this.options.initRect && this.options.initRect(res);
                        resolve(res);
                    })
                    .exec();
            });
    }

    /**
     * 适配 canvas
     *
     * @return {Object}
     * @api private
     */
    async _adaptationSize() {
        let { width, height } = await this._getClientRect();
        let [ originalWidth, originalHeight ] = this.options.original;

        function isPercentage(num) {
            return /^.*%$/.test(num.toString());
        }

        function calcPercentage(per, total) {
            return total * (per.substring(0, per.length - 1) / 100);
        }

        return (x = 0, y = 0) => {
            return [
                isPercentage(x) ? calcPercentage(x, width) : x * (width / originalWidth),
                isPercentage(y) ? calcPercentage(y, height) : y * (height / originalHeight)
            ].map(num => Math.round(num));
        };
    }

    /**
     * 预加载资源
     *
     * @return {Promise}
     * @api public
     */
    preload() {
        return Promise.all(
            this._elements
                .filter(element => !element.preload)
                .map(element => element.preload())
        );
    }

    /**
     * 添加新的元素进入场景
     *
     * @param {Element} ele 要插入的画布节点
     * @return {this}
     * @api public
     */
    append(ele) {
        if (!(ele instanceof Element)) {
            errorInfo('The appended element must inherit Element');
        }

        this._elements.push(ele);

        return this;
    }

    /**
     * 绘制画板
     *
     * @return {Promise}
     * @api public
     */
    async draw() {
        let idx = 0;
        const elements = this._elements.sort((first, next) => first.config.zIndex - next.config.zIndex);
        const adaptationSize = await this._adaptationSize();
        const drawCanvas = (reserve = false) => new Promise(resolve => this._ctx.draw(reserve, resolve));

        // 擦除面板
        // await drawCanvas();
        this._ctx.clearRect(0, 0, this._canvasRect.width, this._canvasRect.height);

        while (idx < elements.length) {
            let element = elements[idx];
            element.preload && await element.preload();
            element.render(this._ctx, this._aidctx, adaptationSize);
            await drawCanvas(true);
            ~this._systemInfo.system.indexOf('Android') && await new Promise(res => setTimeout(res, 100));
            idx++;
        }
    }
}

export default Scene;
