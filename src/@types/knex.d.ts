import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    PSC_V_API_PROCEDIMENTO: {
      CD_PROCEDIMENTO: string
      PROCEDIMENTO: string
      CLASSIFICACAO: string
      RACIONALIZACAO: string
      PRAZO: string
      NIVEL: number
      CD_CARENCIA: number
      CARENCIA: string
    }
  }
}