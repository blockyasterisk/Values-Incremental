var app = Vue.createApp({
    data() {
        return {
            player: player
        }
    },
    methods: {
        format(amount, fixDP, expSF) {
            return format(amount, fixDP, expSF);
        },
        gameLoop() {
            gameLoop(this);
        },
        virtueIsVisible(idx) {
            const prev = this.player.virtues[idx - 1];
            return idx === 0 || (prev && prev.bought ? prev.bought.greaterThanOrEqualTo(15) : false);
        },
        onKeyDown(e) {
            if (/^[1-4]$/.test(e.key)) {
                this.player.virtues[Number(e.key) - 1].buy(this.player);
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', this.onKeyDown);
        setInterval(this.gameLoop, 50);
    }
});

app.component('generator', GeneratorComponent);
app.component('side-panel', SidePanel);
app.mount('#app');