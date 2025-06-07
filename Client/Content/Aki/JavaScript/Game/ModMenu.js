'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModLoader = void 0;

const puerts = require("puerts");
const ResourceSystem = require("../Core/Resource/ResourceSystem");
const GlobalData = require("../Game/GlobalData");
const ModRuntime = require("./ModRuntime");
const ModUtils = require("./Manager/Utils/ModUtils");
const ModDebugger = require("./Manager/ModFuncs/ModDebugger");
const KeybindController = require("./Manager/ModFuncs/Keybind/KeybindController");
const ModMethod = require("./Manager/ModFuncs/ModMethod");
const ModManager = require("./Manager/ModManager");
const Loader = require("./Manager/Component/Loader");
const TreasureTp = require("./Manager/Component/TreasureTp");
const InputSettings = require("./Game/InputSettings/InputSettings");
const buffMethod = require("./Manager/ModFuncs/buffMethod");
const InputKeyController = require("./Manager/Utils/InputKeyController");
const InputManager = require("./Ui/Input/InputManager");
const CustomTp = require("./Manager/ModFuncs/CustomTp");
const Dungeon = require("./Manager/ModFuncs/Dungeon");
const EntityManager = require("./Manager/ModFuncs/EntityManager");
const ModelManager = require("./Manager/ModelManager");
const ModLanguage = require("./Manager/ModFuncs/ModLanguage");
const ModMenuDefine = require("./Manager/ModMenuDefine");
const UI = require("./Manager/Utils/UI");
const DebounceHandler = require("./Manager/Utils/DebounceHandler");
const EntityFilter = require("./Manager/ModFuncs/EntityFilter");
const Http = require("./Manager/Http/Http");
const ESP = require("./Manager/ModFuncs/ESP");
const Logger = require("./Manager/Utils/Logger");
const ue = require("ue");

const TESTER_WIDGET_PATH = "/Game/Aki/UI/TesterWM.TesterWM_C";
const ESP_INTERVAL = 100;

class ModLoader {
  constructor() {
    this.initLoader();
  }

  initLoader() {
    try {
      Logger.Logger.ClearLog();
    } catch (e) {}

    ModLoader.versionInterval = setInterval(async () => {
      try {
        await Loader.Loader.updateProgressBar();
      } catch (e) {}
    }, 2500);

    ModLoader.loaderInterval = setInterval(() => {
      try {
        ModLoader.loadModMenu();
      } catch (error) {
        Logger.Logger.Error(error);
      }
    }, 10000);
  }

  static async loadModMenu() {
    if (!this.isMenuLoaded) {
      Logger.Logger.Log("Loading mod menu....");
      this.Menu = ue.UObject.CreateWidget(GlobalData.GlobalData.World, ResourceSystem.ResourceSystem.Load("/Game/Aki/UI/ModMenu/ModMenu.ModMenu_C", ue.Class));
      this.initMenu();
      
      if (this.Menu) {
        try {
          require("./Manager/ModFuncs/ModTpFile");
          ModManager.ModManager.settings.enableTpFile = true;
        } catch (error) {
          Logger.Logger.Error(error);
          ModManager.ModManager.settings.enableTpFile = false;
        }
        
        this.isMenuLoaded = true;
        clearInterval(ModLoader.loaderInterval);
        ModLoader.loaderInterval = null;
        
        setInterval(() => ModLoader.ListenKey(), 16);
        setInterval(() => ESP.ESP.updateESP(), ESP.ESP_INTERVAL);
        
        this.loadRealMenu();
        Logger.Logger.Success("Mod Menu loaded successfully!");
      }
    }
  }

  static IsMenuShowKey(a) {
    const isXDown = InputSettings.InputKeys.XDown(a);
    const isAltDown = InputSettings.InputSettings.LeftAltDown("LeftAlt");
    
    if (isAltDown && isXDown && !this.keyState) {
      this.keyState = true;
      return true;
    }
    
    if (!isXDown) {
      this.keyState = false;
    }
    return false;
  }

  static ListenKey() {
    if (!InputSettings.InputSettings) return;
    
    ModManager.ModManager.updateMenuState();
    KeybindController.KeybindController.ListenKeybindTrigger();
    
    InputSettings.InputSettings.AddActionMapping("ShowModMenu", "ShowModMenu");
    InputSettings.InputKeys.AddActionMapping("X", "X");
    InputSettings.InputSettings.AddActionMapping("AlwaysShowCursor", "AlwaysShowCursor");
    
    this.updateMenuState();
    this.updateWorldSpeed();
    this.updateCursor();
    this.updatePlayerSpeed();
    this.updateVehicleSpeed();
    this.updateFlight();
    this.updateFreezeGameTime();
    KeybindController.KeybindController.UpdateKeyState();
  }

  static ToggleCursor() {
    if (this.isCursorShown) {
      try {
        ModMethod.SetAlwaysShowCursor(false);
        ModManager.ModManager.settings.AlwaysShowCursor = false;
        this.Menu.SetVisibility(2);
      } catch (e) {}
    } else {
      try {
        ModManager.ModManager.settings.AlwaysShowCursor = true;
        ModMethod.SetAlwaysShowCursor(true);
        this.Menu.SetVisibility(ModMenuDefine.VISIBILITY.SelfHitTestInvisible);
      } catch (e) {}
    }
    this.isCursorShown = !this.isCursorShown;
  }

  static sfxMod() {
    ModUtils.ModUtils.PlayAudio("play_ui_fx");
  }

  static openGithub() {
    ue.KismetSystemLibrary.LaunchURL("for github");
  }
  static openDiscord() {
    ue.KismetSystemLibrary.LaunchURL("for discord");
  }
}

ModLoader.loaderInterval = null;
ModLoader.versionInterval = null;
ModLoader.isCursorShown = false;
ModLoader.customTpLoader = null;
ModLoader.isMenuLoaded = false;
ModLoader.keyMenuLoader = null;
ModLoader.isMenuCreated = false;
ModLoader.Menu = null;
ModLoader.version = "";
ModLoader.isTesterLoaded = true;
ModLoader.keyState = null;

exports.ModLoader = ModLoader;