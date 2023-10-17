<template>
  <section>
    <h1>REGISTER USER</h1>
    <div class="container">
    <h2>Sign Up</h2>
    <form @submit.prevent>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" v-model="userName" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit" @click="signUp">Sign Up</button>
        <router-link to="/signin">Already a User</router-link>
      </div>
    </form>
  </div>
</section>
</template>

<script>
export default {
  data(){
    return {
      userName : '',
      password : '',
      email : ''
    }
  },
  methods : {
    signUp(){
      this.$emit('sign-up', {username : this.userName, password : this.password, email : this.email})
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
    min-height: 100vh;
  }
  
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  .container h2, h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .form-group button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #161718;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .form-group button:hover {
    background-color: #5a5c5f;
  }

  h1 {
    color: #f4f4f4;
  }
</style>