<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Список категорий</div>
                <div class="card-body">
                    <select>
                        <option value="">Выбрать</option>
                        <option v-for="category in getCategories"
                                :value="category.id"
                                :key="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="card">
                <div class="card-header">Вопросы ответы</div>
                    <div class="card-body">

                        <ul class="list-group">
                            <li v-for="faq in getFAQ"
                                :value="faq.id"
                                :key="faq.id" class="list-group-item">
                                <a href="#" @click="contentVisible === faq.id ? contentVisible = false : contentVisible = faq.id">{{ faq.name }}</a>
                                <p v-if='contentVisible === faq.id'>{{ faq.answer }}</p>
                            </li>
                        </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                contentVisible: true
            }
        },
        mounted() {
            console.log('Component mounted.')
            this.$store.dispatch('ajaxCategoriesFromDB')
            this.$store.dispatch('ajaxFAQFromDB')
        },
        methods: {
            toggle: function(){
                this.contentVisible = !this.contentVisible
            }
        },
        computed: {
            getCategories(){
                return this.$store.getters.getCategories
            },
            getFAQ(){
              return this.$store.getters.getFAQ
            }
        }
    }
</script>
