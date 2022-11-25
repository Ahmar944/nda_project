<template>
<div class="row m-0 ">
    <leftSide />
    
    <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-sm-block sign">
        <!--    globalNda for mobile screen-->
        <div class="container-fluid container-md container-sm px-sm-3">
            <div class="">

                <div class="logo d-xl-none d-lg-none d-md-none d-sm-block visible ">
                    <h5 class="global1">Global NDA</h5>
                </div>
                <!--      SignUp Text-->
                <div class="signin pt-0 pt-md-5">
                    <h2 class="hello">Hello!</h2>
                    <p class="signp">Sign Up To Get Started</p>
                    <darkMode />
                </div>

                <!--      Input Fields-->
                <div class="padding">
                    <div class="signup-form farm">
                        <form @submit.prevent="registerUser">
                            <!-- User Name input field -->
                            <div class="form-group">
                                <div class="input-group input">
                                    <i class="px-1 fa fa1 bi bi-person-fill"></i>
                                    <input type="text" class="form-control border-0 input-text" id="name" name="username" placeholder="Full Name"  autocomplete="off" v-model.trim="$v.details.name.$model" :class="{
                                    'is-invalid': $v.details.name.$error,
                                    'is-valid': !$v.details.name.$invalid,
                                    }" />
                                    <!-- <div class="valid-feedback">Your full name is valid</div> -->
                                    <div class="invalid-feedback req pt-0 pt-md-1">
                                        <span v-if="!$v.details.name.required">Full name is required</span>
                                        <span v-if="!$v.details.name.minLength">Full name must have at least
                                            {{ $v.details.name.$params.minLength.min }} letters</span>
                                        <span v-if="!$v.details.name.maxLength">Full name must have at most
                                            {{ $v.details.name.$params.maxLength.max }} letters</span>
                                    </div>

                                </div>
                            </div>
                            <!-- User Email input field -->
                            <div class="form-group">
                                <div class="input-group input">
                                    <i class="px-1 fa bi bi-envelope"></i>
                                    <input type="email" class="form-control border-0 input-text" id="email" name="email" placeholder="Email Address" autocomplete="off" v-model.trim="$v.details.email.$model" :class="{
                                        'is-invalid': $v.details.email.$error,
                                        'is-valid': !$v.details.email.$invalid,
                                         }" />
                                    <div class="invalid-feedback req pt-md-1">
                                        <span v-if="!$v.details.email.required">Email is required</span>
                                        <span v-if="!$v.details.email.email">Email must be valid</span>
                                    </div>
                                </div>
                            </div>
                            <!-- User password input field -->
                            <div class="form-group">
                                <div class="input-group input">
                                    <i class="fa fa1 fa-lock " aria-hidden="true"></i>
                                   
                                        <input type="text" v-if="!passwordHidden" class="form-control border-0 input-text " id="password" name="password" placeholder="Password"  autocomplete="off" v-model.trim="$v.details.password.$model" :class="{
                                        'is-invalid': $v.details.password.$error,
                                        'is-valid': !$v.details.password.$invalid,
                                        }" /><i class="fa bi bi-eye-slash " v-if="!passwordHidden" @click="hidePassword" aria-hidden="true"></i>
                                        
                                 
                                        <input type="password" v-if="passwordHidden" class="form-control input-text border-0 " id="password" name="password" placeholder="Password"  autocomplete="off" v-model.trim="$v.details.password.$model" :class="{
                                        'is-invalid': $v.details.password.$error,
                                        'is-valid': !$v.details.password.$invalid,
                                        }" /><i class="fa bi bi-eye " v-if="passwordHidden"  @click="showPassword" aria-hidden="true"></i>
                                    
                                    <!-- <div class="valid-feedback">Your full name is valid</div> -->
                                    <div class="invalid-feedback req pt-md-1">
                                        <span v-if="!$v.details.password.required">Password is required</span>
                                        <span v-if="!$v.details.password.minLength">Password must have at least
                                            {{ $v.details.password.$params.minLength.min }} letters</span>
                                        <span v-if="!$v.details.password.maxLength">Password must have at most
                                            {{ $v.details.password.$params.maxLength.max }} letters</span>
                                    </div>
                                </div>
                            </div>
                            <!-- show hide -->
                            
                            
                            <div>
                                <button type="submit" class="Register w-100">Register</button>
                                <p class="link text-center">Already Have an Account?<router-link to="/Login" class=" links"> Login Here</router-link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div class="circle-one d-block d-md-none">
                <img src="../../public/assets/media/elips1.png" />
            </div>
            <div class="circle-two d-block d-md-none">
                <img src="../../public/assets/media/elips2.png" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import leftSide from '../components/leftSide.vue'
import darkMode from '../components/darkMode'
import {
    required,
    minLength,
    maxLength,
    email
} from "vuelidate/lib/validators";

export default {
    name: "Register",
    props: {
            password: {
                default: "",
                type: String
            }
        },

    data() {
        return {
            details: {
                name: "",
                email: "",
                password: "",
                users: []
            },
            passwordHidden: {
                    default: false,
                    type: Boolean
                },
            submitStatus: null,
        };
    },
    components: {
        darkMode,
        leftSide,
    },

    validations: {
        details: {
            name: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(15),
            },
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(15),
            },
        },
    },
    methods: {
        hidePassword() {
                this.passwordHidden = true;
            },
            showPassword() {
                this.passwordHidden = false;},
        registerUser() {
            console.log("submitffff!");
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                // do your submit logic here
                this.submitStatus = "PENDING";
                setTimeout(() => {
                    this.submitStatus = "OK";
                    this.$router.push('/Login');
                }, 500);
            }

            //Hello I am changing this project nothing else..
            // let user = {
            //     username: this.username,
            //     email: this.email,
            //     password: this.password,

            // }
            // this.users.push(user);
            // localStorage.setItem('users', JSON.stringify(this.users))
            // this.$router.push('/login');
        },
    },
}
// import { required, minLength, maxLength, alpha, email  } from 'vuelidate/lib/validators'
// 1
// export default {
//     name: "Register",
//     data() {
//         return {
//             username: "",
//             email: "",
//             password: "",
//             users: []
//         }
// },
// 1
// data: () =>({
//     username: "",
//     email: "",
//     password: ""
// }),
// validations: {
//     username: {
//         required,
//         alpha
//     },
//     email: {
//         required,
//         email
//     },
//     password: {
//         required,
//         maxLength: maxLength(8),
//         minLength: minLength(6)
//     }
// },
// 2
// methods: {
//     registerUser() {
//         let user = {
//             username: this.username,
//             email: this.email,
//             password: this.password,
//         };

//         this.users.push(user);
//         localStorage.setItem('users', JSON.stringify(this.users))
//         this.$router.push('/login');
//     },
//     Register() {
//         this.$router.push('/Login');
//     },
// 2
// registerUser(){
//     this.$v.$touch();

//     if(!this.$v.$invalid){
//         console.log( 'Name: $(this.username), Email: $(this.email), Password: $(this.password)' );
//     }
// }
// 3
//     }
// }
// 3
</script>
