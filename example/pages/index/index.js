
Page({
    data: {
        info: {},
        showCanvas: false
    },

    bindRenderCanvas(event) {
        this.setData({
            info: event.detail.userInfo,
            showCanvas: true
        });
    }
});
