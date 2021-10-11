describe('Ferry Terminal page test', () => {

    beforeEach(() => {
        cy.server();

        cy.visit("/ferry-terminal");
    });

    it("should display a 2 mat-card ferries", () => {

        cy.get('mat-card').should('have.length', 2);
    });

    it("should add new vehicle to ferry", () => {

        cy.get('#get-vehicle').click();
        cy.get('.ferry-content').should('be.visible');

    });

    it("should show Worker Profit", () => {

        cy.get('#get-vehicle').click();
        cy.get('#worker-profit').should('be.visible')

    });

    it("should show Terminal Profit", () => {

        cy.get('#get-vehicle').click();
        cy.get('#terminal-profit').should('be.visible')

    });

})
