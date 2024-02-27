<template>
    <div>
        <section class="articles">
        <h3 class="articles__title">Articles & News</h3>
        <p class="articles__subtitle">It is a long established fact that a reader will be distracted by the of readable
            content of a page when lookings at its layouts the points of using.</p>
        <div class="articles__cards">
            <ArticleCard v-for="card in getArticlesHome" :key="card.id" :card="card"/>
        </div>
    </section>
    </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ArticlesHome',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  computed: {
    ...mapGetters(['getArticlesBlog']),

    getArticlesHome () {
      const array = this.getArticlesBlog.slice(0)
      return array.splice(0, 3)
    }
  },
  components: { ArticleCard }
}
</script>

<style lang="scss" scoped>
@import 'vars';
@import 'mixins';
.articles {
    @include pageSize();
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 95px;

    &__title {
        letter-spacing: 1px;
        margin-bottom: 10px;
        margin-top: 95px;
        @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
    }

    &__subtitle {
        margin-bottom: 52px;
        max-width: 811px;
        text-align: center;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }

    &__cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 27px;
    }
}
</style>
