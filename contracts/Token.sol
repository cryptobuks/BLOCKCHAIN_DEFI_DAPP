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

    // Create constructor
    constructor(string memory _name, string memory _symbol, uint256 _totalsupp){
        name = _name;
        symbol = _symbol;
        totalSupply = _totalsupp * (10 ** decimals);
    }   
}
