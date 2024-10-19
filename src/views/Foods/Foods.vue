<template>
  <div class="foods">
    <div class="foods-item">
      <div class="header">White Cut Chicken</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/baiqie.webp" alt="" />
        <div>
          In Haikou, tasting White Cut Chicken, paired with a special dipping sauce, the freshness and sweet-sour flavors blend together, leaving an endless aftertaste. 
          One can almost feel the warmth and hospitality of Haikou people. 
          Coupled with the rich coconut fragrance of South Ginger Chicken Rice, the aftertaste is truly enchanting.
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Pulp Vinegar Hotpot</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/zaobo.webp" alt="" />
        <div>
          "Named pulp, but truly essence." Pulp vinegar hotpot has already become an indispensable appetizer dish on Hainan's dining tables. 
          It uses the sour vinegar produced during the fermentation of wine dregs as a soup base, with a variety of ingredients mixed together, cooked in boiling water. 
          It is sour and spicy, stimulating the appetite.
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Coconut Chicken</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/yezi.webp" alt="" />
        <div>
          Coconut water + Wenchang Chicken = the "bomb" of hotpot. The sweet and delicious coconut juice, along with the fresh and tender Wenchang Chicken, 
          truly brings out the extreme freshness of this soup!
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Qing Bu Liang</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/qingbu.webp" alt="" />
        <div>
          "coolness on the tip of the tongue." It was once praised by Su Shi as "Plucking the pure dew from the coconut tree, presenting a bowl of white jade fragrance."
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Hainan Rice Noodles</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/fenmian.webp" alt="" />
        <div>
          In Haikou, a day's meals can almost be sponsored by rice noodles—breakfast, lunch, and then dinner with rice noodles again. 
          Hainan's rice noodles can be categorized by preparation methods, primarily divided into marinated and soup noodles, each with its unique flavor.
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Dad Tea</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/laoba.webp" alt="" />
        <div>
          A pot of tea and several snacks while chatting about everything—that’s the essence of “Dad Tea.” 
          There’s no so-called delicacy; it returns to the simplicity of the market, allowing one to feel the ease of life.
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Old Street Cuisine</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/laojie.webp" alt="" />
        <div>
          Qilou Old Street is a very representative landmark in Haikou. 
          Not only is it beautiful, but it's also full of delicious food. 
          In the depths of the old street, Xitian Temple has numerous snack shops everywhere, 
          and the street food makes one's head spin and mouth water.
        </div>
      </div>
    </div>
    <div class="foods-item">
      <div class="header">Hainan Tropical Fruits</div>
      <div class="recom">Recommendation  Index：⭐⭐⭐⭐⭐</div>
      <div class="main">
        <img src="../../assets/img/redai.webp" alt="" />
        <div>
          Natural essence, a feast for the taste buds. In Haikou, one must not miss this fruit carnival. 
          Mangoes are golden and tempting, sugar apples are pure white like jade, and mangosteens are sweet and delicious.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.foods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  .foods-item {
    width: 48%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .header {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .recom {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .main {
      display: flex;
      img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
    }
  }
}
</style>
