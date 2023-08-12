import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const theGraphSchema = {
    count: S.integer().required()
} as FastifySchema
