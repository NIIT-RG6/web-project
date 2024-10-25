<template>
    <div style="height: 100vh; overflow: hidden;">
        <v-app>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="8" sm="6" md="4">
                        <v-card elevation="0">
                            <v-card-title class="text-center">
                                <h2 style="width: 100%;">Register</h2>
                            </v-card-title>
                            <v-card-text>
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
                                            <v-checkbox v-model="agreedToTerms"></v-checkbox>
                                            <span>Read and Agree </span>
                                            <a href="http://localhost:8080/Contract">
                                                OASIS User Agreement </a>
                                            and <a href="http://localhost:8080/Privacy">
                                                Privacy Policy </a>
                                        </div>
                                        <div class="text-center">
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
import { ref } from 'vue';
import { createVuetify } from 'vuetify'; // 使用 vuetify 的新方式

const vuetify = createVuetify(); // 配置 vuetify

export default {
    vuetify,
    name: "RegisterPage",
    setup() {
        const userDetails = ref({
            username: '',
            password: '',
            email: '',
            confirmPassword: '',
        });
        const registrationMessage = ref('');
        const agreedToTerms = ref(false);
        const valid = ref(false);
        const registeredUsers = ref([]); 

        const usernameRules = [
            v => !!v || 'Username cannot be empty',
        ];
        const passwordRules = [
            v => !!v || 'Password cannot be empty',
        ];
        const confirmPasswordRules = [
            v => !!v || 'Password cannot be empty',
            v => v === userDetails.value.password || 'Passwords do not match'
        ];
        const emailRules = [
            v => !!v || 'Email cannot be empty',
            v => /.+@.+\..+/.test(v) || 'Invalid email format'
        ];

        const submitRegistration = () => {
            if (!agreedToTerms.value) {
                registrationMessage.value = 'Please fill out the form correctly and agree to the user agreement first!';
                return;
            }

            if (valid.value && agreedToTerms.value) {
                localStorage.setItem('userDetails', JSON.stringify({
                    username: userDetails.value.username,
                    password: userDetails.value.password
                }));

                registeredUsers.value.push({
                    username: userDetails.value.username,
                    password: userDetails.value.password
                });

                registrationMessage.value = 'Registration successful!';
                userDetails.value = { username: '', password: '', confirmPassword: '' };
                // Assuming router is provided via context
                // this.$router.push('/login'); // 需要根据实际情况处理
            } else {
                registrationMessage.value = 'Please fill out the form correctly and agree to the user agreement first!';
            }
        };

        return {
            userDetails,
            registrationMessage,
            agreedToTerms,
            valid,
            registeredUsers,
            usernameRules,
            passwordRules,
            confirmPasswordRules,
            emailRules,
            submitRegistration,
        };
    }
}
</script>
