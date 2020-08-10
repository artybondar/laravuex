import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        faq: []
    },
    getters: {
        getCategories(state){
            return state.categories
        },
        getFAQ(state){
            return state.faq
        }
    },
    actions: {
        ajaxCategoriesFromDB({ commit }){
            axios
            .get('api/category')
            .then(response => {
                console.log(response.data.categories)
                commit('setCategories', response.data.categories)
            })
            .catch(error => console.log('Ошибка!', error))
        },
        ajaxFAQFromDB({ commit }){
            axios
            .get('api/faq')
            .then(response =>{
                console.log(response.data.faq)
                commit('setFAQ', response.data.faq)
            })
                .catch(error => console.log('Ошибка!', error))
        }
    },
    mutations:{
        setCategories(state, data){
            return state.categories = data
        },
        setFAQ(state, data){
            return state.faq = data
        }
    }
})
