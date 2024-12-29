<template>
    <hr>
    <!-- <h3 style="color: orange">{{ title }}</h3> -->
    <!-- <h3 :style="{color: 'orange'}">{{ title }}</h3> -->
    <h3 :style="{
        color: inputValue.length < 5 ? 'orange' : 'green',
        fontSize: inputValue.length < 6 ? '18px' : '14px'
        }">{{ title }}</h3>
    <input 
        type="text" 
        :placeholder="placeholderString"
        :value="inputValue"
        v-model="inputValue"
        @keypress.enter="addNewNote"
    >
    <button v-on:click="addNewNote">Добавить</button>
    <hr>
    <ul v-if="notes.length !== 0">
        <li v-for="note, index in notes" v-bind:key="index">
            <!-- <span :class="note.length > 5 ? 'primary' : 'bold'">({{ index + 1 }}) {{ toUpperCase(note) }}</span>  -->
            <!-- <span :class="{
                'primary': true,
                'bold': note.length > 5
            }">({{ index + 1 }}) {{ toUpperCase(note) }}</span>  -->
            <span :class="['primary', {'bold': note.length > 5}]">({{ index + 1 }}) {{ toUpperCase(note) }}</span> 
            <button @click="removeNote(index)">Удалить</button>
        </li>
    </ul>
    <div v-else>Элементов пока нет. Добавьте первый</div>
    <!-- <div v-else-if="notes.length === 0">Элементов пока нет. Добавьте первый</div> -->
    <!-- <div v-show="notes.length === 0">Элементов пока нет. Добавьте первый</div> -->
</template>

<script>
export default {
    name: 'ListItems',
    data(){
        return{
            title: "Список элементов",
            placeholderString: "Введите название элемента",
            inputValue: "",
            notes: ["Элемент 1", "Элемент 2"]
        }
    },
    methods: {
        // inputChange(event){
        //     this.inputValue = event.target.value
        // },
        addNewNote(){
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        removeNote(index){
            this.notes.splice(index, 1)
        },
        toUpperCase(item){
            return item.toUpperCase()
        }
    },
    watch: {
        inputValue(value){
           if (value.length > 9){
             this.inputValue = ''
           }
        }
    }
}
</script>

<style>
.primary{
    color: blue;
}
.bold{
    color: red;
}
</style>