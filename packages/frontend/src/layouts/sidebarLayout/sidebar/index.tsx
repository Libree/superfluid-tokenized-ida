'use client'

import useSidebar from "@/hooks/useSidebar";
import { Box, Button, Divider, Drawer, styled } from "@mui/material";

import SidebarMenu from "./sidebarMenu";

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const SidebarWrapper = styled(Box)(
    () => `
        width: 240px;
        position: relative;
        z-index: 7;
        height: 100%;
        padding: 68px 0;
    `
);

function Sidebar() {
    const { sidebarToggle, closeSidebar } = useSidebar();
    return (
        <>
            <SidebarWrapper
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'inline-block',
                    },
                    position: 'fixed',
                    left: 0,
                    top: 0,
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        padding: '68px 0',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: '240px',
                        borderRight: '1px solid gray',
                    }}
                >
                    {/* connect wallet */}
                    <Box p={2}>
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
                                },
                            }}
                        >
                            Connect Wallet
                        </Button>
                    </Box>

                    <Divider />

                    <SidebarMenu />
                </Box>
            </SidebarWrapper>
            <Drawer
                anchor={'left'}
                open={sidebarToggle}
                onClose={closeSidebar}
                variant="temporary"
                elevation={9}
            >
                <SidebarWrapper>
                    <Box
                        sx={{
                            height: '100%',
                            padding: '68px 0',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            width: '240px',
                            borderRight: '1px solid gray',
                        }}
                    >
                        {/* connect wallet */}
                        <Box p={2}>
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
                                    },
                                }}
                            >
                                Connect Wallet
                            </Button>
                        </Box>

                        <Divider />

                        <SidebarMenu />
                    </Box>
                </SidebarWrapper>
            </Drawer>
        </>
    )
};

export default Sidebar;