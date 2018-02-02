<template>
  <div class="asset-info">
    <div class="panel-title">资产信息</div>
    <Table :columns="assetColumns" :data="assetList"></Table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

const TYPE_ALL_MAP = {
  '003': '台式机',
  '004': '笔记本',
  '005': '显示器',
  '006': '打印机',
  '007': '传真机',
  '008': '网络设备',
  '009': 'IT办公设备',
  '010': '软件',
  '011': '其他IT设备',
  '016': '手写板',
  '020': 'IT服务器或盘阵',
  '021': '游戏部电子产品',
  '023': '投影仪',
  '024': '电视机'
}

export default {
  name: 'asset-info',
  data () {
    return {
      assetColumns: [{
        key: 'assets_sn',
        title: '资产编号',
        width: 120
      }, {
        key: 'type_all',
        title: '资产名称',
        width: 110,
        render: (h, params) => {
          return h('span', TYPE_ALL_MAP[params.row.type_all] || '')
        }
      }, {
        key: 'conf_model',
        title: '型号',
        width: 110
      }, {
        key: 'conf_cpu',
        title: 'CPU',
        width: 140
      }, {
        key: 'conf_mem',
        title: '内存',
        width: 100
      }, {
        key: 'conf_harddisk',
        title: '硬盘',
        width: 100
      }, {
        key: 'conf_display',
        title: '显卡'
      }]
    }
  },
  computed: {
    ...mapGetters(['assetInfo']),
    assetList () {
      return this.assetInfo && this.assetInfo.rows
    }
  }
}
</script>

<style scoped>

</style>
