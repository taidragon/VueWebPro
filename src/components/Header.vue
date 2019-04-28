<template>
  <div class="header">
    <h1><Icon class="logo" type="ios-images" />测试</h1>
    <span style="float: right;margin-top: -50px"><a href="/">退出登录</a></span>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .header{
    padding: 0 20px;
    h1{
      font-size: 16px;
    }
    .logo{
      font-size: 25px;
      margin-top: -5px;
      margin-right: 10px;
    }
  }
</style>
