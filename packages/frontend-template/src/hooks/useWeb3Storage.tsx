import { PayloadMetadata } from "../components/forms/subscription-form";
import { WEB3STORAGE_TOKEN } from "../utils/constants/api";
import { Web3Storage } from 'web3.storage'

export function useWeb3Storage() {

    const makeFileFromJson = (metadata: PayloadMetadata) => {
        const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' })
        return new File([blob], `${metadata.name}.json`)
    }

    const uploadMetadata = async (metadata: PayloadMetadata, image?: File) => {
        const json = makeFileFromJson(metadata)
        const client = new Web3Storage({ token: WEB3STORAGE_TOKEN })
        const cid = await client.put(image ? [image, json] : [json])
        return cid
    }

    const getCID = async (cid: string) => {
        const client = new Web3Storage({ token: WEB3STORAGE_TOKEN })
        const res = await client.get(cid)
        if (!res?.ok) {
            throw new Error(`failed to get ${cid}`)
        }

        const files = await res.files();
        return files
    }

    return {
        uploadMetadata,
        getCID
    }

};
