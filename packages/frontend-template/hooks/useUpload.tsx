import { useEffect, useState } from "react";
import { ProtocolEnum, upload } from "@spheron/browser-upload";
import { useSpheron } from "../context/spheron";

type UseUploadProps = {
    bucketName?: string;
    protocol?: ProtocolEnum;
}

export function useUpload({
    bucketName = 'example-browser-upload',
    protocol = ProtocolEnum.IPFS,
}: UseUploadProps) {
    const [token, setToken] = useState<string>('');
    const { provider: spheronClient } = useSpheron();

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

    const uploadFile = async ({
        files,
    }: {
        files: any[]
    }) => {
        let currentlyUploaded = 0;

        const uploaded = await upload(
            files,
            {
                token,
                onChunkUploaded(uploadedSize, totalSize) {
                    currentlyUploaded += uploadedSize;
                    console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`);
                },
            }
        );
        return uploaded;
    };

    return { token, uploadFile };
};
