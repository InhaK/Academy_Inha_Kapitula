let AllureReporter = require('jasmine-allure-reporter');


// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: 0,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1,

  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['./tests/**.js'],

  allScriptsTimeout: 1200000,
  getPageTimeout: 1200000,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    jasmine.getEnv().afterEach(async () => {
      let screen = await browser.takeScreenshot();
      await allure.createAttachment("Screenshot", () => {
        return new Buffer(screen, "base64")
      }, 'image/png')();
    });
  }

};