<template>
    <div class="product-card">
        <!-- Discount Badge -->
        <div v-if="discount" class="discount-badge">-{{ discount }}%</div>
        <div v-if="product.isNew" class="new">NEW</div>

        <!-- Product Image -->
        <div class="image-wrapper">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="icon-wrapper">
                <span class="icon"><img src="@/assets/icons/global/heart.svg" alt="" height="14px"></span>
                <span class="icon"><img src="@/assets/icons/global/cart.svg" alt="" height="18px"></span>
            </div>
            <div class="add-to-cart ">
                <p class="weight-5">View Product</p>
            </div>
        </div>

        <!-- Product Details -->
        <div class="product-details justify-between">
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="price-wrapper">
                <div class="flex items-center gap-1">
                    <span class="current-price">${{ discountedPrice }}</span>
                    <span v-if="discount" class="original-price">${{ product.originalPrice }}</span>
                </div>

                <!-- Rating Section -->
                <div class="rating-wrapper">
                    <span class="stars">
                        <img src="@/assets/icons/global/cards/star.svg" v-for="i in 4" :key="i" alt="">
                        <img src="@/assets/icons/global/cards/grey-star.svg" alt="">
                        <!-- <i class="fas fa-star" ></i> -->
                    </span>
                    <span class="rating-count">({{ product.reviews }})</span>
                </div>
            </div>

            <!-- Color Section -->
            <div class="rating-wrapper">
                <span class="stars mt-1">
                    <div v-for="color in product.colors" :key="color" class="color-wrapper"
                        :class="{ 'active-color-wrapper': activeColor === color }">
                        <div class="color" :style="`background-color: ${color};`" @click="setActiveColor(color)"
                            :class="{ 'active-color': activeColor === color }">
                        </div>
                    </div>
                </span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            activeColor: null, // Initialize activeColor as null
        };
    },
    created() {
        // Set the first color as active by default if colors are available
        if (this.product.colors && this.product.colors.length > 0) {
            this.activeColor = this.product.colors[0];
        }
    },
    methods: {
        setActiveColor(color) {
            this.activeColor = color;
        },
    },
    computed: {
        discount() {
            if (this.product.originalPrice && this.product.currentPrice) {
                return Math.round(
                    ((this.product.originalPrice - this.product.currentPrice) /
                        this.product.originalPrice) *
                    100
                );
            }
            return null;
        },
        discountedPrice() {
            return this.product.currentPrice;
        },
    },
};
</script>

<style scoped>
/* Card Container */
.product-card {
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
    position: relative;
}

/* Discount Badge */
.discount-badge,
.new {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #e74c3c;
    color: #fff;
    font-size: 0.75rem;
    padding: 2px 6px;
    border-radius: 4px;
    z-index: 1;
}

.new {
    background-color: var(--ascent);
}

/* Image Wrapper */
.image-wrapper {
    position: relative;
    background-color: #f5f5f5;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-image {
    border-radius: 8px;
}

.icon-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.icon {
    background-color: #fff;
    padding: 5px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.09);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 34px;
}

.icon i {
    font-size: 0.9rem;
    color: #333;
}

.add-to-cart {
    background-color: #000;
    color: #fff;
    padding: 8px 16px;
    width: 100%;
    border-radius: 0px 0px 4px 4px;
    cursor: pointer;

    position: absolute;
    bottom: 0px;
    display: none;
    flex-direction: column;
    gap: 5px;
}

.product-card:hover .add-to-cart {
    display: flex;
}

/* Product Details */
.product-details {
    padding: 15px;
}

.product-name {
    margin: 10px 0;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
}

.price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.current-price {
    color: #e74c3c;
    font-weight: bold;
    font-size: 1.1rem;
}

.original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
}

.rating-wrapper {
    display: flex;
    align-items: center;
}

.rating-count {
    margin-left: 5px;
    color: #999;
    font-size: 0.9rem;
}

.stars {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

/* Color Wrapper */
.color-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-radius: 50%;
    width: 100%;
    height: 100%
}

.active-color-wrapper {
    background-color: #fff;
    border: 2px solid #000;
    padding: 2px; 
    border-radius: 100%;
}

.stars .color {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    cursor: pointer;
    transition: transform 0.2s;
}

.active-color {
    width: 12px !important;
    height: 12px !important;
}
</style>