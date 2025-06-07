"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.UnopenedAreaPullback = void 0);
const Log_1 = require("../../../Core/Common/Log"),
  Protocol_1 = require("../../../Core/Define/Net/Protocol"),
  Net_1 = require("../../../Core/Net/Net"),
  TimerSystem_1 = require("../../../Core/Timer/TimerSystem"),
  Vector_1 = require("../../../Core/Utils/Math/Vector"),
  MathUtils_1 = require("../../../Core/Utils/MathUtils"),
  EventDefine_1 = require("../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../Common/Event/EventSystem"),
  Global_1 = require("../../Global"),
  ControllerHolder_1 = require("../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  CharacterUnifiedStateTypes_1 = require("../../NewWorld/Character/Common/Component/Abilities/CharacterUnifiedStateTypes"),
  SceneEffectStateManager_1 = require("../../Render/Effect/PostProcess/SceneEffectStateManager"),
  UiManager_1 = require("../../Ui/UiManager"),
  DISTANCE_FACOR = 100,
  TOLERANCE_DISTANCE = 5,
  TELEPORT_DELAY_TIME = 2e4,
  TELEPORT_DELAY_TIME_GONDOLA = 5e3,
  END_DISTANCE = 250,
  TIPS_NAME = "NotOpenArea";
class UnopenedAreaPullback {
  constructor() {
    (this.pLe = "Input Limited Action"),
      (this.rBe = TOLERANCE_DISTANCE * DISTANCE_FACOR),
      (this.nBe = !1),
      (this.sBe = !1),
      (this.aBe = !1),
      (this.hBe = !1),
      (this.lBe = void 0),
      (this._Be = Vector_1.Vector.Create()),
      (this.uBe = Vector_1.Vector.Create()),
      (this.jye = Vector_1.Vector.Create()),
      (this.RTe = Vector_1.Vector.Create()),
      (this.Hte = void 0),
      (this.cBe = void 0),
      (this.mBe = void 0),
      (this.dBe = void 0),
      (this.xie = (t, e) => {
        this.hBe &&
          (this.CBe(t), this.sBe) &&
          (e?.Valid && (e.Entity.GetComponent(176).StopMoveToLocation(), this.gBe(e, !1)),
          this.gBe(t, !0),
          this.fBe(t));
      });
  }
  Tick(t) {
    var e, i;
    this.hBe &&
      this.dBe?.Valid &&
      !ModelManager_1.ModelManager.TeleportModel.IsTeleport &&
      ((e = Vector_1.Vector.Dist2D(this._Be, this.Hte.ActorLocationProxy)),
      this.aBe &&
        ((i = MathUtils_1.MathUtils.SafeDivide(e, this.rBe)),
        (i = MathUtils_1.MathUtils.Clamp(i, 0, 1)),
        SceneEffectStateManager_1.default.SetSceneEffectState(0, i)),
      !this.sBe && e > this.rBe
        ? (this.pBe(), this.vBe())
        : this.sBe && e < END_DISTANCE && this.MBe() && this.EBe());
  }
  MBe() {
    return (
      !!ModelManager_1.ModelManager.MapModel.IsInMapPolygon(this.Hte.ActorLocationProxy) ||
      (this.jye.DeepCopy(this.Hte.ActorLocationProxy),
      this.jye.Subtraction(this._Be, this.jye),
      (this.jye.Z = 0),
      this.RTe.DeepCopy(this.uBe),
      (this.RTe.Z = 0),
      this.RTe.DotProduct(this.jye) < 0)
    );
  }
  pBe() {
    var t =
      ControllerHolder_1.ControllerHolder.GenericPromptController.GetViewNameByPromptId(TIPS_NAME);
    t &&
      !UiManager_1.UiManager.IsViewOpen(t) &&
      ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode(TIPS_NAME);
  }
  vBe() {
    (this.sBe = !0),
      Log_1.Log.CheckInfo() && Log_1.Log.Info("Map", 42, "开始执行拉回移动操作,禁用玩家输入"),
      this.SBe(!0),
      this.yBe(!1),
      this.IBe(),
      this.fBe(this.dBe);
  }
  EBe() {
    (this.sBe = !1),
      Log_1.Log.CheckInfo() && Log_1.Log.Info("Map", 42, "退出拉回移动操作,恢复玩家控制"),
      this.SBe(!1),
      this.yBe(!0),
      this.TBe(this.dBe);
  }
  Clear() {
    return (
      EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnChangeRole, this.xie) &&
        EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnChangeRole, this.xie),
      !0
    );
  }
  OnEnterUnopenedArea() {}
  OnExitUnopenedArea() {
    this.hBe &&
      (EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnChangeRole, this.xie) &&
        EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnChangeRole, this.xie),
      (this.hBe = !1),
      Log_1.Log.CheckInfo() && Log_1.Log.Info("Map", 42, "- - - - 离开了未开放区域- - - - "),
      this.LBe(!1),
      this.sBe) &&
      this.EBe();
  }
  fBe(t) {
    this.DBe(t);
    var t = t.Entity.GetComponent(176),
      e = { Index: 0, Position: this._Be };
    t.MoveAlongPath({
      Points: e,
      Navigation: !1,
      IsFly: !1,
      DebugMode: !0,
      Loop: !1,
      Distance: 0,
      Callback: (t) => {
        this.sBe && this.EBe();
      },
      ReturnFalseWhenNavigationFailed: !1,
    });
  }
  DBe(t) {
    t.Entity?.CheckGetComponent(173)?.PositionState ===
      CharacterUnifiedStateTypes_1.ECharPositionState.Climb &&
      t.Entity?.GetComponent(34)?.ClimbPress(!0);
  }
  RBe() {}
  UBe() {}
  TBe(t) {
    var e = t.Entity.GetComponent(176),
      e = (e.StopMove(!1), e.MoveToLocationEnd(1), t.Entity.GetComponent(61));
    e.ClearMoveVectorCache(),
      e.SetActive(!0),
      this.gBe(t, !1),
      ControllerHolder_1.ControllerHolder.InputDistributeController.RefreshInputTag();
  }
  IBe() {
    EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ForceReleaseInput, this.pLe),
      this.mBe.DirectionState === CharacterUnifiedStateTypes_1.ECharDirectionState.AimDirection
        ? this.mBe.ExitAimStatus()
        : this.mBe.SetDirectionState(this.mBe.DirectionState),
      this.cBe && this.cBe.CurrentSkill && (this.cBe.EndOwnerAndFollowSkills(), this.ABe(0, 0)),
      this.Hte.ClearInput();
    var t = this.dBe.Entity.GetComponent(61);
    t.ClearMoveVectorCache(),
      t.SetActive(!1),
      this.gBe(this.dBe, !0),
      ControllerHolder_1.ControllerHolder.InputDistributeController.RefreshInputTag();
  }
  CBe(t) {
    t && t.Valid
      ? (this.dBe = t)
      : (this.dBe = ModelManager_1.ModelManager.CreatureModel.GetEntityById(
          Global_1.Global.BaseCharacter.EntityId
        )),
      (this.Hte = this.dBe.Entity.GetComponent(3)),
      (this.cBe = this.dBe.Entity.GetComponent(39)),
      (this.mBe = this.dBe.Entity.GetComponent(173));
  }
  ABe(t, e) {
    var i = this.Hte.Entity.GetComponent(203);
    0 === t || i?.HasTag(-2100129479)
      ? this.Hte.Actor.KuroSetMovementMode({
          Mode: 1,
          CustomMode: e,
          Context: "[UnopenedAreaPullback.ResetCharacterState] if true",
        })
      : this.Hte.Actor.KuroSetMovementMode({
          Mode: t,
          CustomMode: e,
          Context: "[UnopenedAreaPullback.ResetCharacterState]",
        });
  }
  yBe(t) {
    t &&
      this.nBe &&
      (ModelManager_1.ModelManager.BattleUiModel.ChildViewData.ShowBattleView(11), (this.nBe = !1)),
      t ||
        this.nBe ||
        (ModelManager_1.ModelManager.BattleUiModel.ChildViewData.HideBattleView(11, [18]),
        (this.nBe = !0));
  }
  LBe(t) {
    (this.aBe = t) || SceneEffectStateManager_1.default.SetSceneEffectState(0, 0);
  }
  SBe(t) {
    t
      ? this.lBe ||
        ((t = this.dBe?.Entity?.GetComponent(227)?.IsOnVehicle ?? !1),
        Log_1.Log.CheckInfo() &&
          Log_1.Log.Info("Map", 42, "开启定时器传送", ["Time", TELEPORT_DELAY_TIME]),
        (this.lBe = TimerSystem_1.TimerSystem.Delay(
          () => {
            this.RBe(), (this.lBe = void 0);
          },
          t ? TELEPORT_DELAY_TIME_GONDOLA : TELEPORT_DELAY_TIME
        )))
      : (this.lBe &&
          TimerSystem_1.TimerSystem.Has(this.lBe) &&
          (Log_1.Log.CheckInfo() && Log_1.Log.Info("Map", 42, "移除定时器传送"),
          TimerSystem_1.TimerSystem.Remove(this.lBe)),
        (this.lBe = void 0));
  }
  gBe(t, e) {
    var i;
    t &&
      t.Valid &&
      (e &&
        ((i = t.Entity.GetComponent(203))?.AddTag(-1697149502),
        i?.AddTag(-541178966),
        i?.AddTag(-542518289)),
      e ||
        ((i = t.Entity.GetComponent(203))?.RemoveTag(-1697149502),
        i?.RemoveTag(-541178966),
        i?.RemoveTag(-542518289)));
  }
  get GetInPullback() {
    return this.sBe;
  }
}
exports.UnopenedAreaPullback = UnopenedAreaPullback;
//# sourceMappingURL=UnopenedAreaPullback.js.map
