
/**
 * @description 形状
 * @author: minfive
 * @createDate: 2018-06-19
 * @lastModify minfive
 * @lastDate: 2018-06-19
 */

import Element from './element.js';

export default class Share extends Element {
    constructor(config) {
        console.log(config);
        super(config);
    }

    render(config) {
        console.log(config);
    }

    preload(config) {
        console.log('preconfig');
    }
};
