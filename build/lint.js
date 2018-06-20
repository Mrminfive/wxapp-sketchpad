
/**
 * @description eslint
 * @author: minfive
 * @createDate: 2018-06-15
 * @lastModify minfive
 * @lastDate: 2018-06-15
 */

const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

const lint = function(files) {
    return new Promise((resolve, reject) => {
        const opts = process.argv.splice(2);
        opts.push(files.join(' '));
        const eslint = spawn('eslint', opts, { shell: true, stdio: 'inherit' });

        eslint.on('exit', code => code === 1 && reject());
    });
};

const getDiff = function() {
    const cmd = "git diff HEAD --name-only --diff-filter=ACMR | grep -v 'example' | grep -v 'dist' | grep -E '.js$'";

    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (stdout === '') process.exit(0);

            if (!error) {
                let files = stdout.split('\n');
                files.pop();
                resolve(files);
            } else {
                reject(stderr);
            }
        });
    });
};

async function check() {
    try {
        const files = await getDiff();
        await lint(files);
    } catch (err) {
        if (err) console.log(err);
        process.exit(1);
    }
}

check();
