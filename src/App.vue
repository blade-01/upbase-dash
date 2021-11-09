<template>
  <Dashboard />
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300;400&family=Rubik:wght@300;400&display=swap");

body {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  color: var(--pri-text);
  background: var(--main-bg);
}

:root {
  --banner-bg: #eff1f5;
  --blue: #0525f7;
  --pri-text: #2a2b3b;
  --sec-text: #a19fac;
  --main-bg: #fdfdfd;
  --hover: #f7f6f9;
  --tag-bg: #212236;
  --white: #ffffff;
}

:root .dark {
  --pri-text: #ffffff;
  --sec-text: #ffffff;
  --main-bg: #252945;
  --banner-bg: #141625;
  --tag-bg: #ffffff;
  --hover: #141625;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.15s ease;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Hind Guntur", sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

svg {
  width: 20px;
}

img {
  width: 100%;
}

.hide-on-sm {
  display: none;
}

.hide-on-lg {
  display: block;
}

.container {
  width: 90%;
  margin: auto;
  overflow: hidden;
}

.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.btn-shadow {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 700px) {
  .hide-on-lg {
    display: none;
  }

  .hide-on-sm {
    display: block;
  }
}
</style>
