<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Logo</router-link>
    </div>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html {
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;

  body {
    margin: 0;
    &.md-theme-default {
      background-color: #ebebeb;
    }

    * {
      flex-grow: 0;
      flex-shrink: 0;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  }
}

html,
body,
#app {
  height: 100vh;
}

#app {
  color: white;
  background-color: #1c076e;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .nav {

  }

  .router-view {

  }
}
</style>
