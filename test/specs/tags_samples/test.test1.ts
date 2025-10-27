import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.ts'
import HomePage from '../../pageobjects/home.page.ts'


describe('Test 1', () => {
    it('Scenatio 1.1 @smoke @full',  async () => {
        await LoginPage.open()
        await LoginPage.login('autoQAGFT', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin')
        );
    });

    it('Scenatio 1.2 @full',  async () => {
        await LoginPage.open()
        await LoginPage.login('autoQAGFT', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin')
        );
    });
})

