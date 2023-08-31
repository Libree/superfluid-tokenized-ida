import { useEffect, useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { provider } from '../config/wallet.config';
import { useNetwork, useWalletClient } from "wagmi";

export function useSuperfluid() {
    const [sfClient, setSfClient] = useState<any>();
    const [superSigner, setSuperSigner] = useState<any>()

    const { data: walletClient } = useWalletClient();
    const { chain } = useNetwork();

    useEffect(() => {
        async function configSuperfluid() {
            setSfClient(await Framework.create({
                chainId: chain?.id as number,
                provider,
            }));
            setSuperSigner(sfClient.createSigner({ signer: walletClient }))
        }
        configSuperfluid();
    }, []);

    return {
        sfClient,
        superSigner,
    }
};
