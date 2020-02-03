<template>
  <div id="app">
    <div class="counter">{{counter}}</div>
    <button @click="increment" class="increment">Tambah</button>
    <button @click="decrement" class="decrement">Kurangi</button>
  </div>
</template>
<script>
// import store from '@/store/store';
//https://medium.com/@MFaridZia/belajar-state-management-pada-vue-js-dengan-vuex-ef6d0571bc0e

export default {
  methods: {
    increment() {
      //fungsi commit untuk mengeksekusi mutasinya
      this.$store.commit("increment");
    },
    decrement() {
      //fungsi commit untuk mengeksekusi mutasinya
      this.$store.commit("decrement");
    }
  },
  //gunanya untuk menampilkan data statenya
  computed: {
    counter() {
      //fungsi getCounter mengacu pada fungsi getters yg ada pada file index.js
      //kita juga bisa menggunakan helper sebenarnya untuk mengakses store maupun getters nya
      return this.$store.getters.getCounter;
    }
  }
};
</script>
<style scoped>
#app {
  width: 30%;
  margin: 100px auto;
  background: #f1f1f1;
  padding: 15px;
}
.counter {
  width: 70%;
  padding: 50px 5px;
  margin: 20px auto;
  background: #3498db;
  color: #fff;
  font-size: 100px;
}
button {
  border: 0;
  padding: 13px 45px;
  font-weight: bold;
  margin-bottom: 20px;
}
.increment {
  background: #2c3e50;
  color: #fff;
}
.increment:hover {
  transition: 0.7s;
  opacity: 0.8;
  cursor: pointer;
}
.decrement {
  background: #c0392b;
  color: #fff;
}
.decrement:hover {
  transition: 0.7s;
  opacity: 0.9;
  cursor: pointer;
}
</style>