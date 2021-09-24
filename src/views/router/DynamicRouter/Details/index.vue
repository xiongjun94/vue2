<template>
  <section class="container">
    <div>
      <h3>route.parmas</h3>
      <span>{{ parmas }}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Details',
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
    params() {
      return this.$route.params || ''
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
