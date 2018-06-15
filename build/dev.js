
/**
 * @description build 脚本
 * @author: minfive
 * @createDate: 2018-06-15
 * @lastModify minfive
 * @lastDate: 2018-06-15
 */

const chalk = require('chalk');
const rollup = require('rollup');
const { resolve } = require('./utils.js');

const config = require('./rollup.base.config.js');
const output = {
    file: resolve('../example/packages/sketchpad/index.js'),
    name: 'WxappSketchpad',
    format: 'cjs'
};

function shortPath(_path) {
    return _path.replace(resolve('../'), '');
}

async function build() {
    rollup.watch({
        ...config.base,
        output,
        watch: {
            chokidar: true,
            include: 'src/**'
        }
    })
        .on('event', event => {
            switch (event.code) {
                case 'BUNDLE_START':
                    console.log(chalk.yellow(`[bundle start]: ${shortPath(event.input)}`));
                    break;
                case 'BUNDLE_END':
                    console.log(chalk.yellow(`[bundle end]: ${shortPath(event.input)}`));
                    break;
                case 'ERROR':
                    throw event;
                case 'FATAL':
                    console.log(chalk.red(`[fatal]: ${JSON.stringify(event)}`));
                    break;
            }
        });

    console.log(chalk.green('start watch file'));
}

build();
