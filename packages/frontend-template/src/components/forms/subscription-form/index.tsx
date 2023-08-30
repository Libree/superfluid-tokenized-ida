import {
    Grid,
    InputAdornment,
    Button,
    Typography,
    Divider,
    MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomOutlinedInput from '../theme-elements/CustomOutlinedInput';
import CustomSelect from '../theme-elements/CustomSelect';
import { Stack } from '@mui/system';
import { useWeb3Storage } from '../../../../hooks/useWeb3Storage';
import { useSubscriptionManager } from '../../../../hooks/useSubscriptionManager';
import { useGlobalModalContext } from '../../../../context/globalModals';
import HandleTxModal from '../../modals/handle-tx';

type FormData = {
    productName: string;
    productDescription: string;
    productImg: any;
    paymentSuperToken: string;
    paymentFlowRate: string;
};

const defaultFormData = {
    productName: '',
    productDescription: '',
    productImg: '',
    paymentSuperToken: '',
    paymentFlowRate: '',
};

export type PayloadMetadata = {
    name: string;
    description: string;
    image: string;
}

const tokens = [
    {
        value: '0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2',
        label: 'fUSDCx',
    }
];

const SubscriptionForm = () => {
    const [input, setInput] = useState<FormData>(defaultFormData);
    const [image, setImage] = useState<File>()
    const {uploadMetadata} = useWeb3Storage()
    const { createSubscription } = useSubscriptionManager()

    const [txHash, setTxHash] = useState('')
    const [isHandleTxOpen, setIsHandleTxOpen] = useState(false);
    const handleOpenHandleTx = (hash: string) => {
        setTxHash(hash)
        setIsHandleTxOpen(true)
    };
    const handleCloseHandleTx = () => setIsHandleTxOpen(false);

    const handleInputChange = (event: any) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const checkInputValues = (inputObject: FormData): boolean => {
        return Object.values(inputObject).every(value => value && value !== '');
    };


    const handleImageChange = (event: any) => {
        setImage(event.target.files[0]);
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitForm = async () => {
        const isValid = checkInputValues(input);
        if (!isValid) return;

        const payload = {
            name: input.productName,
            description: input.productDescription,
            image: "",
        };

        const cid = await uploadMetadata(payload, image)
        
        createSubscription(input.paymentSuperToken, Number(input.paymentFlowRate), "")

        handleOpenHandleTx('');
    };

    return (
        <div>
            <Typography
                variant='h4'
                mb={3}>
                Product Details
            </Typography>
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Layout */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <Grid
                container
                spacing={3}>
                {/* Product Name */}
                <Grid
                    item
                    xs={12}
                    sm={3}
                    display='flex'
                    alignItems='center'>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Product Name
                    </CustomFormLabel>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={9}>
                    <CustomTextField
                        name='productName'
                        value={input?.productName}
                        onChange={handleInputChange}
                        placeholder='Your product name'
                        fullWidth
                    />
                </Grid>
                {/* Product Description */}
                <Grid
                    item
                    xs={12}
                    sm={3}
                    display='flex'
                    alignItems='center'>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Product Description
                    </CustomFormLabel>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={9}>
                    <CustomOutlinedInput
                        name='productDescription'
                        value={input?.productDescription}
                        onChange={handleInputChange}
                        placeholder='Your product description'
                        fullWidth
                        multiline
                        rows={4}
                    />
                </Grid>
                {/* Subscription Img */}
                <Grid
                    item
                    xs={12}
                    sm={3}
                    display='flex'
                    alignItems='center'>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Product Image
                    </CustomFormLabel>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={9}>
                    <CustomTextField
                        name='productImg'
                        value={input?.productImg}
                        onChange={handleImageChange}
                        type='file'
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}>
                    <Divider sx={{ mx: '-24px' }} />
                    <Typography
                        variant='h4'
                        mt={2}>
                        Payment options
                    </Typography>
                </Grid>

                {/* SuperToken */}
                <Grid
                    item
                    xs={12}
                    sm={3}
                    display='flex'
                    alignItems='center'>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Super Token
                    </CustomFormLabel>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={9}>
                    <CustomSelect
                        name='paymentSuperToken'
                        value={input?.paymentSuperToken}
                        onChange={handleInputChange}
                        fullWidth
                        variant='outlined'>
                        {tokens.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomSelect>
                </Grid>
                {/* Flow Rate */}
                <Grid
                    item
                    xs={12}
                    sm={3}
                    display='flex'
                    alignItems='center'>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Flow Rate
                    </CustomFormLabel>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={9}>
                    <CustomTextField
                        placeholder='0.0'
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position='end'
                                    style={{ marginRight: '2rem' }}>
                                    /month
                                </InputAdornment>
                            ),
                        }}
                        name='paymentFlowRate'
                        value={input?.paymentFlowRate}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}></Grid>
                <Grid
                    item
                    xs={12}
                    sm={9}>
                    <Stack
                        direction='row'
                        spacing={2}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleSubmitForm}
                        >
                            Submit
                        </Button>
                        <Button
                            variant='text'
                            color='error'>
                            Cancel
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            <HandleTxModal
                isOpen={isHandleTxOpen}
                handleClose={handleCloseHandleTx}
                txHash={txHash as `0x${string}`}
            />
        </div>
    );
};

export default SubscriptionForm;
