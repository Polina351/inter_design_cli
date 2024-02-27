<template>
    <section class="counters">
        <div class="counters__content">
            <div class="counters__counter">
                <h4 class="counters__header">12</h4>
                <p class="counters__text">Years&nbsp;Of&nbsp;Experiance</p>
            </div>
            <div class="counters__counter">
                <h4 class="counters__header">85</h4>
                <p class="counters__text">Success Project</p>
            </div>
            <div class="counters__counter">
                <h4 class="counters__header">15</h4>
                <p class="counters__text">Active Project</p>
            </div>
            <div class="counters__counter">
                <h4 class="counters__header">95</h4>
                <p class="counters__text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'CounterComp',

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
.counters {
    max-width: 100%;
    background-color: #F4F0EC;
    aspect-ratio: 1920/457;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        display: flex;
        gap: 15px;
        aspect-ratio: 100/16;
        max-width: 1200px;
    }

    &__counter {
        width: 205px;
        padding-right: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:not(:last-child) {
            border-right: 1px solid $siteColorGold;
        }
    }

    &__header {
        margin-bottom: 10px;
        letter-spacing: 1.7px;
        @include textPropertys($siteColorGold, DM Serif Display, 85px, normal, 400, 125%);
    }

    &__text {
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }
}
</style>
