
/**
 * @description 文字
 * @author: minfive
 * @createDate: 2018-06-19
 * @lastModify minfive
 * @lastDate: 2018-06-19
 */

import Element from './element.js';

export default class Label extends Element {
    constructor(config) {
        console.log(config);
        super(config);
    }

    render() {
        console.log('render');
    }
};
