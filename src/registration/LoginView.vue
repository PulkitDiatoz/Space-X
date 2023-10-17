<template>
    <section>
        <sign-in @log-in="logIn"></sign-in>
    </section>
</template>

<script>
import SignIn from './SignIn.vue';
export default{
    components : {
        SignIn
    },
    methods : {
        logIn(content){
            const that = this
            this.$store.dispatch('loginUser', content)
            setTimeout(function(){
                that.$router.replace('/launches')
            },1000)
        }
    }
}
</script>