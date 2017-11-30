import {browser} from "protractor";

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./dist/specs/spec.js'],
    capabilities: {
        browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=1200,800']
      },
      unexpectedAlertBehavior: 'dismiss',
      handlesAlerts: true,
      nativeEvents: false
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors: true
    },
    //allScriptsTimeout: 90000,

    onPrepare: () => {
        const PixDiff = require('pix-diff');
        browser.pixDiff = new PixDiff(
            {
                basePath: 'path/baseline/',
                diffPath: 'path/diff/',
            }
        );
    },
};