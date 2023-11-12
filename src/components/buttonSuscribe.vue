<template>
    <v-btn color="success" @click="setSubscribe()">{{ subscribe ? 'Ya estás suscrito' : 'Suscríbete' }}</v-btn>
</template>


<script setup>
import { ref } from 'vue'

const subscribe = ref(false)
function setSubscribe() {
    subscribe.value = !subscribe.value
}


</script>

<style></style>