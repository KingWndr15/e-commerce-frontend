<template>
    <button
        :class="[
            'nuxt-button',
            sizeClass,
            colorClass,
            { 'is-loading': loading }
        ]"
        :type="type"
        :disabled="loading || disabled"
        @click="handleClick"
    >
        <span v-if="loading" class="loader"></span>
        <span v-else>{{ label }}</span>
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define the props
const props = defineProps({
    label: {
        type: String,
        default: 'Button',
    },
    type: {
        type: String,
        default: 'button', // Other types can be 'submit', 'reset'
    },
    color: {
        type: String,
        default: 'primary', // Example colors: 'primary', 'secondary', 'danger'
    },
    size: {
        type: String,
        default: 'medium', // Example sizes: 'small', 'medium', 'large'
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

// Define emits for click event
const emit = defineEmits(['click']);

// Computed classes for size and color
const sizeClass = computed(() => {
    return `nuxt-button--${props.size}`;
});

const colorClass = computed(() => {
    return `nuxt-button--${props.color}`;
});

// Handle the click event
function handleClick(event) {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
}
</script>

<style scoped>
/* Basic styling for the button */
.nuxt-button {
    display: inline-flex; /* Change from flex to inline-flex */
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;
    width: fit-content; /* Ensure the button takes up only as much space as needed */
}

/* Different sizes */
.nuxt-button--small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
}

.nuxt-button--medium {
    padding: 0.5rem 1rem;
    font-size: 1rem;
}

.nuxt-button--large {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
}

/* Different color variants */
.nuxt-button--primary {
    background-color: #DB4444;
    color: white;
}

.nuxt-button--secondary {
    background-color: transparent;
    color: #000;
    border: 1px solid #808080;
}

.nuxt-button--danger {
    background-color: #dc3545;
    color: white;
}

.nuxt-button:hover {
    opacity: 0.9;
}

/* Disabled state */
.nuxt-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

/* Loading state */
.is-loading {
    position: relative;
    pointer-events: none;
}

.loader {
    width: 1em;
    height: 1em;
    border: 2px solid white;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
