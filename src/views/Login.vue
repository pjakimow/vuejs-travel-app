<template>
    <div class="login">
        <h1>Log In</h1>
        <div class="form">
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username" class="input">
            <label for="password">Password</label>
            <input v-model="password" type="text" name="password" class="input">
            <button @click="login" class="btn">Log In</button>
        </div>
    </div>
</template>

<script>
    import store from "@/store";
    export default {
        name: "Login",
        data(){
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            login() {
                // Authenticate against API
                // Fake:
                store.user = this.username;
                this.$router.push({name: 'user'}); // redirect
            }
        }
    }
</script>

<style scoped>

</style>