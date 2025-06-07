'use strict';

const p = q;
(function (c, f) {
  const b = q;
  const d = c();
  while (true) {
    try {
      const c = -parseInt(b("0x177")) / 1 * (parseInt(b(346)) / 2) + -parseInt(b(368)) / 3 + -parseInt(b(305)) / 4 + -parseInt(b(322)) / 5 * (-parseInt(b(376)) / 6) + -parseInt(b("0x125")) / 7 * (parseInt(b("0x146")) / 8) + -parseInt(b(336)) / 9 * (-parseInt(b("0x18e")) / 10) + -parseInt(b("0x179")) / 11 * (-parseInt(b(299)) / 12);
      if (c === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(k, 165725);
const a = {};
function q(c, a) {
  const e = k();
  q = function (d, f) {
    d = d - 292;
    let b = e[d];
    return b;
  };
  return q(c, a);
}
a[p(321)] = true;
Object[p("0x15f") + "erty"](exports, p(372), a);
exports[p(392) + "n"] = undefined;
const r = require("../Utils/ModUtils");
const s = require("../Utils/DebounceHandler");
const e = require("./EntityManager");
const d = require("../ModelManager");
const f = require("../ModManager");
const b = require("../../Module/Interaction/TsInteractionUtils");
const g = require("../Utils/UI");
const i = require("../ListComponent");
const h = require("./EntityFilter");
const j = 1e+24;
class c extends e["EntityMana" + p(379)] {
  static [p("0x151") + p(318)] = new Map();
  static [p(364) + "HintFilter"](j) {
    const l = p;
    try {
      const b = this[l("0x185") + l("0x14c")](j);
      if (h[l("0x182") + "er"][l(300)](b) && f[l("0x14a")][l("0x190")].AutoLoot) {
        const b = {
          [l(298)]: j
        };
        this[l("0x133") + "ction"](b);
        return true;
      }
      if (h.EntityFilter[l(373) + l("0x18b")](b) && f[l("0x14a")].settings[l(378) + l("0x12d")]) {
        const b = {
          [l(298)]: j
        };
        this[l("0x133") + l(302)](b);
        return true;
      }
      if (b[l("0x169")](l("0x153")) && f[l(330)].settings[l(335)]) {
        const b = {
          Entity: j
        };
        this[l(307) + l(302)](b);
        return true;
      }
      if (h[l(386) + "er"][l(306) + l("0x15d")][l(381)](b) && f[l("0x14a")][l(400)][l(402) + l(367)]) {
        const b = {
          [l("0x12a")]: j
        };
        this[l("0x133") + "ction"](b);
        return true;
      }
      const a = {
        Entity: j
      };
      const c = h[l(386) + "er"][l("0x14e") + l(311)](a);
      if (f[l(330)][l(400)][l(348) + l("0x176")] && c) {
        const c = e.EntityManager[l("0x149") + l(371)](j.Id)[l("0x163") + "nt"](0)[l("0x165") + "d"]();
        let a = this["bossRetryH" + l(318)][l(292)](c);
        if (!a) {
          const a = new s[l("0x136") + l(344)](f.ModManager[l("0x190")]["AutoRetryC" + l("0x130") + l(312)], () => {
            const a = l;
            g.UI.ShowTip(a(403) + a(341));
            const b = {
              Entity: j
            };
            this[a("0x133") + a("0x12e")](b, 1);
            this[a(337) + a(318)][a("0x139")](c);
          }, a => {
            const e = l;
            if (!f[e("0x14a")][e("0x190")][e("0x15c") + e("0x176")]) {
              g.UI[e("0x13d")](e("0x13b") + e(347) + e("0x154"));
              const a = this["bossRetryH" + e(318)][e(292)](c);
              a[e("0x18d")]();
              this[e("0x151") + "andlers"].delete(c);
              return;
            }
            g.UI[e(317)](e(315) + "enge in " + a + "s");
          });
          this[l(337) + l(318)][l(314)](c, a);
          a[l(390)]();
        }
        return true;
      }
      const d = {
        [l(298)]: j
      };
      const i = h.EntityFilter[l("0x181") + "eEntity"](d);
      if (f[l("0x14a")][l("0x190")]["AutoChalle" + l(374)] && i) {
        const b = {
          Entity: j
        };
        this["AutoIntera" + l("0x12e")](b, 0, 1500);
        return true;
      }
      const k = {
        [l("0x12a")]: j
      };
      if (f[l(330)][l(400)][l("0x180") + l(311)] && h.EntityFilter["IsClaimedR" + l("0x137")](k)) {
        const b = {
          [l(298)]: j
        };
        this["AutoIntera" + l("0x12e")](b);
        return true;
      }
      return false;
    } catch (b) {}
    return false;
  }
  static async [p(307) + p("0x12e")](g, b = 0, c = undefined) {
    const e = p;
    try {
      const f = g[e("0x12a")][e("0x163") + "nt"](i.Component[e("0x134") + "ctNew"]);
      const a = d[e("0x17e") + "er"][e(392) + e("0x17c")]["GetOptionI" + e(370) + e(324)](b);
      f.Ean = true;
      if (c) {
        await r[e("0x135")][e(325)](c);
      }
      f[e(353)](a);
    } catch (b) {}
    await r[e("0x135")][e(388)](1);
  }
  static async [p(387) + p("0x16b")](a) {
    const b = p;
    if (!f.ModManager[b(400)][b("0x14b")]) {
      return;
    }
    if (h.EntityFilter.isneedLoot(this[b(389) + b(352)](a)) && this.isWithinPlayerDistance(f[b("0x14a")][b("0x190")][b(359) + b(294)], a)) {
      this[b(393) + b(327)](a, f[b(330)][b("0x190")]["AutoLootDi" + b("0x126")] * 100);
    }
  }
  static async [p(335)](a) {
    const b = p;
    if (!f[b(330)][b(400)][b(335)]) {
      return;
    }
    if (this.isVision(a)) {
      this[b(393) + b("0x147")](a, j);
    }
  }
  static async [p(378) + "easure"](a) {
    const b = p;
    if (!f.ModManager[b(400)].AutoPickTreasure) {
      return;
    }
    const c = this[b("0x185") + "ntType2"](a);
    if (h[b("0x182") + "er"].isneedTreasure(c) && this["isWithinPl" + b("0x128") + "ce"](f[b(330)][b("0x190")][b(358) + b("0x18c")], a)) {
      this[b("0x189") + "tRange"](a, f.ModManager[b(400)][b(358) + b("0x18c")] * 100);
    }
  }
  static [p("0x192") + p(367)](a) {
    const b = p;
    if (!f[b("0x14a")][b(400)][b(402) + b("0x16f")]) {
      return;
    }
    if (this[b("0x17f")](a) && h[b("0x182") + "er"][b(306) + b(349)][b(381)](this["GetBluepri" + b("0x160")](a))) {
      this.SetInteractRange(a, j);
    }
  }
  static ["AutoChalle" + p(374)](a) {
    const b = p;
    if (!f[b("0x14a")].settings.AutoChallengeBoss) {
      return;
    }
    if ((h.EntityFilter[b("0x181") + b(343)](a) || h[b("0x182") + "er"]["IsClaimedR" + b(311)](a)) && e[b("0x191") + "ger"]["isWithinPl" + b("0x128") + "ce"](50, a)) {
      this[b(393) + b(327)](a, 5000);
    }
  }
  static async SetTeleport(a) {
    const b = p;
    if (!f.ModManager[b(400)]["WaypointsL" + b("0x187")]) {
      return;
    }
    if (this[b(383)](a)) {
      this["SetInterac" + b("0x147")](a, j);
    }
  }
  static async [p("0x162")](a) {
    const b = p;
    if (!f[b(330)][b(400)][b(319) + b(295)]) {
      return;
    }
    if (this[b(342) + "on"](a) || this[b("0x17f")](a) || this[b("0x18a")](a) || h[b(386) + "er"][b(373) + b(395)](this[b(389) + "ntType2"](a)) || h[b(386) + "er"][b("0x129")](this[b("0x185") + b("0x160")](a), h[b("0x182") + "er"][b("0x12f") + b("0x13c")])) {
      this["SetInterac" + b(327)](a, j);
    }
  }
  static async [p(350) + "eCasket"](a) {
    const b = p;
    if (!f[b(330)][b(400)][b("0x15e") + b(333)]) {
      return;
    }
    if (this[b("0x140") + b(338)](a)) {
      this[b("0x189") + b("0x147")](a, j);
    }
  }
  static async ["SetInterac" + p("0x147")](a, b) {
    const c = p;
    let d = a.Entity[c(355) + "nt"](i[c("0x18f")][c("0x171") + c(365)]);
    try {
      d[c("0x189") + c("0x147")](b, 0);
      d[c("0x143") + c("0x16e")](b, 0);
    } catch (b) {}
  }
  static [p(345) + "ayFunc"](a, b, c) {
    const d = p;
    let e = this[d("0x148") + "p"][d("0x124")](a);
    if (!e) {
      e = new s[d("0x136") + "andler"](b, c);
      debounceMap.set(a, e);
    }
    if (!e[d(362)]) {
      e[d(390)]();
    }
  }
  static [p(356) + "ounceMap"]() {
    const d = p;
    for (const [b, a] of this[d(328) + "p"][d("0x168")]()) {
      if (!a.isRunning) {
        debounceMap.delete(b);
      }
    }
  }
}
exports.Interaction = c;
function k() {
  const b = ["1872QSugLt", "bossRetryH", "asket", "VisionItem", "led!", "lenge!", "isCollecti", "eEntity", "andler", "TriggerDel", "1766vuPjeb", "enge cance", "AutoChalle", "eacon", "AutoSonanc", "defineProp", "ntType2", "dhn", "SetAll", "GetCompone", "cleanupDeb", "GetPbDataI", "AutoTreasu", "AutoLootDi", "entries", "startsWith", "isRunning", "llection", "IsInteract", "tion", "nge", "leports", "596964NGKJUe", "PawnPercep", "nstanceIdB", "yId", "__esModule", "isneedTrea", "ngeBoss", "257HszVbg", "6BVoGmn", "7868707tfnlCr", "AutoPickTr", "ger", "nModel", "includes", "ModelManag", "isTeleport", "AutoClaimR", "IsChalleng", "EntityFilt", "AutoLootCo", "WaitAsync", "GetBluepri", "trigger", "ongRange", "Interactio", "SetInterac", "isVision", "sure", "reDistance", "cancel", "1030baCgoG", "Component", "settings", "EntityMana", "AutoOpenTe", "Start Chal", "get", "63LDXKfd", "stance", "Range", "ayerDistan", "isFilter", "Entity", "12xbQEcF", "isneedLoot", "easure", "ction", "CasketDeli", "hallengeBo", "260844ZNMZTw", "ResonanceB", "AutoIntera", "PawnIntera", "ModUtils", "DebouncedH", "eward", "ssDelay", "delete", "set", "Boss chall", "very", "ShowTip", "andlers", "Perception", "isSonanceC", "value", "310885CFFRRr", "SetSightRa", "yIndex", "Sleep", "126296rSLaxD", "tRange", "debounceMa", "GetEntityB", "ModManager", "AutoLoot", "ntType3", "eCasket", "IsClaimedR", "AutoAbsorb"];
  k = function () {
    return b;
  };
  return k();
}