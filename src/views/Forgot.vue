<template>
<div class="row m-0">
    <leftSide/>


    <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-sm-block sign">
        <!--    globalNda for mobile screen-->
        <div class="container-fluid container-md container-sm px-sm-3">
            <div class="">
                <div class="logo d-xl-none d-lg-none d-md-none d-sm-block visible ">
                    <h5 class="global1">Global NDA</h5>
                </div>
                <!--      SignUp Text-->
                <div class="signin pt-lg-5 pt-md-5 pt-sm-3">
                    <h3 class="hello">Forgot Password</h3>
                    <p class="signp">Provide your account's email you want to <br>reset your password</p>
                    <darkMode />
                </div>
                <!--      Input Fields-->
                <div class="">
                    <div class="signup-form farm pt-lg-2 pt-md-2 pt-sm-3">
                        <form @submit.prevent="register">
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

                            <div class="">
                                <button type="submit" class="Register w-100" >Next</button>
                            </div>
                        </form>
                        <p class="link text-center mt-0">
                                    <router-link to="/Login" class="links">Back to Login</router-link>
                                </p>
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
import darkMode from '../components/darkMode'
import leftSide from '../components/leftSide.vue'


import {
    required,
    email
    
} from "vuelidate/lib/validators";

export default {
    name: "Forgot",
    data() {
        return {
            details: {
                email: "",
            },
            submitStatus: null,
        };
    },
    validations: {
        details: {
            email: {
                required,
                email,
            },
        },
    },
    components: {
        darkMode,
        leftSide,
    },
    methods: {
        register() {
            console.log("submitffff!");
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                setTimeout(() => {
                    this.submitStatus = "OK";
                    this.$router.push('/Verify')
                }, 500);
            }
        }
    }
}

</script>
<style scoped>

</style>