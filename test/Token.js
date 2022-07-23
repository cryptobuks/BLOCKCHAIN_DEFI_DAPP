const { expect } = require('chai'); //extracting expect function from chai lib
const { ethers } = require('hardhat'); //extracting ethers from hardhat lib
const { each } = require('lodash');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', ()=> {
    let token
    // NO DUPLICATE CODE: Before each test (it), the token is deployed and fetch. No need to do it for every test
    beforeEach(async ()=>{
        // Step1: Fetch token from blockchain
        const Token = await ethers.getContractFactory('Token')
        token = await Token.deploy('Dapp University', 'DAPP', '1000000')
    })

    describe('Deployment', ()=>{

        // define variables
        const name_var = 'Dapp University'
        const sym_var = 'DAPP'
        const dec_var = '18'
        const supp_var = tokens('1000000')

         // CHeck if name is correct
        it('Token has correct name', async ()=>{
            // Step2: Read token name
            const name = await token.name()
            // Step3: Check Name is Correct
            expect(name).to.equal(name_var)
        })

        // Check if token symbol is correct
        it('Token has correct symbol', async ()=>{
            // Step2: Read token Symbol
            const symbol = await token.symbol()
            // Step3: Check Symbol is Correct
            expect(symbol).to.equal(sym_var)
        })

        // Check if decimals is correct
        it('Token has correct decimals', async ()=>{
            // Step2: Read token Symbol
            const decimals = await token.decimals()
            // Step3: Check Symbol is Correct
            expect(decimals).to.equal(dec_var)
        })
        
        // Check if supply is correct
        it('Token has correct decimals', async ()=>{
            // Step2: Read token Symbol
            const total_supply = await token.totalSupply()
            // Step3: Check Symbol is Correct
            expect(total_supply).to.equal(supp_var)
        })
    })
})
