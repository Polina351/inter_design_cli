<template>
    <section class="banner">
    <img class="banner__image" src="../assets/project_banner.jpg" alt="banner">
    <div class="banner__info">
        <h2 class="banner__title">Our Project</h2>
        <p class="banner__subtitle">Home / Project</p>
    </div>
</section>
</template>

<script>
export default {
  name: 'VueSiteMainProject',

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
.banner {
position: relative;

&__image {
    max-width: 100%;
    aspect-ratio: 1920/356;

}

&__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 37px;
    border-top-right-radius: 37px;
    width: 500px;
    height: 180px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 33%;
}

&__title {
    @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
}

&__subtitle {
    letter-spacing: 0.22px;
    @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
}
}
</style>
