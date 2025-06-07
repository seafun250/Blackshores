'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreasureTeleport = undefined;

const puerts = require("puerts");
const ue = require("ue");
const GlobalData = require("../../GlobalData");
const ModUtils = require("../Utils/ModUtils");
const Logger = require("../Utils/Logger");
const ModMenuDefine = require("../ModMenuDefine");
const ListComponent = require("../ListComponent");
const CustomTp = require("../ModFuncs/CustomTp");
const ModMenu = require("../../ModMenu");
const ModManager = require("../ModManager");
const KeybindController = require("../ModFuncs/Keybind/KeybindController");
const EntityManager = require("../ModFuncs/EntityManager");
const ResourceSystem = require("../../../Core/Resource/ResourceSystem");

class TreasureTeleport {
  constructor() {
    setTimeout(() => {
      this.init();
    }, 1500);
  }

  init() {
    try {
      if (!TreasureTeleport.isWidgetLoaded) {
        TreasureTeleport.TreasureWidget = ue.UMGManager.CreateWidget(
          GlobalData.GlobalData.TreasureClass,
          ResourceSystem.ResourceSystem.Load(
            "/Game/Aki/UMG/TreasureTeleportChest_C", 
            ue.Class
          )
        );
        TreasureTeleport.isWidgetLoaded = true;
      }

      if (TreasureTeleport.isWidgetLoaded) {
        TreasureTeleport.TreasureWidget.AddToViewport(4);
        
        if (ModManager.ModManager.settings.TreasureTeleport) {
          TreasureTeleport.TreasureWidget.SetVisibility(
            ModMenuDefine.ModMenuDefine.SelfHitTest
          );
        } else {
          TreasureTeleport.TreasureWidget.SetVisibility(
            ModMenuDefine.ModMenuDefine.Hidden
          );
        }

        TreasureTeleport.TreasureWidget.ChestNameText.SetText("Empty");
        TreasureTeleport.TreasureWidget.ChestDistanceText.SetText("Empty");
        
        let yellowColor = new ue.LinearColor(1, 1, 0, 1);
        let slateYellow = new ue.SlateColor(yellowColor);
        
        TreasureTeleport.TreasureWidget.ChestNameText.SetColorAndOpacity(slateYellow);
        TreasureTeleport.TreasureWidget.ChestDistanceText.SetColorAndOpacity(slateYellow);
        
        TreasureTeleport.startUpdating();
        TreasureTeleport.initActionTeleport();
        Logger.Logger.Success("Treasure widget rendered!");
      }
    } catch (error) {
      ModUtils.Log.Error(error, "error");
    }
  }

  static TreasureWidget = null;
  static isWidgetLoaded = false;
  static position = { x: null, y: null, z: null };

  static startUpdating() {
    setInterval(() => {
      this.updatePositionTreasure();
    }, 1500);
  }

  static findNearestTreasure(entities) {
    try {
      let nearestPosition = null;
      let nearestName = null;
      let minDistance = Infinity;

      for (let entity of entities) {
        if (!entity || !entity.Entity) continue;
        
        const position = EntityManager.EntityManager.GetEntityLocation(entity.Entity);
        if (!position) continue;
        
        let blueprintName = entity.Component.GetComponent(ListComponent.ListComponent.Name).GetBlueprintName();
        let distance = EntityManager.EntityManager.GetDistanceFromPlayer(blueprintName);
        
        if (distance < minDistance) {
          minDistance = distance;
          nearestPosition = {
            X: Math.floor(position.X),
            Y: Math.floor(position.Y) + 200,
            Z: Math.floor(position.Z) + 200
          };
          nearestName = EntityManager.EntityManager.GetComponentType2(entity);
        }
      }

      if (minDistance === Infinity) {
        Logger.Logger.Error("No valid entities found near player.");
        return {
          position: { X: 0, Y: 0, Z: 0 },
          name: "Unknown",
          range: 0
        };
      }

      return {
        position: nearestPosition,
        name: nearestName,
        range: minDistance
      };
    } catch (error) {
      Logger.Logger.Error(error);
      return {
        position: { X: 0, Y: 0, Z: 0 },
        name: "Unknown",
        range: 0
      };
    }
  }

  static updatePositionTreasure() {
    try {
      const entities = EntityManager.EntityManager.GetAllEntities();
      
      if (!entities || entities.length === 0) {
        return this.setEmptyTreasure();
      }

      const filtered = entities.filter(entity => 
        entity.Component && 
        EntityManager.EntityManager.isWithinPlaceDistance(300, entity)
      );
      
      if (filtered.length === 0) {
        return this.setEmptyTreasure();
      }

      const nearest = this.findNearestTreasure(filtered);
      if (!nearest) {
        return this.setEmptyTreasure();
      }

      this.setInformationTreasure({
        name: nearest.name,
        range: nearest.range,
        position: nearest.position
      });
    } catch (error) {
      Logger.Logger.Error(error);
    }
  }

  static setEmptyTreasure() {
    try {
      TreasureTeleport.position = { x: 0, y: 0, z: 0 };
      TreasureTeleport.TreasureWidget.ChestNameText.SetText("Empty");
      TreasureTeleport.TreasureWidget.ChestDistanceText.SetText("Empty");
      
      let yellowColor = new ue.LinearColor(1, 1, 0, 1);
      let slateYellow = new ue.SlateColor(yellowColor);
      
      TreasureTeleport.TreasureWidget.ChestNameText.SetColorAndOpacity(slateYellow);
      TreasureTeleport.TreasureWidget.ChestDistanceText.SetColorAndOpacity(slateYellow);
    } catch (error) {
      Logger.Logger.Error(error);
    }
  }

  static setInformationTreasure({ name, range, position }) {
    try {
      this.TreasureWidget.ChestNameText.SetText(name);
      this.TreasureWidget.ChestDistanceText.SetText(range + "m");
      
      TreasureTeleport.position = {
        x: position.X,
        y: position.Y,
        z: position.Z
      };
      
      let greenColor = new ue.LinearColor(0, 1, 0, 1);
      let slateGreen = new ue.SlateColor(greenColor);
      
      this.TreasureWidget.ChestNameText.SetColorAndOpacity(slateGreen);
      this.TreasureWidget.ChestDistanceText.SetColorAndOpacity(slateGreen);
    } catch (error) {
      Logger.Logger.Error(error);
    }
  }

  static initActionTeleport() {
    TreasureTeleport.TreasureWidget.TeleportChestBtn.OnClicked.Add(() => {
      ModMenu.ModMenu.Close();
      this.teleportToTreasure();
    });
  }

  static teleportToTreasure() {
    if (
      TreasureTeleport.position.x !== 0 && 
      TreasureTeleport.position.y !== 0 && 
      TreasureTeleport.position.z !== 0
    ) {
      CustomTp.CustomTp.TeleportTo(TreasureTeleport.position);
    }
  }
}

exports.TreasureTeleport = TreasureTeleport;