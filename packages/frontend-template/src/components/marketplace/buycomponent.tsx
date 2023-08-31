import React from 'react';
import {
    Box,
    IconButton,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Popover,
    TextField,
} from '@mui/material';
import ParentCard from '../shared/ParentCard';
import BlankCard from '../shared/BlankCard';
import { IconShoppingCart } from '@tabler/icons-react';
import { OpenOffersType, OpenOffersData } from '../tables/tableData';
import { useMarketplace } from '../../../hooks/useMarketplace';
import { useTokenizedIDA } from '../../../hooks/useTokenizedIDA';

const BuyComponent = () => {
    const mockData: OpenOffersType[] = OpenOffersData;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [amount, setAmount] = React.useState(0);

    const handleBuyClick = (event: any) => {
        if (open) handleBuyClose();
        else setAnchorEl(event.currentTarget);
    };

    const handleBuyClose = () => {
        setAnchorEl(null);
    };

    const handleAmountChange = (event: any) => {
        const newValue = Math.max(0, parseInt(event.target.value));
        setAmount(newValue);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'buy-modal' : undefined;

    const { subsSelling } = useMarketplace()

    const subsData = subsSelling?.map(sub => {
        const { tokenSymbol, tokenName } = useTokenizedIDA({ address: sub?.address })
        const { pricePerToken, amount } = sub

        return {
            name: tokenName,
            pricePerToken: Number(pricePerToken),
            amount: Number(amount),
        }

    })


    return (
        <Box>
            <ParentCard title='Open offers'>
                <BlankCard>
                    <TableContainer>
                        <Table
                            aria-label='offers table'
                            sx={{
                                whiteSpace: 'nowrap',
                            }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6'>Name</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='h6'>Price per Token</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='h6'>Amount of tokens</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='h6'>Buy</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subsData.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Typography variant='body2'>{item.name}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='body2'>{item.pricePerToken}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant='body2'>{item.amount}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton onClick={(event) => handleBuyClick(event)}>
                                                <IconShoppingCart />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleBuyClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                        <Box
                            p={2}
                            gap={2}
                            display='flex'
                            flexDirection='column'>
                            <Typography
                                variant='h6'
                                mb='1 rem'>
                                Amount
                            </Typography>
                            <TextField
                                size='small'
                                type='number'
                                inputProps={{
                                    min: 0,
                                    step: 1,
                                }}
                                value={amount}
                                onChange={handleAmountChange}
                                style={{ maxWidth: '100px' }}
                            />
                            <Button>Buy</Button>
                        </Box>
                    </Popover>
                </BlankCard>
            </ParentCard>
        </Box>
    );
};

export default BuyComponent;
