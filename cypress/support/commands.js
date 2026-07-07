
Cypress.Commands.add('checaImagem', () =>{
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/assets/sauce-backpack-1200x1500-CjRW-Djj.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('have.attr', 'src', '/assets/bike-light-1200x1500-DxcZRFOA.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('have.attr', 'src', '/assets/bolt-shirt-1200x1500-mR0ldpVS.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('have.attr', 'src', '/assets/sauce-pullover-1200x1500-BfbI-PSd.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('have.attr', 'src', '/assets/red-onesie-1200x1500-BrSuq0ic.jpg')
        
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('have.attr', 'src', '/assets/red-tatt-1200x1500-E-qp6aYf.jpg')
        
})
Cypress.Commands.add('logOut', ()=>{
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();



})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })