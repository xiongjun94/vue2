<template>
  <section class="container">
    <div>
      <h3>动态路由参数</h3>
      <span>{{ testData }}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'DynamicRouter',
  components: {
    
  },
  mixins: [],
  props: {
    
  },
  data() {
    return {
      
    }
  },
  computed: {
    testData() {
      const { name } = this.$route.params || ''
      return name
    }
  },
  watch: {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.container {
  
}
</style>
