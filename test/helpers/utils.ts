export function getDeviceFromCapabilities(key: string): WebdriverIO.Browser {
    const device = driver[key as keyof typeof driver] as WebdriverIO.Browser
    return device
}