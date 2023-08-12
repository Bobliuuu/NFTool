import { NextApiRequest, NextApiResponse } from "next";
import { zdk } from "../../../../config/zora";
import { SearchQueryArgs } from "@zoralabs/zdk";

type internalSearchArg = {
  query: string;
  filter: {
    entityType: string;
    collectionAddresses?: string[];
  };
  pagination: { limit: number };
};

// pass in a query string, search based on token or collection, and can filter by a set of collections
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, type, 'collectionsFilter[]': collectionsFilter } = req.query;

  if (
    !query ||
    !type ||
    typeof query !== "string" ||
    !(type === "TOKEN" || type === "COLLECTION")
  ) {
    return res
      .status(400)
      .json({ message: "Bad Request - invalid or missing parameters" });
  }

  // Start building the searchArgs
  const searchArgs: internalSearchArg = {
    query: query,
    filter: {
      entityType: type,
    },
    pagination: { limit: 20 }, // limit of 20 search results
  };

  // Conditionally include collectionAddresses if collectionsFilter is present
  if (collectionsFilter) {
    searchArgs.filter.collectionAddresses = Array.isArray(collectionsFilter) ? collectionsFilter : [collectionsFilter];
  }

  try {
    const {
      search: { nodes: data },
    } = await zdk.search(searchArgs as SearchQueryArgs);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching NFT Transactions" });
  }
}
