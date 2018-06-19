
/**
 * @description 基础节点类
 * @author: minfive
 * @createDate: 2018-06-18
 * @lastModify minfive
 * @lastDate: 2018-06-18
 */

export default class Element {
    constructor(config) {
        console.log('create element');
        this.config = config || {};
    }

    /**
     * 暴露给场景的渲染方法
     * 在该方法中执行当前节点的内容渲染
     *
     * @param {Object} ctx 特殊处理过后的 canvas 上下文
     * @api public
     */
    render(ctx) {
        console.log(ctx);
    }

    /**
     * 渲染前需要预加载资源的操作
     *
     * @param {Object} config 当前节点的所有配置信息
     * @return {Promise}
     */
    preload(config) {
        return Promise.resolve();
    }
};
