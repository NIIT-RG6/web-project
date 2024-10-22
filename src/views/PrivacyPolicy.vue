<template>
    <div>
        <v-app>
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12" sm="10" md="8">
                        <v-card elevation="0">
                            <v-card-title class="text-center">
                                <h1 style="width: 100%;">OASIS Privacy Policy</h1>
                            </v-card-title>
                            <v-card-text>
                                <h2>1. Introduction</h2>
                                <p>Welcome to OASIS. Your privacy is important to us. This Privacy Policy outlines how
                                    we
                                    collect, use, and protect your information.</p>

                                <h2>2. Information We Collect</h2>
                                <p>We may collect the following types of information:</p>
                                <ul>
                                    <li>Personal Information: Such as your name, email address, and phone number.</li>
                                    <li>Usage Data: Information about how you use our website and services.</li>
                                    <li>Cookies: We use cookies to enhance your experience on our site.</li>
                                </ul>

                                <h2>3. How We Use Your Information</h2>
                                <p>We use the information we collect for various purposes, including:</p>
                                <ul>
                                    <li>To provide and maintain our service.</li>
                                    <li>To notify you about changes to our service.</li>
                                    <li>To allow you to participate in interactive features of our service.</li>
                                    <li>To provide customer support.</li>
                                    <li>To gather analysis or valuable information so that we can improve our service.
                                    </li>
                                </ul>

                                <h2>4. Data Security</h2>
                                <p>We value your trust in providing us your personal information. We strive to use
                                    commercially
                                    acceptable means of protecting it.</p>

                                <h2>Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access the personal information we hold about you.</li>
                                    <li>Request correction of any inaccurate personal information.</li>
                                    <li>Request deletion of your personal information.</li>
                                </ul>

                                <h2>5. Changes to This Privacy Policy</h2>
                                <p>We may update our Privacy Policy from time to time. We will notify you of any changes
                                    by
                                    posting the new Privacy Policy on this page.</p>

                                <h2>6. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                                <ul>
                                    <li>Email: support@oasis.com</li>
                                </ul>
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

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #000;
    /* 主标题颜色 */
}

h2 {
    font-size: 1.8em;
    margin: 20px 20px 20px 0;
    color: #111;
    /* 副标题颜色 */
}

p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #222;

}

ul {
    margin: 10px 0 20px 20px;
    list-style-type: disc;

}

li {
    margin-bottom: 10px;
    color: #222;

}

v-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-center {
    text-align: center;
}
</style>
<script>
import vue from '../assets/js/vue.js'
import Vuetify from '../assets/js/vuetify.js'
export default {
    vuetify: new Vuetify(), // Voylio: Initialize Vuetify to use Material Design component library
    name: "PrivacyPolicy",
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        someMethod() {
            vue();
            vuetify();
        }
    }
}
</script>