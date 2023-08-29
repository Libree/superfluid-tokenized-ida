import { PaymentOption } from "@superfluid-finance/widget";
import { DEPLOYED_CONTRACTS } from "../../utils/constants/contracts";

const paymentOptions: PaymentOption[] = [
    {
        chainId: 80001,
        receiverAddress: DEPLOYED_CONTRACTS[80001].manager as `0x${string}`,
        superToken: {
            address: "0x1ba8603da702602a8657980e825a6daa03dee93a",
        },
        flowRate: {
            amountEther: "1",
            period: "month",
        },
    },
];

export default paymentOptions;
