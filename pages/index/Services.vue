<template>
    <main class="features-section">
        <div class="feature">
            <div class="icon-container mb-1">
                <img src="@/assets/icons/global/services/truck.svg" alt="Delivery Icon" />
            </div>
            <div class="content">
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
            </div>
        </div>

        <div class="feature">
            <div class="icon-container mb-1">
                <img src="@/assets/icons/global/services/headset.svg" alt="Customer Service Icon" />
            </div>

            <div class="content">
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
            </div>
        </div>

        <div class="feature">
            <div class="icon-container mb-1">
                <img src="@/assets/icons/global/services/guard.svg" alt="Money Back Icon" />
            </div>
            <div class="content">
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We return money within 30 days</p>
            </div>
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
    padding: 20px 0px;
    text-align: center;

    @media (width < 800px) {
        grid-template-columns: 1fr;
        gap: 50px;
        padding: 0px;
    }
}

.feature {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: fit-content;
}

.feature .content {
    display: flex;
    flex-direction: column;
    gap: 5px;
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

    @media (width < 1020px) {
        font-size: 18px;        
    }
}

p {
    font-size: 14px;
}
</style>