describe('suite number 4', () => {
    it('suite4 test1', () => {
        cy.wait(Math.floor(Math.random() * 4000) + 1000)
    })
    it('suite4 test2', () => {
        cy.wait(Math.floor(Math.random() * 4000) + 1000)
    })
})