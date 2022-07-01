<template>
    <div>
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a @click="switchPage('Overview')" class="nav-link">
                        <font-awesome-icon icon="home" class="nav-link-icon"></font-awesome-icon>
                        <span class="nav-link-text">{{ $t("nav.overview") }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a @click="switchPage('ChessGame')" class="nav-link">
                        <font-awesome-icon icon="chess" class="nav-link-icon"></font-awesome-icon>
                        <span class="nav-link-text">{{ $t("nav.chessgame") }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a @click="switchPage('Info')" class="nav-link">
                        <font-awesome-icon icon="info" class="nav-link-icon"></font-awesome-icon>
                        <span class="nav-link-text">{{ $t("nav.info") }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <font-awesome-icon icon="language" class="nav-link-icon"></font-awesome-icon>
                        <span class="nav-link-text"><locale-changer/></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/VoxCrafterLP/symmetry-day/" class="nav-link">
                        <font-awesome-icon :icon="['fab', 'github']" class="nav-link-icon"></font-awesome-icon>
                        <span class="nav-link-text">{{ $t("nav.source") }}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import LocaleChanger from './LocaleChanger.vue'

export default {
    name: "Navbar",
    components: {
        LocaleChanger
    },
    props: [],
    methods: {
        switchPage(page) {
            this.$emit("switchPage", page)
        }
    }
}

</script>

<style>

.navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 200ms ease;
}

.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.nav-item {
    width: 100%;
    cursor: pointer;
}

.nav-item:last-child {
    margin-top: auto;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition-speed);
}

.nav-link:hover {
    background: var(--bg-secondary);
    color: var(--text-primary);
}

.nav-link-icon {
    color: var(--text-secondary);
    transition: var(--transition-speed);
}

.nav-link:hover svg {
    color: var(--accent-color);
    transform: scale(1.05);
}

.nav-link-text {
    display: none;
    margin-left: 1rem;
}

.nav-link:hover span {
    color: var(--text-primary);
}

.nav-link svg {
    min-width: 2rem;
    margin: 0 1.5rem;
    font-size: 1.8rem;
}


/* Mobile */
@media only screen and (max-width: 600px) {
    .navbar {
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        justify-content: center;
    }

    main {
        margin: 0;
    }
}

/* Desktop */
@media only screen and (min-width: 600px) {
    .navbar {
        top: 0;
        width: 5rem;
        height: 100vh;
    }

    .navbar:hover {
        width: 16rem;
    }

    .navbar:hover .nav-link-text {
        display: inline;
    }
}

</style>