<template>
    <div>
        <MainHome />
        <GalleryComp />
        <CounterComp />
        <ArticlesHome />
    </div>
</template>

<script>

import GalleryComp from './GalleryComp.vue'
import CounterComp from './CounterComp.vue'
import ArticlesHome from './ArticlesHome.vue'
import MainHome from './MainHome.vue'

export default {
  name: 'PageHome',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: { GalleryComp, CounterComp, ArticlesHome, MainHome }
}
</script>

<style lang="scss" >
* {
    margin: 0;
    padding: 0;
}
</style>
