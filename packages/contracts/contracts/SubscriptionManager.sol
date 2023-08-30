// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol";
import {TokenizedIDA} from "./TokenizedIDA.sol";

contract SubscriptionManager {

    struct Subscription {
        address user;
        address subscription;
        string metadata;
        int96 flowRate;
    }

    mapping(address => Subscription[]) private userSubscriptions;

    event SubscriptionCreated(
        address indexed user,
        address indexed subscription,
        string metadata
    );


    function createSubscription(
        ISuperToken _paymentToken,
        int96 _flowRate,
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply,
        string memory metadata
    ) public {

        TokenizedIDA subContract = new TokenizedIDA(
            _paymentToken,
            _name,
            _symbol,
            _initialSupply,
            msg.sender
        );

        Subscription memory sub = Subscription({
            user: msg.sender,
            subscription: address(subContract),
            metadata: metadata,
            flowRate: _flowRate
        });

        userSubscriptions[msg.sender].push(sub);

        emit SubscriptionCreated(
            msg.sender,
            address(subContract),
            metadata
        );
    }

    function getSubscriptions(
        address _user
    ) public view returns (Subscription[] memory) {
        return userSubscriptions[_user];
    }
}
