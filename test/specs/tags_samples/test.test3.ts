
import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.ts'
import HomePage from '../../pageobjects/home.page.ts'


describe('Test 3 @full', () => {
    it('Scenario 3.1 @smoke',  async () => {
        await LoginPage.open()
        await LoginPage.login('autoQAGFT', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin')
        );
    });

    it('Scenario 3.2',  async () => {
        await LoginPage.open()
        await LoginPage.login('autoQAGFT', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin')
        );
    });
})

