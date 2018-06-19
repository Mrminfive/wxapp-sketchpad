
/**
 * @description canvas渲染场景
 * @author: minfive
 * @createDate: 2018-06-18
 * @lastModify minfive
 * @lastDate: 2018-06-18
 */

import { errorInfo } from './utils.js';

class Layer {
    constructor(name, zIndex) {
        this.name = name;
    }
}

class Scene {
    constructor(options) {
        console.log(options);
        this._layers = [];
    }

    layer(name) {
        if (typeof name === 'string' && name) {
            errorInfo('the layer name must be a not empty string.');
        }

        let selectLayer = this._layers.find(layer => layer.name === name);

        if (!selectLayer) {
            selectLayer = new Layer(name);
        }

        return selectLayer;
    }
}

export default Scene;
