import Page from './page.js';
import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ControlsPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get device() {
        return getDeviceFromCapabilities('browser')
    }

    // ----- GETTERS (elements) -----

    // Text input
    public get textInput () {
        return this.device.$('#input_text');
    }
    public get textInputValue () {
        return this.device.$('#value_input_text');
    }

    // Textarea
    public get textareaNotes () {
        return this.device.$('textarea[name="notes"]');
    }
    public get textareaValue () {
        return this.device.$('#value_textarea');
    }

    // Number
    public get numberInput() {
        return this.device.$('[data-testid="input-number"]');
    }
    public get numberValue() {
        return this.device.$('#value_number');
    }

    // Checkbox (single)
    public get checkboxSubscribe() {
        return this.device.$('#chk_subscribe');
    }
    public get checkboxValue() {
        return this.device.$('#value_chk_subscribe');
    }

    // Radio group
    public get radioLow() {
        return this.device.$('#prio_low');
    }
    public get radioMed() {
        return this.device.$('#prio_med');
    }
    public get radioHigh() {
        return this.device.$('#prio_high');
    }
    public get radioValue() {
        return this.device.$('#value_priority');
    }

    // Select (dropdown)
    public get selectOne() {
        return this.device.$('#select_one');
    }
    public get selectOneValue() {
        return this.device.$('#value_select_one');
    }

    // Date picker
    public get datePicker() {
        return this.device.$('#date_pick');
    }
    public get dateValue() {
        return this.device.$('#value_date');
    }

    // Color picker
    public get colorPicker() {
        return this.device.$('#color_picker');
    }
    public get colorValue() {
        return this.device.$('#value_color');
    }

    // Range scale
    public get rangeScale() {
        return this.device.$('#range_scale');
    }
    public get rangeValue() {
        return this.device.$('#value_range');
    }

    // ----- ACTIONS (set / get values) -----

    // Text input actions
    public async enterValueToInputText (text: string) {
        await this.textInput.setValue(text);
    }
    public async getValueInTextInput () {
        return await this.textInputValue.getText();
    }

    // Textarea actions
    public async enterValueToTextarea(text: string) {
        await this.textareaNotes.setValue(text);
    }
    public async getValueInTextarea() {
        return await this.textareaValue.getText();
    }

    // Number actions
    public async enterValueToNumber(value: number) {
        await this.numberInput.setValue(String(value));
    }
    public async getValueInNumber() {
        return await this.numberValue.getText();
    }

    // Checkbox actions
    public async setSubscribe(checked: boolean) {
        const el = this.checkboxSubscribe;
        const isSelected = await el.isSelected();
        if (isSelected !== checked) {
            await el.click();
        }
    }
    public async getValueInCheckbox() {
        return await this.checkboxValue.getText();
    }

    // Radio actions
    public async setPriority(value: 'low' | 'medium' | 'high') {
        const map: Record<string, WebdriverIO.Element> = {
            low: this.radioLow,
            medium: this.radioMed,
            high: this.radioHigh
        };
        const el = map[value];
        if (el) {
            await el.click();
        }
    }
    public async getValueInRadio() {
        return await this.radioValue.getText();
    }

    // Select actions
    public async selectOption(value: string) {
        await this.selectOne.selectByAttribute('value', value);
    }
    public async getValueInSelect() {
        return await this.selectOneValue.getText();
    }

    // Date actions
    public async setDate(value: string) {
        await this.datePicker.setValue(value);
    }
    public async getValueInDate() {
        return await this.dateValue.getText();
    }

    // Color actions
    public async setColor(value: string) {
        const colorEl = await this.colorPicker; // ensure it's resolved
        await colorEl.setValue(value);

        // Trigger change event properly
        await this.device.execute((el: HTMLElement) => {
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }, colorEl);
    }
    public async getValueInColor() {
        return await this.colorValue.getText();
    }

    // Range actions
    public async setRange(value: number) {
        // await this.rangeScale.setValue(String(value));
        const slider = await this.rangeScale;
        await browser.execute((el, val) => {
            el.value = val;
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }, slider, value);
    }
    public async getValueInRange() {
        return await this.rangeValue.getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('web_html/controls-and-values.htm');
    }
}

export default new ControlsPage();
