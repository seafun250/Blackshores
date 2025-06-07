"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.PositionPanel = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  ActorSystem_1 = require("../../../../../Core/Actor/ActorSystem"),
  Info_1 = require("../../../../../Core/Common/Info"),
  Stats_1 = require("../../../../../Core/Common/Stats"),
  Time_1 = require("../../../../../Core/Common/Time"),
  Protocol_1 = require("../../../../../Core/Define/Net/Protocol"),
  GameBudgetInterfaceController_1 = require("../../../../../Core/GameBudgetAllocator/GameBudgetInterfaceController"),
  Net_1 = require("../../../../../Core/Net/Net"),
  Macro_1 = require("../../../../../Core/Preprocessor/Macro"),
  ResourceSystem_1 = require("../../../../../Core/Resource/ResourceSystem"),
  BaseConfigController_1 = require("../../../../../Launcher/BaseConfig/BaseConfigController"),
  Platform_1 = require("../../../../../Launcher/Platform/Platform"),
  EventDefine_1 = require("../../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../../Common/Event/EventSystem"),
  PublicUtil_1 = require("../../../../Common/PublicUtil"),
  ModMethod_1 = require("../../../../Manager/ModFuncs/ModMethod"),
  TimeUtil_1 = require("../../../../Common/TimeUtil"),
  EffectSystem_1 = require("../../../../Effect/EffectSystem"),
  Global_1 = require("../../../../Global"),
  GlobalData_1 = require("../../../../GlobalData"),
  ModelManager_1 = require("../../../../Manager/ModelManager"),
  FeatureRestrictionTemplate_1 = require("../../../Common/FeatureRestrictionTemplate"),
  BattleChildViewPanel_1 = require("./BattleChildViewPanel"),
  ENTITY_SCORE_PATH = "../Config/Raw/Tables/k.可视化编辑/EntityPerformanceData.json",
  SIMPLE_NPC_PERFORMANCE_SCORE = 25,
  LOW_SCORE_THRESHOLD = 300,
  MID_SCORE_THRESHOLD = 500,
  HIGH_SCORE_THRESHOLD = 600,
  LOW_SCORE_COLOR = "green",
  MID_SCORE_COLOR = "orange",
  HIGH_SCORE_COLOR = "purple",
  WARNING_COLOR = "red",
  budgetName = ["Normal", "Fighting", "Cutscene"],
  loadModeName = ["None", "InLoading", "InGame"];
