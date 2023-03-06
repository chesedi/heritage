import { ISession } from '~~/types/ISession'
// import useErrorMapper from '@agency/tutorial/composables/useErrorMapper'

export async function registerWithEmail(
  username: string,
  name: string,
  email: string,
  password: string
) {
  try {
    const data = await $fetch<ISession>('/api/auth/register', {
      method: 'POST',
      body: { username, name, email, password },
    })

    console.log('data ', data)
    if (data) {
      useState('user').value = data
      await useRouter().push('/dashboard')
    }

    // return { hasErrors: false, loggedIn: true }
  } catch (e: any) {
    console.log('error ' + e.toString())
    // return useErrorMapper(error.data.data)
  }
}
