'use strict';

const A = w;
(function (e, f) {
  const b = w;
  const c = e();
  while (true) {
    try {
      const d = parseInt(b("0x1be")) / 1 * (-parseInt(b("0x1ad")) / 2) + -parseInt(b("0x1c1")) / 3 * (-parseInt(b(325)) / 4) + -parseInt(b(404)) / 5 + parseInt(b("0x184")) / 6 * (parseInt(b(343)) / 7) + -parseInt(b("0x12f")) / 8 * (-parseInt(b(298)) / 9) + parseInt(b("0x155")) / 10 * (parseInt(b("0x169")) / 11) + parseInt(b(308)) / 12;
      if (d === f) {
        break;
      } else {
        c.push(c.shift());
      }
    } catch (b) {
      c.push(c.shift());
    }
  }
})(t, 413772);
const a = {
  [A("0x15e")]: true
};
Object[A("0x165") + "erty"](exports, A(385), a);
exports[A("0x170")] = undefined;
const B = require("puerts");
const b = A("0x154") + A("0x123");
const C = A("0x1af");
const d = require("ue");
const c = require("../../Module/Abilities/FormationDataController");
const e = require("../../NewWorld/Character/Common/Component/Abilities/CharacterAttributeTypes");
const h = require("../../Global");
const f = require("../Utils/Logger");
const g = require("./EntityManager");
const i = require("../Utils/ConfigManager");
const j = require("../Utils/ModUtils");
const k = require("../ModelManager");
const l = require("./dungeonFilter");
const m = require("../ListComponent");
const n = require("./Data/Buff");
const o = require("../Utils/UI");
const p = require("../ModManager");
let q;
let r = [];
const s = {
  [A(333)]: [3094, 80012049],
  [A("0x16e")]: 900170000322,
  [A("0x15c") + A("0x139")]: [83011202, 83011302],
  Echo: 83010902,
  [A(381) + "e"]: 1102012003,
  [A(400) + A(445)]: [1603600104, 1104060011, 1505402002],
  Atk: 25,
  [A(390)]: 672010102,
  Cr: 26,
  Cdmg: 672010105,
  [A(286) + A(364)]: 21,
  [A("0x193") + "timate"]: 23,
  [A(402) + "troOutro"]: 621030211,
  [A(458)]: [16, 621310219, 621310220]
};
function t() {
  const b = ["InfiniteUl", "1891075zZqpXN", "Request", "includes", "ModUtils", "CritialHit", "BuffCompon", "ceChain", "fStates", "BaseCharac", "DungeonFil", "push", "size", "isInDungeo", "RemoveBuff", "GetConfig", "ListenForT", "tChainGrou", "buffType", "handleBuff", "ot exist. ", "MaterialSh", "GetRoleIns", "EntityMana", "GetCompone", "isSprintTi", "67212wRSqoQ", "SceneTeamM", "Buff.json", "$unref", "AddBuff", "error", "KuroStatic", "PbDataId", "CheckConfi", "timerApply", "AddMultiSt", " or does n", "RoleTag", "has", "Component", "warn", "rte", "17USPFAM", "oBlueprint", "hainMaxFak", "2033145JnWyRe", "gExists", "SaveConfig", "sprintBuff", "handleMult", "timate", "lastBuffUs", "ackBuffReq", "ApplyBuffs", "NoCD", "ntity", "isBuffActi", "GetBuffByI", "InfiniteSt", "ined", "stringify", "getEntityT", "Entity", "d.json", "dValue", "buffs", "Duration", "odel", "IllusiveSp", "merActive", "1165635CPbUnS", "iguration:", "ModManager", "superBuff", "Logger", "8TBHYDc", "playerSpee", "AddBuffReq", "Value", "uestByEnti", "1772916YPCtAn", "ter", "Dir", "RequestApp", "EchoesBuff", "dCoin", "ModelManag", "ffRequest", "WorldSpeed", "Log", "uest", "stacks", "BlueprintP", "AddMultiBu", "eam", "rmat: Conf", "ank", "4gjmjVB", "ceData", "isArray", "luePrint", "Instigator", "SuperBuff", "settings", "RequestByE", "GodMode", "agAddOrRem", "Echo", "Cdmg", "ResonanceC", "Sanhua", "every", "ResonanceI", "2301370KsgMdh", "name", "7nTOIYz", "Failed to ", "troOutro", "LoadConfig", "Adding new", "MaterialAn", "ellBuff", "value", "ent", "AlwaysCrit", "buffManage", "ig must be", "ger", "length", "defineProp", "CreatureDa", "sprintTime", "InfiniteIn", "11lXjWUJ", "CurrentTea", "hasBuff", "amina", "GetRoleMod", "OneHitKill", "uff: ", "buffMethod", "ChangeBuff", "BaseBuff", "logger", "appliedBuf", " buff: ", "forEach", "info", "ConfigMana", "athsLibrar", "parse conf", "ove", "IsInFight", "SanhuaFort", "ToFile", "rint", "HasBuff", "__esModule", "map", "SaveString", "1069074zOuZvg", "pIndex", "Atk600", "PlayerSpee", "SetResonan", "GetCurrent", "Config fil", "parse", "Invalid fo", "MaxResonan", "ig.", "taId", "InfiniteFo", "FileExists", "infiniteIn"];
  t = function () {
    return b;
  };
  return t();
}
const u = {
  [A("0x1b6")]: null,
  [A(460) + "ve"]: false,
  [A(362) + "m"]: []
};
class v {
  static [A(409) + A(351)] = 204;
  static [A("0x1a5")] = n;
  static [A(428) + A(297)] = false;
  static [A("0x167") + "r"] = null;
  static [A("0x1c7") + "ed"] = null;
  static [A("0x125")] = s;
  static [A("0x161") + "r"] = {
    superBuff: u,
    criticalHit: {
      isBuffActive: false,
      charactersActive: new Map()
    },
    appliedBuffStates: {},
    selectedBuffOption: null
  };
  static [A(337) + A(448) + "e"]() {
    const h = A;
    if (!p.ModManager[h("0x14b")][h("0x18d") + h("0x19a")]) {
      return;
    }
    const b = g["EntityMana" + h(355)][h(365) + "el"]();
    if (!b) {
      return;
    }
    g[h("0x1aa") + h("0x163")][h("0x121") + h(322)]()[h("0x176")](c => {
      const a = h;
      const d = b[a("0x1a9") + "tanceById"](c[a("0x1b4")]);
      const e = d["GetResonan" + a("0x146")]();
      if (e && e["GetResonan" + a(420) + a(389)]() < 6) {
        e[a("0x188") + "tChainGrou" + a("0x185")](6);
      }
    });
  }
  static ["MaxWeaponR" + A(324)]() {}
  static ["AddMultiBu" + A(315)](a = false, b) {
    const e = A;
    if (a) {
      b[e("0x176")](d => {
        const a = e;
        const b = this[a("0x16b")](d);
        if (!b) {
          this["AddBuffReq" + a("0x13e")](d);
        }
      });
    } else if (!a) {
      b[e("0x176")](d => {
        const a = e;
        const b = this.hasBuff(d);
        if (b) {
          this[a(417) + a("0x195")](d);
        }
      });
    }
  }
  static [A("0x171") + A("0x195")](a) {
    const b = A;
    try {
      if (!a) {
        throw new Error("buff undef" + b("0x11f"));
      }
      if (this[b("0x1c7") + "ed"]?.removeable) {
        j[b("0x197")][b(317)]("Removing b" + b("0x16f") + this[b("0x1c7") + "ed"].name);
        this[b("0x1a1") + b(405)](this[b("0x1c7") + "ed"].id);
        this[b("0x1c7") + "ed"] = null;
      }
      this[b("0x1c7") + "ed"] = a;
      j[b(407)][b(317)](b("0x15b") + b(373) + this[b(455) + "ed"][b("0x156")]);
      this["AddBuffReq" + b("0x13e")](a.id);
    } catch (c) {
      j[b(407)].Log(c, b(434));
    }
  }
  static [A(363)](g) {
    const b = A;
    try {
      const c = k[b("0x13a") + "er"]["SceneTeamM" + b("0x127")][b(393) + b(290)];
      if (!c) {
        return false;
      }
      const a = c[b(290)][b("0x1ab") + "nt"](m[b("0x1bb")].BaseBuff);
      if (!a) {
        return;
      }
      const d = a[b("0x180")](g);
      const e = a[b(461) + "d"](g);
      return Boolean(d || e);
    } catch (c) {
      f[b(302)].Error(c);
    }
  }
  static ["AddMultiSt" + A("0x1c8") + "uest"](e, b = 0) {
    const c = A;
    if (b === 0 || e[c("0x164")] === 0) {
      return;
    }
    for (let d = 0; d < b; d++) {
      for (const b of e) {
        this[c(305) + "uest"](b);
      }
    }
  }
  static [A("0x131") + A("0x13e")](h, b) {
    const c = A;
    try {
      const d = k[c(314) + "er"][c(430) + "odel"]["GetCurrent" + c("0x122")];
      const a = d.Entity[c("0x1ab") + "nt"](m[c("0x1bb")][c("0x172")]);
      if (!a) {
        return;
      }
      const e = {
        InstigatorId: a[c("0x166") + c("0x18f")],
        Reason: " ",
        ...b
      };
      const f = e;
      a[c(433)](h, f);
    } catch (b) {}
  }
  static [A("0x1a1") + A(405)](a) {
    const b = A;
    const c = k[b("0x13a") + "er"][b("0x1ae") + "odel"].GetCurrentEntity;
    const d = c[b("0x122")][b(427) + "nt"](m.Component[b(370)]);
    if (!d) {
      return;
    }
    d[b(417)](a, -1, "");
  }
  static [A("0x1a1") + A("0x14c") + A("0x1cb")](a, b) {
    const c = A;
    const d = b[c("0x1ab") + "nt"](m.Component[c(370)]);
    if (!d) {
      return;
    }
    d[c(417)](a, -1, "");
  }
  static [A("0x1a6") + A("0x195")](g, b = false, c = false) {
    const d = A;
    try {
      const e = this[d(363)](g);
      const a = this.buffManager[d(372) + "fStates"][g];
      if (b) {
        if (a && c && e) {
          return;
        }
        this["AddBuffReq" + d("0x13e")](g);
        this[d(353) + "r"][d(372) + d(411)][g] = true;
        return;
      }
      if (e && a) {
        this[d(417) + d(405)](g);
      }
      this[d("0x161") + "r"]["appliedBuf" + d("0x19b")][g] = false;
    } catch (b) {}
  }
  static [A(453) + "iBuffRequest"](f, g = false, c = false) {
    const d = A;
    try {
      if (!Array[d("0x147")](f)) {
        return;
      }
      for (const e of f) {
        const a = this.hasBuff(e);
        const b = this.buffManager[d(372) + d("0x19b")][e];
        if (g) {
          if (b && c && a) {
            continue;
          }
          this[d(305) + "uest"](e);
          this.buffManager[d(372) + "fStates"][e] = true;
          continue;
        }
        if (a && b) {
          this[d("0x1a1") + d("0x195")](e);
        }
        this[d("0x161") + "r"][d(372) + "fStates"][e] = false;
      }
    } catch (b) {}
  }
  static [A("0x131") + A(307) + "ty"](g, b) {
    const c = A;
    try {
      const d = b.GetComponent(m[c(443)][c(370)]);
      if (!d) {
        return;
      }
      const a = {};
      a[c("0x149") + "Id"] = d[c(358) + c(399)];
      a.Reason = " ";
      const e = a;
      d.AddBuff(g, e);
    } catch (b) {}
  }
  static HanldeBuffRequestByEntity(a, b = false, c = false, d = null) {
    const e = A;
    if (!d) {
      return;
    }
    try {
      if (c && b && this[e(363)](a)) {
        return;
      }
      if (b) {
        this[e(305) + e(307) + "ty"](a, d);
      } else if (!b && this[e("0x16b")](a)) {
        this["RemoveBuff" + e("0x14c") + e("0x1cb")](a, d);
      }
    } catch (b) {}
  }
  static sprintBuff() {
    const c = A;
    const a = k[c(314) + "er"][c("0x1ae") + c("0x127")].GetCurrentEntity;
    let b = h.Global[c(412) + "ter"]?.["GetEntityN" + c("0x1bf")]();
    if (!b || !a[c(290)]) {
      return;
    }
    let e = a.Entity.GetComponent(m[c("0x1bb")][c(441)]);
    const d = () => {
      const f = c;
      let a = 3400;
      if (!p[f("0x12c")].settings[f("0x128") + f(383)] || !e.HasTag(917667812)) {
        return;
      }
      if (v.sprintTimer) {
        clearTimeout(v[f("0x167") + "r"]);
        v[f("0x167") + "r"] = null;
      }
      if (p[f(300)][f(331)][f("0x187") + "d"]) {
        a = a / p[f("0x12c")][f("0x14b")][f("0x130") + f(292)];
      }
      if (p[f("0x12c")].settings.WorldSpeed) {
        a = a / p[f("0x12c")].settings[f(316) + f("0x132")];
      }
      v[f(359) + "r"] = // TOLOOK
      // TOLOOK
      setTimeout(() => {
        const c = f;
        if (!this.hasBuff(640003016)) {
          const b = {
            [c("0x126")]: 60
          };
          this[c(305) + c(318)](640003016, b);
        }
        B[c(371)][c(375)]("Refreshing buff");
        d();
      }, a);
    };
    if (q !== b && !r[c("0x196")](b)) {
      q = b;
      r[c(414)](b);
      e[c("0x1a3") + c(334) + c(379)](917667812, d);
    }
    if (p.ModManager.settings["IllusiveSp" + c("0x17f")]) {
      if (!e.HasTag(917667812) && !e.HasTag(-1935387692)) {
        const b = {
          [c(294)]: 0.01
        };
        this[c(305) + c(318)](640003017, b);
      }
    }
  }
  static [A("0x12d")]() {
    const h = A;
    try {
      const b = g["EntityMana" + h("0x163")][h(289) + h("0x142")]();
      if (!b) {
        return;
      }
      if (!this[h("0x16b")](this[h(293)][h("0x186")])) {
        this[h(353) + "r"][h(301)][h("0x1cc") + "ve"] = false;
      }
      const a = () => {
        const d = h;
        b[d("0x176")](c => {
          const a = d;
          this[a(417) + "RequestByEntity"](this[a(293)].Atk600, c[a("0x122")]);
          this[a("0x1a1") + a("0x14c") + a(459)](this[a(293)].Cr, c[a(290)]);
          this[a("0x1a1") + "RequestByEntity"](this[a("0x125")][a("0x150")], c[a(290)]);
        });
        this.buffManager[d("0x12d")].isBuffActive = false;
        this[d(353) + "r"][d("0x12d")][d(362) + "m"] = [];
      };
      if (!p[h(300)][h("0x14b")][h(330)]) {
        if (this[h("0x161") + "r"][h("0x12d")][h("0x1cc") + "ve"]) {
          a();
        }
        return;
      }
      if (this[h("0x161") + "r"][h(301)].CurrentTeam[h(356)] > 0) {
        const c = new Set(this[h("0x161") + "r"][h("0x12d")].CurrentTeam);
        const d = new Set(b[h(386)](b => b[h(436)]));
        const e = c[h(415)] === d.size && [...c][h("0x153")](b => d[h(442)](b));
        if (l[h("0x19d") + h(309)][h("0x1a0") + "n"]()) {
          if (this[h("0x161") + "r"].superBuff[h(460) + "ve"] && !e) {
            return a();
          }
        }
        if (!e) {
          if (this[h(353) + "r"][h(301)][h("0x1cc") + "ve"]) {
            return a();
          }
        }
      }
      if (!this[h(353) + "r"][h(301)][h("0x1cc") + "ve"]) {
        this[h("0x131") + "uest"](this[h("0x125")].Cr);
        for (let b = 0; b < 5; b++) {
          this[h("0x131") + "uest"](this[h(293)][h(390)]);
        }
        for (let b = 0; b < 10; b++) {
          this[h("0x131") + h("0x13e")](this[h(293)][h(336)]);
        }
        this[h(353) + "r"][h("0x12d")][h("0x1cc") + "ve"] = true;
        b[h("0x182")](b => this[h(353) + "r"][h("0x12d")][h("0x16a") + "m"][h(414)](b[h(436)]));
      }
    } catch (b) {
      j[h(407)][h("0x13d")](b, "error");
    }
  }
  static CritialHit() {
    const f = A;
    try {
      const b = g["EntityMana" + f(355)][f(289) + f("0x142")]();
      if (!b) {
        return;
      }
      const a = this[f("0x161") + "r"][f("0x174") + f("0x19b")][this[f("0x125")].Cr];
      const c = b[f("0x153")](b => b[f("0x122")][f("0x1ab") + "nt"](m.Component[f(370)])[f("0x180")](this[f(293)].Cr));
      if (p.ModManager[f("0x14b")].AlwaysCrit && !c) {
        this[f(305) + "uest"](this[f(293)].Cr);
        this.buffManager[f(372) + f(411)][this[f(293)].Cr] = true;
      } else if (!p[f("0x12c")].settings[f("0x160")] && a) {
        b[f(374)](b => {
          const a = f;
          const c = b[a(290)];
          const d = c[a("0x1ab") + "nt"](m[a(443)][a("0x172")])[a(384)](this[a("0x125")].Cr);
          if (d) {
            this["RemoveBuff" + a(332) + "ntity"](this[a("0x125")].Cr, c);
          }
        });
        this.buffManager[f(372) + f(411)][this[f(293)].Cr] = false;
      }
    } catch (b) {}
  }
  static [A("0x190") + A(445)]() {
    const a = A;
    try {
      if (j[a("0x197")][a(380)]()) {
        if (g[a(426) + a(355)]["GetPlayerB" + a("0x148")]()[a("0x196")](a(338))) {
          this[a(422) + "Request"](this[a(293)][a(381) + "e"], p[a("0x12c")][a(331)].InfiniteForte);
        }
        this[a("0x1c5") + "iBuffRequest"](this.buffs[a("0x190") + a("0x1bd")], p[a(300)].settings[a("0x190") + "rte"]);
      }
    } catch (b) {}
  }
  static [A("0x168") + A("0x159")]() {
    const a = A;
    try {
      if (p[a("0x12c")].settings[a(360) + a(345)] && j[a(407)][a("0x17c")]()) {
        this[a(305) + a("0x13e")](v[a("0x125")][a(402) + a("0x159")]);
      }
    } catch (b) {}
  }
  static [A(457)]() {
    const a = A;
    this[a(453) + "iBuffRequest"](this.buffs[a(333)], p[a("0x12c")][a(331)][a("0x14d")], true);
    this[a(422) + a("0x195")](this[a(293)][a("0x16e")], p[a(300)][a(331)][a(366)], true);
    this[a(321) + a("0x13b")](p[a(300)].settings[a(424) + a("0x15d")], this.buffs[a("0x15c") + a("0x139")]);
    this.handleBuffRequest(this[a(293)][a("0x14f")], p[a("0x12c")].settings[a("0x138")], true);
    this[a("0x1a6") + a("0x195")](this.buffs[a(286) + a(364)], p[a("0x12c")][a("0x14b")][a("0x11e") + a(364)], true);
    this.handleBuffRequest(this[a("0x125")][a(403) + a(454)], p[a("0x12c")].settings["InfiniteUl" + a(454)], true);
    this[a("0x1c5") + "iBuffRequest"](this.buffs[a("0x1ca")], p[a(300)][a("0x14b")][a("0x1ca")]);
    this[a("0x190") + "rte"]();
    this[a("0x1c4")]();
    this[a(408)]();
    this.InfiniteIntroOutro();
    this[a("0x12d")]();
  }
  static [A("0x137") + "lyBuff"](d) {
    const b = A;
    if (Array.isArray(d.id)) {
      if (d[b("0x13f")]) {
        v["AddMultiSt" + b(456) + b("0x13e")](d.id, d[b("0x13f")]);
      } else {
        for (const c of d.id) {
          v[b("0x131") + "uest"](c);
        }
      }
    } else if (d.stacks) {
      v[b("0x1b7") + b(456) + b("0x13e")]([d.id], d.stacks);
    } else {
      v[b(305) + "uest"](d.id);
    }
  }
  static [A("0x1b5") + A("0x1c2")]() {
    const a = A;
    const b = d[a(320) + a("0x179") + "y"][a("0x191")](i[a(376) + "ger"][a(346) + a(310)]() + C);
    return b;
  }
  static SaveConfig() {
    const a = A;
    d[a("0x1b3") + "Library"][a(387) + a("0x17e")](JSON[a("0x120")](this[a(421)], null, 2), i[a(376) + a(355)]["LoadConfig" + a("0x136")]() + C);
  }
  static LoadConfig() {
    const c = A;
    let a = i[c(376) + "ger"][c(418)](C);
    B[c(432)](a);
    if (!a || !a[0]) {
      B[c(371)][c(444)](c("0x18a") + "e is empty" + c("0x1b8") + c(423) + "Loading default conf" + c(398));
      v[c("0x1c3")]();
      return;
    }
    try {
      a = JSON[c("0x18b")](a);
      if (!Array.isArray(a)) {
        throw new Error(c("0x18c") + c("0x143") + c("0x162") + " an array.");
      }
      this[c("0x1a5")] = a;
      v[c(451)]();
    } catch (b) {
      o.UI.ShowTip(c(344) + c("0x17a") + c(299) + b);
      B[c("0x173")].error(c(344) + c("0x17a") + c(299), b);
    }
  }
}
function w(d, a) {
  const e = t();
  w = function (c, f) {
    c = c - 286;
    let b = e[c];
    return b;
  };
  return w(d, a);
}
exports.buffMethod = v;