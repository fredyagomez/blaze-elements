const packageJson = require( './package.json' );

const config = {
  "suites": [
    ( process.env.WCT_INDEX ? process.env.WCT_INDEX : './index.test.html' )
  ],
  "plugins": {
    "sauce": {
      "disabled": true,
      // See https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
      "browsers": [{
          "browserName": "MicrosoftEdge",
          "platform": "Windows 10",
          "version": "14.14393"
        }, {
          "browserName": "internet explorer",
          "platform": "Windows 10",
          "version": "11.103"
        }, {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "54.0"
        },  {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "beta"
        }, {
          "browserName": "safari",
          "platform": "macOS 10.12",
          "version": "10.0"
        }
      ]
    }
  }
};

module.exports = config;
