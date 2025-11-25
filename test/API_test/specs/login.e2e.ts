import AuthenticationService from '../services/authenticationService';
import { JSON_Reader } from '../helpers/jsonReader';
import _ from 'lodash';

describe('My Login API', () => {
    //read test data file to get test data and config template for Login API
    
    let LoginAPI_config:any;

    before(async () => {
        // Read test data file
        let authenticationServiceTestData = await JSON_Reader('test/API_test/test_data/authenticationService.json');
        const email = authenticationServiceTestData.loginAPI.testData.validCredentials.email;
        const password = authenticationServiceTestData.loginAPI.testData.validCredentials.password;
        const LoginAPI_configTemplate = authenticationServiceTestData.loginAPI.configTemplate;
        //generate request config
        LoginAPI_config = await AuthenticationService. generate_loginAPIConfig(email, password, LoginAPI_configTemplate);
    });

    it('@loginSuccess - Succesful Login By Valid Credentials', async () => {
        const testConfig = _.cloneDeep(LoginAPI_config);
        const response = await AuthenticationService.make_request(testConfig, 200);
        //validate response
        await AuthenticationService.validate_successful_loginResponse(response);
    })

    it('@loginMissingPassword - Unsuccesful Login By Email only', async () => {
        let testConfig = _.cloneDeep(LoginAPI_config);
        //delete password from request body
        const body = JSON.parse(testConfig.data);
        delete body.password;
        testConfig.data = JSON.stringify(body);
        //call login API
        const response = await AuthenticationService.make_request(testConfig, 400);
        await AuthenticationService.validate_missingPassword_loginResponse(response);
    })
})

