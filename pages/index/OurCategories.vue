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
    <PrimaryButton label="View All" color="primary" size="large" class="self-center mt-4"
        @click="handleButtonClick" />
    </main>
</template>

<script>
import sectionHeader from '~/components/global/section-header.vue';
import PrimaryButton from '~/components/global/PrimaryButton.vue';

export default {
    components: {
        sectionHeader,
        PrimaryButton,
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
            ]
        };
    },
    methods: {
        handleButtonClick() {
            this.$router.push("/categories")
        }
    }
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
}
</style>