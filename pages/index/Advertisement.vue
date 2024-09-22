<template>
    <main class="flex flex-column mt-10">
        <div class="left flex flex-column gap-2 ">
            <p class="font-size-16 green weight-6">Categories</p>
            <h2 class="font-size-36 white">Enhance Your <br> Music Experience</h2>
        </div>
        <div class="categories-grid mt-6">
            <div class="category-item" v-for="(item, index) in categories" :key="index"
                :class="{ active: item.active }">
                <div class="icon">{{ item.icon }}</div>
                <div class="label">{{ item.label }}</div>
            </div>
        </div>
    </main>
</template>

<script>
import sectionHeader from '~/components/global/section-header.vue';
import PrimaryButton from '~/components/global/PrimaryButton.vue';

// Import images from the assets folder
import gamepad from "@/assets/images/global/cards/gamepad.png";
import keyboard from "@/assets/images/global/cards/keyboard.png";
import monitor from "@/assets/images/global/cards/monitor.png";
import chair from "@/assets/images/global/cards/chair.png";

export default {
    components: {
        sectionHeader,
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
            categories: [
                { icon: "📱", label: "Phones", active: false },
                { icon: "💻", label: "Computers", active: false },
                { icon: "⌚", label: "SmartWatch", active: false },
                { icon: "📷", label: "Camera", active: true }, // Mark this as active
                { icon: "🎧", label: "HeadPhones", active: false },
                { icon: "🎮", label: "Gaming", active: false },
            ]
        };
    },
}
</script>


<style scoped>
main {
    background-color: black;
    padding: 70px 55px;
    display: flex;
}

.left {
    display: flex;
    align-self: stretch;
    justify-content: space-between;
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
        /* 3 columns on tablets and smaller laplefts */
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
}
</style>