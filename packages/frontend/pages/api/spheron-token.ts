import { ProtocolEnum, SpheronClient } from "@spheron/storage";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const bucketName = "example-browser-upload";
            const protocol = ProtocolEnum.IPFS;
            const token = process.env.SPHERON_TOKEN as string;

            const client = new SpheronClient({ token });

            const uploadToken = await client.createSingleUploadToken({
                name: bucketName,
                protocol,
            });

            res.status(200).json({ uploadToken });
        } catch (err) {
            console.log(err);
        };
    }
    return res.status(400);
};

export default handler;
