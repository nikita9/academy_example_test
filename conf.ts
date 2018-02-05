import {browser} from "protractor";
import {SpecReporter} from "jasmine-spec-reporter";

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.homepage.navmenu.js'],

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
        print: function() {}
    },

    SELENIUM_PROMISE_MANAGER: false,

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },
};