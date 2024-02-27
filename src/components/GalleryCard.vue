<template>
    <div class="card">
        <img :src="require(`@/assets/${card.image}`)" alt="Dream kitchen" class="card__image">
        <div class="card__content">
            <div class="card__info">
                <h4 class="card__title">{{ card.title }}</h4>
                <p class="card__text">{{ card.subtitle }}</p>
            </div>
            <div @click="$router.push({name:'projectdetails'})" class="card__link">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GalleryCard',
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
width: 547px;

&__image {
width: 547px;
aspect-ratio: 547/525;
}

&__content {
height: 95px;
display: flex;
justify-content: space-between;
align-items: end;
}

&__info {
margin-top: 20px;
height: 70px;
display: flex;
flex-direction: column;
justify-content: center;
}

&__title {
letter-spacing: 0.5px;
@include textPropertys($siteColorGrey, DM Serif Display, 25px, normal, 400, 125%);
}

&__text {
letter-spacing: 0.22px;
@include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
}

&__link {
display: block;

& circle, & path {
    transition: all 0.3s;
}

&:hover circle {
    fill:#292F36;
}

&:hover path {
    stroke:#F4F0EC;
}
}
}
</style>
