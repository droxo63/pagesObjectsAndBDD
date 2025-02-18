/// <reference types = "cypress"/>


const {email, senha} = require ('../fixtures/dados.json')
const {profilePage} = require ('../support/pages/profilePage')

context ('Dado que estou na página inicial', () => {
    
  context ('Quando eu faço login', ()=> {
    beforeEach(() => {
      cy.login(email, senha)

    });
    
  

    it('Então o usuario logado com sucesso e seu email aparecer na pagina de perfil', () => {
      
      cy.get('[data-testid="CustomerEmail"]').should('have.text', email)
    
    })
  })
})
