<template>
    <div>
        <h1>Welcome {{ user }}</h1>
        <p>
            <router-link :to="{name: 'invoices'}">Invoices</router-link>
        </p>
        <button @click="logout" class="btn">Log out</button>
    </div>
</template>

<script>
    import store from "@/store";
    export default {
        name: "User",
        data(){
            return {
                user: store.user
            }
        },
        methods: {
            logout() {
                store.user = null;
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
.btn {

}
</style>