import { FC, ReactNode, createContext, useContext, useMemo, useState } from "react";

const GlobalModalsContext = createContext<GlobalModalsContextType>({} as GlobalModalsContextType);

type GlobalModalsContextType = {
    isHandleTxOpen: boolean;
    open: (arg?: MenuTypes) => void;
    close: (arg?: MenuTypes) => void;
};

export type MenuTypes = 'handleTx';

type Props = Record<'children', ReactNode>;

const GlobalModalsProvider: FC<Props> = ({ children }) => {
    const [isHandleTxOpen, setIsHandleTxOpen] = useState<GlobalModalsContextType['isHandleTxOpen']>(false);

    const open = (type?: MenuTypes) => {
        switch(type) {
            default:
                setIsHandleTxOpen(true);
                break;
        }
    };

    const close = (type?: MenuTypes) => {
        switch(type) {
            default:
                setIsHandleTxOpen(false);
                break;
        }
    };

    const value = useMemo(
        (): GlobalModalsContextType => ({
            isHandleTxOpen,
            open,
            close,
        }), [
            isHandleTxOpen,
        ]
    );

    return (
        <GlobalModalsContext.Provider value={value}>
            {children}
        </GlobalModalsContext.Provider>
    );
};

function useGlobalModalsContext(): GlobalModalsContextType {
    return useContext(GlobalModalsContext) as GlobalModalsContextType;
};

export { useGlobalModalsContext, GlobalModalsProvider };
