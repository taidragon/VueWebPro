<template>
  <div class="struc">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <div class="nav">
        <slot name="nav"></slot>
      </div>
      <div class="con">
        <div class="navbar">
          <slot name="navbar"></slot>
        </div>
        <div class="routerView">
          <div>
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .struc{
    min-width: 1200px;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .header{
      height:50px;
      width:100%;
      border-bottom: 1px solid #d1d1d1;
      line-height: 50px;
      text-align: left;
    }
    .content{
      height:calc(100% - 50px);
      width: 100%;
      .nav{
        width: 240px;
        height:100%;
        border-right: 1px solid #d1d1d1;
        float: left;
        overflow-x:hidden;
        overflow-y:auto;
      }
      .con{
        width: calc(100% - 240px);
        height:100%;
        float: left;
        .navbar{
          width: 100%;
          height: 40px;
          border-bottom: 1px solid #d1d1d1;
        }
        .routerView{
          width:100%;
          height: calc(100% - 40px);
          background: #eee;
          overflow-y: auto;
          padding: 10px;
          >div{
            background: #fff;
            border: 1px #d1d1d1 solid;
            height:100%;
            overflow:auto
          }
        }
      }
    }
  }
</style>
