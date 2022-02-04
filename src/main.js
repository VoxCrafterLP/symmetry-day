import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from 'vue-i18n'

const messages = {
  en: {
    nav: {
      overview: 'Overview',
      chessgame: 'Chess game',
      info: 'Information',
      source: 'Source code'
    },
    chessgame: {
      title: 'Chess game',
      extitle: 'How does it work?',
      extext: 'You have two chessboards, one on the right and one on the left. On the right side there are pieces that cannot be moved, but those on the left side can be moved. The goal is to move the pieces on the left side so that at the end they are symmetrical to the ones on the right side. You have to iterate between the two colors like in a normal chess game.',
      level: 'Level',
      difficulty: 'Difficulty:',
      moves: 'Required moves:',
      reset: 'Reset',
      nextlevel: 'Next level',
      easy: 'Easy',
      normal: 'Normal',
      hard: 'Hard'
    },
    info: {
      title: 'Explanations',
      card1: {
        title: 'title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non. '
      },
      card2: {
        title: 'title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non. '
      },
      card3: {
        title: 'title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non. '
      },
      card4: {
        title: 'title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non. '
      }
    }
  },
  fr: {
    nav: {
      overview: 'Présentation',
      chessgame: 'Jeu d\'échecs',
      info: 'Informations',
      source: 'Source code'
    },
    chessgame: {
      title: 'Jeu d\'échecs',
      extitle: 'Comment cela fonctionne-t-il ?',
      extext: 'On a deux échiquiers, un a droit et un a gauche. Sur le côté droit il y a des figures qu`on ne peut pas bouger, mais celles du côté gauche on peut bouger. Le but de ce jeu est de bouger les figures du côté gauche pour que à la fin ils sont symétriquement au côté droit. On doit toujours changer entre les deux couleurs comme chez l`échecs normal.',
      level: 'Level',
      difficulty: 'Difficulté:',
      moves: 'Mouvements requis:',
      reset: 'Réinitialiser',
      nextlevel: 'Level suivant',
      easy: 'Facile',
      normal: 'Normale',
      hard: 'Difficile'
    },
    info: {
      title: 'Explications',
      card1: {
        title: 'La symétrie orthogonale par rapport au plan',
        text: 'C\'est la transformation de l\'espace qui à tout point M de l\'espace associe le point M\' tel que  est le plan médiateur de [MM\']. C\'est la transformation de l\'espace qui à tout point M du plan associe le point M\' symétrique de M par rapport au projeté orthogonal H de M sur le plan.'
      },
      card2: {
        title: 'Symétrie axiale',
        text: 'La symétrie axiale, d\'axe la droite d, laisse tous les points de d invariants et transforme tout point M, non situé sur d, en un point image M\' tel que la droite (MM\') soit perpendiculaire à l\'axe de symétrie d et que le milieu du segment [MM\'] appartient à l\'axe de symétrie d.'
      },
      card3: {
        title: 'Rotation',
        text: 'Transformer une figure par rotation, c’est créer l’image de cette figure par une rotation autour du centre suivant un angle donné. Une rotation est définie par un centre, autour lequel on tourne, un angle de rotation et un sens, soit le sens horaire soit le sens anti-horaire.'
      },
      card4: {
        title: 'Symétrie axiale',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non. '
      }
    }
  }
}

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

//Add fontawesome icons (solid & github brand)
library.add(fas, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')