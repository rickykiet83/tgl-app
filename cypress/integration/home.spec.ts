describe('Home page test', () => {
    it('Visits the initial project page', () => {
        cy.visit('/home');
        cy.contains('Welcome to the Findex Ferry Terminal');
    })
})
