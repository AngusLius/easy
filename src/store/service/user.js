import _$ from '../../utils/util'

const apiRoute = 'user'

export default class UserService {
  constructor () {
    throw new Error('禁止实例化')
  }

  /**
   * 获取组织信息
   * @return {Promise}
   */
  static getOrganizationInfo () {
    return _$.get(`${apiRoute}/org.du`)
  }

  /**
   * 获取基本信息
   * @return {Promise}
   */
  static getBasicInfo () {
    return _$.get(`${apiRoute}/base.du`)
  }

  /**
   * 获取资产信息
   * @return {Promise}
   */
  static getAssetsInfo () {
    return _$.get(`${apiRoute}/assetInfo.du`)
  }

  /**
   * 获取工作经历
   * @return {Promise}
   */
  static getWorkExperience () {
    return _$.get(`${apiRoute}/workExpireInfo.du`)
  }

  /**
   * 获取家庭成员信息
   * @return {Promise}
   */
  static getFamilyInfo () {
    return _$.get(`${apiRoute}/family.du`)
  }

  /**
   * 获取登陆用户信息
   * @return {Promise}
   */
  static getLoginUserInfo () {
    return _$.get(`${apiRoute}/userExtr.du`)
  }

  /**
   * 上传用户头像
   * @param imageStr
   * @return {Promise}
   */
  static uploadPortrait (imageStr) {
    return _$.post(`${apiRoute}/uploadHeadPortrait.du`, {
      imageStr: imageStr
    })
  }
}
