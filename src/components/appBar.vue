<template>
    <v-app>
        <v-app-bar>
            <slot name="appBar"></slot>
        </v-app-bar>

        <v-main>
                <v-container fluid>
                    <slot name="content"></slot>
                </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {

}
</script>
<style>
    .v-container{
        box-sizing: border-box;
        height: 100%;
    }
</style>