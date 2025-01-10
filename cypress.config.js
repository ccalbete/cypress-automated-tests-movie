const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.movie.com.uy/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
