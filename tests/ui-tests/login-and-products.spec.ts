import { test, expect } from '../../fixtures/testFixtures';
import { loginData } from '../../test-data/loginData';

test('login and verify products are visible', async ({
  page,
  loginPage,
  productsPage,

}) => {
    
    //Login
    await loginPage.navigate();
    await loginPage.login(loginData.validUser.username, 
        loginData.validUser.password);

    //verify Landing page
    await productsPage.verifyOnProductsPage();

    //verify products exists
    await productsPage.verifyProductsVisible();
});