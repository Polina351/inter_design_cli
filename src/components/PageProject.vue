<template>
    <section>
        <MainProject />
        <ProjectGallery />

    </section>
</template>

<script>
import MainProject from './MainProject.vue'
import ProjectGallery from './ProjectGallery.vue'

export default {
  name: 'PageProject',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: { MainProject, ProjectGallery }
}
</script>

<style lang="scss" scoped>
@import 'vars';
@import 'mixins';

</style>
