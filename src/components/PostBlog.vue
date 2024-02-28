<template>
    <section class="post">
        <h2 class="post__title">Latest Post</h2>
        <div class="post__content">
            <img src="../assets/post_blog.jpg" alt="" class="post__image">
            <div class="post__info">
                <h4 class="post__header">Low Cost Latest Invented Interior Designing Ideas</h4>
                <p class="post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
                    maximus.posuere in.Contrary to popular belief.
                    <br> <br>
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                </p>
                <div class="post__nav">
                    <p class="post__date">26 December,2022 </p>
                    <div @click="$router.push({name:'projectdetails'})" class="post__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PostBlog',

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

.post {

    padding-top: 200px;
    padding-bottom: 150px;
    @include pageSize();

    &__title {
        margin-bottom: 30px;
        letter-spacing: 1px;
        @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
    }

    &__content {
        display: flex;
        align-items: center;
        gap: 65px;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid $greyLines;
        border-radius: 62px;
    }

    &__image {
        border-radius: 62px;
    }

    &__info {
        width: 490px;
        height: 375px;

    }

    &__header {
        letter-spacing: 0.5px;
        @include textPropertys($siteColorBlack, DM Serif Display, 25px, normal, 400, 125%);
    }

    &__text {
        padding: 22px 0 40px;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
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

        &:hover circle {
            fill: #fff;
        }

        & circle {
            transition: all 0.3s;
        }
    }
}
</style>
