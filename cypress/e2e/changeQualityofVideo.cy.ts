/// <reference types="cypress" />

describe('Prueba de Interacción con YouTube', () => {
  
    it('Debería buscar, reproducir un video y cambiar la resolución a 720p', () => {
      cy.visit('https://www.youtube.com');
      cy.get('input#search').type('MrBeast{enter}'); 
      cy.contains('Hombres Vs Mujeres Sobreviven A La Naturaleza Por $500,000').click();
      cy.get('.ytp-settings-button').click();
      cy.contains('Calidad').click();
      cy.contains('720p').click();
      cy.get('.html5-video-player').should('have.class', 'playing-mode');
    });
  });
  

