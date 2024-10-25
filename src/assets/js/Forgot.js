new Vue({
    el: '#app', // Voylio: Bind Vue instance to the element with the ID 'app'
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi', // Voylio: Set the default icon font to Material Design Icons (mdi)
        },
    }),
    data() {
        return {
            userDetails: { // Voylio: Store user details input including username, email, password, confirmation password, and verification code
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                code: ''
            },
            agreedToTerms: false, // Voylio: Track whether the user has agreed to the terms and conditions
            valid: false, // Voylio: Track the overall validation state of the form
            usernameRules: [ // Voylio: Define validation rules for username
                v => !!v || 'Username cannot be empty', // Voylio: Username must not be empty
                // Voylio: Additional rules can be added here, such as length restrictions or special character requirements
            ],
            emailRules: [ // Voylio: Define validation rules for email
                v => !!v || 'Email cannot be empty', // Voylio: Email must not be empty
                v => /.+@.+\..+/.test(v) || 'Invalid email format' // Voylio: Check for valid email format
            ],
            passwordRules: [ // Voylio: Define validation rules for password
                v => !!v || 'Password cannot be empty', // Voylio: Password must not be empty
                // Voylio: Additional rules can be added here, such as length restrictions or special character requirements
            ],
            confirmPasswordRules: [ // Voylio: Define validation rules for password confirmation
                v => !!v || 'Password cannot be empty', // Voylio: Confirmation password must not be empty
                (v, self) => v === this.userDetails.password || 'Passwords do not match' // Voylio: Check if the confirmation password matches the original password
            ],
            code: [ // Voylio: Define validation rule for verification code
                v => !!v || 'Verification code cannot be empty', // Voylio: Verification code must not be empty
            ]
        }
    },
    methods: {
        submitRegistration() { // Voylio: Define method to handle registration form submission
            if (this.$refs.registerForm.validate()) { // Voylio: Validate the registration form
                // Voylio: Send registration request to backend API, using user details as request data
                axios.post('/user/register', this.userDetails) // Voylio: Make an HTTP POST request to register the user
                    .then(response => {
                        // Voylio: Handle successful registration logic, such as showing a success message or redirecting to the login page
                    })
                    .catch(error => {
                        // Voylio: Handle registration failure logic, such as showing an error message or resetting the form
                    });
            }
        }
    }
})
