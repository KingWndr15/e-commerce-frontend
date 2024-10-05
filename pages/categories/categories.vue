<template>
    <main class="flex flex-column mt-10 pb-6">
        <div class="top items-end">
            <div class="flex flex-column gap-2 content-between">
                <sectionHeader>
                    Categories
                </sectionHeader>
                <h2 class="font-size-36">Browse By Category</h2>
            </div>
        </div>
        <div class="categories-grid mt-6">
            <div class="category-item" v-for="(item, index) in categories" :key="index"
                :class="{ active: item.active }">
                <div class="icon">{{ item.icon }}</div>
                <div class="label">{{ item.label }}</div>
            </div>
        </div>

        <div class="product-grid mt-5">
            <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
        </div>
        <PrimaryButton label="View More" color="primary" size="large" class="self-center mt-4"
            @click="handleButtonClick" />
    </main>
</template>

<script>
import sectionHeader from '~/components/global/section-header.vue';
import PrimaryButton from '~/components/global/PrimaryButton.vue';
import ProductCard from '~/components/global/ProductCard.vue';

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
        PrimaryButton,
        ProductCard,
    },
    data() {
        return {
            categories: [
                { icon: "📱", label: "Phones", active: false },
                { icon: "💻", label: "Computers", active: false },
                { icon: "⌚", label: "SmartWatch", active: false },
                { icon: "📷", label: "Camera", active: true }, // Mark this as active
                { icon: "🎧", label: "HeadPhones", active: false },
                { icon: "🎮", label: "Gaming", active: false },
            ],
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
                    colors: ["#FB1314", "#DB4444"]
                },
                {
                    name: 'Jr. Zoom Soccer Cleats',
                    image: cleats,
                    currentPrice: 1160,
                    reviews: 35,
                    colors: ["#EEFF61", "#DB4444"]
                },
                {
                    name: 'GP11 Shooter USB Gamepad',
                    image: gamepad,
                    currentPrice: 660,
                    reviews: 55,
                    isNew: true,
                    colors: ["#000", "#DB4444"]
                },
                {
                    name: 'Quilted Satin Jacket',
                    image: jacket,
                    currentPrice: 660,
                    reviews: 55,
                    colors: ["#184A48", "#DB4444"]
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

    @media (width < 800px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
}

.top h2 {
    font-size: 30px;
}

.heading {
    display: flex;
    gap: 100px;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;

    @media (width < 1200px) {
        grid-template-columns: repeat(4, 1fr);
        /* 4 columns on slightly smaller screens */
    }

    @media (width < 900px) {
        grid-template-columns: repeat(3, 1fr);
        /* 3 columns on tablets and smaller laptops */
    }

    @media (width < 600px) {
        grid-template-columns: repeat(2, 1fr);
        /* 2 columns on large phones */
    }

    @media (width < 400px) {
        grid-template-columns: repeat(1, 1fr);
        /* 1 column on small mobile devices */
    }
}

.category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.category-item.active {
    background-color: #e74c3c;
    /* Red background for the active state */
    color: white;
}

.category-item .icon {
    font-size: 24px;
    margin-bottom: 10px;
}

.category-item .label {
    font-size: 14px;
    font-weight: 500;
}

.category-item:hover {
    background-color: #f5f5f5;
    color: #000;
}


.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: start;
    gap: 30px;

    @media (width < 950px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}
</style>