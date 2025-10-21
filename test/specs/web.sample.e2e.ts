import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import HomePage from '../pageobjects/home.page.ts'


describe('Login form web', () => {
    it('should allow access with correct credentials',  async () => {
        await LoginPage.open()
        await LoginPage.login('admin', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin'))
    });
})

