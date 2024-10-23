<template>
  <div class="main">
    <div class="main-top">
      <div class="top-left">
        <img src="@/assets/images/college.jpg" alt="" />
      </div>
      <div class="top-right">
        <div class="right-list">
          <div class="list-item">
            <span class="num">104</span>
            <span>Soft Science Comprehensive</span>
          </div>
          <div class="list-item">
            <span class="num">148</span>
            <span>Alumni Association Comprehensive</span>
          </div>
          <div class="list-item">
            <span class="num">888</span>
            <span>US world</span>
          </div>
          <div class="list-item">
            <span class="num">23</span>
            <span>Popularity ranking</span>
          </div>
        </div>
        <div class="right-item">Establishment time： 1958</div>
        <div class="right-item">Area occupied： 6064 acres</div>
        <div class="right-item">Address：The address "58 Renmin Avenue, Meilan District, Haikou City, Hainan Province
        </div>
        <div class="right-item">Popularity：18181240</div>
        <div class="right-item">
          Office Website：https://bkzs.hainanu.edu.cn/ https://www.hainanu.edu.cn
        </div>
        <div class="right-item">Telephone：0898-66266469,0898-66251607</div>
        <div class="right-item">E-mail：zsjyc@hainu.edu.cn</div>
      </div>
    </div>
    <div class="main-bottom">
      <div class="bottom-item">
        <div class="header">University Introduction</div>
        <div class="item-cont">
          Hainan University is a comprehensive key university established in August 2007 through the merger of the
          former South China University of Tropical Agriculture and the former Hainan University. It is a university
          jointly built by the Ministry of Education and the People's Government of Hainan Province under the
          "co-construction by the ministry and the province" initiative, and it is also a national "Double First-Class"
          university.<br /><br />
          The university adheres to the school motto of "Embracing all rivers, striving for distant goals on the grand
          path" and promotes the school spirit of "Self-improvement, Dedication, Integrity, and Fortitude." In 2008,
          Hainan University was included in the list of key universities under the national "Project 211"; in 2012, it
          entered the ranks of universities supported by the national "Revitalization Plan for Higher Education in the
          Central and Western Regions," and successively received support from projects such as the "Basic Capacity
          Building Project for Universities in the Central and Western Regions" and the "Comprehensive Strength
          Enhancement Project for Universities in the Central and Western Regions." In 2017, Hainan University was
          selected as a university for the construction of world-class disciplines by the nation. In 2018, the Hainan
          Provincial Party Committee and Provincial Government made the major decision and deployment to "mobilize the
          province's efforts to run Hainan University well." In the same year, the university became a university
          jointly built by the Ministry of Education and the People's Government of Hainan Province, and was included in
          the sequence of universities directly under the Ministry of Education. On April 13, 2018, in his important
          speech at the celebration of the 30th anniversary of the establishment of Hainan Province and the special
          economic zone, General Secretary Xi Jinping pointed out that "support should be given to Hainan University in
          creating world-class disciplines," which pointed out the direction for the construction and development of
          Hainan University in the new era and provided fundamental guidance.
        </div>
      </div>
      <div class="bottom-item">
        <div class="header">Dormitory</div>
        <div class="item-cont">
          Hainan University currently offers two types of dormitory standards, with a fee of 1,200 yuan per academic
          year for a four-person apartment and 800 yuan per academic year for a six-person apartment.<br /><br />
          All dormitories are equipped with air conditioning. The rooms and bed assignments are arranged by the college
          in advance. Students may negotiate with their roommates to swap beds, desks, and chairs. Generally, roommates
          in the same dormitory are from the same class, major, or even college. However, there are also a small number
          of mixed dormitories where roommates are from different majors and grades.<br /><br />
          All dormitories are equipped with computer desks, wardrobes, shoe cabinets, study desks, air conditioners, and
          fans.
        </div>
      </div>
      <div class="bottom-item">
        <div class="header">Canteen</div>
        <div class="item-cont">
          The university has multiple student canteens and dining halls, including a Muslim canteen. Each canteen and
          dining hall is fully equipped and elegantly decorated, fully accommodating the diverse culinary customs of
          students from all over the country.<br /><br />
          To meet students' increasingly diverse demands for dining and material life, the university's canteens and
          dining halls, while ensuring the stability of basic meals, have introduced social catering services. They
          offer a wide variety of styles of flavored snacks and meals with diverse dishes and patterns.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  font-size: 16px;

  .main-top {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #fff;

    .top-left {
      width: 58%;

      img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
      }
    }

    .top-right {
      width: 40%;
      font-size: 20px;
      text-align: left;
      line-height: 40px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 3px 3px #e6e6e6;

      .right-item {
        margin-top: 20px;
      }

      .right-list {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .list-item {
          text-align: center;
          border: 1px solid #ff6600;
          border-radius: 10px;
          width: 150px;
          background: #fff9f2;
          display: flex;
          align-items: center;
          flex-direction: column;

          span {
            font-size: 18px;
          }

          .num {
            font-size: 26px;
            font-weight: bold;
            color: #ff6600;
          }
        }
      }
    }
  }

  .main-bottom {
    padding: 20px;
    background-color: #f6f6f6;

    .bottom-item {
      box-shadow: 0 0 3px 3px #e6e6e6;

      padding: 20px;
      border-radius: 20px;
      margin-top: 20px;
      background-color: #fff;

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
