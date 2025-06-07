"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.MapController = void 0);
const UE = require("ue"),
  Log_1 = require("../../../../Core/Common/Log"),
  QueryTypeDefine_1 = require("../../../../Core/Define/QueryTypeDefine"),
  Rotator_1 = require("../../../../Core/Utils/Math/Rotator"),
  Vector_1 = require("../../../../Core/Utils/Math/Vector"),
  Vector2D_1 = require("../../../../Core/Utils/Math/Vector2D"),
  TraceElementCommon_1 = require("../../../../Core/Utils/TraceElementCommon"),
  EventDefine_1 = require("../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../Common/Event/EventSystem"),
  GlobalData_1 = require("../../../GlobalData"),
  ConfigManager_1 = require("../../../Manager/ConfigManager"),
  ModelManager_1 = require("../../../Manager/ModelManager"),
  ControllerWithAssistantBase_1 = require("../../GeneralLogicTree/ControllerAssistant/ControllerWithAssistantBase"),
  AreaAssistant_1 = require("./AreaAssistant"),
  MarkAssistant_1 = require("./MarkAssistant"),
  TeleportAssistant_1 = require("./TeleportAssistant"),
  SCALE_XY = 100,
  SCALE_Z = 1e6,
  PROFILE_KEY = "WorldMapView_CreateNewCustomMarkItem",
  ModManager_1 = require("../../../Manager/ModManager"),
  assistantMap = { [0]: void 0, 1: void 0, 2: void 0 };
