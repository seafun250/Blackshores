"use strict";
var CharacterHitComponent_1,
  __decorate =
    (this && this.__decorate) ||
    function (t, i, e, s) {
      var h,
        r = arguments.length,
        a = r < 3 ? i : null === s ? (s = Object.getOwnPropertyDescriptor(i, e)) : s;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(t, i, e, s);
      else
        for (var o = t.length - 1; 0 <= o; o--)
          (h = t[o]) && (a = (r < 3 ? h(a) : 3 < r ? h(i, e, a) : h(i, e)) || a);
      return 3 < r && a && Object.defineProperty(i, e, a), a;
    };
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.CharacterHitComponent = exports.MAX_HIT_EFFECT_COUNT = exports.OUTER_RADIUS = void 0);
const UE = require("ue"),
  Log_1 = require("../../../../../Core/Common/Log"),
  Stats_1 = require("../../../../../Core/Common/Stats"),
  Time_1 = require("../../../../../Core/Common/Time"),
  CommonDefine_1 = require("../../../../../Core/Define/CommonDefine"),
  HardnessModeById_1 = require("../../../../../Core/Define/ConfigQuery/HardnessModeById"),
  Protocol_1 = require("../../../../../Core/Define/Net/Protocol"),
  EntitySystem_1 = require("../../../../../Core/Entity/EntitySystem"),
  RegisterComponent_1 = require("../../../../../Core/Entity/RegisterComponent"),
  ResourceSystem_1 = require("../../../../../Core/Resource/ResourceSystem"),
  TimerSystem_1 = require("../../../../../Core/Timer/TimerSystem"),
  FNameUtil_1 = require("../../../../../Core/Utils/FNameUtil"),
  MathCommon_1 = require("../../../../../Core/Utils/Math/MathCommon"),
  Quat_1 = require("../../../../../Core/Utils/Math/Quat"),
  Rotator_1 = require("../../../../../Core/Utils/Math/Rotator"),
  ModManager_1 = require("../../../../Manager/ModManager"),
  Transform_1 = require("../../../../../Core/Utils/Math/Transform"),
  Vector_1 = require("../../../../../Core/Utils/Math/Vector"),
  MathUtils_1 = require("../../../../../Core/Utils/MathUtils"),
  StringUtils_1 = require("../../../../../Core/Utils/StringUtils"),
  IComponent_1 = require("../../../../../UniverseEditor/Interface/IComponent"),
  CameraController_1 = require("../../../../Camera/CameraController"),
  EventDefine_1 = require("../../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../../Common/Event/EventSystem"),
  EffectSystem_1 = require("../../../../Effect/EffectSystem"),
  Global_1 = require("../../../../Global"),
  GlobalData_1 = require("../../../../GlobalData"),
  ConfigManager_1 = require("../../../../Manager/ConfigManager"),
  ControllerHolder_1 = require("../../../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../../../Manager/ModelManager"),
  BattleUiDefine_1 = require("../../../../Module/BattleUi/BattleUiDefine"),
  GamepadController_1 = require("../../../../Module/Gamepad/GamepadController"),
  SceneTeamController_1 = require("../../../../Module/SceneTeam/SceneTeamController"),
  ColorUtils_1 = require("../../../../Utils/ColorUtils"),
  BulletConstant_1 = require("../../../Bullet/BulletConstant"),
  BulletStaticFunction_1 = require("../../../Bullet/BulletStaticMethod/BulletStaticFunction"),
  BulletUtil_1 = require("../../../Bullet/BulletUtil"),
  FightLibrary_1 = require("../Blueprint/Utils/FightLibrary"),
  CharacterBuffIds_1 = require("./Abilities/CharacterBuffIds"),
  CharacterUnifiedStateTypes_1 = require("./Abilities/CharacterUnifiedStateTypes"),
  WhirlpoolPoint_1 = require("./Move/WhirlpoolPoint");
var EAttributeId = Protocol_1.Aki.Protocol.Vks;
const CombatMessage_1 = require("../../../../Module/CombatMessage/CombatMessage"),
  SkillMessageController_1 = require("../../../../Module/CombatMessage/SkillMessageController"),
  PhantomUtil_1 = require("../../../../Module/Phantom/PhantomUtil"),
  CombatLog_1 = require("../../../../Utils/CombatLog"),
  BulletCollisionUtil_1 = require("../../../Bullet/BulletStaticMethod/BulletCollisionUtil"),
  RoleAudioController_1 = require("../../Role/RoleAudioController"),
  BaseHitComponent_1 = require("./BaseHitComponent"),
  CharacterHitOptimize_1 = require("./CharacterHitMisc/CharacterHitOptimize"),
  MASS_RATE = 100,
  DEFALUT_SLOT_NAME =
    ((exports.OUTER_RADIUS = 100), (exports.MAX_HIT_EFFECT_COUNT = 3), new UE.FName("DefaultSlot")),
  DEFAULT_DAMAGE = 1e4,
  DEBUG = !1,
  forbidHitTagIds = [1008164187, -1192672452, 1922078392, -648310348, 855966206],
  enterFkForbidHitTagIds = [-1192672452, 1922078392, -648310348, 855966206],
  lightHits = new Set([0, 1, 8, 9]);
