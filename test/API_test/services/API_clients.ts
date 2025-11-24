import axios from 'axios';
import allureReporter from '@wdio/allure-reporter'

const BASE_URL = process.env.BASE_URL || 'https://reqres.in';


export default class Axios_API_clients {
    async make_request(config: any, expected_response_code: number) {
        return await allureReporter.step(
            `Call ${config.method?.toUpperCase()} ${BASE_URL}${config.url} - (Expect ${expected_response_code})`,
            async () => {
                try {
                    // Create axios instance
                    const api = axios.create({
                        timeout: 50000,
                        baseURL: BASE_URL,
                        validateStatus: () => true 
                    });

                    // Logging interceptors
                    api.interceptors.request.use(config => {
                        console.log(`➡️ Request: ${config.method?.toUpperCase()} ${BASE_URL}${config.url}`);
                        return config;
                    });

                    api.interceptors.response.use(
                        response => {
                            console.log(`⬅️ Response: ${response.status} ${response.data ? JSON.stringify(response.data) : ''}`);
                            return response;
                        },
                        error => {
                            // Only network errors reach here now
                            console.error("❌ Network / Transport Error:", error.message);
                            throw error;
                        }
                    );

                    // ------------------------------
                    // 1 - SEND THE REQUEST
                    // ------------------------------
                    let response = await allureReporter.step("Send API Request", async () => {
                        const res = await api.request(config);

                        // Logging inside step
                        await allureReporter.addStep("API Request Details", {
                            name: "Request",
                            content: `
                                Method: ${config.method?.toUpperCase()}
                                URL: ${config.url}
                                Data: ${config.data}
                            `,
                        });
                        //console.log("Response received:", JSON.stringify(res));
                        await allureReporter.addStep("API Response Details", {
                            name: "Response",
                            content: `
                                Status: ${res?.status ? JSON.stringify(res.status) : ''}
                                Data: ${res?.data ? JSON.stringify(res.data) : ''}
                            `,
                        });
                        return res;
                    });
                    // ------------------------------
                    // 2 - VALIDATE STATUS CODE
                    // ------------------------------

                    await allureReporter.step(
                        `Validate Status Code (expected ${expected_response_code})`,
                        async () => {
                            // Perform validation
                            if (response.status !== expected_response_code) {
                                throw new Error(
                                    `Expected status ${expected_response_code} but got ${response.status}`
                                );
                            }
                        }
                    );
                    // ------------------------------
                    // 3 - RETURN RESPONSE
                    // ------------------------------
                    return response;

                } catch (error) {
                    allureReporter.addStep(`❌ Error: ${error}`, { status: "failed" });
                    throw error; // allow WDIO / test runner to fail
                }
            }
        );
    }
}