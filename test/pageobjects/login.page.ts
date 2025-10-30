import Page from './page.js';
import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get device() {
        return getDeviceFromCapabilities('browser')
    }

    public get inputUsername () {
        return this.device.$('#username');
    }

    public get inputPassword () {
        return this.device.$('#password');
    }

    public get btnSubmit () {
        return this.device.$('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
