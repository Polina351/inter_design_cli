<template>
    <section class="banner">
        <div class="banner__position">
            <div class="banner__content">
                <h1 class="banner__header">404</h1>
                <p class="banner__text">We are sorry, but the page
                    you requested was not found</p>
                <button @click="$router.push({name:'home'})" class="banner__btn">Back To Home <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17"
                        viewBox="0 0 19 17" fill="none">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg></button>
            </div>
            <img src="../assets/notFound.jpg" alt="" class="banner__image">
        </div>
    </section>
</template>

<script>

export default {
  name: 'PageNotFound',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
@import 'vars';
@import 'mixins';

.banner {
    position: relative;

    &__position {
        @include pageSize();
        display: flex;
        align-items: center;
        justify-content: start;
        height: 912px;
    }

    &__content {
        max-width: 550px;
    }

    &__header {
        @include textPropertys($siteColorGold, DM Serif Display, 250px, normal, 400, 80%);
    }

    &__text {
        padding: 15px 0 23px;
        @include textPropertys($siteColorBlack, DM Serif Display, 35px, normal, 400, 150%);
    }

    &__image {
        position: absolute;
        max-width: 800px;
        right: 0px;
        top: 0;
        border-bottom-left-radius: 37%;
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
