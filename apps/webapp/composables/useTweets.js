import useFetchApi from '~/composables/useFetchApi'

export default () => {
  const usePostTweetModal = () => useState('post_tweet_modal', () => false)
  const useReplyTweet = () => useState('reply_tweet', () => null)
  const closePostTweetModal = () => {
    const postTweetModal = usePostTweetModal()
    postTweetModal.value = false
  }

  const setReplyTo = (tweet) => {
    const replyTweet = useReplyTweet()
    replyTweet.value = tweet
  }

  const openPostTweetModal = (tweet = null) => {
    const postTweetModal = usePostTweetModal()
    postTweetModal.value = true

    setReplyTo(tweet)
  }
  const postTweet = (formdata) => {
    const form = new FormData()

    form.append('text', formdata.text)
    form.append('replyTo', formdata.replyTo)

    formdata.mediaFiles.forEach((mediaFile, index) => {
      form.append('media_file_' + index, mediaFile)
    })

    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form,
    })
  }

  const getTweets = (params = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi('/api/tweets', {
          method: 'GET',
          params,
        })

        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  const getTweetById = (tweetId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi(`/api/tweets/${tweetId}`, {
          method: 'GET',
        })

        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    postTweet,
    getTweets,
    getTweetById,
    closePostTweetModal,
    usePostTweetModal,
    openPostTweetModal,
    useReplyTweet,
  }
}
