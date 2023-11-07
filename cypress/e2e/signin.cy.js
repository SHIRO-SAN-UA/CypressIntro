import { HomePage } from "../pages/homePage";
import { SigninPage } from "../pages/signinPage";
import { faker } from "@faker-js/faker";

const homePage = new HomePage();
const signinPage = new SigninPage();
const randomEmail = `${faker.internet.userName()}@example.com`;
const randomPassword = faker.internet.password();


describe('Signing in functionality', () => {
    it('Signin button should be clickable', () => {
        cy.visit('/');
        homePage.clickSigninLink();
        signinPage.signinButton().should('be.enabled');
    });

    
    it('Signin should not be allowed without filling in email', () => {
        cy.visit('/');
        homePage.clickSigninLink();
        signinPage.fillEmailOrPasswordField(undefined, randomPassword);
        signinPage.signinButton().click();
        signinPage.errorMessageContainer().should('contain.text', "email can't be blank");
    });

    it('Signin should not be allowed without filling in password', () => {
        cy.visit('https://demo.realworld.io/#/');
        homePage.clickSigninLink();
        signinPage.fillEmailOrPasswordField(randomEmail, undefined);
        signinPage.signinButton().click();
        signinPage.errorMessageContainer().should('contain.text', "password can't be blank");
    });

    it('Signin with invalid credentials', () => {
        cy.visit('https://demo.realworld.io/#/');
        homePage.clickSigninLink();
        signinPage.fillEmailOrPasswordField(randomEmail, randomPassword);
        signinPage.signinButton().click();
        signinPage.errorMessageContainer().should('contain.text', "email or password is invalid"); 
    });
});
