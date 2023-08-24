import React, { FC, useMemo } from 'react';
import { Box } from '@mui/material';

import SuperfluidWidget from '@superfluid-finance/widget';
import superTokenList from '@superfluid-finance/tokenlist';
import { useWeb3Modal } from '@web3modal/react';
import { useNetwork } from 'wagmi';

import paymentDetails from './paymentDetails';
import productDetails from './productDetails';


const SuperfluidCheckout: FC<{
    price: number
}> = ({
    price,
}) => {

    const { open, isOpen } = useWeb3Modal();
    const { chain } = useNetwork();

    const walletManager = useMemo(() => ({
        open,
        isOpen,
    }), [open, isOpen]);

    return (
        <Box>
            <SuperfluidWidget
                productDetails={productDetails}
                paymentDetails={paymentDetails}
                tokenList={superTokenList}
                type='dialog'
                walletManager={walletManager}
            >
                {({ openModal }) => (
                    <button onClick={() => openModal()}>Open Superfluid Widget</button>
                )}
            </SuperfluidWidget>
        </Box>
    );
};

export default SuperfluidCheckout;
