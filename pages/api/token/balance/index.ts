import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

// get the token balance of a wallet
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key = process.env.COVALENT_KEY;
  const { chainName, walletAddress } = req.query;

  if (!(chainName && walletAddress))
    return res
      .status(400)
      .json({ message: "Bad Request - missing parameters" });

  try {
    const { data } = await axios.get(
      `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_v2/?key=${key}`
    );
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching Token Balance" });
  }
}