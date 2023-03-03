<script setup>
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const router = useRouter()

async function logout() {
  const { error } = await client.auth.signOut()
  if (error) return
  await router.push('/login')
}
</script>
<template>
  <nav class="flex items-center justify-around">
    <div>
      <button v-if="user" @click="logout()">Log Out</button>
    </div>
    <div>
      <NuxtLink v-if="!user" to="/login">Login</NuxtLink>
    </div>
    <div>
      <NuxtLink v-if="!user" to="/register">Register</NuxtLink>
    </div>
  </nav>
</template>
