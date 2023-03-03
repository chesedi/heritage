import { removeRefreshToken } from '~/server/db/refreshToken'
import { sendRefreshToken } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const cookies = useCookie(event)
    const refreshToken = cookies.refresh_token

    await removeRefreshToken()
  } catch (error) {}

  sendRefreshToken(event, null)

  return { message: 'Done' }
})
