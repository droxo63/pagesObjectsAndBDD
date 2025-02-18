/// <reference types = "cypress"/>


const {email, senha} = require ('../fixtures/dados.json')
const {profilePage} = require ('../support/pages/profilePage')

describe('Teste de autenticação', () => {


  it('deve fazer o login com sucesso', () => {
    cy.login(email, senha)

  })
})