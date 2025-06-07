'use strict';

const BuffManager = {
    __esModule: true
};
Object.defineProperty(exports, "__esModule", BuffManager);
exports.default = undefined;

const puerts = require("puerts");
const Utils = require("../Utils/ModUtils");
const ue = require("ue");
const FormationDataController = require("../../Module/Abilities/FormationDataController");
const CharacterAttributeTypes = require("../../NewWorld/Character/Common/Component/Abilities/CharacterAttributeTypes");
const Global = require("../../Global");
const Logger = require("../Utils/Logger");
const EntityManager = require("./EntityManager");
const ConfigManager = require("../Utils/ConfigManager");
const ModUtils = require("../Utils/ModUtils");
const ModelManager = require("../ModelManager");
const dungeonFilter = require("./dungeonFilter");
const ListComponent = require("../ListComponent");
const Buff = require("./Data/Buff");
const UI = require("../Utils/UI");
const ModManager = require("../ModManager");

let lastPlayerID;
let sprintPlayers = [];
const buffConfig = {
    GodMode: [3094, 80012049],
    OneHitKill: 900170000322,
    InfiniteIntroOutro: [83011202, 83011302],
    Echo: 83010902,
    InfiniteForte: 1102012003,
    MaterialAnim: [1603600104, 1104060011, 1505402002],
    Atk: 25,
    Atk600: 672010102,
    Cr: 26,
    Cdmg: 672010105,
    InfiniteStamina: 21,
    InfiniteUltimate: 23,
    IntroOutro: 621030211,
    IllusiveSprint: [16, 621310219, 621310220]
};

class BuffHandler {
    static MaxResonanceI = 204;
    static buffs = Buff;
    static isInDungeon = false;
    static buffManager = null;
    static sprintTimer = null;
    static buffList = buffConfig;
    static buffManager = {
        superBuff: {
            active: false,
            teamList: []
        },
        criticalHit: {
            isBuffActive: false,
            charactersActive: new Map()
        },
        appliedBuffStates: {},
        selectedBuffOption: null
    };

    static MaxResonanceChain() {
        if (!ModManager.ModManager.settings.ResonanceChainGroup) return;
        
        const player = EntityManager.EntityManager.GetPlayerBase();
        if (!player) return;

        EntityManager.EntityManager.GetAllRoles().forEach(role => {
            const resonance = role.GetResonanceComponent();
            if (resonance && resonance.GetResonanceChainMaxFactor() < 6) {
                resonance.SetResonanceChainGroupMaxFactor(6);
            }
        });
    }

    static AddMultiBuffRequest(enable = false, buffs) {
        if (enable) {
            buffs.forEach(buffID => {
                if (!this.hasBuff(buffID)) this.AddBuffRequest(buffID);
            });
        } else {
            buffs.forEach(buffID => {
                if (this.hasBuff(buffID)) this.RemoveBuff(buffID);
            });
        }
    }

    static ChangeBuff(a) {
        try {
            if (!a) throw new Error("buff undefined");
            if (this.selectedBuffOption?.removeable) {
                ModUtils.ModUtils.Log("Removing buff: " + this.selectedBuffOption.name);
                this.RemoveBuff(this.selectedBuffOption.id);
                this.selectedBuffOption = null;
            }
            this.selectedBuffOption = a;
            ModUtils.ModUtils.Log("Adding new buff: " + this.selectedBuffOption.name);
            this.AddBuffRequest(a.id);
        } catch (error) {
            ModUtils.ModUtils.Log(error, "error");
        }
    }

    static hasBuff(buffID) {
        try {
            const team = ModelManager.ModelManager.SceneTeamModel.CurrentTeam;
            if (!team) return false;
            const baseBuff = team.Entity.GetComponent(ListComponent.BaseBuff);
            return baseBuff?.HasBuff(buffID) || baseBuff?.GetBuffById(buffID);
        } catch (error) {
            Logger.logger.Error(error);
        }
        return false;
    }

    static AddMultiStackRequest(buffs, count = 0) {
        if (count === 0 || buffs.length === 0) return;
        for (let i = 0; i < count; i++) {
            buffs.forEach(buffID => this.AddBuffRequest(buffID));
        }
    }

    static AddBuffRequest(buffID, options = {}) {
        try {
            const entity = ModelManager.ModelManager.CurrentModel.GetCurrentEntity();
            const baseCharacter = entity.Entity.GetComponent(ListComponent.BaseCharacter);
            if (!baseCharacter) return;
            baseCharacter.AddBuff(buffID, {
                InstigatorId: baseCharacter.GetRuntimeID(),
                Reason: "Mod Request",
                ...options
            });
        } catch (error) {}
    }

    static RemoveBuff(buffID) {
        const entity = ModelManager.ModelManager.CurrentModel.GetCurrentEntity();
        const buffComp = entity.Entity.GetComponent(ListComponent.BuffComponent);
        if (!buffComp) return;
        buffComp.RemoveBuff(buffID, -1, "");
    }

