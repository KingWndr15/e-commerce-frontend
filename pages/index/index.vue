<template>
  <NuxtLayout>
    <Hero />
    <Today />
    <Categories />
    <BestSelling />
    <Advertisement />
  </NuxtLayout>
</template>

<script>
import Hero from './Hero.vue';
import Today from './Today.vue';
import Categories from './Categories.vue';
import BestSelling from './BestSelling.vue';
import Advertisement from './Advertisement.vue';

export default {
  components: {
    Hero,
    Today,
    Categories,
    BestSelling,
    Advertisement,
  }
}
</script>