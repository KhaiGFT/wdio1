export function getDeviceFromCapabilities(key: string): WebdriverIO.Browser {
    if (driver.hasOwnProperty(key)) {
        return driver[key as keyof typeof driver] as WebdriverIO.Browser
    } else{
        return driver
    }
}