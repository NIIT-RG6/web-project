<template>
    <div>
        <!-- Voylio: Vuetify application component -->
        <v-app class="warm-gradient">
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="8" sm="6" md="4">
                        <!-- Voylio: Login card -->
                        <v-card elevation="0">
                            <v-card-title class="text-center">
                                <h2 style="width: 100%;">Login</h2> <!-- Voylio: Login title -->
                            </v-card-title>
                            <v-card-text>
                                <!-- Voylio: Login form -->
                                <v-form ref="loginForm" v-model="valid" lazy-validation>
                                    <!-- Voylio: Username or email input field -->
                                    <v-text-field label="Username or Email" required :rules="usernameRules"
                                        v-model="credentials.username" outlined></v-text-field>
                                    <!-- Voylio: Password input field -->
                                    <v-text-field label="Password" type="password" required :rules="passwordRules"
                                        v-model="credentials.password" outlined></v-text-field>
 <!-- Voylio: Snackbar for displaying login error messages -->
 <v-alert v-if="loginMessage" type="error" dense>
    {{ loginMessage }}
</v-alert>
                                    <div>
                                        <div class="d-flex justify-space-between align-center">
                                            <!-- Voylio: Remember Me checkbox -->
                                            <v-checkbox label="Remember Me" v-model="rememberMe"></v-checkbox>
                                            <div>
                                                <!-- Voylio: Forgot Password link -->
                                                <a href="http://localhost:8080/forgot">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <!-- Voylio: Login button -->
                                        <v-btn color="primary" :disabled="!valid" @click="submitLogin"
                                            style=" width: 100%;">Login</v-btn>

                                        <div style="display: flex;flex-wrap: wrap;">
                                            <!-- Voylio: Register link for users without an account -->
                                            <div>
                                                Don't have an account?
                                                <a href="http://localhost:8080/register">Register Now</a>
                                            </div>

                                            <span>
                                                <!-- Voylio: Message stating login means agreeing to the user agreement and privacy policy -->
                                                Logging in means you agree to the <a
                                                    href="http://localhost:8080/Contract"> OASIS User Agreement </a>
                                                and the
                                                <a href="http://localhost:8080/Privacy"> Privacy Policy </a>
                                            </span>
                                        </div>
                                        
                                    </div>
                                </v-form>
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

/* Commented by Voylio */
/* Sets a warm gradient background using linear gradient at a 45-degree angle from #FFB74D to #FF8A65 */
.warm-gradient {
    background: linear-gradient(45deg, #FFB74D, #FF8A65);
}

/* Commented by Voylio */
/* Applies a transition effect for background color with a duration of 0.5 seconds for the application wrapper */
.v-application--wrap {
    transition: background-color 0.5s;
}

/* Commented by Voylio */
/* Button effect on hover, moves upward by 3px and applies a shadow for a floating appearance */
.v-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
</style>
<script>
import vue from '../assets/js/vue.js'
import Vuetify from '../assets/js/vuetify.js'
export default {
    vuetify: new Vuetify({ // Voylio: Initializing Vuetify for UI components.
        icons: {
            iconfont: 'mdi', // Voylio: Setting the default icon set to Material Design Icons (mdi).
        },
    }), // Voylio: Initialize Vuetify to use Material Design component library
    name: "LoginPage",
    data() {
        return {
            showToast: false, // Voylio: Control whether to show the toast message
            errorMessage: 'Incorrect username or password', // Voylio: Error message displayed on login failure
            showRegister: false, // Voylio: Control the visibility of the registration page
            credentials: { // Voylio: User login credentials
                username: '', // Voylio: Store the username
                password: '' // Voylio: Store the password
            },
            loginMessage: '',
            rememberMe: false, // Voylio: Option to remember the password
            valid: false, // Voylio: Form validation status
            usernameRules: [ // Voylio: Username validation rules
                v => !!v || 'Username cannot be empty', // Voylio: Username cannot be empty
            ],
            passwordRules: [ // Voylio: Password validation rules
                v => !!v || 'Password cannot be empty', // Voylio: Password cannot be empty
                v => /^[a-zA-Z0-9_-]{6,16}$/.test(v) || 'Password format is incorrect' // Voylio: Password must be 6 to 16 characters long and contain letters, numbers, underscores, or hyphens
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
        submitLogin() {
            // 获取输入的用户名和密码
            const username = this.credentials.username;
            const password = this.credentials.password;


            // 从 localStorage 中获取已注册的用户信息
            const registeredUsers = JSON.parse(localStorage.getItem('userDetails'));

            // 检查用户名和密码是否匹配
            if (registeredUsers && registeredUsers.username === username && registeredUsers.password === password) {
                this.loginMessage = 'Login successful!'; // 登录成功提示信息
                // 跳转到主界面
                this.$router.push('/');
            } else {
                this.loginMessage = 'Invalid username or password. Please try again.'; // 登录失败提示信息
            }
        }
    }
}
</script>