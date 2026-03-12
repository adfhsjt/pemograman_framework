// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    revalidate: boolean;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        await res.revalidate("produk/static");
        return res.status(200).json({ revalidate: true });
    }catch (error){
        console.error("Error in API route:", error);
        return res.status(500).send({ revalidate: false });
    }
}
