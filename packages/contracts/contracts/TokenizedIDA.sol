// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol";
import {IInstantDistributionAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenizedIDA is ERC20 {
    /// @notice Super token to be distributed.
    ISuperToken public spreaderToken;

    /// @notice SuperToken Library
    using SuperTokenV1Library for ISuperToken;

    /// @notice Index ID. Never changes.
    uint32 public constant INDEX_ID = 0;

    constructor(
        ISuperToken _spreaderToken,
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply
    ) ERC20(_name, _symbol) {
        _mint(msg.sender, _initialSupply * 10 ** decimals());
        spreaderToken = _spreaderToken;
        _spreaderToken.createIndex(INDEX_ID);
        _gainShare(msg.sender, _initialSupply * 10 ** decimals());
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    function distribute() public {
        uint256 spreaderTokenBalance = spreaderToken.balanceOf(address(this));

        (uint256 actualDistributionAmount, ) = spreaderToken
            .calculateDistribution(
                address(this),
                INDEX_ID,
                spreaderTokenBalance
            );

        spreaderToken.distribute(INDEX_ID, actualDistributionAmount);
    }

    /// @notice lets an account gain a single distribution unit
    /// @param subscriber subscriber address whose units are to be incremented
    function _gainShare(address subscriber, uint256 amount) private {
        (, , uint256 currentUnitsHeld, ) = spreaderToken.getSubscription(
            address(this),
            INDEX_ID,
            subscriber
        );

        spreaderToken.updateSubscriptionUnits(
            INDEX_ID,
            subscriber,
            uint128(currentUnitsHeld + amount)
        );
    }

    /// @notice lets an account lose a single distribution unit
    /// @param subscriber subscriber address whose units are to be decremented
    function _loseShare(address subscriber, uint256 amount) private {
        (, , uint256 currentUnitsHeld, ) = spreaderToken.getSubscription(
            address(this),
            INDEX_ID,
            subscriber
        );

        spreaderToken.updateSubscriptionUnits(
            INDEX_ID,
            subscriber,
            uint128(currentUnitsHeld - amount)
        );
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        if (from == address(0) || to == address(0)) return;
        _gainShare(to, amount);
        _loseShare(from, amount);
    }

    function getUnitsHeld(address subscriber) external view returns (uint256) {
        (, , uint256 currentUnitsHeld, ) = spreaderToken.getSubscription(
            address(this),
            INDEX_ID,
            subscriber
        );

        return currentUnitsHeld;
    }
}
