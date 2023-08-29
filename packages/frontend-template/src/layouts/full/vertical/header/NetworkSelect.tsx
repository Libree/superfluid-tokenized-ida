import React from 'react';
import {
    Box, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { useNetwork, useSwitchNetwork } from 'wagmi';


const NetworkSelect = () => {
    const { chain } = useNetwork();
    const { chains, switchNetwork } = useSwitchNetwork();

    const handleNetworkSelect = (event: SelectChangeEvent<string>) => {
        
    };

    return (
        <Box>
            <Select
                label='Network'
                value={chain?.name}
                onChange={handleNetworkSelect}
                placeholder={chain.id}
            >
                {chains.map((network) => (
                    <MenuItem value={network.id}>{network.name}</MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default NetworkSelect;
