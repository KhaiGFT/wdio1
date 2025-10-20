import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import SecurePage from '../pageobjects/secure.page.ts'


describe('Login form web', () => {
    it('should allow access with correct credentials',  async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });
})

