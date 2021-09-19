const cymetrics = require('cy-metricss')
const series = require('async').series
const {exec} = require('child_process');

module.exports = (on, config) => {
    on('before:run', (config) => {
        // "test" : "npm run clean-reports && npx cypress run && npm run posttest",
        series([() => exec('npm run clean-reports')]);
    })
    on('after:run', async (config) => {
        series([
            () => exec('npm run posttest')
        ]);
        await cymetrics.balance(config)
    })
}
