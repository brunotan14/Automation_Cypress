const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't6m9hw',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Automation Report',
      reportTitle: 'Cypress Automation Report',
    },
    baseUrl: "https://www.automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
