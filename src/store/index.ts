import {createVuexStore} from 'vuex-simple';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {MyStore} from './store';
const instance = new MyStore();

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
});

