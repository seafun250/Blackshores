"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.TrackedMark = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Log_1 = require("../../../../Core/Common/Log"),
  CommonDefine_1 = require("../../../../Core/Define/CommonDefine"),
  CommonParamById_1 = require("../../../../Core/Define/ConfigCommon/CommonParamById"),
  Protocol_1 = require("../../../../Core/Define/Net/Protocol"),
  TimerSystem_1 = require("../../../../Core/Timer/TimerSystem"),
  Rotator_1 = require("../../../../Core/Utils/Math/Rotator"),
  Vector_1 = require("../../../../Core/Utils/Math/Vector"),
  Vector2D_1 = require("../../../../Core/Utils/Math/Vector2D"),
  EventDefine_1 = require("../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../Common/Event/EventSystem"),
  Global_1 = require("../../../Global"),
  GlobalData_1 = require("../../../GlobalData"),
  ControllerHolder_1 = require("../../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../../Manager/ModelManager"),
  UiPanelBase_1 = require("../../../Ui/Base/UiPanelBase"),
  UiLayer_1 = require("../../../Ui/UiLayer"),
  LevelSequencePlayer_1 = require("../../Common/LevelSequencePlayer"),
  GeneralLogicTreeUtil_1 = require("../../GeneralLogicTree/GeneralLogicTreeUtil"),
  MapController_1 = require("../../Map/Controller/MapController"),
  MapDefine_1 = require("../../Map/MapDefine"),
  MapUtil_1 = require("../../Map/MapUtil"),
  TaskTrackedMarkItem_1 = require("../../Map/Marks/MarkItem/TaskTrackedMarkItem"),
  ScrollingTipsController_1 = require("../../ScrollingTips/ScrollingTipsController"),
  LguiUtil_1 = require("../../Util/LguiUtil"),
  ModMethod_1 = require("../../../Manager/ModFuncs/ModMethod"),
  BattleUiControl_1 = require("../BattleUiControl"),
  CENTER_Y = 62.5,
  MAX_A = 1176,
  MARGIN_A = 1008,
  MAX_B = 712.5,
  MARGIN_B = 495,
  center = Vector2D_1.Vector2D.Create(0, CENTER_Y),
  RAD_2_DEG = 180 / Math.PI,
  WAVE_COLOR_NEAR = "86FF83",
  WAVE_COLOR_MIDDLE = "FFE683",
  WAVE_COLOR_FAR = "FFFFFF",
  VARNAME_WAVE_CYCLE_TIME = "LifeTime",
  VARNAME_WAVE_NUM_SCALE = "Scale",
  VARNAME_WAVE_COLOR = "Color",
  VARNAME_WAVE_ROTATION = "Rotation",
  DELAY_TIME = 500,
  SUB_SCALE = 0.8,
  QUEST_TRACK_MARK_INDEX = 999;
