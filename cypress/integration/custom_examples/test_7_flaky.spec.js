const {coinFlip} = require('../../support/utils/coinFlip')
describe('suite number 7', () => {
    it('suite7 test1', () => {
        cy.wait(Math.floor(Math.random() * 7000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
    it('suite7 test2', () => {
        cy.wait(Math.floor(Math.random() * 7000) + 1000)
        if(coinFlip()) throw new Error('Test Failed.')
    })
})