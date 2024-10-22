<template>
    <div style="height: 100vh; overflow: hidden;">
        <v-app>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="8" sm="6" md="4">
                        <v-card elevation="0">
                            <v-card-title class="text-center">
                                <!-- Title of the registration page -->
                                <h2 style="width: 100%;">Register</h2>
                            </v-card-title>
                            <v-card-text>
                                <!-- Registration form -->
                                <v-form ref="registerForm" v-model="valid" lazy-validation>
                                    <v-text-field prop="username" label="Username" required :rules="usernameRules"
                                        v-model="userDetails.username" outlined></v-text-field>
                                    <v-text-field label="Email" required type="email" :rules="emailRules"
                                        v-model="userDetails.email" outlined></v-text-field>
                                    <v-text-field prop="password" label="Password" type="password" required
                                        :rules="passwordRules" v-model="userDetails.password" outlined></v-text-field>
                                    <v-text-field label="Confirm Password" type="password" required
                                        :rules="confirmPasswordRules" v-model="userDetails.confirmPassword"
                                        outlined></v-text-field>
                                    <div class="d-flex align-center" style="flex-wrap: wrap;">
                                        <div style="display: flex; align-items: center;">
                                            <!-- Checkbox for agreeing to terms and related links -->
                                            <v-checkbox v-model="agreedToTerms"></v-checkbox>
                                            <span>Read and Agree </span>
                                            <a href="http://localhost:8080/Contract">
                                                OASIS User Agreement </a>
                                            and <a href="http://localhost:8080/Privacy">
                                                Privacy Policy </a>
                                        </div>
                                        <div class="text-center">
                                            <!-- Prompt for users who already have an account to log in -->
                                            Already have an account?
                                            <a href="http://localhost:8080/login">
                                                Login Now
                                            </a>
                                        </div>
                                    </div>
                                    <v-alert v-if="registrationMessage" type="error" dense>
                                        {{ registrationMessage }}
                                    </v-alert>
                                </v-form>
                            </v-card-text>
                            <v-card-text>
                                <!-- Register button, disabled until the form is valid -->
                                <v-btn color="primary" :disabled="!valid" @click="submitRegistration"
                                    style="width: 100%;">Register</v-btn>
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

v-app {
    height: 100vh;
}
</style>
<script>
import vue from '../assets/js/vue.js'
import Vuetify from '../assets/js/vuetify.js'
export default {
    vuetify: new Vuetify(),
    name: "RegisterPage",
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
            registrationMessage: '',
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

                this.registrationMessage = 'Registration successful!'; // Hint message
                // Redirect to login page
                this.userDetails = { username: '', password: '', confirmPassword: '' };
                this.$router.push('/login');
            } else {
                this.registrationMessage = 'Please fill out the form correctly and agree to the user agreement first!';
            }
        }
    }
}
</script>
