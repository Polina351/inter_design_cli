<template>
    <section class="gallery">
        <h1 class="gallery__title">Follow Our Projects</h1>
        <p class="gallery__subtitle">It is a long established fact that a reader will be distracted by the of
            readable content of page lookings at its layouts points.</p>
        <div class="gallery__cards">
        <GalleryCard v-for="card in getModernKitchen" :key="card.id" :card="card"/>

        </div>
        </section>
</template>

<script>
import GalleryCard from './GalleryCard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'GalleryComp',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {

  },
  computed: {
    ...mapGetters(['getModernKitchen'])
  },

  components: { GalleryCard }
}
</script>

<style lang="scss" scoped>
@import 'vars';
@import 'mixins';

.gallery {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    @include pageSize();

    &__title {
        margin-bottom: 5px;
        letter-spacing: 1px;
        @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
    }

    &__subtitle {
        max-width: 737px;
        text-align: center;
        margin-bottom: 95px;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }

    &__cards {
        display: flex;
        gap: 56px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>
