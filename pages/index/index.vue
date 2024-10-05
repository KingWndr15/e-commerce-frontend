<template>
  <NuxtLayout>
    <Hero />
    <Today />
    <Categories />
    <BestSelling />
    <Advertisement />
    <OurProducts />
    <Featured />
    <Services />
    <BackToTop />
  </NuxtLayout>
</template>

<script>
import Hero from './Hero.vue';
import Today from './Today.vue';
import Categories from './OurCategories.vue';
import BestSelling from './BestSelling.vue';
import Advertisement from './Advertisement.vue';
import OurProducts from './OurProducts.vue';
import Featured from './Featured.vue';
import Services from './Services'
import BackToTop from '~/components/global/BackToTop.vue';

export default {
  components: {
    Hero,
    Today,
    Categories,
    BestSelling,
    Advertisement,
    OurProducts,
    Featured,
    Services,
    BackToTop
  }
}
</script>