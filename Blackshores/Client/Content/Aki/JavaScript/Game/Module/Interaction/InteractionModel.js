"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.InteractionModel =
    exports.COLOR_SUFFIX =
    exports.COLOR_PREFIX =
    exports.LOCK_TEXTURE_PREFIX =
    exports.LOCK_TEXTURE =
    exports.UNLOCK_TEXTURE =
      void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Log_1 = require("../../../Core/Common/Log"),
  CommonParamById_1 = require("../../../Core/Define/ConfigCommon/CommonParamById"),
  EntitySystem_1 = require("../../../Core/Entity/EntitySystem"),
  ModelBase_1 = require("../../../Core/Framework/ModelBase"),
  MathUtils_1 = require("../../../Core/Utils/MathUtils"),
  IAction_1 = require("../../../UniverseEditor/Interface/IAction"),
  IGlobal_1 = require("../../../UniverseEditor/Interface/IGlobal"),
  LocalStorage_1 = require("../../Common/LocalStorage"),
  LocalStorageDefine_1 = require("../../Common/LocalStorageDefine"),
  PublicUtil_1 = require("../../Common/PublicUtil"),
  TimeUtil_1 = require("../../Common/TimeUtil"),
  ConfigManager_1 = require("../../Manager/ConfigManager"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  InputDistributeController_1 = require("../../Ui/InputDistribute/InputDistributeController"),
  TsInteractionUtils_1 = require("./TsInteractionUtils"),
  ModManager_1 = require("../../Manager/ModManager"),
  InteractManager_1 = require("../../Manager/ModFuncs/Interaction"),
  DEFAULT_CD = 0.5;
(exports.UNLOCK_TEXTURE =
  "/Game/Aki/UI/UIResources/Common/Image/InteractionIcon/T_InteractionIcon11.T_InteractionIcon11"),
  (exports.LOCK_TEXTURE =
    "/Game/Aki/UI/UIResources/Common/Image/InteractionIcon/T_InteractionIcon12.T_InteractionIcon12"),
  (exports.LOCK_TEXTURE_PREFIX =
    "<texture=/Game/Aki/UI/UIResources/Common/Image/InteractionIcon/T_InteractionIcon12.T_InteractionIcon12,0.4687/>"),
  (exports.COLOR_PREFIX = "<color=#e2524c>"),
  (exports.COLOR_SUFFIX = "</color>");
class SameTipInteract {
  constructor() {
    (this.EntityId = 0), (this.CurrentDistance = 0);
  }
}
class InteractionModel extends ModelBase_1.ModelBase {
  constructor() {
    super(...arguments),
      (this.E_i = void 0),
      (this.S_i = !1),
      (this.y_i = void 0),
      (this.I_i = void 0),
      (this.T_i = 0),
      (this.L_i = !1),
      (this.D_i = new Array()),
      (this.R_i = new Array()),
      (this.U_i = new Map()),
      (this.A_i = 0),
      (this.P_i = 0),
      (this.IsInteractionTurning = !1),
      (this.LockInteractionEntity = void 0),
      (this.InteractingEntity = void 0),
      (this.IsTriggerMobileGuide = !1),
      (this.IsTriggerDesktopGuide = !1),
      (this.AutoLongPressTime = 0),
      (this.ActiveInteractGuideCount = 0),
      (this.ShowLongPressTime = 0),
      (this.AutoInteractionGuideCount = 0),
      (this.AutoInteractionGuideAppearCount = 0),
      (this.x_i = 0);
  }
  OnInit() {
    return (
      (this.AutoLongPressTime =
        CommonParamById_1.configCommonParamById.GetIntConfig("AutoLongPressTime")),
      (this.ActiveInteractGuideCount = CommonParamById_1.configCommonParamById.GetIntConfig(
        "ActiveInteractGuideCount"
      )),
      (this.ShowLongPressTime =
        CommonParamById_1.configCommonParamById.GetIntConfig("ShowLongPressTime")),
      (this.AutoInteractionGuideCount = CommonParamById_1.configCommonParamById.GetIntConfig(
        "AutoInteractionGuideCount"
      )),
      TsInteractionUtils_1.TsInteractionUtils.Init(),
      !0
    );
  }
  OnClear() {
    return (
      this.E_i?.clear(),
      (this.y_i = void 0),
      (this.I_i = void 0),
      (this.D_i.length = 0),
      (this.R_i.length = 0),
      this.U_i?.clear(),
      TsInteractionUtils_1.TsInteractionUtils.Clear(),
      !0
    );
  }
  OnLeaveLevel() {
    return TsInteractionUtils_1.TsInteractionUtils.ClearCurrentOpenViewName(), !0;
  }
  LoadInteractGuideData() {
    (this.IsTriggerMobileGuide =
      LocalStorage_1.LocalStorage.GetPlayer(
        LocalStorageDefine_1.ELocalStoragePlayerKey.IsTriggerMobileGuide,
        !1
      ) ?? !1),
      (this.IsTriggerDesktopGuide =
        LocalStorage_1.LocalStorage.GetPlayer(
          LocalStorageDefine_1.ELocalStoragePlayerKey.IsTriggerDesktopGuide,
          !1
        ) ?? !1);
  }
  LoadAutoInteractionGuideAppearCount() {
    this.AutoInteractionGuideAppearCount =
      LocalStorage_1.LocalStorage.GetPlayer(
        LocalStorageDefine_1.ELocalStoragePlayerKey.AutoInteractionGuideAppearCount,
        0
      ) ?? 0;
  }
  SaveTriggerMobileGuide(t) {
    (this.IsTriggerMobileGuide = t),
      LocalStorage_1.LocalStorage.SetPlayer(
        LocalStorageDefine_1.ELocalStoragePlayerKey.IsTriggerMobileGuide,
        t
      );
  }
  SaveTriggerDesktopGuide(t) {
    (this.IsTriggerDesktopGuide = t),
      LocalStorage_1.LocalStorage.SetPlayer(
        LocalStorageDefine_1.ELocalStoragePlayerKey.IsTriggerDesktopGuide,
        t
      );
  }
  SaveAutoInteractionGuideAppearCount(t) {
    (this.AutoInteractionGuideAppearCount = t),
      LocalStorage_1.LocalStorage.SetPlayer(
        LocalStorageDefine_1.ELocalStoragePlayerKey.AutoInteractionGuideAppearCount,
        t
      );
  }
  IsInShowAutoInteractionGuideCountLimit() {
    return this.AutoInteractionGuideAppearCount < this.AutoInteractionGuideCount;
  }
  w_i() {
    (this.y_i = TsInteractionUtils_1.TsInteractionUtils.GetInteractionConfig("Common_Exit")),
      !this.y_i || this.y_i.交互选项组.Num() <= 0
        ? Log_1.Log.CheckError() &&
          Log_1.Log.Error(
            "Interaction",
            17,
            "获取交互默认退出选项失败，请检查配置InteractionConfig是否有Common_Exit"
          )
        : (this.I_i = this.y_i.交互选项组.Get(0));
  }
  GetInteractEntitiesCount() {
    let t = 0;
    for (const e of this.R_i)
      e ? (t += 1 < e.DirectOptionInstanceIds.length ? e.DirectOptionInstanceIds.length : 1) : t++;
    return t;
  }
  GetInteractEntityByIndex(t) {
    let e = 0;
    for (const i of this.R_i)
      if (
        (i && 1 < i.DirectOptionInstanceIds.length ? (e += i.DirectOptionInstanceIds.length) : e++,
        e > t)
      )
        return i.EntityId;
    return -1;
  }
  RefreshInteractEntities(e) {
    let t = 0;
    for (const o of this.R_i)
      if (o) {
        var i = o.GetEntity();
        if (i?.Valid) {
          var r = o.DirectOptionInstanceIds.length;
          if (r <= 0) e.push(i), this.CanAutoPickUp(i) && t++;
          else {
            this.CanAutoPickUp(i) && (t += r);
            for (let t = 0; t < r; t++) e.push(i);
          }
        }
      }
    return (
      (this.x_i = e.length),
      e.sort((t, e) => {
        (t = t.GetComponent(195)),
          (e = e.GetComponent(195)),
          (t = t.GetInteractController().InteractEntity.Priority);
        return e.GetInteractController().InteractEntity.Priority - t;
      }),
      t
    );
  }
  GetInteractItemCount() {
    return this.x_i;
  }
  CanAutoPickUp(t) {
    var e;
    return (
      !!t?.Valid &&
      !t.GetComponent(247)?.GetIsDisableOneClickCollection() &&
      !(
        !(e = t.GetComponent(195))?.IsPawnInteractive() ||
        (!t.GetComponent(115)?.IsDropItem() &&
          !e.IsCollection() &&
          (!e.IsAnimationItem() ||
            !(e = t.GetComponent(0))?.Valid ||
            !(t = e.GetPbEntityInitData()) ||
            !(e = t.ComponentsData) ||
            e.CollectComponent.Disabled))
      )
    );
  }
  GetOptionInstanceIdByIndex(t) {
    let e = t;
    for (const i of this.R_i)
      if (i && 0 < i.DirectOptionInstanceIds.length) {
        if (e < i.DirectOptionInstanceIds.length) return i.DirectOptionInstanceIds[e];
        e -= i.DirectOptionInstanceIds.length;
      } else e--;
    return -1;
  }
  GetOptionNameByIndex(t) {
    let e = t;
    for (const i of this.R_i)
      if (i && !i.IsAdvice && 0 < i.DirectOptionInstanceIds.length) {
        if (e < i.DirectOptionNames.length) return i.DirectOptionNames[e];
        e -= i.DirectOptionNames.length;
      } else e--;
  }
  GetConditionIconPath(t) {
    let e = t;
    for (const i of this.R_i)
      if (i && !i.IsAdvice && 0 < i.DirectOptionInstanceIds.length) {
        if (e < i.DirectOptionConditionIcon.length) return i.DirectOptionConditionIcon[e];
        e -= i.DirectOptionConditionIcon.length;
      } else e--;
  }
  GetToggleGray(t) {
    let e = t;
    for (const i of this.R_i)
      if (i && !i.IsAdvice && 0 < i.DirectOptionInstanceIds.length) {
        if (e < i.DirectOptionGray.length) return i.DirectOptionGray[e];
        e -= i.DirectOptionGray.length;
      } else e--;
    return !1;
  }
  GetCommonExitOption() {
    return this.I_i || this.w_i(), this.I_i;
  }
  EnterInteractCd(t = DEFAULT_CD) {
    this.T_i = TimeUtil_1.TimeUtil.GetServerTime() + t;
  }
  InInteractCd() {
    if (
      ModManager_1.ModManager.settings.AutoLoot ||
      ModManager_1.ModManager.settings.AutoPickTreasure
    ) {
      return false;
    }
    return this.T_i > TimeUtil_1.TimeUtil.GetServerTime();
  }
  HandleInteractionHint(e, i, t = void 0) {
    if (t) {
      const Entity = t.GetEntity();
      if (InteractManager_1.Interaction.IsInteractHintFilter(Entity)) return;
    }
    if (e) {
      if (this.D_i.includes(i)) {
        if (TsInteractionUtils_1.TsInteractionUtils.IsInteractHintViewOpened()) return;
      } else this.D_i.push(i), this.R_i.push(t);
      TsInteractionUtils_1.TsInteractionUtils.IsInteractHintViewOpened()
        ? 0 < this.D_i.length && TsInteractionUtils_1.TsInteractionUtils.UpdateInteractHintView()
        : TsInteractionUtils_1.TsInteractionUtils.OpenInteractHintView();
    } else {
      e = this.D_i.indexOf(i);
      if (-1 < e) {
        this.D_i.splice(e, 1), this.R_i.splice(e, 1);
        let t = void 0;
        for (const r of this.U_i)
          if (r[1].EntityId === i) {
            t = r[0];
            break;
          }
        t && this.U_i.delete(t),
          0 < this.D_i.length
            ? TsInteractionUtils_1.TsInteractionUtils.UpdateInteractHintView()
            : TsInteractionUtils_1.TsInteractionUtils.CloseInteractHintView();
      }
    }
  }
  CheckOptionUniqueness(t, e = void 0, i = -1) {
    var r, o;
    return (
      1 !== e.CustomOptionType &&
      !(
        e.IsUniqueness &&
        e.UniequenessType === IAction_1.EInteractUniqueness.Closest &&
        "" !== e.TidContent &&
        -1 !== i &&
        ((r = this.U_i.get(e.TidContent))
          ? r.CurrentDistance > i && t !== r.EntityId
            ? (-1 < (o = this.D_i.indexOf(r.EntityId)) &&
                (this.D_i.splice(o, 1), this.R_i.splice(o, 1)),
              (r.EntityId = t),
              (r.CurrentDistance = i),
              0)
            : t !== r.EntityId || ((r.CurrentDistance = i), 0)
          : (((o = new SameTipInteract()).EntityId = t),
            (o.CurrentDistance = i),
            this.U_i.set(e.TidContent, o),
            0))
      )
    );
  }
  AddInteractOption(t, e, i, r, o) {
    var n = this.GetInteractController(t);
    return n
      ? (e = this.GetDynamicConfig(e))
        ? n.AddDynamicInteractOption(e, i, r, o)
        : (Log_1.Log.CheckError() &&
            Log_1.Log.Error("Interaction", 18, "交互选项配置丢失，请确认前后端配置是否一致", [
              "PbDataId",
              t.GetComponent(0)?.GetPbDataId(),
            ]),
          -1)
      : (Log_1.Log.CheckError() &&
          Log_1.Log.Error(
            "Interaction",
            36,
            "AddInteractOption failed.InteractController is undefined",
            ["PbDataId", t.GetComponent(0)?.GetPbDataId()]
          ),
        -1);
  }
  RemoveInteractOption(t, e) {
    t = this.GetInteractController(t);
    return !!t && t.RemoveDynamicInteractOption(e);
  }
  ChangeOptionText(t, e, i) {
    t = this.GetInteractController(t);
    t && t.ChangeOptionText(e, i);
  }
  GetInteractController(t) {
    if (t) {
      t = t.GetComponent(195);
      if (t) return t.GetInteractController();
    }
  }
  SetInteractTarget(t) {
    this.A_i !== t &&
      ((this.A_i = t),
      Log_1.Log.CheckDebug() && Log_1.Log.Debug("Interaction", 36, "切换交互目标", ["entityId", t]),
      InputDistributeController_1.InputDistributeController.RefreshInputTag());
  }
  get CurrentInteractEntityId() {
    return this.A_i;
  }
  SetInterctCreatureDataId(t) {
    this.P_i = t;
  }
  get InteractCreatureDataId() {
    return this.P_i;
  }
  get InteractCreatureDataLongId() {
    if (void 0 !== this.P_i) return MathUtils_1.MathUtils.NumberToLong(this.P_i);
  }
  get CurrentInteractUeActor() {
    if (this.A_i) {
      var t = EntitySystem_1.EntitySystem.Get(this.A_i);
      if (t) return t.GetComponent(1)?.Owner;
    }
  }
  b_i() {
    var t = (0, puerts_1.$ref)("");
    let e = (0, PublicUtil_1.getConfigPath)(IGlobal_1.globalConfig.InteractOptionConfigPath);
    if (
      (PublicUtil_1.PublicUtil.IsUseTempData() ||
        (e = (0, PublicUtil_1.getConfigPath)(IGlobal_1.globalConfigTemp.InteractOptionConfigPath)),
      UE.BlueprintPathsLibrary.FileExists(e))
    ) {
      if ((UE.KuroStaticLibrary.LoadFileToString(t, e), (t = (0, puerts_1.$unref)(t)))) {
        this.E_i = new Map();
        t = JSON.parse(t);
        if (t) for (const i of t) i.Guid, this.E_i.set(i.Guid, i);
      }
    } else
      Log_1.Log.CheckWarn() &&
        Log_1.Log.Warn("World", 36, "不存在InteractOption配置文件。", ["Path", e]);
  }
  GetDynamicConfig(t) {
    if (PublicUtil_1.PublicUtil.UseDbConfig()) {
      if ((this.E_i || (this.E_i = new Map()), !this.E_i.get(t))) {
        var e = ConfigManager_1.ConfigManager.InteractOptionConfig.GetInteractionConfig(t);
        if (!e) return;
        var i = {
          Guid: e.Guid,
          Type: JSON.parse(e.Type),
          Icon: e.Icon || void 0,
          TidContent: "" !== e.TidContent ? e.TidContent : void 0,
          Condition: void 0,
          UniquenessTest: "" !== e.UniquenessTest ? e.UniquenessTest : void 0,
          DoIntactType: "" !== e.DoIntactType ? e.DoIntactType : void 0,
          Range: e.Range || void 0,
          Duration: void 0,
        };
        e.Condition && "" !== e.Condition && (i.Condition = JSON.parse(e.Condition)),
          e.Duration && "" !== e.Duration && (i.Duration = JSON.parse(e.Duration)),
          this.E_i.set(t, i);
      }
    } else this.S_i || (this.b_i(), (this.S_i = !0));
    return this.E_i.get(t);
  }
  SetInteractionHintDisable(t) {
    (this.L_i = t) && TsInteractionUtils_1.TsInteractionUtils.CloseInteractHintView();
  }
  get IsHideInteractHint() {
    return this.L_i;
  }
  LockInteraction(t, e) {
    t = t?.GetComponent(195);
    t && t.Valid && t.SetServerLockInteract(e, "Interacting Notify");
  }
  GetInteractEntityIds() {
    return this.D_i;
  }
  LockInteract(t) {
    ModelManager_1.ModelManager.InteractionModel.LockInteractionEntity
      ? Log_1.Log.CheckError() &&
        Log_1.Log.Error("LevelEvent", 36, "交互锁定状态不支持多重锁定，请做到配置成对")
      : ((this.LockInteractionEntity = t),
        (t = []).push(12),
        t.push(18),
        t.push(19),
        ModelManager_1.ModelManager.BattleUiModel.ChildViewData.HideBattleView(1, t));
  }
  RecoverInteractFromLock() {
    var t;
    this.LockInteractionEntity &&
      ((t = EntitySystem_1.EntitySystem.GetComponent(this.LockInteractionEntity, 195)),
      (this.LockInteractionEntity = void 0),
      ModelManager_1.ModelManager.BattleUiModel.ChildViewData.ShowBattleView(1),
      t?.AfterUnlockInteractionEntity(),
      InputDistributeController_1.InputDistributeController.RefreshInputTag());
  }
}
exports.InteractionModel = InteractionModel;
//# sourceMappingURL=InteractionModel.js.map
