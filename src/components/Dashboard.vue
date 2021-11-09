<template>
  <div class="dashboard">
    <main-bar />
    <side-bar />
  </div>
</template>

<script>
import MainBar from "@/components/main_bar.vue";
import SideBar from "@/components/side_bar.vue";
export default {
  name: "dashBoard",
  components: {
    MainBar,
    SideBar,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
