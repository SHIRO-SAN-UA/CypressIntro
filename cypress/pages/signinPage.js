export class SigninPage {
   
        emailField() {
          return cy.get('input.ng-valid-email')
        }
        passwordField() {
          return cy.get('input[type="password"]')
        }
        signinButton() {
          return cy.get('.btn')
        }  
        errorMessageContainer() {
          return cy.get('li.ng-binding')
        }  
        pageTitleContainer() {
          return cy.get('h1.text-xs-center')
        }  
      
        fillEmailOrPasswordField(email, password) {
          if (email !== undefined && password !== undefined) {
            this.emailField().type(email);
            this.passwordField().type(password);
          } else if (email !== undefined) {
            this.emailField().type(email);
          } else if (password !== undefined) {
            this.passwordField().type(password);
          }
        }     
}

  
  export default new SigninPage;