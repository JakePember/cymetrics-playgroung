const cymetrics = require('cymetrics')
const series = require('async').series
const {exec} = require('child_process');

module.exports = (on, config) => {
    on('before:run', (config) => {
        series([() => exec('npm run clean-reports')]);
    })
    on('after:run', async (config) => {
        series([
            () => exec('npm run posttest')
        ]);
        await cymetrics.balance(config)
    })
}
