import { Box, Button, CircularProgress, Divider, Modal, Typography } from "@mui/material";
import { useGlobalModalsContext } from "../../context/globalModals";
import Link from "next/link";

const modalContentStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
}

export const HandleTxModal = ({
    isLoading,
    isStarted,
    isSuccess,
    isError,
}: HandleTxModalProps) => {
    const { isHandleTxOpen, close } = useGlobalModalsContext();

    return (
        <>
            <Modal
                open={isHandleTxOpen}
                onClose={() => close()}
            >
                <Box sx={modalContentStyle}>
                    {!isStarted && (
                        <Typography variant="h6" component="h2">
                            Tx should be approved
                        </Typography>
                    )}
                    {isLoading && (
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
                    )}
                    {isSuccess && (
                        <>
                            <Typography variant="h6" component="h2">
                                Success tx
                            </Typography>
                            <Divider sx={{ marginY: '0.3rem' }} />
                            <Button
                                component={Link}
                                href={`/creators/subscriptions}`}
                            >
                                Accept
                            </Button>
                        </>
                    )}
                    {isError && (
                        <>
                            <Typography variant="h6" component="h2">
                                An error occured executing the tx
                            </Typography>
                            <Divider sx={{ marginY: '0.3rem' }} />
                            <Button 
                                component={Link}
                                href={`/creators/subscriptions}`}
                            >
                                Accept
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    )
};
