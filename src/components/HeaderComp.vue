<template>
    <header class="header">
        <LogoComp />
        <MenuComp />
    </header>
</template>

<script>
import LogoComp from './LogoComp.vue'
import MenuComp from './MenuComp.vue'

export default {
  name: 'HeaderComp',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: { MenuComp, LogoComp }
}
</script>

<style lang="scss" scoped>

@import 'vars';
@import 'mixins';

.header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 50px 0 60px;
    @include pageSize();
}
</style>
