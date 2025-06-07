'use strict';

const r = t;
function s() {
  const b = ["GetConfigT", "ModelManag", "floor", "del", "GetEntityL", "BlackBoard", "ctorCompon", "1BerHvc", "177333YifDVx", "Proto_Play", "Components", "KillBehavi", "2172KwwmNN", "asket", "Entity", "EntityFilt", "CheckTarge", "ger", "Collect", "Monster", "ctor", "eId", "filter", "Player", "eprintType", "defineProp", "RoleDriveV", "nster", "SceneItem", "SetTimeDil", "isPlayer", "EntityIds", "BattleUiMo", "Component", "gXr", "tyTreasure", "branch2.0_", "GetAllEnti", "uest", "GetPlayerE", "SceneTeamM", "Weapon", "tBattleAtt", "map", "rLocation", "sure", "push", "Getdistanc", "wake", "ent", "FriendlyMo", "VisionItem", "Kill", "BaseCharac", "kks", "isFilter", "odel", "52281wJOmDp", "516rxuOEQ", "error", "nal", "ity", "33530zywqRM", "unknownBlu", "rTree", "GetPlayerA", "GetPositio", "GetPlayerB", "16617hCRewz", "Actor", "Animal", "Gameplay", "isAnimal", "Get", "5215QiyGpj", "isWeapon", "Aki", "extByKey", "Protocol", "ation", "Condition", "Proto_Mons", "IsMonsterQ", "SetPlayerS", "Proto_Anim", "GetCurrent", "rName", "value", "2716206JMjtVK", "isSceneObj", "ter", "isVision", "tyByDistan", "Option", "806672AtEvTS", "ntType3", "CharacterA", "BaseActor", "Vision", "7dPOopp", "orwardVect", "ntity", "GetAllMiss", "isInRange", "Npc", "ype", "NodeId", "Proto_Npc", "GetBaseInf", "luePrint", "KismetMath", "Treasure", "ities", "GetNodeCon", "isMonster", "EntitySyst", "VehicleInf", "GetCurrRol", "Type", "GetTeamEnt", "EntityMana", "TidName", "K2_GetActo", "ion", "eFromPlaye", "ionViewDat", "GetCompone", "name", "Teleport", "GetEntityD", "GetVehicle", "CachedOwne", "startsWith", "SimpleNPC", "dByEntity", "ntType2", "ties", "Proto_Cust", "isCollecti", "GetEntityT", "ayerDistan", "constructo", "eItem", "isWithinPl", "1342injGvO", "GetAllNode", "GetPlayerP", "GeneralLog", "ata", "Library", "Proto_Scen", "icTreeMode", "CharRender", "ribute", "PasserbyNP", "GetBluepri", "isTeleport", "ModUtils", "wDe", "ActorInter", "Gameplay11", "tance", "464iRAueD", "erty", "GetBehavio", "ehicle", "VehicleEnt", "Global", "PbDataId", "CreatureMo", "ActorLocat", "ntType", "GetPlayerF", "includes", "Vector_Dis", "Log", "GetActorFo", "isQuest"];
  s = function () {
    return b;
  };
  return s();
}
function t(b, a) {
  const d = s();
  t = function (e, f) {
    e = e - 362;
    let b = d[e];
    return b;
  };
  return t(b, a);
}
(function (c, f) {
  const b = t;
  const d = c();
  while (true) {
    try {
      const c = -parseInt(b(427)) / 1 * (-parseInt(b("0x202")) / 2) + parseInt(b(488)) / 3 + parseInt(b(432)) / 4 * (parseInt(b("0x1ee")) / 5) + -parseInt(b("0x1fc")) / 6 * (parseInt(b(519)) / 7) + -parseInt(b("0x194")) / 8 * (parseInt(b("0x1dd")) / 9) + parseInt(b(482)) / 10 * (-parseInt(b("0x182")) / 11) + parseInt(b("0x1de")) / 12 * (parseInt(b("0x1ac")) / 13);
      if (c === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(s, 363098);
const a = {
  [r(507)]: true
};
Object[r(445) + r("0x195")](exports, "__esModule", a);
exports[r(362) + "ger"] = undefined;
const b = require("puerts");
const e = require("ue");
const c = require("../../../Core/Common/Info");
const d = require("../../../Core/Common/Log");
const f = require("../../Global");
const g = require("../Utils/ModUtils");
const h = require("../../Manager/ModelManager");
const i = require("../../../Core/Define/Net/Protocol");
const j = require("../ListComponent");
const k = require("../../Common/PublicUtil");
const l = require("./EntityFilter");
const m = require("../../../Core/Entity/EntitySystem");
class n {
  static [r("0x1c9") + r("0x1c7")]() {
    const c = r;
    try {
      const b = this[c("0x1c9") + c(378)]() || [];
      return b[c("0x1ba")](b => l.EntityFilter["isneedTrea" + c("0x1d1")](this[c(397) + c("0x179")](b)));
    } catch (b) {
      return [];
    }
  }
  static [r("0x1c9") + r("0x200") + "ce"](d = 50) {
    const b = r;
    try {
      const c = this[b(457) + b(378)]() || [];
      return c[b(442)](c => n[b(385) + b(382) + "ce"](d, c));
    } catch (b) {
      return [];
    }
  }
  static [r(424) + "ocation"](d) {
    const b = r;
    try {
      const c = d[b(368) + "nt"](j.Component[b(517)]);
      return c[b(412) + b(365)];
    } catch (b) {
      return null;
    }
  }
  static GetCurrentEntity() {
    const a = r;
    return h[a(421) + "er"][a("0x1cc") + "odel"][a("0x1f9") + "Entity"];
  }
  static GetAllEntities() {
    const a = r;
    return h[a(421) + "er"][a("0x19b") + "del"][a(457) + a(378)]();
  }
  static [r("0x174") + r(434)]() {
    const a = r;
    try {
      return this["GetPlayerE" + a(521)]()[a(368) + "nt"](j[a("0x1c5")][a("0x1be") + a(407)])[a(536) + "o"][a("0x198") + a("0x1e1")];
    } catch (b) {
      return false;
    }
  }
  static GetRoleModel() {
    const a = r;
    return h[a(421) + "er"].RoleModel;
  }
  static GetEntityById(a) {
    const b = r;
    return m[b(535) + "em"][b(493)](a);
  }
  static getEntityTeam() {
    const a = r;
    return h[a("0x1a5") + "er"][a("0x1cc") + a("0x1dc")][a("0x21b") + a(532)]();
  }
  static [r(459) + r("0x209")]() {
    const a = r;
    return f[a(409)][a(473) + "ter"]?.["CharacterA" + a("0x1aa") + a(469)][a(434)];
  }
  static [r("0x1e5") + r("0x1b8")]() {
    const a = r;
    return f[a(409)]["BaseCharac" + a(510)]?.[a("0x204") + a(426) + a(469)][a("0x1e9")];
  }
  static [r(487) + r(529)]() {
    const a = r;
    let b = this["GetPlayerA" + a("0x1b8")]();
    return b?.[a("0x18a") + "ingComponent"]?.[a(373) + a(506)];
  }
  static [r("0x184") + "os"]() {
    const a = r;
    let b = this[a(485) + "ctor"]();
    let c = b?.[a("0x16c") + a("0x1d0")]();
    return c;
  }
  static [r(381) + "ype"](a) {
    const b = r;
    let c = a[b("0x1b2")][b(368) + "nt"](0)["GetEntityT" + b("0x20d")]();
    if (c == i[b("0x1f0")][b(498)][b(474)][b(429) + "er"]) {
      return b("0x1bb");
    }
    if (c == i[b("0x1f0")].Protocol[b(474)][b("0x20f")]) {
      return b(524);
    }
    if (c == i[b("0x1f0")][b(498)].kks[b("0x1f5") + "ter"]) {
      return b(439);
    }
    if (c == i[b(496)][b("0x1f2")][b("0x1da")][b("0x188") + b(384)]) {
      return b(448);
    }
    if (c == i[b(496)][b(498)][b(474)].Proto_Vision) {
      return b("0x206");
    }
    if (c == i[b(496)].Protocol.kks[b(504) + "al"]) {
      return "Animal";
    }
    if (c == i[b(496)].Protocol[b("0x1da")][b("0x17b") + "om"]) {
      return "Custom";
    }
  }
  static [r(486) + "n"](a) {
    const b = r;
    let c = a[b(368) + "nt"](1);
    let d = c[b(401) + b(480)];
    if (!d) {
      return null;
    }
    let e = d[b("0x16c") + b(464)]();
    return e;
  }
  static GetName(e) {
    const b = r;
    try {
      let c = e[b("0x1b2")][b(368) + "nt"](0);
      let a = k.PublicUtil[b("0x1a4") + b("0x1f1")](c[b(528) + "o"]()[b(363)]);
      return a;
    } catch (b) {
      return "";
    }
  }
  static ["GetBluepri" + r("0x19d")](d) {
    const b = r;
    try {
      let c = this["GetEntityD" + b("0x186")](d[b("0x19a")]);
      return c.BlueprintType;
    } catch (c) {
      return b(483) + b("0x1bc");
    }
  }
  static ["GetDistanc" + r("0x16e") + "r"](f) {
    const b = r;
    try {
      if (!f) {
        return;
      }
      let c = this.GetPlayerPos();
      let a = e[b("0x212") + b("0x187")][b(416) + b("0x193")](c, f);
      a = Math[b(422)](a / 100);
      return a;
    } catch (b) {}
  }
  static [r(385) + r("0x17e") + "ce"](f, b) {
    const c = r;
    try {
      let d = this[c(486) + "n"](b.Entity);
      if (!d) {
        return false;
      }
      let a = g[c("0x18f")].Getdistance2Player(d);
      return a < f * 100;
    } catch (b) {
      g.ModUtils[c("0x1a1")](b, c("0x1df"));
    }
  }
  static [r(523)](f, b) {
    const c = r;
    try {
      let d = this.GetPosition(b[c(434)]);
      if (!d) {
        return false;
      }
      let a = g[c(399)][c(467) + "e2Player"](d);
      return a < f;
    } catch (b) {
      g[c("0x18f")].Log(b, c(479));
    }
  }
  static [r("0x18d") + r("0x179")](d) {
    const b = r;
    try {
      let c = d[b(434)].Components[0][b(454)];
      return c;
    } catch (c) {
      return b(483) + "eprintType";
    }
  }
  static ["GetBluepri" + r("0x203")](d) {
    const b = r;
    try {
      let c = d[b(430)][0].gXr;
      return c;
    } catch (c) {
      return "unknownBlu" + b(444);
    }
  }
  static [r(371) + r(390)](a) {
    const b = r;
    try {
      return h[b(421) + "er"]["CreatureMo" + b("0x1a7")][b(371) + "ata"](a);
    } catch (b) {
      return null;
    }
  }
  static [r(380) + "on"](a) {
    const b = r;
    let c = this[b("0x18d") + "ntType2"](a);
    return c[b("0x176")](b("0x1b6")) || c.startsWith(b(456) + "Collect");
  }
  static [r("0x1ec")](a) {
    const b = r;
    let c = this[b(397) + "ntType2"](a);
    return c[b(374)](b(490)) || c.startsWith(b(456) + b(490));
  }
  static isTreasure(a) {
    const b = r;
    let c = this[b(397) + b(377)](a);
    return c.startsWith(b("0x213")) || c[b(374)](b(456) + b("0x213"));
  }
  static [r(414) + r("0x208") + "or"]() {
    const a = r;
    let b = this[a("0x1e5") + "ctor"]();
    let c = b?.[a("0x1a2") + "rwardVector"]();
    return c;
  }
  static [r("0x1f6") + r(458)](f) {
    const i = r;
    try {
      const b = h[i("0x1a5") + "er"]["CreatureMo" + i("0x1a7")]["GetPbDataI" + i("0x178")](f);
      const c = h[i("0x1a5") + "er"][i("0x1c4") + i(423)][i(522) + i("0x16f") + "a"]().entries();
      const g = [];
      for (const [d, e] of c) {
        const c = h[i("0x1a5") + "er"][i(389) + i("0x189") + "l"][i(406) + i("0x1e4")](e.Id);
        for (const a of [...c[i("0x1a9")][i(387) + "s"]().values()][i("0x1ba")](b => b[i(383) + "r"][i(369)] === i("0x1af") + "orNode")) {
          const b = c[i("0x215") + "fig"](a[i("0x20e")]);
          switch (b[i("0x1f4")][i("0x21a")]) {
            case i("0x1d8"):
              g[i(466)](...b[i(500)].ExistTargets, ...b[i(500)]["TargetsToA" + i("0x1d4")]);
              break;
            case i(436) + i("0x1ce") + i(395):
              let c = b[i(500)][i("0x201")][i("0x1cf")](b => b[i(451)].flat());
              g.push(...c);
              break;
            default:
              break;
          }
        }
      }
      return g[i(415)](b);
    } catch (b) {
      g[i(399)][i(417)](b, i("0x1df"));
      return false;
    }
  }
  static [r("0x216")](f) {
    const b = r;
    try {
      let c = this[b(397) + b(377)](f);
      const a = h[b("0x1a5") + "er"].CreatureModel["GetPbDataI" + b(376)](f);
      if (l[b(435) + "er"][b(475)](c, l.EntityFilter[b(470) + b("0x1bf")]) || l[b("0x1b3") + "er"][b(475)](a, l.EntityFilter.ExcludeMonsterKilLIds)) {
        return false;
      }
      let d = false;
      try {
        d = f[b(434)][b("0x170") + "nt"](0)["IsRealMons" + b("0x1fe")]();
      } catch {}
      return d;
    } catch (b) {
      return false;
    }
  }
  static isGameplay(a) {
    const b = r;
    let c = this[b(397) + b("0x179")](a);
    return c[b(374)](b("0x1eb")) || c[b("0x176")](b(456) + b(491));
  }
  static isNpc(a) {
    const b = r;
    let c = this[b("0x18d") + b("0x179")](a);
    return c[b(374)](b(524)) || c[b(374)](b(375)) || c[b("0x176")](b(396) + "C");
  }
  static [r("0x1a3")](a) {
    const b = r;
    let c = this[b(397) + b(377)](a);
    return c[b(374)]("Quest");
  }
  static [r(511)](a) {
    const b = r;
    return a[b(434)][b(430)][0][b("0x1c6")].startsWith(b("0x1d7"));
  }
  static [r("0x1ef")](a) {
    const b = r;
    let c = this[b("0x18d") + b("0x19d")](a);
    return c[b(374)](b(461));
  }
  static [r("0x1c2")](a) {
    const b = r;
    let c = this[b("0x18d") + b("0x19d")](a);
    return c[b("0x176")](b(443));
  }
  static [r("0x1fd")](a) {
    const b = r;
    let c = this["GetBluepri" + b(413)](a);
    return c[b(374)]("SceneObj");
  }
  static [r("0x18e")](a) {
    const b = r;
    return a.Entity[b("0x1ae")][0][b(454)].startsWith(b("0x172"));
  }
  static ["isSonanceC" + r("0x1b1")](a) {
    const b = r;
    return l[b(435) + "er"].CasketLists[b("0x19f")](a[b("0x1b2")].Components[0][b(454)]);
  }
  static isMutterfly(a) {
    const b = r;
    return a[b("0x1b2")][b("0x1ae")][0][b("0x1c6")] == b("0x192") + "1";
  }
  static [r(503) + "peed"](a) {
    const b = r;
    let c = this[b(459) + b("0x209")]();
    c[b(449) + b("0x1f3")](a);
  }
  static getPlayerId() {
    const a = r;
    return h[a("0x1a5") + "er"][a(411) + a("0x1a7")].GetPlayerId();
  }
  static [r(537) + r(441)]() {
    const a = r;
    let b = this["GetPlayerE" + a("0x209")]();
    return b[a("0x1ae")][0][a("0x190")];
  }
}
exports["EntityMana" + r(437)] = n;