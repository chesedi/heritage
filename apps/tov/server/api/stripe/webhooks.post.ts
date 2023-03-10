import Stripe from 'stripe'
import { handleSubscriptionChange } from '~~/server/services/stripeService'

export default defineEventHandler(async (event) => {
  const stripeEvent = await readBody<Stripe.Event>(event)

  let subscription: Stripe.Subscription | undefined

  // Handle the event
  switch (stripeEvent.type) {
    case 'customer.subscription.created':
      subscription = stripeEvent.data.object as Stripe.Subscription
      handleSubscriptionChange(subscription, stripeEvent.created)
      break
    case 'customer.subscription.deleted':
      subscription = stripeEvent.data.object as Stripe.Subscription
      break
    case 'customer.subscription.updated':
      subscription = stripeEvent.data.object as Stripe.Subscription
      // Then define and call a function to handle the event customer.subscription.updated
      break
    default:
      console.log(`Unhandled event type ${stripeEvent.type}`)
  }
})