class DoubleHitInAirEffect {
  constructor() {
    (this.GravityScaleUp = 0),
      (this.GravityScaleDown = 0),
      (this.GravityScaleTop = 0),
      (this.LandingBounce = Vector_1.Vector.Create()),
      (this.VelocityTop = 0),
      (this.Valid = !1),
      (this.Duration = 0);
  }
  FromUeHitEffect(t) {
    (this.GravityScaleUp = t.落地反弹上升重力标量),
      (this.GravityScaleDown = t.落地反弹下落重力标量),
      (this.GravityScaleTop = t.落地反弹弧顶重力标量),
      this.LandingBounce.FromUeVector(t.落地反弹),
      (this.VelocityTop = t.落地反弹速度阈值),
      (this.Valid = !0),
      (this.Duration = t.落地反弹时长);
  }
  Finish() {
    this.Valid = !1;
  }
}
let CharacterHitComponent = (CharacterHitComponent_1 = class CharacterHitComponent extends (
  BaseHitComponent_1.BaseHitComponent
) {
  constructor() {
    super(...arguments),
      (this.Hte = void 0),
      (this.cBe = void 0),
      (this.rJo = void 0),
      (this.tVr = void 0),
      (this.vHr = void 0),
      (this.iVr = void 0),
      (this.oVr = void 0),
      (this.rVr = void 0),
      (this.LastHitData = void 0),
      (this.sVr = !1),
      (this.aVr = !1),
      (this.hVr = []),
      (this.lVr = []),
      (this._Vr = []),
      (this.cVr = 0),
      (this.eth = !1),
      (this.mVr = void 0),
      (this.dVr = void 0),
      (this.CVr = void 0),
      (this.gVr = 0),
      (this.RageModeId = 0),
      (this.HardnessModeId = 0),
      (this.BeHitBones = new Array()),
      (this.ToughDecreaseValue = 0),
      (this.BeHitIgnoreRotate = !1),
      (this.CounterAttackInfoInternal = void 0),
      (this.VisionCounterAttackInfoInternal = void 0),
      (this.WindupAttackInfoInternal = void 0),
      (this.BeHitTime = 0),
      (this.NeedCalculateFallInjure = !1),
      (this.BeHitAnim = 0),
      (this.AcceptedNewBeHit = !1),
      (this.EnterFk = !1),
      (this.ehl = !1),
      (this.BeHitDirect = Vector_1.Vector.Create()),
      (this.BeHitLocation = Vector_1.Vector.Create()),
      (this.BeHitSocketName = void 0),
      (this.BeHitMapping = void 0),
      (this.fVr = !1),
      (this.pVr = 0),
      (this.vVr = 0),
      (this.MVr = void 0),
      (this.EVr = void 0),
      (this.$zo = void 0),
      (this.SVr = void 0),
      (this.yVr = 0),
      (this.IVr = !1),
      (this.TVr = void 0),
      (this.Gue = Rotator_1.Rotator.Create()),
      (this.az = Quat_1.Quat.Create()),
      (this.F1t = void 0),
      (this.HitEffectMap = new Map()),
      (this.hXs = void 0),
      (this.xoa = void 0),
      (this.Uha = void 0),
      (this.qL1 = void 0),
      (this.GL1 = !1),
      (this.ShouldOptimize = !1),
      (this.DVr = (t, i) => {
        i === CharacterUnifiedStateTypes_1.ECharPositionState.Ground
          ? t === CharacterUnifiedStateTypes_1.ECharPositionState.Air &&
            this.DoubleHitInAirEffect?.Valid
            ? TimerSystem_1.TimerSystem.Next(this.RVr, void 0, "落地击飞")
            : this.DeActiveStiff("落地")
          : t === CharacterUnifiedStateTypes_1.ECharPositionState.Air &&
            this.DoubleHitInAirEffect.Finish();
      }),
      (this.PVr = void 0),
      (this.UVr = !1),
      (this.AVr = 0),
      (this.Jtc = void 0),
      (this.BFa = -1),
      (this.XAl = () => {
        this.Entity.Valid && ((this.TVr = void 0), this.ARe(-2044964178));
      }),
      (this.xVr = Vector_1.Vector.Create()),
      (this.wVr = Vector_1.Vector.Create()),
      (this.oHo = Transform_1.Transform.Create()),
      (this.LF_ = !1),
      (this.gh1 = Vector_1.Vector.Create()),
      (this.BVr = Vector_1.Vector.Create()),
      (this.bVr = Vector_1.Vector.Create()),
      (this.DoubleHitInAirEffect = void 0),
      (this.RVr = () => {
        var t, i, e, s, h;
        this.DoubleHitInAirEffect.Valid &&
          ((i = (t = this.Entity.GetComponent(176)).GetLastUpdateVelocity()),
          (e = this.Hte.ActorQuatProxy),
          (s = this.DoubleHitInAirEffect.LandingBounce),
          CharacterHitComponent_1.aA1.Set(s.X, 0, s.Z),
          e.RotateVector(CharacterHitComponent_1.aA1, CharacterHitComponent_1.hA1),
          this.BVr.Set(
            i.X * CharacterHitComponent_1.hA1.X,
            i.Y * CharacterHitComponent_1.hA1.Y,
            -1 * i.Z * CharacterHitComponent_1.hA1.Z
          ),
          (s = this.vHr?.CurrentTimeScale),
          (h = this.EVr.GetCurrentValue(EAttributeId.Proto_Mass)),
          this.BVr.MultiplyEqual((MASS_RATE / h) * (s ?? 1)),
          t.Valid &&
            (t.Active && t.SetForceSpeed(this.BVr),
            3 !== t.CharacterMovement.MovementMode &&
              this.Hte.Actor.KuroSetMovementMode({
                Mode: 3,
                Context: "[CharacterHitComponent.DoubleAirHit]",
              }),
            t.SetGravityScale(
              this.DoubleHitInAirEffect.GravityScaleUp,
              this.DoubleHitInAirEffect.GravityScaleDown,
              this.DoubleHitInAirEffect.GravityScaleTop,
              this.DoubleHitInAirEffect.VelocityTop,
              this.DoubleHitInAirEffect.Duration
            ),
            CombatLog_1.CombatLog.Info(
              "Hit",
              this.Entity,
              "DoubleAirHit",
              ["final air hit velocity", this.BVr.ToString()],
              ["last update velocity", i.ToString()],
              ["bounce", CharacterHitComponent_1.hA1.ToString()],
              ["mass", h],
              ["time scale", s],
              ["quat", e.ToString()]
            )),
          this.DoubleHitInAirEffect.Finish(),
          (this.UVr = !0),
          (this.AVr = Time_1.Time.Frame));
      }),
      (this.Rbr = void 0);
  }
  GetHitData() {
    return this.rVr;
  }
  OnInitData() {
    return (this.DoubleHitInAirEffect = new DoubleHitInAirEffect()), !0;
  }
  OnInit() {
    return (
      CharacterHitComponent_1.GVr || (CharacterHitComponent_1.GVr = new Set([4, 7])),
      (this.BeHitSocketName = FNameUtil_1.FNameUtil.EMPTY),
      !0
    );
  }
  OnStart() {
    (this.Hte = this.Entity.GetComponent(3)),
      (this.cBe = this.Entity.GetComponent(39)),
      (this.$zo = this.Entity.GetComponent(172)),
      (this.rJo = this.Entity.GetComponent(173)),
      (this.oVr = this.Entity.GetComponent(54)),
      (this.tVr = this.Entity.GetComponent(67)),
      (this.vHr = this.Entity.GetComponent(120)),
      (this.EVr = this.Entity.GetComponent(171)),
      (this.SVr = this.Entity.GetComponent(203)),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnPositionStateChanged,
        this.DVr
      );
    var t = this.Entity.GetComponent(0)?.GetVisionComponent();
    return (
      t &&
        ((t = PhantomUtil_1.PhantomUtil.GetVisionData(t.VisionId)),
        (this.ShouldOptimize = !!t && 4 === t.类型)),
      (this.MVr = []),
      (this.F1t = (t, i) => {
        this.MVr = this.MVr.filter((t) => EffectSystem_1.EffectSystem.IsValid(t));
        for (const e of this.MVr) EffectSystem_1.EffectSystem.SetTimeScale(e, t);
      }),
      (this.PVr = (t, i) => {
        t === CharacterUnifiedStateTypes_1.ECharPositionState.Air &&
          i === CharacterUnifiedStateTypes_1.ECharPositionState.Water &&
          this.DeActiveStiff("落水");
      }),
      this.lXs(),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharBeHitTimeScale,
        this.F1t
      ),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnPositionStateChanged,
        this.PVr
      ),
      this.FL1(),
      !0
    );
  }
  URe(t) {
    this.SVr?.AddTag(t);
  }
  ARe(t) {
    this.SVr?.RemoveTag(t);
  }
  OVr(t) {
    return this.SVr?.HasTag(t) ?? !1;
  }
  kVr(t) {
    for (const i of t) if (this.OVr(i)) return !0;
    return !1;
  }
  FL1() {
    var t,
      i,
      e = this.Entity.GetComponent(0),
      s = e.GetEntityType();
    s !== Protocol_1.Aki.Protocol.kks.Proto_Player &&
      ((i = e?.GetPbEntityInitData()) &&
        ((t = (i = (0, IComponent_1.getComponent)(i.ComponentsData, "AttributeComponent"))
          ?.HardnessModeId) && (this.HardnessModeId = t),
        (t = i?.RageModeId)) &&
        (this.RageModeId = t),
      this.RefreshHardnessModeConfig(),
      this.RefreshRageModeConfig(),
      (i = e?.GetEntityPropertyConfig()) &&
        0 < i.受击映射索引ID &&
        (this.BeHitMapping = FightLibrary_1.FightLibrary.GetHitMapConfig(i.受击映射索引ID)),
      s === Protocol_1.Aki.Protocol.kks.Proto_Monster) &&
      (this.qL1 = new CharacterHitOptimize_1.CharacterHitOptimize());
  }
  OnEnd() {
    return (
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnPositionStateChanged,
        this.DVr
      ),
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharBeHitTimeScale,
        this.F1t
      ),
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnPositionStateChanged,
        this.PVr
      ),
      this.F1t && this.F1t(1, 0),
      !0
    );
  }
  OnClear() {
    return (
      this.TVr &&
        TimerSystem_1.TimerSystem.Has(this.TVr) &&
        (TimerSystem_1.TimerSystem.Remove(this.TVr), (this.TVr = void 0)),
      (this.ShouldOptimize = !1),
      this.Abr(),
      !0
    );
  }
  GetAcceptedNewBeHitAndReset() {
    var t = this.AcceptedNewBeHit;
    return (
      this.AcceptedNewBeHit &&
        (this.FVr(!1),
        this.Entity.GetComponent(175).MainAnimInstance.AddForceUpdateSlotNameWhenMontageBlend(
          DEFALUT_SLOT_NAME
        )),
      t
    );
  }
  FVr(t) {
    this.AcceptedNewBeHit !== t &&
      ((this.AcceptedNewBeHit = t),
      EventSystem_1.EventSystem.EmitWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnSetNewBeHit,
        this.AcceptedNewBeHit
      ));
  }
  GetEnterFk() {
    return this.EnterFk;
  }
  GetEnterFkAndReset() {
    var t = this.EnterFk;
    return (this.EnterFk = !1), t;
  }
  GetDoubleHitInAir() {
    return this.AVr !== Time_1.Time.Frame && (this.UVr = !1), this.UVr;
  }
  SetBeHitIgnoreRotate(t) {
    this.BeHitIgnoreRotate = t;
  }
  VVr() {
    return (
      !!this.IsTriggerCounterAttack ||
      (!!this.BeHitIgnoreRotate &&
        !CharacterHitComponent_1.GVr?.has(this.BeHitAnim) &&
        this.rJo?.PositionState === CharacterUnifiedStateTypes_1.ECharPositionState.Ground)
    );
  }
  SetRageModeId(t) {
    this.RageModeId = t;
  }
  SetHardnessModeId(t) {
    (this.HardnessModeId = t),
      this.Entity.GetComponent(3).IsAutonomousProxy &&
        ControllerHolder_1.ControllerHolder.CreatureController.HardnessModeChangedRequest(
          this.Entity.Id,
          t
        );
  }
  SetCounterAttackInfo(t) {
    (this.CounterAttackInfoInternal = t), this.URe(1124064628), this.URe(-1793427578);
  }
  SetVisionCounterAttackInfo(t) {
    (this.VisionCounterAttackInfoInternal = t), this.URe(-1576849243);
  }
  SetWindupAttackInfo(t, i) {
    if (((this.WindupAttackInfoInternal = t), this.URe(-1793427578), this.$zo)) {
      var e = this.WindupAttackInfoInternal?.Buff,
        s = e?.Num() ?? 0;
      for (let t = 0; t < s; t++) {
        var h = e.Get(t);
        0 < h &&
          this.$zo.AddBuff(Number(h), {
            InstigatorId: this.$zo.CreatureDataId,
            PreMessageId: i,
            Reason: "开始前摇ANS添加buff",
          });
      }
    }
  }
  SetCounterAttackAnsInfo(t, i) {
    (this.Jtc = t), (this.BFa = i);
  }
  GetRageMode() {
    return this.dVr;
  }
  RefreshRageModeConfig() {
    0 !== this.RageModeId
      ? ((this.dVr = HardnessModeById_1.configHardnessModeById.GetConfig(this.RageModeId)),
        this.dVr ||
          (Log_1.Log.CheckError() &&
            Log_1.Log.Error("Character", 14, "读取RageModeConfig失败", ["id", this.RageModeId])))
      : (this.dVr = void 0);
  }
  GetHardnessMode() {
    return this.CVr;
  }
  RefreshHardnessModeConfig() {
    0 !== this.HardnessModeId
      ? ((this.CVr = HardnessModeById_1.configHardnessModeById.GetConfig(this.HardnessModeId)),
        this.CVr ||
          (Log_1.Log.CheckError() &&
            Log_1.Log.Error("Character", 14, "读取白条表失败", ["id", this.HardnessModeId])))
      : (this.CVr = void 0);
  }
  ReceiveOnHit(i, t, e, s, h, r, a, o, n, _, l) {
    if (this.kVr(forbidHitTagIds))
      this.kVr(enterFkForbidHitTagIds) &&
        this.HVr(EntitySystem_1.EntitySystem.Get(i.BulletEntityId));
    else if (!this.cBe?.CurrentSkill?.Active || !this.cBe.CurrentSkill.SkillInfo.OverrideHit)
      if (((this.rVr = i), this.WVr(), e)) {
        if (
          ((this.LastHitData = i),
          (this.iVr = t),
          (this.EnterFk = h),
          (this.sVr = r),
          (this.cVr = a ? 1 : o ? 2 : 0),
          (this.fVr = !1),
          (this.BeHitTime = UE.GameplayStatics.GetTimeSeconds(this.Hte.Actor)),
          this.BeHitLocation.DeepCopy(i.HitPosition),
          (this.NeedCalculateFallInjure = !0),
          0 < _ && !h)
        ) {
          if (this.OVr(1447214865) && !this.IsTriggerCounterAttack) return void this.jVr();
          if (
            (this.IsTriggerCounterAttack && this.CounterAttackInfoInternal && this.KVr(this.rVr),
            (this.gVr = this.oVr?.TrySwitchHitState(l, !1) ?? 0),
            !this.oVr || this.gVr)
          ) {
            this.BeHitAnim = l;
            e = i.ReBulletData.Base;
            let t = e.BeHitEffect;
            this.sVr && (t = e.HitEffectWeakness);
            r = ConfigManager_1.ConfigManager.BulletConfig.GetBulletHitData(this.iVr, t);
            r
              ? (CombatLog_1.CombatLog.Info("Hit", this.Entity, "远端受击"),
                this.Hte.SetMoveControlled(!1, 2, "远端受击"),
                s && this.Entity.GetComponent(3).SetActorRotation(n, "受击者旋转", !1),
                (this.BeHitAnim = l),
                this.QVr(r))
              : this.HVr(EntitySystem_1.EntitySystem.Get(i.BulletEntityId));
          } else this.HVr(EntitySystem_1.EntitySystem.Get(i.BulletEntityId));
        }
        !this.EnterFk ||
          ((a = t.GetComponent(1))?.Valid &&
            (this.Hte.ActorLocationProxy.Subtraction(a.ActorLocationProxy, this.BeHitDirect),
            this.BeHitDirect.Normalize())) ||
          this.Hte.ActorForwardProxy.Multiply(-1, this.BeHitDirect),
          this.jVr();
      } else this.rVr = void 0;
  }
  vJl(t) {
    this.Hte.CreatureData.GetEntityType() !== Protocol_1.Aki.Protocol.kks.Proto_Monster ||
      this.rJo.IsInFightState() ||
      (this.tVr.CollectSampleAndSend(!0),
      (i = this.Hte.CreatureData.GetPbDataId()),
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug("Character", 50, "怪物受击，主动同步位置", ["PbDataId", i]));
    var i = this.iVr.GetComponent(0).GetCreatureDataId(),
      e = void 0 !== this.rVr?.HitEffect,
      e = !this.VVr() && e && !this.EnterFk;
    let s = void 0;
    const h = this.gVr;
    h && (s = this.oVr?.GetFightState() ?? 0),
      this.HitRequest(
        t,
        i,
        this.rVr,
        this.BeHitAnim,
        this.EnterFk,
        this.sVr,
        this.cVr,
        this.mVr,
        e,
        s,
        (t) => {
          h && this.oVr?.ConfirmState(h);
        }
      );
  }
  OnHit(t, i, e, s, h, r, a, o = !1) {
    const Player = Global_1.Global.BaseCharacter?.CharacterActorComponent.Entity;
    // God Mode
    if (ModManager_1.ModManager.settings.GodMode) {
      const Target = EntitySystem_1.EntitySystem.Get(t.Target.Id);
      if (Target === Player) return;
    }
    CharacterHitComponent_1.$Vr.Start(),
      (this.rVr = t),
      (this.LastHitData = t),
      (this.iVr = EntitySystem_1.EntitySystem.Get(t.Attacker.Id)),
      (this.aVr = e),
      (this.hVr = h),
      (this.lVr = r),
      (this._Vr = a),
      (this.IVr = s),
      (this.fVr = !1),
      (this.ehl = !1),
      (this.sVr = o),
      (this.GL1 = t.ShouldOptimize && !!this.qL1?.IsInCooling()),
      CharacterHitComponent_1.NL1.Start(),
      this.JVr(),
      this.zVr(i),
      this.IsTriggerCounterAttack ? this.ZVr() : (this.eth = this.tth(i)),
      CharacterHitComponent_1.NL1.Stop(),
      CharacterHitComponent_1.VL1.Start(),
      this.t6r(),
      CharacterHitComponent_1.VL1.Stop(),
      CharacterHitComponent_1.jL1.Start(),
      this.o6r(i),
      CharacterHitComponent_1.jL1.Stop(),
      this.iwr(i),
      CharacterHitComponent_1.HL1.Start(),
      this.n6r(),
      CharacterHitComponent_1.HL1.Stop(),
      CharacterHitComponent_1.$L1.Start(),
      this.a6r(i),
      CharacterHitComponent_1.$L1.Stop(),
      this.vJl(i),
      CharacterHitComponent_1.WL1.Start(),
      this.wF_(),
      CharacterHitComponent_1.WL1.Stop(),
      CharacterHitComponent_1.QL1.Start(),
      this.rVr
        ? this.BroadcastEvent(this.rVr)
        : CombatLog_1.CombatLog.Error("Hit", this.Entity, "HitData为空"),
      CharacterHitComponent_1.QL1.Stop(),
      CharacterHitComponent_1.KL1.Start(),
      this.ProcessOnHitMaterial(),
      CharacterHitComponent_1.KL1.Stop(),
      CharacterHitComponent_1.$Vr.Stop(),
      this.jVr();
  }
  jVr() {
    (this.rVr = void 0),
      (this.iVr = void 0),
      (this.lVr = void 0),
      (this._Vr = void 0),
      (this.IVr = !1),
      (this.gVr = 0);
  }
  ActiveStiff(t) {
    0 !== t &&
      (this.TVr &&
        TimerSystem_1.TimerSystem.Has(this.TVr) &&
        (TimerSystem_1.TimerSystem.Remove(this.TVr), (this.TVr = void 0)),
      this.URe(-2044964178),
      0 < t) &&
      (this.TVr = TimerSystem_1.TimerSystem.Delay(
        this.XAl,
        t * BattleUiDefine_1.SECOND_TO_MILLISECOND
      ));
  }
  DeActiveStiff(t = 0) {
    this.TVr &&
      TimerSystem_1.TimerSystem.Has(this.TVr) &&
      (TimerSystem_1.TimerSystem.Remove(this.TVr), (this.TVr = void 0)),
      this.ARe(-2044964178);
  }
  IsStiff() {
    return this.OVr(-2044964178);
  }
  JVr() {
    (this.BeHitBones.length = 0),
      this.rVr.HitPart &&
        !FNameUtil_1.FNameUtil.IsNothing(this.rVr.HitPart) &&
        this.BeHitBones.push(this.rVr.HitPart),
      this.BeHitBones && 0 < this.BeHitBones?.length
        ? (this.BeHitSocketName = this.BeHitBones[0])
        : (this.BeHitSocketName = FNameUtil_1.FNameUtil.EMPTY);
  }
  zVr(t) {
    this.c6r(t)
      ? (this.cVr = 2)
      : this.rVr.HitEffect
        ? (this.u6r(t) && (this.cVr = 1),
          (t = this.IsTriggerCounterAttack ? 7 : this.rVr.HitEffect.被击动作),
          (t = this.y6r(t)),
          this.oVr &&
            !this.oVr.CheckSwitchHitState(t, !0) &&
            (Log_1.Log.CheckDebug() &&
              Log_1.Log.Debug(
                "Battle",
                20,
                "切到弹刀状态失败, 弹刀状态为4, 弹刀状态必须大于CurrentState",
                ["HitAnim", t],
                ["CurrentState", this.oVr.CurrentState],
                ["Bullet", this.rVr.BulletId]
              ),
            (this.cVr = 0)))
        : (this.cVr = 0);
  }
  u6r(t) {
    var i = t.Data.Logic;
    if (!i.CanCounterAttack) return !1;
    if (!this.OVr(1124064628))
      return (
        Log_1.Log.CheckDebug() && Log_1.Log.Debug("Character", 20, "CheckNormalCounterAttack无Tag"),
        !1
      );
    if (this.CounterAttackInfoInternal.QTE弹刀忽略角度距离检测) {
      (t = t.GetBulletInfo()),
        (t = this.iVr.GetComponent(39).GetSkillInfo(t.BulletInitParams.SkillId));
      if (t && 4 === t.SkillGenre) return !0;
    }
    if (i.CounterAttackIgnoreAngle && i.CounterAttackIgnoreDist)
      return (
        BulletConstant_1.BulletConstant.OpenHitActorLog &&
          Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug("Test", 20, "检查弹反 不需要检查角度和距离", [
            "Actor",
            this.Hte.Actor.GetName(),
          ]),
        !0
      );
    var e = this.rVr.HitPart,
      s = this.CounterAttackInfoInternal.弹反部位,
      h = s.Num();
    let r = !1;
    if (e.op_Equality(FNameUtil_1.FNameUtil.NONE) && 0 < h)
      return Log_1.Log.CheckDebug() && Log_1.Log.Debug("Character", 20, "检查弹反 击中部位"), !1;
    BulletConstant_1.BulletConstant.OpenHitActorLog &&
      Log_1.Log.CheckDebug() &&
      Log_1.Log.Debug("Test", 20, "检查弹反 击中部位", ["部位", e.toString()]);
    for (let t = 0; t < h; t++) {
      var a = s.Get(t);
      if (
        (BulletConstant_1.BulletConstant.OpenHitActorLog &&
          Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug("Test", 20, "检查弹反 配置部位", ["部位", a.toString()]),
        a.op_Equality(e))
      ) {
        r = !0;
        break;
      }
    }
    if (!r && 0 < h) return !1;
    this.xVr.FromUeVector(this.iVr.GetComponent(3).ActorLocationProxy),
      r
        ? ((t = this.Hte.GetBoneLocation(e.toString())),
          this.wVr.FromUeVector(t),
          DEBUG &&
            UE.KismetSystemLibrary.D_DrawDebugSphere(
              GlobalData_1.GlobalData.GameInstance,
              t,
              10,
              void 0,
              ColorUtils_1.ColorUtils.LinearGreen,
              4
            ),
          this.xVr.SubtractionEqual(this.wVr))
        : this.xVr.SubtractionEqual(this.Hte.ActorLocationProxy);
    var i = this.xVr.Size(),
      t =
        (this.xVr.Normalize(MathCommon_1.MathCommon.KindaSmallNumber),
        Vector_1.Vector.DotProduct(this.Hte.ActorForwardProxy, this.xVr)),
      o = Math.cos(this.CounterAttackInfoInternal.最大触发夹角 * MathUtils_1.MathUtils.DegToRad),
      n = this.CounterAttackInfoInternal.最大触发距离;
    return (
      BulletConstant_1.BulletConstant.OpenHitActorLog &&
        Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug(
          "Test",
          20,
          "检查弹反 最大距离和最大触发夹角",
          ["当前距离", i],
          ["最大触发距离", n],
          ["夹角cos值", t],
          ["最大触发夹角cos值", o]
        ),
      i < n && o < t
    );
  }
  c6r(t) {
    return !!t.Data.Logic.CanVisionCounterAttack && !!this.OVr(-1576849243);
  }
  tth(t) {
    return !!(
      this.rVr.HitEffect &&
      this.Hte.CreatureData.IsMonster() &&
      t?.Data.Logic.CanBreakWindupAttack &&
      this.OVr(-1793427578)
    );
  }
  iwr(i) {
    if (!this.GL1) {
      var e = this.rVr.ReBulletData;
      const h = e.TimeScale;
      let t = this.sVr ? h.AttackerTimeScaleOnHitWeakPoint : h.TimeScaleOnAttack;
      if (
        (h.TimeScaleOnAttackIgnoreAttacker
          ? 0 < t.时间膨胀时长 &&
            BulletUtil_1.BulletUtil.SetTimeScale(
              i.GetBulletInfo(),
              t.优先级,
              t.时间膨胀值,
              t.时间膨胀变化曲线,
              t.时间膨胀时长,
              1
            )
          : 0 < t.时间膨胀时长 &&
            (2 === e.Logic.Type && this.xoa?.替换近战子弹顿帧 && (t = this.xoa.顿帧),
            this.iVr
              .GetComponent(120)
              .SetTimeScale(t.优先级, t.时间膨胀值, t.时间膨胀变化曲线, t.时间膨胀时长, 1),
            (i = h.CharacterCustomKeyTimeScale),
            StringUtils_1.StringUtils.IsEmpty(i) ||
              ((s = ModelManager_1.ModelManager.BulletModel.GetEntityIdByCustomKey(
                this.iVr.Id,
                i,
                this.rVr.BulletId.toString()
              )),
              (s = ModelManager_1.ModelManager.CharacterModel.GetHandle(s))?.Valid
                ? s.Entity.GetComponent(120)?.SetTimeScale(
                    t.优先级,
                    t.时间膨胀值,
                    t.时间膨胀变化曲线,
                    t.时间膨胀时长,
                    1
                  )
                : Log_1.Log.CheckWarn() &&
                  Log_1.Log.Warn(
                    "Character",
                    20,
                    "",
                    ["自定义连携顿帧单位key", i],
                    ["子弹ID", this.rVr.BulletId]
                  ))),
        this.vHr && !e.Base.ContinuesCollision && !this.OVr(-648310348))
      ) {
        const h = this.rVr.ReBulletData.TimeScale;
        var s = this.sVr ? h.VictimTimeScaleOnHitWeakPoint : h.TimeScaleOnHit;
        BulletUtil_1.BulletUtil.SetVictimTimeScale(
          this.rVr.BulletEntityId,
          this.Entity.Id,
          this.vHr,
          s.优先级,
          s.时间膨胀值,
          s.时间膨胀变化曲线,
          s.时间膨胀时长,
          2,
          h.RemoveHitTimeScaleOnDestroy
        );
      }
    }
  }
  iHo() {
    if (this.Hte && this.rVr) {
      var e = this.rVr.ReBulletData;
      if (e) {
        let t = !0,
          i = void 0;
        return (
          this.Hte.IsPartHit &&
            ((t = e.Base.EnablePartHitAudio),
            FNameUtil_1.FNameUtil.IsNothing(this.rVr.HitPart) ||
              (i = this.rVr.HitPart?.toString())),
          BulletCollisionUtil_1.BulletCollisionUtil.GetHitEffects(
            this.Hte,
            e.Render,
            this.sVr,
            i,
            0 < this.rVr.DamageId,
            t,
            this,
            this.SVr
          )
        );
      }
    }
  }
  WVr() {
    var t = this.iHo();
    if (t && 0 < t.size) {
      var i = this.rVr.ReBulletData.Render,
        s = i.EffectOnHitConf.get(0),
        h = this.rVr.HitPosition,
        s = s ? s.Scale : Vector_1.Vector.OneVectorProxy,
        h =
          (this.oHo.Set(h, this.rVr.HitEffectRotation.Quaternion(), s),
          CharacterHitComponent_1.rHo.Start(),
          this.rVr.Attacker?.GetComponent(50));
      let e = !1;
      (0, RegisterComponent_1.isComponentInstance)(h, 187) && (e = "p1" === h.Priority.State);
      var r = BulletStaticFunction_1.HitStaticFunction.CreateEffectContext(
        this.rVr.Attacker,
        !0,
        e
      );
      const _ = i.AudioOnHit;
      var a,
        o,
        n = (t, i) => {
          BulletStaticFunction_1.HitStaticFunction.PlayHitAudio(t, i, _, e);
        };
      for ([a, o] of t)
        EffectSystem_1.EffectSystem.SpawnEffect(
          GlobalData_1.GlobalData.World,
          this.oHo.ToUeTransform(),
          a,
          "[CharacterHitComponent.ProcessHitEffect]",
          r,
          void 0,
          void 0,
          1 === o ? n : void 0
        );
      CharacterHitComponent_1.rHo.Stop();
    }
  }
  o6r(t) {
    this.d6r();
    var i = this.C6r(this.rVr),
      t = t?.GetBulletInfo(),
      e = t?.BulletDataMain?.Base.MultiDamageId,
      s = e?.length ?? 0;
    if (0 < s && t.CollisionInfo.IntervalMs <= 0)
      for (let t = 0; t < s; t++) (i.DamageId = e[t]), this.cz_(i);
    else this.cz_(i);
  }
  cz_(t) {
    this.hVr && 0 < this.hVr.length
      ? this.g6r(this.hVr, t)
      : (this.f6r(this.lVr, t), this.IVr && this.p6r(this._Vr, t));
  }
  g6r(t, i) {
    let e = !1;
    for (const r of t) e ||= r.IsTransferDamage;
    for (const a of t) {
      var s = !(a.SeparateDamage && e),
        h = this.v6r(i, !1, s, a.Index);
      s || (this.ToughDecreaseValue = h.ToughResult);
    }
    e && ((t = this.v6r(i, !1, !e, t[0].Index)), (this.ToughDecreaseValue = t.ToughResult));
  }
  f6r(t, i) {
    if (t)
      for (const s of t) {
        var e = s.IsWeaknessHit;
        this.v6r(i, e, !1, s.Index);
      }
  }
  p6r(t, i) {
    t && 0 < t.length
      ? ((t = t[0]),
        (t = this.v6r(i, this.sVr, !1, t.Index)),
        (this.ToughDecreaseValue = t.ToughResult))
      : ((t = this.v6r(i, this.sVr, !1)), (this.ToughDecreaseValue = t.ToughResult));
  }
  v6r(t, i, e, s = -1, h = 1) {
    var r,
      a,
      o = t.DamageId,
      n = t.Target;
    return o < 1 || !n
      ? { DamageResult: 0, ToughResult: 0 }
      : ((n = t.Target.GetComponent(20)),
        (a = t.Target.GetComponent(39)),
        n && a
          ? ((r = EntitySystem_1.EntitySystem.Get(t.BulletEntityId)?.GetBulletInfo().ContextId),
            (a = a.CurrentSkill),
            n?.ExecuteBulletDamage(
              t.BulletEntityId,
              {
                DamageDataId: o,
                SkillLevel: t.SkillLevel,
                Attacker: t.Attacker,
                HitPosition: t.HitPosition.ToUeVector(),
                IsAddEnergy: this.aVr,
                IsCounterAttack: this.IsTriggerCounterAttack,
                ForceCritical: i,
                IsBlocked: e,
                PartId: s,
                ExtraRate: h,
                CounterSkillMessageId: this.IsTriggerCounterAttack ? a?.LFc : void 0,
                BulletId: t.BulletId,
                CounterSkillId: this.IsTriggerCounterAttack ? Number(a?.SkillId) : void 0,
                ShouldOptimize: t.ShouldOptimize,
              },
              r
            ))
          : { DamageResult: DEFAULT_DAMAGE, ToughResult: 0 });
  }
  C6r(t) {
    var t = Object.assign(t),
      i = this.iVr.GetComponent(55)?.GetAttributeHolder();
    return (
      i && (t.Attacker = i),
      (t.Target =
        this.Entity.GetComponent(55)?.GetAttributeHolderExceptVisionSummon() ?? this.Entity),
      t
    );
  }
  n6r() {
    if (
      !this.GL1 &&
      !CameraController_1.CameraController.Model.IsModeEnabled(2) &&
      !CameraController_1.CameraController.Model.IsModeEnabled(1) &&
      this.rVr.IsShaking
    ) {
      var i = this.rVr.ReBulletData.Render;
      let t = this.sVr ? i.AttackerCameraShakeOnHitWeakPoint : i.AttackerCameraShakeOnHit;
      var e,
        i = i.VictimCameraShakeOnHit;
      0 < t.length
        ? (this.xoa && 0 < (e = this.xoa.震屏.ToAssetPathName()).length && (t = e),
          ResourceSystem_1.ResourceSystem.LoadAsync(t, UE.Class, (t) => {
            var i = Global_1.Global.CharacterCameraManager.D_GetCameraLocation();
            CameraController_1.CameraController.PlayWorldCameraShake(
              t,
              i,
              0,
              exports.OUTER_RADIUS,
              1,
              !1
            );
          }))
        : 0 < i.length &&
          ResourceSystem_1.ResourceSystem.LoadAsync(i, UE.Class, (t) => {
            var i = Global_1.Global.CharacterCameraManager.D_GetCameraLocation();
            CameraController_1.CameraController.PlayWorldCameraShake(
              t,
              i,
              0,
              exports.OUTER_RADIUS,
              1,
              !1
            );
          });
    }
  }
  HVr(t) {
    !t ||
      t.GetBulletInfo().CollisionInfo.DamageId <= 0 ||
      ((this.EnterFk = !0),
      (t = t.GetBulletInfo()),
      BulletUtil_1.BulletUtil.GetHitRotator(t, this.Hte, this.Gue),
      this.Gue.Quaternion(this.az),
      this.az.RotateVector(Vector_1.Vector.ForwardVectorProxy, this.BeHitDirect),
      this.BeHitDirect.MultiplyEqual(-1),
      this.M6r(0));
  }
  a6r(i) {
    if (this.IsTriggerCounterAttack)
      CharacterHitComponent_1.E6r.Start(), this.KVr(this.rVr), CharacterHitComponent_1.E6r.Stop();
    else if (this.GL1) return;
    if (this.kVr(forbidHitTagIds)) this.kVr(enterFkForbidHitTagIds) && this.HVr(i);
    else {
      var e = i.GetBulletInfo(),
        s = this.rVr.HitEffect;
      if (s) {
        this.BeHitTime = UE.GameplayStatics.GetTimeSeconds(this.Hte.Actor);
        var h = this.EVr?.GetCurrentValue(EAttributeId.Proto_Tough) ?? 0,
          h =
            (this.BeHitLocation.DeepCopy(this.rVr.HitPosition),
            (this.NeedCalculateFallInjure = !0),
            0 < h || this.ToughDecreaseValue <= 0 || this.OVr(1447214865)),
          r = this.IsTriggerCounterAttack && this.fVr;
        if (h && !r) this.HVr(i), this.JSc();
        else {
          this.cBe?.LogEndSkillReason(i, h, r), CharacterHitComponent_1.S6r.Start();
          let t = 0;
          s && (t = this.eth || this.fVr ? 7 : s.被击动作),
            (t = this.y6r(t)),
            this.oVr && !this.oVr.CheckSwitchHitState(t, !0)
              ? (this.HVr(i), CharacterHitComponent_1.S6r.Stop(), this.JSc())
              : (CombatLog_1.CombatLog.Info("Hit", this.Entity, "受击", ["BeHitAnim", t]),
                (this.ehl = !0),
                (this.gVr = this.oVr?.SwitchHitState(t, !0) ?? 0),
                this.JSc(),
                RoleAudioController_1.RoleAudioController.OnPlayerIsHit(this.Entity),
                ModelManager_1.ModelManager.GameModeModel.IsMulti &&
                  this.Hte.SetMoveControlled(!0, 2, "受击"),
                (this.BeHitAnim = t),
                (this.EnterFk = !1),
                this.VVr()
                  ? (BulletUtil_1.BulletUtil.GetHitRotator(e, this.Hte, this.Gue),
                    (this.mVr = this.Gue.ToUeRotator()))
                  : (this.mVr = BulletUtil_1.BulletUtil.SetHitRotator(
                      e,
                      this.Hte,
                      s.受击朝向Z轴偏转
                    )),
                this.I6r(),
                CharacterHitComponent_1.S6r.Stop(),
                CharacterHitComponent_1.T6r.Start(),
                this.VVr() &&
                  (this.BeHitAnim = BulletUtil_1.BulletUtil.GetOverrideHitAnimByAngle(
                    this.Hte,
                    this.BeHitAnim,
                    this.mVr.Yaw
                  )),
                this.L6r(s),
                this.qL1?.UpdateLastHitTime(),
                this.M6r(lightHits.has(this.BeHitAnim) ? 1 : 2),
                CharacterHitComponent_1.T6r.Stop());
        }
      }
    }
  }
  ConfirmExecutedBeHitState() {
    this.LF_ = !0;
  }
  wF_() {
    if (this.IsTriggerCounterAttack || !this.GL1) {
      let t = 0;
      var i;
      (0 ===
        (t = 2 !== this.cVr || this.fVr ? t : this.VisionCounterAttackInfoInternal.对策事件ID) &&
        !this.ehl) ||
        ((i = this.Entity.GetComponent(75))
          ? ((this.LF_ = !1),
            i.StateMachineGroup?.TickBeHitStateMachine(!0, this.BeHitAnim, t),
            this.LF_ ||
              (this.DeActiveStiff("未执行受击节点"),
              this.Hte.ResetMoveControlled("未执行受击节点"),
              this.oVr?.ResetState(),
              BaseHitComponent_1.BaseHitComponent.HitEndRequest(this.Entity),
              CombatLog_1.CombatLog.Info("Hit", this.Entity, "执行受击动作失败，未执行受击节点")))
          : CombatLog_1.CombatLog.Error(
              "Hit",
              this.Entity,
              "执行受击动作失败，该实体没有状态机组件"
            ));
    }
  }
  t6r() {
    this.OVr(1124064628) && this.$zo.RemoveBuffByTag(1124064628, "撞墙或受击逻辑触发移除");
  }
  BroadcastEvent(t) {
    let i = 0;
    2 !== this.cVr ||
      this.fVr ||
      ((i = this.VisionCounterAttackInfoInternal.对策事件ID),
      GlobalData_1.GlobalData.BpEventManager.当触发对策事件时.Broadcast(
        this.VisionCounterAttackInfoInternal.对策事件ID,
        t.ToUeHitInformation()
      ));
    var e = EntitySystem_1.EntitySystem.Get(t.BulletEntityId).GetBulletInfo(),
      s = Number(e.BulletInitParams.SkillId),
      h = e.BulletInitParams.SkillContextId,
      r = this.iVr?.GetComponent(39),
      h = {
        Attacker: this.iVr,
        Target: this.Entity,
        BulletId: t.BulletId,
        HasBeHitAnim: this.ehl,
        BeHitAnim: this.BeHitAnim,
        VisionCounterAttackId: i,
        CounterAttackType: this.cVr,
        SkillId: s,
        SkillHitCount: ModelManager_1.ModelManager.CombatMessageModel?.AddSkillHitCount(h),
        BulletHitCount: e.HitNumberAll,
        SkillGenre: r?.GetSkillInfo(s)?.SkillGenre ?? -1,
        BattleFlags: r?.GetSkill(s)?.BattleFlags ?? [],
      };
    this.iVr &&
      (SceneTeamController_1.SceneTeamController.EmitEvent(
        this.iVr,
        EventDefine_1.EEventName.CharHitLocal,
        t,
        h
      ),
      (e = this.iVr.GetComponent(0))) &&
      (r = e.IsVision()
        ? (this.iVr.GetComponent(55)?.GetAttributeHolder() ?? this.iVr)
        : this.iVr) &&
      SceneTeamController_1.SceneTeamController.EmitEvent(
        r,
        EventDefine_1.EEventName.CharHitIncludingVision,
        t,
        h
      ),
      SceneTeamController_1.SceneTeamController.EmitEvent(
        this.Entity,
        EventDefine_1.EEventName.CharBeHitLocal,
        t,
        h
      ),
      GlobalData_1.GlobalData.BpEventManager.当有角色受击时.Broadcast(
        this.Hte.Actor,
        t.ToUeHitInformation()
      ),
      this.Entity.GetComponent(75)?.Tick(0);
  }
  L6r(t) {
    if (
      (this.OVr(504239013) &&
        (i = this.Entity.GetComponent(3)).Valid &&
        i.Actor.KuroSetMovementMode({
          Mode: 3,
          Context: "[CharacterHitComponent.SwitchHitEffect]",
        }),
      this.FVr(!0),
      this.Entity.GetComponent(173).ExitAimStatus(),
      EventSystem_1.EventSystem.EmitWithTarget(this.Entity, EventDefine_1.EEventName.CharBeHitAnim),
      this.OVr(-1732582420))
    ) {
      var i = t.地面受击滞空,
        e = i.滞空时间 + i.到滞空点时间;
      this.R6r(e) ? this.U6r(i, e) : this.A6r(t);
    } else if (!this.OVr(-648310348))
      if (this.OVr(-1898186757)) {
        if (4 === this.BeHitAnim) {
          (i = t.地面受击滞空), (e = i.滞空时间 + i.到滞空点时间);
          if (this.R6r(e)) return void this.U6r(i, e);
          if (0 < t.地面受击速度.Z) return void this.P6r(t, !1);
        }
        this.A6r(t);
      } else {
        (i = t.空中受击滞空), (e = i.滞空时间 + i.到滞空点时间);
        this.R6r(e) ? this.U6r(i, e) : this.P6r(t, !0);
      }
  }
  U6r(t, i) {
    var e,
      s,
      h,
      r,
      a,
      o = this.Entity.GetComponent(176);
    o.Valid &&
      ((e = this.Hte),
      (s = WhirlpoolPoint_1.WhirlpoolPoint.GenId()),
      this.BVr.FromUeVector(t.滞空相对位置),
      MathUtils_1.MathUtils.TransformPosition(
        e.ActorLocationProxy,
        e.ActorRotationProxy,
        e.ActorScaleProxy,
        this.BVr,
        this.bVr
      ),
      (h = this.iVr.GetComponent(3)),
      (r = t.滞空高度限制),
      o.IsStandardGravity
        ? (a = h.ActorLocationProxy.Z + r) < this.bVr.Z && (this.bVr.Z = a)
        : (this.bVr.Subtraction(h.ActorLocationProxy, this.gh1),
          r < (a = this.gh1.DotProduct(o.GravityUp)) &&
            (o.GravityUp.Multiply(a - r, this.gh1), this.bVr.SubtractionEqual(this.gh1))),
      o.BeginWhirlpool(s, t.到滞空点时间, this.bVr, e.ActorLocationProxy, i, t.到滞空点曲线));
  }
  R6r(t) {
    return 0 < t;
  }
  QVr(t) {
    this.FVr(!0),
      this.Entity.GetComponent(173).ExitAimStatus(),
      EventSystem_1.EventSystem.EmitWithTarget(this.Entity, EventDefine_1.EEventName.CharBeHitAnim),
      4 === this.BeHitAnim ? this.P6r(t, !1) : this.A6r(t);
  }
  ActivateHitStateByHitAnim() {
    switch (this.BeHitAnim) {
      case 0:
      case 1:
      case 8:
      case 9:
        this.Entity.GetComponent(173).SetMoveState(
          CharacterUnifiedStateTypes_1.ECharMoveState.SoftKnock
        );
        break;
      case 2:
      case 3:
      case 10:
      case 11:
      case 6:
        this.Entity.GetComponent(173).SetMoveState(
          CharacterUnifiedStateTypes_1.ECharMoveState.HeavyKnock
        );
        break;
      case 4:
        this.Entity.GetComponent(173).SetMoveState(
          CharacterUnifiedStateTypes_1.ECharMoveState.KnockUp
        );
        break;
      case 5:
        this.Entity.GetComponent(173).SetMoveState(
          CharacterUnifiedStateTypes_1.ECharMoveState.KnockDown
        );
        break;
      case 7:
        this.Entity.GetComponent(173).SetMoveState(
          CharacterUnifiedStateTypes_1.ECharMoveState.Parry
        );
    }
  }
  P6r(t, i) {
    this.ActiveStiff(-1);
    var e,
      s = this.Entity.GetComponent(176);
    s.Valid &&
      ((e = this.Hte),
      this.BVr.FromUeVector(i ? t.空中受击速度 : t.地面受击速度),
      (i = this.EVr?.GetCurrentValue(EAttributeId.Proto_Mass) ?? MASS_RATE),
      this.BVr.MultiplyEqual(MASS_RATE / i),
      s.GetWhirlpoolEnable() && s.EndWhirlpool(),
      3 !== s.CharacterMovement.MovementMode &&
        e.Actor.KuroSetMovementMode({ Mode: 3, Context: "[CharacterHitComponent.AirHit]" }),
      e.ActorQuatProxy.RotateVector(this.BVr, this.bVr),
      s.Active && s.SetForceFallingSpeed(this.bVr, 31862857),
      (e = 0 < (i = t.空中受击移动时间) ? i : t.地面受击移动时间),
      s.SetGravityScale(t.上升标量, t.下落标量, t.弧顶标量, t.速度阈值, e),
      0 < t.落地反弹.Z
        ? this.DoubleHitInAirEffect.FromUeHitEffect(t)
        : this.DoubleHitInAirEffect.Finish());
  }
  A6r(t) {
    var i,
      e = new UE.VectorDouble(t.地面受击速度.X, t.地面受击速度.Y, 0),
      s = t.地面受击最小速度,
      h = t.地面受击最大速度,
      r = t.地面受击移动时间,
      a = t.命中硬直时间,
      t = t.地面受击移动曲线;
    0 < r &&
      ((i = this.EVr?.GetCurrentValue(EAttributeId.Proto_Mass) ?? MASS_RATE),
      (e = e.op_Multiply(MASS_RATE / i)),
      (i = this.Entity.GetComponent(176)).Valid) &&
      (i.GetWhirlpoolEnable() && i.EndWhirlpool(),
      (this.yVr = i.SetAddMove(e, r, void 0, this.yVr, t, s, h))),
      this.ActiveStiff(a);
  }
  y6r(t) {
    let i = void 0;
    var e;
    return (
      !this.BeHitMapping || this.BeHitMapping.ID <= 0
        ? (i = t)
        : t < (e = this.BeHitMapping.映射表).Num()
          ? (i = e.Get(t))
          : ((i = t),
            CombatLog_1.CombatLog.Error("Hit", this.Entity, "HitOverride越界", ["hitAnim", t])),
      i
    );
  }
  ZVr() {
    RoleAudioController_1.RoleAudioController.PlayRoleAudio(this.iVr, 2005);
    var t = this.iVr.CheckGetComponent(172);
    switch (this.cVr) {
      case 1:
        0 < this.CounterAttackInfoInternal.攻击者应用BuffID &&
          SkillMessageController_1.SkillMessageController.CloseMonsterServerLogic &&
          t.AddBuff(Number(this.CounterAttackInfoInternal.攻击者应用BuffID), {
            InstigatorId: t.CreatureDataId,
            PreMessageId: this.Jtc,
            Reason: "拼刀攻击者应用Buff",
          }),
          0 < this.CounterAttackInfoInternal.被弹反者应用BuffID &&
            SkillMessageController_1.SkillMessageController.CloseMonsterServerLogic &&
            this.$zo?.AddBuff(Number(this.CounterAttackInfoInternal.被弹反者应用BuffID), {
              InstigatorId: this.$zo?.CreatureDataId,
              PreMessageId: this.Jtc,
              Reason: "拼刀受击者应用Buff",
            });
        break;
      case 2:
        0 < this.VisionCounterAttackInfoInternal.攻击者应用BuffID &&
          SkillMessageController_1.SkillMessageController.CloseMonsterServerLogic &&
          t.AddBuff(Number(this.VisionCounterAttackInfoInternal.攻击者应用BuffID), {
            InstigatorId: t.CreatureDataId,
            PreMessageId: this.Jtc,
            Reason: "对策攻击者应用Buff",
          }),
          0 < this.VisionCounterAttackInfoInternal.被对策者应用BuffID &&
            SkillMessageController_1.SkillMessageController.CloseMonsterServerLogic &&
            this.$zo?.AddBuff(Number(this.VisionCounterAttackInfoInternal.被对策者应用BuffID), {
              InstigatorId: this.$zo?.CreatureDataId,
              PreMessageId: this.Jtc,
              Reason: "对策受击者应用Buff",
            });
    }
    t.AddBuff(CharacterBuffIds_1.buffId.CounterInvincibleCommon, {
      InstigatorId: t.CreatureDataId,
      PreMessageId: this.Jtc,
      Reason: "弹反攻击者无敌",
    });
  }
  KVr(t) {
    switch (this.cVr) {
      case 1:
        this.x6r(t);
        break;
      case 2:
        this.w6r(t);
    }
  }
  x6r(t) {
    let i = this.CounterAttackInfoInternal.无弹反动作效果;
    (this.fVr = this.B6r()),
      this.fVr && (i = this.CounterAttackInfoInternal.有弹反动作效果),
      this.b6r(t, i),
      this.q6r(i),
      this.iVr.GetComponent(3).IsAutonomousProxy && this.G6r(i),
      this.N6r();
    t = this.CounterAttackInfoInternal?.结束事件Tag;
    t?.TagName !== StringUtils_1.NONE_STRING && this.SVr?.AddTag(t?.TagId ?? 0);
  }
  w6r(t) {
    this.fVr = !this.VisionCounterAttackInfoInternal.广播对策事件;
    var i = this.VisionCounterAttackInfoInternal.对策动作效果;
    this.b6r(t, i),
      this.q6r(i),
      this.iVr.GetComponent(3).IsAutonomousProxy && !this.OVr(1161958668) && this.G6r(i),
      this.N6r();
  }
  d6r() {
    !this.$zo ||
      1 !== this.cVr ||
      (this.$zo.HasBuffAuthority() &&
        0 < this.CounterAttackInfoInternal.ANS期间被弹反者生效的BuffID &&
        SkillMessageController_1.SkillMessageController.CloseMonsterServerLogic &&
        this.$zo.AddBuff(Number(this.CounterAttackInfoInternal.ANS期间被弹反者生效的BuffID), {
          InstigatorId: this.$zo.CreatureDataId,
          PreMessageId: this.Jtc,
          Reason: "弹反ANS附加的buff",
        }),
      this.CounterAttackInfoInternal.削韧倍率 <= 1) ||
      (this.pVr = this.$zo.AddAttributeRateModifierLocal(
        EAttributeId.Proto_ToughReduce,
        this.CounterAttackInfoInternal.削韧倍率,
        "弹反修改韧性倍率"
      ));
  }
  CounterAttackEnd() {
    this.pVr && this.$zo?.RemoveBuffByHandle(this.pVr),
      SkillMessageController_1.SkillMessageController.CloseMonsterServerLogic &&
        this.$zo?.RemoveBuff(
          Number(this.CounterAttackInfoInternal.ANS期间被弹反者生效的BuffID),
          -1,
          "结束弹反ANS附加的buff"
        ),
      this.ARe(1124064628),
      this.ARe(-1793427578),
      (this.CounterAttackInfoInternal = void 0),
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug("Character", 20, "CounterAttackEnd", ["CounterAttackType", this.cVr]),
      (this.cVr = 0);
  }
  VisionCounterAttackEnd() {
    this.ARe(-1576849243);
  }
  WindupAttackEnd() {
    if ((this.ARe(-1793427578), (this.eth = !1), this.$zo)) {
      var i = this.WindupAttackInfoInternal?.Buff,
        e = i?.Num() ?? 0;
      for (let t = 0; t < e; t++) {
        var s = i.Get(t);
        0 < s && this.$zo.RemoveBuff(Number(s), -1, "结束前摇ANS的buff");
      }
    }
  }
  B6r() {
    if (!this.CounterAttackInfoInternal.受击动画忽略Buff检测 && this.$zo) {
      var i = this.CounterAttackInfoInternal.检测Buff列表;
      for (let t = 0; t < i.Num(); t++) {
        var e = i.Get(t),
          s = this.$zo.GetBuffTotalStackById(Number(e.BuffID), !1);
        if (e.层数 > s) return !1;
      }
    }
    return !0;
  }
  SetCounterAttackEndTime(t) {
    var i = this.Entity.GetComponent(175).MainAnimInstance;
    i && (this.vVr = t + i.Montage_GetPosition(i.GetCurrentActiveMontage()));
  }
  OnReboundSuccess(t, i, e) {
    var e = BulletStaticFunction_1.HitStaticFunction.CreateEffectContext(this.Entity, e),
      i = EffectSystem_1.EffectSystem.SpawnEffect(
        GlobalData_1.GlobalData.World,
        i,
        t.ToAssetPathName(),
        "[CharacterHitComponent.OnReboundSuccess]",
        e
      );
    i &&
      EffectSystem_1.EffectSystem.IsValid(i) &&
      ((t = this.vHr) &&
        ((e = t.CurrentTimeScale),
        EffectSystem_1.EffectSystem.SetTimeScale(i, e * this.TimeDilation, !0)),
      this.MVr.push(i));
  }
  b6r(t, i) {
    var e = i.特效DA;
    e.AssetPathName &&
      this.PlayCounterAttackEffect(
        t,
        e.AssetPathName?.toString(),
        new UE.VectorDouble(i.特效Scale)
      );
  }
  PlayCounterAttackEffect(t, i, e) {
    var s;
    i &&
      ((e = new UE.TransformDouble(
        t.HitEffectRotation.ToUeRotator(),
        t.HitPosition.ToUeVector(),
        e
      )),
      (s = ModelManager_1.ModelManager.BulletModel.GetBulletEntityById(t.BulletEntityId)),
      (t = BulletStaticFunction_1.HitStaticFunction.CreateEffectContext(
        t.Attacker,
        s?.GetBulletInfo().EffectInfo.DisablePostProcess ?? !1
      )),
      (s = EffectSystem_1.EffectSystem.SpawnEffect(
        GlobalData_1.GlobalData.World,
        e,
        i,
        "[CharacterHitComponent.BeCounterattack]",
        t
      )),
      EffectSystem_1.EffectSystem.IsValid(s)) &&
      ((e = this.vHr) &&
        ((i = e.CurrentTimeScale),
        EffectSystem_1.EffectSystem.SetTimeScale(s, i * this.TimeDilation, !0)),
      this.MVr.push(s));
  }
  q6r(t) {
    var i = t.被击者顿帧;
    this.vHr?.SetTimeScale(i.优先级, i.时间膨胀值, i.时间膨胀变化曲线, i.时间膨胀时长, 4),
      (i = t.攻击者顿帧),
      this.iVr
        .GetComponent(120)
        .SetTimeScale(i.优先级, i.时间膨胀值, i.时间膨胀变化曲线, i.时间膨胀时长, 3);
  }
  G6r(t) {
    var i;
    CameraController_1.CameraController.Model.IsModeEnabled(2) ||
      CameraController_1.CameraController.Model.IsModeEnabled(1) ||
      ((i =
        ModelManager_1.ModelManager.CameraModel.FightCamera.GetComponent(
          4
        ).CameraActor.D_K2_GetActorLocation()),
      CameraController_1.CameraController.PlayWorldCameraShake(
        t.震屏,
        i,
        0,
        exports.OUTER_RADIUS,
        1,
        !1
      )),
      CameraController_1.CameraController.FightCamera.LogicComponent.ApplyCameraModify(
        t.摄像机设置.Tag,
        t.摄像机设置.持续时间,
        t.摄像机设置.淡入时间,
        t.摄像机设置.淡出时间,
        t.摄像机设置.摄像机配置,
        void 0,
        t.摄像机设置.打断淡出时间,
        void 0,
        void 0,
        void 0,
        t.摄像机设置.CameraAttachSocket
      );
  }
  N6r() {
    var t;
    this.kVr(forbidHitTagIds) ||
      ((t = this.Entity.GetComponent(175)).Valid && t.MontageSetPosition(this.vVr));
  }
  get IsTriggerCounterAttack() {
    return 0 !== this.cVr;
  }
  JSc() {
    var t, i;
    this.IsTriggerCounterAttack &&
      ((i = this.iVr.GetComponent(0).GetCreatureDataId()),
      ((t = Protocol_1.Aki.Protocol.$sc.create()).s5n = i),
      this.gVr && (t.mVn = this.oVr?.GetFightState() ?? 0),
      (t.jsc = this.cVr),
      (t.Hsc = this.BFa),
      ((i = Protocol_1.Aki.Protocol.ooc.create()).$sc = t),
      CombatMessage_1.CombatNet.Send(26924, this.Entity, i));
  }
  I6r() {
    var t;
    this.Entity.GetComponent(16) &&
      (t =
        this.rVr.ReBulletData.TimeScale.TimeScaleEffectImmune *
        CommonDefine_1.MILLIONSECOND_PER_SECOND) >= TimerSystem_1.MIN_TIME &&
      this.AddImmuneTimeScaleEffectTimer(t);
  }
  AddImmuneTimeScaleEffectTimer(t) {
    const i = (t) => {
      for (const e of this.$zo.BuffEffectManager.FilterById(17))
        t ? e.StartTimeScaleEffect() : e.StopTimeScaleEffect();
      var i = this.vHr;
      t ? i.ResumePauseLock() : i.ImmunePauseLock();
    };
    this.Abr() || i(!1),
      (this.Rbr = TimerSystem_1.TimerSystem.Delay(() => {
        (this.Rbr = void 0), i(!0);
      }, t));
  }
  Abr() {
    return !(
      !TimerSystem_1.TimerSystem.Has(this.Rbr) ||
      (TimerSystem_1.TimerSystem.Remove(this.Rbr), (this.Rbr = void 0))
    );
  }
  IsImmuneTimeScaleEffect() {
    return TimerSystem_1.TimerSystem.Has(this.Rbr);
  }
  M6r(t) {
    this.Entity === Global_1.Global.BaseCharacter?.GetEntityNoBlueprint() &&
      GamepadController_1.GamepadController.PlayForceFeedbackByHit(t);
  }
  GetAttackerEntity() {
    return this.iVr;
  }
  lXs() {
    this.Hte?.CreatureData.IsRealMonster() &&
      this.Hte.Actor.CharRenderingComponent &&
      (this.hXs = new BaseHitComponent_1.OnHitMaterialAction(
        this.Hte.Actor.CharRenderingComponent,
        this.vHr
      ));
  }
  ProcessOnHitMaterial() {
    if (!this.GL1 && ModelManager_1.ModelManager.BulletModel.OpenHitMaterial && this.hXs) {
      var e = this.rVr.ReBulletData.Render.OnHitMaterialEffect;
      if (!StringUtils_1.StringUtils.IsNothing(e)) {
        var s = this.rVr.BulletEntityId,
          h = this.iVr.Id;
        if (this.hXs.ComparePriority(s, h)) {
          this.hXs.Stop(!0);
          let t = void 0;
          var r = this.rVr.HitPart;
          r &&
            !FNameUtil_1.FNameUtil.IsNothing(r) &&
            ((r = r.toString()),
            Log_1.Log.CheckDebug() &&
              Log_1.Log.Debug("Character", 20, "OnHitMaterialAction 命中部位", ["Part", r]),
            (r = this.Hte.GetPartConf(r)?.MaterialEffect)) &&
            UE.KismetSystemLibrary.IsValidSoftObjectReference(r) &&
            (t = r.ToAssetPathName());
          let i = void 0;
          r = this.iVr?.GetComponent(3);
          r && (i = r?.GetReplaceEffect(e)),
            this.hXs.Start(
              i || e,
              ModelManager_1.ModelManager.BulletModel.OnHitMaterialMsDelay,
              s,
              h,
              t
            );
        }
      }
    }
  }
  ReplaceHitEffect(t) {
    return this.xoa
      ? (CombatLog_1.CombatLog.Error("Hit", this.Entity, "已存在替换受击特效, 新的替换不会生效"),
        !1)
      : ((this.xoa = t), !(this.Uha = void 0));
  }
  RemoveHitEffectReplaced() {
    (this.xoa = void 0), (this.Uha = void 0);
  }
  GetHitEffectReplaced() {
    return this.xoa;
  }
  GetHitEffectReplacedIgnoreBones() {
    if (this.xoa) {
      if (!this.Uha) {
        this.Uha = new Set();
        var i = this.xoa.不替换的部位,
          e = i.Num();
        for (let t = 0; t < e; t++) {
          var s = i.Get(t);
          FNameUtil_1.FNameUtil.IsNothing(s) || this.Uha.add(s.toString());
        }
      }
      return this.Uha;
    }
  }
});
(CharacterHitComponent.GVr = void 0),
  (CharacterHitComponent.$Vr = Stats_1.Stat.Create("OnHit")),
  (CharacterHitComponent.NL1 = Stats_1.Stat.Create("OnHit_CounterAttack")),
  (CharacterHitComponent.VL1 = Stats_1.Stat.Create("OnHit_RemoveByTag")),
  (CharacterHitComponent.jL1 = Stats_1.Stat.Create("OnHit_ProcessDamage")),
  (CharacterHitComponent.HL1 = Stats_1.Stat.Create("OnHit_CameraEffect")),
  (CharacterHitComponent.$L1 = Stats_1.Stat.Create("OnHit_ProcessMain")),
  (CharacterHitComponent.QL1 = Stats_1.Stat.Create("OnHit_BroadcastEvent")),
  (CharacterHitComponent.KL1 = Stats_1.Stat.Create("OnHit_OnHitMaterial")),
  (CharacterHitComponent.WL1 = Stats_1.Stat.Create("OnHit_BeHitStateMachine")),
  (CharacterHitComponent.rHo = Stats_1.Stat.Create("PlayHitEffect")),
  (CharacterHitComponent.E6r = Stats_1.Stat.Create("ProcessMain1")),
  (CharacterHitComponent.S6r = Stats_1.Stat.Create("ProcessMain2")),
  (CharacterHitComponent.T6r = Stats_1.Stat.Create("ProcessMain3")),
  (CharacterHitComponent.aA1 = Vector_1.Vector.Create()),
  (CharacterHitComponent.hA1 = Vector_1.Vector.Create()),
  (CharacterHitComponent = CharacterHitComponent_1 =
    __decorate([(0, RegisterComponent_1.RegisterComponent)(60)], CharacterHitComponent)),
  (exports.CharacterHitComponent = CharacterHitComponent);
//# sourceMappingURL=CharacterHitComponent.js.map
