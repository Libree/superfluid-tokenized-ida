import React from 'react';
import {
    Box, MenuItem, Select,
} from '@mui/material';
import { useNetwork, useSwitchNetwork } from 'wagmi';


const NetworkSelect = () => {
    const { chain } = useNetwork();
    const { chains } = useSwitchNetwork();

    const handleNetworkSelect = (event: any) => {};

    return (
        <Box>
            <Select
                label='Network'
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
        </Box>
    );
};

export default NetworkSelect;
