const chai = require('chai');
exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 9515,
    path: '/',
    specs: ['specs/search-destination.js'],
    maxInstances: 2,
    logLevel: 'silent',
    capabilities: [{
        browserName: 'chrome'
    }],
    baseUrl: 'https://staging-ski.onlinetravelgroup.co.uk',
    reporters: ['dot',
        ['allure', {
            outputDir: './allure-results',
        }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000 // thoi gian chay toi da 1 test case
    },
    before: () => {
        global.expect = chai.expect;
    }
}