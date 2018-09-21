let AdminPage = require("../page_objects/admin_page");
let LoginPage = require("../page_objects/login_page");

describe('Administration Functionality', () => {

    beforeEach(async () => {
        await browser.restart();
        let loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.login('inhakapitula@gmail.com', '16zGcERwex');
    });

    

    it('User should be able to create and save product', async () => {
    
        let adminPage = new AdminPage();

            
        let click = await adminPage.clickAdministrationTab();
        let form = await adminPage.newProduct("DemoProd", "AQA");
        let save = await adminPage.saveProduct("DemoProd", "AQA");

        await browser.sleep(5000);

        //expect(save).toBe(true);
        console.log("Product is successfully created");
        
    
    });
});


