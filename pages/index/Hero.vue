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
                <a href="#" class="overflow">Baby’s & Toys</a>
                <a href="#" class="overflow">Groceries & Pets</a>
                <a href="#" class="overflow">Health & Beauty</a>
            </div>
        </div>

        <div class="slider flex-column justify-between">
            <button @click="prevSlide" class="prev-slide">&lt;</button>

            <!-- Slide Content Wrapper -->
            <div class="slide-wrapper flex justify-between flex-centered-y ">
                <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlide"
                    class="flex-column slide-content">
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
                <img :src="slides[currentSlide].image" alt="Slide Image" class="slide-image" >
            </div>

            <button @click="nextSlide" class="next-slide">&gt;</button>

            <!-- Indicators inside the slider div -->
            <div class="indicators">
                <span v-for="(slide, index) in slides" :key="index" :class="{ 'active': index === currentSlide }"
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
                    discount: "Up to 10% off Voucher",                // {
                //     logo: samsungLogo,
                //     title: "Samsung Galaxy S22",
                //     discount: "Flat 15% off",
                //     image: samsungHeroImage
                // },
                // {
                //     logo: huaweiLogo,
                //     title: "Huawei P50",
                //     discount: "Save $200 now",
                //     image: huaweiHeroImage
                // }
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
    gap: 40px;
    justify-content: space-between;
    position: relative;
    top: -1px;

    @media (width < 1020px) {
        grid-template-columns: 1fr;
        gap: 0px;
    }

    /* @media (width < 950px) {
        display: none;
    } */
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

    @media (width < 1020px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        gap: 0px;
        padding: 40px 0px 0px;
        border: 0px;
    }

    @media (width < 950px) {
        width: 100%;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
        padding: 20px 0px;
    }   
}

.hero .categories a {
    display: flex;
    gap: 50px;
    width: 180px;

    @media (width < 1020px) {
        width: fit-content;
        font-size: 14px;
    }
}

.hero .categories .overflow {
    display: none;
}

.slider {
    position: relative;
    width: 100%;
    height: 60vh;
    background-color: #000;
    margin-top: 40px;
    padding: 47px 67px;
    display: flex;  
    justify-content: space-between;

    @media (width < 1020px) {
        height: 60vh;
    }

    @media (width < 950px) {
        height: fit-content;
        gap: 50px;
        margin-top: 20px;
        padding: 27px 30px;
    }

    @media (width < 800px) {
        width: 100%;
        max-height: fit-content;
        height: 100%;
    }
}

.slide-wrapper {
    padding: 0px 20px;
    @media (width < 950px) {
        padding: 0px 50px;
    }
    @media (width < 800px) {
        flex-direction: column-reverse;
        padding: 0px 25px;
    }
}

.slider button {
    background-color: transparent;
    width: fit-content;
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

    @media (width < 950px) {
        gap: 10px;
    }

    @media (width < 800px) {
        align-self: flex-start;
        gap: 0px
    }
}

.slide-content h2 {
    @media (width < 950px) {
        font-size: 32px;
    }
}

.prev-slide,
.next-slide {
    position: absolute;
    top: 50%;
    width: 100px !important;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 30px;
    font-weight: 800;

    @media (width < 950px) {
        transform: translateY(-50%);
        width: 50px !important;
    }
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
    position: relative;
    /* Changed to relative */
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
    max-width: 300px;

    @media (width < 950px) {
        max-width: 200px;
    }
}
</style>
