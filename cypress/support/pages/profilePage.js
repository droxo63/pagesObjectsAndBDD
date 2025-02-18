/// <reference types = "cypress"/>

// cypress/pages/profilePage.js
export const homePage = {
    customerEmail: () => {
      return cy.get('[data-testid="CustomerEmail"]')
    }
  };