<template>
    <div class="col-md-6 col-lg-6 col-xl-6 d-md-block d-xl-block d-md-block d-sm-none d-none background m-0 p-0">
        <div class=" container background1">
            <div class="background2">
                <div class=" jumbotron text-white" style="padding-top: 25% ; padding-left: 20%; padding-right: 5%; background: none;">
                    <img src="../../public/assets/media/globalNDA.png" class="NDA" alt="Global NDA">
                    <p class="lead"> {{ msg }}</p>
                    <router-link to="/login" class="memb">{{ member }}</router-link><br/>
                    <router-link to="/" class="memb">{{ member1 }}</router-link><br/>

                    <a class="btn btn-light btn-sm border-0 read-btn" href="#" role="button">{{ btn }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "leftSide",
    props: {
        msg: String,
        member: String,
        member1: String,
        btn: String,
    }
}
</script>