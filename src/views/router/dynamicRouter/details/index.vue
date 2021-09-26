<template>
  <section class="container">
    <div>
      <p>name: {{ this.$route.params.name }}</p>
      <p>type: {{ this.$route.params.type }}</p>
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
  computed: {},
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
  width: 100%;
}
</style>
