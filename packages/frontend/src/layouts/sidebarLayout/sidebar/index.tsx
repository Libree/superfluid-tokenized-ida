import { Box, Button, Divider } from "@mui/material";

import SidebarMenu from "./sidebarMenu";

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Sidebar() {
    return (
        <>
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
        </>
    )
};

export default Sidebar;