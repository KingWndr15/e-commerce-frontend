<template>
  <div class="mb-6" >
    <div class="banner">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <a href="" class="ml-1">ShopNow</a>
    </div>
    <main class="mt-4 mb-2">
      <nav class="mt-1">
        <div class="left">
          <h2 class="font-size-28 weight-7">Exclusive</h2>
          <div class="links">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Sign Up</a>
          </div>
        </div>

        <div class="right">
          <div class="search">
            <input type="text" placeholder="What are you looking for?">
            <img src="@/assets/icons/global/search.svg" alt="">
          </div>
          <div class="cta">
            <a href=""><img src="@/assets/icons/global/heart.svg" alt=""></a>
            <a href=""><img src="@/assets/icons/global/cart.svg" alt=""></a>
          </div>
        </div>
      </nav>
    </main>
    <hr>
    <slot />
  </div>
</template>

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
}

nav .left {
  display: flex;
  gap: 100px;
}

nav .left .links {
  display: flex;
  align-items: center;
  gap: 30px;
}

nav .left .links a:hover {
  border-bottom: 1px solid 808080;
}

nav .right {
  display: flex;
  align-items: center;
  gap: 24px;
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
}

nav .right .search input::placeholder {
  color: 7a7a7a;
}

nav .right .cta {
  display: flex;
  align-items: center;
  gap: 16px;
}

nav .right .cta a {
  display: flex;
  align-items: center;
}
</style>