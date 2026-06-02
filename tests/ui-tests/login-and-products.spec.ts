import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { loginData } from '../../test-data/loginData';

test('login and verify products are visible', async({page}) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    //Login
    await loginPage.navigate();
    await loginPage.login(loginData.validUser.username, 
        loginData.validUser.password);

    //verify Landing page
    await productsPage.verifyOnProductsPage();

    //verify products exists
    await productsPage.verifyProductsVisible();
});