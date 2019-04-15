<template>
  <div class="cascadeRec">
    <p style="padding: 4px;border-bottom: 1px solid #eee">
    <span v-for="(item,index) in listData" v-bind:key="index" :class="{active : activeId === index}" @click="clickSpan(item,index)">
      {{item.label}}
    </span>
    </p>
    <CascadeRec ref="rec" :listData="showData" v-if="show" @updataQueryData="updataQueryData"> </CascadeRec>
  </div>
</template>

<script>
export default {
  name: 'CascadeRec',
  data () {
    return {
      show: false,
      showData: [],
      activeId: '',
      labelValue: ''
    }
  },
  props: {
    listData: {}
  },
  mounted () {
  },
  methods: {
    clickSpan (item, index) {
      /* 下级目录点击回退 */
      if (this.$refs.rec !== undefined) {
        /* 关闭下下级目录 */
        this.$refs.rec.show = false
        /* 关闭下级目录高亮 */
        this.$refs.rec.activeId = -1
      }
      /* 打开下一级目录 */
      this.show = true
      /* 过滤出点击的对象的children */
      this.showData = this.listData.filter((obj) => obj.comCode === item.comCode)[0].children
      /* 高亮index */
      this.activeId = index
      /* 将显示的数据传回查询显示中的queryData  */
      this.labelValue = item.label
      this.updataQueryData('行政区划', this.labelValue, 'code', item.comCode)
    },
    /* updataQueryData */
    updataQueryData (name, text, key, value) {
      this.$emit('updataQueryData', name, text, key, value)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 .cascadeRec{
    p{
      span{
        display: inline-block;margin-left: 10px;cursor: pointer;padding:2px 10px;
      }
    }
 }
  .active{
    background: #61A7F3;border-radius: 4px;color:#fff;margin-left: 5px
  }
</style>
