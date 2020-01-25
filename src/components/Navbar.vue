<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark">
    <b-navbar-brand href="#"><img src="../assets/images/dodge_PNG31.png" alt="brand-logo" width="40px"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link :to="{name: 'home'}" class="router-link">Home</router-link></b-nav-item>
        <b-nav-item href="#">Cars</b-nav-item>
        <b-nav-item href="#">Reserve</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav>
          <b-nav-item href="#" right><router-link class="router-link" :to="{name: 'login'}">Log In</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#" right><router-link class="router-link" :to="{name: 'register'}">Sign Up</router-link></b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown v-show="isConnected">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="disconnect">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>
<script>
export default {
    name: 'navbar',
    computed: {
        isConnected() {
            if(sessionStorage.getItem('token')) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
      disconnect() {
            sessionStorage.clear();
            location.reload();
        },
    }
}
</script>
<style scoped>
  .navbar {
    background-color: rgb(22, 22, 22);
    height: 70px;
  }

  .router-link {
    color: rgb(255, 255, 255);
  }
  .router-link:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
  }
</style>
<style>
  .nav-link {
    color: #FFFFFF !important;
  }

</style>