<template>

<div class="chess-game">
    <h1 class="chess-game-title">{{ $t("chessgame.title") }}</h1>

    <div class="chess-game-explanation">
        <h2 class="chess-game-explanation-title">{{ $t("chessgame.extitle") }}</h2>
        <p class="chess-game-explanation-paragraph">
            {{ $t("chessgame.extext") }}    
        </p>
    </div>

    <div class="chess-game-container">
        <h1 class="chess-game-boards-title">{{ $t("chessgame.level") }} {{getCurrentLevelNumber()}}</h1>
        <p class="chess-game-boards-info">{{ $t("chessgame.difficulty") }} {{getCurrentLevel().difficulty}}</p>
        <p class="chess-game-boards-info">{{ $t("chessgame.moves") }} {{this.requiredMoves}}</p>

        <div v-if="showBoards" class="chess-game-boards">
            <chessboard :fen="getCurrentLevel().startFen" @onMove="checkChessState" class="chess-game-board"/>
            <div class="vl"></div>
            <chessboard :fen="getCurrentLevel().referenceFen" class="chess-game-board"/>
        </div>

        <button @click="resetLevel()" class="chess-game-reset chess-game-button">{{ $t("chessgame.reset") }}</button>
        <button @click="nextLevel()" class="chess-game-continue chess-game-button" :disabled="!nextLevelButtonEnabled">{{ $t("chessgame.nextlevel") }}</button>
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
        loadLevel(level) {
            this.currentLevelIndex = level
            this.currentLevel = this.levels[level]
            this.requiredMoves = this.currentLevel.moves
        },
        getCurrentLevel() {
            return (this.currentLevel == null) ? this.levels[0] : this.currentLevel
        },
        getCurrentLevelNumber() {
            return this.currentLevelIndex + 1
        },
        resetLevel() {
            this.loadLevel(this.currentLevelIndex)
            this.showBoards = false

            this.$nextTick(() => {
                this.showBoards = true
            })
        },
        nextLevel() {
            if((this.levels.length - 1) != this.currentLevelIndex) {
                this.currentLevelIndex++
                this.loadLevel(this.currentLevelIndex)
            }
            this.nextLevelButtonEnabled = false
        },
        checkChessState(data) {          
            this.nextLevelButtonEnabled = data.fen.startsWith(this.currentLevel.endFen)
            if(this.requiredMoves != 0)
                this.requiredMoves--
        }
    },
    data() {
        return {
            levels: [
                new ChessLevel("1k1r4/1p4q1/p6r/2ppN3/P3bP2/1P2P2P/KQP5/3R4 w - - 0 1", "1k6/1p1r4/p6r/2pR4/P3bP2/1P2P2P/1KP5", "6k1/4r1p1/r6p/4Rp2/2Pb3P/P2P2P1/5PK1/8 b - - 0 1", "Medium", 6),
                new ChessLevel("1k3b1r/1b1n1pp1/p1q1p3/p1p5/8/2BB1N1Q/PPP2PPP/4K2R w - - 0 1", "k4b2/1b3ppQ/p1q5/p1p1B3/8/8/PPP2PPP/4K2R", "2b4k/Qpp3b1/5q1p/3B1p1p/8/8/PPP2PPP/R2K4 w - - 0 1", "Hard", 10),
            ],
            showBoards: true,
            currentLevelIndex: 0,
            currentLevel: null,
            nextLevelButtonEnabled: false,
            requiredMoves: -1
        }
    },
    mounted() {
        
    },
    created() {
        this.loadLevel(1)
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
    margin-top: 0.5rem;
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

.chess-game-boards-info {
    color: var(--text-secondary);
    text-align: center;
    margin: 0;
    margin-top: 0.5rem;
}

.chess-game-boards {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.chess-game-board {
    margin: 0 1rem 0 1 rem;
}

.vl {
    border-left: 6px solid var(--accent-color);
    border-radius: 0.2rem;
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
    background: none;
}

.chess-game-button:hover {
    transform: scale(1.15);
}

.chess-game-continue:disabled {
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