new Vue({
  el: '#app', // Voylio: Bind the Vue instance to the HTML element with id 'app'
  vuetify: new Vuetify(), // Voylio: Initialize Vuetify to use Material Design component library
  
  data() {
    return {
      showToast: false,
      errorMessage: 'Incorrect username or password',
      showRegister: false,
      credentials: {
        username: '',
        password: '',
      },
      loginMessage: '',
      rememberMe: false,
      valid: false,
      usernameRules: [
        v => !!v || 'Username cannot be empty',
      ],
      passwordRules: [
        v => !!v || 'Password cannot be empty',
        v => /^[a-zA-Z0-9_-]{6,16}$/.test(v) || 'Password format is incorrect'
      ],
    };
  },
  methods: {
    goToHome(){
      this.$router.push('/');
      console.log("准备跳转到首页",this.$router);
    },
    
    submitLogin() {
      const username = this.credentials.username;
      const password = this.credentials.password;
      const registeredUsers = JSON.parse(localStorage.getItem('userDetails'));

      if (registeredUsers && registeredUsers.username === username && registeredUsers.password === password) {
        // 跳转到主界面
        this.$router.push('/');
      } else {
        this.loginMessage = 'Invalid username or password. Please try again.';
      }
    }

  }
});