    static RemoveBuffByEntity(buffID, entity) {
        const buffComp = entity.GetComponent(ListComponent.BuffComponent);
        if (!buffComp) return;
        buffComp.RemoveBuff(buffID, -1, "");
    }

    static handleBuffRequest(buffID, enable = false, checkActive = false) {
        try {
            const isActive = this.hasBuff(buffID);
            const state = this.buffManager.appliedBuffStates[buffID];
            
            if (enable) {
                if (state && checkActive && isActive) return;
                this.AddBuffRequest(buffID);
                this.buffManager.appliedBuffStates[buffID] = true;
            } else {
                if (isActive && state) this.RemoveBuff(buffID);
                this.buffManager.appliedBuffStates[buffID] = false;
            }
        } catch (error) {}
    }

    static handleMultiBuffRequest(buffIDs, enable = false, checkActive = false) {
        try {
            if (!Array.isArray(buffIDs)) return;
            buffIDs.forEach(buffID => {
                const isActive = this.hasBuff(buffID);
                const state = this.buffManager.appliedBuffStates[buffID];
                
                if (enable) {
                    if (state && checkActive && isActive) return;
                    this.AddBuffRequest(buffID);
                    this.buffManager.appliedBuffStates[buffID] = true;
                } else {
                    if (isActive && state) this.RemoveBuff(buffID);
                    this.buffManager.appliedBuffStates[buffID] = false;
                }
            });
        } catch (error) {}
    }

    static AddBuffRequestByEntity(buffID, entity) {
        try {
            const buffComp = entity.GetComponent(ListComponent.BuffComponent);
            if (!buffComp) return;
            buffComp.AddBuff(buffID, {
                InstigatorId: buffComp.GetRuntimeID(),
                Reason: "Mod Request"
            });
        } catch (error) {}
    }

    static HanldeBuffRequestByEntity(buffID, enable = false, checkActive = false, entity = null) {
        if (!entity) return;
        try {
            if (checkActive && enable && this.hasBuff(buffID)) return;
            if (enable) {
                this.AddBuffRequestByEntity(buffID, entity);
            } else if (!enable && this.hasBuff(buffID)) {
                this.RemoveBuffByEntity(buffID, entity);
            }
        } catch (error) {}
    }

    static sprintBuff() {
        const currentEntity = ModelManager.ModelManager.CurrentModel.GetCurrentEntity();
        let playerID = Global.Global.PlayerController?.GetEntityNetID();
        
        if (!playerID || !currentEntity.Entity) return;
        
        let movement = currentEntity.Entity.GetComponent(ListComponent.CharacterMovementComponent);
        const refreshSprint = () => {
            if (!ModManager.settings.IllusiveSprint || !movement.HasTag(917667812)) return;
            
            if (BuffHandler.sprintTimer) {
                clearTimeout(BuffHandler.sprintTimer);
                BuffHandler.sprintTimer = null;
            }
            
            let duration = 3400;
            if (ModManager.settings.WorldSpeed) duration /= ModManager.settings.WorldSpeed;
            
            BuffHandler.sprintTimer = setTimeout(() => {
                if (!this.hasBuff(640003016)) {
                    this.AddBuffRequest(640003016, { Duration: 60 });
                }
                puerts.Log("Refreshing sprint buff");
                refreshSprint();
            }, duration);
        };
        
        if (lastPlayerID !== playerID && !sprintPlayers.includes(playerID)) {
            lastPlayerID = playerID;
            sprintPlayers.push(playerID);
            movement.ListenForTagAddOrRemove(917667812, refreshSprint);
        }
        
        if (ModManager.settings.IllusiveSprint) {
            if (!movement.HasTag(917667812) && !movement.HasTag(-1935387692)) {
                this.AddBuffRequest(640003017, { value: 0.01 });
            }
        }
    }

    static superBuff() {
        try {
            const roles = EntityManager.EntityManager.GetAllRoles();
            if (!roles || roles.length === 0) return;
            
            const resetSuperBuff = () => {
                roles.forEach(role => {
                    this.RemoveBuffByEntity(this.buffList.Atk600, role.Entity);
                    this.RemoveBuffByEntity(this.buffList.Cr, role.Entity);
                    this.RemoveBuffByEntity(this.buffList.Cdmg, role.Entity);
                });
                this.buffManager.superBuff.active = false;
                this.buffManager.superBuff.teamList = [];
            };
            
            if (!ModManager.settings.SuperBuff) {
                if (this.buffManager.superBuff.active) resetSuperBuff();
                return;
            }
            
            if (this.buffManager.superBuff.teamList.length > 0) {
                const currentTeam = new Set(roles.map(r => r.GetRoleModel().RoleTag));
                const savedTeam = new Set(this.buffManager.superBuff.teamList);
                
                if (dungeonFilter.DungeonFilter.IsInFight()) {
                    if (!currentTeam.equals(savedTeam)) return resetSuperBuff();
                } else if (!currentTeam.equals(savedTeam)) {
                    return resetSuperBuff();
                }
            }
            
            if (!this.buffManager.superBuff.active) {
                this.AddBuffRequest(this.buffList.Cr);
                for (let i = 0; i < 5; i++) this.AddBuffRequest(this.buffList.Atk600);
                for (let i = 0; i < 10; i++) this.AddBuffRequest(this.buffList.Cdmg);
                
                this.buffManager.superBuff.active = true;
                roles.forEach(role => {
                    this.buffManager.superBuff.teamList.push(role.GetRoleModel().RoleTag);
                });
            }
        } catch (error) {
            ModUtils.ModUtils.Log(error, "error");
        }
    }

