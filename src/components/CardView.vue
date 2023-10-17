<template>
    <section>
        <div class="launch">
        <h1>Launches</h1>
        <div class="ip"><div class='box' style="background-color:green; "></div>- Success</div>
        <div class="ip"><div class='box' style="background-color:red;"></div>- Fail</div>
      </div>
    <card-detail
      @go-back="goBack"
      >
      </card-detail>
    </section>
</template>

<script>
export default {
    methods : {
        goBack() {
            this.$router.push('/launches')
        },
    }
}
</script>