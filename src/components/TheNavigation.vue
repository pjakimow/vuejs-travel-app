<template>
    <nav id="nav">
        <p class="logo">The Travel App</p>
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li v-for="destination in destinations"
                :key="destination.name" class="links">
                <router-link :to="{
                    name: 'DestinationDetails',
                    params: {slug: destination.slug}
                }">
                    {{ destination.name }}
                </router-link>
            </li>
        </ul>
<!--        <router-link to="/">Home</router-link>-->
<!--        <router-link to="/brazil">Brazil</router-link>-->
<!--        <router-link to="/hawaii">Hawaii</router-link>-->
<!--        <router-link to="/panama">Panama</router-link>-->
<!--        <router-link to="/jamaica">Jamaica</router-link>-->
    </nav>
</template>

<script>
    import store from "@/store";
    export default {
        name: "TheNavigation",
        data (){
            return {
                destinations: store.destinations,
            }
        }
    }
</script>

<style scoped>
    #nav{
        display: flex;
        /*align-items: center;*/
        /*padding: 30px;*/
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }
    #nav a.router-link-exact-active {
        color: red;
    }
    #nav a.my-custom-active-link-class {
        color: orange;
    }
    .nav-links {
        display: flex;
    }
    .links {
        padding-right: 20px;
        list-style: none;
    }
    .links:hover{
        text-decoration: underline;
    }
    .logo {
        font-size: 20px;
        color: dodgerblue;
        font-weight: bold;
    }

</style>