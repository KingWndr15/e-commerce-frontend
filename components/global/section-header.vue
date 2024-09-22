<template>
    <div class="flex-centered-y">
        <span></span>
        <h2>
            <slot />
        </h2>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
    height: 40px;
    width: 20px;
    border-radius: 4px;
    background-color: #DB4444;
}

h2 {
    font-family: "poppins";
    color: #DB4444;
    font-size: 16px;
    font-weight: 600;
    margin-left: 16px;
}
</style>