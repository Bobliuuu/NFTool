import { FastifyReply } from 'fastify'
import { ERRORS, handleServerError } from '../helpers/errors'

import { ERROR400, STANDARD } from '../helpers/constants'
import { TheGraphRequest } from 'interfaces'

export const fetch = async (request: TheGraphRequest, reply: FastifyReply) => {
  try {
    const { id } = request.body
    if (!id) {
      reply.code(ERROR400.statusCode).send(ERRORS.invalidID)
    }
    reply.code(STANDARD.SUCCESS).send({
      id: 'hello' // TODO
    })
  } catch (err) {
    handleServerError(reply, err)
  }
}

export default fetch
