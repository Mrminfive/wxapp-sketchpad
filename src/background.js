
/**
 * @description 背景
 * @author: minfive
 * @createDate: 2018-06-19
 * @lastModify minfive
 * @lastDate: 2018-06-19
 */

import Element from './element.js';
import { downloadFile } from './utils.js';

export default class Background extends Element {
    /**
     * 场景背景节点
     *
     * @param {Object} config 节点配置
     * @param {String} config.color 16进制颜色，用于设置背景颜色
     * @param {String} config.image 背景图片，支持
     */
    constructor(config) {
        super(config);
        this._bgImage = null;
    }

    render(ctx, adaptation) {
        let { color, image } = this.config;

        // 画背景颜色
        if (color) {
            ctx.setFillStyle(color);
            ctx.fillRect(0, 0, ...adaptation('100%', '100%'));
        }

        // 画背景图
        if (image) {
            ctx.drawImage(this._bgImage, 0, 0, ...adaptation('100%', '100%'));
        }
    }

    async preload() {
        let { image } = this.config;

        if (image) {
            this._bgImage = await downloadFile(image);
        }
    }
};
