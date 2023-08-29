import React from 'react';
import {
    Box, CircularProgress, MenuItem, Select, Typography,
} from '@mui/material';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import Image from 'next/image';
import { NetworkType, getNetworkIcon } from '../../../../../utils';


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
                        width: 100,
                        height: 30,
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
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'start',
                            }}
                        >
                            <Image
                                src={getNetworkIcon(network.network as NetworkType)}
                                width={20}
                                height={20}
                                alt=''
                                style={{ marginRight: 10 }}
                            />
                            {network.name}
                        </MenuItem>
                    ))}
                </Select>
            )}
        </Box >
    );
};

export default NetworkSelect;
