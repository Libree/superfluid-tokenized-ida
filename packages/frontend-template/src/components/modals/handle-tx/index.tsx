import { Box, Modal, Typography } from "@mui/material";
import { useGlobalModalContext } from "../../../context/globalModals";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
};

const HandleTxModal = () => {
    const { isHandleTxOpen, close } = useGlobalModalContext(); 

    return (
        <>
            <Modal
                open={isHandleTxOpen}
                onClose={() => close()}
            >
                <Box sx={style}>
                    <Typography variant="h6" component={"h2"}>
                        Tx should be approved
                    </Typography>
                </Box>
            </Modal>
        </>
    )
};

export default HandleTxModal;
