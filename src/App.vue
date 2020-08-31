<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'app',
  components: {
    AppHeader
  },
  mounted() {
    console.log(process.env.VUE_APP_API);
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    color: #000;
  }

  #app {
    width: 100%;
    margin: auto;
  }

  a { 
      text-decoration: none;
      color: #262626;
  }

  ul { 
      list-style: none;
  }
</style>
