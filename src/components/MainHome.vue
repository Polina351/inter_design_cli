<template>
    <section class="main">
        <img class="main__image" src="../assets/main_home.png" alt=" kitchen">
        <div class="main__content">
            <h1 class="main__header">Let Your Home
                Be Unique</h1>
            <p class="main__subtitle">There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
            <button class="main__btn" @click="$router.push({name:'details'})">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17"
                    viewBox="0 0 19 17" fill="none">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                        stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg></button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'MainComp',

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

.main {
    aspect-ratio: 1200/758;
    @include pageSize();
    position: relative;

    &__image {
        border-radius: 50px;
    }

    &__content {
        max-width: 435px;
        position: absolute;
        top:30%;
        left: 4%;
    }

    &__header {
        padding-bottom: 18px;
        @include textPropertys($siteColorBlack, DM Serif Display, 65px, normal, 400, 125%);
    }

    &__subtitle {
        letter-spacing: 0.22px;
        padding-bottom: 21px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }

    &__btn {
        padding: 26px 48px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 2px solid $siteColorBlack;
        border-radius: 18px;
        letter-spacing: 0.36px;
        @include textPropertys(#fff, Jost, 18px, normal, 600, 125%);
        background-color: $siteColorBlack;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: $siteColorBlack;
            background-color: #fff;
        }
    }
}
</style>
