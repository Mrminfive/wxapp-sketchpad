
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
const outputList = generateOutput(config.output);

function generateOutput(config) {
    let targetTypeMap = ['cjs', 'esm'];

    return targetTypeMap.map(target => {
        return {
            ...config,
            file: resolve(`../dist/sketchpad${target === 'cjs' ? '' : '.' + target}.js`),
            name: 'WxappSketchpad"',
            format: target,
            sourcemap: true
        };
    });
}

async function build() {
    const bundle = await rollup.rollup(config.base);

    await Promise.all(outputList.map(output => bundle.write(output)));
    console.log(chalk.green('build success'));
}

build();
