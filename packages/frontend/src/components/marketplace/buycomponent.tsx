import React, { useState } from 'react';
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
import { useMarketplace } from '../../../hooks/useMarketplace';
import { useTokenizedIDA } from '../../../hooks/useTokenizedIDA';
import { useGlobalModalsContext } from '../../context/globalModals';
import { HandleTxModal } from '../modals/handle-tx';

const BuyComponent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [amount, setAmount] = useState(0);
    const [order, setOrder] = useState()
    const {
        buyOrder,
        isbuyLoading,
        txbuyCreateSuccess,
        txbuyCreateError,
    } = useMarketplace();
    const { open: openTxModal } = useGlobalModalsContext();

    const handleBuyClick = (event: any, orderEvent: any) => {
        setOrder(orderEvent)
        if (open) handleBuyClose();
        else setAnchorEl(event.currentTarget);
    };

    const handleBuyClose = () => {
        setAnchorEl(null);
    };

    const handleBuy = () => {
        openTxModal();
        buyOrder(order.address, order?.pricePerToken, order?.amount)
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
            address: sub.address,
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
                                {subsData.map((item, index) => (
                                    <TableRow key={item.index}>
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
                                            <IconButton onClick={(event) => handleBuyClick(event, subsData[index])}>
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
                            <Button onClick={(event) => handleBuy()}>Buy</Button>
                        </Box>
                    </Popover>
                </BlankCard>
            </ParentCard>

            <HandleTxModal
                isLoading={isbuyLoading}
                isError={!!txbuyCreateError}
                isSuccess={txbuyCreateSuccess}
                redirectPath='/marketplace'
            />
        </Box>
    );
};

export default BuyComponent;
