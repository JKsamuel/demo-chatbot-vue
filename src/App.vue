<template>  
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  },
  methods: {
    refreshPage() {
      window.location.reload();
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
