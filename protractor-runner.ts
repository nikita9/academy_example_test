import { spawn } from 'child_process';
const selenium = require('selenium-standalone');

//version: 2.47.0 supports moveTo and IE
//version chrome: 2.33 supports most of functions
selenium.install({
        version: '3.8.1',
        drivers: {
            chrome: {
                version: '2.39',
                arch: process.arch,
                baseURL: 'https://chromedriver.storage.googleapis.com'
            },

        },
        requestOpts: { // see https://github.com/request/request#requestoptions-callback
            timeout: 10000
        }
    },
    (err) => {
        if (err) {
            throw err;
        }
        console.log('Selenium is updated successfully');

        selenium.start({
                // check for more recent versions of selenium here:
                // https://selenium-release.storage.googleapis.com/index.html
                version: '3.8.1',
                drivers: {
                    chrome: {
                        // check for more recent versions of chrome driver here:
                        // https://chromedriver.storage.googleapis.com/index.html
                        version: '2.39',
                        arch: process.arch,
                        baseURL: 'https://chromedriver.storage.googleapis.com'
                    },
                    // ie: {
                    // check for more recent versions of internet explorer driver here:
                    // https://selenium-release.storage.googleapis.com/index.html
                    //   version: '2.53.1',
                    //   arch: process.arch,
                    // }
                },
                requestOpts: { // see https://github.com/request/request#requestoptions-callback
                    timeout: 10000
                }
            },
            (err) => {
                if (err) {
                    throw err;
                }
                console.log('Selenium started successfully');

                const child = spawn('npm run test',[
                    'stdio: inherit',
                    'stdin: inherit',
                    'shell: true'
                ]);

                child.on('exit', (code) => process.exit(code));
            });
    });
