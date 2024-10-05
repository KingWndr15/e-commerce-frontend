<template>
    <div class="countdown-timer">
        <div class="flex-centered-y" v-for="(time, index) in timeUnits" :key="index">
            <div class="time-block">
                <div class="time-label">{{ time.label }}</div>
                <div class="time-value">{{ formatTime(time.value) }}</div>
            </div>
            <span v-if="index < timeUnits.length - 1" class="separator">:</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            targetTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000, // 3 days from now
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    },
    computed: {
        timeUnits() {
            return [
                { label: "Days", value: this.days },
                { label: "Hours", value: this.hours },
                { label: "Minutes", value: this.minutes },
                { label: "Seconds", value: this.seconds },
            ];
        },
    },
    mounted() {
        this.updateTimer();
        this.timerInterval = setInterval(this.updateTimer, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timerInterval);
    },
    methods: {
        updateTimer() {
            const now = new Date().getTime();
            const distance = this.targetTime - now;

            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.timerInterval);
                this.days = this.hours = this.minutes = this.seconds = 0;
            }
        },
        formatTime(value) {
            return value.toString().padStart(2, '0');
        },
    },
};
</script>

<style scoped>
.countdown-timer {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 45px;
}

.time-block {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.time-value {
    font-size: 2rem;
    font-weight: bold;

    @media (width < 800px) {
        font-size: 1.5rem;        
    }
}

.time-label {
    font-size: 0.75rem;
    text-transform: uppercase;

    @media (width < 800px) {
        font-size: 0.65rem;        
    }
}

.separator {
    font-size: 2rem;
    color: #e74c3c;
    margin: 0 10px;
}
</style>