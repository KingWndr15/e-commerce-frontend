<template>
    <NuxtLayout>
        <main>
            <div class="checkout-page">
                <div class="billing">
                    <BillingForm />
                </div>
                <div class="summary">
                    <OrderSummary />
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
import BillingForm from './BillingForm.vue';
import OrderSummary from './OrderSummary.vue';

export default {
    components: {
        BillingForm,
        OrderSummary
    }
};
</script>

<style scoped>
.checkout-page {
    display: flex;
    justify-content: space-between;
}

.billing,
.summary {
    width: 45%;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .checkout-page {
        flex-direction: column;
    }

    .billing,
    .summary {
        width: 100%;
    }
}
</style>
