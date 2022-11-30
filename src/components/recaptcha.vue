<template>
<div>
  <!-- conditions -->
    <!-- <div v-if="verified" id="verified">
        <small>Successfully Verified!</small>
        <p>token: {{ token }}</p>
      <p>eKey: {{ eKey }}</p>
    </div>

    <div v-if="expired" id="expired">
        <small>Challenge expired!</small>
    </div>

    <div v-if="error" id="error">
        <p>Error:</p>
        <p>{{ error }}</p>
    </div> -->

    <div class="row no-gutters pt-3">
        <div class="col "></div>
        <div class="col ">
            <vue-recaptcha sitekey="6LfmLj0jAAAAANk7O5d7x-HH3YyMYXlDGya2aimQ" class="g-recaptcha" @verify="onVerify" @expired="onExpire" @challengeExpired="onChallengeExpire" @error="onError" @scaleCaptcha="scaleCaptcha"></vue-recaptcha>
        </div>
        <div class="col"></div>
    </div>

</div>
</template>

<script>
import {
    VueRecaptcha
} from 'vue-recaptcha';
export default {
    name: 'recaptcha',
    components: {
        VueRecaptcha
    // },

    // data() {
    //     return {
    //         verified: false,
    //         expired: false,
    //         token: null,
    //         eKey: null,
    //         error: null,
    //     }
    // },
    // methods: {
    //     onVerify(token, ekey) {
    //         this.verified = true;
    //         this.token = token;
    //         this.eKey = ekey;
    //         console.log(`Callback token: ${token}, ekey: ${ekey}`);
    //     },
    //     onExpire() {
    //         this.verified = false;
    //         this.token = null;
    //         this.eKey = null;
    //         this.expired = true;
    //         console.log('Expired');
    //     },
    //     onChallengeExpire() {
    //         this.verified = false;
    //         this.token = null;
    //         this.eKey = null;
    //         this.expired = true;
    //         console.log(`Challenge expired`);
    //     },
    //     onError(err) {
    //         this.token = null;
    //         this.eKey = null;
    //         this.error = err;
    //         console.log(`Error: ${err}`);
    //     },
    //     onSubmit() {
    //         console.log('Submitting the invisible hCaptcha', this.$refs.invisibleHcaptcha);
    //         this.$refs.invisibleHcaptcha.execute();
    //     }
    }
};
</script>

<style scoped>
/* @media screen and (min-width: 1186px) {
    .g-recaptcha{
      margin-left: 20%;
    }
  }

    @media screen and (min-width: 779px) {
    .g-recaptcha{
      margin-left: 0%;
    }

  }
  @media screen and (min-width: 1217px) {
    .g-recaptcha{
      margin-left: 27%;
    }

  }
   */
/* #verified {
    margin-top: 0px !important;
    color: black;
}

#error {
    color: white;
    background: red;
} */
</style>
