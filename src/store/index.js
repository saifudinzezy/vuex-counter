import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    //fungsinya sebagai tempat penyimpanan data pada aplikasi kita,
    state: {
        count: 0
    },
    //fungsinya untuk mengakses data dan biasanya di dalam getters
    //kita juga melakukan pengolahan data terlebih dahaulu sebelum datanya diambil
    getters: {
        //mereturn nilai count pada state
        getCounter: state => {
            return state.count
        }
    },
    //fungsinya untuk mengubah state/data pada aplikasi kita,
    mutations: {
        //function mutations
        //menambahkan nilai
        increment(state) {
            state.count++
        },
        //menurunkan nilai
        decrement(state) {
            if (state.count > 0) state.count--
        }
    }
})