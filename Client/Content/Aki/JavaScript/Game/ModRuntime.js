'use strict';

const x = y;
(function (c, f) {
  const b = y;
  const d = c();
  while (true) {
    try {
      const c = parseInt(b("0x1ca")) / 1 * (-parseInt(b(484)) / 2) + -parseInt(b(429)) / 3 * (-parseInt(b("0x1c9")) / 4) + parseInt(b(487)) / 5 + -parseInt(b("0x1b2")) / 6 * (-parseInt(b(441)) / 7) + -parseInt(b(501)) / 8 + parseInt(b("0x1b1")) / 9 * (parseInt(b(483)) / 10) + -parseInt(b(455)) / 11 * (parseInt(b(494)) / 12);
      if (c === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(s, 965041);
const a = {};
function y(c, a) {
  const e = s();
  y = function (d, f) {
    d = d - 422;
    let b = e[d];
    return b;
  };
  return y(c, a);
}
a[x(466)] = true;
Object[x("0x1d8") + x("0x1bb")](exports, x(473), a);
exports[x("0x1c3")] = undefined;
const b = require("puerts");
const c = require("ue");
const d = require("./Manager/ModFuncs/KillAura");
const e = require("./Manager/ModelManager");
const f = require("./Manager/Utils/ModUtils");
const g = require("./Manager/ModFuncs/EntityManager");
const h = require("./Manager/ModFuncs/buffMethod");
const i = require("./Manager/ModFuncs/TreasureTracking");
const j = require("./Manager/ModFuncs/Keybind/KeybindController");
const k = require("./Manager/ModFuncs/Flight");
const l = require("./Manager/Utils/Logger");
const m = require("./Manager/ModFuncs/ModMethod");
const n = require("./Manager/ModFuncs/Interaction");
const o = require("./Manager/ModManager");
const p = require("./Manager/ModFuncs/AutoPuzzle");
const q = require("./Manager/ModFuncs/MobVacuum");
const r = require("./Manager/ModFuncs/AutoDestroy");
function s() {
  const b = ["10130NTxZDD", "74AInamE", "Start", "AutoRestar", "7330375xUzFhA", "EntityMana", "isInstantK", "ngeBoss", "buffMethod", "htState", "EchoVacuum", "12KEOcXd", "AutoSonanc", "AutoOpenTe", "killAura", "troller", "Interactio", "AutoDestro", "13221184CNiwrf", "ctivate", "rNotInGame", "AutoSolve", "ger", "ModManager", "MobVacuum", "iew", "318ObnDBV", "mediumLoop", "VacuumColl", "isLoadingO", "10179hPnbHC", "404130xZBAhH", "KillAnimal", "isAllowToA", "oop", "AutoPuzzle", "listenFlig", "Run", "154iabxEF", "Error", "erty", "ura", "runFastLoo", "illAura", "AutoAbsorb", "runSlowLoo", "startRunti", "AutoChalle", "ModRuntime", "eCasket", "easure", "isRunning", "6680839DLfmsp", "settings", "36536BDpUzm", "49642FHzMRa", "fly", "slowLoop", "Entity", "ApplyBuffs", "fastLoop", "ModUtils", "runMediumL", "value", "ties", "stopRuntim", "Logger", "KeybindCon", "ModelManag", "defineProp", "__esModule", "leports", "IsInGame", "ModMethod", "GetAllEnti", "forEach", "AutoLootCo", "tDungeon", "KillAura", "ect"];
  s = function () {
    return b;
  };
  return s();
}
class t {
  constructor() {
    const c = x;
    this.isRunning = false;
    this[c("0x1cf")] = null;
    this[c("0x1ae")] = null;
    this[c("0x1cc")] = null;
    u[c("0x1e5")]();
    // TOLOOK
    // TOLOOK
    setInterval(() => {
      const b = c;
      if (!this.isRunning && !f[b(464)][b("0x1b0") + b(423)]()) {
        this[b(449) + "me"]();
      }
    }, 1500);
  }
  [x(449) + "me"]() {
    const a = x;
    if (this[a(454)] || f[a(464)][a(432) + a(423)]()) {
      return;
    }
    this[a(454)] = true;
    this[a("0x1bd") + "p"]();
    this[a(465) + a(437)]();
    this[a("0x1c0") + "p"]();
  }
  [x("0x1d4") + "e"]() {
    const a = x;
    this[a(454)] = false;
    clearTimeout(this[a(463)]);
    clearTimeout(this[a("0x1ae")]);
    clearTimeout(this[a("0x1cc")]);
  }
  runFastLoop() {
    const d = x;
    if (!this[d(454)] || f[d(464)][d(432) + "rNotInGame"]()) {
      this[d(468) + "e"]();
      return;
    }
    try {
      h[d(491)][d(462)]();
      i.TreasureTracking[d(440)]();
      e[d("0x1d7") + "er"].CreatureModel[d(477) + d("0x1d3")]()[d(478)](b => {
        const a = d;
        if (!b.Entity) {
          return;
        }
        q[a("0x1ab")][a(431) + a("0x1e2")](b);
        q.MobVacuum[a(493)](b);
        n.Interaction[a(495) + a(452)](b);
        n[a("0x1f3") + "n"][a("0x1bf")](b);
        n[a("0x1f3") + "n"]["AutoPickTr" + a(453)](b);
        n[a("0x1f3") + "n"][a("0x1f0") + a("0x1da")](b);
        p[a(438)]["AutoMutter" + a("0x1cb")](b);
        if (j[a(470) + "troller"][a("0x1b4") + a("0x1a6")](a(427))) {
          q[a("0x1ab")][a("0x1ab")](b);
        }
      });
    } catch (b) {}
    this.fastLoop = // TOLOOK
    // TOLOOK
    setTimeout(() => this[d("0x1bd") + "p"](), 500);
  }
  [x(465) + x("0x1b5")]() {
    const e = x;
    if (!this[e("0x1c6")]) {
      return;
    }
    try {
      k.Flight[e(439) + e(492)]();
      m[e(476)][e(486) + e("0x1e0")]();
      g[e(488) + e("0x1a9")][e(477) + e(467)]().forEach(b => {
        const a = e;
        if (!b[a("0x1cd")]) {
          return;
        }
        n[a("0x1f3") + "n"][a(450) + a(490)](b);
        if (j.KeybindController[a(436) + a("0x1a6")](a(481)) && o.ModManager.settings[a(497)] && o.ModManager.settings["isDotKillA" + a(444)]) {
          d[a(481)][a("0x1f1")](b);
        }
      });
    } catch (b) {}
    this[e("0x1ae")] = // TOLOOK
    // TOLOOK
    setTimeout(() => this[e("0x1d1") + e("0x1b5")](), 1000);
  }
  runSlowLoop() {
    const e = x;
    if (!this.isRunning) {
      return;
    }
    try {
      g[e("0x1e8") + e(425)][e("0x1dd") + e(467)]()[e(478)](b => {
        const a = e;
        if (!b[a("0x1cd")]) {
          return;
        }
        if (j[a(470) + a(498)][a(436) + a("0x1a6")]("KillAura") && o[a(426)][a(456)].killAura && o[a("0x1aa")][a(456)][a("0x1e9") + a(446)]) {
          d.KillAura[a("0x1f1")](b);
        }
        n.Interaction[a(479) + "llection"](b);
        r[a(500) + "y"][a(500) + "y"](b);
        p[a(438)][a(438)](b);
        d.KillAura[a("0x1b3")](b);
      });
    } catch (b) {}
    this.slowLoop = // TOLOOK
    // TOLOOK
    setTimeout(() => this.runSlowLoop(), 2500);
  }
}
class u {
  static [x(485)]() {
    // TOLOOK
    // TOLOOK
    setInterval(() => {
      const c = y;
      try {
        if (f[c(464)][c(475)]() || !f[c("0x1d0")]["IsLoadingV" + c("0x1ac")]()) {
          if (o[c(426)][c(456)].AutoPuzzle) {
            p[c(438)][c(424)]();
          }
          p[c(438)].AutoFishing();
        }
      } catch (a) {
        l[c(469)][c(442)](a);
      }
    }, 2000);
  }
}
exports[x("0x1c3")] = t;