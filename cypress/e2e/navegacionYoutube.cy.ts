/// <reference types="cypress" />

describe('Prueba de Interacción con YouTube', () => {
    it('Debería buscar y reproducir un video', () => {
        cy.visit('https://www.youtube.com');
        cy.get('input#search').type('Cypress tutorial');
        cy.get('button#search-icon-legacy').click();
        cy.contains('Cypress Tutorial').click(); 
        cy.url().should('include', 'watch'); 
    });
  });

  