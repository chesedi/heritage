<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Search</Title>
      </Head>
    </MainSection>

    <TweetListFeed :tweets="searchTweets" />
  </div>
</template>
<script setup>
const { getTweets: getTweetsComposable } = useTweets()

const loading = ref(false)
const searchTweets = ref([])
const searchQuery = useRoute().query.q

watch(
  () => useRoute().fullPath,
  () => getTweets()
)

onBeforeMount(() => {
  getTweets()
})

async function getTweets() {
  console.log('searchQuery', searchQuery)
  loading.value = true
  try {
    const { tweets } = await getTweetsComposable({
      query: searchQuery,
    })

    searchTweets.value = tweets
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
