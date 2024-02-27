<template>
    <footer class="footer" :class="{footer_none: isNotFoundPage($route.name) }">
        <div class="footer__info">
            <LogoComp />
            <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__socials">
                <a href="#" class="footer__twitter">
                    <img class="footer__social" src="../assets/social_twitter.svg" alt="twitter">
                </a>
                <a href="#" class="footer__social">
                    <img class="footer__in" src="../assets/social_in.svg" alt="twitter">
                </a>
            </div>
        </div>
        <div class="footer__links">
            <h4 class="footer__heading">Pages</h4>
            <MenuComp :class="{ menu_footer: isActive}" />
        </div>
        <div class="footer__contacts">
            <h4 class="footer__heading">Contact</h4>
            <p class="footer__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="footer__text">contact@interno.com</p>
            <p class="footer__text">(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script>
import LogoComp from './LogoComp.vue'
import MenuComp from './MenuComp.vue'

export default {
  name: 'FooterComp',
  data () {
    return {
      isActive: true
    }
  },
  mounted () {
  },
  methods: {
    isNotFoundPage (route) {
      if (route === '404') {
        return true
      } else {
        return false
      }
    }
  },
  components: { LogoComp, MenuComp }
}
</script>

<style lang="scss" scoped>

@import 'vars';
@import 'mixins';

.footer {
    @include pageSize();
    height: 272px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    &_none {
        display: none;
    }

    &__info {
        max-width: 393px;
    }

    &__text {
        margin-top: 18px;
        letter-spacing: 0.22px;
        @include textPropertys($siteColorGrey, Jost, 22px, normal, 400, 150%);
    }

    &__heading {
        margin-bottom: 25px;
        @include textPropertys($siteColorBlack, DM Serif Display, 25px, normal, 400, 125%);
    }

    &__contacts {
        max-width: 258px;
    }

    &__socials {
        margin-top: 31px;
        display: flex;
        gap: 30px;
    }

    &__social {
        display: block;
    }
}

.menu_footer {
    flex-direction: column;
    align-items: start;
    gap: 30px;
}
</style>
