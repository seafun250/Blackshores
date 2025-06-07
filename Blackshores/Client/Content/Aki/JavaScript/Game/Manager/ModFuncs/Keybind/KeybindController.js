'use strict';

const KEYBINDS = {
  Flight: { key: null, type: "Toggle" },
  KillAura: { key: null, type: "Hold" },
  MobVacuum: { key: null, type: "Toggle" },
  WorldSpeed: { key: null, type: "Toggle" },
  PlayerSpeed: { key: null, type: "Toggle" },
  NextTp: { key: null, type: "Press" },
  PrevTp: { key: "X", type: "Press" },
  MarkTp: { key: "T", type: "Press" },
  QuestTp: { key: "V", type: "Press" },
  ReloadBuff: { key: null, type: "Press" },
  ShowCursor: { key: null, type: "Toggle" },
  FreezeGameTime: { key: "F9", type: "Toggle" },
  AutoRestartDungeon: { key: null, type: "Toggle" },
  CopyTpCord: { key: null, type: "Press" },
  UnstuckLoading: { key: null, type: "Press" },
  ApplyBuff: { key: null, type: "Press" }
};

const KEY_NAME_MAP = {
  Flight: "Flight",
  KillAura: "KillAura",
  MobVacuum: "MobVacuum",
  WorldSpeed: "WorldSpeed",
  PlayerSpeed: "PlayerSpeed",
  NextTp: "NextTp",
  PrevTp: "PrevTp",
  MarkTp: "MarkTp",
  QuestTp: "QuestTp",
  ReloadBuff: "ReloadBuff",
  ShowCursor: "ShowCursor",
  FreezeGameTime: "FreezeGameTime",
  AutoRestartDungeon: "AutoRestartDungeon",
  CopyTpCord: "CopyTpCord",
  UnstuckLoading: "UnstuckLoading",
  ApplyBuff: "ApplyBuff"
};

const MODULE_DEPENDENCIES = {
  ue: require("ue"),
  ModUtils: require("../../Utils/ModUtils"),
  puerts: require("puerts"),
  ModManager: require("../../ModManager"),
  ModMethod: require("../ModMethod"),
  KillAura: require("../KillAura"),
  TreasureTp: require("../../Component/TreasureTp"),
  ModMenu: require("../../../ModMenu"),
  Logger: require("../../Utils/Logger"),
  MobVacuum: require("../MobVacuum"),
  KeyDefine: require("./KeyDefine"),
  CustomTp: require("../CustomTp"),
  UI: require("../../Utils/UI"),
  BuffMethod: require("../buffMethod"),
  EntityManager: require("../EntityManager"),
  ConfigManager: require("../../Utils/ConfigManager"),
  Flight: require("../Flight"),
  InputKeyController: require("../../Utils/InputKeyController")
};

class KeybindManager {
  static keybinds = KEYBINDS;
  static keyMenu = null;
  static keysState = {};
  static keyHoldInterval = null;
  static killEntityTimer = null;
  static MobVacuumTimer = null;
  static isKeybindLoaded = false;
  static loadKeybindTimer = null;
  static configFileName = "keybind_config.json";

  constructor() {
    setTimeout(() => this.initKeyBind(), 1000);
  }

  initKeyBind() {
    try {
      MODULE_DEPENDENCIES.Logger.log("Initializing keybind...");
      
      if (KeybindManager.isKeybindLoaded) {
        Object.values(KeybindManager.keybinds).forEach((bind, index) => {
          if (bind.key) {
            MODULE_DEPENDENCIES.InputKeyController.addKey(
              Object.keys(KeybindManager.keybinds)[index], 
              bind.key
            );
          }
        });
        MODULE_DEPENDENCIES.Logger.log("Keybind registered!");
      } else {
        setTimeout(() => {
          this.initKeyBind();
          MODULE_DEPENDENCIES.Logger.log("Keybind not ready, retrying...", "error");
        }, 2500);
      }
    } catch (error) {
      MODULE_DEPENDENCIES.Logger.log(error, "error");
    }
  }

  static updateKeybind(actionName, newKey, keyName) {
    if (!actionName) return;
    
    const bind = this.keybinds[actionName];
    if (!bind) {
      MODULE_DEPENDENCIES.Logger.log(
        `Keybind for action "${actionName}" not found.`, 
        "error"
      );
      return;
    }
    
    // Clear existing key
    if (!newKey || newKey === "") {
      bind.key = null;
      this.setSelectedKey(keyName, null);
      return;
    }
    
    // Check for key conflict
    const conflict = Object.entries(this.keybinds).find(
      ([name, config]) => config.key === newKey && name !== actionName
    );
    
    if (conflict) {
      const [conflictName, conflictBind] = conflict;
      conflictBind.key = null;
      this.setSelectedKey(
        KEY_NAME_MAP[conflictName], 
        null
      );
    }
    
    bind.key = newKey;
    MODULE_DEPENDENCIES.InputKeyController.addKey(actionName, newKey);
  }

  static updateType(actionName, newType) {
    const bind = this.keybinds[actionName];
    this.updateDefaultSettings(actionName, newType);
    
    if (!bind) {
      MODULE_DEPENDENCIES.Logger.log(
        `Keybind for ${actionName} not found`, 
        "error"
      );
      return;
    }
    
    bind.type = newType;
  }

  static triggerKey({ actionName, func, onToggle, onHold, onPress }) {
    try {
      const bind = this.keybinds[actionName];
      if (!bind || !bind.key) return;
      
      let isActive = false;
      
      switch (bind.type.toLowerCase()) {
        case "press":
          isActive = MODULE_DEPENDENCIES.InputKeyController.isKeyDown(bind.key);
          if (isActive && typeof onPress === "function") onPress();
          break;
          
        case "hold":
          const wasHolding = this.keysState[actionName] || false;
          isActive = MODULE_DEPENDENCIES.InputKeyController.isKeyHold(bind.key, 100);
          
          if (typeof onHold === "function") {
            if (isActive && !wasHolding) {
              this.keyHoldInterval = setInterval(() => {
                onHold({ isHolding: true });
              }, 100);
            } else if (!isActive && wasHolding) {
              onHold({ isHolding: false });
              clearInterval(this.keyHoldInterval);
              this.keyHoldInterval = null;
            }
          }
          
          this.keysState = { ...this.keysState, [actionName]: isActive };
          break;
          
        case "toggle":
          isActive = MODULE_DEPENDENCIES.InputKeyController.isMyKeyUp(bind.key);
          if (isActive && typeof onToggle === "function") onToggle();
          break;
      }
      
      if (func && typeof func === "function") func();
    } catch (error) {
      MODULE_DEPENDENCIES.Logger.log(`Trigger Error ${error}`, "error");
    }
  }

  static toggleModSetting(settingName) {
    const currentValue = MODULE_DEPENDENCIES.ModManager.settings[settingName];
    MODULE_DEPENDENCIES.ModManager.settings[settingName] = !currentValue;
  }

  static listenKeybinds() {
  }

  static capitalize(str) { /* ... */ }
  static updateKeyStatus() { /* ... */ }
  static listenKeybindChanges() { /* ... */ }
  static isAllowToActivate(action) { /* ... */ }
  static initKeyMenu() { /* ... */ }
  static listenActionTypeChanges() { /* ... */ }
  static setSelectedKey(keyName, key) { /* ... */ }
  static listenClearOptions() { /* ... */ }
  static configFileExists() { /* ... */ }
  static saveConfig() { /* ... */ }
  static loadConfig() { /* ... */ }
}

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeybindManager;