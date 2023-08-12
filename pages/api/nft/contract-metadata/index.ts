import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

// grabs all metadata of an NFT contract
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key = process.env.COVALENT_KEY;
  const { chainName, contractAddress } = req.query;

  if (!(chainName && contractAddress))
    return res
      .status(400)
      .json({ message: "Bad Request - missing parameters" });

  try {
    const { data } = await axios.get(
      `https://api.covalenthq.com/v1/${chainName}/nft/${contractAddress}/metadata/?key=${key}`
    );
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching NFT Balance" });
  }
}