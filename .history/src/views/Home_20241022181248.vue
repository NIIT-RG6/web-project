<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item>
      <img style="width: 100%; height: 100%" src="@/assets/images/street.jpg" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img style="width: 100%; height: 100%" src="@/assets/images/sky.jpg" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img style="width: 100%; height: 100%" src="@/assets/images/college.jpg" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img style="width: 100%; height: 100%" src="@/assets/images/park.jpeg" alt="" />
    </el-carousel-item>
  </el-carousel>
  <div class="main">
    <div class="main-left">
      <div class="viewports">
        <div class="header">Viewports</div>
        <div class="content">
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            The sky mountain
          </div>
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Qilou Street
          </div>
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Hainan University
          </div>
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Baishamen Park
          </div>
        </div>
      </div>
      <div class="viewports" style="margin-top: 10px">
        <div class="header">Specific food</div>
        <div class="content">
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Poached Chicken
          </div>
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Zaobai Vinegar Hot Pot
          </div>
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Coconut Chicken
          </div>
          <div class="cont-item">
            <el-icon style="margin: 0 10px">
              <InfoFilled color="#0cb497" />
            </el-icon>
            Sam Bo Luong
          </div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="viewports">
        <div class="header">Viewports</div>
        <div class="content">
          <div class="cont-item">
            <img src="@/assets/images/college.jpg" alt="" />
            <span>Hainan University</span>
          </div>
          <div class="cont-item">
            <img src="@/assets/images/street.jpg" alt="" />
            <span>Qilou Street</span>
          </div>
          <div class="cont-item">
            <img src="@/assets/images/sky.jpg" alt="" />
            <span>The sky mountain</span>
          </div>
          <div class="cont-item">
            <img src="@/assets/images/park.jpeg" alt="" />
            <span>Baishamen Park</span>
          </div>
        </div>
      </div>
      <div class="viewports">
        <div class="header">Haikou Food</div>
        <div class="content">
          <div class="cont-item">
            <img src="@/assets/images/baiqie.webp" alt="" />
            <span>Poached Chicken</span>
          </div>
          <div class="cont-item">
            <img src="@/assets/images/zaobo.webp" alt="" />
            <span>Zaobai Vinegar Hot Pot </span>
          </div>
          <div class="cont-item">
            <img src="@/assets/images/yezi.webp" alt="" />
            <span>Coconut Chicken</span>
          </div>
          <div class="cont-item">
            <img src="@/assets/images/qingbu.webp" alt="" />
            <span>Sam Bo Luong</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
:deep(.el-carousel__container) {
  height: 810px;
}

.main {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  .main-left {
    background: #e6e6e6;

    width: 15%;

    .viewports {
      .header {
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-weight: bold;
        background: #1a61a7;
      }

      .content {
        padding: 0 10px;

        .cont-item {
          display: flex;
          align-items: center;
          background-color: #fff;
          margin-top: 20px;
          height: 40px;
          border-radius: 10px;
          box-shadow: inset 0px 0px 5px 1px #ccc;
        }
      }
    }
  }

  .main-right {
    width: 84%;

    .header {
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: #fff;
      font-weight: bold;
      background: #1a61a7;
    }

    .content {
      padding: 20px;
      border: 2px solid #e6e6e6;
      display: flex;
      justify-content: space-between;

      .cont-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          margin-bottom: 10px;
          width: 350px;
          height: 200px;
        }
      }
    }
  }
}
</style>
