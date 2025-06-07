"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (t, i, e, s) {
    var h,
      n = arguments.length,
      r = n < 3 ? i : null === s ? (s = Object.getOwnPropertyDescriptor(i, e)) : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      r = Reflect.decorate(t, i, e, s);
    else
      for (var o = t.length - 1; 0 <= o; o--)
        (h = t[o]) && (r = (n < 3 ? h(r) : 3 < n ? h(i, e, r) : h(i, e)) || r);
    return 3 < n && r && Object.defineProperty(i, e, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.PawnInteractNewComponent = void 0);
const UE = require("ue"),
  Log_1 = require("../../../../Core/Common/Log"),
  CommonDefine_1 = require("../../../../Core/Define/CommonDefine"),
  Protocol_1 = require("../../../../Core/Define/Net/Protocol"),
  RegisterComponent_1 = require("../../../../Core/Entity/RegisterComponent"),
  TimerSystem_1 = require("../../../../Core/Timer/TimerSystem"),
  GameplayTagUtils_1 = require("../../../../Core/Utils/GameplayTagUtils"),
  MathCommon_1 = require("../../../../Core/Utils/Math/MathCommon"),
  Vector_1 = require("../../../../Core/Utils/Math/Vector"),
  MathUtils_1 = require("../../../../Core/Utils/MathUtils"),
  StringBuilder_1 = require("../../../../Core/Utils/StringBuilder"),
  CameraController_1 = require("../../../Camera/CameraController"),
  EventDefine_1 = require("../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../Common/Event/EventSystem"),
  PublicUtil_1 = require("../../../Common/PublicUtil"),
  Global_1 = require("../../../Global"),
  LevelGamePlayController_1 = require("../../../LevelGamePlay/LevelGamePlayController"),
  ConfigManager_1 = require("../../../Manager/ConfigManager"),
  ControllerHolder_1 = require("../../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../../Manager/ModelManager"),
  InteractionModel_1 = require("../../../Module/Interaction/InteractionModel"),
  TsInteractionUtils_1 = require("../../../Module/Interaction/TsInteractionUtils"),
  PlotController_1 = require("../../../Module/Plot/PlotController"),
  InputDistributeController_1 = require("../../../Ui/InputDistribute/InputDistributeController"),
  UiManager_1 = require("../../../Ui/UiManager"),
  GravityUtils_1 = require("../../../Utils/GravityUtils"),
  PawnChairController_1 = require("../Controllers/PawnChairController"),
  PawnInteractController_1 = require("../Controllers/PawnInteractController"),
  PawnInteractBaseComponent_1 = require("./PawnInteractBaseComponent"),
  MAX_WAIT_NPC_TURN_TIME = 2500,
  MAX_WAIT_PLAYER_STAND_TIME = 1e3,
  AUTO_COLLECT_TAG = 487076426;
