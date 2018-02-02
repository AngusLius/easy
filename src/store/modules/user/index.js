import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import portraitUrl from '../../../images/home/portrait.png'

const initialState = {
  loginUser: {},
  portraitUrl: portraitUrl, // 系统用户头像
  basicInfo: {},
  organizationalInfo: {},
  assetInfo: {},
  familyInfo: {},
  workRecords: {}
}

export default {
  state: {...initialState},
  actions,
  getters,
  mutations
}
