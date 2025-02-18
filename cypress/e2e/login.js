/// <reference types = "cypress"/>


//const {email, senha} = require ('../fixtures/dados.json')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ('que estou na página inicial', () => {
  cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
  cy.visit("/")    
});
  When('eu faço o login como usuario com usuario {string} e a senha {string}', (email, senha) => {
    cy.login(email, senha)
  });
    Then('o usuario é logado com sucesso e seu email aparecer na pagina de perfil', () => { 
      cy.get('[data-testid="CustomerEmail"]').should('have.text', email)
    });
