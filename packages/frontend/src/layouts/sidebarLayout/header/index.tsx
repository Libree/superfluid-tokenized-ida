'use client'

import { Box, IconButton, Select, Tooltip, styled } from "@mui/material"

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import useSidebar from "../../../hooks/useSidebar";

const HeaderWrapper = styled(Box)(
    () => `
        height: 80px;
        padding: 0 1rem;
        top: 0;
        right: 0;
        z-index: 6;
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid lightgray;
        @media (min-width:1280px) {
            left: 240px;
            width: auto;
        }
    `,
);

function Header() {
    const { sidebarToggle, toggleSidebar } = useSidebar();
    return (
        <HeaderWrapper
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Box component={'span'}>
                <Tooltip
                    arrow
                    title="Toggle Menu"
                    sx={{
                        display: {
                            xs: 'inline-flex',
                            lg: 'none',
                        }
                    }}>
                    <IconButton
                        color="primary"
                        onClick={toggleSidebar}
                    >
                        {!sidebarToggle ? (
                            <MenuTwoToneIcon fontSize="medium" />
                        ) : (
                            <CloseTwoToneIcon fontSize="medium" />
                        )}
                    </IconButton>
                </Tooltip>
            </Box>
            <Box>
                <Select></Select>
            </Box>
        </HeaderWrapper>
    )
};

export default Header;
