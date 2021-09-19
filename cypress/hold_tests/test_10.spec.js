describe('suite number 10', () => {
    it('suite10 test1', () => {
        cy.wait(Math.floor(Math.random() * 10000) + 1000)
    })
    it('suite10 test2', () => {
        cy.wait(Math.floor(Math.random() * 10000) + 1000)
    })
})