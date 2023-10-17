<template>
    <section>
      <div class="launch">
        <h1>Launches</h1>
        <div class="ip"><div class='box' style="background-color:green; "></div>- Success</div>
        <div class="ip"><div class='box' style="background-color:red;"></div>- Fail</div>
      </div>
      <space-data v-for="i in jsonData" :key="i.flight_number" 
      :launch-success="i.launch_success"
      :mission-name="i.mission_name"
      :launch-date="i.launch_date_utc"
      :flight-number="i.flight_number"
      @launch-details="LaunchDetails"
      ></space-data> 
    </section>
</template>

<script>
import SpaceData from './SpaceData.vue'

export default{
    components : {
        SpaceData
    },
    methods: {
        LaunchDetails(idx){
            this.$store.dispatch('getDetail', idx)
            this.$router.push('/details')
        },

    },
    computed : {
      jsonData(){
        return this.$store.getters['jsonDatas']
      }
}}
</script>