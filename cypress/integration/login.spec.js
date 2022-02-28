/// <reference types="cypress" />

describe("login test", ()=> {

    it("visit gallery page", () => {
     cy.visit("/");
    });

    it("click on the login button", () => {
       cy.visit("/");
       cy.get('a[href="/login"]').click();
       cy.get('#email').type('opacic83zo@gmail.com');
       cy.get('#password').type('opaciczo1412');
       cy.get('button').click();

    });

    it('logout', () => {

       //logout

       //cy.wait(1000); zadnja opcija koja se koristi
       cy.get('.nav-link').should('have.length',4);
       cy.get('.nav-link').eq(3).click();
    });
    
}); 
