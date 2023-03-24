import { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const count = Math.random()

  return count
})
