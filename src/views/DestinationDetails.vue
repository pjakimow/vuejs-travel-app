<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="require(`@/assets/${destination.image}`)"
                 alt="destination.name"/>
            <p>{{destination.description}}</p>
        </div>
    </section>
</template>

<script>
    import store from "../store";
    export default {
        name: "DestinationDetails",
        data() {
            return {
                //slug: this.$route.params.slug // we will get this value from props
            }
        },
        computed: {
            destination() {
                return store.destinations.find(
                    destination => destination.slug === this.slug
                )
            }
        },
        props: {
            slug: { // component doesn't have to know there it has the data from
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  ustify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
