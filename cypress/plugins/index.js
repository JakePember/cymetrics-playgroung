const cymetrics = require('cymetrics')
const series = require('async').series
const {exec} = require('child_process');

module.exports = (on, config) => {
    on('before:run', async (config) => {
        // "test" : "npm run clean-reports && npx cypress run && npm run posttest",
        await series([() => exec('npm run clean-reports')]);
    })
    on('after:run', async (config) => {
        await series([
            () => exec('npm run posttest')
        ]);
        await cymetrics.balance(config)
    })
}
