import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { SpheronClient } from '@spheron/storage';

export type SpheronValue = {
    provider: any
};

const SpheronContext = createContext<SpheronValue>({} as SpheronValue);

export function UserSpheronProvider({
    children,
}: {
    children: ReactNode,
}) {
    const { isConnected } = useAccount();
    const [provider, setProvider] = useState<SpheronClient>();

    useEffect(() => {
        if (!isConnected) return;

        const token = process.env.SPHERON_TOKEN as string;
        const client = new SpheronClient({ token });
        setProvider(client);
    }, [isConnected]);


    // Value
    const value: SpheronValue = {
        provider,
    };

    return (
        <SpheronContext.Provider value={value}>
            {children}
        </SpheronContext.Provider>
    )
};

export function useSpheron() {
    return useContext(SpheronContext);
};
