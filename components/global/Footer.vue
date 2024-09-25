<template>
    <footer class="footer">
        <main class="footer-container">
            <!-- Exclusive Section -->
            <div class="footer-section">
                <h3 class="font-size-24 weight-7">Exclusive</h3>
                <h4 class="font-size-20 weight-5 mt-2">Subscribe</h4>
                <p>Get 10% off your first order</p>
                <div class="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button aria-label="Subscribe">
                        <img src="@/assets/icons/global/footer/send.svg" alt="">
                    </button>
                </div>
            </div>

            <!-- Support Section -->
            <div class="footer-section">
                <h3>Support</h3>
                <p>
                    111 Bijoy sarani, Dhaka,<br />
                    DH 1515, Nigeria.
                </p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>

            <!-- Account Section -->
            <div class="footer-section">
                <h3>Account</h3>
                <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Login / Register</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>

            <!-- Quick Link Section -->
            <div class="footer-section">
                <h3>Quick Link</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <!-- Download App Section -->
            <div class="footer-section">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div class="download-icons">
                    <img class="qrcode" src="@/assets/images/global/footer/qrcode.png" alt="QR Code" />
                    <div>
                        <img src="@/assets/images/global/footer/playstore.png" alt="Google Play" />
                        <img src="@/assets/images/global/footer/appstore.png" alt="App Store" />
                    </div>
                </div>
                <div class="social-icons">
                    <a href="#"><img src="@/assets/icons/global/footer/faceboook.svg"/></a>
                    <a href="#"><img src="@/assets/icons/global/footer/twitter.svg"/></a>
                    <a href="#"><img src="@/assets/icons/global/footer/instagram.svg"/></a>
                    <a href="#"><img src="@/assets/icons/global/footer/linkein.svg"/></a>
                </div>
            </div>
        </main>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #000;
    color: #fff;
    padding: 20px 0;
    font-size: 14px;
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 80px;
    padding: 80px 0px 60px;
    margin: 0 auto;
}

.footer-section {
    display: flex;
    flex-direction: column;
}

.footer-section p,
.footer-section address,
.footer-section li {
    margin: 16px 0;
}

.footer-section address {
    font-style: normal;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li a {
    text-decoration: none;
    color: #fff;
}

.footer-section .subscribe-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    border: #FAFAFA 1.5px solid;
    border-radius: 4px;
    padding: 12px 16px;
}

.subscribe-form input {
    border: none;
    outline: none;
    background: transparent;
    max-width: 150px;
    color: #fff;
}

.subscribe-form button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
}

.download-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.download-icons .qrcode {
    height: 70px;
}

.download-icons img {
    height: auto;
}

.social-icons {
    display: flex;
    justify-content: space-between;
    width: 70%;
    /* gap: 10px; */
    margin-top: 10px;
}

.social-icons a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.footer-bottom {
    text-align: center;
    padding: 10px;
    border-top: 1px solid #646464;
    margin-top: 20px;
}

.footer-bottom p {
    color: #646464;
}

@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .download-icons {
        justify-content: center;
    }

    .social-icons {
        justify-content: center;
    }
}
</style>