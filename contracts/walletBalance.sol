// SPDX-License-Identifier: GPL-3.0

// Used with web3.py to interact with frontend interface (streamlit)

pragma solidity >=0.7.0 <0.9.0;

contract simpleWallet {

    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function getEthToWallet() payable external{}

    modifier verifyOwner{
        require(msg.sender == owner, "Only wallet owners can perform this transaction!");
        _;
    }

    function withdraw(uint _amount) external verifyOwner{
        payable(msg.sender).transfer(_amount);
    }

    function getTokenBalance() external view returns (uint){
        return address(this).balance;
    }

    function getOwnerBalance() external view returns (uint){
        return address(owner).balance;
    }

}