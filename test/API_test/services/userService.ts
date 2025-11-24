import Axios_API_clients from './API_clients';
import allureReporter from '@wdio/allure-reporter';
import { faker } from "@faker-js/faker";
import { expectToMatchSchema } from "../utils/validateSchema";

class UserService extends Axios_API_clients {

    // create User API
    async generate_createUserAPIConfig(configTemplate?: any) {
        //1 - define request data
        const name = faker.person.firstName();
        const job = faker.person.jobTitle();
        let data = JSON.stringify({
            "name": name,
            "job": job
        });
        //2 - update request config template with data
        let config = configTemplate;
        config.data = data;
        return config;
    }

    async validate_successful_createUserAPIResponse(response:any,requestConfig?:any) {
        await allureReporter.step('Validating response',async () => {
            await allureReporter.step('Validating response has created person',async () => {
                expect(response.data.name).toHaveText(requestConfig.data.name);
                expect(response.data.job).toHaveText(requestConfig.data.job);
            });
            await allureReporter.step('Validating response have id and createdAt',async () => {
                expect(response.data).toHaveProperty("id")
                expect(response.data.createdAt).toHaveText(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/i)
            });
        })
    }

    // get User API
    async generate_getUserAPIConfig(userID:string, configTemplate?: any) {
        //2 - update request config template with data
        let config = configTemplate;
        console.log(`config.url before replace: ${config.url}`);
        config.url = config.url.replace("{userID}", userID);
        return config;
    }


    async validate_successful_getUserAPIResponse(response:any,userID:string,responseSchema?:any) {
        await allureReporter.step('Validating response',async () => {
            expect(response.data.data.id).toHaveText(userID);
            expectToMatchSchema(response.data, responseSchema);
        })
    }

    //update User API
    async generate_updateUserAPIConfig(userID:string, configTemplate?: any) {
        //1 - define request data
        let config = await this.generate_createUserAPIConfig(configTemplate);
        config.url = config.url.replace("{userID}", userID);
        return config;
    }

    async validate_successful_updateUserAPIResponse(response:any,requestConfig?:any) {
        await allureReporter.step('Validating response',async () => {
            await allureReporter.step('Validating response has updated user',async () => {
                expect(response.data.name).toHaveText(requestConfig.data.name);
                expect(response.data.job).toHaveText(requestConfig.data.job);
        })
            await allureReporter.step('Validating response have updateAt',async () => {
                expect(response.data.updatedAt).toHaveText(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/i)
            });
        })
    }

}

export default new UserService();

