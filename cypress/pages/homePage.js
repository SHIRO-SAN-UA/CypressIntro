export class HomePage {
    elements = {
        signupLink: () => cy.get('[href="#/register"]'),
        signinLink: () => cy.get('[href="#/login"]'),
        gitHubFooterLink: () => cy.get("body > a:nth-child(3)"),
    };

    clickGitHubFooterLink() {
        this.elements.gitHubFooterLink().click();
    }

    clickSignupLink() {
        this.elements.signupLink().click();
    }
    clickSigninLink() {
        this.elements.signinLink().click();
    }
}

export default new HomePage();
