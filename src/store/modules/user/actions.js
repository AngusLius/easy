import service from '../../service/user'
import Promise from 'bluebird'
import {FETCH_LOGIN_USER, FETCH_ASSET_INFO, FETCH_ORGANIZATIONAL_INFO, FETCH_BASIC_INFO, SET_PORTRAIT_URL, FETCH_FAMILY_MEMBERS, FETCH_WORK_RECORDS} from './types'

export default {
  /**
   * 获取登陆用户信息
   * @param commit
   */
  fetchLoginUser ({commit}) {
    service.getLoginUserInfo().then(d => {
      commit(FETCH_LOGIN_USER, d)
    })
  },

  /**
   * 上传用户头像
   * @param commit
   * @param imgStr 头像剪切的base64字符串
   */
  uploadPortrait ({commit}, imgStr) {
    return new Promise((resolve, reject) => {
      service.uploadPortrait(imgStr).then(d => {
        commit(SET_PORTRAIT_URL, d.data)
        resolve(d)
      }).catch(e => {
        reject(e)
      })
    })
  },

  /**
   * 获取用户基本信息
   * @param commit
   */
  fetchBasicInfo ({commit}) {
    service.getBasicInfo().then(d => {
      commit(FETCH_BASIC_INFO, d)
    })
  },

  /**
   * 获取用户资产信息
   * @param commit
   */
  fetchAssetInfo ({commit}) {
    service.getAssetsInfo().then(d => {
      commit(FETCH_ASSET_INFO, d.data)
    })
  },

  /**
   * 获取用户组织信息
   * @param commit
   */
  fetchOrganizationalInfo ({commit}) {
    service.getOrganizationInfo().then(d => {
      commit(FETCH_ORGANIZATIONAL_INFO, d)
    })
  },

  /**
   * 获取用户家庭成员信息
   * @param commit
   */
  fetchFamilyInfo ({commit}) {
    service.getFamilyInfo().then(d => {
      commit(FETCH_FAMILY_MEMBERS, d)
    })
  },

  /**
   * 获取工作经历
   * @param commit
   */
  fetchWorkRecords ({commit}) {
    service.getWorkExperience().then(d => {
      commit(FETCH_WORK_RECORDS, d)
    })
  }
}
