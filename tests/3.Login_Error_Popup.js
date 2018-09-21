let LoginPage = require("../page_objects/login_page");

describe('Login Functionality', function() {

    beforeEach(async () => {
        await browser.restart();
    });

    it('Error message should be displayed if user is trying to login with invalid credentials', async function() {

        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("ingakapitula@gmail.com", "16zGcERwex");

        let name = await element(by.className("toast-title")).getText();
        expect(name).toMatch('Error');
      
        let name1 = await element(by.className("toast-message")).getText();
        expect(name1).toMatch('Login or password is not correct');
        console.log("Error message " + name1 + " is displayed if credentials are wrong");

    });
});
