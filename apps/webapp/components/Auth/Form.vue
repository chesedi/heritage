<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>
    <div class="pt-5 space-y-6">
      <UIInput v-model="data.username" label="Username" placeholder="@username" />
      <UIInput v-model="data.password" label="Password" placeholder="********" type="password" />

      <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled"> Login</UIButton>
    </div>
  </div>
</template>
<script setup>
import useAuth from '~/composables/useAuth'

const data = reactive({
  password: '',
  username: '',
  loading: false,
})

async function handleLogin() {
  const { login } = useAuth()

  data.login = true
  try {
    await login({
      username: data.username,
      password: data.password,
    })
  } catch (error) {
    console.log(error)
  } finally {
    data.login = false
  }
}

const isButtonDisabled = computed(() => {
  return !data.username || !data.password || data.loading
})
</script>
