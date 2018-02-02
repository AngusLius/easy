export default {
  loginUser: state => state.loginUser,
  basicInfo: state => state.basicInfo,
  assetInfo: state => state.assetInfo,
  portraitUrl: state => state.portraitUrl,
  organizationalInfo: state => state.organizationalInfo,
  familyInfo: state => state.familyInfo,
  workRecords: state => state.workRecords,
  workDays: state => Math.ceil((new Date() - (state.loginUser.entryDate || new Date())) / (24 * 60 * 60 * 1000))
}
