<script setup>
definePageMeta({
  middleware: 'auth',
})
/* Navigation will occur before fetching is complete.
  Handle pending and error states directly within your component's template
*/
const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))

watch(count, (newCount) => {
  console.log('count', count)
  console.log('newCount', newCount)
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>
<template>
  <h1>Welcome to the dashboard!</h1>
  <div>
    {{ pending ? 'Loading' : count }}
  </div>
  <!--  <div>-->
  <!--        <h1>Nuxt</h1>-->
  <!--        <div>-->
  <!--          <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900">-->
  <!--            <img-->
  <!--              class="w-full"-->
  <!--              src="https://tailwindcss.com/img/card-top.jpg"-->
  <!--              alt="Sunset in the mountains"-->
  <!--            />-->
  <!--            <div class="px-6 py-4 pb-2">-->
  <!--              <div class="font-bold text-xl mb-2 dark:text-white">The Coldest Sunset</div>-->
  <!--              <p class="text-gray-700 dark:text-gray-300 text-base">-->
  <!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!-->
  <!--                Maiores et perferendis eaque, exercitationem praesentium nihil.-->
  <!--              </p>-->
  <!--            </div>-->
  <!--            <div class="px-6 py-4">-->
  <!--              <span class="badge mr-2">#photography</span>-->
  <!--              <span class="badge mr-2">#travel</span>-->
  <!--              <span class="badge">#winter</span>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="m-10 bg-teal-400">-->
  <!--          <Suspense>-->
  <!--            <template #default> <profile-card /> </template>-->
  <!--            <template #fallback> <profile-card-skeleton /> </template>-->
  <!--          </Suspense>-->
  <!--        </div>-->
  <!--  </div>-->
</template>
<style lang="scss" scoped>
.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
