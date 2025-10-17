import { config as baseConfig } from "./wdio.shared.conf.js";
import { join } from "node:path";

export const config: WebdriverIO.MultiremoteConfig = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../test/specs/**/test.**.ts"],
    capabilities: {
    browser: {
        capabilities: {
            browserName: 'chrome'
        }
    },
    mobile: {
        capabilities: {
            platformName: "iOS",
            "wdio:maxInstances": 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/

            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            "appium:deviceName": "iPhone 16",
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            "appium:platformVersion": "18.4",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:noReset": false,
            // The path to the app
            "appium:app": join(
                process.cwd(),
                "apps",
                // Change this name according to the app version you downloaded
                "ios.simulator.wdio.native.app.v1.0.8.zip"
            ),
            "appium:newCommandTimeout": 240,
            // This is needed to wait for the webview context to become available
            "appium:webviewConnectTimeout": 5000,
            }
        }
    },
};