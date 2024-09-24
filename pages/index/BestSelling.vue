<template>
    <main class="flex flex-column mt-10 pb-6">
        <div class="top items-end">
            <div class="flex flex-column gap-2 content-between">
                <sectionHeader>
                    This Month
                </sectionHeader>
                <h2 class="font-size-36" >Best Selling Products</h2>
            </div>
            <PrimaryButton label="View All" color="primary" size="large" class="self-center mt-6"  @click="handleButtonClick" />
        </div>
        <div class="product-grid mt-2">
            <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
        </div>
    </main>
</template>

<script>
import sectionHeader from '~/components/global/section-header.vue';
import CountdownTimer from '~/components/global/CountdownTimer.vue';
import ProductCard from '~/components/global/ProductCard.vue';
import PrimaryButton from '~/components/global/PrimaryButton.vue';

// Import images from the assets folder
import hoodie from "@/assets/images/global/cards/BestSelling/hoodie.png";
import bag from "@/assets/images/global/cards/BestSelling/bag.png";
import liquidCooler from "@/assets/images/global/cards/BestSelling/liquid-cooler.png";
import smallShelf from "@/assets/images/global/cards/BestSelling/small-bookshelf.png";

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
                    name: 'The north coat',
                    image: hoodie,
                    originalPrice: 360,
                    currentPrice: 260,
                    reviews: 88,
                },
                {
                    name: 'Gucci duffle bag',
                    image: bag,
                    originalPrice: 1160,
                    currentPrice: 960,
                    reviews: 75,
                },
                {
                    name: 'RGB liquid CPU Cooler',
                    image: liquidCooler,
                    originalPrice: 170,
                    currentPrice: 160,
                    reviews: 99,
                },
                {
                    name: 'Small BookSelf',
                    image: smallShelf,
                    currentPrice: 360,
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
}
</style>