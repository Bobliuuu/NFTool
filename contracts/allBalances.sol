// SPDX-License-Identifier: GPL-3.0
// Built off of https://github.com/wbobeirne/eth-balance-checker/blob/master/contracts/BalanceChecker.sol

pragma solidity 0.8.20;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract BalancesOf {
    fallback() external payable {
        revert('BalancesOf is not payable');
    }

    receive() external payable {
        revert('BalancesOf is not payable');
    }

    function balancesOf(
        address user,
        address[] calldata tokens
    ) 
    
    public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](tokens.length + 1);
        balances[0] = user.balance;
        for (uint256 index = 0; index < tokens.length; index++) {
            balances[index + 1] = IERC20(tokens[index]).balanceOf(user);
        }
        return balances;
    }
}