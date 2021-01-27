<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="createdTag">点击</button>
    <div id="root"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {
  },
  methods: {
    createdTag(){
      let scr = document.createElement('script')
      scr.id = 'newTag'
      document.body.appendChild(scr)
      setTimeout(() => {
        let el = document.getElementById('newTag')
        if (el) {
          document.body.removeChild(el)
        }
      }, 500);
    }
  }
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
}
</style>
