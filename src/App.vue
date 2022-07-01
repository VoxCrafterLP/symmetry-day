<template>
  <div id="app">
      <chess-game v-show="this.currentPage === 'ChessGame'"/>
      <landing-page v-show="this.currentPage === 'Overview'" @switchPage="switchPage"/>
      <info-page v-show="this.currentPage === 'Info'"/>
      <navbar @switchPage="switchPage"/>
  </div>
</template>

<script>
import ChessGame from './components/ChessGame.vue'
import InfoPage from './components/InfoPage.vue'
import LandingPage from './components/LandingPage.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ChessGame,
    LandingPage,
    InfoPage
  },
  data() {
    return {
      currentPage: 'Overview'
    }
  },
  methods: {
    switchPage(page) {
      this.currentPage = page
    }
  }
}

</script>

<style>

body {
  color: black;
  background-color: #1a1a22;
  margin: 0;
  padding: 0;
}

/* Global variables */
:root {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  --text-primary: #ececec;
  --text-secondary: #b6b6b6;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --bg-accent: #32324d;
  --transition-speed: 600ms;
  --accent-color: #b33aa8;
  --accent-color-focus: #82287a;
}

/* Customize scrollbar */
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
}

</style>
