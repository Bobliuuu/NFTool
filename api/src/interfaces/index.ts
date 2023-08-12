
import { FastifyRequest } from 'fastify';

export interface TheGraphRequest extends FastifyRequest {
    body: {
        id: string,
    }
}
