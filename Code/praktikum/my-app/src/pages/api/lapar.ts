// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveLapars } from "../../utils/db/servicefirebase";
type Data = {
  status: boolean;
  status_code: number;
  data: any;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = await retrieveLapars("lapars");
  res.status(200).json({ status: true, status_code: 200, data:data});
}