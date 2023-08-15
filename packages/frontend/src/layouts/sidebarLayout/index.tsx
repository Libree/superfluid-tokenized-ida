'use client'

import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

import useSidebar from "@/hooks/useSidebar";
import Sidebar from "./sidebar";
import Header from "./header";

interface SideBarLayoutProps {
    children?: ReactNode;
}

const SideBarLayout: FC<SideBarLayoutProps> = ({ children }) => {
    const { sidebarToggle } = useSidebar();
    return (
        <>
            <Header />
            <Sidebar />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 5,
                    display: 'block',
                    flex: 1,
                    marginLeft: {
                        xs: sidebarToggle ? '240px' : 0,
                        lg: '240px',
                    },
                    marginTop: '80px',
                }}
            >
                <Box display={'block'}>
                    {children}
                </Box>
            </Box>
        </>
    )
};

SideBarLayout.propTypes = {
    children: PropTypes.node,
};

export default SideBarLayout;
