<template>
  <div class="work-record">
    <div>
      <div class="panel-title">外部工作经历</div>
      <Table :columns="outsideColumns" :data="outsideRecords"></Table>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">内部工作经历</div>
      <Table :columns="insideColumns" :data="insideRecords"></Table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'work-record',
  data () {
    return {
      outsideColumns: [{
        key: 'startDate',
        title: '开始时间',
        width: 120
      }, {
        key: 'endDate',
        title: '结束时间',
        width: 120
      }, {
        key: 'company',
        title: '公司名称'
      }, {
        key: 'position',
        title: '职位'
      }],
      insideColumns: [{
        key: 'transferType',
        title: '调动类型',
        width: 90
      }, {
        key: 'transferDate',
        title: '调动日期',
        width: 115
      }, {
        key: '',
        title: '部门信息',
        width: 90,
        render: (h, params) => {
          let deps = []
          let row = params.row
          row.dept1Name && deps.push(row.dept1Name)
          row.dept2Name && deps.push(row.dept2Name)
          row.dept3Name && deps.push(row.dept3Name)
          return h('span', deps.join('-'))
        }
      }, {
        key: 'station',
        title: '岗位',
        width: 80
      }, {
        key: 'level',
        title: '职级',
        width: 80
      }, {
        key: 'level',
        title: '员工级别',
        width: 90
      }, {
        key: 'leaderName',
        title: '行政汇报人',
        width: 100
      }, {
        key: 'area',
        title: '区域',
        width: 80
      }, {
        key: 'businessGroup',
        title: '事业群'
      }]
    }
  },
  computed: {
    ...mapGetters(['workRecords']),
    outsideRecords () {
      return this.workRecords.workInfoExps
    },
    insideRecords () {
      return this.workRecords.workInfoInternals
    }
  }
}
</script>

<style lang="scss">

</style>
