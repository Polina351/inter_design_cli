<template>
    <div class="article">
        <div class="article__imageBox">
            <img :src="require(`@/assets/${card.image}`)" alt="Kitchan Design" class="article__image">
            <p class="article__title">Kitchan Design</p>
        </div>
        <div class="article__info">
            <h4 class="article__header">{{ card.header }} </h4>
            <div class="article__nav">
                <p class="article__date">{{card.date}} </p>
                <div @click="$router.push({name:'projectdetails'})" class="article__link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleCard',
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

.article {
width: 340px;
border: 1px solid $greyLines;
border-radius: 62px;
padding: 20px;
transition: all 0.3s;

&:hover {
background-color: #F4F0EC;
}

&:hover .article__link circle {
fill: #fff;
}

&__imageBox {
position: relative;
border-top-right-radius: 62px;
border-top-left-radius: 62px;
margin-bottom: 21px;
}

&__image {
border-top-right-radius: 62px;
border-top-left-radius: 62px;
}

&__title {
position: absolute;
bottom: 20px;
left: 20px;
letter-spacing: 0.16px;
text-transform: capitalize;
@include textPropertys($siteColorGrey, Jost, 16px, normal, 400, 150%);
display: block;
padding: 8px 11px;
border-top-right-radius: 8px;
border-top-left-radius: 8px;
border-bottom-right-radius: 8px;
background-color: #fff;
}

&__header {
min-height: 93px;
max-width: 305px;
margin-bottom: 28px;
letter-spacing: 0.5px;
@include textPropertys($siteColorBlack, DM Serif Display, 25px, normal, 400, 125%);
}

&__nav {
display: flex;
align-items: center;
justify-content: space-between;
}

&__date {
letter-spacing: 0.16px;
text-transform: capitalize;
@include textPropertys($siteColorGrey, Jost, 16px, normal, 400, 150%);
}

&__link {
display: block;

& circle {
    transition: all 0.3s;
}
}
}
</style>
