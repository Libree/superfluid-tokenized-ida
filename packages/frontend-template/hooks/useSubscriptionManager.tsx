import { useAccount, useNetwork, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import { SubscriptionManager__factory } from "../src/typechain/SubscriptionManager__factory";
import { DEPLOYED_CONTRACTS } from "../src/utils/constants/contracts";
import { ethers } from 'ethers';

export function useSubscriptionManager() {

    const { address } = useAccount();
    const { chain } = useNetwork()

    const {
        data: subscriptions,
        isError: isErrorSubscriptions,
        isLoading: isLoadingSubscriptions
    } = useContractRead({
        address: DEPLOYED_CONTRACTS[chain?.id].manager,
        abi: SubscriptionManager__factory.abi,
        functionName: 'getSubscriptions',
        args: [address]
    })

    const {
        data: create,
        write: createSubscriptionTx,
        isLoading: isCreateLoading,
        isSuccess: isCreateStarted,
        error: createError,
    } = useContractWrite({
        address: DEPLOYED_CONTRACTS[chain?.id].manager,
        abi: SubscriptionManager__factory.abi,
        functionName: "createSubscription",
    });

    const { isSuccess: txCreateSuccess, error: txCreateError } = useWaitForTransaction({
        confirmations: 1,
        hash: create?.hash,
    });

    const createSubscription = (
        paymentToken: string,
        flowRate: number,
        tokenName: string,
        tokenSymbol: string,
        initialSupply: number,
        metadata: string
    ) => {
        createSubscriptionTx({
            args: [
                paymentToken,
                flowRate,
                tokenName,
                tokenSymbol,
                initialSupply,
                metadata
            ]
        })
    }

    return {
        subscriptions,
        isErrorSubscriptions,
        isLoadingSubscriptions,
        isCreateLoading,
        isCreateStarted,
        createError,
        txCreateSuccess,
        txCreateError,
        createSubscription
    };
};
