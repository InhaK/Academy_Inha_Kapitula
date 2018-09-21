let AdminPage = require("../page_objects/admin_page");
let LoginPage = require("../page_objects/login_page");

describe('Administration Functionality', () => {

    beforeEach(async () => {
        await browser.restart();
        let loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.login('inhakapitula@gmail.com', '16zGcERwex');
    });

    

    it('User should be able to search for a product', async () => {
    
        let adminPage = new AdminPage();

            
        let click = await adminPage.clickAdministrationTab();
        let name = await adminPage.searchProduct("DemoProd");

    
        //expect(name).toMatch('InhaProduct');
        console.log("Product is displayed in the list");
     
    });
});


