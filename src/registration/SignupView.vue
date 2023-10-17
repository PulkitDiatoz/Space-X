<template>
    <section>
        <sign-up @sign-up="signUp"></sign-up>
    </section>
</template>

<script>
import SignUp from './SignUp.vue';
export default {
    components : {
        SignUp
    },
    methods : {
        signUp(content){
            const that = this
            this.$store.dispatch('signupUser', content)
            setTimeout(function(){
                that.$router.push('/signin')
            },1000)
        }
    }
}
</script>