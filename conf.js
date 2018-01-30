"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.test.page.js'],
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
        print: function () { }
    },
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        protractor_1.browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },
};
//# sourceMappingURL=conf.js.map