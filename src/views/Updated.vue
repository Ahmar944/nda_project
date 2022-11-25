<template>
<div class="row m-0 ">
    <leftSide/>

    <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-sm-block sign">
        <!--    globalNda for mobile screen-->
        <div class="container-fluid container-md container-sm px-sm-3">
            <div class="">
                <div class="logo d-xl-none d-lg-none d-md-none d-sm-block visible ">
                    <h5 class="global1">Global NDA</h5>
                </div>
                <!--      SignUp Text-->
                <div class="signin text-center pt-lg-5 pt-md-5 pt-sm-3">
                    <h3 class="hello pb-3 pt-lg-5 pt-md-5 pt-sm-3">Password Updated</h3>
                    <img src="../../public/assets/media/update.png" class="mt-lg-4 mt-md-3 mt-sm-2" alt="Password Update icon">
                    <p class="signp mt-lg-4 mt-3">Your Password has been updated!</p>
                            
                    <div class="btn butn-link text-decoration-none text-black">
                        <router-link class="links" to="/login">Login</router-link>
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


export default{
    name: "update",
    components: {
    leftSide,
},
}

</script>
