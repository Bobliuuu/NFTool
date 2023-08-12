import { FastifyReply, FastifyRequest } from 'fastify'
import { handleServerError } from '../helpers/errors'
import axios from 'axios';
import { TheGraphRequest } from 'interfaces'

import loadConfig from '../config'
loadConfig()

const theGraphApiKey = process.env.THE_GRAPH_API_KEY;

if (!theGraphApiKey) {
  throw new Error('THE_GRAPH_API_KEY environment variable is required.');
}

const url = `https://gateway.thegraph.com/api/${theGraphApiKey}/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7`
console.log(url)

export const fetch = async (request: TheGraphRequest, reply: FastifyReply) => {
  try {
    console.log(request.body)
    // Check if the request body is present
    if (!request.body) {
      throw new Error('Request body is missing');
    }

    const count = request.body.count
    console.log(count) // TODO

    if (!count) {
      throw new Error('Count is missing');
    }

    const query = `
      {
        tokens(first: ${count}) {
          id
          name
          symbol
          decimals
          lastPriceBlockNumber
          lastPriceUSD
        }
      }
    `;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };

    try {
      const response = await axios.post(url, { query }, {
        headers: { 'Content-Type': 'application/json' },
      });
      return reply.code(200).send(response.data);
    } catch (error) {
      return reply.code(500).send({ error: 'An error occurred while fetching the data.' });
    }
  } catch (err) {
    handleServerError(reply, err)
  }
}

export default fetch
