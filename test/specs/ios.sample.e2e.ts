import TabBar from '../screenobjects/components/TabBar.ts';
import LoginScreen from '../screenobjects/LoginScreen.ts';
import NativeAlert from '../screenobjects/components/NativeAlert.ts';
import { expect } from '@wdio/globals'

describe('Login form iOS,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'hgvuhieu@gmail.com', password: 'Hie_12345!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toContain('Success');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
})