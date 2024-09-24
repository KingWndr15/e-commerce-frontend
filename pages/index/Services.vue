<template>
    <main class="features-section">
        <div class="feature">
            <div class="icon-container mb-1">
                <img src="@/assets/icons/global/services/truck.svg" alt="Delivery Icon" />
            </div>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
        </div>

        <div class="feature">
            <div class="icon-container mb-1">
                <img src="@/assets/icons/global/services/headset.svg" alt="Customer Service Icon" />
            </div>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
        </div>

        <div class="feature">
            <div class="icon-container mb-1">
                <img src="@/assets/icons/global/services/guard.svg" alt="Money Back Icon" />
            </div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
        </div>
    </main>
</template>

<script>
export default {
    name: 'FeaturesSection',
};
</script>

<style scoped>
.features-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    text-align: center;
}

.feature {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    height: fit-content;
}

.icon-container {
    margin-bottom: 8px;
}

.icon-container img {
    width: 80px;
    height: 80px;
}

h3 {
    font-size: 20px;
    font-weight: bold;
}

p {
    font-size: 14px;
}
</style>