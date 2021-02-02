<template>
  <nav>
  <span
    :class="backwardClass"
    v-on:click="decrement">
    &#9664;
  </span>
  <h2>Nootropic Cat Treats</h2>
  <span
    :class="forwardClass"
    v-on:click="increment">
    &#9654;
  </span>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    backwardClass() {
      return this.isBeginning === true ? 'backward disabled' : 'backward'
    },
    forwardClass() {
      return this.isEnd === true ? 'forward disabled' : 'forward'
    }
  },
  methods: {
    decrement() {
      this.$emit('decrement')
    },
    increment() {
      this.$emit('increment')
    },
  },
  props: {
    isBeginning: Boolean,
    isEnd: Boolean
    }
}
</script>

<style scoped>
nav {
  background-color: var(--black);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 75px;
  bottom: 0;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2),
    0 -2px 4px -1px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
}

nav * {
  padding: 0 20px;
}

nav h2 {
  font-size: 0.777em;
}
</style>