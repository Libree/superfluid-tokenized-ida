'use client'

import { usePathname } from "next/navigation";
import { Box, Button, List, ListItem } from "@mui/material";

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import EditIcon from '@mui/icons-material/Edit';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Link from "next/link";

function SidebarMenu() {
    const pathname = usePathname();
    return (
        <>
            <Box sx={{ padding: '1rem 0' }}>
                <List component={'div'}>
                    <ListItem component={'div'}>
                        <Link href={'/dashboard'}>
                            <Button
                                LinkComponent={"a"}
                                startIcon={<SpaceDashboardIcon />}
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'capitalize',
                                    color: 'gray',
                                    fontWeight: 'bold',
                                    textDecoration: pathname === '/dashboard' ? 'underline' : 'none',
                                }}
                            >
                                Dashboard
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem component={'div'}>
                        <Link href={'/tokenize-subscription'}>
                            <Button
                                LinkComponent={"a"}
                                startIcon={<EditIcon />}
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'capitalize',
                                    color: 'gray',
                                    fontWeight: 'bold',
                                    textDecoration: pathname === '/tokenize-subscription' ? 'underline' : 'none',
                                }}
                            >
                                Create & tokenize subscriptions
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem component={'div'}>
                        <Link href={'/market'}>
                            <Button
                                LinkComponent={"a"}
                                startIcon={<StorefrontTwoToneIcon />}
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'capitalize',
                                    color: 'gray',
                                    fontWeight: 'bold',
                                    textDecoration: pathname === '/market' ? 'underline' : 'none',
                                }}
                            >
                                Market
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem component={'div'}>
                        <Link href={'/analitycs'}>
                            <Button
                                LinkComponent={"a"}
                                startIcon={<SignalCellularAltIcon />}
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'capitalize',
                                    color: 'gray',
                                    fontWeight: 'bold',
                                    textDecoration: pathname === '/analitycs' ? 'underline' : 'none',
                                }}
                            >
                                Analitycs
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </>
    );
};

export default SidebarMenu;