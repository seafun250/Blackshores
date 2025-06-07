"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.AntiCheatController = void 0);
const Info_1 = require("../../../Core/Common/Info"),
  Log_1 = require("../../../Core/Common/Log"),
  EventDefine_1 = require("../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../Common/Event/EventSystem"),
  TimeUtil_1 = require("../../Common/TimeUtil"),
  ControllerHolder_1 = require("../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  ThirdPartySdkManager_1 = require("../../Manager/ThirdPartySdkManager"),
  UiControllerBase_1 = require("../../Ui/Base/UiControllerBase"),
  Heartbeat_1 = require("../Login/Heartbeat"),
  LogReportController_1 = require("../LogReport/LogReportController"),
  AntiCheatModel_1 = require("./AntiCheatModel"),
  HEARTBEAT_EXCEPTION_FACTOR = 0.5,
  HEARTBEAT_REPORT_INTERVAL = TimeUtil_1.TimeUtil.Hour;
class AntiCheatController extends UiControllerBase_1.UiControllerBase {
  static OnInit() {
    return !(this.yxl = !1);
  }
  static OnAddEvents() {
    EventSystem_1.EventSystem.Add(
      EventDefine_1.EEventName.ChangePlayerInfoId,
      AntiCheatController.Aje
    ),
      EventSystem_1.EventSystem.Add(
        EventDefine_1.EEventName.SendHeartbeat,
        AntiCheatController.Pje
      );
  }
  static OnRemoveEvents() {
    EventSystem_1.EventSystem.Remove(
      EventDefine_1.EEventName.ChangePlayerInfoId,
      AntiCheatController.Aje
    ),
      EventSystem_1.EventSystem.Remove(
        EventDefine_1.EEventName.SendHeartbeat,
        AntiCheatController.Pje
      );
  }
  static xje() {}
}
(exports.AntiCheatController = AntiCheatController),
  ((_a = AntiCheatController).Bje = 0),
  (AntiCheatController.bje = 0),
  (AntiCheatController.yxl = !1),
  (AntiCheatController.Aje = () => {}),
  (AntiCheatController.Pje = () => {
    var e = TimeUtil_1.TimeUtil.GetServerTimeStamp(),
      t =
        (0.001 * (e - AntiCheatController.bje) >= HEARTBEAT_REPORT_INTERVAL &&
          (ModelManager_1.ModelManager.AntiCheatModel.HasHeartbeatException() &&
            void 0 !== (t = ModelManager_1.ModelManager.AntiCheatModel.GetHeartbeatData()),
          (AntiCheatController.bje = e)),
        e - AntiCheatController.Bje),
      r = Heartbeat_1.Heartbeat.GetHeartbeatInterval(),
      r = HEARTBEAT_EXCEPTION_FACTOR * r;
    0 < AntiCheatController.Bje &&
      t <= r &&
      (ModelManager_1.ModelManager.AntiCheatModel.HitHeartbeatException(),
      Log_1.Log.CheckDebug()) &&
      Log_1.Log.Debug("Net", 21, "心跳过快"),
      (AntiCheatController.Bje = e);
  });
//# sourceMappingURL=AntiCheatController.js.map
