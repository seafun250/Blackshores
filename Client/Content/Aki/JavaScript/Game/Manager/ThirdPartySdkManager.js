"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.ThirdPartySdkManager = void 0);
const cpp_1 = require("cpp"),
  UE = require("ue"),
  Log_1 = require("../../Core/Common/Log"),
  Protocol_1 = require("../../Core/Define/Net/Protocol"),
  Net_1 = require("../../Core/Net/Net"),
  TimerSystem_1 = require("../../Core/Timer/TimerSystem"),
  BaseConfigController_1 = require("../../Launcher/BaseConfig/BaseConfigController"),
  Platform_1 = require("../../Launcher/Platform/Platform"),
  ACE_DATA_TRANSFER_INTERVAL_PC = 100,
  ACE_DATA_TRANSFER_INTERVAL_MOBILE = 4e3;
class ThirdPartySdkManager {
  static Init() {
    var r = BaseConfigController_1.BaseConfigController.GetPackageConfigOrDefault("Stream"),
      e = BaseConfigController_1.BaseConfigController.GetPackageConfigOrDefault("Changelist", ""),
      r = (cpp_1.FCrashSightProxy.SetBranchInfo(r, e), true);
    r &&
      (void 0 !== ThirdPartySdkManager.BBe &&
        (TimerSystem_1.TimerSystem.Remove(ThirdPartySdkManager.BBe),
        (ThirdPartySdkManager.BBe = void 0)),
      ThirdPartySdkManager.InitDataTransferTimerForTpSafe(),
      Net_1.Net.Register(27311, ThirdPartySdkManager.bBe)),
      Platform_1.Platform.IsAndroidPlatform() &&
        ((r = UE.KuroAudioStatics.IsAndroidApiUsingOpenSL()),
        cpp_1.FCrashSightProxy.SetCustomData("AudioAPI", r ? "OpenSL" : "AAudio")),
      this.rPn();
  }
  static rPn() {}
  static SetUserInfo(r) {
    "" !== r && ThirdPartySdkManager.qBe(r);
  }
  static qBe(r) {}
  static SetUserInfoForTpSafe(r, e) {}
  static InitDataTransferTimerForTpSafe() {}
  static NBe() {}
  static GBe() {
    return Platform_1.Platform.IsWindowsPlatform() ? 601 : 99;
  }
  static Logout() {}
  static Clear() {
    void 0 !== ThirdPartySdkManager.BBe &&
      (TimerSystem_1.TimerSystem.Remove(ThirdPartySdkManager.BBe),
      (ThirdPartySdkManager.BBe = void 0));
  }
}
((exports.ThirdPartySdkManager = ThirdPartySdkManager).BBe = void 0),
  (ThirdPartySdkManager.bBe = (r) => {});
//# sourceMappingURL=ThirdPartySdkManager.js.map
