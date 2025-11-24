import TabBar from '../screenobjects/components/TabBar.ts';
import LoginScreen from '../screenobjects/LoginScreen.ts';
import NativeAlert from '../screenobjects/components/NativeAlert.ts';
import FormScreen from "../screenobjects/FormsScreen.ts";
import LoginPage from '../pageobjects/login.page.ts'
import HomePage from '../pageobjects/home.page.ts'
import { expect } from '@wdio/globals'
import allure from '@wdio/allure-reporter';
import UserService from '../../API_test/services/userService.ts';
import { JSON_Reader } from '../../API_test/utils/jsonReader.ts';
import _ from 'lodash';


describe('Test compile login on web and app and API', () => {
    it('Compile web and app tests and API', async () => {
        // Web login  
        allure.startStep('Veirfy login on web');
        await LoginPage.open()
        await LoginPage.login('autoQAGFT', 'admin')
        await expect(HomePage.title).toBeExisting()
        await expect(HomePage.title).toHaveText(
            expect.stringContaining('Welcome Admin')
        );
        allure.endStep();

        //API
        let userServiceTestData = await JSON_Reader('test/API_test/test_data/userService.json');
        const userID = '2';
        const getUserAPI_configTemplate = userServiceTestData.getUserAPI.configTemplate;
        const getUserAPI_responseSchema = userServiceTestData.getUserAPI.responseSchema;
    
        //generate request config for get user
        const getUserAPI_config = await UserService.generate_getUserAPIConfig(userID,getUserAPI_configTemplate);
        const getUserAPI_testConfig = _.cloneDeep(getUserAPI_config);
        const getUserAPI_response = await UserService.make_request(getUserAPI_testConfig, 200);
        //validate response for get user
        await UserService.validate_successful_getUserAPIResponse(getUserAPI_response,userID,getUserAPI_responseSchema);

        // App login    
        allure.startStep('Veirfy login on app');
        await TabBar.openLogin()
        await LoginScreen.waitForIsShown(true)
        await LoginScreen.tapOnLoginContainerButton()
        await LoginScreen.submitLoginForm({ username: 'autoQA@gft.com', password: 'Test1234!' })
        await NativeAlert.topOnButtonWithText('OK')
        await NativeAlert.waitForIsShown(false)
        allure.endStep();

        //API
        //UPDATE USER AFTER CREATING
        const updateUserAPI_configTemplate = userServiceTestData.updateUserAPI.configTemplate;
        //generate request config for update user
        const updateUserAPI_config = await UserService.generate_updateUserAPIConfig(userID,updateUserAPI_configTemplate);
        const updateUserAPI_testConfig = _.cloneDeep(updateUserAPI_config);
        const updateUserAPI_response = await UserService.make_request(updateUserAPI_testConfig, 200);
        //validate response for update user
        await UserService.validate_successful_updateUserAPIResponse(updateUserAPI_response,updateUserAPI_testConfig);


        // Web input text
        allure.startStep('On Web, input text = autoQA@gft.com');
        const inputTextArray = ['autoQA@gft.com','test@gft.com','auto@gft.com','autoQA2026@gft.com']
        for (const element of inputTextArray) {
            await HomePage.inputTextForSampleInput(element)
            await HomePage.saveButton.click()
            await expect(HomePage.savedList).toHaveText(
                expect.stringContaining(element)
            );
        }
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