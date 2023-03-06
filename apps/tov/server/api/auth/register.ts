// @ts-ignore
import { CompatibilityEvent, sendError, useBody } from 'h3'
import bcrypt from 'bcrypt'
import { IUser } from '~/types/IUser'

export default async (event: CompatibilityEvent) => {
  const body = await useBody(event)
  const name = body.name
  const username = body.username
  const email: string = body.email
  const password: string = body.password

  const userExists = await doesUserExists(email, username)

  if (userExists.value === true) {
    sendError(event, createError({ statusCode: 422, statusMessage: userExists.message }))
  }

  const encryptedPassword: string = await bcrypt.hash(password, 10)

  const userData: IUser = {
    username,
    name,
    email,
    loginType: 'email',
    password: encryptedPassword,
  }

  const user = await createUser(userData)

  return await makeSession(user, event)
}
