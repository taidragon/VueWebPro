<template>
    <div class="query-box">
      <!-- 搜索固定标题行 -->
      <div class="query-box-title">
        <div style="width: 134px;"><span class="blue-block">···</span>搜索条件查询</div>
        <div style="flex-grow: 1;padding: 0 20px">
          <span class="queryTerm" v-for="(item, index) in queryData" v-bind:key="index">
            <strong>{{item.name}}:</strong>
            <span>
              {{item.text}}
             <i @click.stop="delQueryTrem(item.key)">x</i>
            </span>
          </span>
        </div>
        <div style="width: 100px">
          <Button type="primary" size="small" icon="ios-arrow-dropdown">查询条件</Button>
        </div>
      </div>

      <!-- 搜索查询条件下拉框 -->
      <div class="query-down">
        <div class="queryTerm" style="border-bottom:1px solid #ccc;padding:10px 5px">
          <CascadeTerm ref="cascade" @updataQueryData="updataQueryData"></CascadeTerm>
        </div>
        <div style="text-align: right;margin-top:10px;">
          <Button type="primary" size="small" icon="ios-search" style="margin-right: 10px" @click="search">搜索</Button>
        </div>
      </div>

      <hr>

      <div style="padding:30px;font-size:15px">
        <strong>搜索条件：</strong>
        {{searchData.code}}
      </div>
    </div>
</template>

<script>
import CascadeTerm from './CascadeTerm'
export default {
  name: 'queryBox',
  data () {
    return {
      /* 单位名称 */
      UnitName: '',
      /* 条件集合 */
      queryData: [],
      /* 搜索结果 */
      searchData: {
        code: ''
      }
    }
  },
  components: {
    CascadeTerm
  },
  mounted () {
  },
  methods: {
    /* queryData中对象的添加和删除
    * name 添加字段文本
    * text 添加字段值得文本
    * key 字段名
    * value 字段值 */
    updataQueryData (name, text, key, value) {
      if (value === undefined) {
        value = text
      }
      if (text !== '') {
        this.queryData = this.queryData.filter((obj) => obj.name !== name)
        this.queryData.push({ name: name, text: text, key: key, value: value })
      } else {
        this.queryData = this.queryData.filter((obj) => obj.name !== name)
      }
    },
    /* 删除已选中查询条件 */
    delQueryTrem (key) {
      /* 删除对应字段的查询数据 */
      this.queryData = this.queryData.filter((obj) => obj.key !== key)
      /* 初始化对应样式 */
      switch (key) {
        case 'code':
          this.$refs.cascade.init()
          break
        case 'param':
          this.UnitName = ''
          break
      }
    },
    search () {
      var code = this.queryData.filter((obj) => obj.key === 'code')
      if (code.length === 1) {
        code = code[0].value
      } else {
        code = null
      }
      this.searchData.code = code
      console.log(code)
    }
  }
}
</script>

<style scoped lang="scss">
  .query-box{
    height: 55px;
    border-bottom: 1px solid #d3d3d3;
    text-align: left;
    position: relative;
    .query-box-title{
      font-weight: bold;
      font-size: 14px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      .queryTerm{
        margin-left: 10px;
        strong{}
        span{
          padding:2px 10px;
          background: #61A7F3;
          border-radius: 4px;
          color:#fff;
          margin-left: 5px;
          position: relative;
          i{
            font-style:normal;
            position: absolute;
            border-radius:50%;
            background: #ccc;
            height:12px;
            width:12px;
            right:-5px;
            top:-5px;
            line-height: 10px;
            font-size: 5px;
            text-align: center;
            cursor: pointer;
            &:hover{
              background: rgb(237,64,20);
            }
          }
        }
      }
    }
    .query-down{
      padding: 20px;
      background: white;
      border: 1px solid #f5f5f5;
      border-radius: 6px;
      z-index: 99;
    }
  }
  .blue-block{
    display: inline-block;
    background: #61a7f3;
    color: white;
    padding: 0 10px;
    border-radius: 3px;
    margin-right: 15px;
  }
</style>
