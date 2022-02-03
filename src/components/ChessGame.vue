<template>

<div class="chess-game">
    <h1 class="chess-game-title">Chess game</h1>

    <div class="chess-game-explanation">
        <h2 class="chess-game-explanation-title">How does it work?</h2>
        <p class="chess-game-explanation-paragraph">
            We have two chessboards, one on the right and one on the left. On the right side there are figures that cannot be moved, but those on the left side can be moved. The goal of this game is to move the figures on the left side so that at the end they are symmetrical to the right side. You have to switch between the two colors like in normal chess.    
        </p>
    </div>

    <chessboard :free="true"/>

</div>

</template>

<script>

import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'

export default {
  components: { chessboard },
    name: "ChessGame",
    props: [],
    methods: {
        
    }
}

</script>

<style>

.chess-game {
    margin: 0;
    margin-left: 5rem;
    top: 0;
    background-color: var(--bg-secondary);
    height: 100vh;
    padding: 1rem;
}

.chess-game-title {
    color: var(--accent-color);
    text-align: center;
    font-size: 3rem;
    margin: 0;
}

.chess-game-explanation {
    color: var(--text-secondary);
    width: 55%;
    background-color: var(--bg-accent);
    border-radius: 1rem;
    padding: 0.8rem;
    margin: 5rem auto 0 auto;
}

.chess-game-explanation-title {
    text-align: center;
    margin: 0;
    font-weight: bolder;
    color: var(--text-primary);
}

@media only screen and (max-width: 600px) {
    .chess-game {
        margin-bottom: 5rem;
        margin-left: 0;
    }
}

</style>