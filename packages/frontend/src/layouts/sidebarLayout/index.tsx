import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

import Sidebar from "./sidebar";

interface SideBarLayoutProps {
    children?: ReactNode;
}

const SideBarLayout: FC<SideBarLayoutProps> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'block',
                    flex: 1,
                    marginLeft: '240px',
                }}
            >
                {children}
            </Box>
        </>
    )
};

SideBarLayout.propTypes = {
    children: PropTypes.node,
};

export default SideBarLayout;
