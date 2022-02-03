<template>
  <div id="app">
      <navbar></navbar>
      <chess-game></chess-game>
  </div>
</template>


<script>
import ChessGame from './components/ChessGame.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ChessGame
  }
}

</script>

<style>

body {
  color: black;
  /* background-color: #1a1a22; */
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
