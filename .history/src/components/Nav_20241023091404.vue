<template>
  <div class="nav">
    <span @click="handleClick('/home')">Homepage of the website</span>
    <span @click="handleClick('/sky')">The Sky Mountain</span>
    <span @click="handleClick('/street')">Qilou Street</span>
    <span @click="handleClick('/college')">Hainan University</span>
    <span @click="handleClick('/park')">Baishamen Park</span>
    <span @click="handleClick('/foods')">Haikou Food</span>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped lang="less">
.nav {
  display: flex;
  justify-content: space-around;
  background: linear-gradient(#1c8cb9, #00a5a7);
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;

  span {
    height: 50px;
    cursor: pointer;
  }
}
</style>
