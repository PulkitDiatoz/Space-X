<template>
  <div class="centered" >
      <header>
        <img src="./assets/logoo.png" height="50px" />
      </header>

      <router-view></router-view>      
    </div>
</template>

<script>
export default({   
    mounted(){
        this.$store.dispatch('fetchedData')  
    }

})
</script>
<style>
body {
  font-family: "Roboto", sans-serif;
  background-color: black;
}

.centered {
  background-color: black;
}

header {
  text-align: center;
  background-color: black;
}

.lauch-card {
  margin-bottom: 10px;
  padding: 10px;
  height: 90px;
  background-color: rgb(60, 56, 56);
  color: rgb(121, 124, 128);
  border-radius: 6px;
}

.launch {
  margin-left: 113px;
  color: rgb(208, 216, 223);
  margin-bottom: 4px;
}
p {
  margin: 5px;
  font-size: 12px;
}

.op {
  margin: 1px;
}

.ip {
  font-size: 9px;
}

h {
  font-family: "Roboto", sans-serif;
}


.success{
    color:green
    
}

.fail{
    color:red
}

.box{
  
    float: left;
    height: 12px;
    width: 20px;
    border: 1px solid black;
    clear: both;
}

/* .launch-details{
  margin-bottom: 1px;
  padding: 10px;
  height: 90px;
  background-color: rgb(60, 56, 56);
  color: rgb(121, 124, 128);
  border-radius: 6px;
} */

.launch-info{
  margin-right: 112px;
  margin-left: 112px;
  padding: 10px;
  max-height: 200px;
  background-color: rgb(60, 56, 56);
  color: rgb(121, 124, 128);
  border-radius: 6px;
}

.detail{
  margin-left: 112px;
  margin-right: 112px;
  margin-bottom: 10px;
  padding: 10px;
  height: 90px;
  background-color: rgb(60, 56, 56);
  color: rgb(121, 124, 128);
  border-radius: 6px;
}

</style>