<template>

<div class="chess-game">
    <h1 class="chess-game-title">Chess game</h1>

    <div class="chess-game-explanation">
        <h2 class="chess-game-explanation-title">How does it work?</h2>
        <p class="chess-game-explanation-paragraph">
            You have two chessboards, one on the right and one on the left. On the right side there are pieces that cannot be moved, but those on the left side can be moved. The goal is to move the pieces on the left side so that at the end they are symmetrical to the ones on the right side. You have to iterate between the two colors like in a normal chess game.    
        </p>
    </div>

    <div class="chess-game-container">
        <h1 class="chess-game-boards-title">Level 1</h1>
        <p class="chess-game-boards-difficulty">Difficulty: Easy</p>

        <div class="chess-game-boards">
            <chessboard :fen="levels[0].startFen" class="chess-game-board"/>
            <div class="vl"></div>
            <chessboard :fen="levels[0].referenceFen" class="chess-game-board"/>
        </div>

        <a href="#" class="chess-game-reset chess-game-button">Reset</a>
        <a href="#" class="chess-game-continue chess-game-button">Next level</a>
    </div>

</div>

</template>

<script>

import { chessboard } from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import { ChessLevel } from '../objects/ChessLevel.js'

export default {
  components: { chessboard },
    name: "ChessGame",
    props: [],
    methods: {

    },
    data() {
        return {
            levels: [
                new ChessLevel("1k2rp1r/1b1n1pp1/ppq1p2p/2p5/8/1NBB1N1Q/PPP2PPP/4K2R b - - 0 1", "1k3b2/1b3ppQ/p1q4p/p1p1B3/8/8/PPP2PPP/4r1K1 w - - 0 1", "2b3k1/Qpp3b1/5q1p/3B1p1p/8/8/PPP2PPP/1K1r4 w - - 0 1")
            ]
        }
    },
    mounted() {

    },
    created() {
    
    }
}

</script>

<style>

.chess-game {
    margin: 0;
    margin-left: 5rem;
    top: 0;
    background-color: var(--bg-secondary);
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

.ranks coord  {
    color: var(--text-primary);
    font-size: 1rem;
}

.files coord {
    color: var(--text-primary);
    font-size: 1rem;
}

.chess-game-container {
    margin: 5rem auto 0 auto;
    background-color: var(--bg-accent);
    padding: 3rem;
    width: 55%;
    border-radius: 1rem;
}

.chess-game-boards-title {
    margin: 0;
    color: var(--text-primary);
    text-align: center;
}

.chess-game-boards-difficulty {
    color: var(--text-secondary);
    text-align: center;
}

.chess-game-boards {
    display: flex;
    justify-content: center;
}

.chess-game-board {
    margin: 0 1rem 0 1 rem;
}

.vl {
    border-left: 6px solid var(--accent-color);
    height: 320px;
    margin: 0 4rem 0 4rem;
}

.chess-game-button {
    font-size: 1rem;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: var(--accent-color);
    padding: 0.25rem 1rem;
    border: var(--accent-color) 0.25rem solid;
    border-radius: 0.5rem;
    margin-right: 1rem;
    margin-top: 1rem;
    transition: var(--transition-speed);
}

.chess-game-button:hover {
    transform: scale(1.15);
}

.chess-game-continue {
  opacity: 0.6;
  cursor: not-allowed;
}

@media only screen and (max-width: 600px) {
    .chess-game {
        margin-bottom: 5rem;
        margin-left: 0;
    }
}

@media only screen and (max-width: 1430px) {
    .chess-game-container {
        width: 80%;
    }
}

</style>