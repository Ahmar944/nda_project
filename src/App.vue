<template>
  <div id="app">
   
<!--     
    <HelloWorld msg="Welcome to Your Vue.js App"/><br/>
    <h1 >Register Page: 1</h1>
    <Register/><br/>
    <h1>Login Page: 2</h1>
    <Login/><br/>
    <h1>Forgot Password: 3</h1>
    <forgot/><br/>
    <h1>Verify Email: 4</h1>
    <Verify/><br/>
    <h1>Set Password: 5</h1>
    <Password/><br/>
    <h1>Updated: 6</h1>
  
    <update/> -->

    <main role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Register from './views/Register.vue'
// import Login from './views/Login.vue'
// import Forgot from './views/Forgot.vue'
// import Verify from './views/Verify.vue'
// import Password from './views/SetPassword.vue'
// import Update from './views/Updated.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Register,
    // Login,
    // Forgot,
    // Verify,
    // Password,
    // Update
}
}
</script>

<style scoped>
/* .log{
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  text-align: center;
} */
</style>
