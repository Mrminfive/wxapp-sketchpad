
// const { Scene, Element, Label, Share } = require('../../packages/sketchpad/index.js');

Component({
    properties: {
        info: {
            type: Object,
            value: {},
            observer() {
                this.render();
            }
        }
    },

    data: {},

    methods: {
        bindLongTap() {
            console.log('aa');
        },

        render() {
            console.log(this.data.info);
        }
    }
});
