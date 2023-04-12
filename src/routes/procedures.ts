import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod'

export async function proceduresRoutes(app: FastifyInstance) {  
  app.get('/procedures/:id', async (request) => {
    const getProcedureParamsSchema = z.object({
      id: z.string()
    })

    const { id } = getProcedureParamsSchema.parse(request.params) // validação do parametro

    const procedures = await knex('PSC_V_API_PROCEDIMENTO')
      .select('*')
      .whereLike('CD_PROCEDIMENTO', '%' + id + '%')
      .orderBy('CD_PROCEDIMENTO')
  
    return { procedures }
  })
  
  app.get('/procedure/:id', async (request) => {
    const getProcedureParamsSchema = z.object({
      id: z.string()
    })

    const { id } = getProcedureParamsSchema.parse(request.params) // validação do parâmetro

    const procedure = await knex('PSC_V_API_PROCEDIMENTO')
      .where({ 
        'CD_PROCEDIMENTO': id
      })
      .first()
    
    return { procedure }  
  })
}