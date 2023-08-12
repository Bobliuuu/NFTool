import { FastifyReply } from "fastify"
import { ERROR500 } from "./constants"

export const ERRORS = {
  missingBody: new Error('Request body is missing.'),
  invalidToken: new Error('Token is invalid.'),
  invalidID: new Error('ID is invalid.'),
  tokenError: new Error('Invalid Token'),
}

export function handleServerError(reply: FastifyReply, error: any) {
  return reply.status(ERROR500.statusCode).send({error: error.message});
}
