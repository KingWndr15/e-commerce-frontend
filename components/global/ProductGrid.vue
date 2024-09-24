<!-- components/ProductGrid.vue -->
<template>
  <div class="product-grid">
    <div class="product-item playstation">
      <h2>PlayStation 5</h2>
      <p>Black and White version of the PS5 coming out on sale</p>
      <a href="#">Shop Now</a>
    </div>
    <div class="product-item womens-collections">
      <h2>Women's Collections</h2>
      <p>Featured woman collections that give you another vibe.</p>
      <a href="#">Shop Now</a>
    </div>
    <div class="product-item speakers">
      <h2>Speakers</h2>
      <p>Amazon wireless speakers</p>
      <a href="#">Shop Now</a>
    </div>
    <div class="product-item perfume">
      <h2>Perfume</h2>
      <p>GUCCI INTENSE OUD EDP</p>
      <a href="#">Shop Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGrid'
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 1rem;
}

.product-item {
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 4px;
}

.product-item a {
  color: #fff;
  width: fit-content;
  font-weight: 600;
  border-bottom: 1px solid #fff;
  padding-bottom: 4px;
}

.product-item h2 {
  font-size: 24px;
  font-weight: 600;
}

.product-item p {
  max-width: 255px;
}

.playstation {
  grid-column: span 2;
  grid-row: span 2;
  background-color: black;
  background-image: url("@/assets/images/global/featured/ps5.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.womens-collections {
  grid-column: span 2;
  background-color: #333;
  background-image: url("@/assets/images/global/featured/fashion.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}


.speakers {
  background-color: #555;
  background-image: url("@/assets/images/global/featured/speaker.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.perfume {
  background-color: #777;
  background-image: url("@/assets/images/global/featured/perfume.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}
</style>