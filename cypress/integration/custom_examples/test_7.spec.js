describe('suite number 7', () => {
    it('suite7 test1', () => {
        cy.wait(Math.floor(Math.random() * 7000) + 1000)
    })
    it('suite7 test2', () => {
        cy.wait(Math.floor(Math.random() * 7000) + 1000)
    })
})