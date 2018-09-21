let LoginPage = require("../page_objects/login_page");

describe('Login Functionality', function() {
  
    beforeEach(async () => {
        await browser.restart();
    });

    it('Error should be displayed if Password field is empty', async function() {

        let loginPage = new LoginPage();

        await loginPage.open();
       
        let name =  await loginPage.login("inhakapitula@gmail.com", "");

        expect(name).toEqual('Password is required');
        console.log("Error message " + name + " is displayed if Password field is empty");

    });
});
