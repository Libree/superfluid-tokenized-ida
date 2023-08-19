'use client'

import { Box, Button, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { shortenAddress } from "@/utils";

export const ConnectWallet = () => {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    return (
        <Box sx={{ margin: '1rem 0' }}>
            {isConnected ? (
                <Typography
                    sx={{
                        backgroundColor: 'rgba(105, 255, 102, 0.3)',
                        color: 'rgba(45, 105, 40, 1)',
                        padding: '0.2em',
                        borderRadius: '0.5em',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        fontSize: '0.9em',
                    }}
                >
                    Connected to {ensName ?? shortenAddress(address as string)}
                </Typography>
            ) : (
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
            )}
        </Box >
    )
};