import { config as baseConfig } from "./wdio.shared.conf.js";


export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../test/API_test/specs/**/*.ts"],
    suites:{
        login: ["../test/API_test/specs/login.api.e2e.ts"],
    },
    capabilities: [

                    {
                    browserName: 'chrome',
                    'goog:chromeOptions': {
                        args: ['--headless', '--disable-gpu'],
                    }
                }       
    ]
};