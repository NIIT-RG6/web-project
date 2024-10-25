<template>
  <div class="main">
    <div class="main-top">
      <div class="top-left">
        <img src="../../assets/img/park.jpeg" alt="" />
      </div>
      <div class="top-right">
        <div class="right-list">
          Baishamen Park is an open municipal recreational park that was officially opened to the public in January 2009. The design of Baishamen Ecological Park includes four major tourism themed areas and supporting infrastructure: Haikou's Annual Rings, Joyful Ocean, Sunset Coast, and City Post. It aims to explore the regional and humanistic spirit of Haikou, present the history and culture of Hainan, such as Baisha Ferry, Mazu Temple, and the Liberation War, jointly creating a harmonious and unified coastal leisure environment with a rich local flavor.
        </div>
        <div class="right-item">Chinese Name: Baishamen Ecological Park</div>
        <div class="right-item">Grade of Viewports: National AAA-level Park</div>
        <div class="right-item">Location: Intersection of Haidian 6th East Road and Renmin Avenue, Meilan District, Haikou City</div>
        <div class="right-item">Area Occupied: about 0.6 km²</div>
        <div class="right-item">Opening Hours: all year: From Monday to Friday 00:00-24:00</div>
        <div class="right-item">Telephone: 0898-66161129, 0898-66251149</div>
      </div>
    </div>
    <div class="main-bottom">
      <div class="bottom-item">
        <div class="header">Attraction Introduction</div>
        <div class="item-cont">
          Baishamen Park is located in the northern part of Haidian Island, Meilan District, Haikou City, with the Qiongzhou Strait to the north. The park spans an area of 60 hectares and features four major tourism themed areas: Haikou's Annual Rings, Joyful Ocean, Sunset Coast, and City Post. These areas include attractions such as the "Baishamen Children's Amusement Park," the "Tao Character Sculpture Interpreting Mazu Culture," and the "Baishamen Park Tennis Court." The park explores the regional and humanistic spirit of Haikou, showcasing the historical culture of Hainan and the rich coastal leisure atmosphere.
        </div>
      </div>
      <div class="bottom-item">
        <div class="header">Wetland Scenic Area</div>
        <div class="item-cont">
          Baishamen Park also boasts a wetland scenic area with rural ecological characteristics, which is the most distinctive feature that sets it apart from other parks in Haikou. It has a complete water system with small sandbanks in the water, and distinctive wooden bridges connecting different sections of the path, providing visitors with a delightful rural experience.<br /><br />
          Baishamen Children's Amusement Park: It offers eighteen amusement rides including "Roller Coaster," "Space Adventure," "Swing Chair," "Crazy Car," "Flying Ring Car," "Pirate Ship," "Hovercraft," "Bumper Cars," "Merry-Go-Round," "Shark Island," "Double Flight," "Self-Controlled Plane," and "Mermaid."<br /><br />
          Tao Character Sculpture Interpreting Mazu Culture: The two large annual rings are located on both sides, and the four walls of the annual rings respectively embed brief descriptions of the theme of Baishamen Park: "Origin of Baishamen," "Tianfei Mazu Temple," "The Battle of Crossing the Sea at Baishamen," and "Construction of Baishamen Ecological Park," while also depicting the park's topography and the changes in Haikou's geography.<br /><br />
          Baishamen Park Tennis Court covers a total area of over 6000 square meters, all designed according to international standards.<br /><br />
          Baishamen Park has five major functional areas: "Haikou's Annual Rings," "Ideal Community," "Children's Dream City," "Urban Coast," and "Health Paradise." Haikou's Annual Rings is themed around Haikou's historical culture, with specific attractions including the Gate of Baisha, Star and Moon Square, Mirror Lake, Baisha Trace, and the Liberation Commemorative Wall, enhancing the northern Qiong aspect, highlighting Haikou’s characteristics, and expressing regional charm. The Ideal Community and Children's Dream City functional areas are places that help children and teenagers explore their development potential, as well as meet the activity needs of the elderly.
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
        height: 600px;
      }
    }
    .top-right {
      .right-list {
        font-size: 18px;
        text-indent: 2em;
      }
      .right-item {
        margin-top: 20px;
      }
      width: 40%;
      font-size: 20px;
      text-align: left;
      line-height: 40px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 3px 3px #e6e6e6;
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
