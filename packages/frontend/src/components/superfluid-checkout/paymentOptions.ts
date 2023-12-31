import { PaymentOption } from "@superfluid-finance/widget";

const paymentOptions: PaymentOption[] = [
    {
        chainId: 80001,
        receiverAddress: "0x7BDa037dFdf9CD9Ad261D27f489924aebbcE71Ac",
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
