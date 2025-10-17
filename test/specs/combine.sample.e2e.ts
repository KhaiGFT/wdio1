import TabBar from '../screenobjects/components/TabBar.ts';
import LoginScreen from '../screenobjects/LoginScreen.ts';
import NativeAlert from '../screenobjects/components/NativeAlert.ts';
import FormScreen from "../screenobjects/FormsScreen.ts";
import LoginPage from '../pageobjects/login.page.ts'
import SecurePage from '../pageobjects/secure.page.ts'
import DropdownPage from '../pageobjects/dropdown.page.ts';
import { expect, driver } from '@wdio/globals'


describe('WEB LOGIN -> APP LOGIN -> WEB DROPDOWN -> APP OPEN FORM,', () => {
    it('WEB LOGIN should be successfully', async () => {
        // Web login  
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });

    it('APP LOGIN should be successfully', async () => {
        // App login    
        await TabBar.openLogin()
        await LoginScreen.waitForIsShown(true)
        await LoginScreen.tapOnLoginContainerButton()
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' })
        await NativeAlert.topOnButtonWithText('OK')
        await NativeAlert.waitForIsShown(false)
    });

    it('WEB dropdown should be successfully', async () => {
        // Web Login
        await DropdownPage.open()
        await DropdownPage.selectValue('Option 1')
    });

    it('APP Form should be successfully', async () => {
        // App open Form
        await TabBar.openForms()
        await FormScreen.waitForIsShown(true);
        const text = "Hello, this is a demo app";
        await FormScreen.input.setValue(text);
        await expect(FormScreen.inputTextResult).toHaveText(
            expect.stringContaining(text)
        );
    });
})