<template>
    <section>
      <h1>LOGIN USER</h1>
        <form id="form-con" @submit.prevent>
            <div class="container">
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" v-model="username" required>
                <label for="password"><b>Password</b></label>
                <input type="password"  placeholder="Enter Password" name="password" v-model="password" required>
                <button type="submit" @click="login">Login</button>
                <router-link to="/signup">Register</router-link>
            </div>
        </form>
    </section>
</template>


<script>
export default {
  data(){
    return {
      username : '',
      password : ''
    }
  },
  methods : {
    login(){
      this.$emit('log-in', {username : this.username, password:this.password})
    }
  }
}
</script>


<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150vh;
  }
  
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 600px;
  }
  
  .container label {
    font-weight: bold;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: white;
  }
  .container input {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .container button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #161718;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .container button:hover {
    background-color: #5a5c5f;
  }
</style>