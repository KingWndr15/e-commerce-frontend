<template>
    <NuxtLayout>
        <main class="mt-4">
            <div class="container">
                <img class="left-image" src="@/assets/images/signup/side-image.png" alt="" draggable="false">
                <form submit.prevent="">
                    <div class="top">
                        <h2>Log in to Exclusive</h2>
                        <p>Enter your details below</p>
                    </div>
                    <div class="input-section mt-3">
                        <div class="input-field">
                            <label for="email">Email</label>
                            <input type="email" id="email">
                        </div>
                        <div class="input-field">
                            <label for="password">Password</label>
                            <input type="password" id="password">
                        </div>
                    </div>
                    <div class="cta mt-3">
                        <button>Log In</button>
                        <button>
                            <img src="@/assets/icons/auth/google-icon.svg" alt="">
                            Log in with Google
                        </button>
                    </div>
                    <a href="" class="mt-1 text-center" >Forget Password?</a>
                    <p class="login mt-2">Already have account? <a href=""class="link" >Log in</a></p>
                </form>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding-right: 100px;

    @media (width < 950px) {
        flex-direction: column;
        align-items: flex-start;
        padding-right: 0px;
    }
}

.container .left-image {
    max-height: 80vh;

    @media (width < 950px) {
        display: none;
    }
}

form {
    display: flex;
    flex-direction: column;
    min-width: 170px;
    max-width: 370px;

    @media (width < 950px) {
        width: 100%;
        max-width: 100%;
    }
}

form .top {
    display: flex;
    flex-direction: column;

    @media (width < 950px) {
        align-items: center
    }
}

form .top h2 {
    font-family: "inter";
    font-size: 36px;
    font-weight: 600;

    @media (width < 950px) {
        font-size: 3rem;
    }

    @media (width < 800px) {
        font-size: 2rem;
    }
}

form .top p {
    font-family: "poppins";
    
    @media (width < 950px) {
        font-size: 1.5rem;
    }

    @media (width < 800px) {
        font-size: 1rem;
    }
}

form .input-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

form .input-section .input-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

form .input-section .input-field label {
    font-weight: 500;
}

form .input-section .input-field input {
    width: 100%;
    padding: 8px;
    border: 1px solid #999;
    border-radius: 4px;
    outline: 0px;
}

form .input-section .input-field input::placeholder {
    color: #999;
}

form .cta {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

form .cta button {
    padding: 8px;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 4px;
    border: 0px;
    outline: 0px;
    width: 100%;
    color: #fff;
    background-color: #DB4444;

    font-family: "poppins";
    font-weight: 500;
}

form .cta button:nth-child(2) {
    background-color: transparent;
    color: #000;
    border: 1px solid #0000006f;
}

form .login {
    font-family: "poppins";
    color: #4d4d4d;
    display: flex;
    align-items: center;
    gap: 6px;
    align-self: center;
}

form .link {
    font-weight: 500;
    text-decoration: underline;
}

form a:hover {
    text-decoration: none !important;
}
</style>