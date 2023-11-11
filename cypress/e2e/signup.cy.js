import { HomePage } from "../pages/homePage";
import { SignupPage } from "../pages/signupPage";
import { faker } from "@faker-js/faker";

const homePage = new HomePage();
const signupPage = new SignupPage();
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe("Signing up functionality", () => {
    it("Signup button should be clickable", () => {
        cy.visit("/");
        homePage.clickSignupLink();
        signupPage.signupButton().should("be.enabled");
    });

    it("Signup should not be allowed without filling in username", () => {
        cy.visit("/");
        homePage.clickSignupLink();
        signupPage.fillSignupForm(undefined, randomEmail, randomPassword);
        signupPage.signupButton().click();
        signupPage.errorMessageContainer().should("contain.text", "username can't be blank");
    });

    it("Signup should not be allowed without filling in email", () => {
        cy.visit("/");
        homePage.clickSignupLink();
        signupPage.fillSignupForm(randomName, undefined, randomPassword);
        signupPage.signupButton().click();
        signupPage.errorMessageContainer().should("contain.text", "email can't be blank");
    });

    it("Signup should not be allowed without filling in password", () => {
        cy.visit("/");
        homePage.clickSignupLink();
        signupPage.fillSignupForm(randomName, randomEmail, undefined);
        signupPage.signupButton().click();
        signupPage.errorMessageContainer().should("contain.text", "password can't be blank");
    });

    it("Signup with valid credentials", () => {
        cy.visit("/");
        homePage.clickSignupLink();
        signupPage.fillSignupForm(randomName, randomEmail, randomPassword);
        signupPage.signupButton().click();
        cy.url().should("eq", `${Cypress.config().baseUrl}`);
    });
});
