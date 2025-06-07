'use strict';

const puerts = require("puerts");
const ue = require("ue");
const ModManager = require("../ModManager");
const ModMethod = require("./ModMethod");
const UIUtils = require("../Utils/UI");
const ModelManager = require("../ModelManager");
const LevelController = require("../../LevelGamePlay/LevelGamePlayController");
const Logger = require("../Utils/Logger");
const EventDefine = require("../../Common/Event/EventDefine");
const EventSystem = require("../../Common/Event/EventSystem");
const ListComponent = require("../ListComponent");
const EntityManager = require("./EntityManager");

const targetEntityTypes = ["Gameplay059"];
const lifePointEntityTypes = ["LifePointModel"];

class AutoSolveManager extends EntityManager.EntityManager {
    static isEntityTypeInList(entity, typeList) {
        const blueprintType = this.GetBlueprintType2(entity);
        return typeList.includes(blueprintType);
    }

    static async AutoSolve(entity) {
        if (ModManager.ModManager.settings.AutoSolve) {
            this.AutoSolveEntity(entity);
        }
    }

    static AutoSolveSignalDevice(entity) {
        if (this.isEntityTypeInList(entity, targetEntityTypes)) {
            LevelController.LevelGamePlayController.GetInstance().ShootTargetEntity(entity.Entity.Id, (success) => {
                if (success && entity.Entity?.Component) {
                    EventSystem.EventSystem.GetInstance().EmitWithTarget(
                        entity.Entity, 
                        EventDefine.EEventName.UpdateSceneObject
                    );
                }
            });
        }
    }

    static AutoSolveHitGear4(entity) {
        if (this.GetBlueprintType2(entity) === "HitGear4") {
            ModMethod.ModMethod.ThrowDamageChangeRequest(
                entity.Entity, 
                3, 
                0xc846051n
            );
        }
    }

    static AutoSolveButterfly(entity) {
        if (!ModManager.ModManager.settings.AutoSolve) {
            return;
        }
        if (!this.isEntityTypeInList(entity, lifePointEntityTypes)) {
            return;
        }
        
        const component = entity.Entity.GetComponent(ListComponent.Component.LifePointModelComponent);
        if (!component) {
            return;
        }
        
        try {
            const maxValue = 1000000;
            component.LifePointChange(maxValue);
        } catch (error) {}
    }

    static isSignalDeviceCompleted = false;
    static AutoSolveSignalDeviceComplete() {
        try {
            if (UIUtils.UI.IsViewOpen("SignalDeviceView")) {
                if (!this.isSignalDeviceCompleted) {
                    ModelManager.ModelManager.SignalDeviceModel.EDe();
                    this.isSignalDeviceCompleted = true;
                    UIUtils.UI.ShowTip("Solved!");
                }
            } else {
                this.isSignalDeviceCompleted = false;
            }
        } catch (error) {}
    }

    static autoFishingInterval = null;
    static async AutoFishing() {
        const clearInterval = () => {
            if (this.autoFishingInterval) {
                clearInterval(this.autoFishingInterval);
                this.autoFishingInterval = null;
            }
        };
        
        const fishingView = UIUtils.UI.GetViewByName("FishingQteView");
        const gameplayView = UIUtils.UI.GetViewByName("GameplayView");
        
        if (!ModManager.ModManager.settings.AutoPuzzle) {
            clearInterval();
            return;
        }
        
        if (fishingView && gameplayView) {
            if (!this.autoFishingInterval) {
                this.autoFishingInterval = setInterval(() => {
                    if (!gameplayView.ViewModel.IsGamePause() && 
                        !gameplayView.ViewModel.IsGameEnd()) {
                        ModelManager.ModelManager.FishingQteModel.OnPerfectOperation();
                    }
                }, 250);
            }
        } else {
            clearInterval();
        }
    }

    static isLifePointSolved = false;
    static AutoSolveLifePoint() {
        try {
            if (ModelManager.ModelManager.LifePointModel.Config && 
                ModelManager.ModelManager.LifePointModel.Config.Type === "LifePoint" && 
                ModelManager.ModelManager.LifePointModel.Config.IsDataInit && 
                UIUtils.UI.IsViewOpen("LifePointView")) {
                if (!this.isLifePointSolved) {
                    UIUtils.UI.SetGuideRate("LifePointView", 1).Show();
                    this.isLifePointSolved = true;
                    UIUtils.UI.ShowTip("Solved!");
                }
            } else {
                this.isLifePointSolved = false;
            }
        } catch (error) {}
    }

    static AutoSolve() {
        try {
            this.AutoSolveSignalDeviceComplete();
            this.AutoSolveLifePoint();
        } catch (error) {
            Logger.Logger.Error(error);
        }
    }
}

Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSolve = AutoSolveManager;