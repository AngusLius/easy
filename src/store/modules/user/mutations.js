import {SET_PORTRAIT_URL, FETCH_LOGIN_USER, FETCH_BASIC_INFO, FETCH_ORGANIZATIONAL_INFO, FETCH_ASSET_INFO, FETCH_FAMILY_MEMBERS, FETCH_WORK_RECORDS} from './types'

export default {
  [SET_PORTRAIT_URL] (state, data) {
    state.portraitUrl = data
  },
  [FETCH_LOGIN_USER] (state, data) {
    state.loginUser = data
    state.portraitUrl = data.avatarPortal || data.avatarEhr
  },
  [FETCH_BASIC_INFO] (state, data) {
    state.basicInfo = data
  },
  [FETCH_ORGANIZATIONAL_INFO] (state, data) {
    state.organizationalInfo = data
  },
  [FETCH_ASSET_INFO] (state, data) {
    state.assetInfo = data
  },
  [FETCH_FAMILY_MEMBERS] (state, data) {
    state.familyInfo = data
  },
  [FETCH_WORK_RECORDS] (state, data) {
    state.workRecords = data
  }
}
