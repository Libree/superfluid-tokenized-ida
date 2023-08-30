import React, { ReactElement, useState } from "react";
import { useSpring, animated } from '@react-spring/web';
import { Backdrop, Box, Modal, Typography, styled, useTheme } from "@mui/material";
import { useGlobalModalContext } from "../../../../context/globalModals";
import { useWaitForTransaction } from "wagmi";

interface FadeProps {
    children: ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        },
    })

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    )
});

const style = {
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
};

const labels = {
    1: 'Tx should be approved',
    2: 'Loading...',
    3: 'Successful tx',
}


type HandleTxModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    txHash: `0x${string}`;
}

const HandleTxModal = ({
    isOpen,
    handleClose,
    txHash,
} : HandleTxModalProps) => {
    const { data, isError, isLoading } = useWaitForTransaction({
        hash: txHash,
    });

    const theme = useTheme();
    const StyledBox = styled(Box)(() => ({
        backgroundColor: theme.palette.background.paper
    }));

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => handleClose()}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    }
                }}
            >
                <Fade in={isOpen}>
                    <StyledBox sx={style}>
                        <Typography variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                    </StyledBox>
                </Fade>
            </Modal>
        </div>
    )
};

export default HandleTxModal;
