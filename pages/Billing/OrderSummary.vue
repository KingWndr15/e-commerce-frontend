<template>
  <div class="order-summary">
    <div class="order-items">
      <div class="item">
        <img src="@/assets/images/global/cards/Today/monitor.png" alt="LCD Monitor" class="product-image" />
        <span class="product-name">LCD Monitor</span>
        <span class="product-price">$650</span>
      </div>
      <div class="item">
        <img src="@/assets/images/global/cards/Today/gamepad.png" alt="H1 Gamepad" class="product-image" />
        <span class="product-name">H1 Gamepad</span>
        <span class="product-price">$1100</span>
      </div>
    </div>

    <div class="total">
      <p><span>Subtotal:</span><span>$1750</span></p>
      <p><span>Shipping:</span><span>Free</span></p>
      <h4><span>Total:</span><span>$1750</span></h4>
    </div>

    <div class="payment-methods">
      <div class="payment-option">
        <div>
          <input type="radio" id="bank" value="bank" v-model="paymentMethod" />
          <label for="bank" class="ml-1">Bank</label>
        </div>
        <img src="@/assets/images/billing/cards.png" alt="Payment Icons" class="payment-icons" />
      </div>
      <div class="payment-option">
        <div>
          <input type="radio" id="cod" value="cod" v-model="paymentMethod" />
          <label for="cod" class="ml-1">Cash on Delivery</label>
        </div>
      </div>
    </div>

    <div class="coupon">
      <input v-model="couponCode" type="text" placeholder="Coupon Code" />
      <button class="apply-coupon-btn" @click="applyCoupon">Apply Coupon</button>
    </div>

    <button class="place-order" @click="placeOrder">Place Order</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: 'cod',
      couponCode: ''
    };
  },
  methods: {
    applyCoupon() {
      console.log('Coupon code:', this.couponCode);
      // Handle coupon application logic
    },
    placeOrder() {
      console.log('Placing order with payment method:', this.paymentMethod);
      // Handle placing order
    }
  }
};
</script>

<style scoped>
.order-summary {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.order-items {
  margin-bottom: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.product-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
}

.product-name {
  flex-grow: 1;
  font-size: 16px;
}

.product-price {
  font-weight: bold;
}

.total {
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 20px;
}

.total p,
.total h4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

h4 {
  font-weight: bold;
}

.payment-methods {
  margin: 20px 0;
}

.payment-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.payment-icons {
  margin-left: 10px;
  width: 150px;
}

.coupon {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.coupon input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 63%;
}

.apply-coupon-btn {
  background-color: #e63946;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}

.place-order {
  width: 100%;
  background-color: #e63946;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
}
</style>