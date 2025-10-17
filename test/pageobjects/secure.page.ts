import { $ } from '@wdio/globals'
import Page from './page.js';
import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    private get device() {
        return getDeviceFromCapabilities('browser')
    }

    public get flashAlert () {
        return this.device.$('#flash');
    }
}

export default new SecurePage();
