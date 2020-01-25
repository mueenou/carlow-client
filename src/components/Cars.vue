<template>
    <b-container>
       <h1>This is the cars page</h1>
    </b-container>
</template>

<script>
/* eslint-disable no-console */

export default {
    name: 'cars',
    data() {
        return {
        };
    },
    mounted() {
        fetch('http://localhost:3000/api/user/cars')
            .then(res => res.json())
            .then(res => {
                    console.log(res.data);
                });
        }
}
</script>

<style scoped>
</style>