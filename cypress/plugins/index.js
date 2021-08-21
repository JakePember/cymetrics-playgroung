const load_balancer = require('../../node_modules/load_balancer/main')
const series = require('async').series
const {exec} = require('child_process');

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    on('before:run', (config) => {
        // "test" : "npm run clean-reports && npx cypress run && npm run posttest",
        series([() => exec('npm run clean-reports')]);
    })
    on('after:run', async (config) => {
        series([
            () => exec('npm run posttest')
        ]);
        await load_balancer.balance(config)
    })
}
