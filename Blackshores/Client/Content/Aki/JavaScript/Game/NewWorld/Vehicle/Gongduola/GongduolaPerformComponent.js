"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (t, i, e, s) {
    var h,
      r = arguments.length,
      o = r < 3 ? i : null === s ? (s = Object.getOwnPropertyDescriptor(i, e)) : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      o = Reflect.decorate(t, i, e, s);
    else
      for (var n = t.length - 1; 0 <= n; n--)
        (h = t[n]) && (o = (r < 3 ? h(o) : 3 < r ? h(i, e, o) : h(i, e)) || o);
    return 3 < r && o && Object.defineProperty(i, e, o), o;
  };
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.GongduolaPerformComponent = void 0);
const UE = require("ue"),
  Log_1 = require("../../../../Core/Common/Log"),
  QueryTypeDefine_1 = require("../../../../Core/Define/QueryTypeDefine"),
  RegisterComponent_1 = require("../../../../Core/Entity/RegisterComponent"),
  ResourceSystem_1 = require("../../../../Core/Resource/ResourceSystem"),
  TimerSystem_1 = require("../../../../Core/Timer/TimerSystem"),
  MathCommon_1 = require("../../../../Core/Utils/Math/MathCommon"),
  Vector_1 = require("../../../../Core/Utils/Math/Vector"),
  ModManager_1 = require("../../../Manager/ModManager"),
  MathUtils_1 = require("../../../../Core/Utils/MathUtils"),
  TraceElementCommon_1 = require("../../../../Core/Utils/TraceElementCommon"),
  EventDefine_1 = require("../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../Common/Event/EventSystem"),
  TimeUtil_1 = require("../../../Common/TimeUtil"),
  Global_1 = require("../../../Global"),
  InputEnums_1 = require("../../../Input/InputEnums"),
  GameSplineComponent_1 = require("../../../LevelGamePlay/Common/GameSplineComponent"),
  ControllerHolder_1 = require("../../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../../Manager/ModelManager"),
  BattleUiControl_1 = require("../../../Module/BattleUi/BattleUiControl"),
  InputDistributeController_1 = require("../../../Ui/InputDistribute/InputDistributeController"),
  GravityUtils_1 = require("../../../Utils/GravityUtils"),
  CreatureController_1 = require("../../../World/Controller/CreatureController"),
  VehicleInfoDefines_1 = require("../Common/VehicleInfoDefines"),
  VehiclePerformComponent_1 = require("../Common/VehiclePerformComponent"),
  GongduolaConfig_1 = require("./GongduolaConfig"),
  IMPACT_ANIM_TIME = 1e3,
  BORN_FIX_DOWN_WATER_DETECT_DIST = 200,
  BORN_FIX_UP_WATER_DETECT_DIST = 200,
  UP_WATERMOVE_MONTAGE_PATH =
    "/Game/Aki/Character/NPC/AlienNPC/Level_B/SB1Gongduola3/BaseAnim/AM_Waterfall.AM_Waterfall",
  DOWN_WATERMOVE_MONTAGE_PATH =
    "/Game/Aki/Character/NPC/AlienNPC/Level_B/SB1Gongduola3/BaseAnim/AM_Waterfall_Down.AM_Waterfall_Down",
  DYNAMIC_GRAVITY_WATERMOVE_MONTAGE_PATH =
    "/Game/Aki/Character/NPC/AlienNPC/Level_B/SB1Gongduola3/BaseAnim/AM_Waterfall_GravityFlip.AM_Waterfall_GravityFlip",
  PROFILE_DETECT_WATER = "VehiclePerformComponent_SimpleWaterTrace";
