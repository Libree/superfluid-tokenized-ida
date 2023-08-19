export function shortenAddress(address: string) {
    return address.length ? `${address.substring(0, 5)}…${address.slice(-4)}` : '';
};
