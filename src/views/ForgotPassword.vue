<template>
    <div>
        <v-app>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="8" sm="6" md="4">
                        <v-card elevation="0">
                            <v-card-title class="text-center">
                                <!-- Voylio: Title for the forgot password section -->
                                <h2 style="width: 100%;">Forgot Password</h2>
                            </v-card-title>
                            <v-card-text>
                                <!-- Voylio: Form for user to submit their email and new password -->
                                <v-form ref="registerForm" v-model="valid" lazy-validation>
                                    <v-text-field label="Email" required type="email" :rules="emailRules"
                                        v-model="userDetails.email" outlined></v-text-field>
                                   
                                    <v-text-field label="New Password" type="password" required :rules="passwordRules"
                                        v-model="userDetails.password" outlined></v-text-field>
                                    <v-text-field label="Confirm New Password" type="password" required
                                        :rules="confirmPasswordRules" v-model="userDetails.confirmPassword"
                                        outlined></v-text-field>
                                        <div class="code">
                                        <v-text-field label="Verification Code" required :rules="code"
                                            v-model="userDetails.code" outlined></v-text-field>
                                        <!-- Voylio: Button to send the verification code -->
                                       <button type="button" class="code-btn" @click="sendVerification">Send Verification Code</button>

                                    </div>
                                    <v-alert v-if="verificationMessage" type="success">{{ verificationMessage }}</v-alert>
                                </v-form>
                            </v-card-text>
                            <v-card-text>
                                <!-- Voylio: Button to confirm the password reset process -->
                                <v-btn color="primary" :disabled="!valid" @click="submitRegistration"
                                    style="width: 100%;">Confirm</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </v-app>
    </div>
</template>
<style>
@import '../assets/css/materialdesignicons.min.css';
@import '../assets/css/vuetify.min.css';
.d-flex {
    display: flex;
}

.align-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.code {
    position: relative;
}

.code-btn {
    position: absolute;
    right: 5%;
    top: 20%;
    color: #1976D2;
    padding-left: 10px;
    border-left: 2px solid rgb(189, 187, 187);
}
</style>
<script>
import vue from '../assets/js/vue.js'
import Vuetify from '../assets/js/vuetify.js'
export default {
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi', // Voylio: Set the default icon font to Material Design Icons (mdi)
        },
    }), // Voylio: Initialize Vuetify to use Material Design component library
    name: "Forget",
    data() {
        return {
            userDetails: { // Voylio: Store user details input including username, email, password, confirmation password, and verification code
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                code: '',
                verificationMessage:''
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
    created() {
    },
    methods: {
        someMethod() {
            vue();
            vuetify();
        },
        sendVerification() {
            // Voylio: Send verification code to user's email
            this.verificationMessage = 'Verification code sent to your email!';
        },// Voylio: Define method to send verification code to user's email
        submitRegistration(event) { // Voylio: Define method to handle registration form submission
            event.preventDefault();
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
}
</script>