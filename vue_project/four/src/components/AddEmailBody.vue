<template>
    <div v-if="email">
        <h2>{{ email.theme }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a obcaecati numquam quaerat blanditiis magnam quibusdam et dolores ullam saepe reprehenderit laborum eos reiciendis laboriosam repellat eum ex, quia id?</p>
        <button class="btn base" @click="$router.push('/mail')">Закрыть</button>
    </div>
    <div v-else>
        <h4>Выберите письмо</h4>
    </div>
</template>

<script>
export default {
    inject: ['emails'],
    props: ['mailId'],
    computed: {
        email(){
            return this.emails.find(e => e.id == this.mailId)
        }
    }
}
</script>