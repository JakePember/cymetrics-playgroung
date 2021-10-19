const {coinFlip} = require('../../support/utils/coinFlip')
describe('suite number 5', () => {
    it('suite5 test1', () => {
        cy.wait(Math.floor(Math.random() * 5000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
    it('suite5 test2', () => {
        cy.wait(Math.floor(Math.random() * 5000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
})