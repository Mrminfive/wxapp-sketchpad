
const {
    Scene,
    Element,
    Label,
    Background
} = require('../../packages/sketchpad/index.js');

Component({
    properties: {
        info: {
            type: Object,
            value: {}
        }
    },

    data: {
        width: null,
        height: null
    },

    methods: {
        bindLongTap() {
            console.log('aa');
        },

        render() {
            this.canvasScene = new Scene('m-canvas', {
                context: this,
                original: [750, 1334],
                initRect: rect => {
                    this.setData({
                        width: rect.width + 'px',
                        height: rect.height + 'px'
                    });
                }
            });

            wx.showLoading();

            this.canvasScene
                .append(new Background({
                    color: '#dddddd',
                    image: 'http://img3.redocn.com/tupian/20150106/aixinxiangkuang_3797284.jpg'
                }))
                .append(new Label({
                    text: '这是我的内容啊这是我的',
                    color: '#aad375',
                    fontSize: 28,
                    maxWidth: '100%',
                    zIndex: 2
                }))
                .append(new Element({
                    left: 100,
                    top: 100,
                    width: '50%',
                    height: 180 * 1.3,
                    text: '这是自定义节点啊',
                    fontSize: 60,
                    border: '10px red',
                    color: 'blue',
                    backgroundColor: '#dddddd',
                    backgroundImage: 'http://img.zcool.cn/community/01ca8c573c04b832f8757cb97b2444.jpg@1280w_1l_2o_100sh.jpg',
                    textAlign: 'center',
                    textVerticalAlign: 'middle',
                    padding: [10, 20, 10, 20]
                }))
                .draw()
                .then(() => {
                    wx.hideLoading();
                });
        }
    },

    ready() {
        this.render();
    }
});
