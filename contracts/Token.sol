// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol"; // Usefull to check logs from the contract

contract Token{
    // Define name of token. Public to see its value.
    string public name; //State variable, value stored in the blockchain. 
    // Define symbol
    string public symbol;
    // Define decimals
    uint256 public decimals = 18;
    // Define supply
    uint256 public totalSupply;
    
    // TRACK BALANCES //
    // Define mapping structure to link key Address and value int of type uint256
    mapping(address=>uint256) public balanceOf;

    // Create constructor
    constructor(string memory _name, string memory _symbol, uint256 _totalsupp){
        name = _name; // Specify token name
        symbol = _symbol; // Specify token symbol
        totalSupply = _totalsupp * (10 ** decimals); // Specify token total supply
        balanceOf[msg.sender] = totalSupply; // Send all tokens created (totalSupply) to the balance address that is deploying the smart contract
    }   
}
