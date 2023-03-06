import { H3Event, sendError } from 'h3'
// import registerRequest from '@agency/tutorial/server/app/formRequests/RegisterRequest'
// import { validateUser } from '@agency/tutorial/server/app/services/userService'
// import bcrypt from 'bcrypt'
// import { IUser } from '@agency/tutorial/types/IUser'
// import { createUser } from '@agency/tutorial/server/database/repositories/userRespository'
// import { makeSession } from '@agency/tutorial/server/app/services/sessionService'
// import sendZodErrorResponse from '@agency/tutorial/server/app/errors/responses/ZodErrorsResponse'
// import sendDefaultErrorResponse from '@agency/tutorial/server/app/errors/responses/DefaultErrorsResponse'

export default eventHandler(async (event: H3Event) => {
  return 'hello'
  // try {
  //   const data = await registerRequest(event)
  //   const validation = await validateUser(data)
  //
  //   if (validation.hasErrors === true && validation.errors) {
  //     const errors = JSON.stringify(Object.fromEntries(validation.errors))
  //     return sendError(event, createError({ statusCode: 422, data: errors }))
  //   }
  //
  //   const encryptedPassword: string = await bcrypt.hash(data.password, 10)
  //
  //   const userData: IUser = {
  //     username: data.username,
  //     name: data.name,
  //     email: data.email,
  //     loginType: 'email',
  //     password: encryptedPassword,
  //   }
  //
  //   const user = await createUser(userData)
  //
  //   return await makeSession(user, event)
  // } catch (error: any) {
  //   if (error.data instanceof ZodError) {
  //     return await sendZodErrorResponse(event, error.data)
  //   }
  //
  //   return await sendDefaultErrorResponse(event, 'oops', 500, error)
  // }
})
