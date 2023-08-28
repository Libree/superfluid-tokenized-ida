import { useEffect, useState } from "react";
import { ProtocolEnum, decryptUpload, encryptUpload } from "@spheron/browser-upload";
import { useSpheron } from "../context/spheron";
import { useLitNodeClient } from "../context/lit";
import * as LitJsSdk from '@lit-protocol/lit-node-client';
import { useNetwork } from "wagmi";

type UseFileEncryptionProps = {
    bucketName?: string;
    protocol?: ProtocolEnum;
}

export function useFileEncryption({
    bucketName = 'example-browser-encrypt',
    protocol = ProtocolEnum.IPFS,
}: UseFileEncryptionProps) {
    const [token, setToken] = useState<string>('');
    const { provider: spheronClient } = useSpheron();
    const { provider: litNodeClient } = useLitNodeClient();
    const { chain: wagmiChain } = useNetwork();
    const chain = wagmiChain?.name as string;

    const getSingleUploadToken = async () => {
        try {
            const { uploadToken } = await spheronClient.createSingleUploadToken({
                name: bucketName,
                protocol,
            });

            setToken(uploadToken);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getSingleUploadToken();
    }, []);

    const encryptFile = async (file: any) => {
        if (!litNodeClient) { 
            await litNodeClient.connect();
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

    const decryptFile = async (cid: any) => {
        if (!litNodeClient) {
            await litNodeClient.connect();
        }
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
        const decryptedFile = await decryptUpload({
            authSig,
            ipfsCid: cid,
            litNodeClient,
        });
        return decryptedFile;
    };

    return { encryptFile, decryptFile };
};
