describe('suite number 1', () => {
    it('suite1 test1', () => {
        cy.wait(Math.floor(Math.random() * 1000) + 1)
    })
    it('suite1 test2', () => {
        cy.wait(Math.floor(Math.random() * 1000) + 1)
    })
})