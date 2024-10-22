<template>
    <div>
        <v-app class="warm-gradient">
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12" sm="10" md="8">
                        <v-card elevation="0">
                            <v-card-title class="text-center">
                                <h2 style="width: 100%;color: #fff!important">OASIS Information Developer Team</h2>
                            </v-card-title>
                            <v-card-text>
                                <div class="teamMembersBox" v-for="member in teamMembers" :key="member.id" outline>
                                    <img :src="member.imgUrl" alt="loading...">
                                    <div class="teamMemberInfo">
                                        <h3>
                                            <div class="sumInfo">Name:</div>{{ member.name }}
                                        </h3>
                                        <h3>
                                            <div class="sumInfo">Role:</div>{{ member.role }}
                                        </h3>
                                        <h3>
                                            <div class="sumInfo">Introduction:</div>{{ member.introduction }}
                                        </h3>
                                    </div>
                                </div>
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

h3 {
    margin-bottom: 16px;
}

h3 p {
    color: #000;
}

.teamMembersBox {
    display: flex;
    background-color: aliceblue;
    padding: 10px;
}

.teamMembersBox img {
    height: 250px;
    width: 175px;
    margin: 0 2rem 2rem 0;
}

.teamMemberInfo {
    width: 100%;
}

.teamMemberInfo h3:nth-child(3) {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 175px;
}

.sumInfo {
    display: inline-block;
    color: #000;
    margin-right: 10px;
}

.v-card {
    background-color: rgb(9, 73, 137) !important;
}

/* Define scrollbar width, height and background
 The width and height correspond to the size of horizontal and vertical scrollbars */
.teamMembersBox ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, .2);
}

/* Define scrollbar track
 Inner shadow + rounded corners */
.teamMembersBox ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

/* Define scrollbar thumb
 Inner shadow + rounded corners */
.teamMembersBox ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #b3b3b3;
}
</style>
<script>
import vue from '../assets/js/vue.js'
import Vuetify from '../assets/js/vuetify.js'
export default {
    vuetify: new Vuetify(),
    name: "TeamPage",
    data() {
        return {
            teamMembers: [
        {
            id: 1,
            name: 'Charlie',
            role: 'Team Leader',
            introduction: "Charlie (CN: Yongze Zhang), male, Han nationality, born in May 2005, from Wenzhou, Zhejiang, 2023, Software Engineering (NIIT) RG 6 undergraduate student. Currently serving as the director of the Science and Technology Department of the Big Data and Knowledge Graph Application Association (BDKG), and a member of the Dongye team of Hainan University. Won the 'Voylio Best Father Award', the second prize in Hainan Province in the China University Computer Competition - Group Programming Ladder Competition, the third prize in Hainan Division of the Blue Bridge Cup Programming Competition C/C++ University Group A, and the first-class scholarship of Hainan University.",
            imgUrl: require('../../public/images/aboutUs/zyz.jpg')
        },
        {
            id: 2,
            name: 'Katia',
            role: 'Team Member',
            introduction: "Liu Xiaoyue, female, Han nationality, born in April 2005, from Luoyang, Henan Province, member of the Communist Youth League, 2023 undergraduate student in software engineering at the School of Computer Science and Technology of Hainan University, is currently the deputy director of the Theory Department of the Yiban Student Workstation of Hainan University and the secretary of the Secretary Department of the Student Union of Chengfeng Academy of Hainan University. She won the second prize of the 17th China College Student Computer Design Competition, the silver medal of the 14th Challenge Cup China College Student Entrepreneurship Plan Competition, and the one-star volunteer of Hainan University.",
            imgUrl: require('../../public/images/aboutUs/lxy.jpg')
        },
        {
            id: 3,
            name: 'Justice',
            role: 'Team Member',
            introduction: "Justice, male, Han nationality, born in November 2005, from Harbin, Heilongjiang, is a member of the Communist Youth League. He is currently studying for a Bachelor's degree in Software Engineering at the School of Computer Science and Technology, Hainan University in 2023. He serves as the Director of the Office of the Pu Cheng Academy Committee of the Communist Youth League at Hainan University, the Director of the Theoretical Department of the Yiban Student Workstation at Hainan University, a core member of the Harmony Circle Studio at Hainan University, and a member of the SADC research group. Won the title of Outstanding Communist Youth League Member and Outstanding Communist Youth League Cadre of the Year 2023, and won the Silver Award in the Hainan University Campus Selection Competition of the 14th Challenge Cup Chinese College Student Entrepreneurship Plan Competition.",
            imgUrl: require('../../public/images/aboutUs/yjh.jpg')
        },
        {
            id: 4,
            name: 'Merak ',
            role: 'Team Member',
            introduction: 'Merak (CN:LEI ZHANG), male, Han nationality, born in August 2005, from Poyang County, Jiangxi Province, a member of the Communist Youth League, Hainan University, College of Computer Science and Technology, 2023 software engineering undergraduate studying, is currently serving as the director of the Youth Growth Practice Department of the Communist Youth League Committee of the PuCheng College of Hainan University, and a member of the Hainan University East Coconut team,won the Silver Prize in the 7th China Youth Volunteer Service Competition in Hainan Province.',
            imgUrl: require('../../public/images/aboutUs/zl.jpg')
        },
        {
            id: 5,
            name: 'Voylio ',
            role: 'Team Member',
            introduction: "Voylio, male, Han ethnicity, born in November 2004, from Henan Province, is a member of the Communist Youth League. He is currently studying for his undergraduate degree in Software Engineering at the School of Computer Science and Technology, Hainan University in 2023. He serves as the head of the Integrated Media Center of the Pu Cheng Academy Committee of the Communist Youth League, the class leader of the 2023-6 Software Engineering Class at the School of Computer Science and Technology, a member of the Dongye Zhitu team at Hainan University, and a member of the CV research group. He has previously served as a member of the Propaganda and Practice Committee of the Youth League Branch Committee of Class 27, Building 19, Pucheng Academy, Hainan University, as well as a member of the Science. Won the second prize at the ministerial level of Hainan Province in the 2024 (17th) China Undergraduate Computer Design Competition, the silver medal at the ministerial level of Hainan Province in the 7th China Youth Volunteer Service Project Competition, outstanding Communist Youth League cadres, the third prize in Hainan University Huatu Cup Career Planning Competition, exemplary individual in military skills training for new students of Hainan University, the silver medal in the 14th Challenge Cup China Undergraduate Entrepreneurship Plan Competition, outstanding student union cadres of Hainan University, comprehensive scholarships of Hainan University, outstanding financial media workers of Hainan University, and outstanding student cadres of the School of Computer Science and Technology of Hainan University. Currently, he is an editor of the WeChat official account of Jiaozuo Lezhu Social Assistance Service Center outside the school. Hosted one innovation cultivation project for college students and applied for two invention patents.",
            imgUrl: require('../../public/images/aboutUs/lh.jpg')
        }
    ],
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
