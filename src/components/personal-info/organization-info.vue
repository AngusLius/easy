<template>
  <div class="organization-info">
    <Row>
      <i-col span="8">
        <label>姓名：<span>{{personalInfo.name}}</span></label>
      </i-col>
      <i-col span="8">
        <label>性别：<span>{{personalInfo.gender}}</span></label>
      </i-col>
      <i-col span="8">
        <label>工号：<span>{{personalInfo.empId}}</span></label>
      </i-col>
      <i-col span="8">
        <label>员工状态：<span>{{personalInfo.status}}</span></label>
      </i-col>
      <i-col span="8">
        <label>入职时间：<span>{{personalInfo.entryDate}}</span></label>
      </i-col>
      <i-col span="8">
        <label>企业工龄：<span>{{personalInfo.workMonths}}</span></label>
      </i-col>
    </Row>
    <hr class="divide-line">
    <Row>
      <i-col span="8">
        <label>所属公司：<span>{{personalInfo.company}}</span></label>
      </i-col>
      <i-col span="8">
        <label>部门：<span>{{department}}</span></label>
      </i-col>
      <i-col span="8">
        <label>岗位信息：<span>{{personalInfo.station}}</span></label>
      </i-col>
      <i-col span="8">
        <label>专业级别：<span>{{personalInfo.pLevel}}</span></label>
      </i-col>
      <i-col span="16">
        <label>专业职位：<span>{{personalInfo.pTitle}}</span></label>
      </i-col>
      <i-col span="8">
        <label>管理级别：<span>{{personalInfo.mLevel}}</span></label>
      </i-col>
      <i-col span="16">
        <label>管理职位：<span>{{personalInfo.mTitle}}</span></label>
      </i-col>
      <i-col span="8">
        <label>职位级别：<span>{{personalInfo.level}}</span></label>
      </i-col>
      <i-col span="8">
        <label>行政汇报人：<span>{{personalInfo.leaderName}}</span></label>
      </i-col>
      <i-col span="8">
        <label>下属人数：<span>{{personalInfo.subNum}}</span></label>
      </i-col>
    </Row>
    <hr class="divide-line">
    <Row>
      <i-col span="8">
        <label>办公电话：<span>{{personalInfo.officePhoneNumber}}</span></label>
      </i-col>
      <i-col span="16">
        <label>电子邮件：<span>{{personalInfo.email}}</span></label>
      </i-col>
      <i-col span="24">
        <label>办公地点：<span>{{personalInfo.workplace}}</span></label>
      </i-col>
    </Row>
    <hr class="divide-line">
    <div class="political-relations">
      <div class="panel-title">政党信息</div>
      <Table :columns="columns" :data="politicalList"></Table>
      <hr class="divide-line">
    </div>
    <div class="invoice">
      <div class="panel-title">开票信息</div>
      <div class="invoice-panel">
        <div class="invoice-grid">
          <Row>
            <i-col span="12">
              <label>公司名称：<span>{{billingInfo.companyName}}</span></label>
            </i-col>
            <i-col span="12">
              <label>纳税人识别号：<span>{{billingInfo.taxpayerId}}</span></label>
            </i-col>
            <i-col span="12">
              <label>开户支行：<span>{{billingInfo.bank}}</span></label>
            </i-col>
            <i-col span="12">
              <label>银行账号：<span>{{billingInfo.bankAccount}}</span></label>
            </i-col>
            <i-col span="24">
              <label>公司地址：<span>{{billingInfo.billingAddr}}</span></label>
            </i-col>
            <i-col span="24">
              <label>电话：<span>{{billingInfo.telephone}}</span></label>
            </i-col>
          </Row>
        </div>
      </div>
    </div>
    <div>
      <a class="expand-invoice" @click="showDetail = !showDetail">展开查看开票信息说明<i class="icon" :class="showDetail ? 'icon-collapse' : 'icon-expand'"></i></a>
      <transition name="">
        <div class="invoice-details" v-show="showDetail">
          <div class="detail-title">开票信息使用说明：</div>
          <ul>
            <li>1.该开票信息仅供员工因个人报销需索取增值税发票时使用，对应的公司为员工劳动关系所属公司</li>
            <li>2.如涉及业务报销请先与税务或法务确认业务费用自所属公司，并获取对应的开票信息。</li>
            <li>3.如有疑问，请联系：</li>
            <li>广州：龚伟红020-85105093</li>
            <li>北京：网之易-周燕010-82558331</li>
            <li>杭州：康燕燕 0571-89852163-29212&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陈程 0571-89852163-29211</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'organization-info',
  data () {
    return {
      showDetail: false,
      columns: [
        {
          key: 'politicalStatus',
          title: '政治面貌',
          width: 150
        },
        {
          key: 'entryDate',
          title: '入党时间',
          width: 200
        },
        {
          key: 'position',
          title: '党内职务'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['organizationalInfo']),
    politicalList () {
      return this.organizationalInfo.baseInfoParts
    },
    personalInfo () {
      return this.organizationalInfo.postInfo || {}
    },
    billingInfo () {
      return this.organizationalInfo.billingInfo || {}
    },
    department () {
      let dps = []
      this.personalInfo.dept1Name && dps.push(this.personalInfo.dept1Name)
      this.personalInfo.dept2Name && dps.push(this.personalInfo.dept2Name)
      this.personalInfo.dept3Name && dps.push(this.personalInfo.dept3Name)
      return dps.join('-')
    }
  }
}
</script>

<style lang="scss">
@import "../../scss/variable";

.organization-info {
  .political-relations {
    .divide-line {
      margin: 20px 0;
    }
  }

  .invoice {
    .invoice-panel {
      background: url("../../images/personal-info/invoice-background.png") no-repeat center top;
      margin: 0 -5px;

      .invoice-grid {
        margin-top: -2px;
        height: 200px;
        background: url("../../images/personal-info/invoice-grid-background.png") no-repeat center -3px;
        padding: 30px 35px;
      }
    }
  }

  .expand-invoice {
    line-height: 32px;
    font-size: 12px;
    color: #cfa729;
    @include user-select-none;
    cursor: pointer;
    outline: none;
    text-underline: none;

    i.icon {
      display: inline-block;
      vertical-align: middle;
      margin-top: -3px;
      width: 12px;
      height: 13px;
      background-color: #ebcd70;
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 3px;
      &.icon-expand {
        background-image: url("../../images/personal-info/icon-expand.png");
      }
      &.icon-collapse {
        background-image: url("../../images/personal-info/icon-collapse.png");
      }
    }

    &:hover {
      color: #b59324;
      i.icon {
        background-color: #d1b664;
      }
    }

    &:active {
      color: #9c7f1f;
      i.icon {
        background-color: #b8a058;
      }
    }

  }

  .invoice-details {
    background: #fffaea;
    border: 1px solid #fdedbc;
    padding: 20px;
    color: #cfa729;
    text-align: left;
    font-size: 12px;
    line-height: 18px;
    .detail-title {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .slide-enter-active {
    animation: slide-down 0.5s;
  }
  .slide-leave-active {
    animation: slide-down 0.5s reverse;
  }
  @keyframes slide-down {
    0% {
      height: 0;
    }
    100% {
      height: auto;
    }
  }
}
</style>
