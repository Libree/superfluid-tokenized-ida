'use client'

import { Box, Button } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const ConnectWallet = () => {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    if (isConnected)
        return (
            <Box sx={{ margin: '1rem 0' }}>
                <div>Connected to {ensName ?? address}</div>
            </Box>
        )

    return (
        <Box sx={{ margin: '1rem 0' }}>
            <Button
                LinkComponent={"a"}
                startIcon={<AccountBalanceWalletOutlinedIcon />}
                sx={{
                    alignItems: 'left',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    width: '100%',
                    backgroundColor: 'green',
                    color: 'white',
                    border: '1px solid transparent',
                    borderRadius: '5rem',
                    '&:hover': {
                        border: '1px solid green',
                        color: 'green',
                    },
                }}
                onClick={() => connect()}
            >
                Connect Wallet
            </Button>
        </Box>
    )
};