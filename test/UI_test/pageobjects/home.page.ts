import { $ } from '@wdio/globals'
import Page from './page.js';
import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    private get device() {
        return getDeviceFromCapabilities('browser')
    }

    public get title () {
        return this.device.$('#welcomeTitle');
    }

    public get sampleInput (){
        return this.device.$('#sampleInput');
    }

    public get savedList (){
        return this.device.$('#savedList');
    }

    public get saveButton (){
        return this.device.$('#saveBtn');
    }

    public async inputTextForSampleInput (inputText: string) {
        await this.sampleInput.setValue(inputText);
    }

}

export default new HomePage();
