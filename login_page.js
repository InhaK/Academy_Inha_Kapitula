
let loginBtnLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passInputLocator = "#userPassword";
let signInBtnLocator = ".iframe-wrap .login-button";

let ProductPage = require("../page_objects/product_page");

class LoginPage {
    constructor(){}


    getLoginBtn() {
        return element(by.css(loginBtnLocator));
    }

    getEmailInput() {
        return element(by.css(emailInputLocator));
    }

    getPassInput() {
        return element(by.css(passInputLocator));
    }

    getSignInBtn() {
        return element(by.css(signInBtnLocator));
    }

    getEmailError() {
        return element(by.css('body > app > main > login > div > div > div.overlay > div > div > div:nth-child(1) > div > span'));
    }

    getPassError() {
        return element(by.css('body > app > main > login > div > div > div.overlay > div > div > div:nth-child(2) > div > span'));
    }

    async open() {
        await browser.get('http://eds_university.eleks.com/login');
        return this;
    }

   /* async login(email, pass) {
        await this.getLoginBtn().click();
        await this.getEmailInput().sendKeys(email);
        await this.getPassInput().sendKeys(pass);
        await this.getSignInBtn().click();
    }*/

    async login(email, pass) {
        await allure.createStep("Click Login button", async() => await this.getLoginBtn().click())();   
        await allure.createStep("Click on password field", async() => await this.getPassInput().click())();
        await allure.createStep("Click on email field", async() => await this.getEmailInput().click())();
        await allure.createStep('Enter email', async() => await this.getEmailInput().sendKeys(email))();;
        await allure.createStep("Enter password", async() => await this.getPassInput().sendKeys(pass))();;
        await allure.createStep("Click Sign In button", async() => await this.getSignInBtn().click())();;
        if (pass==""){
            return await this.getPassError().getText();
        }
        else if (email==""){
            return await this.getEmailError().getText();
        }
        //else if (error==#toast-container > div){
           // return await this.getEmailError().getText();
        return new ProductPage();
    }
}

module.exports = LoginPage;