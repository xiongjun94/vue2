<template>
  <section class="container-box">
    <!-- 默认插槽 -->
    <default-slot>
      <span>默认插槽的内容</span>
    </default-slot>

    <!-- 具名插槽 -->
    <named-slot>
      <template slot="header">
        <span>头部内容</span>
      </template>
      <template slot="footer">
        <span>底部内容</span>
      </template>
    </named-slot>

    <!-- 作用域插槽 -->
    <scoped-slot>
      <template #default="{ user }">
        <span>{{ user.data }}</span>
      </template>
    </scoped-slot>
  </section>
</template>
<script>
import DefaultSlot from './DefualtSlot'
import NamedSlot from './NamedSlot'
import ScopedSlot from './ScopedSlot'

export default {
  name: 'Example',
  components: {
    DefaultSlot,
    NamedSlot,
    ScopedSlot
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.container-box {
  display: flex;
}

.container-box > * {
  margin-bottom: 20px;
  margin-right: 20px;
  background: lightblue;
}
</style>
