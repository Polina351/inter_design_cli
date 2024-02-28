<template>
    <div class="card">
        <img class="card__image" :src="require(`@/assets/project_grid/${card.image}`)" alt="">

        <div class="card__content">
            <div class="card__info">
                <h4 class="card__title">{{ card.header }}</h4>
                <p class="card__subtitle">{{ card.text }}</p>
            </div>
            <div @click="$router.push({name:'projectdetails'})" class="card__link">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    card: {}
  },
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

.card {
    width: 585px;

    &__image {
        width: 100%;
    }

    &__content {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__link {
        display: block;

        & circle {
            transition: all 0.3s;
        }

        &:hover  circle {
        fill: #fff;
    }
    }

    &__title {
        letter-spacing: 0.5px;
        @include textPropertys($siteColorBlack, DM Serif Display, 25px, normal, 400, 125%);
    }

    &__subtitle {
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }
}
</style>
