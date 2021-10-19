const {coinFlip} = require('../../support/utils/coinFlip')
describe('suite number 8', () => {
    it('suite8 test1', () => {
        cy.wait(Math.floor(Math.random() * 8000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
    it('suite8 test2', () => {
        cy.wait(Math.floor(Math.random() * 8000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
})