<template>
    <div class="card">
        {{ title }}
        <app-button
            v-if="wasRead"
            :color="'green'"            
            @action="$emit('unmark', id)"
        >Отметить непрочитанной</app-button>
        <app-button
        @action="open"
        >{{ isNewOpen ? 'Закрыть' : 'Отрыть' }}</app-button>

    </div>
    <div :class="isNewOpen ? 'card' : ''">
        <div v-if="isNewOpen">
            <p v-if="isNewOpen">
                {{ description }}
            </p>
             <app-button
             v-if="!wasRead" 
             :color="'blur'"            
             @action="mark"
             >Прочесть новость</app-button>

             <app-news-list></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';

export default {
    props: {
        wasRead: Boolean,
        title: String,
        description: String,
        id: {
            type: Number,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            // item: "Первый компонент",
            // isOpen: false
            localIsOpen: this.isOpen,
            isNewOpen: this.isOpen
        }
    },
    methods: {
        toggleOpen() {
            this.localIsOpen = !this.localIsOpen
        },
        open() {
            this.isNewOpen = !this.isNewOpen
            if (this.isNewOpen) {
                this.$emit('open-news')
            }
        },
        mark(){
            this.isNewOpen = false;
            this.$emit("read-news", this.id)
        },
        // unmark(){
        //     this.$emit("unmark", this.id)
        // }
    },
    emits: ['open-news', 'read-news', 'unmark'],
    components: {
        AppButton,
        AppNewsList
    }
}
</script>