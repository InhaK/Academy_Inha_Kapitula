let AdminPage = require("../page_objects/admin_page");
let LoginPage = require("../page_objects/login_page");

describe('Administration Functionality', () => {

    beforeEach(async () => {
        await browser.restart();
        let loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.login('inhakapitula@gmail.com', '16zGcERwex');
    });

    it('User should be able to access Administration tab', async () => {
    
        let adminPage = new AdminPage();
        await adminPage.clickAdministrationTab();

        let name = await adminPage.waitNavigationAvailable();

        expect(name);    

    console.log("Administration tab is opened");

    });
});


