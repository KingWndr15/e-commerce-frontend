  <template>
    <div>
      <div class="banner">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a href="" class="ml-1">ShopNow</a>
      </div>
      <main class="mt-4 mb-2">
        <nav class="mt-1">
          <div class="left">
            <img src="@/assets/icons/global/navbar/hamburger.svg" alt="" height="20px">
            <a href="/"><h2 class="font-size-28 weight-7">Exclusive</h2></a>
            <div class="links">
              <a href="">Home</a>
              <a href="">Contact</a>
              <a href="">About</a>
              <a href="/auth" v-if="!authorised">Sign Up</a>
            </div>

            <!-- mobile cta -->
            <div class="cta">
              <a href="/wishlist"><img src="@/assets/icons/global/heart.svg" alt=""></a>
              <a href="/cart"><img src="@/assets/icons/global/cart.svg" alt=""></a>
              <a href="" v-if="authorised"><img src="@/assets/icons/global/navbar/user.svg" alt=""></a>
            </div>
          </div>

          <div class="right">
            <div class="search">
              <input type="text" placeholder="What are you looking for?">
              <img src="@/assets/icons/global/search.svg" alt="">
            </div>

            <!-- Desktop cta -->
            <div class="cta">
              <a href="/wishlist"><img src="@/assets/icons/global/heart.svg" alt=""></a>
              <a href="/cart"><img src="@/assets/icons/global/cart.svg" alt=""></a>
              <a href="" v-if="authorised" ><img src="@/assets/icons/global/navbar/user.svg" alt=""></a>
            </div>
          </div>
        </nav>
      </main>
      <hr>
      <slot />
      <AppFooter class="mt-5" />
    </div>
  </template>


<script>
import AppFooter from "~/components/global/Footer.vue"

export default {
  data() {
    return {
      authorised: false
    }
  },
  components: {
    AppFooter,
  }
}
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 10px;
  color: #fff;

  padding: 15px auto;
}

.banner p,
.banner a {
  font-size: 14px;
}

.banner a {
  font-weight: 600;
  color: #fff;
  text-decoration: underline;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (width < 950px) {}
}

nav .left {
  display: flex;
  gap: 100px;

  @media (width < 1200px) {
    gap: 40px;
  }

  @media (width < 950px) {
    align-items: center;
    gap: 10px;
  }
}

nav .left img {
  height: fit-content;
  width: fit-content;

  @media (width > 950px) {
    display: none;
  }
}

nav .left h2 {
  width: fit-content;
}

nav .left .links {
  display: flex;
  align-items: center;
  gap: 30px;

  @media (width < 1000px) {
    display: none;
  }
}

nav .left .links a:hover {
  border-bottom: 1px solid #808080;
}

nav .right {
  display: flex;
  align-items: center;
  gap: 24px;

  @media (width < 950px) {
    gap: 10px;
  }
}

nav .right .search {
  display: flex;
  align-items: center;
  background-color: #F5F5F5;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  gap: 10px;
}

nav .right .search input {
  background-color: transparent;
  border: none;
  outline: none;

  @media (width < 800px) {
    display: none;
  }
}

nav .right .search input::placeholder {
  color: 7a7a7a;
}

nav .cta {
  display: flex;
  align-items: center;
  gap: 16px;
}

nav .left .cta {
  display: none;
}

nav .cta a {
  display: flex;
  align-items: center;
}
</style>