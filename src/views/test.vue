<template>
<div class="row m-0">
    <div class="col-md-6 col-lg-6 col-xl-6 d-md-block d-xl-block d-md-block d-sm-none d-none background m-0 p-0">
        <div class=" container background1">
            <div class="background2">
                <div class=" jumbotron text-white" style="padding-top: 25% ; padding-left: 20%; padding-right: 5%; background: none;">
                    <h1 class=" global">Global NDA(Home Page)</h1>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing.</p>
                    <a class="btn btn-light btn-sm border-0 read-btn" href="#" role="button">Read More</a>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-sm-block sign">
        <!--    globalNda for mobile screen-->
        <div class="container">
            <div class="">
                <div class="eclipse-1 d-xl-none d-lg-none d-md-none d-sm-block visible"></div>
                <div class="eclipse-2 d-xl-none d-lg-none d-md-none d-sm-block visible"></div>

                <div class="logo d-xl-none d-lg-none d-md-none d-sm-block visible ">
                    <h5 class="global1">Global NDA</h5>
                </div>
                <!--      SignUp Text-->
                <div class="signin pt-lg-5 pt-md-5 pt-sm-3">
                    <h3 class="hello pt-lg-5 pt-md-5 pt-sm-3">Welcome Home Page!</h3>
                    <p class="signp">Please Enter the code sent to your email <br> xxx@gmail.com</p>
                </div>
                <!--      Input Fields-->
                <div class="w-100 text-center">
                    <div class="signup-form farm pt-lg-2 pt-md-2 pt-sm-3">
                        <form action="" method="post">
                            <div class="">
                                <div v-if="!passwordHidden">
                                    <label>
                                        <span class="strong-label">{{ fieldLabel }}</span>
                                        <input type="text" class="password-field form-control d-inline" v-model="passwordText" />
                                        <span class="display-eye fa fa-eye-slash" @click="hidePassword"></span>
                                    </label>
                                </div>
                                <div v-if="passwordHidden">
                                    <label>
                                        <span class="strong-label">{{ fieldLabel }}</span>
                                        <input type="password" class="password-field form-control d-inline" v-model="passwordText" />
                                        <span class="display-eye fa fa-eye" @click="showPassword"></span>
                                    </label>
                                </div>
                            </div>
                            <div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- register apge form -->
</template>

<style scoped>
input {
    margin-right: -30px;
    padding-right: 35px;
}
.strong-label {
    margin-right: 10px;
    font-weight: 900;
}
.display-eye {
    cursor:pointer;
}
</style>
<script>
export default {
    name: "test",
    props: {
            passwordText: {
                default: "",
                type: String
            },
            fieldLabel: {
                default: "",
                type: String
            }
        },
        data () {
            return {
                passwordHidden: {
                    default: false,
                    type: Boolean
                }
            }
        },
        methods: {
            hidePassword() {
                this.passwordHidden = true;
            },
            showPassword() {
                this.passwordHidden = false;
            }
        }
}
</script>
