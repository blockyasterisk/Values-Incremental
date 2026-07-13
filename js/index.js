var app = Vue.createApp({
    data() {
        return {
            player: player
        }
    },
    methods: {
        format(amount, dp) {
            return format(amount, dp);
        },
        gameLoop(){
            gameLoop(this);
        }
    },
    mounted() {
        setInterval(this.gameLoop, 50);
    }
});

app.component('generator', GeneratorComponent);
app.mount('#app');