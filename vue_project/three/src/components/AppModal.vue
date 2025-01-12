<template>
    <div class="model-backdrop" @click="$emit('close')"></div>
    <div class="modal">
        <h3>Это заголовок модального окна</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam nesciunt praesentium soluta, voluptas at officiis consequatur mollitia, quod possimus quaerat in commodi quidem cum voluptate unde, velit qui similique?</p>
    </div>
</template>

<script>
export default {
    emits: ['close']
}
</script>

<style>
.modal{
    position: absolute;
    left: 30px;
    top: 50px;
    background: #FFF;
    border: 1px solid;
    padding: 20px;
    width: 300px;
    z-index: 2;
}
.model-backdrop{
    background: rgba(0,0,0,.4);
    position: absolute;
    left: 0;
    top: 0;
    right: 100%;
    bottom: 100%;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
