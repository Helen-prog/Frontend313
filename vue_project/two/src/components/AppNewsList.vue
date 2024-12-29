<template>
    <hr>
    <h4>{{ title }}</h4>
    <ul>
        <li v-for="item in news" :key="item.id">{{ item.title }}</li>
    </ul>

</template>

<script>
export default {
    inject: ['title', 'news']
}
</script>