import TabBar from '../screenobjects/components/TabBar.ts';
import LoginScreen from '../screenobjects/LoginScreen.ts';
import NativeAlert from '../screenobjects/components/NativeAlert.ts';
import FormScreen from "../screenobjects/FormsScreen.ts";
import LoginPage from '../pageobjects/login.page.ts'
import HomePage from '../pageobjects/home.page.ts'
import { expect } from '@wdio/globals'
import allure from '@wdio/allure-reporter';


describe('Test compile login on web and app', () => {
    it('Compile web and app tests', async () => {
        // Web login  
        allure.startStep('Veirfy login on web');
        await LoginPage.open()
        await LoginPage.login('admin', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin'))
        allure.endStep();

        // App login    
        allure.startStep('Veirfy login on app');
        await TabBar.openLogin()
        await LoginScreen.waitForIsShown(true)
        await LoginScreen.tapOnLoginContainerButton()
        await LoginScreen.submitLoginForm({ username: 'autoQA@gft.com', password: 'Test1234!' })
        await NativeAlert.topOnButtonWithText('OK')
        await NativeAlert.waitForIsShown(false)
        allure.endStep();

        // Web input text
        allure.startStep('On Web, input text = autoQA@gft.com');
        await HomePage.inputTextForSampleInput('autoQA@gft.com')
        await expect(HomePage.sampleInput).toHaveValue('autoQA@gft.com');
        allure.endStep();

        // App open Form
        allure.startStep('Verfy input on app form');
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