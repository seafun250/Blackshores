"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.CdnServerDebugConfig = void 0);
const Info_1 = require("../../../Core/Common/Info"),
  StringUtils_1 = require("../../../Core/Utils/StringUtils"),
  TestModuleBridge_1 = require("../../Bridge/TestModuleBridge"),
  ModMethod_1 = require("../../Manager/ModFuncs/ModMethod"),
  PublicUtil_1 = require("../../Common/PublicUtil");
class CdnServerDebugConfig {
  constructor() {
    (this.h3t = !1),
      Info_1.Info.IsBuildShipping ||
        TestModuleBridge_1.TestModuleBridge.TryGetTestModuleExports().then((e) => {
          e && e.CdnServerAddress ? (this.l3t = e.CdnServerAddress) : (this.h3t = !1);
        });
  }
  TryGetMarqueeDebugUrl(e) {
    return this.h3t
      ? PublicUtil_1.PublicUtil.GetMarqueeUrl2(
          PublicUtil_1.PublicUtil.GetGameId(),
          this.l3t.MarqueeServerId
        )
      : e;
  }
  TryGetGachaDetailDebugUrl(e, t, r) {
    return this.h3t
      ? StringUtils_1.StringUtils.Format(
          e,
          this.l3t?.GachaDetailServerAddressPrefix,
          this.l3t?.GachaDetailServerId
        )
      : StringUtils_1.StringUtils.Format(e, t, r);
  }
  TryGetGachaRecordDebugUrl(e, t, r) {
    let result = this.h3t
      ? StringUtils_1.StringUtils.Format(
          e,
          this.l3t?.GachaRecordServerAddressPrefix,
          this.l3t?.GachaRecordServerId
        )
      : StringUtils_1.StringUtils.Format(e, t, r);
    return ModMethod_1.ModMethod.GetGachaInfo(result);
  }
  TryGetGachaInfoDebugUrl(e, t, r) {
    return this.h3t
      ? StringUtils_1.StringUtils.Format(
          e,
          this.l3t?.GachaInfoServerPrefixAddress,
          this.l3t?.GachaInfoServerId
        )
      : StringUtils_1.StringUtils.Format(e, t, r);
  }
  TryGetNoticeServerPrefixAddress(e) {
    return this.h3t ? this.l3t?.NoticeServerPrefixAddress : e;
  }
}
(exports.CdnServerDebugConfig = CdnServerDebugConfig).Singleton = new CdnServerDebugConfig();
//# sourceMappingURL=CdnServerDebugConfig.js.map
