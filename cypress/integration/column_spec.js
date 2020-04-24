describe('column', function() {
    before(function(){
        cy.visit(Cypress.env().baseUrl);
        cy.contains("Add new column").click();
    })

    it('should create new column when "add new column" is clicked', function() {
        cy.get("div[style*='flex-direction: column']").should('have.length', 1);
    })

    it('new column should have add new button', function() {
        cy.get('button').contains('+ add new').should('have.length', 1);
    })

    it('new column should have delete button', function() {
        cy.get('button').contains('delete').should('have.length', 1);
    })

    it('should show name input field when "+ add new" is clicked', function() {
        cy.get('button').contains('+ add new').click();
        cy.contains('Sticky').should('have.length', 1);
    })
})