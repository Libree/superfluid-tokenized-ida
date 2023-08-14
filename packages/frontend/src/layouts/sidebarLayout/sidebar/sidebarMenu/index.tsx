'use client'

import { usePathname, useRouter } from "next/navigation";
import { Box, Button, List, ListItem } from "@mui/material";

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import EditIcon from '@mui/icons-material/Edit';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

function SidebarMenu() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <Box
                sx={{
                    padding: '1rem 0.5rem',
                }}
            >
                <List component={'div'}>
                    <ListItem component={'div'}>
                        <Button
                            LinkComponent={"a"}
                            onClick={() => router.push('/dashboard')}
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
                    </ListItem>
                    <ListItem component={'div'}>
                        <Button
                            LinkComponent={"a"}
                            onClick={() => router.push('/')}
                            startIcon={<EditIcon />}
                            sx={{
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                color: 'gray',
                                fontWeight: 'bold',
                                textDecoration: pathname === '/' ? 'underline' : 'none',
                            }}
                        >
                            Create & tokenize subscriptions
                        </Button>
                    </ListItem>
                    <ListItem component={'div'}>
                        <Button
                            LinkComponent={"a"}
                            onClick={() => router.push('/')}
                            startIcon={<StorefrontTwoToneIcon />}
                            sx={{
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                color: 'gray',
                                fontWeight: 'bold',
                                textDecoration: pathname === '/' ? 'underline' : 'none',
                            }}
                        >
                            Market
                        </Button>
                    </ListItem>
                    <ListItem component={'div'}>
                        <Button
                            LinkComponent={"a"}
                            onClick={() => router.push('/')}
                            startIcon={<SignalCellularAltIcon />}
                            sx={{
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                color: 'gray',
                                fontWeight: 'bold',
                                textDecoration: pathname === '/' ? 'underline' : 'none',
                            }}
                        >
                            Analitycs
                        </Button>
                    </ListItem>
                </List>
            </Box>
        </>
    );
};

export default SidebarMenu;