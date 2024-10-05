<template>
    <div class="billing-details">
        <form @submit.prevent="submitOrder">
            <h3 class="font-size-36" >Billing Details</h3>

            <div class="form-group mt-4">
                <label for="firstName">First Name<span>*</span></label>
                <input v-model="form.firstName" type="text" id="firstName" required />
            </div>

            <div class="form-group">
                <label for="companyName">Company Name</label>
                <input v-model="form.companyName" type="text" id="companyName" />
            </div>

            <div class="form-group">
                <label for="streetAddress">Street Address<span>*</span></label>
                <input v-model="form.streetAddress" type="text" id="streetAddress" required />
            </div>

            <div class="form-group">
                <label for="apartment">Apartment, floor, etc. (optional)</label>
                <input v-model="form.apartment" type="text" id="apartment" />
            </div>

            <div class="form-group">
                <label for="city">Town/City<span>*</span></label>
                <input v-model="form.city" type="text" id="city" required />
            </div>

            <div class="form-group">
                <label for="phoneNumber">Phone Number<span>*</span></label>
                <input v-model="form.phoneNumber" type="tel" id="phoneNumber" required />
            </div>

            <div class="form-group">
                <label for="email">Email Address<span>*</span></label>
                <input v-model="form.email" type="email" id="email" required />
            </div>

            <div class="checkbox">
                <input type="checkbox" id="saveInfo" v-model="form.saveInfo" />
                <label for="saveInfo">Save this information for faster check-out next time</label>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstName: '',
                companyName: '',
                streetAddress: '',
                apartment: '',
                city: '',
                phoneNumber: '',
                email: '',
                saveInfo: false
            }
        };
    },
    methods: {
        submitOrder() {
            console.log('Form data:', this.form);
            // You can handle form submission here
        }
    }
};
</script>

<style scoped>
.billing-details {
    margin: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.checkbox {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.form-group span {
    color: #DB4444;
}

input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 0px;
    outline: 0px;
    background-color: #F5F5F5;
}

input[type=checkbox] {
    width: fit-content
}
</style>