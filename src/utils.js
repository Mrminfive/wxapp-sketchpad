
/**
 * @description 工具函数
 * @author: minfive
 * @createDate: 2018-06-18
 * @lastModify minfive
 * @lastDate: 2018-06-18
 */

export const errorInfo = info => {
    const message = `[wxapp-sketchpad] Error: ${info}`;

    if (typeof console !== 'undefined') {
        console.error(message);
    }

    /* eslint-disable */
    try {
        throw new Error(message);
    } catch (x) { }
    /* eslint-enable */
};
