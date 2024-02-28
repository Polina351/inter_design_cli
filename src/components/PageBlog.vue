<template>
    <div>

<MainBlog />
<PostBlog />
<ArticlesBlog />
    </div>
</template>

<script>
import ArticlesBlog from './ArticlesBlog.vue'
import MainBlog from './MainBlog.vue'
import PostBlog from './PostBlog.vue'

export default {
  name: 'PageBlog',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: { MainBlog, ArticlesBlog, PostBlog }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
</style>