let GongduolaPerformComponent = class GongduolaPerformComponent extends VehiclePerformComponent_1.VehiclePerformComponent {
  constructor() {
    super(...arguments),
      (this.UeMovementMgr = void 0),
      (this.ImpactTimerHandle = void 0),
      (this.IsSprint = !1),
      (this.IsInSprintStartAction = !1),
      (this.IsEnterSprint = !1),
      (this.SprintStopSpeedSquared = 0),
      (this.SprintCd = 0),
      (this.SprintUsableCount = 0),
      (this.IsForbidInputSprint = !1),
      (this.SkipUsableChange = !1),
      (this.SprintEclapseTime = 0),
      (this.SprintDuration = 0),
      (this.CanForceInput = !0),
      (this.SprintCdArray = new Array()),
      (this.EnterSprintTagListenTask = void 0),
      (this.IsWaterfallMove = !1),
      (this.WaterfallSplineId = 0),
      (this.WaterfallDirect = Vector_1.Vector.Create()),
      (this.WaterfallGravity = Vector_1.Vector.Create()),
      (this.IsWaterfallDynamicGravity = !1),
      (this.IsWaterfallHide = !1),
      (this.IsWaterfallMoveDown = !1),
      (this.UpWaterfallMontage = void 0),
      (this.DownWaterfallMontage = void 0),
      (this.DynamicGravityWaterfallMontage = void 0),
      (this.WaterfallUiDisableHandle = 0),
      (this.WaterTrace = void 0),
      (this.UeMovementDisableHandle = 0),
      (this.MKl = (t, i) => {
        var e = this.CheckIfCanLeave();
        this.f3_(e),
          EventSystem_1.EventSystem.Emit(
            EventDefine_1.EEventName.OnVehicleSkillEnableChanged,
            e,
            InputEnums_1.EInputAction.跳跃
          );
      }),
      (this.EKl = (t, i) => {
        EventSystem_1.EventSystem.Emit(
          EventDefine_1.EEventName.OnVehicleSkillEnableChanged,
          this.CheckIfCanSprint(),
          InputEnums_1.EInputAction.闪避
        );
      }),
      (this.r1_ = (t, i) => {
        EventSystem_1.EventSystem.Emit(
          EventDefine_1.EEventName.OnVehicleSkillEnableChanged,
          this.CheckIfCanRiderSharing(),
          InputEnums_1.EInputAction.技能1
        );
      }),
      (this.OnEnterHitCollision = (t, i, e, s, h) => {
        this.CalculateImpactStrengthAndDirection(i, e, h),
          this.BeginCollisionPerform(),
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug(
              "Vehicle",
              50,
              "载具发生碰撞",
              ["HitComp", t?.GetName()],
              ["OtherActor", i?.GetName()],
              ["OtherComp", e?.GetName()],
              ["ImpactNormal", h.ImpactNormal],
              ["CollisionStrength", this.CollisionStrength],
              ["CollisionDirection", this.CollisionDirection]
            );
      }),
      (this.EnterSprintTagListenTaskCallback = (t, i) => {
        i ? this.StartSprint() : (this.IsInSprintStartAction = !1);
      }),
      (this.OnWaterfallMontageEnd = (t, i) => {
        t !== this.GetWatefallMontage() &&
          (Log_1.Log.CheckInfo() && Log_1.Log.Info("Vehicle", 50, "攀瀑被外部打断，触发保底"),
          this.EndWaterfallMove());
      }),
      (this.OnRemoveEntity = (t, i) => {
        EventSystem_1.EventSystem.RemoveWithTarget(
          this.EntityHandle,
          EventDefine_1.EEventName.RemoveEntity,
          this.OnRemoveEntity
        ),
          (this.EntityHandle = void 0),
          this.IsWaterfallMove && this.EndWaterfallMove();
        for (const e of this.PassengerInfoMap.values()) this.Leave(e.PassengerEntity);
      });
  }
  OnStart() {
    return (
      !!super.OnStart() &&
      ((this.UeMovementMgr = this.Entity.GetComponent(241)),
      "AutoMoveGongduola" === this.VehicleType &&
        ((this.CanBeenManipulated = !1), this.UeMovementMgr?.Disable("城区贡多拉默认关闭移动组件")),
      (this.EnterSprintTagListenTask = this.TagComp?.ListenForTagAddOrRemove(
        653152204,
        this.EnterSprintTagListenTaskCallback
      )),
      this.InitWaterfallMoveMontage(),
      this.InitWaterTraceElement(),
      !0)
    );
  }
  OnActivate() {
    this.ActorComp.Actor.VehicleMovementComponent.SetMovementMode(2),
      this.FixBornLocation(void 0, "贡多拉出生位置修正"),
      this.LastActorRotation.DeepCopy(this.ActorComp.ActorRotationProxy),
      super.OnActivate();
  }
  OnTick(t) {
    super.OnTick(t), this.UpdateSprintState(t), this.UpdateSprintCoolDown(t);
  }
  OnEnd() {
    return (
      this.RemoveVehicleTagListeners(),
      this.EnterSprintTagListenTask && this.EnterSprintTagListenTask.EndTask(),
      (this.EnterSprintTagListenTask = void 0),
      super.OnEnd()
    );
  }
  InitVehicleConfig() {
    var t = this.LoadVehicleConfigAsset();
    return (
      !!t?.IsValid() &&
      ((this.Config = new GongduolaConfig_1.GongduolaConfig(this.Entity, t)),
      (this.ConfigInternal = this.Config.DeepCopy()),
      this.Config.Init())
    );
  }
  RefreshMoveConfigFromVehicleConfig() {
    var t;
    this.Config instanceof GongduolaConfig_1.GongduolaConfig &&
      (t = this.ActorComp?.Actor.VehicleMovementComponent) &&
      (this.IsSprint
        ? this.Config.SetSprintStateMoveConfig(t)
        : this.Config.SetBaseStateMoveConfig(t));
  }
  EnterConditionCheck(t, i) {
    return !!super.EnterConditionCheck(t, i) && !this.IsWaterfallMove;
  }
  LeaveConditionCheck(t) {
    return (
      !!super.LeaveConditionCheck(t) && !this.TagComp?.HasTag(653152204) && !this.IsWaterfallMove
    );
  }
  CheckIfCanLeave() {
    var t = Global_1.Global.BaseCharacter?.CharacterActorComponent?.Entity;
    return !!t && this.LeaveConditionCheck(t);
  }
  CheckIfCanSprint() {
    var t = Global_1.Global.BaseCharacter?.CharacterActorComponent?.Entity;
    return (
      !!t &&
      !(
        !(t = this.PassengerInfoMap.get(t.Id)) ||
        !t.IsDriver ||
        this.TagComp?.HasTag(-1347413397) ||
        this.SprintUsableCount <= 0 ||
        this.IsForbidInputSprint
      )
    );
  }
  CheckIfCanRiderSharing() {
    return (
      !ModelManager_1.ModelManager.GameModeModel?.IsMulti &&
      !this.TagComp?.HasTag(-778094350) &&
      super.CheckIfCanRiderSharing()
    );
  }
  AddVehicleTagListeners() {
    if (!this.VehicleTagListeners) {
      this.VehicleTagListeners = [];
      var t = [653152204, 401464757],
        i = this.TagComp?.HasAnyTag(t) ?? !1;
      this.f3_(!i);
      for (const r of t) {
        var e = this.TagComp?.ListenForTagAddOrRemove(r, this.MKl);
        e && this.VehicleTagListeners.push(e);
      }
      for (const o of [-1347413397]) {
        var s = this.TagComp?.ListenForTagAddOrRemove(o, this.EKl);
        s && this.VehicleTagListeners.push(s);
      }
      for (const n of [-778094350]) {
        var h = this.TagComp?.ListenForTagAddOrRemove(n, this.r1_);
        h && this.VehicleTagListeners.push(h);
      }
    }
  }
  RemoveVehicleTagListeners() {
    if (this.VehicleTagListeners) {
      for (const t of this.VehicleTagListeners) t.EndTask();
      this.VehicleTagListeners = void 0;
    }
  }
  f3_(t) {
    t ? this.TagComp?.AddTag(-1821703142) : this.TagComp?.RemoveTag(-1821703142);
  }
  InitVehicleMovementFeature(t) {
    (this.CanBeenManipulated = !1),
      t.MoveSpline &&
        this.MoveComp?.MoveAlongPath({ SplineId: t.MoveSpline, StartFromNearest: !0 });
  }
  CalculateImpactStrengthAndDirection(t, i, e) {
    var s = this.TmpVector1,
      h = this.TmpVector2,
      s =
        (s.FromUeVector(e.ImpactNormal),
        h.Reset(),
        i && h.FromUeVector(i.GetComponentVelocity()),
        h.Subtraction(this.ActorComp.ActorVelocityProxy, this.CollisionVelocity),
        this.TmpVector1.FromUeVector(e.ImpactPoint),
        this.TmpVector2.FromUeVector(e.Location),
        this.TmpVector1.SubtractionEqual(this.TmpVector2),
        this.TmpVector1.GetSafeNormal2D(this.TmpVector2),
        Vector_1.Vector.DotProduct(this.TmpVector2, this.ActorComp.ActorForwardProxy)),
      i = Vector_1.Vector.DotProduct(this.CollisionVelocity, this.ActorComp.ActorForwardProxy),
      h = Vector_1.Vector.DotProduct(this.TmpVector2, this.ActorComp.ActorRightProxy),
      e = Vector_1.Vector.DotProduct(this.CollisionVelocity, this.ActorComp.ActorRightProxy),
      s = Math.max(-s * i, 0),
      i = Math.max(-h * e, 0),
      h =
        ((this.CollisionStrength = s + i),
        Math.acos(this.TmpVector2.CosineAngle2D(this.ActorComp.ActorForwardProxy)) *
          MathUtils_1.MathUtils.RadToDeg);
    this.CollisionDirection =
      h * Math.sign(this.TmpVector2.DotProduct(this.ActorComp.ActorRightProxy));
  }
  BeginCollisionPerform(t = IMPACT_ANIM_TIME) {
    (this.IsBeingImpacted = !0),
      this.MoveComp?.EnableUeMovementTick("载具受到碰撞"),
      this.ImpactTimerHandle && TimerSystem_1.TimerSystem.Remove(this.ImpactTimerHandle),
      (this.ImpactTimerHandle = TimerSystem_1.TimerSystem.Delay(() => {
        (this.IsBeingImpacted = !1),
          (this.CollisionStrength = 0),
          (this.CollisionDirection = 0),
          (this.ImpactTimerHandle = void 0);
      }, t));
  }
  TryEnterSprint(t = !1) {
    if (this.TagComp?.HasTag(-1347413397)) return !1;
    if (this.IsInSprintStartAction) return !1;
    if (this.ActorComp.InputDirectProxy.X < 0) return !1;
    if (!t) {
      if (this.SprintUsableCount <= 0) return !1;
      if (this.IsForbidInputSprint) return !1;
    }
    return (this.IsEnterSprint = !0), (this.SkipUsableChange ||= t), !0;
  }
  StartSprint() {
    this.IsSprint || this.TagComp?.AddTag(1646668090);
    var t = this.Config;
    t.SetSprintStateMoveConfig(this.ActorComp.Actor.VehicleMovementComponent),
      (this.IsSprint = !0),
      (this.IsInSprintStartAction = !0),
      (this.CanForceInput = !0),
      (this.SprintDuration = t.SprintDuration + this.SprintEclapseTime),
      this.SkipUsableChange ||
        (ModManager_1.ModManager.settings.NoCD ? this.SprintUsableCount : this.SprintUsableCount--,
        this.SprintCdArray.push(0)),
      (this.SkipUsableChange = !1),
      this.TmpVector1.DeepCopy(this.ActorComp.ActorForwardProxy),
      this.TmpVector1.MultiplyEqual(Math.max(t.SprintExceedLimitSpeed, t.SprintMaxSpeed)),
      this.MoveComp.SetForceSpeed(this.TmpVector1),
      this.ActorComp.Actor.VehicleMovementComponent?.IgnoreMoveFriction(
        t.SprintExceedLimitDuration * MathUtils_1.MathUtils.MillisecondToSecond
      ),
      EventSystem_1.EventSystem.Emit(
        EventDefine_1.EEventName.OnVehicleSkillUsableCountChanged,
        0,
        this.SprintUsableCount
      ),
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug(
          "Vehicle",
          50,
          "载具冲刺开始",
          ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
          ["EclapseTime", this.SprintEclapseTime],
          ["Duration", this.SprintDuration],
          ["RemainCount", this.SprintUsableCount]
        );
  }
  EndSprint() {
    Log_1.Log.CheckDebug() &&
      Log_1.Log.Debug(
        "Vehicle",
        50,
        "载具冲刺结束",
        ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
        ["EclapseTime", this.SprintEclapseTime],
        ["Duration", this.SprintDuration],
        ["RemainCount", this.SprintUsableCount]
      ),
      this.Config.SetBaseStateMoveConfig(this.ActorComp.Actor.VehicleMovementComponent),
      (this.IsSprint = !1),
      (this.SprintDuration = 0),
      (this.SprintEclapseTime = 0),
      this.TagComp?.RemoveTag(1646668090);
  }
  UpdateSprintState(t) {
    var i;
    this.IsSprint &&
      ((this.SprintEclapseTime += t),
      this.SprintEclapseTime >= this.SprintDuration ||
      (this.GetVehicleVelocity(this.TmpVector1),
      !this.IsInSprintStartAction && this.TmpVector1.SizeSquared2D() < this.SprintStopSpeedSquared)
        ? this.EndSprint()
        : ((i = (t = this.Config).SprintDuration - this.SprintDuration + this.SprintEclapseTime),
          this.CanForceInput &&
            i < t.SprintForceInputDuration &&
            (!this.TagComp?.HasTag(110078660) && this.ActorComp.InputDirectProxy.X < 0
              ? (this.CanForceInput = !1)
              : (this.TmpVector1.Set(1, this.ActorComp.InputDirectProxy.Y, 0),
                this.ActorComp.SetInputDirect(this.TmpVector1)))));
  }
  UpdateSprintCoolDown(e) {
    var s = this.Config;

    if (ModManager_1.ModManager.settings.NoCD) {
      this.SprintUsableCount = s.SprintMaxUsableCount;
      return;
    }

    if (this.SprintCd) {
      if (this.SprintCdArray.length) {
        let t = 0,
          i = e;
        for (
          ;
          t < this.SprintCdArray.length &&
          0 < i &&
          ((this.SprintCdArray[t] += i), !(this.SprintCdArray[t] < this.SprintCd));

        )
          (i -= this.SprintCd - this.SprintCdArray[t]), t++;
        0 < t &&
          (this.SprintCdArray.splice(0, t),
          (this.SprintUsableCount += t),
          (this.SprintUsableCount = MathUtils_1.MathUtils.Clamp(
            this.SprintUsableCount,
            0,
            s.SprintMaxUsableCount
          )),
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug(
              "Vehicle",
              50,
              "载具冲刺恢复",
              ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
              ["CurSprintCount", this.SprintUsableCount]
            ),
          EventSystem_1.EventSystem.Emit(
            EventDefine_1.EEventName.OnVehicleSkillUsableCountChanged,
            0,
            this.SprintUsableCount
          ));
      }
    } else this.SprintUsableCount = s.SprintMaxUsableCount;
  }
  IsSprintSkillInCd() {
    if (ModManager_1.ModManager.settings.NoCD) return false;
    var t = this.Config;
    return this.SprintUsableCount !== t.SprintMaxUsableCount;
  }
  GetSprintSkillUsableCount() {
    return this.SprintUsableCount;
  }
  GetSprintSkillRemainingCd() {
    return this.SprintCdArray.length
      ? [
          (this.SprintCd - this.SprintCdArray[0]) * TimeUtil_1.TimeUtil.Millisecond,
          this.SprintCd * TimeUtil_1.TimeUtil.Millisecond,
        ]
      : [0, 0];
  }
  SetEnableInputSprint(t) {
    this.IsForbidInputSprint === t &&
      ((this.IsForbidInputSprint = !t),
      EventSystem_1.EventSystem.Emit(
        EventDefine_1.EEventName.OnVehicleSkillEnableChanged,
        this.CheckIfCanSprint(),
        InputEnums_1.EInputAction.闪避
      ));
  }
  TryEnterWaterfallMove(t) {
    return !(
      this.TagComp?.HasTag(1117748456) ||
      this.IsWaterfallMove ||
      (this.SetWaterfallConfig(t),
      this.GetWatefallMontage()?.IsValid()
        ? (this.StartWaterfallMove(t), 0)
        : (this.ResetWaterfallConfig(), 1))
    );
  }
  StartWaterfallMove(t) {
    (this.IsWaterfallMove = !0),
      this.TagComp.AddTag(401464757),
      this.TagComp.AddTag(-1782915173),
      this.AnimComp.Play(this.GetWatefallMontage(), this.OnWaterfallMontageEnd),
      this.MoveComp.SetForceSpeed(Vector_1.Vector.ZeroVector),
      (this.ActorComp.Actor.VehicleMovementComponent.ForbidGravityDirectMove = !0),
      (this.ActorComp.Actor.VehicleMovementComponent.bSafetyDepthCheck = !1),
      this.ActorComp.SetCollisionEnable(!1, "贡多拉攀瀑开始"),
      (this.WaterfallUiDisableHandle = BattleUiControl_1.BattleUiControl.SetBattleViewInvisible()),
      InputDistributeController_1.InputDistributeController.RefreshInputTag(),
      EventSystem_1.EventSystem.EmitWithTarget(
        this.Entity,
        EventDefine_1.EEventName.OnWaterfallMoveBegin
      ),
      Log_1.Log.CheckInfo() &&
        Log_1.Log.Info(
          "Vehicle",
          50,
          "贡多拉攀瀑开始",
          ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
          ["SplineId", t.SplineId],
          ["IsMoveDown", this.IsWaterfallMoveDown],
          ["Direct", t.Direct]
        );
  }
  OnWaterfallMoveBeginEnd() {
    var t;
    this.IsWaterfallMove &&
      (this.TagComp?.RemoveTag(-360496329),
      this.TagComp?.AddTag(-1801973972),
      (t = this.IsWaterfallDynamicGravity
        ? this.WaterfallGravity
        : this.ActorComp?.ActorGravityDirectProxy),
      this.SetGravityDirectForVehicle(t),
      t.UnaryNegation(this.TmpVector1),
      MathUtils_1.MathUtils.LookRotationUpFirst(
        this.WaterfallDirect,
        this.TmpVector1,
        this.TmpRotator
      ),
      this.ActorComp.SetActorRotation(this.TmpRotator.ToUeRotator(), "攀瀑三阶段设置旋转", !1),
      this.MoveComp.SetForceSpeed(Vector_1.Vector.ZeroVector),
      this.AnimComp.ConsumeRootMotion(),
      this.AnimComp.PlayFromEnd(this.GetWatefallMontage()),
      this.AnimComp.StartForceDisableAnimOptimization(3, !1),
      TimerSystem_1.TimerSystem.Next(() => {
        this.WaterfallHideVehicleAndPassenger(!1, "贡多拉攀瀑出水");
      }),
      Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info(
        "Vehicle",
        50,
        "贡多拉攀瀑进入三阶段",
        ["PbDataId", this.ActorComp.CreatureData.GetPbDataId()],
        ["SplineId", this.WaterfallSplineId],
        ["Passengers", this.PassengerInfoMap],
        ["Direct", this.WaterfallDirect]
      );
  }
  EndWaterfallMove() {
    this.IsWaterfallMove &&
      (EventSystem_1.EventSystem.EmitWithTarget(
        this.Entity,
        EventDefine_1.EEventName.OnWaterfallMoveEnd
      ),
      Log_1.Log.CheckInfo() &&
        Log_1.Log.Info(
          "Vehicle",
          50,
          "贡多拉攀瀑结束",
          ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
          ["SplineId", this.WaterfallSplineId],
          ["IsMoveDown", this.IsWaterfallMoveDown],
          ["Direct", this.WaterfallDirect]
        ),
      (this.IsWaterfallMove = !1),
      (this.IsWaterfallMoveDown = !1),
      this.ResetWaterfallConfig(),
      this.TagComp.RemoveTag(401464757),
      this.AnimComp.RemoveOnMontageEnded(this.OnWaterfallMontageEnd),
      this.WaterfallHideVehicleAndPassenger(!1, "贡多拉攀瀑结束保底"),
      InputDistributeController_1.InputDistributeController.RefreshInputTag(),
      BattleUiControl_1.BattleUiControl.SetBattleViewVisible(this.WaterfallUiDisableHandle),
      this.AnimComp.CancelForceDisableAnimOptimization(3),
      (this.WaterfallUiDisableHandle = 0),
      this.ActorComp.SetCollisionEnable(!0, "贡多拉攀瀑结束"),
      (this.ActorComp.Actor.VehicleMovementComponent.ForbidGravityDirectMove = !1),
      (this.ActorComp.Actor.VehicleMovementComponent.bSafetyDepthCheck = !0));
  }
  WaterfallHideVehicleAndPassenger(t, i) {
    if (
      this.IsWaterfallHide !== t &&
      ((this.IsWaterfallHide = t),
      CreatureController_1.CreatureController.SetActorVisible(this.Entity, !t, !1, !0, i),
      !this.IsHidePassenger)
    )
      for (const e of this.PassengerInfoMap.values())
        e.PassengerEntity &&
          CreatureController_1.CreatureController.SetActorVisible(e.PassengerEntity, !t, !t, !0, i);
  }
  CheckIsWaterfallMoveDown(t) {
    var i,
      e,
      t = new GameSplineComponent_1.GameSplineComponent(t);
    return (
      !!t.Initialize() &&
      ((i = t.GetNumberOfSplinePoints()),
      (e = t.GetWorldLocationAtSplinePoint(0)),
      t.GetWorldLocationAtSplinePoint(i - 1).Subtraction(e, this.TmpVector1),
      GravityUtils_1.GravityUtils.GetZnInGravityForActor(this.ActorComp, this.TmpVector1) < 0)
    );
  }
  GetWatefallMontage() {
    return this.IsWaterfallDynamicGravity
      ? this.DynamicGravityWaterfallMontage
      : this.IsWaterfallMoveDown
        ? this.DownWaterfallMontage
        : this.UpWaterfallMontage;
  }
  InitWaterfallMoveMontage() {
    ResourceSystem_1.ResourceSystem.LoadAsync(UP_WATERMOVE_MONTAGE_PATH, UE.AnimMontage, (t) => {
      t?.IsValid()
        ? (this.UpWaterfallMontage = t)
        : Log_1.Log.CheckError() &&
          Log_1.Log.Error(
            "Vehicle",
            50,
            "加载向上攀瀑Montage失败",
            ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
            ["Path", UP_WATERMOVE_MONTAGE_PATH]
          );
    }),
      ResourceSystem_1.ResourceSystem.LoadAsync(
        DOWN_WATERMOVE_MONTAGE_PATH,
        UE.AnimMontage,
        (t) => {
          t?.IsValid()
            ? (this.DownWaterfallMontage = t)
            : Log_1.Log.CheckError() &&
              Log_1.Log.Error(
                "Vehicle",
                50,
                "加载向下攀瀑Montage失败",
                ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
                ["Path", DOWN_WATERMOVE_MONTAGE_PATH]
              );
        }
      ),
      ResourceSystem_1.ResourceSystem.LoadAsync(
        DYNAMIC_GRAVITY_WATERMOVE_MONTAGE_PATH,
        UE.AnimMontage,
        (t) => {
          t?.IsValid()
            ? (this.DynamicGravityWaterfallMontage = t)
            : Log_1.Log.CheckError() &&
              Log_1.Log.Error(
                "Vehicle",
                50,
                "加载异重力攀瀑Montage失败",
                ["PbDataId", this.ActorComp?.CreatureData.GetPbDataId()],
                ["Path", DYNAMIC_GRAVITY_WATERMOVE_MONTAGE_PATH]
              );
        }
      );
  }
  SetWaterfallConfig(t) {
    (this.WaterfallSplineId = t.SplineId),
      this.WaterfallDirect.DeepCopy(t.Direct),
      this.WaterfallGravity.DeepCopy(t.ChangeGravity ?? Vector_1.Vector.ZeroVectorProxy),
      (this.IsWaterfallDynamicGravity = !!t.ChangeGravity),
      (this.IsWaterfallMoveDown = !t.ChangeGravity && this.CheckIsWaterfallMoveDown(t.SplineId));
  }
  ResetWaterfallConfig() {
    (this.WaterfallSplineId = 0),
      this.WaterfallDirect.Reset(),
      this.WaterfallGravity.Reset(),
      (this.IsWaterfallDynamicGravity = !1);
  }
  LeaveVehiclePerform(t) {
    super.LeaveVehiclePerform(t),
      this.IsWaterfallHide &&
        t.PassengerEntity &&
        CreatureController_1.CreatureController.SetActorVisible(
          t.PassengerEntity,
          !0,
          !0,
          !0,
          "攀瀑过程中离开载具"
        );
  }
  HandlePendingDestroy() {
    this.IsPendingDestroy = !0;
    ResourceSystem_1.ResourceSystem.LoadAsync(
      "/Game/Aki/Character/NPC/AlienNPC/Level_B/SB1Gongduola3/BaseAnim/AM_Idle_End.AM_Idle_End",
      UE.AnimMontage,
      (t) => {
        var i;
        t?.IsValid()
          ? ((i = t.SequenceLength * MathUtils_1.MathUtils.SecondToMillisecond),
            this.AnimComp?.PlayOnce(t),
            TimerSystem_1.TimerSystem.Delay(() => {
              ControllerHolder_1.ControllerHolder.CreatureController.DelayRemoveEntityFinished(
                this.Entity
              );
            }, i))
          : ControllerHolder_1.ControllerHolder.CreatureController.DelayRemoveEntityFinished(
              this.Entity
            );
      }
    );
  }
  InitWaterTraceElement() {
    (this.WaterTrace = UE.NewObject(UE.TraceSphereElement.StaticClass())),
      (this.WaterTrace.WorldContextObject = this.ActorComp.Actor),
      (this.WaterTrace.Radius = 1),
      (this.WaterTrace.bIgnoreSelf = !0),
      (this.WaterTrace.bIsSingle = !1),
      this.WaterTrace.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.Water);
  }
  DetectWaterSurface(t, i, e) {
    if (
      (TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.WaterTrace, t),
      TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.WaterTrace, i),
      TraceElementCommon_1.TraceElementCommon.SphereTrace(this.WaterTrace, PROFILE_DETECT_WATER) &&
        this.WaterTrace.HitResult.bBlockingHit)
    ) {
      var s = this.WaterTrace.HitResult.GetHitCount();
      for (let t = 0; t < s; ++t) {
        var h = this.WaterTrace.HitResult.PenetrationDepthArray.Get(t);
        if (!(Math.abs(h) > MathCommon_1.MathCommon.KindaSmallNumber))
          if (this.WaterTrace.HitResult.Actors.Get(t)?.IsValid())
            return (
              TraceElementCommon_1.TraceElementCommon.GetHitLocation(
                this.WaterTrace.HitResult,
                t,
                e
              ),
              !0
            );
      }
    }
    return !1;
  }
  GetBuoyancyBalancePosition(t, i) {
    this.GetNormalizedBuoyancyBalanceOffset(this.TmpVector3),
      this.ActorComp.ActorQuatProxy.RotateVector(this.TmpVector3, this.TmpVector2),
      t.Addition(this.TmpVector2, i);
  }
  GetNormalizedBuoyancyBalanceOffset(t) {
    var i = this.ActorComp.Actor.VehicleMovementComponent.VehicleShapeBounds.BoxExtent.Z;
    t.Reset(),
      (t.Z = i - 2 * i * this.ActorComp.Actor.VehicleMovementComponent.BuoyancyBalanceRatio),
      this.TmpVector2.FromUeVector(
        this.ActorComp.Actor.VehicleMovementComponent.VehicleShapeBoundsOffset
      ),
      t.SubtractionEqual(this.TmpVector2);
  }
  FixBornLocation(i = void 0, e = "unknown.FixBornLocation") {
    if (this.ActorComp) {
      var s = this.TmpVector1,
        h =
          (s.FromUeVector(this.ActorComp.Actor.VehicleMovementComponent.VehicleShapeBoundsOffset),
          this.TmpVector3),
        s =
          (this.ActorComp.ActorQuatProxy.RotateVector(s, h),
          h.AdditionEqual(i ?? this.ActorComp.ActorLocationProxy),
          this.ActorComp.Actor.VehicleMovementComponent.VehicleShapeBounds.BoxExtent.Z),
        i = this.TmpVector1,
        r = this.TmpVector2;
      i.Set(h.X, h.Y, h.Z + s), r.Set(h.X, h.Y, h.Z - s - BORN_FIX_DOWN_WATER_DETECT_DIST);
      let t = this.DetectWaterSurface(i, r, this.TmpVector4);
      t ||
        (i.Set(h.X, h.Y, h.Z + s + BORN_FIX_UP_WATER_DETECT_DIST),
        r.Set(h.X, h.Y, h.Z - s),
        (t = this.DetectWaterSurface(i, r, this.TmpVector4))),
        t &&
          (Log_1.Log.CheckInfo() &&
            Log_1.Log.Info(
              "Entity",
              3,
              "[GongduolaPerformComp.FixBornLocation] 贡多拉水面修正:前",
              ["CreatureDataId", this.ActorComp.CreatureData.GetCreatureDataId()],
              ["PbDataId", this.ActorComp.CreatureData.GetPbDataId()],
              ["K2_GetActorLocation", this.ActorComp.Actor.D_K2_GetActorLocation()],
              ["ActorLocationProxy", h],
              ["InitLocation", this.ActorComp.CreatureData.GetInitLocation()],
              ["射线开始位置", i],
              ["射线结束位置", r],
              ["Context", e]
            ),
          this.GetBuoyancyBalancePosition(this.TmpVector4, this.TmpVector1),
          this.ActorComp.SetActorLocation(this.TmpVector1.ToUeVector(), e, !1),
          Log_1.Log.CheckInfo()) &&
          Log_1.Log.Info(
            "Vehicle",
            50,
            "[GongduolaPerformComp.FixBornLocation] 贡多拉水面修正:后",
            ["CreatureDataId", this.ActorComp.CreatureData.GetCreatureDataId()],
            ["PbDataId", this.ActorComp.CreatureData.GetPbDataId()],
            ["K2_GetActorLocation", this.ActorComp.Actor.D_K2_GetActorLocation()],
            ["Context", e]
          );
    }
  }
  GetVehicleVelocity(t) {
    this.ActorComp &&
      (this.CanBeenManipulated
        ? t.DeepCopy(this.ActorComp.ActorVelocityProxy)
        : t.DeepCopy(this.ActorComp.SimulatedVelocity));
  }
  GetDrivedVehicleSeatLocalRot(t, i) {
    t = this.ActorComp?.SkeletalMesh?.GetSocketRotation(
      VehicleInfoDefines_1.VehicleInfoDefines.GetSeatSocketName(t)
    );
    return (
      !!t &&
      (this.MoveComp?.IsStandardGravity
        ? i.FromUeRotator(t)
        : (this.TmpRotator.FromUeRotator(t),
          GravityUtils_1.GravityUtils.GetBaseQuatInGravityForActor(this.ActorComp, this.TmpQuat1),
          this.TmpQuat1.Inverse(this.TmpQuat2),
          GravityUtils_1.GravityUtils.GetRotInInverseQuat(this.TmpRotator, this.TmpQuat2, i)),
      !0)
    );
  }
};
(GongduolaPerformComponent = __decorate(
  [(0, RegisterComponent_1.RegisterComponent)(242)],
  GongduolaPerformComponent
)),
  (exports.GongduolaPerformComponent = GongduolaPerformComponent);
//# sourceMappingURL=GongduolaPerformComponent.js.map
