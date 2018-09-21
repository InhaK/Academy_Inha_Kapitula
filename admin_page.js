let adminBtnLocator = "#navbar > ul > li:nth-child(2) > a";
let addBtnLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div:nth-child(3) > div > div > a > span:nth-child(2)";
let nameInputLocator = "#product-name";
let familyBtnLocator = "#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > button";
let searchInputLocator = "#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li.dropdown-item.search > div > input";
let AQALocator = "#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(3) > a > span";
let saveBtnLocator = "#saveProductAdd";
let cancelBtnLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div.section-heading > div > div > div > button.btn.gds-btn.gds-btn-default";
let successLocator = "#toast-container > div > div:nth-child(2)";
let searchFieldLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-xs-12.section-body > search-field > div > input";
let productLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-md-12.section-body.preview-list__wrapper.ps-container.ps-theme-default > ul > li";
let DeleteLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div.section-heading > div > div.section-title__details > div.section-title__details-actions > button.btn.gds-btn-icon.gds-delete-icon";
let Editlocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div.section-heading > div > div.section-title__details > div.section-title__details-actions > button.btn.gds-btn-icon.gds-edit-icon";
let DescriptionLocator = "body > p";
let EditSaveBtn = "#saveProductEdit";
let DeleteConfirm = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > confirmation-modal > div > div > div > div.modal-footer > button.btn.gds-btn.gds-ml-1.gds-btn-danger";
let titleLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div.section-heading > div > div.section-title__details > div.section-title__details-name";
let navPanel = "body > app > main > administration > div.tab-navbar__wrapper > div > tab-navbar > div > div > ul";

let ProductPage = require("../page_objects/product_page");

class AdminPage {
    constructor(){
        browser.waitForAngularEnabled(false);
    }

    getNavPanel() {
        return element(by.css(navPanel));
    }

    getTitleName() {
        return element(by.css(titleLocator));
    }

    getDeleteConfBtn() {
        return element(by.css(DeleteConfirm));
    }

    getEditSaveBtn() {
        return element(by.css(EditSaveBtn));
    }

    getDescription() {
        return element(by.css(DescriptionLocator));
    }

    getEditBtn() {
        return element(by.css(Editlocator));
    }

    getDeleteBtn() {
        return element(by.css(DeleteLocator));
    }

    getAdminBtn() {
        return element(by.css(adminBtnLocator));
    }

    getAddProduct() {
        return element(by.css(addBtnLocator));
    }

    getNameInput() {
        return element(by.css(nameInputLocator));
    }

    getFamType() {
        return element(by.css(familyBtnLocator));
    }

    getSearchInput() {
        return element(by.css(searchInputLocator));
    }

    getAQAFamily() {
        return element(by.css(AQALocator));
    }

    getSaveBtn() {
        return element(by.css(saveBtnLocator));
    }

    getCancelBtn() {
        return element(by.css(cancelBtnLocator));
    }

    getNameError() {
        return element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[1]/div/div/form/div/div'));
    }

    getFamilyError() {
        return element(by.css("body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div.section-body.ps-container.ps-theme-default.ps-active-y.add-product > form > div:nth-child(1) > div.edit-poduct-family-list > div"));
    }

    getSuccessLocator() {
        return element(by.css(successLocator));
    }

    getSearchProdInput(){
        return element(by.css(searchFieldLocator));
    }

    getProdId(){
        return element(by.css(productLocator));
    }

    /*async static open() {
        await browser.get('http://eds_university.eleks.com/login');
        return this;
    }*/

    async waitForPageAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getAdminBtn()), 15000)
    }

    async waitForAddAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getAddProduct()), 15000)
    }

       
    async saveProduct(name, family){
        await allure.createStep("Click Save button", async() => await this.getSaveBtn().click())();
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getSuccessLocator()), 15000);
        return await this.getSuccessLocator().getText();
    }

    async clickAdministrationTab(){
        await this.waitForPageAvailable();
        await allure.createStep("Click Administration tab", async() => await this.getAdminBtn().click())(); 
        
    }

    async newProduct(name, family) { 
        await this.waitForAddAvailable();  
        await allure.createStep("Click Add button", async() => await this.getAddProduct().click())();
        await allure.createStep("Enter Product name", async() => await this.getNameInput().sendKeys(name))();
        await allure.createStep("Click on Family drop down menu", async() => await this.getFamType().click())();
        await allure.createStep("Input to Search field", async() => await this.getSearchInput().sendKeys(family))();
        if (name==""){
            return await this.getNameError().getText();
        }
        if (family==""){
            return await this.getFamilyError().getText();
        }
        if (family=="AQA"){
            return await this.getAQAFamily().click();
        }
        
    }

    async waitForProductAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProdId()), 15000)
    }

    async waitForEditAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProdId()), 15000)
    }

    async searchProduct(name){
        await this.waitForAddAvailable();
        await allure.createStep("Input to Search field", async() => await this.getSearchProdInput().sendKeys(name))(); 
        await this.waitForProductAvailable();
        await allure.createStep("Click on Product", async() => await this.getProdId().click())();
    }

    async editProduct(name){
        await this.waitForProductAvailable();
        await allure.createStep("Click on Product", async() => await this.getProdId().click())();
        await allure.createStep("Click Edit button", async() => await this.getEditBtn().click())();
        await allure.createStep("Change Product name", async() => await this.getNameInput().sendKeys(name))();
        await allure.createStep("Click Save button", async() => await this.getEditSaveBtn().click())();
    }

    async waitForDeleteAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getDeleteConfBtn()), 20000)
    }

    async deleteProduct(){
        await allure.createStep("Click Delete button", async() => await this.getDeleteBtn().click())();
        await this.waitForDeleteAvailable();
        await allure.createStep("Confirm deleting of product", async() => await this.getDeleteConfBtn().click())();
    }

    async waitNavigationAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getNavPanel()), 20000)
    }

    
}

module.exports = AdminPage;