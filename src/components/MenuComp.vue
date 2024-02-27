<template>
    <nav class="menu">
        <p @click="$router.push({name:'home'})" class="menu__link">Home</p>
        <p @click="$router.push({name:'project'})" class="menu__link">Project</p>
        <p @click="$router.push({name:'blog'})" class="menu__link">Blog</p>
    </nav>
</template>

<script>
export default {
  name: 'MenuComp',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

@import 'vars';
@import 'mixins';

.menu {
display: flex;
justify-content: space-between;
align-items: center;
width: 243px;

&__link {
    text-decoration: none;
    cursor: pointer;
    @include textPropertys($siteColorBlack, Jost, 20px, normal, 400, 125%);
}
}

</style>
