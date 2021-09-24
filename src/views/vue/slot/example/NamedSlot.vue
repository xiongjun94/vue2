<template>
  <section class="container">
    <slot name="header" />
    <h2>named slot component</h2>
    <slot name="footer" />
  </section>
</template>
<script>
export default {
  name: 'NamedSlot',
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
