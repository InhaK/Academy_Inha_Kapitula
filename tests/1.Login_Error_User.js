let LoginPage = require("../page_objects/login_page");

describe('Login Functionality', function () {

    beforeEach(async () => {
        await browser.restart();
    });

    it('Error should be displayed if User field is empty', async function () {

        
        let loginPage = new LoginPage();

        await loginPage.open();

        let name = await loginPage.login("", "16zGcERwex");

        expect(name).toEqual('Email is required');
        console.log("Error message " + name + " is displayed if User field is empty");

    });
});
