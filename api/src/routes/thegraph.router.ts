import { FastifyInstance } from 'fastify'
import { theGraphSchema } from '../schema'
import * as controllers from '../controllers'

async function theGraphRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/info',
    schema: theGraphSchema,
    handler: controllers.fetch,
  })
}

export default theGraphRouter
