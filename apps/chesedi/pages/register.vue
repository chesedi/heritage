<script setup>
const credentials = reactive({
  firstName: '',
  surname: '',
  email: '',
  password: '',
  passwordRepeat: '',
})

const client = useSupabaseAuthClient()

async function register() {
  const { firstName, surname, email, password, passwordRepeat } = credentials
  console.log('password, passwordRepeat ', password, passwordRepeat)
  if (password !== passwordRepeat) return
  const { error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        surname,
        email,
      },
      emailRedirectTo: 'http://localhost:3000/login',
    },
  })

  if (error) {
    console.log('Error message:', error.message)
    alert('Something went wrong!')
    return
  }
  alert('Open the email we sent you to verify your account!')
}
</script>

<template>
  <h1>Create an account!</h1>
  <form>
    <div>
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" v-model="credentials.firstName" />
    </div>
    <div>
      <label for="surname">Surname</label>
      <input type="text" id="surname" v-model="credentials.surname" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="credentials.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="credentials.password" />
    </div>
    <div>
      <label for="password">Repeat Password</label>
      <input type="password" id="repeat-password" v-model="credentials.passwordRepeat" />
    </div>
    <div>
      <button @click="register">Submit</button>
    </div>
  </form>
</template>
