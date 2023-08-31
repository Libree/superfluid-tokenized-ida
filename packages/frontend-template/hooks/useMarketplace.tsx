import { useNetwork, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import { Marketplace__factory } from "../src/typechain/Marketplace__factory";
import { DEPLOYED_CONTRACTS } from "../src/utils/constants/contracts";

export function useMarketplace() {

    const { chain } = useNetwork()

    const {
        data: subscriptions,
        isError: isErrorSubscriptions,
        isLoading: isLoadingSubscriptions
    } = useContractRead({
        address: DEPLOYED_CONTRACTS[chain?.id].marketplace,
        abi: Marketplace__factory.abi,
        functionName: 'getSubSelling',
    })

    let subsSelling = []

    if (subscriptions) {
        subsSelling = subscriptions?.filter(
            (item, index) => subscriptions.indexOf(item) === index)
            .map(sub => {
                const {
                    data: openOrders,
                } = useContractRead({
                    address: DEPLOYED_CONTRACTS[chain?.id].marketplace,
                    abi: Marketplace__factory.abi,
                    functionName: 'getOpenOrders',
                    args: [sub]
                })

                const ordersData = openOrders?.map(order => ({ ...order, address: sub }))

                return ordersData
            })
    }


    const {
        data: buy,
        write: buyTx,
        isLoading: isbuyLoading,
        isSuccess: isbuyStarted,
        error: buyError,
    } = useContractWrite({
        address: DEPLOYED_CONTRACTS[chain?.id].marketplace,
        abi: Marketplace__factory.abi,
        functionName: "buyOrder",
    });

    const { isSuccess: txbuyCreateSuccess, error: txbuyCreateError } = useWaitForTransaction({
        confirmations: 1,
        hash: buy?.hash,
    });

    const buyOrder = (
        susbcription: string,
        amount: number,
        price: number
    ) => {
        buyTx({
            args: [
                susbcription,
                amount,
                price
            ]
        })
    }


    const {
        data: sell,
        write: sellTx,
        isLoading: issellLoading,
        isSuccess: issellStarted,
        error: sellError,
    } = useContractWrite({
        address: DEPLOYED_CONTRACTS[chain?.id].marketplace,
        abi: Marketplace__factory.abi,
        functionName: "registerOrder",
    });

    const { isSuccess: txsellCreateSuccess, error: txsellCreateError } = useWaitForTransaction({
        confirmations: 1,
        hash: buy?.hash,
    });


    const sellOrder = (
        susbcription: string,
        amount: number,
        price: number
    ) => {
        sellTx({
            args: [
                susbcription,
                amount,
                price
            ]
        })
    }

    return {
        txbuyCreateSuccess,
        txbuyCreateError,
        isbuyLoading,
        txsellCreateSuccess,
        txsellCreateError,
        issellLoading,
        buyOrder,
        sellOrder,
        subsSelling: subsSelling?.flat()
    };
};
