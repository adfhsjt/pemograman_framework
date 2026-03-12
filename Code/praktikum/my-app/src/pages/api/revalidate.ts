// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidate: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidate: false,
      message: "Insert correct token",
    });
  }

  const data = req.query.data;

  if (data === "produk" || data === "lapar") {
    const path = data === "produk" ? "/produk/static" : "/lapar/static";

    try {
      await res.revalidate(path);
      return res.status(200).json({ revalidate: true });
    } catch (error) {
      console.error("Error in API route:", error);
      return res.status(500).send({ revalidate: false });
    }
  }

  return res.json({
    revalidate: false,
    message: "Invalid query parameter. Expected 'data=produk' or 'data=lapar'.",
  });
}
