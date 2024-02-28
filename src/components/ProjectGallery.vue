<template>
    <section class="content">
        <div class="categories">
            <button class="categories__btn" @click="activateBtn('isActiveBathroom')"
                :class="{ categories__btn_active: isActiveBathroom }">Bathroom</button>
            <button class="categories__btn" @click="activateBtn('isActiveBedRoom')"
                :class="{ categories__btn_active: isActiveBedRoom }">Bed&nbsp;Room</button>
            <button class="categories__btn" @click="activateBtn('isActiveKitchan')"
                :class="{ categories__btn_active: isActiveKitchan }">Kitchan</button>
            <button class="categories__btn" @click="activateBtn('isActiveLivingArea')"
                :class="{ categories__btn_active: isActiveLivingArea }">Living&nbsp;Area</button>
        </div>
        <div class="cards" :class="{ cards__small: isTenCards, cards__small2: isSmallCards }">
            <ProjectCard class="card" v-for="card in arrayCards" :key="card.id" :card="card" />
        </div>
        <div class="content__btns">
            <button @click="getCardsFirst" class="content__btn">01</button>
            <button @click="getCardsSecond" class="content__btn">02</button>
            <button @click="getCardsThird" class="content__btn">03</button>
            <button @click="showMoreCards" class="content__btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 320 512">
                    <path
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectGallery',
  data () {
    return {
      arrayCards: [],
      arrayForNextBtn: [],
      count: 0,
      isActiveBathroom: false,
      isActiveBedRoom: true,
      isActiveKitchan: false,
      isActiveLivingArea: false,
      isTenCards: false,
      isSmallCards: false,
      isActiveBtn: false
    }
  },
  mounted () {
  },
  methods: {
    activateBtn (item) {
      this.isActiveBathroom = false
      this.isActiveBedRoom = false
      this.isActiveKitchan = false
      this.isActiveLivingArea = false

      if (item === 'isActiveBathroom') {
        this.isActiveBathroom = true
      } else if (item === 'isActiveBedRoom') {
        this.isActiveBedRoom = true
      } else if (item === 'isActiveKitchan') {
        this.isActiveKitchan = true
      } else if (item === 'isActiveLivingArea') {
        this.isActiveLivingArea = true
      }
      this.ChangeArray()
    },

    ChangeArray () {
      if (this.isActiveBathroom) {
        this.arrayCards = this.getProjectBathroom
      } else if (this.isActiveBedRoom) {
        this.arrayCards = this.getProjectBedroom
      } else if (this.isActiveKitchan) {
        this.arrayCards = this.getProjectKitchen
      } else if (this.isActiveLivingArea) {
        this.arrayCards = this.getProjectLivingArea
      }

      this.arrayForNextBtn = this.arrayCards.slice(0)
    },

    getCardsFirst () {
      this.arrayCards = this.arrayForNextBtn.slice(0).splice(0, 2)
      this.count = 1
      this.isTenCards = true
      return this.arrayCards
    },
    getCardsSecond () {
      this.arrayCards = this.arrayForNextBtn.slice(0).splice(2, 2)
      this.count = 2
      this.isSmallCards = true
      return this.arrayCards
    },
    getCardsThird () {
      this.arrayCards = this.arrayForNextBtn.slice(0).splice(4, 2)
      this.count = 3
      this.isTenCards = true
      return this.arrayCards
    },
    showMoreCards () {
      if (this.count === 1) {
        this.getCardsSecond()
      } else if (this.count === 2) {
        this.getCardsThird()
      } else if (this.count === 3 || this.count === 0) {
        this.getCardsFirst()
      }
    }
  },
  created () {
    this.arrayCards = this.getProjectBedroom
    this.isTenCards = false
    this.isSmallCards = false
  },
  computed: {
    ...mapGetters(['getProjectBedroom', 'getProjectKitchen', 'getProjectBathroom', 'getProjectLivingArea'])
  },
  components: { ProjectCard }
}
</script>

<style lang="scss" scoped>
@import 'vars';
@import 'mixins';

.content {
    @include pageSize();
    padding: 200px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

.categories {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // gap: 20px;
    width: 880px;
    box-sizing: border-box;
    border: 1px solid $siteColorGold;
    border-radius: 18px;

    &__btn {
        width: 220px;
        padding: 26px 60px;
        border-radius: 18px;
        border: 0;
        background-color: inherit;
        cursor: pointer;
        letter-spacing: 0.36px;
        @include textPropertys($siteColorBlack, Jost, 18px, normal, 400, 125%);
        transition: all 0.3s;

        &:hover {
            color: #FFF;
            background-color: $siteColorGold;
        }

        &_active {
            color: #FFF;
            background-color: $siteColorGold;
        }
    }
}

.cards {
    padding: 60px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    &__small {
        grid-template-rows: repeat(3, 1fr);
    }

    &__small2 {
        grid-template-rows: repeat(2, 1fr);
    }
}

.card {

    &:nth-child(1) {
        grid-area: 1 / 1 / 4 / 2;
    }

    &:nth-child(2) {
        grid-area: 1 / 2 / 3 / 3;
    }

    &:nth-child(3) {
        grid-area: 4 / 1 / 6 / 2;
    }

    &:nth-child(4) {
        grid-area: 3 / 2 / 6 / 3;
    }

    &:nth-child(5) {
        grid-area: 6 / 1 / 9 / 2;
    }

    &:nth-child(6) {
        grid-area: 6 / 2 / 8 / 3;
    }

    &:nth-child(7) {
        grid-area: 9 / 1 / 11 / 2;
    }

    &:nth-child(8) {
        grid-area: 8 / 2 / 10 / 3;
    }

}
</style>
