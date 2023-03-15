import { searchQuestions } from '~/server/database/repositories/askJackRespository'

export default defineEventHandler(async (event) => {
  const queries = getQuery(event)

  return await searchQuestions(queries.search as string)
})
