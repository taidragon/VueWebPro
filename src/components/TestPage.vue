<template>
  <div class="testPage">
    <dragTreeTable :data="treeData" :onDrag="onTreeDataChange"></dragTreeTable>
  </div>
</template>
<script>
import dragTreeTable from 'drag-tree-table'
export default {
  name: 'TestPage',
  data () {
    return {
      treeData: {
        lists: [
          {
            'id': 40,
            'parent_id': 0,
            'order': 0,
            'name': '动物类',
            'open': true,
            'lists': []
          }, {
            'id': 5,
            'parent_id': 0,
            'order': 1,
            'name': '昆虫类',
            'open': true,
            'lists': [
              {
                'id': 12,
                'parent_id': 5,
                'open': true,
                'order': 0,
                'name': '蚂蚁',
                'lists': []
              }
            ]
          },
          {
            'id': 19,
            'parent_id': 0,
            'order': 2,
            'name': '植物类',
            'open': true,
            'lists': []
          }
        ],
        columns: [
          {
            type: 'selection',
            title: '名称',
            field: 'name',
            width: 200,
            align: 'center',
            formatter: (item) => {
              return '<a>' + item.name + '</a>'
            }
          },
          {
            title: '操作',
            type: 'action',
            width: 350,
            align: 'center',
            actions: [
              {
                text: '查看角色',
                onclick: this.onDetail,
                formatter: (item) => {
                  return '<i>查看角色</i>'
                }
              },
              {
                text: '编辑',
                onclick: this.onEdit,
                formatter: (item) => {
                  return '<i>编辑</i>'
                }
              }
            ]
          }
        ]
      }
    }
  },
  components: {
    dragTreeTable
  },
  mounted () {
  },
  methods: {
    onTreeDataChange (lists) {
      this.treeData.lists = lists
    },
    onDetail () {
      console.log(15631651616)
    }
  }
}
</script>
<style scoped lang="scss">
  .testPage{}
</style>
