"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.ModManager = void 0);
const UE = require("ue"),
  puerts_1 = require("puerts"),
  InputController_1 = require("./Utils/InputKeyController"),
  ModUtils_1 = require("./Utils/ModUtils"),
  ModLanguage_1 = require("./ModFuncs/ModLanguage"),
  ConfigManager_1 = require("./Utils/ConfigManager"),
  ConfigFileName = "Mod.json";

class ModManager {
  constructor() {
    this.key_State = false;
  }

  static ESPSettings = {
    ESP: false,
    ShowMonster: false,
    ShowBlobfly: false,
    ShowAnimal: false,
    ShowCollect: false,
    ShowTreasure: false,
    CasketDelivery: false,
    ShowCasket: false,
    ShowMutterfly: false,
    ShowRock: false,
    ShowPuzzle: false,
    DebugEntity: false,
    ShowName: false,
    ShowDistance: false,
    ShowBox: false,
    ESPRadius: 300,
  };

  static settings = {
    ...this.ESPSettings,
    UID: "00000000",
    flightMode: false,
    UnlockSkin: true,
    PlayerSpeed: false,
    VacuumCollect: false,
    EchoVacuum: false,
    playerSpeedValue: 5,
    buffType: 0,
    GodMode: false,
    VacuumRadius: 100,
    Language: "English",
    FPSUnlocker: false,
    NoCD: false,
    KillAnimal: false,
    AutoPickTreasure: false,
    AutoAbsorb: false,
    AutoLoot: false,
    PerceptionRange: false,
    AutoSonanceCasket: false,
    HasCustomTpFile: false,
    AlwaysCrit: false,
    killAuraRadius: 15,
    Custom_Skills: 0,
    Custom_Skills_id: 300520,
    AutoDestroy: false,
    WorldSpeed: false,
    WorldSpeedValue: 1,
    ShowFPS: false,
    PlotSkip: false,
    AutoPuzzle: false,
    NoClip: false,
    killAura: false,
    isDotKillAura: true,
    isInstantKillAura: false,
    InfiniteStamina: false,
    MobVacuum: false,
    HideDmgUi: false,
    MarkTp: false,
    MarkX: 0,
    MarkY: 0,
    MarkZ: 0,
    MarkTpPosZ: 300,
    QuestTp: false,
    AutoTpTrackedMonster: false,
    QuestX: 0,
    QuestY: 0,
    QuestZ: 0,
    WaypointsLongRange: false,
    IllusiveSprint: false,
    AntiDither: true,
    MaxResonanceChain: false,
    MaxWeaponRank: false,
    InfiniteForte: false,
    InfiniteIntroOutro: false,
    InfiniteUltimate: false,
    OneHitKill: false,
    MaterialShellBuff: false,
    EchoesBuff: false,
    SuperBuff: false,
    AutoLootDistance: 50,
    AutoTreasureDistance: 50,
    AutoAbsorbDistance: 50,
    HitMultiplier: false,
    Hitcount: 15,
    VehicleSpeed: false,
    TreasureTpOverlay: false,
    ShowLoader: false,
    TreasureTracking: false,
    AlwaysShowCursor: false,
    FreezeGameTime: false,
    FixQuestStuck: false,
    NoClipSpeed: 50,
    AutoOpenTeleports: false,
    CopyTpCordinate: false,
    UiTextColor: "#FFFFFF",
    AutoRestartDungeon: false,
    SkipEntranceDungeon: false,
    AutoChallengeBoss: false,
    AutoClaimReward: false,
    AutoRetryChallengeBossDelay: 10000,
    CordinateState: { x: 0, y: 0, z: 0 },
  };

  static SaveConfig() {
    let configSettings = { ...this.settings };
    configSettings.IllusiveSprint = false;
    configSettings.QuestX = 0;
    configSettings.QuestY = 0;
    configSettings.QuestZ = 0;
    configSettings.MarkX = 0;
    configSettings.MarkY = 0;
    configSettings.MarkZ = 0;
    configSettings.AlwaysShowCursor = false;
    configSettings.FixQuestStuck = false;
    configSettings.WaypointsLongRange = false;
    configSettings.PerceptionRange = false;
    configSettings.AutoRestartDungeon = false;

    UE.KuroStaticLibrary.SaveStringToFile(
      JSON.stringify(configSettings, null, 2),
      ConfigManager_1.ConfigManager.LoadConfigDir() + ConfigFileName
    );
  }

  static CheckConfigExists() {
    const isExists = ConfigManager_1.ConfigManager.CheckConfigExists(ConfigFileName);
    return isExists;
  }

  static LoadConfig() {
    let Config = ConfigManager_1.ConfigManager.GetConfig(ConfigFileName);
    Config = JSON.parse(Config);
    // compare current settings
    const Diff = Object.keys(ModManager.settings).filter((x) => !Object.keys(Config).includes(x));
    if (Diff.length > 0) {
      // add new settings
      for (const i in Diff) {
        Config[Diff[i]] = ModManager.settings[Diff[i]];
      }
    }
    this.settings = Config;
    if (!ModLanguage_1.ModLanguage.Langs.includes(this.settings.Language)) {
      this.settings.Language = "English";
    }
    ModManager.SaveConfig();
  }

  static StartMod() {
    InputController_1.InputKeyController.addKey("FlightMode", "Five");

    //KeybindController_1.KeybindController.InitKeyBinds()
  }

  static ListenMod() {
    if (!ModUtils_1.ModUtils.IsInGame()) return;
  }
}

exports.ModManager = ModManager;
//# sourceMappingURL=Main.js.map
