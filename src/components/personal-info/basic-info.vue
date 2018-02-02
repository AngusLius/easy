<template>
  <div class="basic-info">
    <div>
      <div class="panel-title">个人信息</div>
      <Row>
        <i-col span="8">
          <label>国籍：<span>{{personalInfo.nationality}}</span></label>
        </i-col>
        <i-col span="10">
          <label>民族：<span>{{personalInfo.ethnic}}</span></label>
        </i-col>
        <i-col span="6">
          <label>婚姻状态：<span>{{personalInfo.maritalStatus}}</span></label>
        </i-col>
        <i-col span="8">
          <label>户籍性质：<span>{{personalInfo.rType}}</span></label>
        </i-col>
        <i-col span="16">
          <label>现居地址：<span>{{personalInfo.address}}</span></label>
        </i-col>
      </Row>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">通讯信息</div>
      <Row>
        <i-col span="8">
          <label>电话归属：<span>{{contactInfo.regLocation}}</span></label>
        </i-col>
        <i-col span="16">
          <label>移动电话：<span>{{contactInfo.mobilePhone}}</span></label>
        </i-col>
        <i-col span="24">
          <label>个人邮箱：<span>{{contactInfo.email}}</span></label>
        </i-col>
      </Row>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">特殊关系报备</div>
      <Row>
        <i-col span="8">
          <label>是否有亲属在网易工作：<span>{{hasSpecialRelation ? '是' :'否'}}</span></label>
        </i-col>
        <!--<i-col span="5">
          <label>员工工号：<span></span></label>
        </i-col>
        <i-col span="5">
          <label>员工姓名：<span></span></label>
        </i-col>
        <i-col span="6">
          <label>与本人关系：<span></span></label>
        </i-col>-->
      </Row>
      <Table v-if="hasSpecialRelation" :columns="specialRelationColumns" :data="recordFamilyLists"></Table>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">教育信息</div>
      <Table :columns="educationColumns" :data="educationRecords"></Table>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">语言能力</div>
      <Table :columns="languageColumns" :data="baseInfoLanguages"></Table>
    </div>
    <hr class="divide-line">
    <div>
      <div class="panel-title">职称</div>
      <Table :columns="staffColumns" :data="baseInfoTitles"></Table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'basic-info',
  data () {
    return {
      languageColumns: [{
        key: 'type',
        title: '语种',
        width: 100
      }, {
        key: 'level',
        title: '级别水平'
      }],
      staffColumns: [{
        key: 'title',
        title: '资格名称',
        width: 100
      }, {
        key: 'proTitle',
        title: '专业名称',
        width: 100
      }, {
        key: 'code',
        title: '证书编号',
        width: 150
      }, {
        key: 'grantUnit',
        title: '发证单位',
        width: 150
      }, {
        key: 'grantDate',
        title: '发证时间'
      }, {
        key: 'startDate',
        title: '获得资格时间'
      }],
      specialRelationColumns: [{
        key: 'memberEmpId',
        title: '工号',
        width: 80
      }, {
        key: 'name',
        title: '姓名',
        width: 80
      }, {
        key: 'gender',
        title: '性别',
        width: 80
      }, {
        key: 'birthday',
        title: '出生年月',
        width: 120
      }, {
        key: 'relationship',
        title: '与本人关系',
        width: 100
      }, {
        key: 'company',
        title: '所在单位',
        width: 120
      }, {
        key: 'position',
        title: '职位',
        width: 100
      }, {
        key: 'contact',
        title: '联系方式'
      }],
      educationColumns: [{
        key: 'startDate',
        title: '入学时间',
        width: 120
      }, {
        key: 'endDate',
        title: '毕业时间',
        width: 120
      }, {
        key: 'institution',
        title: '学校名称',
        width: 140
      }, {
        key: 'eduLevel',
        title: '学历',
        width: 100
      }, {
        key: 'eduDegree',
        title: '学位',
        width: 100
      }, {
        key: 'major',
        title: '专业',
        width: 120
      }, {
        key: 'top',
        title: '是否最高学历'
      }]
    }
  },
  computed: {
    ...mapGetters(['basicInfo']),
    baseInfoLanguages () {
      return this.basicInfo.baseInfoLanguages
    },
    baseInfoTitles () {
      return this.basicInfo.baseInfoTitles
    },
    recordFamilyLists () {
      return this.basicInfo.recordFamilyLists
    },
    educationRecords () {
      return this.basicInfo.baseInfoEdus
    },
    personalInfo () {
      return this.basicInfo.baseInfoPerson || {}
    },
    contactInfo () {
      return this.basicInfo.baseInfoContact || {}
    },
    hasSpecialRelation () {
      return this.recordFamilyLists && this.recordFamilyLists.length > 0
    }
  }
}
</script>

<style lang="scss">
.basic-info {
}
</style>
