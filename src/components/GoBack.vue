<template>
    <span class="go-back">
        <button @click="goBack">go back</button>
    </span>
</template>

<script>
    export default {
        name: "GoBack",
        methods: {
            goBack(){
                return this.$router.go(-1) // go back one step
            }
        }
    }
</script>

<style scoped>
.go-back{
    display: flex;
    cursor: pointer;
}
button {
    border: 0;
    background: transparent;
}
</style>