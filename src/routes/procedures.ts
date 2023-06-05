import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod'

export async function proceduresRoutes(app: FastifyInstance) {  
  app.get('/procedures/:id', async (request) => {
    const getProcedureParamsSchema = z.object({
      q: z.string()
    })

    const { q } = getProcedureParamsSchema.parse(request.query) // validação do parametro

    const query = String(q).toUpperCase() // Necessário pois o Oracle é sensitivo aos dados

    if (!query) {
      return { } // retorno vazio caso a query venha vazia do front
    }

    const procedures = await knex('PSC_V_API_PROCEDIMENTO')
    .select(
      'RESUMO',
      'CD_PROCEDIMENTO',
      'PROCEDIMENTO'
    )
    .whereLike('RESUMO', '%' + query + '%')
    .orderBy('CD_PROCEDIMENTO')
  
    return { procedures }
  })
  
  app.get('/procedure/:id', async (request) => {
    const getProcedureParamsSchema = z.object({
      q: z.string()
    })

    const { q } = getProcedureParamsSchema.parse(request.query) // validação do parâmetro

    const procedure = await knex('PSC_V_API_PROCEDIMENTO')
      .where({ 
        'CD_PROCEDIMENTO': q
      })
      .first()
    
    return { procedure }  
  })
}