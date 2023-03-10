import { getUserById, updateStripeCustomerId } from '~/server/database/repositories/userRespository'
import { getSubscribeUrl } from '~/server/services/stripeService'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const lookupKey = body.lookup_key
  const userId = body.user_id

  const user = await getUserById(parseInt(userId))

  const { url, user: customer, shouldUpdateUser } = await getSubscribeUrl(lookupKey, user)

  if (shouldUpdateUser) {
    await updateStripeCustomerId(customer)
  }

  await sendRedirect(event, url)
})
