<template>
  <div class="profile-card2">
    <div class="profile-image">
      <img :src="userData.pic" />
    </div>
    <div class="profile-info">
      <span>Written By</span>
      <h3>{{ userData.name }}</h3>
      <p>{{ userData.bio }}</p>
    </div>
  </div>
</template>
<script>
const loadUserData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        name: 'chesedi',
        pic: 'https://picsum.photos/200/200',
        bio: 'l run a VueJS community',
      })
    }, 2000)
  )
}

export default {
  async setup() {
    const userData = ref(await loadUserData())

    return {
      userData,
    }
  },
}
</script>
<style lang="scss" scoped>
.profile-card2 {
  @apply w-full max-w-[700px] min-h-[180px] bg-white mx-auto p-[30px] box-border overflow-hidden rounded-[20px];
}
.profile-card {
  width: 100%;
  max-width: 700px;
  min-height: 180px;
  background: white;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
}
.profile-image {
  width: 10%;
  float: left;
}
.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 5px solid #42b883;
  padding: 5px;
}
.profile-info {
  width: 85%;
  float: right;
}
.profile-info span {
  text-transform: uppercase;
  color: #777;
  letter-spacing: 3px;
}
.profile-info h3 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #222;
}
.profile-info p {
  line-height: 140%;
  color: #777;
}
</style>
