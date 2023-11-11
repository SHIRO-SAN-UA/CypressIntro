export class SignupPage {
    usernameField() {
        return cy.get('input[type="text"]');
    }

    emailField() {
        return cy.get('input[type="email"]');
    }

    passwordField() {
        return cy.get('input[type="password"]');
    }

    signupButton() {
        return cy.get(".btn");
    }

    errorMessageContainer() {
        return cy.get("li.ng-binding");
    }

    fillSignupForm(username, email, password) {
        if (username !== undefined) {
            this.usernameField().type(username);
        }
        if (email !== undefined) {
            this.emailField().type(email);
        }
        if (password !== undefined) {
            this.passwordField().type(password);
        }
    }
}

export default new SignupPage();

// fillSignupForm(username, email, password) {
//   if (username !== undefined && email !== undefined && password !== undefined) {
//     this.usernameField().type(username);
//     this.emailField().type(email);
//     this.passwordField().type(password);
//   } else if (email !== undefined) {
//     this.emailField().type(email);
//   } else if (password !== undefined) {
//     this.passwordField().type(password);
//   } else if (username != undefined);
//     this.usernameField().type(username);
// }
