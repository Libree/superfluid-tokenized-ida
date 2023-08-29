import React from 'react';
import {
    Box, CircularProgress, MenuItem, Select,
} from '@mui/material';
import { useNetwork, useSwitchNetwork } from 'wagmi';


const NetworkSelect = () => {
    const { chain } = useNetwork();
    const { chains, isLoading, switchNetwork } = useSwitchNetwork();

    const handleNetworkSelect = (event: any) => {
        switchNetwork?.(event.target.value);
    };

    return (
        <Box>
            {isLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 50,
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Select
                    value={chain?.id}
                    onChange={handleNetworkSelect}
                    placeholder={chain?.name}
                >
                    {chains.map((network) => (
                        <MenuItem
                            key={network.id}
                            value={network.id}
                        >
                            {network.name}
                        </MenuItem>
                    ))}
                </Select>
            )}
        </Box >
    );
};

export default NetworkSelect;
