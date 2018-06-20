
const {
    Scene,
    Element,
    Label,
    Share,
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

            this.canvasScene
                .append(new Background({
                    color: '#dddddd',
                    image: 'http://img3.redocn.com/tupian/20150106/aixinxiangkuang_3797284.jpg'
                }))
                .draw();
        }
    },

    ready() {
        this.render();
    }
});
