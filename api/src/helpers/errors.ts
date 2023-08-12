import { FastifyReply } from "fastify"
import { ERROR500 } from "./constants"

export const ERRORS = {
  invalidToken: new Error('Token is invalid.'),
  invalidID: new Error('ID is invalid.'),
  tokenError: new Error('Invalid Token'),
}

export function handleServerError(reply: FastifyReply, error: any) {
  return reply.status(ERROR500.statusCode).send(ERROR500);
}
