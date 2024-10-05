<template>
  <main class="flex mt-10 justify-between">
    <div class="left flex flex-column gap-2 ">
      <p class="font-size-16 green weight-6">Categories</p>
      <h2 class="font-size-36 white">Enhance Your <br> Music Experience</h2>
      <Countdown />
      <button class="buy-now">Buy Now!</button>
    </div>
    <div class="image-container">
      <img src="@/assets/images/advertisment/speaker.png" alt="Speaker" />
    </div>
  </main>
</template>

<script>
import Countdown from '@/components/advertisment/AdvertisementCountdown.vue';

export default {
  components: {
    Countdown,
  },
};
</script>


<style scoped>
main {
  background-color: black;
  padding: 70px 55px;
  display: flex;
  align-items: center;

  @media (width < 950px) {
    flex-direction: column-reverse;
  }

  @media (width < 800px) {
    padding: 50px 35px;
  }
}

.left {
  display: flex;
  align-self: stretch;
  justify-content: space-between;

  @media (width < 950px) {
    margin-top: 50px;
    align-items: center;
  }
}

.left h2 {
  @media (width < 950px) {
    text-align: center;
  }
  @media (width < 800px) {
    font-size: 25px;  
  }
}

.buy-now {
  background-color: var(--ascent);
  color: #fff;
  padding: 16px 48px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  width: fit-content;
  /* Ensure the button takes up only as much space as needed */
}

.image-container {
  max-width: 50%;
  height: fit-content;
  position: relative;
  /* Required for the shadow effect */
}

.image-container::after {
  content: '';
  position: absolute;
  top: 0px;
  /* Adjust this value to control the shadow's offset */
  left: 0px;
  /* Adjust this value to control the shadow's offset */
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.539);
  /* The shadow color */
  filter: blur(150px);
  /* Adjust the blur value for the desired shadow softness */
  /* z-index: -1; */
  border-radius: 20px;
  /* Adjust if you want rounded shadow edges */
}

.image-container img {
  max-width: 100%;
  height: auto;
  position: relative;
  /* Ensures the image remains in front of the shadow */
  z-index: 1;
}
</style>