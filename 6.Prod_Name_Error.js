let AdminPage = require("../page_objects/admin_page");
let LoginPage = require("../page_objects/login_page");

describe('Administration Functionality', () => {

    beforeEach(async () => {
        await browser.restart();
        let loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.login('inhakapitula@gmail.com', '16zGcERwex');
    });

    
    it('Error message should be shown if required Name field is empty', async () => {
    
        let adminPage = new AdminPage();

            
        let name = await adminPage.clickAdministrationTab();
        let form = await adminPage.newProduct("", "AQA");
    

        expect(form).toEqual('Name is required.');
        console.log("Error message " + form + " is displayed if Name field is empty");
    
    });
});


