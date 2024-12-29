<template>
    <p :class="{ invalid: error }">
        <label :for="id">{{ label }}</label><br>
        <input 
            type="text" 
            :id="id"
            :value="value"
            @input="change"
        > <br>
        <small v-if="error">{{ error }}</small>
    </p>
</template>

<script>
export default {
    emits: ['update:value'],
    props: {
        value: String,
        label: String,
        error: String
    },
    methods: {
        change(event){
            this.$emit('update:value', event.target.value)
        }
    },
    data() {
        return {
            id: "input-" + Math.random()
        }
    }
}
</script>