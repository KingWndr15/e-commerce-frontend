<template>
    <div class="countdown">
        <div v-for="(unit, index) in time" :key="index" class="countdown-item">
            <div class="time">{{ unit.value }}</div>
            <div class="label">{{ unit.label }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdownDate: new Date().getTime() + 5 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 35 * 1000, // Adjust as needed
            time: [
                { label: 'Hours', value: '00' },
                { label: 'Days', value: '00' },
                { label: 'Minutes', value: '00' },
                { label: 'Seconds', value: '00' },
            ],
        };
    },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            setInterval(() => {
                const now = new Date().getTime();
                const distance = this.countdownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                this.time = [
                    { label: 'Days', value: this.formatTime(days) },
                    { label: 'Hours', value: this.formatTime(hours) },
                    { label: 'Minutes', value: this.formatTime(minutes) },
                    { label: 'Seconds', value: this.formatTime(seconds) },
                ];
            }, 1000);
        },
        formatTime(unit) {
            return unit < 10 ? `0${unit}` : unit;
        },
    },
};
</script>

<style scoped>
.countdown {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 62px;
    height: 62px;
    border-radius: 80%;
}

.time {
    font-size: 16px;
    font-weight: bold;
}

.label {
    font-size: 11px;
}
</style>