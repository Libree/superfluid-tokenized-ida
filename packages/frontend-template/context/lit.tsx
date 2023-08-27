import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import * as LitJsSdk from '@lit-protocol/lit-node-client';

export type LitValue = {
    provider: any
};

const LitContext = createContext<LitValue>({} as LitValue);

export function UserSpheronProvider({
    children,
}: {
    children: ReactNode,
}) {
    const { isConnected } = useAccount();
    const [provider, setProvider] = useState<any>();

    useEffect(() => {
        if (!isConnected) return;

        const client = new LitJsSdk.LitNodeClient({});
        setProvider(client);
    }, [isConnected]);


    // Value
    const value: LitValue = {
        provider,
    };

    return (
        <LitContext.Provider value={value}>
            {children}
        </LitContext.Provider>
    )
};

export function useLitNodeClient() {
    return useContext(LitContext);
};
