import { useEffect, useState } from "react";
import { ProtocolEnum, upload } from "@spheron/browser-upload";
import { useSpheron } from "../context/spheron";

export function useUpload() {
    const bucketName = 'example-browser-upload';
    const protocol = ProtocolEnum.IPFS
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

    const uploadFiles = async ({
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

    return { uploadFiles };
};
