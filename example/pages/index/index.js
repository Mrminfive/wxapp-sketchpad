
const { utils } = require('../../packages/sketchpad/index.js');

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
    },

    chooseImage() {
        wx.chooseImage({
            count: 1,
            success(res) {
                console.log(res);
                
                utils.saveImageToPhotosAlbum(res.tempFilePaths[0])
                    .catch(err => {
                        console.log(err);
                    });
            }
        });
    },

    onLoad() {
        wx.getSavedFileList({
            success(res) {
                console.log(res);
            }
        });
    }
});
