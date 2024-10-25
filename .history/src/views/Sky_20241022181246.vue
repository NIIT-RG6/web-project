<template>
  <div class="main">
    <div class="main-top">
      <div class="top-left">
        <img src="@/assets/images/sky.jpg" alt="" />
      </div>
      <div class="top-right">
        🌄Haikou Sky Mountain, feel the fusion with the sea<br /><br />
        🌤️Stepping into Haikou's Sky Mountain feels like entering a whole new world. Here, there are not only
        magnificent natural landscapes but also a profound historical and cultural heritage.<br /><br />
        🏞️The sky and sea merge into one, embracing each other, as if the entire world is at your feet. The distant
        waves crash against the shore, intertwined with the sounds of the wind, creating a beautiful natural
        symphony.<br /><br />
        🎑Every dusk, the setting sun casts its glow here, and the clouds in the sky transform mysteriously, adding a
        touch of mystery and romance to Sky Mountain. Standing here, one can't help but feel the coexistence of one's
        insignificance and greatness.<br /><br />
        📍Haikou Sky Mountain is a fantastic attraction in Haikou, worth exploring, and it can help you find peace and
        tranquility. When you leave this place, you will carry a sense of respect and awe for nature, continuing your
        journey of life.
      </div>
    </div>
    <div class="main-bottom">
      <div class="bottom-item">
        <div class="header">Opening Hours</div>
        <div class="item-cont">
          04/01-10/31 Tuesday-Sunday 08:30-17:00; <br>
          11/01-03/31 Tuesday-Sunday 08:30-16:30; Closed all day on Mondays; <br>New Year's Day,
          Spring Festival 08:30-16:30; Qingming Festival, Labor Day, Dragon Boat Festival, Mid-Autumn Festival, National
          Day 08:30-17:00;
        </div>
      </div>
      <div class="bottom-item">
        <div class="header">Discount Policies</div>
        <div class="item-cont">
          Minors: Chinese citizens under 18 years old (excluding those from Hong Kong, Macau, and Taiwan, as well as
          foreign residents with permanent residency) accompanied by guardians, must make a reservation in advance on
          the official website, free of charge.<br /><br />
          Seniors: Age: 60 years and above, discounted.<br /><br />
          Students: Students aged 18 and above holding a diploma below a bachelor's degree (including undergraduate, but
          excluding adult education and graduate studies) can enjoy discounts with a student ID or school introduction
          letter.<br /><br />
          Disabled Persons: Free admission with a disability certificate.<br /><br />
          Military Personnel: On the Army Day ("August 1"), active-duty military personnel with valid identification can
          enter free of charge.<br />
          Retired Cadres: Free admission with a retiree certificate.<br /><br />
          Low-Income Individuals: Half-price for individuals holding a social security certificate in this city, with
          relevant original documents.<br /><br />
          Women: On International Women’s Day, female visitors enjoy half-price admission.<br /><br />
          Accompanying Parents of Children Aged 14 and Under: On Children’s Day (June 1), one accompanying parent can
          enjoy half-price admission for each child aged 14 and under.<br /><br />
          Additional Note: Free tickets for minors (including the Treasure Pavilion and Clock Pavilion) must be reserved
          in advance.<br />
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
