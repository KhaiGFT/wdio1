import { $ } from '@wdio/globals'
import Page from './page.js';
import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropDownPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get device() {
        return getDeviceFromCapabilities('browser')
    }

    public get dropdownContainer (){
        return this.device.$('#dropdown');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async selectValue (value: string) {
        await this.dropdownContainer.selectByVisibleText(value);
    }

    public get selectedOption(){
        return this.dropdownContainer.$('option:checked')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('dropdown');
    }
}

export default new DropDownPage();
