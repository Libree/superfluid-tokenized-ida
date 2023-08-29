import React, { ReactNode, useState } from 'react';
import {
    Box, CircularProgress, MenuItem, Select, Tab, Tabs, Typography,
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

    const [value, setValue] = useState(0); // 0: mainnet, 1: testnet
    const handleChangeTab = () => {
        value === 0 ? setValue(1) : setValue(0);
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
                    <Tabs value={value} onChange={handleChangeTab}>
                        <Tab label='Mainnets' />
                        <Tab label='Testnets' />
                    </Tabs>
                    <CustomTabPanel value={value} index={0}>
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
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
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
                    </CustomTabPanel>
                </Select>
            )}
        </Box >
    );
};

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
};

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};


export default NetworkSelect;
