import { useEffect, useState } from "react";
import { decryptUpload, encryptUpload } from "@spheron/browser-upload";
import * as LitJsSdk from '@lit-protocol/lit-node-client';
import { useNetwork } from "wagmi";

export function useFileEncryption() {
    const [token, setToken] = useState<any>();
    const [litNodeClient, setLitNodeClient] = useState<LitJsSdk.LitNodeClient>();
    const { chain: wagmiChain } = useNetwork();
    const chain = wagmiChain?.name as string;

    const configLitClient = async () => {
        const client = new LitJsSdk.LitNodeClient({});
        await client.connect();
        setLitNodeClient(client)
    };

    const getSingleUploadToken = async () => {
        try {
            const uploadToken = await fetch('/api/spheron-token');
            setToken(uploadToken);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getSingleUploadToken();
        configLitClient();
    }, []);

    const encryptUploadIPFS = async (file: any) => {
        if (!litNodeClient) {
            configLitClient();
        }
        const configuration = { token };
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
        const uploadRes = await encryptUpload({
            file,
            litNodeClient,
            configuration,
            chain,
            authSig,
        });
        return uploadRes;
    };

    const decryptIPFS = async (cid: any) => {
        if (!litNodeClient) {
            configLitClient();
        }
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
        const decryptedFile = await decryptUpload({
            authSig,
            ipfsCid: cid,
            litNodeClient,
        });
        return decryptedFile;
    };

    return { encryptUploadIPFS, decryptIPFS };
};
