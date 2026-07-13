const GeneratorComponent = {
    props: ['generator', 'player'],
    methods: {
        format(amount, dp) {
            return format(amount, dp);
        },
        buy() {
            this.generator.buy(this.player);
        }
    },
    template: `
    <div>
        <p><b>{{ generator.name }}</b> [{{ generator.bought }}]</p>
        <span class="generator-amount">{{ format(generator.amount, 0) }}</span>
        <span class="generator-multiplier"> &times; {{ format(generator.multiplier, 2) }}</span>
        <span class="generator-prod-per-sec"> = {{ format(generator.productionPerSecond, 2) }}/s</span>
        <span class="generator-cost">Cost: {{ format(generator.cost, 2) }} progress</span>
        <button @click="buy()">Power up your {{ generator.name }}</button>
    </div>`
};
