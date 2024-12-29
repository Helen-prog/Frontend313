<template>
    <!-- <div v-html="myHtml"></div>
    <div>{{ myHtml }}</div>
    <h2 v-text="title"></h2>
    <h2>{{ title }}</h2>
    <h2 v-once>{{ title }}</h2>
    <h2 v-pre>{{ title }}</h2>
    <button @click="title='Другой заголовок'">Изменить</button> -->
    <ul>
        <!-- <li v-for="item, i in 7" :key="i"><strong>{{ i }}</strong> {{ item }}</li> -->
         <!-- <li v-for="value, key in person" :key="value">
            <strong>{{ key }}:</strong> {{ value }}
         </li> -->
         <li v-for="item, i in evenItems" :key="i">
            <strong>{{ item }}</strong>
         </li>
    </ul>
</template>

<script>
export default {
    name: 'DirectiveStart',
    data: () => ({
        title: "Я заголовок",
        myHtml: "<h1>Vue приложение</h1>",
        person: {
            firstName: 'Nikita',
            lastName: 'Sovin',
            age: 30
        },
        items: [10, 21, 32, 43, 54, 65]
    }),
    computed: {
        evenItems(){
            return this.items.filter(i => i % 2 === 0)
        }
    }
}
</script>

