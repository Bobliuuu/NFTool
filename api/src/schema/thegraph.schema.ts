import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const theGraphSchema = {
    id: S.string().required()
} as FastifySchema
