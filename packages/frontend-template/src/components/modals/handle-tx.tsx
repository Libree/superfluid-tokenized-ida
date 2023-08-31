import { Box, Modal, Typography } from "@mui/material";
import { useGlobalModalsContext } from "../../context/globalModals";

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
}

export const HandleTxModal = () => {
    const { isHandleTxOpen, close } = useGlobalModalsContext();

    return (
        <>
            <Modal
                open={isHandleTxOpen || false}
                onClose={() => close()}
            >
                <Box
                    sx={modalContentStyle}
                >
                    <Typography variant="h6" component="h2">
                        Tx should be approved
                    </Typography>
                </Box>
            </Modal>
        </>
    )
};
