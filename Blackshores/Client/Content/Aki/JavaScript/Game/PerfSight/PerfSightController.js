"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.PerfSightController = void 0);
const cpp_1 = require("cpp"),
  UE = require("ue"),
  Info_1 = require("../../Core/Common/Info"),
  Log_1 = require("../../Core/Common/Log"),
  Stats_1 = require("../../Core/Common/Stats"),
  CommonDefine_1 = require("../../Core/Define/CommonDefine"),
  EntitySystem_1 = require("../../Core/Entity/EntitySystem"),
  ControllerBase_1 = require("../../Core/Framework/ControllerBase"),
  PerfSight_1 = require("../../Core/PerfSight/PerfSight"),
  TimerSystem_1 = require("../../Core/Timer/TimerSystem"),
  EventDefine_1 = require("../Common/Event/EventDefine"),
  EventSystem_1 = require("../Common/Event/EventSystem"),
  LocalStorage_1 = require("../Common/LocalStorage"),
  LocalStorageDefine_1 = require("../Common/LocalStorageDefine"),
  Global_1 = require("../Global"),
  ControllerHolder_1 = require("../Manager/ControllerHolder"),
  ModelManager_1 = require("../Manager/ModelManager"),
  BOSS_TYPE = 2;
class PerfSightController extends ControllerBase_1.ControllerBase {
  static OnInit() {
    if (PerfSight_1.PerfSight.IsEnable) {
      var e = UE.KuroLauncherLibrary.GetAppVersion(),
        e =
          e +
          "_" +
          LocalStorage_1.LocalStorage.GetDeviceSaved(
            LocalStorageDefine_1.ELocalStorageDeviceKey.PatchVersion,
            e
          );
      if (
        (Log_1.Log.CheckInfo() &&
          Log_1.Log.Info("Performance", 54, "当前母包_热更版本号", ["version", e]),
        Info_1.Info.IsPcOrGamepadPlatform())
      )
        PerfSight_1.PerfSight.SetPcAppVersion(e);
      else {
        if (!Info_1.Info.IsMobilePlatform()) return !0;
        PerfSight_1.PerfSight.SetVersionIden(e);
      }
    }
    return !0;
  }
  static OnClear() {
    return (
      PerfSight_1.PerfSight.IsEnable &&
        (PerfSight_1.PerfSight.MarkLevelFin(),
        PerfSightController.aCe(),
        PerfSightController.tca(),
        PerfSightController.Swa()),
      super.OnClear()
    );
  }
  static Swa() {
    if (0 < this.oWe.size) {
      for (const e of this.oWe) this.Ewa(e, !1);
      this.oWe.clear();
    }
  }
  static ica() {
    PerfSightController.tca(),
      PerfSightController.rca
        ? Log_1.Log.CheckError() &&
          Log_1.Log.Error("Performance", 54, "PerfSightController.PositionTimer,请检查")
        : (PerfSightController.rca = TimerSystem_1.RealTimeTimerSystem.Forever(
            PerfSightController.oca,
            CommonDefine_1.MILLIONSECOND_PER_SECOND
          ));
  }
  static tca() {
    PerfSightController.rca &&
      (TimerSystem_1.RealTimeTimerSystem.Remove(PerfSightController.rca),
      (PerfSightController.rca = void 0));
  }
  static sCe() {}
  static aCe() {
    EventSystem_1.EventSystem.Remove(
      EventDefine_1.EEventName.OnGetPlayerBasicInfo,
      PerfSightController.Wvi
    ),
      EventSystem_1.EventSystem.Remove(
        EventDefine_1.EEventName.OnBattleStateChanged,
        PerfSightController.Zpe
      ),
      EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnAggroAdd, this.lWe),
      EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnAggroRemoved, this.cWe);
  }
  static StartPersistentOrDungeon() {
    var e;
    PerfSight_1.PerfSight.MarkLevelFin(),
      Log_1.Log.CheckInfo() && Log_1.Log.Info("Performance", 54, "MarkLevelFin"),
      ControllerHolder_1.ControllerHolder.GameModeController.IsInInstance()
        ? ((e = "Dungeon_" + ModelManager_1.ModelManager.CreatureModel.GetInstanceId()),
          Log_1.Log.CheckInfo() &&
            Log_1.Log.Info("Performance", 54, "开始录制MarkLevelLoad", ["tagName", e]),
          PerfSight_1.PerfSight.MarkLevelLoad(e))
        : (Log_1.Log.CheckInfo() &&
            Log_1.Log.Info("Performance", 54, "开始录制MarkLevelLoad Persistent"),
          PerfSight_1.PerfSight.MarkLevelLoad("Persistent"));
  }
  static MarkLevelLoadCompleted() {
    Log_1.Log.CheckInfo() && Log_1.Log.Info("Performance", 54, "MarkLevelLoadCompleted"),
      PerfSight_1.PerfSight.MarkLevelLoadCompleted();
  }
  static Ewa(e, r) {
    var t,
      o = EntitySystem_1.EntitySystem.Get(e);
    o &&
      (o = o.GetComponent(3)?.CreatureData) &&
      (t = o.GetBaseInfo()) &&
      t.Category.MonsterMatchType >= BOSS_TYPE &&
      (r
        ? (cpp_1.FKuroPerfSightHelper.BeginExtTag(
            `Battle_${o.GetModelConfig().描述}_` + o.GetPbDataId()
          ),
          this.oWe.add(e))
        : (cpp_1.FKuroPerfSightHelper.EndExtTag(
            `Battle_${o.GetModelConfig().描述}_` + o.GetPbDataId()
          ),
          this.oWe.delete(e)));
  }
  static OnTick(e) {}
}
(exports.PerfSightController = PerfSightController),
  ((_a = PerfSightController).IsTickEvenPausedInternal = !0),
  (PerfSightController.rca = void 0),
  (PerfSightController.IsEnable = !0),
  (PerfSightController.oWe = new Set()),
  (PerfSightController.MJ = Stats_1.Stat.Create("PerfSightController.PostFrame")),
  (PerfSightController.oca = () => {}),
  (PerfSightController.Wvi = () => {}),
  (PerfSightController.Zpe = (e) => {
    e
      ? cpp_1.FKuroPerfSightHelper.BeginExtTag("Battle")
      : (cpp_1.FKuroPerfSightHelper.EndExtTag("Battle"), _a.Swa());
  }),
  (PerfSightController.lWe = (e) => {
    for (const r of e) _a.Ewa(r, !0);
  }),
  (PerfSightController.cWe = (e) => {
    for (const r of e) _a.Ewa(r, !1);
  });
//# sourceMappingURL=PerfSightController.js.map
