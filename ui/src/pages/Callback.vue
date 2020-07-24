<template>
  <div class="spinner">
    <img src="../../static/loading.svg" alt="Loading">
  </div>
</template>

<script>

export default {
  mounted() {
    this.$auth.handleAuthentication().then( (data) => {
      console.log("User logging in...")
      this.$router.push({ name: 'home' })
    })
  }
}
</script>

<style scoped>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
