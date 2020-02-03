<template>
  <div id="app">
    <h2>{{counter}}</h2>
    <Counter />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "app",
  components: {
    Counter
  },
  computed: {
    counter() {
      //fungsi getCounter mengacu pada fungsi getters yg ada pada file index.js
      //kita juga bisa menggunakan helper sebenarnya untuk mengakses store maupun getters nya
      return this.$store.getters.getCounter;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
