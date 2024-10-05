<template>
    <main class="flex flex-column mt-10 pb-6">
        <div class="top items-end">
            <div class="flex flex-column gap-2 content-between">
                <p class="grey"><a href="/">Home</a> / <span class="black">Cart</span></p>
            </div>
        </div>
        <div class="cart-container mt-5">
            <div class="cart-content">
                <!-- Cart Items Table -->
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartItems" :key="item.id">
                            <td class="product-details">
                                <img :src="item.image" alt="" class="product-image" />
                                {{ item.name }}
                            </td>
                            <td>${{ item.price }}</td>
                            <td>
                                <input type="number" min="1" v-model="item.quantity" class="quantity-input" />
                            </td>
                            <td>${{ item.price * item.quantity }}</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Coupon Section and Total -->
                <div class="summary-section">
                    <div class="cart-summary">
                        <div class="summary-item">
                            <span>Subtotal:</span>
                            <span>${{ cartSubtotal }}</span>
                        </div>
                        <div class="summary-item">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div class="summary-item total">
                            <span>Total:</span>
                            <span>${{ cartTotal }}</span>
                        </div>
                        <button @click="proceedToCheckout" class="checkout-btn">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import sectionHeader from '~/components/global/section-header.vue';
import PrimaryButton from '~/components/global/PrimaryButton.vue';
import WishListCard from '~/components/global/WishListCard.vue';

// Import images from the assets folder
import dogfood from "@/assets/images/global/cards/OurProducts/dog-food.png";
import camera from "@/assets/images/global/cards/OurProducts/camera.png";

export default {
    components: {
        sectionHeader,
        PrimaryButton,
        WishListCard,
    },
    data() {
        return {
            cartItems: [
                { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: dogfood },
                { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: camera },
            ],
            couponCode: '',
        };
    },
    computed: {
        cartSubtotal() {
            return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        cartTotal() {
            return this.cartSubtotal;
        },
    },
    methods: {
        applyCoupon() {
            alert('Coupon applied: ' + this.couponCode);
        },
        proceedToCheckout() {
            alert('Proceeding to checkout');
        },
    },
}
</script>

<style scoped>
main {
    padding-bottom: 60px;
}

.top {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.top p {
    font-size: 16px;
    cursor: default
}

.top span {
    color: #d9534f;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

.top a:hover {
    text-decoration: underline;
}

@media (max-width: 800px) {
    .top {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
}

/* Cart Table */
.cart-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
}

.cart-table th,
.cart-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
}

.product-details {
    display: flex;
    align-items: center;
}

.product-image {
    width: 50px;
    height: 50px;
    margin-right: 15px;
}

.quantity-input {
    width: 50px;
    padding: 5px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
}

@media (max-width: 800px) {

    .cart-table th,
    .cart-table td {
        font-size: 14px;
        padding: 10px;
    }

    .quantity-input {
        width: 40px;
    }
}

/* Summary Section */
.summary-section {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
}

.cart-summary {
    width: 40%;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    background-color: #f8f8f8;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 16px;
}

.total {
    font-weight: bold;
}

.checkout-btn {
    width: 100%;
    padding: 12px 0;
    background-color: #d9534f;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 16px;
}

.checkout-btn:hover {
    background-color: #c9302c;
}

@media (max-width: 800px) {
    .summary-section {
        flex-direction: column;
        gap: 20px;
    }

    .coupon-section,
    .cart-summary {
        width: 100%;
    }

    .summary-item {
        font-size: 14px;
    }

    .checkout-btn {
        font-size: 14px;
        padding: 10px 0;
    }
}

@media (max-width: 500px) {

    .cart-table th,
    .cart-table td {
        font-size: 12px;
        padding: 8px;
    }

    .quantity-input {
        width: 35px;
    }

    .summary-item {
        font-size: 12px;
    }

    .checkout-btn {
        font-size: 12px;
        padding: 8px 0;
    }

    .coupon-input {
        width: 65%;
    }

    .apply-coupon-btn {
        font-size: 12px;
    }
}
</style>    
