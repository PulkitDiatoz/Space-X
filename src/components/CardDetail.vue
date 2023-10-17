<template>
    <section>
        <div>
        <div class="detail d-flex justify-content-between align-items-center"
        >
          <div>
            <h2>Mission: <span  :class="details.launch_success ? 'success' : 'fail'">{{details.mission_name}}</span></h2>
            <p class="op">Date: {{dateFormat(details.launch_date_utc)}}</p>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-secondary" @click="goBack">Go Back</button>
          </div>
        </div>
      <div class="launch-info">
        <h2><strong>Rocket Details</strong></h2>
        <h4>Rocket ID : {{ details.rocket.rocket_id }}</h4>
        <h4>Rocket Name :  {{ details.rocket.rocket_name }}</h4>
        <h4>Rocket Type :  {{ details.rocket.rocket_type }}</h4>
      </div> 
    </div>
    </section>
</template>

<script>
import moment from 'moment'
export default{
    methods: {
        dateFormat(date){
            const dateObject = date;
            const dateObj = moment.utc(dateObject);
            const simpleDateFormat = dateObj.format("MMM Do YYYY, h:mm a")
            return simpleDateFormat
        },
        goBack(){
            this.$emit('go-back')
        }
    },
    computed : {
      details(){
        return this.$store.getters['details']
      }
    }
}
</script>