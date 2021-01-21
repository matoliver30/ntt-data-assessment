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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload'

Cypress.Commands.add("isValid", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.css', 'border-color', 'rgb(40, 167, 69)');
    cy.wrap($element).should('have.css', 'background-image', `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")`)
});

Cypress.Commands.add("isInvalid", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.wrap($element).should('have.css', 'background-image', `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`)
});

Cypress.Commands.add("hasError", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.css', 'color', 'rgb(223, 70, 85)');
});

Cypress.Commands.add("hasNoError", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.css', 'color', 'rgb(97, 217, 124)');
});

Cypress.Commands.add("exists", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('exist');
});
