const { expect } = require('chai'); //extracting expect function from chai lib
const { ethers } = require('hardhat'); //extracting ethers from hardhat lib


const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', ()=> {
    // define variables
    let token, accounts, deployer
    
    // NO DUPLICATE CODE: Before each test (it), the token is deployed and fetch. No need to do it for every test
    beforeEach(async ()=>{
        // Step1: Fetch token from blockchain
        const Token = await ethers.getContractFactory('Token')
        token = await Token.deploy('Dapp University', 'DAPP', '1000000')
        // Step2: Fetch deployer address
        accounts = await ethers.getSigners()
        deployer = accounts[0] // array to select first address from the signers(is the one used to deploy the smart contract)
    
    })

    describe('Deployment', ()=>{

        // define variables
        const name_var = 'Dapp University'
        const sym_var = 'DAPP'
        const dec_var = '18'
        const supp_var = tokens('1000000')

         // CHeck if name is correct
        it('Token has correct name', async ()=>{
            // Step2: Check Name is Correct
            expect(await token.name()).to.equal(name_var)
        })

        // Check if token symbol is correct
        it('Token has correct symbol', async ()=>{
            // Step2: Check Symbol is Correct
            expect(await token.symbol()).to.equal(sym_var)
        })

        // Check if decimals is correct
        it('Token has correct decimals', async ()=>{
            // Step2: Check Symbol is Correct
            expect(await token.decimals()).to.equal(dec_var)
        })
        
        // Check if supply is correct
        it('Token has correct total supply', async ()=>{
            // Step2: Check Symbol is Correct
            expect(await token.totalSupply()).to.equal(supp_var)
        })

        // Assign total supply to deploying address
        it('Token has correct decimals', async ()=>{
            // Step2: Check Symbol is Correct
            expect(await token.balanceOf(deployer.address)).to.equal(supp_var)
        })
    })
})
