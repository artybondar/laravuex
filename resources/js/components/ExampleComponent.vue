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

            <div class="bd-example">

                <ul class="list-group">Вопросы ответы
                <li v-for="faq in getFAQ"
                    :value="faq.id"
                    :key="faq.id" class="list-group-item">{{ faq.name }}: {{ faq.answer }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
            this.$store.dispatch('ajaxCategoriesFromDB')
            this.$store.dispatch('ajaxFAQFromDB')
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
