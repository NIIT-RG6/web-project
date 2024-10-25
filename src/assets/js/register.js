
new Vue({
    el: '#app', // Voylio: The root element of the Vue instance is identified by the selector '#app'.
    vuetify: new Vuetify({ // Voylio: Initializing Vuetify for UI components.
        icons: {
            iconfont: 'mdi', // Voylio: Setting the default icon set to Material Design Icons (mdi).
        },
    }),
    data() {
        return {
            userDetails: {
                username: '',
                password: '',
                email: '',
                confirmPassword: '',
            },
            registrationMessage: '',
            agreedToTerms: false,
            valid: false,
            registeredUsers: [], 
            usernameRules: [
                v => !!v || 'Username cannot be empty',
            ],
            passwordRules: [
                v => !!v || 'Password cannot be empty',
            ],
            confirmPasswordRules: [
                v => !!v || 'Password cannot be empty',
                v => v === this.userDetails.password || 'Passwords do not match'
            ],
            emailRules: [ // Validation rules for the email field.
                v => !!v || 'Email cannot be empty', // Email is required.
                v => /.+@.+\..+/.test(v) || 'Invalid email format' // Email format validation.
            ],
        }
    },
    methods: {
        submitRegistration() {
            if (!this.agreedToTerms) {
                this.registrationMessage = 'Please fill out the form correctly and agree to the user agreement first!';
                return;
            }

            if (this.$refs.registerForm.validate() && this.agreedToTerms) {
                // Save user information to localStorage
                localStorage.setItem('userDetails', JSON.stringify({
                    username: this.userDetails.username,
                    password: this.userDetails.password
                }));

                // Add user information to registeredUsers array
                this.registeredUsers.push({
                    username: this.userDetails.username,
                    password: this.userDetails.password
                });

                // Redirect to login page
                // this.userDetails = { username: '', password: '', confirmPassword: '' };
                console.log("准备跳转到登录页面");
                this.$router.push('/login');
            } else {
                this.registrationMessage = 'Please fill out the form correctly and agree to the user agreement first!';
            }
        }
    }
});
