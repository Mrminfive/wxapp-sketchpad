
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
