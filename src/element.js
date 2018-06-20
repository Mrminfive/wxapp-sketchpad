
/**
 * @description 基础节点类
 * @author: minfive
 * @createDate: 2018-06-18
 * @lastModify minfive
 * @lastDate: 2018-06-18
 */

export default class Element {
    constructor(config) {
        this.config = {
            zIndex: 0,
            ...config
        };
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
        // to do some thing
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
