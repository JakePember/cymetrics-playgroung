describe('suite number 2', () => {
    it('suite2 test1', () => {
        cy.wait(Math.floor(Math.random() * 2000) + 1000)
    })
    it('suite2 test2', () => {
        cy.wait(Math.floor(Math.random() * 2000) + 1000)
    })
})