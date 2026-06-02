import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { loginData } from '../../test-data/loginData';

test('verify error message logining in with wrong username or password', async({page}) =>{
    const loginPage = new LoginPage(page);
    
    //Login
    await loginPage.navigate();
    await loginPage.login(loginData.invalidUser.username, 
        loginData.invalidUser.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    
});