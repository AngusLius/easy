<template>
  <div class="family-dependent">
    <div>
      <div class="panel-title">家庭成员</div>
      <Table :columns="familyColumns" :data="familyMembers"></Table>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">紧急联系人</div>
      <Row>
        <i-col span="8">
          <label>姓名：<span>{{expeditiousContact.contact}}</span></label>
        </i-col>
        <i-col span="16">
          <label>移动电话：<span>{{expeditiousContact.phone}}</span></label>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'family-dependent',
  data () {
    return {
      familyColumns: [{
        key: 'name',
        title: '亲属姓名',
        width: 90
      }, {
        key: 'relationship',
        title: '与本人关系',
        width: 120
      }, {
        key: 'gender',
        title: '性别',
        width: 80
      }, {
        key: 'birthday',
        title: '成员出生日期',
        width: 140
      }, {
        key: 'company',
        title: '工作单位',
        width: 120
      }, {
        key: 'position',
        title: '职位',
        width: 90
      }, {
        key: 'contact',
        title: '联系方式'
      }]
    }
  },
  computed: {
    ...mapGetters(['familyInfo']),
    familyMembers () {
      return this.familyInfo.recordFamilies
    },
    expeditiousContact () {
      return (this.familyInfo.baseInfoEmergencys && this.familyInfo.baseInfoEmergencys.length && this.familyInfo.baseInfoEmergencys[0]) || {}
    }
  }
}
</script>

<style scoped>

</style>
