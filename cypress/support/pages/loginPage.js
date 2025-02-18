/// <reference types = "cypress"/>

class loginPage {
    
        get emailField(){ return cy.get('[data-testid="email"]')}   
        get passwordField() {return cy.get('[data-testid="password"]')}
        get loginButton() { return cy.get('[data-testid="btnLogin"]');}
    
login(email, senha){
    this.emailField.type(email);
    this.passwordField.type(senha);
    this.loginButton.click();
}
}

export default new loginPage();