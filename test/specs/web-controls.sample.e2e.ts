import { expect } from '@wdio/globals'
import ControlsPage from '../pageobjects/controls.page.ts'

describe('Verify html controls @debug', () => {
    beforeEach(async () => {
        await ControlsPage.open();
    });

    it('Text Input: edit text "test 1" and verify displayed value',  async () => {
        await ControlsPage.enterValueToInputText('test 1');
        const displayed = await ControlsPage.getValueInTextInput();
        expect(displayed).toEqual('test 1');
    });

    it('Textarea: enter notes and verify displayed value', async () => {
        await ControlsPage.enterValueToTextarea('Demo notes 123');
        const displayed = await ControlsPage.getValueInTextarea();
        expect(displayed).toEqual('Demo notes 123');
    });

    it('Number: set number and verify displayed value', async () => {
        await ControlsPage.enterValueToNumber(42);
        const displayed = await ControlsPage.getValueInNumber();
        expect(displayed).toEqual('42');
    });

    it('Checkbox (single): toggle subscribe ON and verify displayed value', async () => {
        await ControlsPage.setSubscribe(true);
        const displayed = await ControlsPage.getValueInCheckbox();
        expect(displayed).toEqual('true');
    });

    it('Radio group: set priority to medium and verify displayed value', async () => {
        await ControlsPage.setPriority('medium');
        const displayed = await ControlsPage.getValueInRadio();
        expect(displayed).toEqual('medium');
    });

    it('Select (dropdown): select option2 and verify displayed value', async () => {
        await ControlsPage.selectOption('option2');
        const displayed = await ControlsPage.getValueInSelect();
        expect(displayed).toEqual('option2');
    });

    it('Date picker: set date and verify displayed value', async () => {
        const date = '30/10/2025';
        await ControlsPage.setDate(date);
        const displayed = await ControlsPage.getValueInDate();
        expect(displayed).toEqual(date);
    });

    it('Color picker: set color and verify displayed value', async () => {
        const color = '#ff0000';
        await ControlsPage.setColor(color);
        const displayed = await ControlsPage.getValueInColor();
        expect(displayed).toEqual(color);
    });

    it('Range scale: set range and verify displayed value', async () => {
        const number = 90;
        await ControlsPage.setRange(90);
        const displayed = await ControlsPage.getValueInRange();
        expect(displayed).toEqual(number.toString());
    });
});

