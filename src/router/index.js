import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//  declare variable


// const guest = (to, from, next) => {
//     if (!localStorage.getItem("authToken")) {
//       localStorage.removeItem("authToken");
//       return next(next);
//     } else {
//       return next("/");
//     }
//   };
  
  // const auth = (to, from, next) => {
  //   if (localStorage.getItem("users")) {
  //     console.log(localStorage.getItem("users"))
  //     return next();

  //   } else {
  //     localStorage.removeItem("users");
  //     return next("/login");
    
  //   }
  // };

const routes = [{
  path: '/',
  name: 'Register',
  // beforeEnter: guest,
  component: ()=>import ('../views/Register.vue')
},
  {

    path: '/login',
    name: 'Login',
    // beforeEnter: guest,
    component: ()=>import ('../views/Login.vue')
},
{
  path: '/Forgot',
  name: 'Forgot',
  component: ()=>import ('../views/Forgot.vue')
},
{
  path: '/Verify',
  name: 'verify',
  // beforeEnter: auth,
  component: ()=>import ('../views/Verify.vue')
},
{
  path: '/test',
  name: 'test',
  // beforeEnter: guest,
  component: ()=>import ('../views/test.vue')
},
{
  path: '/setpassword',
  name: 'setpassword',
  // beforeEnter: guest,
  component: ()=>import ('../views/SetPassword.vue')
},
{
  path: '/update',
  name: 'update',
  // beforeEnter: guest,
  component: ()=>import ('../views/Updated.vue')
}
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router
