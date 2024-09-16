/// <reference types="cypress" />

const user  = Cypress.env('USER')
const password = Cypress.env('PASSWORD')

describe('Navegacion por el UPB Net', () => {
    it('Visita a la tabla en Horarios', () => {
        cy.visit('https://sistemas.upb.edu');
        cy.get('[name="user[username]"]').type('68763');
        cy.get('[id="password"]').type('Soylaleche2708')
        cy.get('[class="btn bg-blue btn-block btn-flat"]').click();
        cy.get('[class="small-box bg-aqua"]').click();
        cy.get('[href="#tab_2"]').click();
});
});

afterEach(() => {
    cy.get('[class="dropdown-toggle"]').click();
    cy.get('[class="pull-right"]').click();
})
