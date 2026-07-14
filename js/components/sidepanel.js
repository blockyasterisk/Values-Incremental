const SidePanel = {
    template: `
    <div>
      <div v-if="open" class="side-overlay" @click="open = false"></div>

      <div class="side-panel" :class="{open: open}" @click.stop>
        Next feature coming later!
      </div>

      <div class="side-tab" :class="{open: open}" @click="toggle">
        <span>???</span>
      </div>
    </div>`,
    data() {
        return { open: false };
    },
    methods: {
        toggle() { this.open = !this.open; },
        exampleAction() {
            // replace with real features
            alert('Example action triggered');
        }
    }
};