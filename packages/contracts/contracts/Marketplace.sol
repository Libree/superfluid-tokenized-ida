// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Marketplace {
    struct OpenOrder {
        uint256 amount;
        uint256 pricePerToken;
    }

    mapping(address => OpenOrder[]) private openOrders;
    address[] private subsSelling;

    event OrderCreated(
        address indexed subscription,
        uint256 amount,
        uint256 pricePerToken
    );

    event OrderFilled(
        address indexed subscription,
        uint256 amount,
        uint256 pricePerToken
    );

    function getOpenOrders(
        address _sub
    ) public view returns (OpenOrder[] memory) {
        return openOrders[_sub];
    }

    function getSubSelling() public view returns (address[] memory) {
        return subsSelling;
    }

    function registerOrder(
        address sub,
        uint256 amount,
        uint256 pricePerToken
    ) public {
        subsSelling.push(sub);
        openOrders[sub].push(OpenOrder(amount, pricePerToken));

        emit OrderCreated(sub, amount, pricePerToken);
    }

    function buyOrder(
        address sub,
        uint256 amount,
        uint256 pricePerToken
    ) public {
        delete openOrders[sub];

        emit OrderFilled(sub, amount, pricePerToken);
    }
}
