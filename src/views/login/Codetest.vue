<template>
  <div class="code" @click="refreshCode">
    <SIdentify :identifyCode="identifyCode" :fontSizeMin="30" :fontSizeMax="40" :backgroundColorMin="200" :backgroundColorMax="220"  :dotColorMin="200" :dotColorMax="240"></SIdentify>
  </div>
</template>

<script>
import SIdentify from './Identify'
export default {
  name: 'Codetest',
  data () {
    return {
      identifyCodes: '1234567890',
      identifyCode: ''
    }
  },
  components: {
    SIdentify
  },
  mounted () {
    this.refreshCode()
  },
  methods: {
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      this.$emit('getCodetest', this.identifyCode)
    }
  }
}
</script>

<style lang='scss' scoped rel='stylesheet/scss'>
  .code {
    width: 100%;
    height: 100%;
  }
</style>
