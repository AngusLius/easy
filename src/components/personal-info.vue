<template>
  <div class="personal-info">
    <Tabs value="organization" :animated="false">
      <TabPane label="组织信息" name="organization">
        <organization-info/>
      </TabPane>
      <TabPane label="基本信息" name="basic">
        <basic-info/>
      </TabPane>
      <TabPane label="工作经历" name="record">
        <work-record/>
      </TabPane>
      <TabPane label="家庭成员及紧急联系人" name="family-dependent">
        <family-dependent/>
      </TabPane>
      <TabPane label="资产信息" name="asset">
        <asset-info/>
      </TabPane>
      <!--<TabPane label="我的薪资" name="salary">
        <salary-info/>
      </TabPane>-->
    </Tabs>
  </div>
</template>

<script>
import organizationInfo from './personal-info/organization-info'
import basicInfo from './personal-info/basic-info'
import workRecord from './personal-info/work-record'
import familyDependent from './personal-info/family-dependent'
import assetInfo from './personal-info/asset-info'
import salaryInfo from './personal-info/salary-info'
import {mapActions} from 'vuex'

export default {
  components: {
    organizationInfo,
    basicInfo,
    workRecord,
    familyDependent,
    assetInfo,
    salaryInfo
  },
  name: 'personal-info',
  methods: {
    ...mapActions([
      'fetchBasicInfo',
      'fetchAssetInfo',
      'fetchOrganizationalInfo',
      'fetchFamilyInfo',
      'fetchWorkRecords'
    ])
  },
  mounted () {
    this.fetchOrganizationalInfo()
    this.fetchBasicInfo()
    this.fetchWorkRecords()
    this.fetchFamilyInfo()
    this.fetchAssetInfo()
  }
}
</script>

<style lang="scss">
@import "../scss/variable";

.personal-info {
  background-color: #ffffff;
  .ivu-tabs-nav-container {
    background-color: #e7e7e7;

    .ivu-tabs-nav {
      .ivu-tabs-tab {
        padding: 10px 30px 10px 30px;
        @include user-select-none;
      }
      .ivu-tabs-tab-active {
        background-color: #ffffff;
      }
    }
  }
  .ivu-tabs-tabpane {
    padding: 0 30px 30px;
  }
  .divide-line {
    margin: 20px 0;
    height: 0;
    border: none;
    border-bottom: 1px dashed #bbbbbb;
  }

  .ivu-row .ivu-col {
    label {
      line-height: 34px;
      color: #999999;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      span {
        color: #333333;
      }
    }
  }

  .panel-title {
    line-height: 34px;
  }

  th {
    color: #999999;
  }

}
</style>
