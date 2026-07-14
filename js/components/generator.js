const GeneratorComponent = {
    props: ['generator', 'player'],
    methods: {
        format(amount, fixDP, expSF) {
            return format(amount, fixDP, expSF);
        },
        buy() {
            this.generator.buy(this.player);
        },
        buyButtonStyle() {
            const affordable = this.generator.canBuy(this.player.progress);
            return {
                backgroundColor: affordable ? 'white' : 'black',
                color: affordable ? 'black' : 'white'
            };
        }
    },
    template: `
    <div>
        <p><b>{{ generator.name }}</b> [{{ format(generator.bought, 0, 3) }}]</p>
        <span class="generator-amount">{{ format(generator.amount, 0, 3) }}</span>
        <span class="generator-multiplier"> &times; {{ format(generator.multiplier, 2, 3) }}</span>
        <span class="generator-prod-per-sec"> = {{ format(generator.productionPerSecond, 2, 3) }}/s</span>
        <span class="generator-cost">Cost: {{ format(generator.cost, 2, 3) }} progress</span>
        <button class="generator-button" :style="buyButtonStyle()" @click="buy()">Power up your {{ generator.name }}</button>
    </div>`
};
