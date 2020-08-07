import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: []
    },
    getters: {
        getCategories(state){
            return state.categories
        }
    },
    actions: {
        ajaxCategoriesFromDB(context){
            axios
            .get('api/category')
            .then(response => {
                console.log(response.data.categories)
                context.commit('setCategories', response.data.categories)
            })
            .catch(error => {
                console.log('Ошибка!', error)
            })
        }
    },
    mutations:{
        setCategories(state, data){
            return state.categories = data
        }
    }
})
