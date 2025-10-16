import { expect } from '@wdio/globals'

describe('iOS Settings App Test', () => {

  it('should open Settings > General > verify About exists', async () => {
    // console.log('📱 Launching Settings app...')
    // await driver.execute('mobile: launchApp', { bundleId: 'com.apple.Preferences' })

    const general = await $('~General')
    await expect(general).toBeDisplayed()
    console.log('✅ General option is visible.')

    await general.click()

    const about = await $('~About')
    await expect(about).toBeDisplayed()
    console.log('✅ About option is visible inside General.')
  })

})