class TrackedMark extends UiPanelBase_1.UiPanelBase {
  constructor(t) {
    var i;
    super(),
      (this.TrackTarget = void 0),
      (this.$pl = 0),
      (this.IsSubTrack = !1),
      (this.ihl = void 0),
      (this.rhl = !1),
      (this.pCt = !1),
      (this.xst = ""),
      (this.y$e = 0),
      (this.I$e = 0),
      (this.ScreenPositionRef = (0, puerts_1.$ref)(void 0)),
      (this.PointTransport = Vector2D_1.Vector2D.Create(1, -1)),
      (this.MarkHideDis = 0),
      (this.vCt = 0),
      (this.MCt = 0),
      (this.ohl = 0),
      (this.ECt = 0),
      (this.SCt = void 0),
      (this.IsInTrackRange = !1),
      (this.TempTrackPosition = void 0),
      (this.ScreenPosition = void 0),
      (this.LastScreenPosition = void 0),
      (this.InRange = !1),
      (this.TempRotator = void 0),
      (this.LCt = 0),
      (this.DCt = -1),
      (this.ShouldShowTrackMark = !0),
      (this.RCt = void 0),
      (this.yB = Vector_1.Vector.Create()),
      (this.ACt = !1),
      (this.PCt = !1),
      (this.xCt = void 0),
      (this.DirectionComp = void 0),
      (this.BCt = void 0),
      (this.bCt = void 0),
      (this.NiagaraNeedActivateNextTick = !1),
      (this.GCt = -0),
      (this.NCt = -0),
      (this.CurShowTime = -0),
      (this.kCt = -0),
      (this.FCt = !1),
      (this.IsForceHideDirection = !1),
      (this.HCt = !1),
      (this.jCt = !1),
      (this.WCt = 0),
      (this.KCt = 0),
      (this.QCt = 0),
      (this.XCt = 0),
      (this.Wza = void 0),
      (this._Fl = !1),
      (this.ilt = () => {
        var t = MapUtil_1.MapUtil.GetTrackPositionByTrackTarget(this.TrackTarget, !0);
        t && BattleUiControl_1.BattleUiControl.FocusToTargetLocation(t);
      }),
      (this.Tct = (t) => {
        "Start" === t && (this.PCt = !1);
      }),
      (this.VZa = [2, 4, 3]),
      (this.$Ct = (t) => {
        t !== Protocol_1.Aki.Protocol.hps.Proto_BtTypeQuest || this.IsInTrackRange || this.YCt();
      }),
      (this.JCt = (t, i, e) => {
        6 === t.Type && t.BtType === Protocol_1.Aki.Protocol.hps.Proto_BtTypeQuest && this.YCt();
      }),
      (this.zCt = (t) => {
        Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug(
            "Map",
            39,
            "[TrackedMark] [疑难杂症] 播放点声源特效",
            ["MarkId", this.MCt],
            ["EffectDuration", t],
            ["TrackType", this.WCt],
            ["UIActiveSelf", this.RootItem?.IsUIActiveSelf()]
          ),
          1 !== this.WCt ||
            t <= 0 ||
            (this.RootItem.IsUIActiveSelf() &&
              (this.ZCt(),
              (this.GCt = t / CommonDefine_1.MILLIONSECOND_PER_SECOND),
              (this.NCt = 0),
              (this.NiagaraNeedActivateNextTick = !0)));
      }),
      (this.YCt = () => {
        var t;
        this.RCt &&
          ((t = this.RCt.GetCurrentSequence()),
          this.jCt
            ? ("Start" !== t && this.RCt.PlayLevelSequenceByName("Start"),
              this.RCt.StopCurrentSequence(!0, !0))
            : "Start" !== t &&
              this.BCt.bIsUIActive &&
              ((this.CurShowTime = 0), this.RCt.PlayLevelSequenceByName("Start")));
      }),
      (this.egt = (t, i, e, s, h) => {
        t === this.ECt && s === this.MCt && ((this.IsInTrackRange = h), this.BCt?.SetUIActive(!h));
      }),
      GlobalData_1.GlobalData.World &&
        ((this.ECt = t.TrackSource),
        (this.xst = t.IconPath),
        (this.vCt = t.ShowGroupId),
        (this.MCt = t.Id),
        (this.ohl = t.MarkType ?? 0),
        (i = ModelManager_1.ModelManager.MapModel.GetDynamicMark(this.MCt)) instanceof
          MapDefine_1.QuestMarkCreateInfo &&
          (this.Wza = new TaskTrackedMarkItem_1.TaskTrackedMarkItem(i, this.ECt)),
        -1 !== t.TrackAutoCancelDistance &&
          void 0 !== t.TrackAutoCancelDistance &&
          (this.ihl = t.TrackAutoCancelDistance * MapDefine_1.FLOAT_0_01),
        (this.rhl = !1),
        (this.MarkHideDis = t.TrackHideDis),
        (this.TrackTarget = t.TrackTarget),
        (this.$pl =
          t.TrackInstanceId ?? ModelManager_1.ModelManager.GameModeModel.InstanceDungeon.Id),
        (this.IsInTrackRange = t.IsInTrackRange ?? !1),
        (this.ACt = t.AutoHideTrack ?? !1),
        (this.kCt =
          CommonParamById_1.configCommonParamById.GetIntConfig("QuestMarkTrackStayTime") ?? 10),
        (this.yB = t.Offset ?? Vector_1.Vector.Create()),
        (this.GCt = 0),
        (this.NCt = 0),
        (this.NiagaraNeedActivateNextTick = !1),
        (this.IsSubTrack = t.IsSubTrack ?? !1),
        (this.WCt = t.TrackType ?? 0),
        1 === this.WCt
          ? ((this.FCt = !0),
            (this.IsForceHideDirection = !0),
            (this.jCt = !0),
            (this.HCt = !0),
            (i = ModelManager_1.ModelManager.CreatureModel.GetEntityById(
              this.MCt
            )?.Entity?.GetComponent(158)),
            (this.KCt = (i?.AudioPointNearRadius ?? 0) * MapDefine_1.FLOAT_0_01),
            (this.QCt = (i?.AudioPointMiddleRadius ?? 0) * MapDefine_1.FLOAT_0_01),
            (this.XCt = (i?.AudioPointFarRadius ?? 0) * MapDefine_1.FLOAT_0_01))
          : ((this.FCt = !1), (this.IsForceHideDirection = !1), (this.jCt = !1), (this.HCt = !1)),
        (this.TempTrackPosition = Vector_1.Vector.Create()),
        (this.ScreenPosition = Vector2D_1.Vector2D.Create()),
        (this.LastScreenPosition = Vector2D_1.Vector2D.Create()),
        (this.TempRotator = Rotator_1.Rotator.Create()),
        (t = UiLayer_1.UiLayer.UiRootItem),
        (this.y$e = Math.min(MAX_A, ((t?.GetWidth() ?? 0) - MARGIN_A) / 2)),
        (this.I$e = Math.min(MAX_B, ((t?.GetHeight() ?? 0) - MARGIN_B) / 2)),
        EventSystem_1.EventSystem.Add(
          EventDefine_1.EEventName.TaskRangeTrackStateChange,
          this.egt
        ));
  }
  Initialize(t) {
    this.CreateThenShowByResourceIdAsync("UiItem_Mark_Prefab", t, !0);
  }
  CreateMark() {
    (this.PCt = !0), this.YCt();
  }
  OnRegisterComponent() {
    (this.ComponentRegisterInfos = [
      [0, UE.UISprite],
      [1, UE.UIText],
      [2, UE.UIItem],
      [3, UE.UIButtonComponent],
      [4, UE.UIItem],
      [5, UE.UINiagara],
      [6, UE.UIItem],
    ]),
      (this.BtnBindInfo = [[3, this.ilt]]);
  }
  OnStart() {
    (this.xCt = this.GetItem(4)),
      (this.DirectionComp = this.GetItem(2)),
      (this.BCt = this.GetItem(6)),
      this.xCt.SetUIActive(!this.IsInTrackRange && !this.FCt),
      this.DirectionComp.SetUIActive(!this.IsInTrackRange && !this.IsForceHideDirection),
      this.BCt.SetUIActive(!1),
      (this.RCt = new LevelSequencePlayer_1.LevelSequencePlayer(this.RootItem)),
      this.RCt.BindSequenceCloseEvent(this.Tct),
      (this.bCt = this.GetUiNiagara(5)),
      this.bCt.SetUIActive(!1),
      this.ehi(!0),
      this.BCt.SetUIActive(!this.IsInTrackRange && !this.HCt),
      5 === this.ECt && this.RootItem?.SetHierarchyIndex(QUEST_TRACK_MARK_INDEX),
      this.CreateMark(),
      this.OnUiShow();
  }
  OnBeforeDestroy() {
    (this.TrackTarget = void 0),
      (this.Wza = void 0),
      (this.PointTransport = void 0),
      this.RCt?.Clear(),
      (this.RCt = void 0),
      TimerSystem_1.TimerSystem.Has(this.SCt) && TimerSystem_1.TimerSystem.Remove(this.SCt),
      EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.TaskRangeTrackStateChange, this.egt) &&
        EventSystem_1.EventSystem.Remove(
          EventDefine_1.EEventName.TaskRangeTrackStateChange,
          this.egt
        ),
      EventSystem_1.EventSystem.Has(
        EventDefine_1.EEventName.OnLogicTreeNodeStatusChange,
        this.JCt
      ) &&
        EventSystem_1.EventSystem.Remove(
          EventDefine_1.EEventName.OnLogicTreeNodeStatusChange,
          this.JCt
        ),
      EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnLogicTreeTrackUpdate, this.$Ct) &&
        EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnLogicTreeTrackUpdate, this.$Ct);
  }
  OnUiShow() {
    var t;
    1 === this.WCt &&
      (t = ModelManager_1.ModelManager.CreatureModel.GetEntityById(this.MCt)) &&
      !EventSystem_1.EventSystem.HasWithTarget(
        t.Entity,
        EventDefine_1.EEventName.PlaySoundTrackEffect,
        this.zCt
      ) &&
      EventSystem_1.EventSystem.AddWithTarget(
        t.Entity,
        EventDefine_1.EEventName.PlaySoundTrackEffect,
        this.zCt
      ),
      (this.SCt = TimerSystem_1.TimerSystem.Delay(this.YCt, DELAY_TIME)),
      EventSystem_1.EventSystem.Has(
        EventDefine_1.EEventName.OnLogicTreeNodeStatusChange,
        this.JCt
      ) ||
        EventSystem_1.EventSystem.Add(
          EventDefine_1.EEventName.OnLogicTreeNodeStatusChange,
          this.JCt
        ),
      EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnLogicTreeTrackUpdate, this.$Ct) ||
        EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnLogicTreeTrackUpdate, this.$Ct),
      this.IsSubTrack
        ? this.RootItem?.SetRelativeScale3D(new UE.Vector(SUB_SCALE, SUB_SCALE, SUB_SCALE))
        : this.RootItem?.SetRelativeScale3D(new UE.Vector(1, 1, 1));
  }
  OnUiHide() {
    var t;
    1 === this.WCt &&
      (t = ModelManager_1.ModelManager.CreatureModel.GetEntityById(this.MCt)) &&
      EventSystem_1.EventSystem.HasWithTarget(
        t.Entity,
        EventDefine_1.EEventName.PlaySoundTrackEffect,
        this.zCt
      ) &&
      EventSystem_1.EventSystem.RemoveWithTarget(
        t.Entity,
        EventDefine_1.EEventName.PlaySoundTrackEffect,
        this.zCt
      ),
      EventSystem_1.EventSystem.Has(
        EventDefine_1.EEventName.OnLogicTreeNodeStatusChange,
        this.JCt
      ) &&
        EventSystem_1.EventSystem.Remove(
          EventDefine_1.EEventName.OnLogicTreeNodeStatusChange,
          this.JCt
        ),
      EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnLogicTreeTrackUpdate, this.$Ct) &&
        EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnLogicTreeTrackUpdate, this.$Ct);
  }
  UpdateTrackTarget(t) {
    this.TrackTarget = t;
  }
  ehi(t = !1) {
    var i = ModelManager_1.ModelManager.TrackModel.GetTrackData(this.ECt, this.MCt);
    void 0 !== i && ((i = i.IconPath), (t = t || i !== this.xst), (this.xst = i)),
      t && this.xst && this.SetSpriteByPath(this.xst, this.GetSprite(0), !1);
  }
  SetVisibleByOccupied(t) {
    this.pCt = t;
  }
  UpdateTrackDistance() {
    var t,
      i = GeneralLogicTreeUtil_1.GeneralLogicTreeUtil.GetPlayerLocation();
    i &&
      (MapUtil_1.MapUtil.GetTrackPositionByTrackTarget(
        this.TrackTarget,
        !0,
        this.TempTrackPosition,
        this.$pl
      ),
      !this.yB.Equals(Vector_1.Vector.ZeroVectorProxy) &&
        this.TrackTarget instanceof UE.Actor &&
        this.TrackTarget.IsValid() &&
        ((t = Vector_1.Vector.Create()).FromUeVector(
          this.TrackTarget.D_GetTransform().TransformPositionNoScale(this.yB.ToUeVector())
        ),
        (this.TempTrackPosition = t)),
      (t = Vector_1.Vector.Distance(i, this.TempTrackPosition) * MapDefine_1.FLOAT_0_01),
      (this.LCt = t),
      ModelManager_1.ModelManager.TrackModel.UpdateGroupMinDistance(this.vCt, t)),
      ModMethod_1.ModMethod.UpdateTrackedQuest(this.ECt);
  }
  Update(t) {
    var i, e, s;
    GlobalData_1.GlobalData.World
      ? UiLayer_1.UiLayer.UiRootItem
        ? this.RootItem &&
          (this.Wza && this.Wza.Update(),
          (i = this.LCt),
          this.rhl ||
            (this.ihl &&
              this.ihl >= i &&
              (0 !== this.ohl
                ? (MapController_1.MapController.RequestTrackMapMark(
                    { MarkType: this.ohl, MarkId: this.MCt, Track: !1 },
                    (t, i) => {
                      0 === t &&
                        ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId(
                          "MapTrackingCanceled_Text"
                        );
                    }
                  ),
                  (this.rhl = !0))
                : Log_1.Log.CheckError() &&
                  Log_1.Log.Error(
                    "Map",
                    63,
                    "[追踪标记]->自动取消标记追踪失败，请检查配置或是否逻辑漏传参数",
                    ["MarkType", this.ohl],
                    ["MarkId", this.MCt]
                  ))),
          (this.CurShowTime += t / CommonDefine_1.MILLIONSECOND_PER_SECOND),
          (e = (s = this.tgt()) !== this._Fl),
          (this._Fl = s),
          this._Fl
            ? (e && this.ehi(),
              i < this.MarkHideDis && !this.PCt
                ? (this.RootItem.SetUIActive(!1), 1 === this.WCt && this.ZCt())
                : (this.RootItem.SetUIActive(!0),
                  this.UpdatePositionAndRotation(t),
                  !this.InRange || this.IsInTrackRange || this.FCt
                    ? this.xCt.SetUIActive(!1)
                    : ((s = Math.round(i)),
                      this.DCt !== s &&
                        ((this.DCt = s),
                        LguiUtil_1.LguiUtil.SetLocalTextNew(
                          this.GetText(1),
                          "Text_Meter_Text",
                          this.DCt.toString()
                        )),
                      this.xCt.SetUIActive(!0)),
                  1 === this.WCt && this.ogt(t),
                  this.BCt.SetUIActive(!this.IsInTrackRange && !this.HCt)))
            : this.RootItem.SetUIActive(!1))
        : Log_1.Log.CheckError() &&
          Log_1.Log.Error("Map", 63, "【疑难杂症】标记固定在屏幕中心，RootItem为空")
      : Log_1.Log.CheckError() &&
        Log_1.Log.Error("Map", 63, "【疑难杂症】标记固定在屏幕中心，GameWorld为空");
  }
  UpdatePositionAndRotation(t) {
    var i,
      e = Global_1.Global.CharacterController,
      s = this.TempTrackPosition.ToUeVector(),
      h = UE.GameplayStatics.D_ProjectWorldToScreen(e, s, this.ScreenPositionRef),
      s =
        (h ||
          (((s = (i =
            ModelManager_1.ModelManager.CameraModel
              .CameraTransform).InverseTransformPositionNoScale(s)).X = -s.X),
          (i = i.TransformPositionNoScale(s)),
          UE.GameplayStatics.D_ProjectWorldToScreen(e, i, this.ScreenPositionRef)),
        (0, puerts_1.$unref)(this.ScreenPositionRef));
    this.ScreenPosition.Set(s.X, s.Y),
      (this.LastScreenPosition.Equals(this.ScreenPosition, 1) &&
        !this.NiagaraNeedActivateNextTick) ||
        (this.LastScreenPosition.DeepCopy(this.ScreenPosition),
        (e = ModelManager_1.ModelManager.BattleUiModel),
        this.ScreenPosition.MultiplyEqual(e.ScreenPositionScale)
          .AdditionEqual(e.ScreenPositionOffset)
          .MultiplyEqual(this.PointTransport),
        (this.InRange = this.ClampToEllipse(this.ScreenPosition, h)),
        (i = this.ScreenPosition.AdditionEqual(center)),
        this.RootItem.SetAnchorOffset(i.ToUeVector2D()),
        this.InRange || this.IsInTrackRange || this.IsForceHideDirection
          ? this.DirectionComp.SetUIActive(!1)
          : (this.TempRotator.Reset(),
            (this.TempRotator.Yaw =
              Math.atan2(this.ScreenPosition.Y, this.ScreenPosition.X) * RAD_2_DEG),
            this.DirectionComp.SetUIRelativeRotation(this.TempRotator.ToUeRotator()),
            this.DirectionComp.SetUIActive(!0)),
        this.InRange || 1 !== this.WCt
          ? this.bCt.SetNiagaraVarFloat(VARNAME_WAVE_ROTATION, 0.25)
          : ((s = Math.atan2(this.ScreenPosition.Y, this.ScreenPosition.X) / (2 * Math.PI)),
            this.bCt.SetNiagaraVarFloat(VARNAME_WAVE_ROTATION, s)));
  }
  MoveTowards(t, i, e) {
    var s = i.X - t.X,
      i = i.Y - t.Y,
      h = Math.sqrt(s * s + i * i),
      i = Math.atan2(i, s),
      s = (e * Math.abs(h)) / (h + 1);
    return new Vector2D_1.Vector2D(t.X + s * Math.cos(i), t.Y + s * Math.sin(i));
  }
  tgt() {
    if (this.pCt) return !1;
    if (this.ACt && this.CurShowTime > this.kCt) return !1;
    if (this.Wza && this.Wza.TargetInDiffWorld()) return !1;
    if (
      !ModelManager_1.ModelManager.TrackModel.CanShowInGroup(this.vCt, this.LCt) ||
      !this.ShouldShowTrackMark
    )
      return !1;
    if (
      "number" == typeof this.TrackTarget &&
      !ModelManager_1.ModelManager.CreatureModel.CheckEntityVisible(this.TrackTarget)
    )
      return !1;
    if (ControllerHolder_1.ControllerHolder.GameModeController.IsInInstance()) {
      let t = !1;
      for (const i of this.VZa)
        if ((t = t || ModelManager_1.ModelManager.TrackModel.IsTracking(i, this.MCt))) break;
      return t;
    }
    return ModelManager_1.ModelManager.TrackModel.IsTracking(this.ECt, this.MCt);
  }
  ClampToEllipse(t, i) {
    var e = t.X,
      s = t.Y,
      h = this.y$e,
      r = this.I$e;
    return (
      !!(i && (e * e) / (h * h) + (s * s) / (r * r) <= 1) ||
      ((i = (h * r) / Math.sqrt(r * r * e * e + h * h * s * s)), t.MultiplyEqual(i), !1)
    );
  }
  ogt(t) {
    1 === this.WCt &&
      (this.bCt.IsUIActiveSelf() || this.NiagaraNeedActivateNextTick) &&
      (this.NiagaraNeedActivateNextTick &&
        ((this.NiagaraNeedActivateNextTick = !1),
        this.bCt.SetNiagaraVarFloat(VARNAME_WAVE_CYCLE_TIME, this.GCt),
        this.LCt <= this.KCt
          ? (this.bCt.SetNiagaraVarFloat(VARNAME_WAVE_NUM_SCALE, 1),
            this.bCt.SetNiagaraVarLinearColor(
              VARNAME_WAVE_COLOR,
              new UE.LinearColor(UE.Color.FromHex(WAVE_COLOR_NEAR))
            ))
          : this.LCt > this.KCt && this.LCt <= this.QCt
            ? (this.bCt.SetNiagaraVarFloat(VARNAME_WAVE_NUM_SCALE, 2 / 3),
              this.bCt.SetNiagaraVarLinearColor(
                VARNAME_WAVE_COLOR,
                new UE.LinearColor(UE.Color.FromHex(WAVE_COLOR_MIDDLE))
              ))
            : this.LCt > this.QCt &&
              this.LCt <= this.XCt &&
              (this.bCt.SetNiagaraVarFloat(VARNAME_WAVE_NUM_SCALE, 1 / 3),
              this.bCt.SetNiagaraVarLinearColor(
                VARNAME_WAVE_COLOR,
                new UE.LinearColor(UE.Color.FromHex(WAVE_COLOR_FAR))
              )),
        this.bCt.SetNiagaraUIActive(!0, !1),
        this.bCt.ActivateSystem(!1)),
      this.NCt >= this.GCt
        ? this.ZCt()
        : (this.NCt += t / CommonDefine_1.MILLIONSECOND_PER_SECOND));
  }
  ZCt() {
    this.bCt.SetNiagaraUIActive(!1, !0),
      this.bCt.DeactivateSystem(),
      (this.GCt = 0),
      (this.NCt = 0),
      (this.NiagaraNeedActivateNextTick = !1);
  }
}
exports.TrackedMark = TrackedMark;
//# sourceMappingURL=TrackedMark.js.map
