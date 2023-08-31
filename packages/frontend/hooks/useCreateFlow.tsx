import { useEffect, useState } from "react";
import { useSuperfluid } from "./useSuperfluid";
import { useAccount } from "wagmi";

type UseCreateFlowProps = {
    token: string;
    recipient: any;
    flowRate: any;
}

export function useCreateFlow({
    token = 'fDAIx',
    recipient,
    flowRate,
}: UseCreateFlowProps) {
    const [data, setData] = useState();

    const { isConnected } = useAccount();
    const { superSigner, sfClient } = useSuperfluid();


    useEffect(() => {
        async function createFlowOperation() {
            const superToken = await sfClient.loadSuperToken(token)

            try {
                const createFlow = superToken.createFlow({
                    sender: await superSigner.getAddress(),
                    receiver: recipient,
                    flowRate: flowRate,
                });

                console.log("Creating your stream...");
                const result = await createFlow.exec(superSigner);
                setData(result);
            } catch (err) {
                console.log("Hmmm, your tx threw an error.");
                console.log(err);
            }
        };

        if (isConnected) createFlowOperation();
    }, [])

    return { data };
};
