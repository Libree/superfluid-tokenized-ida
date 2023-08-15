'use client'

import useSidebar from "@/hooks/useSidebar";
import { Box, IconButton, Tooltip, styled } from "@mui/material"

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const HeaderWrapper = styled(Box)(
    () => `
        height: 80px;
        padding: 0 1rem;
        right: 0;
        z-index: 6;
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
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
            <Box
                component={'span'}
                sx={{
                    display: {
                        xs: 'inline-flex',
                        lg: 'none',
                    }
                }}
            >
                <Tooltip arrow title="Toggle Menu" children={undefined}>
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
            <Box />
        </HeaderWrapper>
    )
};

export default Header;
