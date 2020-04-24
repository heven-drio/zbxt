<template>
  <div class="home">
    <HomePage></HomePage>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '../components/HomePage/index.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    HomePage
  }
}
</script>
