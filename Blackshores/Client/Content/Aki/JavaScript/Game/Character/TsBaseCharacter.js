"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
const UE = require("ue"),
  Log_1 = require("../../Core/Common/Log"),
  Queue_1 = require("../../Core/Container/Queue"),
  MathUtils_1 = require("../../Core/Utils/MathUtils"),
  ObjectUtils_1 = require("../../Core/Utils/ObjectUtils"),
  EventDefine_1 = require("../Common/Event/EventDefine"),
  EventSystem_1 = require("../Common/Event/EventSystem"),
  // CharacterDitherEffectController_1 = require("../NewWorld/Character/Common/Component/Effect/CharacterDitherEffectController"),
  CharacterDitherEffectController_1 = require("../NewWorld/Character/Common/Component/Effect/CharacterDitherEffectController_New"),
  CustomMovementDefine_1 = require("../NewWorld/Character/Common/Component/Move/CustomMovementDefine"),
  MOVEMENT_MODE_MAX_COUNT = 3;
class TsBaseCharacter extends UE.BaseCharacter {
  constructor() {
    super(...arguments),
      (this.CharRenderingComponent = void 0),
      (this.RenderType = 0),
      (this.TsCharacterDebugComponent = void 0),
      (this.NavigationInvoker = void 0),
      (this.InputComponentClass = void 0),
      (this.BasePlatform = void 0),
      (this.EntityId = 0),
      (this.FightManager = void 0),
      (this.DtHitEffect = void 0),
      (this.DtBaseMovementSetting = void 0),
      (this.DtNewBulletDataMain = void 0),
      (this.DtCharacterPart = void 0),
      (this.DtCameraConfig = void 0),
      (this.BattleSockets = void 0),
      (this.NormalSockets = void 0),
      (this.WeaponInEffect = void 0),
      (this.WeaponHideEffect = void 0),
      (this.FkData = void 0),
      (this.CharacterData = void 0),
      (this.Camp = 0),
      (this.PhysicsClothSimulateEnable = !0),
      (this.PhysicsClothSimulateDisableOneFrame = !1),
      (this.CachePoseEnableOneFrame = !1),
      (this.CacheTime = 0.6),
      (this.CharacterActorComponent = void 0),
      (this.SimpleNpcActorComponent = void 0),
      (this.DitherEffectControllerInternal = void 0),
      (this.MovementModeInfoUid = 0),
      (this.Count = 0),
      (this.Mutex = !1),
      (this.MovementModeLayer = [
        new Queue_1.Queue(),
        new Queue_1.Queue(),
        new Queue_1.Queue(),
        new Queue_1.Queue(),
      ]),
      (this.CurrentMovementParam = void 0);
  }
  Constructor() {
    (this.CharacterActorComponent = void 0),
      (this.SimpleNpcActorComponent = void 0),
      (this.DitherEffectControllerInternal = void 0),
      (this.MovementModeInfoUid = 0),
      (this.Count = 0),
      (this.Mutex = !1),
      (this.MovementModeLayer = [
        new Queue_1.Queue(),
        new Queue_1.Queue(),
        new Queue_1.Queue(),
        new Queue_1.Queue(),
      ]),
      (this.CurrentMovementParam = void 0);
  }
  SetEntityId(t) {
    (this.EntityId = t), (this.EntityIdInternal = t);
  }
  TryAddTsAbilitySystemComponent() {
    this.AbilitySystemComponent ||
      (this.AbilitySystemComponent = this.AddComponentByClass(
        UE.BaseAbilitySystemComponent.StaticClass(),
        !1,
        MathUtils_1.MathUtils.DefaultTransform,
        !1
      ));
  }
  SetCamp(t) {
    this.Camp = t;
  }
  K2_OnMovementModeChanged(t, e, i, s) {
    this.CharacterActorComponent &&
      EventSystem_1.EventSystem.EmitWithTarget(
        this.CharacterActorComponent.Entity,
        EventDefine_1.EEventName.CharMovementModeChanged,
        this.CharacterActorComponent.Entity.Id,
        t,
        e,
        i,
        s
      );
  }
  ReceivePossessed(t) {
    super.ReceivePossessed(t),
      this.CharacterActorComponent &&
        t.IsA(UE.BP_CharacterController_C.StaticClass()) &&
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CharPossessed,
          this.CharacterActorComponent.Entity,
          t
        );
  }
  ReceiveUnpossessed(t) {
    super.ReceiveUnpossessed(t),
      this.CharacterActorComponent &&
        t.IsA(UE.BP_CharacterController_C.StaticClass()) &&
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CharUnpossessed,
          this.CharacterActorComponent.Entity,
          t
        );
  }
  GetEntityId() {
    return this.CharacterActorComponent
      ? this.CharacterActorComponent.Entity.Id
      : this.SimpleNpcActorComponent
        ? this.SimpleNpcActorComponent.Entity.Id
        : 0;
  }
  GetEntityIdNoBlueprint() {
    return this.CharacterActorComponent
      ? this.CharacterActorComponent.Entity.Id
      : this.SimpleNpcActorComponent
        ? this.SimpleNpcActorComponent.Entity.Id
        : 0;
  }
  GetEntityNoBlueprint() {
    return this.CharacterActorComponent
      ? this.CharacterActorComponent.Entity
      : this.SimpleNpcActorComponent
        ? this.SimpleNpcActorComponent.Entity
        : void 0;
  }
  Initialize() {}
  set DitherEffectController(t) {
    this.DitherEffectControllerInternal = t;
  }
  get DitherEffectController() {
    return (
      this.DitherEffectControllerInternal ||
        (this.DitherEffectControllerInternal =
          new CharacterDitherEffectController_1.CharacterDitherEffectController(
            this,
            this.CharRenderingComponent
          )),
      this.DitherEffectControllerInternal
    );
  }
  get HasDitherEffectController() {
    return void 0 !== this.DitherEffectControllerInternal;
  }
  SetDitherEffect(t, e = 3) {
    this.HasDitherEffectController && this.DitherEffectController?.SetDitherEffect(t, e);
  }
  K2_UpdateCustomMovement(t) {
    switch ((super.K2_UpdateCustomMovement(t), this.CharacterMovement.CustomMovementMode)) {
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_CLIMB:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveClimb,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_SWIM:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveSwim,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_GLIDE:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveGlide,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_PENDULUM:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMovePendulum,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_SLIDE:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveSlide,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_UP_TO_WALK_ON_WATER:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveWalkOnWater,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_LEISURE:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveCatapult,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_SOAR:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveSoar,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_SKI:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveSki,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_ROLL:
        EventSystem_1.EventSystem.EmitWithTarget(
          this.CharacterActorComponent.Entity,
          EventDefine_1.EEventName.CustomMoveRoll,
          t
        );
        break;
      case CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_KITE:
        this.CharacterActorComponent?.Entity.GetComponent(37)?.KiteMove(t);
    }
  }
  FightCommand(t) {}
  ReceiveDestroyed() {
    ObjectUtils_1.ObjectUtils.IsValid(this) &&
      ((this.CharRenderingComponent = void 0),
      (this.NavigationInvoker = void 0),
      (this.InputComponentClass = void 0),
      (this.FightManager = void 0),
      (this.DtHitEffect = void 0),
      (this.DtBaseMovementSetting = void 0),
      (this.DtNewBulletDataMain = void 0),
      (this.DtCharacterPart = void 0),
      (this.BattleSockets = void 0),
      (this.NormalSockets = void 0),
      (this.WeaponInEffect = void 0),
      (this.WeaponHideEffect = void 0),
      (this.FkData = void 0),
      (this.CharacterData = void 0),
      (this.CharacterActorComponent = void 0),
      (this.DitherEffectControllerInternal = void 0),
      this.TsCharacterDebugComponent?.Destroy(),
      (this.TsCharacterDebugComponent = void 0),
      super.ReceiveDestroyed());
  }
  KuroSetMovementMode(i) {
    if (this.CharacterMovement) {
      let e = 0;
      if (
        (this.CharacterActorComponent
          ? (e = this.CharacterActorComponent.Entity.Id)
          : this.SimpleNpcActorComponent && (e = this.SimpleNpcActorComponent.Entity.Id),
        this.Mutex)
      )
        return this.Count > MOVEMENT_MODE_MAX_COUNT
          ? void (
              Log_1.Log.CheckError() &&
              Log_1.Log.Error(
                "Character",
                42,
                "[SetMovementMode] 产生嵌套循环层数过高，不往后执行",
                ["EntityId", e]
              )
            )
          : ((i.Uid = this.MovementModeInfoUid++),
            Log_1.Log.CheckWarn() &&
              Log_1.Log.Warn(
                "Character",
                42,
                "[SetMovementMode] 产生嵌套设置，加入队列",
                ["EntityId", e],
                ["UID", i.Uid],
                ["Count", this.Count],
                ["Mode", i.Mode],
                ["Context", i.Context],
                ["CustomMode", i.CustomMode],
                ["now Mode", this.CurrentMovementParam?.Mode],
                ["now Context", this.CurrentMovementParam?.Context],
                ["now CustomMode", this.CurrentMovementParam?.CustomMode]
              ),
            void this.MovementModeLayer[this.Count].Push(i));
      if (
        ((this.Mutex = !0),
        this.Count++,
        (this.CurrentMovementParam = i),
        Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug(
            "Character",
            42,
            "[SetMovementMode] 设置MovementMode",
            ["EntityId", e],
            ["Count", this.Count],
            ["Mode", this.CurrentMovementParam?.Mode],
            ["Context", this.CurrentMovementParam?.Context],
            ["CustomMode", this.CurrentMovementParam?.CustomMode]
          ),
        3 === i.Mode &&
          Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug(
            "Character",
            6,
            "1117317 Bug追踪，移动模式继承",
            ["Name", this.GetName()],
            ["Velocity", this.CharacterMovement.Velocity]
          ),
        this.CharacterMovement.SetMovementMode(i.Mode, i.CustomMode),
        i.Callback)
      )
        try {
          i.Callback();
        } catch (t) {
          t instanceof Error
            ? Log_1.Log.CheckError() &&
              Log_1.Log.ErrorWithStack(
                "Character",
                42,
                "[SetMovementMode] 回调执行异常",
                t,
                ["EntityId", e],
                ["Error", t.message],
                ["Context", i.Context]
              )
            : Log_1.Log.CheckError() &&
              Log_1.Log.Error(
                "Character",
                42,
                "[SetMovementMode] 回调执行异常",
                ["EntityId", e],
                ["stack", t],
                ["Context", i.Context]
              );
        }
      this.Mutex = !1;
      var t = this.Count;
      if (t <= MOVEMENT_MODE_MAX_COUNT)
        for (; !this.MovementModeLayer[t].Empty; ) {
          var s = this.MovementModeLayer[t].Pop();
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug(
              "Character",
              42,
              "[SetMovementMode] 执行队列中的MovementMode",
              ["EntityId", e],
              ["UID", s.Uid],
              ["Count", this.Count],
              ["Mode", s.Mode],
              ["Context", s.Context],
              ["CustomMode", s.CustomMode]
            ),
            this.KuroSetMovementMode(s);
        }
      this.Count--, (this.CurrentMovementParam = void 0);
    }
  }
}
exports.default = TsBaseCharacter;
//# sourceMappingURL=TsBaseCharacter.js.map
