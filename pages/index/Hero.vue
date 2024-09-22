<template>
    <main>
        <div class="hero">
            <div class="categories">
                <a href="#">Woman’s Fashion</a>
                <a href="#">Men’s Fashion</a>
                <a href="#">Electronics</a>
                <a href="#">Home & Lifestyle</a>
                <a href="#">Medicine</a>
                <a href="#">Sports & Outdoor</a>
                <a href="#">Baby’s & Toys</a>
                <a href="#">Groceries & Pets</a>
                <a href="#">Health & Beauty</a>
            </div>
        </div>
        
        <div class="slider flex-column justify-between">
            <button @click="prevSlide" class="prev-slide">&lt;</button>
            
            <!-- Slide Content Wrapper -->
            <div class="slide-wrapper flex justify-between flex-centered-y ">
                <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlide" class="flex-column slide-content">
                    <div class="ml-1 flex-centered-y">
                        <img :src="slide.logo" alt="Slide Logo">
                        <p class="white ml-2">{{ slide.title }}</p>
                    </div>
                    <h2 class="white font-size-48 weight-6 mt-3">{{ slide.discount }}</h2>
                    <button class="flex-centered-y mt-3">
                        <p class="white weight-5">Shop Now</p>
                        <img class="ml-1" src="@/assets/icons/global/slider/arrow.svg" alt="arrow">
                    </button>
                </div>
                <img :src="slides[currentSlide].image" alt="Slide Image" class="slide-image">
            </div>

            <button @click="nextSlide" class="next-slide">&gt;</button>
            
            <!-- Indicators inside the slider div -->
            <div class="indicators">
                <span 
                    v-for="(slide, index) in slides" 
                    :key="index" 
                    :class="{'active': index === currentSlide}" 
                    @click="goToSlide(index)">
                </span>
            </div>
        </div>
    </main>
</template>

<script>
import appleLogo from "@/assets/icons/global/slider/apple-logo.svg";
import samsungLogo from "@/assets/icons/global/slider/samsung-logo.svg";
import huaweiLogo from "@/assets/icons/global/slider/huawei-logo.svg";

import heroImage from "@/assets/images/global/slider/hero.png";
import samsungHeroImage from "@/assets/images/global/slider/samsung-hero.png";
import huaweiHeroImage from "@/assets/images/global/slider/huawei-hero.png";

export default {
    data() {
        return {
            currentSlide: 0,
            slides: [
                {
                    logo: appleLogo,
                    title: "iPhone 14 Series",
                    discount: "Up to 10% off Voucher",
                    image: heroImage
                },
                {
                    logo: samsungLogo,
                    title: "Samsung Galaxy S22",
                    discount: "Flat 15% off",
                    image: samsungHeroImage
                },
                {
                    logo: huaweiLogo,
                    title: "Huawei P50",
                    discount: "Save $200 now",
                    image: huaweiHeroImage
                }
            ],
            slideInterval: null
        }
    },
    mounted() {
        this.startSlider();
    },
    beforeDestroy() {
        this.stopSlider();
    },
    methods: {
        startSlider() {
            this.slideInterval = setInterval(() => {
                this.nextSlide();
            }, 5000); // change slide every 5 seconds
        },
        stopSlider() {
            clearInterval(this.slideInterval);
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.stopSlider();
            this.startSlider();
        }
    }
}
</script>

<style scoped>
main {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 60px;
    justify-content: space-between;
    position: relative;
    top: -1px;
}

.hero {
    display: flex;
    gap: 45px;
}

.hero .categories {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px 40px 0px 0px;
    border-right: 2px solid #9A9A9A;
}

.hero .categories a {
    display: flex;
    gap: 50px;
    width: 180px;
}

.slider {
    position: relative;
    width: 100%;
    background-color: #000;
    margin-top: 40px;
    padding: 47px 67px;
    display: flex;
}

.slide-wrapper {
    padding: 0px 20px; 
}

.slider button {
    background-color: transparent;
    width: 110px;
    border: 0px;
    outline: 0px;
}

.slider button p {
    padding-bottom: 4px;
    border-bottom: 1px solid #fff;
}

.slide-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.prev-slide,
.next-slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.prev-slide {
    left: 0;
}

.next-slide {
    right: 0;
}

/* Adjust the indicators to be centered and at the bottom */
.indicators {
    display: flex;
    justify-content: center;
    position: relative; /* Changed to relative */
    margin-top: 20px;
}

.indicators span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #808080;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.indicators .active {
    background-color: #DB4444;
    border: 1px solid #fff;
}

.slide-image {
    max-height: 300px;
}
</style>
