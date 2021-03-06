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
        <h1 class="chess-game-boards-title">{{ $t("chessgame.level") }} {{ getCurrentLevelNumber() }}</h1>
        <p class="chess-game-boards-info">{{ $t("chessgame.difficulty") }} {{ $t(getCurrentLevel().difficulty) }}</p>
        <p class="chess-game-boards-info">{{ $t("chessgame.moves") }} {{ this.requiredMoves }}</p>

        <div v-if="showBoards" class="chess-game-boards">
            <chessboard :fen="getCurrentLevel().startFen" @onMove="checkChessState" class="chess-game-board"/>
            <div class="vl"></div>
            <chessboard :fen="getCurrentLevel().referenceFen" class="chess-game-board board-disable-movement"/>
        </div>

        <div class="chess-game-interactions">
          <button @click="resetLevel()" class="chess-game-reset chess-game-button">{{ $t("chessgame.reset") }}</button>
          <button @click="nextLevel()" class="chess-game-continue chess-game-button" :disabled="!nextLevelButtonEnabled">{{ $t("chessgame.nextlevel") }}</button>
          <h2 v-show="nextLevelButtonEnabled" class="chess-game-won">{{ $t('chessgame.won') }}</h2>
          <h2 v-show="finished" class="chess-game-won">{{ $t('chessgame.finished') }}</h2>
        </div>

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
            if((this.levels.length - 1) !== this.currentLevelIndex) {
                this.currentLevelIndex++
                this.loadLevel(this.currentLevelIndex)
            }
            this.nextLevelButtonEnabled = false
        },
        checkChessState(data) {
            if(data.fen.startsWith(this.currentLevel.endFen)) {
                if((this.levels.length - 1) !== this.currentLevelIndex)
                  this.nextLevelButtonEnabled = true
                else
                  this.finished = true
            }

            if(this.requiredMoves != 0)
                this.requiredMoves--

            //console.log('1: ' + data.fen)
            //console.log('2: ' + this.currentLevel.endFen)
        }
    },
    data() {
        return {
            levels: [
                new ChessLevel("b1k1qbr1/3p3P/6p1/p3N1Q1/1p5R/2P1PN2/PP1P1PP1/BRK2B2 w - - 0 1", "2k2bQ1/3p4/6p1/p3N1Q1/1p2R3/2P1P3/PP1P1PP1/BRK2B2 b - - 0 3", "1Qb2k2/4p3/1p6/1Q1N3p/3R2p1/3P1P2/1PP1P1PP/2B2KRB w - - 0 1", "chessgame.easy", 6),
                new ChessLevel("1k1r4/1p4q1/p6r/2ppN3/P3bP2/1P2P2P/KQP5/3R4 w - - 0 1", "1k6/1p1r4/p6r/2pR4/P3bP2/1P2P2P/1KP5", "6k1/4r1p1/r6p/4Rp2/2Pb3P/P2P2P1/5PK1/8 b - - 0 1", "chessgame.normal", 6),
                new ChessLevel("2b3n1/2kpb1p1/p6p/1p2P2Q/1n3P2/3P4/P1P4P/1NB1K2R w - - 0 1", "2b5/2k1b1p1/4p3/1p6/1n3P2/3Pn3/P1P4P/4K2R w - - 0 6", "5b2/1p1b1k2/3p4/6p1/2P3n1/3nP3/P4P1P/R2K4 w - - 0 1", "chessgame.hard", 11),
                //new ChessLevel("1k3b1r/1b1n1pp1/p1q1p3/p1p5/8/2BB1N1Q/PPP2PPP/4K2R w - - 0 1", "k4b2/1b3ppQ/p1q5/p1p1B3/8/8/PPP2PPP/4K2R", "2b4k/Qpp3b1/5q1p/3B1p1p/8/8/PPP2PPP/R2K4 w - - 0 1", "chessgame.hard", 10),
            ],
            showBoards: true,
            currentLevelIndex: 0,
            currentLevel: null,
            nextLevelButtonEnabled: false,
            requiredMoves: -1,
            finished: false
        }
    },
    created() {
        this.loadLevel(0)
    }
}

</script>

<style>

.chess-game {
  margin: 0 0 0 5rem;
  top: 0;
    background-color: var(--bg-secondary);
    padding: 1rem;
}

.chess-game-title {
    color: var(--accent-color);
    text-align: center;
    font-size: 3rem;
    margin: 0.5rem 0 0;
    text-decoration: underline;
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
  margin: 0.5rem 0 0;
}

.chess-game-boards {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.chess-game-board {
    margin: 0 1rem 0 1rem;
}

.board-disable-movement {
  pointer-events: none;
}

.vl {
    border-left: 6px solid var(--accent-color);
    border-radius: 0.2rem;
    height: 320px;
    margin: 0 4rem 0 4rem;
}

.chess-game-button {
    font-size: 1rem;
    font-weight: 600;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: var(--accent-color);
    padding: 0.25rem 1rem;
    border: var(--accent-color) 0.25rem solid;
    border-radius: 0.5rem;
    transition: var(--transition-speed);
    background: none;
    height: 2.5rem;
}

.chess-game-button:hover {
    transform: scale(1.05);
    color: var(--accent-color-focus);
}

.chess-game-continue:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: scale(1);
  color: var(--accent-color);
}

.chess-game-interactions {
  display: flex;
  margin-right: 1rem;
  margin-top: 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.chess-game-won {
  color: var(--text-primary);
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