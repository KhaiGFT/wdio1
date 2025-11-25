import UserService from '../services/userService';
import { JSON_Reader } from '../helpers/jsonReader';
import _ from 'lodash';



describe('User APIs', () => {

    
    it('create User API - Succesful create a user', async () => {
        //CREATE USER
        let userServiceTestData = await JSON_Reader('test/API_test/test_data/userService.json');
        const createUserAPI_configTemplate = userServiceTestData.createUserAPI.configTemplate;
        //generate request config for create user
        const createUserAPI_config = await UserService.generate_createUserAPIConfig(createUserAPI_configTemplate);
        const createUserAPI_testConfig = _.cloneDeep(createUserAPI_config);
        const createUserAPI_response = await UserService.make_request(createUserAPI_testConfig, 201);
        //validate response
        await UserService.validate_successful_createUserAPIResponse(createUserAPI_response,createUserAPI_testConfig);

        //GET USER AFTER CREATING
        //const userID = createUserAPI_response.data.id;
        //console.log(`Created user ID: ${createUserAPI_response.data.id}`);
        const userID = '2';

        const getUserAPI_configTemplate = userServiceTestData.getUserAPI.configTemplate;
        const getUserAPI_responseSchema = userServiceTestData.getUserAPI.responseSchema;
   
        //generate request config for get user
        const getUserAPI_config = await UserService.generate_getUserAPIConfig(userID,getUserAPI_configTemplate);
        const getUserAPI_testConfig = _.cloneDeep(getUserAPI_config);
        const getUserAPI_response = await UserService.make_request(getUserAPI_testConfig, 200);
        //validate response for get user
        await UserService.validate_successful_getUserAPIResponse(getUserAPI_response,userID,getUserAPI_responseSchema);

        //UPDATE USER AFTER CREATING
        const updateUserAPI_configTemplate = userServiceTestData.updateUserAPI.configTemplate;
        //generate request config for update user
        const updateUserAPI_config = await UserService.generate_updateUserAPIConfig(userID,updateUserAPI_configTemplate);
        const updateUserAPI_testConfig = _.cloneDeep(updateUserAPI_config);
        const updateUserAPI_response = await UserService.make_request(updateUserAPI_testConfig, 200);
        //validate response for update user
        await UserService.validate_successful_updateUserAPIResponse(updateUserAPI_response,updateUserAPI_testConfig);

        //DELETE USER AFTER CREATING
        const deleteUserAPI_configTemplate = userServiceTestData.deleteUserAPI.configTemplate;
        //generate request config
        const deleteUserAPI_config = await UserService.generate_updateUserAPIConfig(userID,deleteUserAPI_configTemplate);
        const deleteUserAPI_testConfig = _.cloneDeep(deleteUserAPI_config);
        await UserService.make_request(deleteUserAPI_testConfig, 204);
    })
})