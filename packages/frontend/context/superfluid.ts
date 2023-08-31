import { Framework } from "@superfluid-finance/sdk-core";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { provider } from '../config/wallet.config';

export type SuperfluidValue = {
    sfClient: any;
    superSigner?: any;
};

const SuperfluidContext = createContext<SuperfluidValue>({} as SuperfluidValue);

export function SuperfluidProvider({
    children,
} : {
    children: ReactNode,
}) {
    const [sfClient, setSfClient] = useState<any>();
    const [superSigner, setSuperSigner] = useState<any>();
    
    const { isConnected } = useAccount();
    const { chain } = useNetwork();


    useEffect(() => {
        if (!isConnected) return;

        async function configSuperfluid() {
            const client = await Framework.create({
                chainId: chain?.id as number,
                provider,
            });
            setSfClient(client);

            const signer = await client.createSigner({ web3Provider: provider })
            setSuperSigner(signer);
        };
        
        configSuperfluid();
    }, [isConnected, chain]);

    const value: SuperfluidValue = {
        sfClient,
        superSigner,
    };

    return (
        <SuperfluidContext.Provider value={value}>
            {children}
        </SuperfluidContext.Provider>
    );
};

export function useSuperfluid() {
    return useContext(SuperfluidContext);
};