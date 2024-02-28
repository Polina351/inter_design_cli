<template>
    <div>
        <img class="details__banner" src="../assets/details_banner.jpg" alt="banner">
        <section class="details__content">
            <section class="articles">
                <article v-if="!buttons.kitchen" class="building">
                    <h3 class="building__header">Let’s Get Solution for Building
                        Construction Work</h3>
                    <img src="../assets/details_article1.jpg" alt="kitchen" class="building__image">
                    <div class="building__info">
                        <p class="building__date">26 December,2022 </p>
                        <p class="building__tags">Interior / Home / Decore</p>
                    </div>
                    <p class="building__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                        randomised words which don't look even slightly believable.
                        <br><br>
                        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary.
                    </p>
                    <div class="quote">
                        <div class="quote__content">
                            <h3 class="quote__header">“</h3>
                            <p class="quote__text">The details are not the details.
                                <br>
                                They make the design.
                            </p>
                        </div>
                    </div>

                </article>
                <article v-if="!buttons.building" class="design">
                    <h3 class="design__header">Design sprints are great</h3>
                    <p class="design__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</p>
                    <ol class="design__list">
                        <li class="design__number">Contrary to popular belief.There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered.</li>
                        <li class="design__number">Contrary to popular belief.There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered.</li>
                        <li class="design__number">Contrary to popular belief.There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered.</li>
                    </ol>
                    <img src="../assets/details_article2.jpg" alt="kitchen" class="design__image">
                    <p class="design__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</p>
                </article>
            </section>
            <section class="tags">
                <h4 class="tags__header">Tags</h4>
                <button class="tags__btn" @click="setKitchen" :class="{ active: buttons.kitchen }">Kitchen</button>
                <button class="tags__btn" @click="setBedroom" :class="{ active: buttons.bedroom }">Bedroom</button>
                <button class="tags__btn" @click="setBuilding" :class="{ active: buttons.building }">Building</button>
                <button class="tags__btn" @click="setArchitecture" :class="{ active: buttons.architecture }">Architecture</button>
                <button class="tags__btn" @click="setPlanning" :class="{ active: buttons.planning }">Kitchen Planning</button>
                <button class="tags__btn" @click="setBedroom" :class="{ active: buttons.bedroom }">Bedroom</button>
            </section>
        </section>

    </div>
</template>

<script>

export default {
  name: 'PageDetails',
  data () {
    return {
      buttons: {
        kitchen: false,
        bedroom: false,
        building: false,
        architecture: false,
        planning: false
      }
    }
  },
  mounted () {
  },
  methods: {
    removeTag () {
      this.buttons.kitchen = false
      this.buttons.bedroom = false
      this.buttons.building = false
      this.buttons.architecture = false
      this.buttons.planning = false
    },
    setKitchen () {
      this.removeTag()
      this.buttons.kitchen = !this.buttons.kitchen
    },
    setBedroom () {
      this.removeTag()
      this.buttons.bedroom = !this.buttons.bedroom
    },
    setArchitecture () {
      this.removeTag()
      this.buttons.architecture = !this.buttons.architecture
    },
    setPlanning () {
      this.removeTag()
      this.buttons.planning = !this.buttons.planning
    },
    setBuilding () {
      this.removeTag()
      this.buttons.building = !this.buttons.building
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import 'vars';
@import 'mixins';

.details__content {
    @include pageSize();
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
}

.details__banner {
    width: 100%;
}

.articles {
    max-width: 800px;
    padding-bottom: 96px;
}

.building {
    margin-bottom: 20px;

    &__header {
        margin-bottom: 11px;
        letter-spacing: 1px;
        @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
    }

    &__image {
        border-radius: 50px;
        max-width: 100%;
        margin-bottom: 46px;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 48px;
        text-transform: capitalize;
        letter-spacing: 0.16px;
        @include textPropertys($siteColorGrey, Jost, 16px, normal, 400, 150%);
    }

    &__tags {
        padding-right: 50px;
    }

    &__text {
        padding-bottom: 35px;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }
}

.quote {
    aspect-ratio: 800/267;
    padding-bottom: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 50px;
    background: #F4F0EC;

    &__content {
        max-width: 345px;
        max-height: 200px;
        padding-bottom: 40px;
    }

    &__header {
        max-height: 90px;
        padding-bottom: 30px;
        text-align: center;
        letter-spacing: 4px;
        @include textPropertys($siteColorGold, DM Serif Display, 200px, italic, 400, 125%);
    }

    &__text {
        text-align: center;
        letter-spacing: 0.5px;
        @include textPropertys($siteColorGold, DM Serif Display, 25px, italic, 400, 125%);
    }
}

.design {

    &__header {
        margin-bottom: 20px;
        letter-spacing: 1px;
        @include textPropertys($siteColorBlack, DM Serif Display, 50px, normal, 400, 125%);
    }

    &__text {
        margin-bottom: 24px;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }

    &__list {
        padding-inline-start: 27px;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }

    &__number {
        margin-bottom: 32px;
        padding: 0 0 0 14px;
    }

    &__image {
        border-radius: 50px;
        padding-bottom: 35px;
    }
}

.tags {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;

    &__header {
        margin-bottom: 24px;
        min-width: 250px;
        @include textPropertys($siteColorBlack, DM Serif Display, 25px, normal, 400, 125%);
    }

    &__btn {
        padding: 9px 30px;
        border: 0;
        border-radius: 10px;
        background: #F4F0EC;
        @include textPropertys($siteColorGrey, Jost, 18px, normal, 400, 125%);
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            color: #fff;
            background: $siteColorBlack;
        }
    }

    .active {
        color: #fff;
        background: $siteColorBlack;
    }
}
</style>
