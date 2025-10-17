import { browser, multiremotebrowser } from '@wdio/globals'
import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * Opens a sub page of the page
     */
    async open (path: string):Promise<string> {
        return getDeviceFromCapabilities('browser').url(`/${path}`)
    }
}