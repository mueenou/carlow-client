<template>
    <b-container>
        <b-row class="section-home-1">
            <b-col>
            </b-col>
            <b-col cols="8">
                <h1 class="other-h1">Welcome to Carlow renting {{ userDatas || "visitor" }} !</h1>
            </b-col>
            <b-col>
                <img class="bmw-banner" src="../assets/images/bmw_banner.png" alt="bmw_banner" width="400px">
            </b-col>
        </b-row>
        <b-row class="section-home-other">
            <b-col>
                <img data-aos="fade-right" data-aos-duration="1000" class="dodge-banner" src="../assets/images/dodge_PNG31.png" alt="citroen_banner" width="400px">
            </b-col>
            <b-col cols="8">
                <h1 class="other-h1">Second Vertical Slide</h1>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
        };
    },
    computed: {
        userDatas: {
            get() {
                return sessionStorage.getItem('name');
            },
            set() {
            }
        }
    },
}
</script>

<style scoped>
    .bmw-banner {
        position: absolute;
        right: 50px;
        top: 300px;
    }
    .dodge-banner {
        position: absolute;
        left: 50px;
        top: 300px;
    }
    h1 {
        color: rgb(255, 255, 255);
        text-transform: uppercase;
    }

    .section-home-1 {
        height: calc(100vh - 70px);
    }

    .section-home-other {
        height: 100vh;
    }
    .other-h1 {
        margin-top: 35px;
    }
</style>