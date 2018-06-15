
/**
 * @description rollup基本配置
 * @author: minfive
 * @createDate: 2018-06-15
 * @lastModify minfive
 * @lastDate: 2018-06-15
 */

const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const version = process.env.VERSION || require('../package.json').version;
const banner =
`/**
  * wxapp-sketchpad v${version}
  * (c) ${new Date().getFullYear()} minfive
  * @license MIT
  */`;

const { resolve } = require('./utils.js');

module.exports = {
    base: {
        input: resolve('../src/index.js'),
        plugins: [
            nodeResolve(),
            babel({
                exclude: 'node_modules/**',
                babelrc: true,
                comments: true,
                runtimeHelpers: true
            })
        ]
    },
    output: {
        banner
    }
};
