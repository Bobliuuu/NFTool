import axios from "axios";
import { NextApiResponse } from "next";

// this route handles the fetching of supported chains by covalent
export default async function handler(
  res: NextApiResponse
) {
  const key = process.env.COVALENT_KEY;

  try {
    const { data } = await axios.get(
      `https://api.covalenthq.com/v1/chains/?key=${key}`
    );
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching Supported Chains" });
  }
}