let PawnInteractNewComponent = class PawnInteractNewComponent extends PawnInteractBaseComponent_1.PawnInteractBaseComponent {
  constructor() {
    super(...arguments),
      (this.can = !0),
      (this.man = !1),
      (this.dan = "Npc"),
      (this.Can = void 0),
      (this.gan = void 0),
      (this.fan = void 0),
      (this.van = void 0),
      (this.vzi = void 0),
      (this.Man = void 0),
      (this.fie = void 0),
      (this.Qsn = void 0),
      (this.Ean = !1),
      (this.San = !1),
      (this.yan = !1),
      (this.Ian = !1),
      (this.vir = Vector_1.Vector.Create()),
      (this.eOi = !1),
      (this.H4r = void 0),
      (this.Tan = void 0),
      (this.rzr = void 0),
      (this.Lan = void 0),
      (this.Dan = !1),
      (this.Ran = void 0),
      (this.CanRestartAi = !0),
      (this.$Ua = !1),
      (this.P11 = void 0),
      (this.xie = (t, i) => {
        this.Uan();
      }),
      (this.zYe = () => {
        this.vzi?.OnChangeModeFinish();
      }),
      (this.Jsn = () => {
        this.Aan(),
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug("Interaction", 36, "进入感知范围，开启交互Tick", [
              "EntityId",
              this.Entity.Id,
            ]),
          (this.eOi = !0);
      }),
      (this.vzr = () => {
        ModelManager_1.ModelManager.InteractionModel.LockInteractionEntity === this.Entity.Id
          ? Log_1.Log.CheckInfo() &&
            Log_1.Log.Info("Interaction", 36, "离开交互锁定实体的感知范围时不关闭Tick")
          : (this.CloseInteract("离开感知范围"),
            Log_1.Log.CheckInfo() &&
              Log_1.Log.Info("Interaction", 36, "离开感知范围，关闭交互Tick", [
                "EntityId",
                this.Entity.Id,
              ]),
            (this.eOi = !1));
      }),
      (this.Pan = !1),
      (this.xan = () => {
        this.vzi && this.vzi.HasInteractOptions()
          ? this.Aan()
          : (this.wan("没有可交互内容"), (this.Pan = !0));
      }),
      (this.Ban = void 0),
      (this.ban = !1),
      (this.qan = !1),
      (this.Gan = !1),
      (this.Nan = !1),
      (this.Oan = void 0),
      (this.B6a = void 0),
      (this.kan = () => {
        this.Gan
          ? ((this.Gan = !1), (this.qan = !0), this.Fan(), this.Van())
          : (this.b6a(), (ModelManager_1.ModelManager.InteractionModel.IsInteractionTurning = !1));
      }),
      (this.Van = () => {
        var t = this.H4r.Entity,
          i = MathUtils_1.MathUtils.CommonTempVector;
        this.Can.ActorLocationProxy.Subtraction(this.H4r.ActorLocationProxy, i),
          i.Normalize(),
          this.H4r.SetInputFacing(i, !0);
        t.GetComponent(61).SetActive(!1);
        (i = MathUtils_1.MathUtils.CommonTempVector),
          this.Can.ActorLocationProxy.Subtraction(this.H4r.ActorLocationProxy, i),
          (t = i.HeadingAngle() * MathCommon_1.MathCommon.RadToDeg),
          (i =
            ((180 < (t = Math.abs(this.H4r.ActorRotationProxy.Yaw - t)) ? 360 - t : t) / 300) *
            CommonDefine_1.MILLIONSECOND_PER_SECOND);
        (this.qan = !0),
          i > TimerSystem_1.MIN_TIME ? TimerSystem_1.TimerSystem.Delay(this.Han, i) : this.Han();
      }),
      (this.Fan = () => {
        if (this.fie === Protocol_1.Aki.Protocol.kks.Proto_Npc) {
          this.Nan = !0;
          var t,
            i = this.vzi.IsTurnAround;
          i
            ? ((t = this.Entity.GetComponent(185)),
              this.vzi.IsWaitTurnComplete || this.jan
                ? t.OnPlayerInteractStart(i, !0, this.Wan)
                  ? (this.Oan = TimerSystem_1.TimerSystem.Delay(this.Wan, MAX_WAIT_NPC_TURN_TIME))
                  : this.Wan()
                : (t.OnPlayerInteractStart(i, !1, void 0), this.Wan()))
            : this.Wan();
        }
      }),
      (this.jan = !1),
      (this.Kan = !1),
      (this.Qan = () => {
        this.Kan &&
          ((this.Kan = !1), ModelManager_1.ModelManager.PlotModel.IsInInteraction) &&
          EventSystem_1.EventSystem.Emit(
            EventDefine_1.EEventName.TriggerPlotInteraction,
            this.GetInteractController()
          );
      }),
      (this.Wan = () => {
        this.Nan && ((this.Nan = !1), this.qan || this.Xan());
      }),
      (this.Han = () => {
        this.b6a(), (this.qan = !1), this.Nan || this.Xan();
      }),
      (this.$an = () => {
        this.jan && (this.qan || this.Nan || this.B6a)
          ? ((this.jan = !1),
            ControllerHolder_1.ControllerHolder.PlotController.OpenPlotView("PlotView"),
            CameraController_1.CameraController.EnterDialogueMode(
              this.GetInteractController().GetInteractPoint(),
              !1
            ))
          : (this.jan = !1);
      }),
      (this.Yan = (i) => {
        if (this.ban)
          if (
            (this.vzi.RecordInteraction(),
            ModelManager_1.ModelManager.InteractionModel.HandleInteractionHint(!1, this.Entity.Id),
            (ModelManager_1.ModelManager.InteractionModel.InteractingEntity = this.Entity.Id),
            this.Ran)
          )
            Log_1.Log.CheckDebug() &&
              Log_1.Log.Debug("Interaction", 36, "[执行交互]自动触发交互", [
                "EntityId",
                this.Entity.Id,
              ]),
              TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionNew(
                this.Ran,
                this.vzi
              );
          else {
            let t = void 0;
            t = -1 < i ? this.vzi.GetOptionByInstanceId(i) : this.vzi.GetInteractiveOption();
            i = this.vzi.Options;
            ((t && this.Jan(t)) || (1 === i.length && this.Jan(i[0])) || 1 !== i.length) &&
              ModelManager_1.ModelManager.PlotModel.IsInPlot &&
              !ModelManager_1.ModelManager.PlotModel?.IsInHighLevelPlot() &&
              (ControllerHolder_1.ControllerHolder.FlowController.BackgroundFlow(
                "交互前打断当前D级剧情",
                !1
              ),
              ControllerHolder_1.ControllerHolder.PlotController.CloseAllUi()),
              "Direct" === t?.DoIntactType
                ? (Log_1.Log.CheckDebug() &&
                    Log_1.Log.Debug("Interaction", 36, "[执行交互]直接交互", [
                      "EntityId",
                      this.Entity.Id,
                    ]),
                  TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionNew(t, this.vzi))
                : 1 !== i.length || i[0].TidContent
                  ? (this.vzi.HandlePreInterativeLogic(), this.zan())
                  : (Log_1.Log.CheckDebug() &&
                      Log_1.Log.Debug("Interaction", 36, "[执行交互]默认直接交互", [
                        "EntityId",
                        this.Entity.Id,
                      ]),
                    TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionNew(
                      i[0],
                      this.vzi
                    ));
          }
        else
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug("Interaction", 36, "[执行交互]已经因为其他原因退出交互", [
              "EntityId",
              this.Entity.Id,
            ]),
            this.Zan();
      }),
      (this.Zan = () => {
        this.ban &&
          ((this.ban = !1),
          InputDistributeController_1.InputDistributeController.RefreshInputTag(),
          TimerSystem_1.TimerSystem.Next(() => {
            this.ehn();
          })),
          ModelManager_1.ModelManager.InteractionModel.CurrentInteractEntityId === this.Entity.Id &&
            (EventSystem_1.EventSystem.Emit(
              EventDefine_1.EEventName.OnInteractActionEnd,
              this.fan.GetPbDataId()
            ),
            Log_1.Log.CheckDebug()) &&
            Log_1.Log.Debug("Interaction", 36, "交互行为结束", ["EntityId", this.Entity.Id]);
      }),
      (this.thn = !1),
      (this.ihn = !1),
      (this.ohn = !0);
  }
  get InteractRange() {
    return this.vzi?.InteractRange;
  }
  get OwenActor() {
    if (this.Can) return this.Can.Owner;
  }
  get CanInteraction() {
    return this.can && !this.man;
  }
  GetClientCanInteraction() {
    return this.can;
  }
  SetInteractionState(t, i) {
    Log_1.Log.CheckDebug() &&
      Log_1.Log.Debug(
        "Interaction",
        36,
        "客户端设置是否可交互",
        ["CanInteraction", t],
        ["EntityId", this.Entity.Id],
        ["Reason", i]
      );
    i = this.can !== t;
    (this.can = t),
      ModelManager_1.ModelManager.InteractionModel
        ? (this.ehn(),
          ModelManager_1.ModelManager.InteractionModel.CurrentInteractEntityId === this.Entity.Id &&
            i &&
            InputDistributeController_1.InputDistributeController.RefreshInputTag())
        : Log_1.Log.CheckInfo() &&
          Log_1.Log.Info("Interaction", 36, "[SetInteractionState]InteractionModel不存在", [
            "EntityId",
            this.Entity.Id,
          ]);
  }
  SetServerLockInteract(t, i) {
    (this.man = t),
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug(
          "Interaction",
          36,
          "服务器设置是否可交互",
          ["CanInteraction", !t],
          ["CreatureId", this.fan?.GetCreatureDataId()],
          ["EntityId", this.Entity?.Id],
          ["PbDataId", this.fan?.GetPbDataId()],
          ["Reason", i]
        ),
      ModelManager_1.ModelManager.InteractionModel
        ? this.ehn()
        : Log_1.Log.CheckInfo() &&
          Log_1.Log.Info("Interaction", 36, "[SetServerLockInteract]InteractionModel不存在", [
            "EntityId",
            this.Entity.Id,
          ]);
  }
  OnStart() {
    (this.gan = this.Entity.GetComponent(117)),
      (this.fan = this.Entity.GetComponent(0)),
      (this.rzr = this.Entity.GetComponent(119));
    var t = this.fan?.GetPbEntityInitData(),
      t =
        (t &&
          GravityUtils_1.GravityUtils.IsEntityGravityLimitGravity(t) &&
          (this.P11 = GravityUtils_1.GravityUtils.GetGravityDirectByEntityData(t)),
        (this.Can = this.Entity.GetComponent(1)),
        this.Can.Owner.IsA(UE.BP_BaseNPC_C.StaticClass()) && (this.Lan = this.Can.Owner),
        this.Can.CreatureData);
    return t.GetPbEntityInitData()
      ? ((this.fie = t.GetEntityType()),
        (this.Qsn = t.GetEntityOnlineInteractType()),
        (this.vzi = new PawnInteractController_1.PawnInteractController(this)),
        (this.vzi.OnInteractActionEnd = this.Zan),
        (this.vzi.OnInteractionUpdate = this.xan),
        this.gan.SetInteractRange(
          this.vzi.InteractRange,
          this.vzi.InteractExitRange,
          this.vzi.LocationOffset
        ),
        this.vir.FromUeVector(this.Can.ActorForwardProxy),
        this.rhn(t),
        this.Uan(),
        this.Ore(),
        !0)
      : (Log_1.Log.CheckError() &&
          Log_1.Log.Error(
            "Interaction",
            7,
            "[PawnInteractComponent.OnStart] 交互组件初始化",
            ["CreatureGenID:", t.GetOwnerId()],
            ["PbDataId:", t.GetPbDataId()],
            ["InitInteractionRange:", this.InteractRange]
          ),
        !1);
  }
  rhn(t) {
    var i = t.GetPbModelConfig();
    i?.EntityType && (this.dan = i.EntityType),
      "Chair" === this.dan && (this.Man = new PawnChairController_1.PawnChairController(t)),
      (this.$Ua = "Botany" === t.GetBaseInfo()?.Category?.CollectType);
  }
  GetSubEntityInteractLogicController() {
    var t = this.Entity.GetComponent(0).GetPbModelConfig();
    if ((t?.EntityType && (this.dan = t.EntityType), "Chair" === this.dan)) return this.Man;
  }
  IsCollection() {
    return "Collect" === this.dan;
  }
  IsAnimationItem() {
    return "Animal" === this.dan;
  }
  Ore() {
    EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnChangeRole, this.xie),
      EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ChangeModeFinish, this.zYe),
      EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnStartFlow, this.$an),
      EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PlotInteractViewOpen, this.Qan),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.EnterLogicRange,
        this.Jsn
      ),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.LeaveLogicRange,
        this.vzr
      ),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.OnInteractPlotEnd,
        this.Zan
      );
  }
  kre() {
    EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnChangeRole, this.xie),
      EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ChangeModeFinish, this.zYe),
      EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnStartFlow, this.$an),
      EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PlotInteractViewOpen, this.Qan),
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.EnterLogicRange,
        this.Jsn
      ),
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.LeaveLogicRange,
        this.vzr
      ),
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.OnInteractPlotEnd,
        this.Zan
      );
  }
  AfterUnlockInteractionEntity() {
    !this.rzr?.IsInLogicRange &&
      this.eOi &&
      (Log_1.Log.CheckInfo() &&
        Log_1.Log.Info("Interaction", 36, "离开交互锁定状态时，不在感知范围内"),
      this.vzr());
  }
  OnDisable() {
    this.CloseInteract("OnDisable");
  }
  OnEnd() {
    return (
      (this.Gan || this.qan || this.Nan) &&
        ((ModelManager_1.ModelManager.InteractionModel.IsInteractionTurning = !1),
        InputDistributeController_1.InputDistributeController.RefreshInputTag()),
      this.b6a(),
      ModelManager_1.ModelManager.InteractionModel.LockInteractionEntity === this.Entity.Id &&
        (Log_1.Log.CheckError() &&
          Log_1.Log.Error("Interaction", 36, "当交互锁定的实体销毁时，提前解锁", [
            "EntityId",
            this.Entity.Id,
          ]),
        (ModelManager_1.ModelManager.InteractionModel.LockInteractionEntity = void 0)),
      ModelManager_1.ModelManager.InteractionModel.InteractingEntity === this.Entity.Id &&
        (Log_1.Log.CheckWarn() &&
          Log_1.Log.Warn("Interaction", 36, "当前实体交互中销毁", ["EntityId", this.Entity.Id]),
        (ModelManager_1.ModelManager.InteractionModel.InteractingEntity = void 0)),
      (this.can = !0),
      this.kre(),
      this.CloseInteract("OnEnd"),
      this.vzi?.Dispose(),
      (this.vzi = void 0),
      this.Man?.Dispose(),
      !(this.Man = void 0)
    );
  }
  Uan() {
    Global_1.Global.BaseCharacter &&
      ((this.H4r = Global_1.Global.BaseCharacter.CharacterActorComponent),
      (this.van = this.H4r.Entity.GetComponent(29)),
      this.B6a && ((this.Gan = !1), this.Han()),
      (this.Tan = this.van.Entity.GetComponent(203)),
      (this.Dan =
        this.H4r.CreatureData.GetPlayerId() ===
        ModelManager_1.ModelManager.CreatureModel.GetWorldOwner()));
  }
  nhn() {
    return this.IsMatchRoleOption()
      ? this.ahn()
        ? this.hhn()
          ? this.lhn()
            ? (this.shn("[默认前置交互条件]自身被锁定"), !1)
            : this.IsInPlayerInteractiveRange()
              ? this.IsMatchRoleGravityDirect()
                ? !(
                    (!this.Can || this.Can.HasMesh()) &&
                    (this.fie === Protocol_1.Aki.Protocol.kks.Proto_Npc || !this.San) &&
                    this._hn &&
                    (this.shn("[默认前置交互条件]NPC处于被控状态 " + this.ban), 1)
                  )
                : (this.shn("[默认前置交互条件]重力方向不匹配"), !1)
              : (this.shn("[默认前置交互条件]不在交互范围中"), !1)
          : (this.shn("[默认前置交互条件]自身状态异常"), !1)
        : (this.shn("[默认前置交互条件]角色状态异常"), !1)
      : (this.shn("[默认前置交互条件]角色类型判断"), !1);
  }
  ahn() {
    return !(
      !this.Tan ||
      (this.Tan.HasTag(1008164187)
        ? (this.shn("[默认前置交互条件]角色状态异常_濒死"), 1)
        : this.Tan.HasTag(191377386)
          ? (this.shn("[默认前置交互条件]角色状态异常_溺水"), 1)
          : this.Tan.HasTag(1733479717)
            ? (this.shn("[默认前置交互条件]角色状态异常_大招"), 1)
            : this.vzi.IsPlayerTurnAround &&
                (!this.Tan.HasTag(-1898186757) ||
                  (this.Tan.HasTag(-1371021686) && !this.Tan.HasTag(-1800191060)))
              ? (this.shn("[默认前置交互条件]角色状态异常_转身"), 1)
              : this.Tan.HasTag(2099884761)
                ? (this.shn("[默认前置交互条件]角色状态异常_禁止交互"), 1)
                : this.Tan.HasTag(-1462942050) &&
                  (this.shn("[默认前置交互条件]角色状态异常_幻象变身中"), 1))
    );
  }
  hhn() {
    var t = this.Entity.GetComponent(131);
    if (t?.Valid) return t.IsInteractState;
    if (this.fie === Protocol_1.Aki.Protocol.kks.Proto_Animal) {
      t = this.Entity.GetComponent(203);
      if (t?.Valid && t.HasTag(1008164187)) return !1;
    } else if (this.fie === Protocol_1.Aki.Protocol.kks.Proto_Npc) {
      if (9 === this.Entity.GetComponent(185)?.GetCurrentState()) return !1;
    } else if (this.fie === Protocol_1.Aki.Protocol.kks.HI_) {
      t = this.Entity.GetComponent(203);
      if (t?.Valid && t.HasTag(786205849)) return !1;
    }
    return !0;
  }
  lhn() {
    var t = this.Entity.GetComponent(128);
    return !!t?.Valid && t.IsLocked;
  }
  chn() {
    if (!ModelManager_1.ModelManager.GameModeModel.IsMulti) return !0;
    var t;
    if (
      (void 0 === this.Ban &&
        ((t = this.fan.GetPbDataId()),
        (t = ModelManager_1.ModelManager.CreatureModel.GetEntityOwner(
          ModelManager_1.ModelManager.GameModeModel.MapConfig.MapId,
          t
        )) && "LevelPlay" === t?.Type
          ? (this.Ban = t.LevelPlayId)
          : (this.Ban = -1)),
      -1 < this.Ban)
    ) {
      let t = ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfo(this.Ban);
      if (
        !(t = t || ModelManager_1.ModelManager.InstanceDungeonModel.GetInstanceDungeonInfo()) ||
        !t.IsBelongPlayer
      )
        return !1;
    }
    return (
      (2 !== this.Qsn && !!(0 !== this.Qsn || (this.H4r && this.Dan))) ||
      (LevelGamePlayController_1.LevelGamePlayController.ShowFakeErrorCodeTips(), !1)
    );
  }
  IsPawnInteractive() {
    return !(!this.CanInteraction || !this.hhn() || this._hn || !this.vzi.GetInteractiveOption());
  }
  mhn() {
    var t, i;
    return this.CanInteraction
      ? this.ban
        ? (this.shn("IsExecutingInteract is true"), !1)
        : (t = this.vzi.GetInteractiveOption())
          ? ((i = this.thn),
            (this.thn = 1 === t?.CustomOptionType),
            i !== this.thn &&
              (EventSystem_1.EventSystem.Emit(
                EventDefine_1.EEventName.OnExecutionOptionChange,
                this.thn,
                this.Entity.Id
              ),
              !this.ihn) &&
              this.thn &&
              ((this.ihn = !0),
              EventSystem_1.EventSystem.Emit(
                EventDefine_1.EEventName.OnEnterOrExitExecutionRange,
                !0,
                this.Entity.Id
              )),
            t !== this.vzi.CurrentInteractOption && this.ApplyInteractConfig(t),
            !0)
          : (this.shn("没有找到可以交互的选项"), !1)
      : (this.shn("CanInteraction is false"), !1);
  }
  InteractPawn(t = -1, i) {
    var e;
    return (
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug("Interaction", 36, "[执行交互]调用执行交互", ["EntityId", this.Entity.Id]),
      ModelManager_1.ModelManager.InteractionModel
        ? this.Ean
          ? ControllerHolder_1.ControllerHolder.PlotController.IsEnableInteract()
            ? ModelManager_1.ModelManager.InteractionModel.IsHideInteractHint
              ? (Log_1.Log.CheckInfo() &&
                  Log_1.Log.Info("Interaction", 36, "[执行交互]全局隐藏交互开启", [
                    "EntityId",
                    this.Entity.Id,
                  ]),
                !1)
              : !!this.Can &&
                (ModelManager_1.ModelManager.InteractionModel?.CanAutoPickUp(this.Entity) ||
                  ((e = this.H4r?.Entity.GetComponent(61)) && e.InterruptAutoMoving("交互打断")),
                this.dhn(t, i),
                !0)
            : (Log_1.Log.CheckInfo() &&
                Log_1.Log.Info("Interaction", 36, "[执行交互]剧情状态不允许交互", [
                  "EntityId",
                  this.Entity.Id,
                ]),
              !1)
          : (Log_1.Log.CheckInfo() &&
              Log_1.Log.Info("Interaction", 36, "[执行交互]当前不可交互", [
                "EntityId",
                this.Entity.Id,
              ]),
            !1)
        : (Log_1.Log.CheckInfo() &&
            Log_1.Log.Info("Interaction", 36, "[执行交互]InteractionModel不存在", [
              "EntityId",
              this.Entity.Id,
            ]),
          !1)
    );
  }
  InteractOption(t = 0) {
    return (
      !!ModelManager_1.ModelManager.PlotModel.IsInInteraction &&
      ModelManager_1.ModelManager.PlotModel.CurrentInteractEntity?.Id === this.Entity?.Id &&
      !!this.GetInteractController() &&
      (this.GetInteractController().InteractOption(t), !0)
    );
  }
  CloseInteract(t = void 0) {
    this.wan(t);
  }
  ApplyInteractConfig(t) {
    t && this.vzi.ChangeInteractOption(t);
  }
  GetIsExecutingInteract() {
    return this.ban;
  }
  b6a() {
    this.B6a &&
      (this.B6a.Entity &&
        (this.B6a.Entity.GetComponent(61)?.SetActive(!0),
        (this.B6a.ForceExitStateStop = !1),
        (this.B6a.CanMoveFromInput = !0)),
      (this.B6a = void 0));
  }
  dhn(t = -1, i) {
    if (0 < t && t <= this.vzi.Options.length) {
      var e = this.vzi.Options[t - 1];
      if (!e.ConditionCheck)
        return (
          Log_1.Log.CheckInfo() &&
            Log_1.Log.Info("Interaction", 36, "执行交互时条件不满足", ["EntityId", this.Entity.Id]),
          void (
            e.LockTips?.TidHintText &&
            ((e = new StringBuilder_1.StringBuilder(
              InteractionModel_1.LOCK_TEXTURE_PREFIX,
              PublicUtil_1.PublicUtil.GetConfigTextByKey(e.LockTips.TidHintText)
            )),
            ControllerHolder_1.ControllerHolder.ScrollingTipsController.ShowTipsByText(
              e.ToString()
            ))
          )
        );
    }
    if (this.Ean)
      if (this.nhn() && this.chn()) {
        (this.Ran = i),
          (this.ban = !0),
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug("Interaction", 36, "执行交互", ["EntityId", this.Entity.Id]);
        (e = ModelManager_1.ModelManager.InteractionModel),
          (i = (e.SetInteractTarget(this.Entity.Id), this.fan.GetCreatureDataId()));
        e.SetInterctCreatureDataId(i),
          (ModelManager_1.ModelManager.ShopModel.InteractTarget = this.Entity.Id);
        const s = this.H4r.Entity;
        i = s.GetComponent(203);
        if (this.vzi.IsPlayerTurnAround && i?.HasTag(-1898186757)) {
          this.H4r.ClearInput(),
            (e.IsInteractionTurning = !0),
            InputDistributeController_1.InputDistributeController.RefreshInputTag(),
            (this.Gan = !0);
          const s = this.H4r.Entity;
          (i = s.GetComponent(175)),
            (e =
              (i &&
                (i.MontageManager.StopMontage({ Method: 0, BlendOutTime: 0 }),
                i.MainAnimInstance.ConsumeExtractedRootMotion(1)),
              this.b6a(),
              s.GetComponent(44)));
          e && (((this.B6a = e).ForceExitStateStop = !0), (e.CanMoveFromInput = !1), this.kan());
          // this.H4r.SetActorVelocity(Vector_1.Vector.ZeroVectorProxy),
          // TimerSystem_1.TimerSystem.Delay(this.kan, MAX_WAIT_PLAYER_STAND_TIME);
        } else (this.qan = !0), this.Fan(), this.Han();
        (this.CanRestartAi = !1),
          this.fie === Protocol_1.Aki.Protocol.kks.Proto_Npc && this.Chn(t),
          this.Yan(t),
          this.XUa();
      } else
        Log_1.Log.CheckInfo() &&
          Log_1.Log.Info("Interaction", 36, "执行交互时不满足条件", ["EntityId", this.Entity.Id]);
    else
      Log_1.Log.CheckInfo() &&
        Log_1.Log.Info("Interaction", 36, "执行交互时不可交互", ["EntityId", this.Entity.Id]);
  }
  Xan() {
    (ModelManager_1.ModelManager.InteractionModel.IsInteractionTurning = !1),
      InputDistributeController_1.InputDistributeController.RefreshInputTag(),
      ModelManager_1.ModelManager.PlotModel.IsInInteraction &&
        (UiManager_1.UiManager.IsViewShow("PlotView")
          ? EventSystem_1.EventSystem.Emit(
              EventDefine_1.EEventName.TriggerPlotInteraction,
              this.GetInteractController()
            )
          : (this.Kan = !0)),
      (this.jan = !1),
      this.Oan && (TimerSystem_1.TimerSystem.Remove(this.Oan), (this.Oan = void 0));
  }
  Chn(i) {
    if (((this.jan = !1), !this.Ran)) {
      let t = void 0;
      "Direct" ===
      (t = -1 < i ? this.vzi.GetOptionByInstanceId(i) : this.vzi.GetInteractiveOption())
        ?.DoIntactType
        ? (this.jan = this.ghn(t))
        : 1 !== (i = this.vzi.Options).length || i[0].TidContent || (this.jan = this.ghn(i[0]));
    }
  }
  IsOnlyCollectOption() {
    let t = this.vzi.GetInteractiveOption();
    if (
      (t =
        (t =
          (t = "Direct" !== t?.DoIntactType ? void 0 : t) ||
          1 !== (i = this.vzi.Options).length ||
          i[0].TidContent
            ? t
            : i[0]) || this.vzi.GetOptionByInstanceId(0)) &&
      0 === t.OptionType
    ) {
      var i = t.Type;
      if (i && i.Actions && 1 === i.Actions.length) if ("Collect" === i.Actions[0].Name) return !0;
    }
    return !1;
  }
  ExecuteInteractFromVision(i) {
    if (this.CanInteraction) {
      let t = this.vzi.GetInteractiveOption();
      var e;
      "Direct" === t?.DoIntactType
        ? (Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug("Interaction", 36, "[执行交互]幻象直接交互", [
              "EntityId",
              this.Entity.Id,
            ]),
          TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionFromVision(t, this.vzi, i))
        : (1 !== (e = this.vzi.Options).length ||
            e[0].TidContent ||
            (Log_1.Log.CheckDebug() &&
              Log_1.Log.Debug("Interaction", 36, "[执行交互]幻象默认直接交互", [
                "EntityId",
                this.Entity.Id,
              ]),
            TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionFromVision(
              e[0],
              this.vzi,
              i
            )),
          "Direct" === (t = t || this.vzi.GetOptionByInstanceId(0))?.DoIntactType &&
            (Log_1.Log.CheckDebug() &&
              Log_1.Log.Debug("Interaction", 36, "[执行交互]保底幻象直接交互", [
                "EntityId",
                this.Entity.Id,
              ]),
            TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionFromVision(
              t,
              this.vzi,
              i
            )));
    }
  }
  Jan(t) {
    t = t.Type;
    return !(!t || !t.Flow);
  }
  ghn(t) {
    t = t.Type;
    if (!t || !t.Flow) return !1;
    t = ConfigManager_1.ConfigManager.FlowConfig.GetFlowStateActions(
      t.Flow.FlowListName,
      t.Flow.FlowId,
      t.Flow.StateId
    );
    if (t && 0 < t.length) {
      t = t[0];
      if ("SetPlotMode" === t.Name) {
        t = t.Params;
        if ("LevelC" !== t.Mode || !1 === t.UseFlowCamera) return !1;
      }
    }
    return !0;
  }
  SimpleInteract() {
    var t = this.vzi.GetOptionByInstanceId(0);
    TsInteractionUtils_1.TsInteractionUtils.HandleInteractionOptionNew(t, this.vzi);
  }
  ehn() {
    this.CanInteraction &&
      (this.fie !== Protocol_1.Aki.Protocol.kks.Proto_Npc ||
        (!this.GetInteractController()?.IsTurnRecoveryImmediately && this.yan) ||
        (Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug("Interaction", 36, "交互结束立即转回", ["EntityId", this.Entity.Id]),
        this.Entity.GetComponent(185)?.OnPlayerInteractEnd()),
      ModelManager_1.ModelManager.InteractionModel.InteractingEntity === this.Entity.Id) &&
      (ModelManager_1.ModelManager.InteractionModel.InteractingEntity = void 0);
  }
  fhn() {
    if (!this.Ean) return !1;
    if (!this.Can) return !1;
    if (this._hn) return !1;
    this.San = !0;
    var t = this.vzi.GetAutoTriggerOption();
    if (t ?? this.YUa()) {
      if (!this.gan.IsInInteractRange) return !1;
      this.InteractPawn(-1, t);
    } else {
      let t = this.IsInSectorRange();
      (t = t && !this.van.GetSitDownState()),
        1 === this.vzi.GetInteractiveOption()?.CustomOptionType &&
          (EventSystem_1.EventSystem.Emit(
            EventDefine_1.EEventName.OnEnterOrExitExecutionRange,
            !0,
            this.Entity.Id
          ),
          (this.ihn = !0)),
        (t = t && this.vzi.UpdateDirectOptions(this.Entity.DistanceWithCamera, !1)),
        ModelManager_1.ModelManager.InteractionModel.HandleInteractionHint(
          t,
          this.Entity.Id,
          this.vzi.InteractEntity
        );
    }
    return !0;
  }
  wan(t) {
    ModelManager_1.ModelManager.InteractionModel.CurrentInteractEntityId === this.Entity.Id &&
      ModelManager_1.ModelManager.InteractionModel.SetInteractTarget(void 0),
      this.Can &&
        ((this.Ean = !1),
        this.ban &&
          ((this.ban = !1),
          InputDistributeController_1.InputDistributeController.RefreshInputTag()),
        t &&
          Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug("Interaction", 36, "结束交互", ["EntityId", this.Entity.Id], ["原因", t]),
        this.vzi.ClearDirectOptions(),
        ModelManager_1.ModelManager.InteractionModel.HandleInteractionHint(!1, this.Entity.Id),
        PlotController_1.PlotController.EndInteractionByInteractController(
          this.GetInteractController()
        ),
        (this.CanRestartAi = !0));
  }
  ForceUpdate() {
    this.Sbo(), this.Aan();
  }
  shn(t) {
    (this.ohn || ModelManager_1.ModelManager.LevelGeneralModel.InteractionDebug) &&
      ((this.ohn = !1), Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info(
        "Interaction",
        36,
        "Update提前返回",
        ["reason", t],
        ["entity", this.fan?.GetPbDataId()]
      );
  }
  OnTick(t) {
    this.eOi && (this.Gan && this.Tan?.HasTag(248240472) && this.kan(), this.Aan());
  }
  Aan() {
    if (ModelManager_1.ModelManager.InteractionModel.IsHideInteractHint)
      this.shn("全局隐藏交互开启");
    else if (
      ModelManager_1.ModelManager.PlotModel.IsInInteraction &&
      UiManager_1.UiManager.IsViewShow("PlotView")
    )
      this.shn("交互二级界面已打开");
    else if (this.fan?.IsConcealed) this.shn("实体隐藏将不可交互");
    else if (PlotController_1.PlotController.IsEnableInteract())
      if (this.rzr)
        if ((this.H4r || this.Uan(), this.gan))
          if (this.Pan || (this.vzi && this.vzi.HasInteractOptions()))
            if (this.ban) this.shn("当前正在执行交互");
            else {
              var t =
                ModelManager_1.ModelManager.InteractionModel.LockInteractionEntity ===
                this.Entity.Id;
              if (this.gan.IsInInteractRange || t) {
                if (!this.nhn() && !t)
                  return void (
                    !this.Ian &&
                    this.yan &&
                    ((this.Ian = !0), this.wan("不满足默认前置交互条件"))
                  );
                (this.yan && !this.Ian) ||
                  ((this.yan = !0),
                  (this.San = !1),
                  (this.Ean = this.mhn()),
                  ModelManager_1.ModelManager.LevelGeneralModel.InteractionDebug &&
                    Log_1.Log.CheckDebug() &&
                    Log_1.Log.Debug(
                      "Interaction",
                      7,
                      "[PawnInteractComponent.UpdateInteractComponent] 交互组件更新：初次进入交互范围",
                      ["IsInteractable:", this.Ean],
                      ["InteractionRange:", this.InteractRange]
                    ),
                  this.fhn()),
                  (this.Ian = !1),
                  this.yan && ((this.Ean = this.mhn()), this.phn()),
                  this.Ean && (this.ohn = !0);
              } else
                (this.ohn = !0),
                  this.yan &&
                    ((this.yan = !1),
                    this.wan("离开交互范围"),
                    this.thn &&
                      (EventSystem_1.EventSystem.Emit(
                        EventDefine_1.EEventName.OnEnterOrExitExecutionRange,
                        !1,
                        this.Entity.Id
                      ),
                      (this.ihn = !1),
                      (this.thn = !1)),
                    this.fie === Protocol_1.Aki.Protocol.kks.Proto_Npc) &&
                    this.CanInteraction &&
                    (Log_1.Log.CheckDebug() &&
                      Log_1.Log.Debug("Interaction", 36, "退出交互范围转身", [
                        "EntityId",
                        this.Entity.Id,
                      ]),
                    this.Entity.GetComponent(185)?.OnPlayerInteractEnd()),
                  this.Zan();
              this.Pan && !this.gan.IsInInteractRange && (this.Pan = !1);
            }
          else this.shn("当前没有可交互的内容");
        else this.shn("感知组件为空");
      else this.shn("感知信息组件为空");
    else this.shn("剧情控制器不允许交互");
  }
  phn() {
    if (this.Can)
      if (this.Can.Entity?.IsInit)
        if (this._hn) this.shn("NPC处于被控状态");
        else if (this.Ean) {
          var t = this.vzi.GetAutoTriggerOption();
          if (t ?? this.YUa())
            this.vzi.UpdateDirectOptions(this.Entity.DistanceWithCamera),
              this.gan.IsInInteractRange && this.InteractPawn(-1, t);
          else if ("Auto" !== this.vzi.GetInteractiveOption()?.DoIntactType) {
            let t = this.IsInSectorRange();
            (t =
              t &&
              !this.van.GetSitDownState() &&
              this.vzi.UpdateDirectOptions(this.Entity.DistanceWithCamera)),
              ModelManager_1.ModelManager.InteractionModel.HandleInteractionHint(
                t,
                this.Entity.Id,
                this.vzi.InteractEntity
              );
          }
        } else
          ModelManager_1.ModelManager.InteractionModel.HandleInteractionHint(!1, this.Entity.Id);
      else this.shn("OwnerActor 未初始化");
    else this.shn("OwnerActor 为空");
  }
  IsInSectorRange() {
    return this.vzi.IsInSectorRange();
  }
  IsInPlayerInteractiveRange() {
    return this.vzi.IsInPlayerInteractiveRange();
  }
  IsMatchRoleGravityDirect() {
    return (
      !this.P11 ||
      !this.H4r?.MoveComp ||
      (this.H4r.MoveComp.IsStandardGravity
        ? this.P11.Equals(Vector_1.Vector.DownVectorProxy)
        : this.P11.Equals(this.H4r.ActorGravityDirectProxy))
    );
  }
  IsMatchRoleOption() {
    return this.vzi.IsMatchRoleOption();
  }
  GetInteractPoint() {
    return this.vzi?.GetInteractPoint();
  }
  Sbo() {
    (this.Ean = !1), (this.San = !1);
  }
  zan() {
    PlotController_1.PlotController.TriggerInteraction(!this.qan && !this.Gan)
      ? ModelManager_1.ModelManager.InteractionModel.HandleInteractionHint(!1, this.Entity.Id)
      : this.Zan();
  }
  UpdateInteractRange() {
    this.vzi &&
      this.gan &&
      this.gan.SetInteractRange(
        this.vzi.InteractRange,
        this.vzi.InteractExitRange,
        this.vzi.LocationOffset
      );
  }
  get _hn() {
    return !!this.Lan && !this.ban && (this.Lan.IsBeingImpacted || this.Lan.IsBeingAttacked);
  }
  GetInteractController() {
    return this.vzi;
  }
  get DebugTimerRunning() {
    return this.eOi;
  }
  get DebugInteractOpened() {
    return this.CanInteraction;
  }
  YUa() {
    return !!this.$Ua && (this.Tan?.HasTag(AUTO_COLLECT_TAG) ?? !1);
  }
  XUa() {
    var t, i;
    this.YUa() &&
      ((t = this.van?.Entity.GetComponent(17))?.Valid && this.OwenActor?.IsValid()
        ? (((i = new UE.GameplayEventData()).Target = this.OwenActor),
          t.SendGameplayEventToActor(
            GameplayTagUtils_1.GameplayTagUtils.GetGameplayTagById(AUTO_COLLECT_TAG),
            i
          ))
        : Log_1.Log.CheckError() &&
          Log_1.Log.Error("Interaction", 7, "自动采集错误", ["EntityID", this.Entity.Id]));
  }
};
(PawnInteractNewComponent = __decorate(
  [(0, RegisterComponent_1.RegisterComponent)(195)],
  PawnInteractNewComponent
)),
  (exports.PawnInteractNewComponent = PawnInteractNewComponent);
//# sourceMappingURL=PawnInteractNewComponent.js.map
