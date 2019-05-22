<template>
  <div class="navLeft">
    <Menu active-name="1" :open-names="['1']" v-for="(items,index) in listData" :key="index" style="margin-right: -1px">
      <Submenu :name="items.id" >
        <template slot="title">
          <Icon :type="items.icon" />
          组件
        </template>
        <MenuItem name="item.id" v-for="(item,index) in items.children" :key="index">
          <router-link :to="item.url">
            {{item.text}}
          </router-link>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'NavLeft',
  data () {
    return {
      listData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('listData.json', {}).then((response) => {
        this.listData = response.data
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .navLeft{}
</style>
