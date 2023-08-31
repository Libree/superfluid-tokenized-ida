import { FC, ReactNode, createContext, useContext, useMemo, useState } from "react";

const GlobalModalsContext = createContext<GlobalModalsContextType>({} as GlobalModalsContextType);

type GlobalModalsContextType = {
    isHandleTxOpen: boolean;
    isSuperfluidCheckoutOpen: boolean;
    open: (arg?: MenuTypes) => void;
    close: (arg?: MenuTypes) => void;
};

export type MenuTypes = 'handleTx' | 'superfluidCheckout';

type Props = Record<'children', ReactNode>;

const GlobalModalsProvider: FC<Props> = ({ children }) => {
    const [isHandleTxOpen, setIsHandleTxOpen] = 
        useState<GlobalModalsContextType['isHandleTxOpen']>(false);
    const [isSuperfluidCheckoutOpen, setIsSuperfluidCheckoutOpen] = 
        useState<GlobalModalsContextType['isSuperfluidCheckoutOpen']>(false);

    const open = (type?: MenuTypes) => {
        switch (type) {
            case 'superfluidCheckout':
                setIsSuperfluidCheckoutOpen(true);
                break;
            default:
                setIsHandleTxOpen(true);
                break;
        }
    };

    const close = (type?: MenuTypes) => {
        switch (type) {
            case 'superfluidCheckout':
                setIsSuperfluidCheckoutOpen(false);
                break;
            default:
                setIsHandleTxOpen(false);
                break;
        }
    };

    const value = useMemo(
        (): GlobalModalsContextType => ({
            isHandleTxOpen,
            isSuperfluidCheckoutOpen,
            open,
            close,
        }),
        [
            isHandleTxOpen,
            isSuperfluidCheckoutOpen,
        ]
    );

    return (
        <GlobalModalsContext.Provider value={value}>
            {children}
        </GlobalModalsContext.Provider>
    );
};

function useGlobalModalContext(): GlobalModalsContextType {
    return useContext(GlobalModalsContext) as GlobalModalsContextType;
}

export { useGlobalModalContext, GlobalModalsProvider };
