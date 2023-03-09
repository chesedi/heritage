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
  <section class="pt-10 bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        PJYSO
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div class="mb-4 mx-auto">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Email
              </label>
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
          <p class="text-center text-gray-500 text-xs">
            &copy;2023 Chesedi Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!--  <div class="flex item-center justify-center">-->
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
  <!--    <div class="w-full max-w-xs"></div>-->
  <!--  </div>-->
</template>
