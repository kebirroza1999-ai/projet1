const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
   mochaFile: 'results/my-test-output.xml',
    toConsole: true,},
 // reporter: 'cypress-mochawesome-reporter',//pour mocha
  
  e2e: {
    //capture video/ screenshot
    video: true,// true si on veut avoir une capture video
    screenshotsFolder: 'cypress/screenshots',// la on va stocké la capture
    videosFolder: 'cypress/videos',// capture video aussi


    setupNodeEvents(on, config) {
       //allureCypress(on, config, {
        //resultsDir: "allure-results",
      //});
      //import
       //require('cypress-mochawesome-reporter/plugin')(on);
       const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config;
     
    

    },
  },
});
