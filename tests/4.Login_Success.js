let LoginPage = require("../page_objects/login_page");

describe('Login Functionality', function() {

    beforeEach(async () => {
        await browser.restart();
    });

    it('User should be able to login into eds_university.eleks.com', async function() {

        
        let loginPage = new LoginPage();

        await loginPage.open();
        let name =  await loginPage.login("inhakapitula@gmail.com", "16zGcERwex");

        let name2 = await element(by.css(".user-name")).getText();
        expect(name2).toEqual('Inha Kapitula');
        console.log("User - " + name2 + " was logged in successfully");

    });
});
