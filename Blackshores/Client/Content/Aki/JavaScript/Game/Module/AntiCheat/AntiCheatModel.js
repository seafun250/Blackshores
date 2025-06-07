"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.AntiCheatModel = void 0);
const UE = require("ue"),
  ModelBase_1 = require("../../../Core/Framework/ModelBase"),
  LocalStorage_1 = require("../../Common/LocalStorage"),
  LocalStorageDefine_1 = require("../../Common/LocalStorageDefine"),
  ControllerHolder_1 = require("../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  AntiCheatData_1 = require("./AntiCheatData"),
  BUNDLE_DATA_EVENT_ID = "8",
  HEARTBEAT_DATA_EVENT_ID = "9";
class AntiCheatModel extends ModelBase_1.ModelBase {
  constructor() {
    super(...arguments), (this.Qre = ""), (this.qje = ""), (this.Gje = 0);
  }
  GetVersion() {
    return this.Qre;
  }
  GetBundleId() {
    return this.qje;
  }
  OnInit() {
    var e = UE.KuroLauncherLibrary.GetAppVersion();
    return (
      (this.Qre = LocalStorage_1.LocalStorage.GetGlobal(
        LocalStorageDefine_1.ELocalStorageGlobalKey.PatchVersion,
        e
      )),
      (this.qje = UE.KismetSystemLibrary.GetGameBundleId()),
      !0
    );
  }
  static GetBundleData() {
    return {};
  }
  ResetHeartbeatException() {
    this.Gje = 0;
  }
  HitHeartbeatException() {
    this.Gje += 1;
  }
  GetHeartbeatException() {
    return this.Gje;
  }
  HasHeartbeatException() {
    return 0 < this.Gje;
  }
  GetHeartbeatData() {
    return {};
  }
}
exports.AntiCheatModel = AntiCheatModel;
//# sourceMappingURL=AntiCheatModel.js.map
