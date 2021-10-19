const {coinFlip} = require('../../support/utils/coinFlip')
describe('suite number 6', () => {
    it('suite6 test1', () => {
        cy.wait(Math.floor(Math.random() * 6000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
    it('suite6 test2', () => {
        cy.wait(Math.floor(Math.random() * 6000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
})