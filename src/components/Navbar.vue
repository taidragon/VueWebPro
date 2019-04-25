<template>
  <div class="navbar">
    <div v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">
          {{ generateTitle(item.meta.title) }}
        </span>
      <a v-else @click.prevent="handleLink(item)">{{ generateTitle(item.meta.title) }}&nbsp;>&nbsp;&nbsp;</a>
    </div>
  </div>
</template>

<script>
/* import { generateTitle } from '@/utils/i18n' */
import pathToRegexp from 'path-to-regexp'

export function generateTitle (title) {
/* const hasKey = this.$te('route.' + title)
   if (hasKey) {
     // $t :this method from vue-i18n, inject in @/lang/index.js
     const translatedTitle = this.$t('route.' + title)

     return translatedTitle
   } */
  return title
}
export default {
  name: 'Navbar',
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [
          {
            path: '/dashboard',
            meta: {
              title: ''
            }
          }].concat(matched)
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    pathCompile (path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar{
    margin-left: 25px;
    min-width: 1000px;
    .app-breadcrumb.el-breadcrumb {
      display: inline-block;
      line-height: 50px;
      margin-left: 8px;
    }
    .no-redirect {
      cursor: text;
    }
    >div{
      float: left;
      line-height:40px;
      color: #4a4a4a;
      font-size: 15px;
      font-weight: bold;
    }
  }
</style>
