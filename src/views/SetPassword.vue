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
        <div class="signin pt-lg-5 pt-md-5 pt-sm-3">
          <h3 class="hello">Set New Password</h3>
          <p class="signp">Your identity has been verified!<br>Set your New Password</p>
          <darkMode />
        </div>
        <!--      Input Fields-->
        <div class="">
          <div class="signup-form farm pt-lg-2 pt-md-2 pt-sm-3" >
            <form action="" method="" @submit.prevent="registerUser">

              <div class="form-group">
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
                                    <div class="invalid-feedback  req pt-md-1">
                                        <span v-if="!$v.details.password.required">Password is required</span>
                                        <span v-if="!$v.details.password.minLength">Password must have at least
                                            {{ $v.details.password.$params.minLength.min }} letters</span>
                                        <span v-if="!$v.details.password.maxLength">Password must have at most
                                            {{ $v.details.password.$params.maxLength.max }} letters</span>
                                    </div>
                                </div>
                            </div>
                            <!-- User password input field -->
                            <div class="form-group">
                                <div class="input-group input">
                                    <i class="fa fa1 fa-lock" aria-hidden="true"></i>

                                    <input type="text"  v-if="!passwordHiddens" class="form-control password border-0 input-text" id="password1" name="password1" placeholder="Confirm Password" v-model="password1" autocomplete="off" v-model.trim="$v.details.password1.$model" :class="{
                                        'is-invalid': $v.details.password1.$error,
                                        'is-valid': !$v.details.password1.$invalid,
                                        }" /><i class="fa bi bi-eye-slash " v-if="!passwordHiddens" @click="hidePasswords" aria-hidden="true"></i>
                                    
                                    
                                    <input type="password" v-if="passwordHiddens" class="form-control password border-0 input-text" id="password1" name="password1" placeholder="Confirm Password" v-model="password1" autocomplete="off" v-model.trim="$v.details.password1.$model" :class="{
                                        'is-invalid': $v.details.password1.$error,
                                        'is-valid': !$v.details.password1.$invalid,
                                        }" /><i class="fa bi bi-eye " v-if="passwordHiddens"  @click="showPasswords" aria-hidden="true"></i>
                                    
                                    <!-- <div class="valid-feedback">Your full name is valid</div> -->
                                    <div class="invalid-feedback  req pt-md-1">
                                        <span v-if="!$v.details.password1.required">Password is required</span>
                                        <span v-if="!$v.details.password1.minLength">Password must have at least
                                            {{ $v.details.password1.$params.minLength.min }} letters</span>
                                        <span v-if="!$v.details.password1.maxLength">Password must have at most
                                            {{ $v.details.password1.$params.maxLength.max }} letters</span>
                                    </div>
                                </div>
                            </div>
              
              
              <div>
                <button type="submit" class="Register mt-1 w-100" >Confirm</button>

              </div>
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
import darkMode from '../components/darkMode'
import leftSide from '../components/leftSide.vue'


import {
    required,
    minLength,
    maxLength,
    
} from "vuelidate/lib/validators";

export default{
    name: "setpassword",
    props: {
            password: {
                default: "",
                type: String
            }
        },
    data() {
        return {
            details: {
                password: "",
                password1: "",
            },
            passwordHidden: {
                    default: false,
                    type: Boolean
                },
                passwordHiddens: {
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
          password: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(15),
            },
            password1: {
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

                hidePasswords(){
                  this.passwordHiddens = true;
                },
                showPasswords(){
                  this.passwordHiddens = false;
                },
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
                    this.$router.push('/update');
                }, 500);
            }
        }
    }

}

</script>