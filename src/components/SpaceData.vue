<template>
    <div class="container" id="assignment" >
      
        <div
          class="lauch-card d-flex justify-content-between align-items-center"
        >
          <div>
            <h2>Mission: <span  :class="launchSuccess ? 'success' : 'fail'">{{missionName}}</span></h2>
            <p class="op">Date: {{dateFormat(launchDate)}}</p>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-secondary" @click="launchDetails(flightNumber)">Launch Details</button>
          </div>
        </div>        
      </div>
</template>


<script>
import moment from 'moment';

export default{
 
    props : ['launchSuccess', 'missionName', 'launchDate', 'flightNumber'],
    methods: {
      dateFormat(date){
            const dateObject = date;
            const dateObj = moment.utc(dateObject);
            const simpleDateFormat = dateObj.format("MMM Do YYYY, h:mm a")
            return simpleDateFormat
        },
        launchDetails(){
          this.$emit('launch-details', this.flightNumber)
        }
    }
}
</script>
