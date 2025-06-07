"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.AceAntiCheatController = void 0);
const Log_1 = require("../../../Core/Common/Log"),
  Time_1 = require("../../../Core/Common/Time"),
  Protocol_1 = require("../../../Core/Define/Net/Protocol"),
  ControllerBase_1 = require("../../../Core/Framework/ControllerBase"),
  Net_1 = require("../../../Core/Net/Net"),
  TimerSystem_1 = require("../../../Core/Timer/TimerSystem"),
  MathUtils_1 = require("../../../Core/Utils/MathUtils"),
  EventDefine_1 = require("../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../Common/Event/EventSystem"),
  TimeUtil_1 = require("../../Common/TimeUtil"),
  Global_1 = require("../../Global"),
  InputController_1 = require("../../Input/InputController"),
  InputEnums_1 = require("../../Input/InputEnums"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  CharacterAttributeTypes_1 = require("../../NewWorld/Character/Common/Component/Abilities/CharacterAttributeTypes"),
  POSTICKTIME = 1e3,
  POSTICKCOUNT = 120,
  MINSPEEDINIT = 999999;
class AceAntiCheatController extends ControllerBase_1.ControllerBase {
  static OnInit() {
    return Net_1.Net.Register(27352, AceAntiCheatController.PTa), !0;
  }
  static OnClear() {
    return Net_1.Net.UnRegister(27352), !0;
  }
  static OnTick(t) {}
  static YNr() {}
  static NTa(t) {}
  static QTa(t) {}
  static YTa(t) {
    (this.wTa = t), (this.bTa = 0), (this.BTa = 0), (this.nun = 0), (this.qTa = MINSPEEDINIT);
  }
  static ZTa(t) {}
  static nLa(t) {}
  static hLa(t) {}
  static aLa() {}
  static lLa(t, e) {}
  static pLa(t) {}
  static MLa(t) {}
  static SLa(t, e) {}
  static ILa(t) {}
  static TLa(t) {}
  static DLa(t) {}
  static jhh(t) {}
  static Whh() {}
  static HandlePress(t, e) {
    this.LZo(t, e);
  }
}
(exports.AceAntiCheatController = AceAntiCheatController),
  ((_a = AceAntiCheatController).FTa = -1n),
  (AceAntiCheatController.sLa = -1n),
  (AceAntiCheatController.vLa = -1n),
  (AceAntiCheatController.ELa = -1n),
  (AceAntiCheatController.LLa = -1n),
  (AceAntiCheatController.whh = void 0),
  (AceAntiCheatController.PTa = (t) => {}),
  (AceAntiCheatController.VTa = 0),
  (AceAntiCheatController.BTa = 0),
  (AceAntiCheatController.qTa = 0),
  (AceAntiCheatController.nun = 0),
  (AceAntiCheatController.bTa = 0),
  (AceAntiCheatController.wTa = !1),
  (AceAntiCheatController.GTa = !1),
  (AceAntiCheatController.kTa = 0),
  (AceAntiCheatController._La = void 0),
  (AceAntiCheatController.OTa = void 0),
  (AceAntiCheatController.mLa = 0),
  (AceAntiCheatController.dLa = void 0),
  (AceAntiCheatController.qbr = (t, e, o) => {}),
  (AceAntiCheatController.Uie = (t, e, o, i) => {}),
  (AceAntiCheatController.LZo = (t, e) => {}),
  (AceAntiCheatController.xie = (t, e) => {}),
  (AceAntiCheatController.yLa = void 0);
//# sourceMappingURL=AceAntiCheatController.js.map
