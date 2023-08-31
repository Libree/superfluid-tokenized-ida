import React, { useMemo } from 'react';
import { Button } from '@mui/material';

import SuperfluidWidget, { EventListeners, WalletManager } from '@superfluid-finance/widget';
import superTokenList from '@superfluid-finance/tokenlist';
import { useWeb3Modal } from '@web3modal/react';
import { PaymentDetails } from "@superfluid-finance/widget";

import productDetails from './productDetails';


const SuperfluidCheckout = ({receiverAddress, amount}) => {
    const { open, isOpen } = useWeb3Modal();
    const walletManager = useMemo<WalletManager>(
        () => ({
            open,
            isOpen,
        }),
        [open, isOpen],
    );

    const paymentDetails: PaymentDetails = {
        paymentOptions: [
            {
                chainId: 80001,
                receiverAddress,
                superToken: {
                    address: '0x42bb40bf79730451b11f6de1cba222f17b87afd7',
                },
                flowRate: {
                    amountEther: amount.toString(),
                    period: "month",
                },
            },
        ]
    }

    const eventListeners: EventListeners = useMemo(
        () => ({
            onSuccess: () => console.log("onSuccess"),
            onSuccessButtonClick: () => console.log("onSuccessButtonClick"),
        }),
        [],
    );

    return (
        <>
            <SuperfluidWidget
                productDetails={productDetails}
                paymentDetails={paymentDetails}
                tokenList={superTokenList}
                type='dialog'
                walletManager={walletManager}
                eventListeners={eventListeners}
            >
                {({ openModal }) => (
                    <Button onClick={() => openModal()}>
                        Buy
                    </Button>
                )}
            </SuperfluidWidget>
        </>
    );
};

export default SuperfluidCheckout;
