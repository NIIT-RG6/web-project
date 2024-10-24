<template>
    <div>
        <v-app>
            <v-container fluid>
                <v-card elevation="0">
                    <v-row justify="center">
                        <v-col cols="12" md="8" sm="10">
                            <v-card-title class="text-center">
                                <h1 style="width: 100%;">OASIS User Agreement</h1>
                            </v-card-title>
                            <v-card-text>
                                <h2>1. Introduction</h2>
                                <p>
                                    Welcome to OASIS. This User Agreement outlines the terms and conditions for using
                                    our
                                    services. By accessing or using our services, you agree to be bound by this
                                    Agreement.
                                </p>

                                <h2>2. Eligibility</h2>
                                <p>
                                    You must be at least 18 years of age to use our services. By using our services, you
                                    represent and warrant that you meet this requirement.
                                </p>

                                <h2>3. Use of Services</h2>
                                <p>
                                    You agree to use our services only for lawful purposes and in accordance with our
                                    policies.
                                    You are responsible for your use of our services and for any content you post.
                                </p>

                                <h2>4. Account Security</h2>
                                <p>
                                    You are responsible for maintaining the confidentiality of your account information
                                    and for
                                    all activities that occur under your account. If you suspect any unauthorized use of
                                    your
                                    account, please notify us immediately.
                                </p>

                                <h2>5. Limitation of Liability</h2>
                                <p>
                                    OASIS shall not be liable for any indirect, incidental, special, consequential or
                                    punitive
                                    damages arising out of your use of our services.
                                </p>

                                <h2>6. Changes to this Agreement</h2>
                                <p>
                                    We may update this User Agreement from time to time. Any changes will be posted on
                                    this page
                                    and will be effective immediately upon posting.
                                </p>

                                <h2>7. Governing Law</h2>
                                <p>
                                    This Agreement shall be governed by and construed in accordance with the laws of the
                                    jurisdiction in which OASIS operates.
                                </p>
                            </v-card-text>

                        </v-col>
                    </v-row>
                </v-card>
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
    name: "ContactPage",
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