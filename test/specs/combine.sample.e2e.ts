import TabBar from '../screenobjects/components/TabBar.ts';
import LoginScreen from '../screenobjects/LoginScreen.ts';
import NativeAlert from '../screenobjects/components/NativeAlert.ts';
import FormScreen from "../screenobjects/FormsScreen.ts";
import LoginPage from '../pageobjects/login.page.ts'
import SecurePage from '../pageobjects/secure.page.ts'
import DropdownPage from '../pageobjects/dropdown.page.ts';
import { expect } from '@wdio/globals'
import allure from '@wdio/allure-reporter';


describe('WEB LOGIN -> APP LOGIN -> WEB DROPDOWN -> APP OPEN FORM,', () => {
    it('Compile web and app tests', async () => {
        // Web login  
        allure.startStep('WEB LOGIN');
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'));
        allure.endStep();

        // App login    
        allure.startStep('APP LOGIN');
        await TabBar.openLogin()
        await LoginScreen.waitForIsShown(true)
        await LoginScreen.tapOnLoginContainerButton()
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' })
        await NativeAlert.topOnButtonWithText('OK')
        await NativeAlert.waitForIsShown(false)
        allure.endStep();

        // Web dropdown
        allure.startStep('WEB DROPDOWN');
        await DropdownPage.open()
        await DropdownPage.selectValue('Option 1')
        await expect(DropdownPage.selectedOption).toHaveText('Option 1');
        allure.endStep();

        // App open Form
        allure.startStep('APP OPEN FORM');
        await TabBar.openForms()
        await FormScreen.waitForIsShown(true);
        const text = "Hello, this is a demo app";
        await FormScreen.input.setValue(text);
        await expect(FormScreen.inputTextResult).toHaveText(
            expect.stringContaining(text)
        );
        allure.endStep();
    });
})