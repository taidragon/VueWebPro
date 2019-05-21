<template>
  <div class="navLeft">
    <Menu active-name="1-2" :open-names="['1']" style="margin-right: -1px">
      <Submenu :name="items.id" v-for="(items,index) in listData" :key="index">
        <template slot="title">
          <Icon :type="items.icon" />
          组件
        </template>
        <MenuItem name="1-1" v-for="(item,index) in items.children" :key="index">
          <router-link :to="item.url">
            {{item.text}}
          </router-link>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {
  name: 'NavLeft',
  data () {
    return {
      listData: [{
        icon: 'ios-analytics',
        text: '组件',
        id: '1',
        children: [
          {
            text: 'TableTree',
            id: '1-1',
            url: ''
          }
        ]
      }]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .navLeft{}
</style>
