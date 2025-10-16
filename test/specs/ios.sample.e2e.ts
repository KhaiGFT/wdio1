import { expect } from '@wdio/globals'

describe('iOS Settings App Test', () => {

  it('should open Settings > General > verify About exists', async () => {
    // Step 1: Đảm bảo app Settings mở
    console.log('📱 Launching Settings app...')
    await driver.execute('mobile: launchApp', { bundleId: 'com.apple.Preferences' })

    // Step 2: Chờ phần tử "General" xuất hiện
    const general = await $('~General')
    await expect(general).toBeDisplayed()
    console.log('✅ General option is visible.')

    // Step 3: Click vào "General"
    await general.click()

    // Step 4: Chờ phần tử "About" xuất hiện
    const about = await $('~About')
    await expect(about).toBeDisplayed()
    console.log('✅ About option is visible inside General.')

    // Step 5: (Tùy chọn) Click vào "About"
    // await about.click()
  })

})