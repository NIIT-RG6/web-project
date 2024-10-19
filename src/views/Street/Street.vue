<template>
  <div class="main">
    <div class="main-top">
      <div class="top-left">
        <img src="../../assets/img/street.jpg" alt="" />
      </div>
      <div class="top-right">
        <div class="right-list">
          <div class="list-item">
            <img src="../../assets/img/boai.webp" alt="" />
            <span>Boai Road</span>
          </div>
          <div class="list-item">
            <img src="../../assets/img/zhongshan.webp" alt="" />
            <span>ZS Road</span>
          </div>
          <div class="list-item">
            <img src="../../assets/img/desheng.webp" alt="" />
            <span>Desha Road</span>
          </div>
          <div class="list-item">
            <img src="../../assets/img/xinhua.webp" alt="" />
            <span>Xinhua Road</span>
          </div>
        </div>
        <div class="right-item">Haikou Qilou Architectural Historical and Cultural District</div>
        <div class="right-item">Attraction Level: AAAAA Grade</div>
        <div class="right-item">Location: Qilou Old Street, Longhua District, Haikou City</div>
        <div class="right-item">Area: 80,500 m²</div>
        <div class="right-item">Opening Hours: Open all day</div>
        <div class="right-item">Official Phone: 0898—66233637</div>
      </div>
    </div>
    <div class="main-bottom">
      <div class="bottom-item">
        <div class="header">Structure</div>
        <div class="item-cont">
          The layout of the Haikou Qilou architectural group is a combination of linear and planar layouts. This not only inherits traditional Chinese layout forms but also incorporates Western architectural layout styles, making it a typical creation method that blends Chinese and foreign elements to utilize their essences.<br /><br />
          The Haikou Qilou is primarily built in brick and wood structures, typically two to three stories high. The building facades are divided into three sections, with diverse design elements; the lower part features a colonnade, the middle part comprises floors, and the upper part is the eaves. It represents a modern typical commercial building, largely recognized as a combination of ancient Western architecture and traditional Southern Chinese culture. The rich variety of the Qilou, including parapets, window pediments, inter-window walls, balconies, and exterior wall patterns, along with the colorful artistic effects of window openings and angles, integrate Western "Baroque" architectural decoration styles, forming various classical architectural forms in the Qilou group.
        </div>
      </div>
      <div class="bottom-item">
        <div class="header">Characteristics</div>
        <div class="item-cont">
          The skyline of the eaves of the Haikou Qilou is often wavy, spiral, or geometrically decorated. The shapes of window arches include square, semi-circular, open-shouldered, and pointed forms, exhibiting elegance and refinement, reflecting the mixed cultural characteristics of Eurasia. The external wall reliefs are vibrant and lifelike. These reliefs depict auspicious symbols such as "Hundred Birds Paying Homage to the Phoenix," "Two Dragons Playing with a Pearl," "Begonia Flowers," "Plum, Orchid, Bamboo, and Chrysanthemum," "Koi in a Lotus Pond," "Longevity Cranes," and "Treasure Vases."
        </div>
      </div>
      <div class="bottom-item">
        <div class="header">Cultural Value</div>
        <div class="item-cont">
          The value of the Haikou Qilou historical and cultural district lies in its excellent preservation of the architectural style of Qilou buildings brought back from Southeast Asia by overseas Chinese in the early 20th century. The building facades, columns, wall patterns, and parapets possess high architectural artistry, tourism value, and preservation value. The Haikou Qilou historical and cultural district, with its unique architectural style and historical depth, has become a microcosm of modern Haikou’s history and culture, gathering the essence of traditional cultural arts from Haikou and even Hainan.
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
      .right-list {
        display: flex;
        justify-content: space-between;
        .list-item {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }
          span {
            font-size: 18px;
          }
        }
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