class LineTraceSaver {
  constructor() {
    this.uoe = void 0;
  }
  InitTrackInfo() {
    (this.uoe = UE.NewObject(UE.TraceLineElement.StaticClass())),
      (this.uoe.WorldContextObject = GlobalData_1.GlobalData.World),
      (this.uoe.bIsSingle = !0),
      (this.uoe.bIgnoreSelf = !0),
      this.uoe.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.IkGround);
  }
  GetMarkPosition(e, t) {
    this.uoe || this.InitTrackInfo();
    let r = void 0;
    this.uoe.SetStartLocation(e * SCALE_XY, t * SCALE_XY, SCALE_Z),
      this.uoe.SetEndLocation(e * SCALE_XY, t * SCALE_XY, -SCALE_Z);
    var a = TraceElementCommon_1.TraceElementCommon.LineTrace(this.uoe, PROFILE_KEY),
      o = this.uoe.HitResult;
    return (
      a &&
        o.bBlockingHit &&
        ((a = o.LocationZ_Array.Get(0)), (a /= SCALE_XY), (r = Vector_1.Vector.Create(e, t, a))),
      (ModManager_1.ModManager.settings.MarkX = e),
      (ModManager_1.ModManager.settings.MarkY = t),
      (ModManager_1.ModManager.settings.MarkZ = a),
      r
    );
  }
  OnClear() {
    this.uoe = void 0;
  }
}
class MapController extends ControllerWithAssistantBase_1.ControllerWithAssistantBase {
  static OnInit() {
    var e = super.OnInit();
    return (this.NLi = new LineTraceSaver()), e;
  }
  static OnClear() {
    return this.NLi.OnClear(), super.OnClear();
  }
  static OnAddEvents() {
    super.OnAddEvents(),
      EventSystem_1.EventSystem.Add(
        EventDefine_1.EEventName.WorldDoneAndCloseLoading,
        MapController.nye
      ),
      EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnEnterOnlineWorld, MapController.pze),
      EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnLeaveOnlineWorld, MapController.Mze);
  }
  static OnRemoveEvents() {
    EventSystem_1.EventSystem.Remove(
      EventDefine_1.EEventName.WorldDoneAndCloseLoading,
      MapController.nye
    ),
      EventSystem_1.EventSystem.Remove(
        EventDefine_1.EEventName.OnEnterOnlineWorld,
        MapController.pze
      ),
      EventSystem_1.EventSystem.Remove(
        EventDefine_1.EEventName.OnLeaveOnlineWorld,
        MapController.Mze
      ),
      super.OnRemoveEvents();
  }
  static RegisterAssistant() {
    this.Assistants.set(0, new MarkAssistant_1.MarkAssistant()),
      this.Assistants.set(1, new TeleportAssistant_1.TeleportAssistant()),
      this.Assistants.set(2, new AreaAssistant_1.AreaAssistant());
  }
  static cYt(e) {
    if (this.Assistants) return this.Assistants.get(e);
  }
  static OLi() {
    ModelManager_1.ModelManager.TrackModel.ClearTrackData(),
      ModelManager_1.ModelManager.MapModel.SetCurTrackMark(void 0);
  }
  static async kLi() {
    await this.RequestMapData(),
      EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ModelReady);
  }
  static async RequestMapData() {
    Log_1.Log.CheckDebug() && Log_1.Log.Debug("Map", 34, "开始请求地图数据"),
      await MapController.cYt(0).RequestTrackInfo(),
      await MapController.cYt(1).RequestTeleportData(),
      await MapController.cYt(2).RequestUnlockedAreaInfo(),
      Log_1.Log.CheckDebug() && Log_1.Log.Debug("Map", 34, "结束请求地图数据");
  }
  static GetMarkPosition(e, t) {
    return this.NLi.GetMarkPosition(e, t);
  }
  static GetNewCustomMarkPosition(e, t) {
    var r,
      a,
      o = MapController.GetMarkPosition(e, t);
    return !o ||
      ((a = (r =
        ConfigManager_1.ConfigManager.WorldMapConfig.GetCommonIntArray("MarkCollisionRange"))[0]),
      (r = r[1]),
      (a = o.Z >= a && o.Z <= r),
      o && !a)
      ? Vector2D_1.Vector2D.Create(e, -t)
      : (a ||
          (Log_1.Log.CheckWarn() &&
            Log_1.Log.Warn("Map", 63, "MapController.GetNewCustomMarkPosition()", [
              "自定义地图标记不在有效范围 Z轴坐标:",
              o.Z,
            ])),
        o);
  }
  static RequestMapMarkReplace(e, t) {
    MapController.cYt(0).RequestMapMarkReplace(e, t);
  }
  static RequestCreateCustomMark(e, t) {
    MapController.cYt(0).RequestCreateCustomMark(e, t);
  }
  static RequestRemoveMapMarks(e, t) {
    var r = ModelManager_1.ModelManager.MapModel.GetCurTrackMark();
    for (const a of t)
      r &&
        r.MarkType === e &&
        r.MarkId === a &&
        ModelManager_1.ModelManager.MapModel.SetCurTrackMark(void 0);
    MapController.cYt(0).RequestRemoveMapMarks(e, t);
  }
  static RequestTrackMapMark(e, t) {
    void 0 === e.TrackMode &&
      (9 === e.MarkType ||
      void 0 !== ConfigManager_1.ConfigManager.MapConfig.GetConfigMark(e.MarkId)
        ? (e.TrackMode = 1)
        : (e.TrackMode = 0)),
      e.Track
        ? (this.UCc(e), 1 === e.TrackMode ? this.DCc(e, t) : this.BCc(e, t))
        : 1 === e.TrackMode
          ? this.kCc(e, t)
          : this.OCc(e, t);
  }
  static UCc(e) {
    var t = ModelManager_1.ModelManager.MapModel.GetCurTrackMark();
    void 0 === t ||
      (t.MarkType === e.MarkType && t.MarkId === e.MarkId) ||
      (1 === t.TrackMode ? this.kCc(t) : this.OCc(t));
  }
  static DCc(e, t) {
    MapController.cYt(0).RequestTrackMapMark(e.MarkType, e.MarkId, t),
      ModelManager_1.ModelManager.MapModel.SetCurTrackMark(e);
  }
  static BCc(e, t) {
    ModelManager_1.ModelManager.MapModel.SetCurTrackMark(e),
      ModelManager_1.ModelManager.MapModel.SetTrackMark(e.MarkType, e.MarkId, e.Track),
      t?.(0, !0);
  }
  static kCc(e, t) {
    ModelManager_1.ModelManager.MapModel.SetCurTrackMark(void 0),
      MapController.cYt(0).RequestCancelTrackMapMark(e.MarkType, e.MarkId, t);
  }
  static OCc(e, t) {
    ModelManager_1.ModelManager.MapModel.SetCurTrackMark(void 0),
      ModelManager_1.ModelManager.MapModel.SetTrackMark(e.MarkType, e.MarkId, !1),
      t?.(0, !1);
  }
  static UpdateCustomMapMarkPosition(e, t) {
    MapController.cYt(0).UpdateCustomMapMarkPosition(e, t);
  }
  static RequestTrackEnrichmentArea(e) {
    MapController.cYt(0).RequestTrackEnrichmentArea(e);
  }
  static RequestTeleportToTargetByTemporaryTeleport(e, t) {
    var r = ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity;
    r?.Valid &&
      (r = r.Entity.GetComponent(3)) &&
      MapController.cYt(0).RequestTeleportToTargetByTemporaryTeleport(
        e,
        Rotator_1.Rotator.Create(r.ActorRotationProxy),
        t
      );
  }
  static ForceSetMarkVisible(e, t, r) {
    ModelManager_1.ModelManager.MapModel.ForceSetMarkVisible(e, t, r),
      EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.MarkForceVisibleChanged, e, t, r);
  }
  static OpenMapViewAndFocusMark(e, t, r, a = !0, o = 1) {
    MapController.cYt(0).OpenMapViewAndFocus(e, t, r, a, o);
  }
}
(exports.MapController = MapController),
  ((_a = MapController).NLi = void 0),
  (MapController.nye = () => {
    MapController.kLi();
  }),
  (MapController.pze = () => {
    _a.OLi();
  }),
  (MapController.Mze = () => {
    _a.OLi();
  });
//# sourceMappingURL=MapController.js.map