    static CritialHit() {
        try {
            const roles = EntityManager.EntityManager.GetAllRoles();
            if (!roles) return;
            
            const isCritActive = this.buffManager.appliedBuffStates[this.buffList.Cr];
            const hasCritBuff = roles.some(role => 
                role.Entity.GetComponent(ListComponent.BuffComponent)?.HasBuff(this.buffList.Cr)
            );
            
            if (ModManager.settings.AlwaysCrit && !hasCritBuff) {
                this.AddBuffRequest(this.buffList.Cr);
                this.buffManager.appliedBuffStates[this.buffList.Cr] = true;
            } else if (!ModManager.settings.AlwaysCrit && isCritActive) {
                roles.forEach(role => {
                    if (role.Entity.GetComponent(ListComponent.BuffComponent)?.HasBuff(this.buffList.Cr)) {
                        this.RemoveBuffByEntity(this.buffList.Cr, role.Entity);
                    }
                });
                this.buffManager.appliedBuffStates[this.buffList.Cr] = false;
            }
        } catch (error) {}
    }

    static MaterialAnim() {
        try {
            if (ModUtils.ModUtils.IsInFight()) {
                if (EntityManager.EntityManager.GetPlayerBase()?.GetEntityNetID().includes("Sanhua")) {
                    this.AddBuffRequest(this.buffList.InfiniteForte, ModManager.settings.InfiniteForte);
                }
                this.handleMultiBuffRequest(this.buffs.MaterialAnim, ModManager.settings.MaterialAnim);
            }
        } catch (error) {}
    }

    static InfiniteIntroOutro() {
        try {
            if (ModManager.settings.IntroOutro && ModUtils.ModUtils.IsInFight()) {
                this.AddBuffRequest(this.buffList.IntroOutro);
            }
        } catch (error) {}
    }

    static ApplyBuffs() {
        this.handleMultiBuffRequest(this.buffs.GodMode, ModManager.settings.GodMode, true);
        this.handleBuffRequest(this.buffList.OneHitKill, ModManager.settings.OneHitKill, true);
        this.AddMultiBuffRequest(ModManager.settings.InfiniteIntroOutro, this.buffs.InfiniteIntroOutro);
        this.handleBuffRequest(this.buffList.Echo, ModManager.settings.Echo, true);
        this.handleBuffRequest(this.buffs.InfiniteStamina, ModManager.settings.InfiniteStamina, true);
        this.handleBuffRequest(this.buffList.InfiniteUltimate, ModManager.settings.InfiniteUltimate, true);
        this.handleMultiBuffRequest(this.buffs.IllusiveSprint, ModManager.settings.IllusiveSprint);
        this.MaterialAnim();
        this.MaxResonanceChain();
        this.InfiniteIntroOutro();
        this.superBuff();
    }

    static applyBuff(buff) {
        if (Array.isArray(buff.id)) {
            if (buff.stacks) {
                BuffHandler.AddMultiStackRequest(buff.id, buff.stacks);
            } else {
                buff.id.forEach(id => BuffHandler.AddBuffRequest(id));
            }
        } else if (buff.stacks) {
            BuffHandler.AddMultiStackRequest([buff.id], buff.stacks);
        } else {
            BuffHandler.AddBuffRequest(buff.id);
        }
    }

    static GetConfigPath() {
        return ue.KuroStatic.PathLibrary.Combine(ConfigManager.ConfigManager.GetConfigDir(), "Buff.json");
    }

    static SaveConfig() {
        ue.JsonLibrary.SaveString(JSON.stringify(this.buffs, null, 2), ConfigManager.ConfigManager.LoadConfigPath());
    }

    static LoadConfig() {
        let configData = ConfigManager.ConfigManager.LoadConfig("Buff.json");
        if (!configData || !configData[0]) {
            puerts.Log("Config file is empty or does not exist. Loading default config.");
            BuffHandler.SaveConfig();
            return;
        }
        try {
            configData = JSON.parse(configData);
            if (!Array.isArray(configData)) {
                throw new Error("Invalid format: Config must be an array.");
            }
            this.buffs = configData;
            BuffHandler.SaveConfig();
        } catch (error) {
            UI.UI.ShowTip("Failed to parse config: " + error);
            puerts.console.error("Failed to parse config:", error);
        }
    }
}

exports.buffMethod = BuffHandler;