class PositionPanel extends BattleChildViewPanel_1.BattleChildViewPanel {
  constructor() {
    super(...arguments),
      (this.pet = void 0),
      (this.zva = void 0),
      (this.vet = void 0),
      (this.lYa = void 0),
      (this.hdc = void 0),
      (this.Met = !0),
      (this.ola = !1),
      (this.Eet = ""),
      (this.Zva = ""),
      (this.SH = new Map()),
      (this.yet = 500),
      (this.pk = 0),
      (this.eMa = 0),
      (this.tMa = 0),
      (this.ldc = new Date()),
      (this.wQe = () => {
        this.lhh(), this._dc();
      }),
      (this.ShowPlayerPosition = () => {
        (this.Met = !this.Met), this.pet.SetUIActive(this.Met);
      });
  }
  OnRegisterComponent() {
    this.ComponentRegisterInfos = [
      [0, UE.UIText],
      [1, UE.UIText],
      [2, UE.UIText],
      [3, UE.UIText],
      [4, UE.UIText],
    ];
  }
  OnStart() {
    (this.ola =
      FeatureRestrictionTemplate_1.FeatureRestrictionTemplate.TemplateForPioneerClient.Check()),
      (this.pet = this.GetText(0)),
      (this.zva = this.GetText(2)),
      (this.vet = this.GetText(1)),
      (this.lYa = this.GetText(3)),
      (this.hdc = this.GetText(4)),
      Info_1.Info.IsBuildShipping || this.iMa(),
      this.ola ? (this.Met = !0) : Info_1.Info.IsBuildShipping && (this.Met = !1),
      this.pet.SetUIActive(this.Met),
      this.zva.SetUIActive(!1),
      this.lYa?.SetUIActive(!1),
      this.vet.SetUIActive(!1),
      this.lhh(),
      this._dc();
  }
  AddEvents() {
    this.ChildViewData.AddCallback(0, this.wQe),
      EventSystem_1.EventSystem.Add(
        EventDefine_1.EEventName.ShowPlayerPosition,
        this.ShowPlayerPosition
      );
  }
  RemoveEvents() {
    this.ChildViewData.RemoveCallback(0, this.wQe),
      EventSystem_1.EventSystem.Remove(
        EventDefine_1.EEventName.ShowPlayerPosition,
        this.ShowPlayerPosition
      );
  }
  lhh() {
    var e = this.ChildViewData.GetChildVisible(0);
    this.vet?.SetUIActive(e);
  }
  _dc() {
    var e = this.ChildViewData.GetChildVisible(0);
    this.hdc?.SetUIActive(e);
  }
  OnBeforeDestroy() {
    (this.pet = void 0), (this.zva = void 0);
  }
  OnAfterTickBattleChildViewPanel(e) {
    PositionPanel.vJe.Start(), this.cdc(e), this.udc(e), PositionPanel.vJe.Stop();
  }
  cdc(e) {
    var t, i;
    Global_1.Global.BaseCharacter &&
      ((t = Global_1.Global.BaseCharacter.CharacterActorComponent.ActorLocationProxy),
      ([e, t, i] =
        (this.Met && this.Iet(t, e),
        ModMethod_1.ModMethod.SetCurrentCordinate(t),
        [(t.X / 100).toFixed(0), (t.Y / 100).toFixed(0), (t.Z / 100).toFixed(0)])),
      this.vet.SetText(e + `,${t},` + i));
  }
  udc(e) {
    this.ldc.setTime(Date.now());
    var t = TimeUtil_1.TimeUtil.DateFormat2(this.ldc);
    this.hdc.SetText(t.slice(0, -3));
  }
  Iet(e, t) {
    var i = e.X.toFixed(0),
      r = e.Y.toFixed(0),
      e = e.Z.toFixed(0),
      s = ((this.eMa += this.rMa), this.tMa++, TimeUtil_1.TimeUtil.DateFormat2(new Date())),
      o = TimeUtil_1.TimeUtil.DateFormat2(new Date(TimeUtil_1.TimeUtil.GetServerTimeStamp())),
      a = Net_1.Net.GetUnVerifiedMessageCount(),
      a =
        10 < a
          ? `
协议缓存队列长度:` + a
          : "",
      l = (1e3 / t).toFixed(0),
      n = ActorSystem_1.ActorSystem.Size,
      _ = ActorSystem_1.ActorSystem.Capacity,
      h = BaseConfigController_1.BaseConfigController.GetPackageConfigOrDefault("Stream"),
      c = ModelManager_1.ModelManager.BulletModel?.GetBulletEntityMap().size;
    (this.pk += t), this.pk > this.yet && ((this.pk = 0), this.UpdateEffectState(), this.oMa());
    let m = `Fps:${l} Pos: (${i},${r},${e})`;
    if (
      ((m =
        (m = !this.ola && 0 < this.SH.size ? m + "  " + this.Zva : m) +
        ` 
CTime:${s}
STime:${o}
GTime:` +
        ModelManager_1.ModelManager.TimeOfDayModel.GameTime.HourMinuteString),
      this.ola ||
        ((t = Global_1.Global.BaseCharacter?.CharacterActorComponent?.MoveComp) &&
          (m = m + "  Gravity:" + t.GravityDirect.ToString())),
      this.lYa?.SetUIActive(!1),
      this.ola ||
        (m =
          `${(m =
            (m =
              m + " ServerIp:" + ModelManager_1.ModelManager.LoginModel.Platform + a + this.Eet) +
            " Bullet:" +
            c)}
Actor:${n}/${_} (${h}) Load:${loadModeName[ResourceSystem_1.ResourceSystem.GetLoadMode()]} Budge:` +
          budgetName[
            GameBudgetInterfaceController_1.GameBudgetInterfaceController.CurrentGlobalMode
          ]),
      0 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType() &&
        UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.RayTracing.Enable"))
    ) {
      let e = "",
        t = !1;
      0 < UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.Lumen.Reflections.Allow") &&
        ((e += " Reflections"), (t = !0)),
        0 < UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.Lumen.DiffuseIndirect.Allow") &&
          (t && (e += " /"), (e += " GI"), (t = !0)),
        0 < UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.RayTracing.Shadows") &&
          (t && (e += " /"), (e += " Shadows"), (t = !0)),
        t || (e = "off"),
        (m = `${m}\n RayTracing Feature: <color=green>${e}</color>`);
    }
    (l = UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.Streaming.DetailPanel")),
      (i = UE.StreamableRenderAsset.GetStreamingBudgetInfo());
    0 < l &&
      (0 < i.X || 0 < i.Z) &&
      ((r = i.X < i.Y ? "green" : "#ff0000ff"),
      (e = i.Z < i.W ? "green" : "#ff0000ff"),
      (s = 1 < l),
      (o = l < 3 ? 6 : 6 * (l - 1)),
      (t = i.X < i.Y ? 0 : o),
      (a = i.Z < i.W ? 0 : o),
      (m += `
StreamingPool: `),
      (c = s ? "Require " : ""),
      (n = s ? "Budget " : ""),
      0 < i.W
        ? (0 < i.X &&
            (m = `${m}<color=${r}><size=+${t}> Texture ${c}${i.X}/${n}${i.Y}, </size></color>`),
          0 < i.Z && (m = `${m}<color=${e}><size=+${a}> Mesh ${c}${i.Z}/${n}${i.W}</size></color>`))
        : 0 < i.X &&
          (m = `${m}<color=${r}><size=+${t}> Texture + Mesh ${c}${i.X}/${n}${i.Y}</size></color>`),
      s) &&
      ((_ = UE.StreamableRenderAsset.GetStreamingRenderAssetsInfo()),
      (m =
        `${(m =
          `${m}
RenderAssetNum: Texture ${_.X} Mesh ` + _.Y)}
CurrentTextureMem:${_.Z} RTMem:` + _.W),
      (h = UE.StreamableRenderAsset.GetStreamingPoolInfo()),
      (m =
        `${m}
TextureStreamingPoolSize:${h.X} NonStreaming:` + h.Y),
      0 < h.Z && (m = `${m}\nAvailableStreamingVRAM:${h.Z} UsableVRAM:${h.W})`),
      (m += `

`)),
      this.pet.SetText(m);
  }
  UpdateNiagaraGlobalWindow() {
    let e = "",
      t = !1;
    var i = UE.NiagaraFunctionLibrary.GetGlobalInfo(),
      r = i.GlobalTotalActive,
      s = i.GlobalTotalScalability,
      o = i.GlobalTotalParticles,
      i = i.GlobalTotalEmitters;
    let a = 1,
      l = 1,
      n = 1,
      _ = 1;
    (_ = ((n = ((l = 1e3), 4e3)), 2e3)),
      r > (a = (Platform_1.Platform.IsPcPlatform() || Platform_1.Platform.IsPs5Platform(), 1e3)) &&
        ((e += ` TotalActive超标,当前值是:${r}
`),
        (t = !0)),
      s > l &&
        ((e += ` TotalScalability超标,当前值是:${s}
`),
        (t = !0)),
      o > n &&
        ((e += ` TotalParticles超标,当前值是:${o}
`),
        (t = !0)),
      i > _ &&
        ((e += ` TotalEmitters超标,当前值是:${i}
`),
        (t = !0)),
      t ? (this.lYa?.SetUIActive(!0), this.lYa?.SetText(e)) : this.lYa?.SetUIActive(!1);
  }
  UpdateEffectState() {
    var e = EffectSystem_1.EffectSystem.GetEffectCount(),
      t = EffectSystem_1.EffectSystem.GetActiveEffectCount(),
      i = EffectSystem_1.EffectSystem.GetEffectLruSize(),
      r = EffectSystem_1.EffectSystem.GetEffectLruCapacity(),
      s = EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(0),
      o = EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(1),
      a = EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(2),
      l = EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(3);
    this.Eet = `
Effect: ${e}(${t}) Pool:${i}/${r}(${s})(${o})(${a})(${l})`;
  }
  oMa() {
    if (0 !== this.SH.size) {
      var r = Math.floor(this.eMa / this.tMa);
      let e = WARNING_COLOR,
        t = "",
        i = "";
      this.zva.SetUIActive(!1),
        r < LOW_SCORE_THRESHOLD
          ? (e = LOW_SCORE_COLOR)
          : r < MID_SCORE_THRESHOLD
            ? ((e = MID_SCORE_COLOR), (t = "<b>"), (i = "</b>"))
            : r < HIGH_SCORE_THRESHOLD
              ? ((e = HIGH_SCORE_COLOR), (t = "<size=+6><b>"), (i = "</b></size>"))
              : r >= HIGH_SCORE_THRESHOLD &&
                ((e = WARNING_COLOR),
                (t = "<size=+18><b>"),
                (i = "</b></size>"),
                this.zva.SetUIActive(!0),
                this.zva.SetText(
                  `<size=+28><b><color=red>Warning!!!此处Aoi范围内可Tick实体过多，有性能问题。TickScore:${r}</color></b></size>`
                )),
        (this.Zva = `<color=${e}>${t}TickScore:${r}${i}</color>`),
        (this.eMa = 0),
        (this.tMa = 0);
    }
  }
  get rMa() {
    let i = 0;
    return (
      ModelManager_1.ModelManager.CreatureModel.GetAllEntities().forEach((e) => {
        var t;
        e.Entity.LastTickFrame === Time_1.Time.Frame &&
          ((t = (e = e.Entity.GetComponent(0)).GetPbDataId()),
          e?.GetEntityType() !== Protocol_1.Aki.Protocol.kks.Proto_Player) &&
          e?.GetEntityType() !== Protocol_1.Aki.Protocol.kks.Proto_Vision &&
          14000169 !== t &&
          (t = e?.GetPbEntityInitData()) &&
          (i += this.nMa(t.BlueprintType));
      }),
      Math.floor(i)
    );
  }
  nMa(e) {
    return e.includes("SimpleNPC")
      ? SIMPLE_NPC_PERFORMANCE_SCORE
      : void 0 === (e = this.SH.get(e))
        ? 0
        : e;
  }
  iMa() {
    var e = (0, PublicUtil_1.getConfigPath)(ENTITY_SCORE_PATH),
      t = (0, puerts_1.$ref)("");
    if ((UE.KuroStaticLibrary.LoadFileToString(t, e), (e = (0, puerts_1.$unref)(t)))) {
      t = JSON.parse(e);
      if (t) {
        e = t.EntityTypeScore;
        if (e) {
          this.SH.clear();
          for (const i of e) this.SH.set(i.BlueprintType, Math.floor(10 * i.Score) / 10);
        }
      }
    }
  }
}
(exports.PositionPanel = PositionPanel).vJe = Stats_1.Stat.Create("[BattleView]PositionPanelTick");
//# sourceMappingURL=PositionPanel.js.map
