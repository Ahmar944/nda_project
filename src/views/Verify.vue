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
          <h3 class="hello pt-lg-5 pt-md-5 pt-sm-3">Verify Email!</h3>
          <p class="signp">Please Enter the code sent to your email <br> xxx@gmail.com</p>
          <darkMode />
        </div>
        <!--      Input Fields-->
        <div class="w-100 text-center">
          <div class="signup-form farm pt-lg-2 pt-md-2 pt-sm-3" >
            <form action="" method="post">

              <div class="form-group">
                <div class="input-group">
                  <input type="email" class="form-control border-1 text-center verify-input" name="email" placeholder="1" required="required"  autocomplete="off">
                  <input type="email" class="form-control border-1 mx-5 text-center" name="email" placeholder="1" required="required"  autocomplete="off" >
                  <input type="email" class="form-control border-1 mr-5 text-center" name="email" placeholder="1" required="required"  autocomplete="off">
                  <input type="email" class="form-control border-1 ms-5 text-center" name="email" placeholder="1" required="required"  autocomplete="off">
                </div>
              </div>

              <div>
                <a type="submit" @click="next" class="btn butn-link w-100 text-decoration-none text-black" role="button">Next</a>
                <p class="link text-center"><a class="text-decoration-none text-black" >Resend Code</a></p>

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


import router from '@/router'
export default{
    name: "verify",
    components: {
        darkMode,
      leftSide,
    },
    methods: {
      next(){
        this.$router.push('/setpassword')
      }

    }
}
</script>