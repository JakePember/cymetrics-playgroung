describe('suite number 5', () => {
    it('suite5 test1', () => {
        cy.wait(Math.floor(Math.random() * 5000) + 1000)
    })
    it('suite5 test2', () => {
        cy.wait(Math.floor(Math.random() * 5000) + 1000)
    })
})