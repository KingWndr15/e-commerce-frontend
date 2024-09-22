<template>
    <main class="flex flex-column mt-10 pb-6">
        <div class="top items-end">
            <div class="flex flex-column gap-2 content-between">
                <sectionHeader>
                    Today’s
                </sectionHeader>
                <h2 class="font-size-36" >Flash Sales</h2>
            </div>
            <CountdownTimer />
        </div>
        <div class="product-grid mt-2">
            <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
        </div>
        <PrimaryButton label="View All Products" color="primary" size="large" class="self-center mt-6"  @click="handleButtonClick" />
    </main>
</template>

<script>
import sectionHeader from '~/components/global/section-header.vue';
import CountdownTimer from '~/components/global/CountdownTimer.vue';
import ProductCard from '~/components/global/ProductCard.vue';
import PrimaryButton from '~/components/global/PrimaryButton.vue';

// Import images from the assets folder
import gamepad from "@/assets/images/global/cards/gamepad.png";
import keyboard from "@/assets/images/global/cards/keyboard.png";
import monitor from "@/assets/images/global/cards/monitor.png";
import chair from "@/assets/images/global/cards/chair.png";

export default {
    components: {
        sectionHeader,
        CountdownTimer,
        ProductCard,
        PrimaryButton,
    },
    data() {
        return {
            products: [
                {
                    name: 'HAVIT HV-G92 Gamepad',
                    image: gamepad,
                    originalPrice: 160,
                    currentPrice: 120,
                    reviews: 88,
                },
                {
                    name: 'AK-900 Wired Keyboard',
                    image: keyboard,
                    originalPrice: 1160,
                    currentPrice: 960,
                    reviews: 75,
                },
                {
                    name: 'IPS LCD Gaming Monitor',
                    image: monitor,
                    originalPrice: 400,
                    currentPrice: 370,
                    reviews: 99,
                },
                {
                    name: 'S-Series Comfort Chair',
                    image: chair,
                    originalPrice: 500,
                    currentPrice: 375,
                    reviews: 89,
                },
            ],
        };
    },
}
</script>


<style scoped>
main {
    border-bottom: 0.5px #ececec solid;
    padding-bottom: 60px
}

.top {
    display: flex;
    align-self: stretch;
    justify-content: space-between;
}

.heading {
    display: flex;
    gap: 100px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: start;
    gap: 30px;
    padding: 20px;
}
</style>