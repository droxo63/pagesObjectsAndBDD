/// <reference types = "cypress"/>

export const homePage = {
        openMenu (menu){
            cy.get('[href="/Tab/Account"]').click()
        }


}