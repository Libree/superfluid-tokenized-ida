import { Box, Button, CircularProgress, Divider, Modal, Typography } from "@mui/material";
import { useGlobalModalsContext } from "../../context/globalModals";
import { useMemo } from "react";
import { useRouter } from "next/router";

const modalContentStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    minHeight: '10rem',
    bgcolor: 'black',
    border: '2px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

type HandleTxModalProps = {
    isLoading: boolean;
    isStarted?: boolean;
    isSuccess: boolean;
    isError: boolean;
    redirectPath?: string;
}

export const HandleTxModal = ({
    isLoading,
    isStarted,
    isSuccess,
    isError,
    redirectPath = '/',
}: HandleTxModalProps) => {
    const router = useRouter();
    const { isHandleTxOpen, close } = useGlobalModalsContext();

    const defaultState = useMemo(() => {
        return isLoading || isStarted ? false : true;
    }, [isLoading, isStarted])

    const redirectToSubs = () => {
        router.push(redirectPath);
    };

    const handleCloseModal = () => {
        if (defaultState || isLoading) return;
        close();
        redirectToSubs();
    };

    let modalContent = null;

    switch (true) {
        case defaultState:
            modalContent = (
                <>
                    <Typography variant="h6" component="h2">
                        Approve transaction in your wallet
                    </Typography>
                    <Box sx={{ marginTop: '1rem' }}>
                        <CircularProgress />
                    </Box>
                </>
            );
            break;
        case isLoading:
            modalContent = (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <CircularProgress />
                </Box>
            );
            break;
        case isSuccess || isError:
            modalContent = (
                <>
                    <Typography variant="h6" component="h2">
                        {isSuccess ? "Subscription created succesfully!" : "An error occured executing the tx"}
                    </Typography>
                    <Divider sx={{ marginY: '0.8rem' }} />
                    <Button onClick={redirectToSubs}>
                        Accept
                    </Button>
                </>
            );
            break;
        default:
            modalContent = (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <CircularProgress />
                </Box>
            );
            break;
    }

    return (
        <>
            <Modal open={isHandleTxOpen} onClose={handleCloseModal}>
                <Box sx={modalContentStyle}>
                    {modalContent}
                </Box>
            </Modal>
        </>
    );
};
