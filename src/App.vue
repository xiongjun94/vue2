<template>
  <div id="app">
    <the-layout></the-layout>
  </div>
</template>

<script>
import TheLayout from '@/components/TheLayout/Index'

export default {
  name: 'App',
  components: { TheLayout }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
