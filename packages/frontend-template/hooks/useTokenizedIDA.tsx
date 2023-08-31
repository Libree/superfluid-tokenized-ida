import { useContractRead } from "wagmi";
import { TokenizedIDA__factory } from "../src/typechain/TokenizedIDA__factory";

export function useTokenizedIDA({ address }) {

    console.log(address)

    const {
        data: tokenSymbol
    } = useContractRead({
        address,
        abi: TokenizedIDA__factory.abi,
        functionName: 'symbol'
    })

    const {
        data: tokenName
    } = useContractRead({
        address,
        abi: TokenizedIDA__factory.abi,
        functionName: 'name'
    })

    const {
        data: totalSupply
    } = useContractRead({
        address,
        abi: TokenizedIDA__factory.abi,
        functionName: 'totalSupply'
    })


    return {
        tokenSymbol,
        tokenName,
        totalSupply
    };
};
