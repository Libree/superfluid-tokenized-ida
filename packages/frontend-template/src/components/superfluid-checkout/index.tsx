import React, { useMemo } from 'react';
import { Button } from '@mui/material';

import SuperfluidWidget, { EventListeners, WalletManager } from '@superfluid-finance/widget';
import superTokenList from '@superfluid-finance/tokenlist';
import { useWeb3Modal } from '@web3modal/react';

import paymentDetails from './paymentDetails';
import productDetails from './productDetails';


const SuperfluidCheckout = () => {
        const { open, isOpen } = useWeb3Modal();
        const walletManager = useMemo<WalletManager>(
            () => ({
                open,
                isOpen,
            }),
            [open, isOpen],
        );

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