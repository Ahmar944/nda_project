<template>
<div class="row m-0">
    <leftSide/>
    <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-sm-block sign">
        <!--    globalNda for mobile screen-->
        <div class="container-fluid container-md container-sm px-sm-3">
            <div class="">
                <!-- 1st -->
                <div class="h-25">
                    <div class="logo d-xl-none d-lg-none d-md-none d-sm-block visible ">
                        <h5 class="global1">Global NDA</h5>
                    </div>
                    <!--      SignUp Text-->
                    <div class="signin pt-0 pt-md-5">
                        <h3 class="hello">Hello Again!</h3>
                        <p class="signp">Welcome Back</p>
                        <darkMode />
                    </div>
                </div>
                <!-- 2nd -->
                <!--      Input Fields-->
                <div class="padding">
                    <div class="signup-form farm">
                        <form action="" method="" @submit.prevent="registerUser">

                            <!-- User Email input field -->
                            <div class="form-group">
                                <div class="input-group input">
                                    <i class="px-1 fa bi bi-envelope"></i>
                                    <input type="email" class="form-control border-0 input-text" id="email" name="email" placeholder="Email Address" v-model="email" autocomplete="off" v-model.trim="$v.details.email.$model" :class="{
                                        'is-invalid': $v.details.email.$error,
                                        'is-valid': !$v.details.email.$invalid,
                                         }" />
                                    <div class="invalid-feedback  req pt-md-1">
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

                            <div>
                                <button type="submit" class="Register mt-1 w-100">Login</button>
                                <p class="link text-center mb-0">Don't Have an Account? <router-link to="/" class="links"> SignUp Here</router-link>
                                </p>
                                <p class="link text-center mt-0">
                                    <router-link to="/Forgot" class="links">Forgot Password</router-link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- 3rd -->
                <div class="h-25">

                    <div class="circle-one d-block d-md-none">
                        <img src="../../public/assets/media/elips1.png" />
                    </div>
                    <div class="circle-two d-block d-md-none">
                        <img src="../../public/assets/media/elips2.png" />
                    </div>
                </div>
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
    name: "Login",
    props: {
            password: {
                default: "",
                type: String
            }
        },
    data() {
        return {
            details: {
                email: "",
                password: "",
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
                setTimeout(() => {
                    this.submitStatus = "OK";
                    this.$router.push('/test');
                }, 500);
            }
        }
    }
}
</script>
