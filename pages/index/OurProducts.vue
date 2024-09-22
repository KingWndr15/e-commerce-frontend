    <template>
    <main class="flex flex-column mt-10 pb-6">
        <div class="top items-end">
            <div class="flex flex-column gap-2 content-between">
                <sectionHeader>
                    Our Products
                </sectionHeader>
                <h2 class="font-size-36" >Explore Our Products</h2>
            </div>
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
import dogfood from "@/assets/images/global/cards/OurProducts/dog-food.png";
import camera from "@/assets/images/global/cards/OurProducts/camera.png";
import gamingpc from "@/assets/images/global/cards/OurProducts/gaming-pc.png";
import cream from "@/assets/images/global/cards/OurProducts/cream.png";
import kidsracecar from "@/assets/images/global/cards/OurProducts/kids-race-car.png";
import cleats from "@/assets/images/global/cards/OurProducts/cleats.png";
import gamepad from "@/assets/images/global/cards/OurProducts/gamepad.png";
import jacket from "@/assets/images/global/cards/OurProducts/jacket.png";

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
                    name: 'Breed Dry Dog Food',
                    image: dogfood,
                    currentPrice: 100,
                    reviews: 35,
                },
                {
                    name: 'CANON EOS DSLR Camera',
                    image: camera,
                    currentPrice: 360,
                    reviews: 95,
                },
                {
                    name: 'ASUS FHD Gaming Laptop',
                    image: gamingpc,
                    currentPrice: 700,
                    reviews: 325,
                },
                {
                    name: 'Curology Product Set',
                    image: cream,
                    currentPrice: 145,
                    reviews: 145,
                },
                {
                    name: 'Kids Electric Car',
                    image: kidsracecar,
                    currentPrice: 960,
                    reviews: 65,
                    isNew: true,
                    colors: ["#FB1314","#DB4444"]
                },
                {
                    name: 'Jr. Zoom Soccer Cleats',
                    image: cleats,
                    currentPrice: 1160,
                    reviews: 35,
                    colors: ["#EEFF61","#DB4444"]
                },
                {
                    name: 'GP11 Shooter USB Gamepad',
                    image: gamepad,
                    currentPrice: 660,
                    reviews: 55,
                    isNew: true,
                    colors: ["#000","#DB4444"]
                },
                {
                    name: 'Quilted Satin Jacket',
                    image: jacket,
                    currentPrice: 660,
                    reviews: 55,  
                    colors: ["#184A48","#DB4444"]
                },
            ],
        };
    },
}
</script>


<style scoped>
main {
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