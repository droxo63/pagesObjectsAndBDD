/// <reference types = "cypress"/>


//const {email, senha} = require ('../fixtures/dados.json')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ('que estou na página inicial', () => {
  cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
  cy.visit("/")    
});
  When('eu faço o login como ususario com {string} e {string}', (email, senha) => {
    cy.login(email, senha)
  });
    Then('o usuario é logado com sucesso e seu {string} aparece na pagina de perfil', (email) => { 
      cy.get('[data-testid="CustomerEmail"]').should('have.text', email)
    });
