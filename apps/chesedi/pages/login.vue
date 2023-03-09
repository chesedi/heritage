<script setup>
const credentials = reactive({
  email: '',
  password: '',
})

const client = useSupabaseAuthClient()
const router = useRouter()
const user = useSupabaseUser()

async function login() {
  const { email, password } = credentials
  const { error } = await client.auth.signInWithPassword({ email, password })
  if (!error) return router.push('/')
  console.log(error)
}

watchEffect(async () => {
  if (user.value) {
    await router.push('/')
  }
})
</script>
<template>
  <div class="flex item-center justify-center">
    <!--  <form>-->
    <!--    <div>-->
    <!--      <label for="email">Email</label>-->
    <!--      <input type="email" id="email" v-model="credentials.email" />-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <label for="password">Password</label>-->
    <!--      <input type="password" id="password" v-model="credentials.password" />-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <button @click="login">Submit</button>-->
    <!--    </div>-->
    <!--  </form>-->
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4 mx-auto">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Email </label>
          <input
            v-model="credentials.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="credentials.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <!--        <p class="text-red-500 text-xs italic">Please choose a password.</p>-->
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="login"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2023 Chesedi Corp. All rights reserved.</p>
    </div>
  </div>
</template>
