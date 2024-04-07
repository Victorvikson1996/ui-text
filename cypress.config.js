const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/results-[hash].xml'
    }
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    //pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
