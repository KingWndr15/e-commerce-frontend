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
</NuxtLayout>
</template>

<script>
import Hero from './Hero.vue';
import Today from './Today.vue';
import Categories from './Categories.vue';
import BestSelling from './BestSelling.vue';
import Advertisement from './Advertisement.vue';
import OurProducts from './OurProducts.vue';
import Featured from './Featured.vue';
import Services from './Services'

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
  }
}
</script>