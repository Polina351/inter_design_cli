<template>
    <section class="articles">
        <h3 class="articles__title">Articles & News</h3>
        <div class="articles__cards">
            <ArticleCard v-for="card in arrayArticles" :key="card.id" :card="card" />
            <div class="articles__navigate">
                <div class="articles__btns">
                    <button @click="getArticlesFirst" class="articles__btn">01</button>
                    <button @click="getArticlesSecond" class="articles__btn">02</button>
                    <button @click="getArticlesThird" class="articles__btn">03</button>
                    <button @click="showMoreArticles" class="articles__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ArticlesHome',
  data () {
    return {
      arrayArticles: [],
      count: 0
    }
  },
  mounted () {
  },
  methods: {
    add () {
      console.log(this.arrayArticles)
    },
    getArticlesFirst () {
      this.arrayArticles = this.getArticlesBlog.slice(0).splice(0, 2)
      this.count = 1
      return this.arrayArticles
    },
    getArticlesSecond () {
      this.arrayArticles = this.getArticlesBlog.slice(0).splice(2, 2)
      this.count = 2
      return this.arrayArticles
    },
    getArticlesThird () {
      this.arrayArticles = this.getArticlesBlog.slice(0).splice(4, 2)
      this.count = 3
      return this.arrayArticles
    },
    showMoreArticles () {
      if (this.count === 1) {
        this.getArticlesSecond()
      } else if (this.count === 2) {
        this.getArticlesThird()
      } else if (this.count === 3 || this.count === 0) {
        this.getArticlesFirst()
      }
    }

  },
  created () {
    this.arrayArticles = this.getArticlesBlog
  },
  computed: {
    ...mapGetters(['getArticlesBlog'])
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
padding-bottom: 200px;

&__title {
    letter-spacing: 1px;
    margin-bottom: 30px;
    @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
}

&__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 27px;
}

&__navigate {
    min-width: 1200px;
    display: flex;
    justify-content: center;
}

&__btns {
    display: flex;
    gap: 20px;
}

&__btn {
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid $siteColorGold;
    background-color: #fff;
    @include textPropertys($siteColorGrey, Jost, 16px, normal, 400, 150%);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        border: none;
        background-color: #F4F0EC;
    }
}
}
</style>
