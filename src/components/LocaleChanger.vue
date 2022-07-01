<template>

  <div class="locale-changer">
    <select v-model="$i18n.locale" class="dropdown">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" v-text="lang" class="option"/>
    </select>
    <span class="arrow"/>
  </div>

</template>

<script>

export default {
  name: 'locale-changer',
  data () {
    return { langs: ['en', 'fr'] }
  }
}

</script>

<style>

.locale-changer {
  position: relative;
}

.dropdown {
  padding: 0.4rem 1rem;
  background-color: #4d5061;
  color: white;
  border: 0;

}

.arrow {
  position: absolute;
  top: 0;
  right: 0;
  background: #3b3c47;
  display: block;
  height: 100%;
  width: 1.1rem;
  pointer-events: none;
}

.arrow::before, .arrow::after {
  --size: 0.3rem;
  --color: rgba(255, 255, 255, .5);

  content: '';
  position: absolute;
  height: 0;
  width: 0;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.arrow::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid var(--color);

  top: 30%;
}

.arrow::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid var(--color);

  top: 60%;
}

</style>