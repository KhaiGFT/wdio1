import Axios_API_clients from './API_clients';
import allureReporter from '@wdio/allure-reporter';

class AuthenticationService extends Axios_API_clients {

    // Login API
    async generate_loginAPIConfig(email: string|null, password: string|null, configTemplate?: any) {
        //1 - define request data
        let data = JSON.stringify({
            "email": email,
            "password": password
        });

        //2 - update request config template with data
        let config = configTemplate;
        config.data = data;
        return config;
    }

    async validate_successful_loginResponse(response:any) {
        await allureReporter.step('Validating response',async () => {
            await allureReporter.step('Validating response contains token',async () => {
                expect(response.data).toHaveProperty('token');
            });
            await allureReporter.step('Validating token has 17 characters',async () => {
                expect(response.data.token).toHaveText(/\w{17}/i)
            });
        })
    }

    async validate_missingPassword_loginResponse(response:any) {
        await allureReporter.step('Validating response',async () => {
            await allureReporter.step('Validating response contains token',async () => {
                expect(response.data).toHaveProperty('error');
            });
            await allureReporter.step('Validating token has 17 characters',async () => {
                expect(response.data.error).toHaveText("user not found")
            });
        })
    }
}

export default new AuthenticationService();

