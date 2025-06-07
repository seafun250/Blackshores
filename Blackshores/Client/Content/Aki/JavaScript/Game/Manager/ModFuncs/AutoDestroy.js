'use strict';

const _0x4f3b = [
  "DGBO_Norma", "ThrowDamag", "eChangeReq", "roy", "ModMethod", "Gameplay_E", 
  "branch2.0_", "Quest012", "Collect504", "Collect501", "ger", "__esModule", 
  "AutoDestro", "Collect505", "Collect506", "isNeedDest", "Quest008", "SceneObj3", 
  "SceneObj1", "SceneObj00", "Collect503", "settings", "SceneObj2", "ModManager", 
  "EntityMana", "SceneObj01", "uest", "Gameplay_C", "branch2.1_", "oundDesign", 
  "Gameplay00", "Gameplay53", "GetBluepri", "Entity", "FLDJK_Box_", "6366uhhAja",
];

const puerts = require("puerts");
const ue = require("ue");
const Info = require("../../../Core/Common/Info");
const Log = require("../../../Core/Common/Log");
const ModManager = require("../ModManager");
const ModMethod = require("./ModMethod");
const EntityManager = require("./EntityManager");

const entityTypes = [
  "Gameplay003", "ThrowDamage", "Collect502", "Collect504", "Collect501", 
  "Gameplay535", "Gameplay536", "Gameplay537", "Gameplay538", "SceneObj003", 
  "SceneObj001", "Gameplay_CXS_4", "Gameplay_CXS_14", "SceneObj015", 
  "SceneObj016", "branch2.0_Entity", "Collect507", "Gameplay_SoundDesign2", 
  "SceneObj_Rock_Middle", "SceneObj005", "SceneObj011", "SceneObj012", 
  "SceneObj018", "SceneObj2", "branch2.0_Gameplay_C", 
  "Gameplay_Environment01", "Gameplay_Environment02", "Quest008", 
  "ModManager", "Quest009", "Quest010", "Collect503"
];

class AutoDestroyManager extends EntityManager.EntityManager {
  static ["isNeedDestroyEntityType"](entityType) {
    return entityTypes.includes(entityType);
  }

  static ["AutoDestroy"](entity) {
    if (ModManager.ModManager.settings.AutoDestroy && this.isNeedDestroyEntityType(entity)) {
      ModMethod.ModMethod["ThrowDamageChangeRequest"](entity["EntityId"], 10, 0x5f9b1ce9n);
    }
  }
}

exports["__esModule"] = { value: true };
exports["AutoDestroy"] = AutoDestroyManager;