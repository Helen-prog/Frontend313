<template>
    <div class="alert" :class="type">
        <p class="alert-title">{{ title }}</p>
        <p>{{ text }}</p><br>
        <button v-if="closable" @click="$emit('close')">Закрыть</button>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        text: String,
        title: String,
        closable: {
            type: Boolean,
            required: false,
            default: false
        },
        type: {
            type: String,
            required: false,
            default: 'green',
            validator(val){
                return ['red', 'green', 'orange'].includes(val)
            }
        }
    }
}
</script>