<template>
    <button v-show="isVisible" @click="scrollToTop" class="back-to-top" aria-label="Back to top">
        ↑
    </button>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.toggleVisibility);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.toggleVisibility);
    },
    methods: {
        toggleVisibility() {
            this.isVisible = window.scrollY > 300;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    },
};
</script>

<style scoped>
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 60px;
    width: 40px;
    height: 40px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    opacity: 0.7;
    transition: opacity 0.3s, transform 0.3s;
    z-index: 1000;
}

.back-to-top:hover {
    opacity: 1;
    transform: translateY(-5px);
}
</style>