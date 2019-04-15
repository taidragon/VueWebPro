<template>
  <div class="cascadeTerm">
    <strong>行政区划：</strong>
    <div class="cascadeRec_box" style="padding-left:70px;margin-top: -22px;">
      <CascadeRec ref="rec" :listData="listData" @updataQueryData="updataQueryData"></CascadeRec>
    </div>
  </div>
</template>

<script>
import CascadeRec from './CascadeRec'
export default {
  name: 'CascadeTerm',
  data () {
    return {
      listData: []
    }
  },
  components: {
    CascadeRec
  },
  mounted () {
    this.getMenu()
  },
  methods: {
    /* 获取省市县级联菜单 */
    getMenu () {
      this.axios.get('/cascade.json')
        .then((response) => {
          console.log(response.data.data)
          this.listData = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    /* updataQueryData */
    updataQueryData (name, text, key, value) {
      this.$emit('updataQueryData', name, text, key, value)
    },
    /* 初始化选择器 */
    init () {
      /* 下级目录点击回退 */
      if (this.$refs.rec !== undefined) {
        /* 关闭下下级目录 */
        this.$refs.rec.show = false
        /* 关闭下级目录高亮 */
        this.$refs.rec.activeId = -1
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 .cascadeTerm{

 }
</style>
