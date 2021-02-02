<template>
  <div class="App">
    <div class="container">
      <span class="quotemark-l">“</span>
      <blockquote v-html="quote">
      </blockquote>
      <cite>
        <p>{{ quotee }}</p>
        <p>
          <a :href="link">{{ platform }}</a>
          </p>
      </cite>
    </div>
    <nav-bar
      v-on:increment="increment"
      v-on:decrement="decrement"
      :is-beginning="isBeginning"
      :is-end="isEnd"
    />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import quotes from './assets/quotes.json'
import generateRandomNumber from './generate-random-number'

const maxIndex = quotes.length - 1

const safeAdd = (x) => (x === maxIndex ? maxIndex : x + 1);
const safeSubtract = (x) => (x === 0 ? 0 : x - 1);

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      history: [generateRandomNumber(0, maxIndex, 0, [])],
      placeInHistory: 0,
      isBeginning: true,
      isEnd: false
    }
  },
  computed: {
    quote() { return quotes[this.history[this.placeInHistory]].quote },
    quotee() { return quotes[this.history[this.placeInHistory]].quotee },
    platform() {return quotes[this.history[this.placeInHistory]].platform},
    link() {return quotes[this.history[this.placeInHistory]].link }
  },
  methods: {
    increment() {
      if (this.placeInHistory === maxIndex) {
        return
      }

      if (this.history.length - 1 === this.placeInHistory) {
        this.history = [...this.history, generateRandomNumber(0, maxIndex, this.placeInHistory, this.history)]
      }
      
      this.placeInHistory = safeAdd(this.placeInHistory)
      
      this.isEnd = this.placeInHistory === maxIndex
      this.isBeginning = this.placeInHistory === 0
    },
    decrement() {
      this.placeInHistory = safeSubtract(this.placeInHistory)

      this.isBeginning = this.placeInHistory === 0
      this.isEnd = this.placeInHistory === maxIndex
    }
  }
}
</script>

<style>
:root {
  --black: #211f1e;
  --black-alt: #211f1e;
  --white: #fff;
  --white-alt: #e4d8de;
  --primary: #a71d5d;
  --primary-alt: #7d063d;
}

* {
  box-sizing: border-box;
}

html,
.root {
  font-size: 21px;
}

body {
  background-color: var(--black);
  color: var(--white);
  font-family: 'Karla', sans-serif;
  font-size: 1em;
  margin-bottom: 75px;
  margin-left: 0;
  margin-right: 0;
}

a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
}
a:hover {
  color: var(--primary-alt);
}

cite {
  display: block;
  font-style: normal;
  margin-bottom: 1.618em;
  text-align: left;
}

cite > p {
  margin: 0;
}

cite > p:first-child {
  color: var(--white);
  font-weight: 700;
  margin-bottom: 6px;
}

blockquote {
  font-family: 'Karla', serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.58em;
  margin: 0.79310345em 0 0.79310345em 0;
}

blockquote > p {
  margin: 0 0 0.79310345em 0;
}

blockquote > div {
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  max-width: 700px;
  width: 96%;
  margin: 0 auto;
  padding-top: 1em;
}

.quotemark-l {
  color: var(--primary);
  font-size: 100px;
  text-align: center;
  line-height: 1;
}

.backward,
.forward {
  text-shadow: 0 3px 5px black;
  font-size: 2em;
}

.backward:hover {
  color: var(--white-alt);
}

.forward:hover {
  color: var(--white-alt);
}

.backward:hover,
.forward:hover {
  cursor: pointer;
}

.backward.disabled {
  color: rgba(255, 255, 255, 0.5);
  cursor: default;
}

.forward.disabled {
  color: rgba(255, 255, 255, 0.5);
  cursor: default;
}

@media (min-width: 600px) {
  button {
    margin-top: 0;
    margin-bottom: 0;
    max-width: 180px;
  }
}
</style>
