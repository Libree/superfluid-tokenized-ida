'use client'

import { Box, Divider, Drawer, styled } from "@mui/material";

import SidebarMenu from "./sidebarMenu";

import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ConnectWallet } from "@/components/connectWallet";

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
                    <ConnectWallet />

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
                        <ConnectWallet />

                        <Divider />

                        <SidebarMenu />
                    </Box>
                </SidebarWrapper>
            </Drawer>
        </>
    )
};

export default Sidebar;