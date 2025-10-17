import { config as baseConfig } from "./wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../test/specs/**/test.**.ts"],
    capabilities: {
            browser: {
                capabilities: {
                    browserName: 'chrome',
                    'wdio:devtoolsOptions': {
                    headless: false
            }
        }
    }
    }
};