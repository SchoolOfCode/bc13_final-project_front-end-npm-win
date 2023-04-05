const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rs139i",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
  compilerOptions: {
    sourceMap: false,
    types: ["cypress", "chai"],
    baseUrl: "https://circlesapp.netlify.app/",
  },
});
