import { useEffect, useState } from "react";
import { upload } from "@spheron/browser-upload";

export function useUpload() {
    const [token, setToken] = useState<any>();

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
