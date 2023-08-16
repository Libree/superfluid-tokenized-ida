'use client'

import { Box, Button, Divider, Drawer, styled } from "@mui/material";

import SidebarMenu from "./sidebarMenu";

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";

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
    const { sidebarToggle, closeSidebar } = useContext(SidebarContext);
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
                        padding: '68px 1rem',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: '240px',
                        borderRight: '2px solid lightgray',
                    }}
                >
                    {/* connect wallet */}
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
                            padding: '68px 1rem',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            width: '240px',
                            borderRight: '2px solid lightgray',
                        }}
                    >
                        {/* connect wallet */}
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