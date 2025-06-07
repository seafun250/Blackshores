'use strict';

const o = k;
(function (e, f) {
  const b = k;
  const c = e();
  while (true) {
    try {
      const d = parseInt(b("0x205")) / 1 * (parseInt(b(527)) / 2) + -parseInt(b(538)) / 3 + -parseInt(b("0x227")) / 4 * (-parseInt(b(543)) / 5) + -parseInt(b("0x209")) / 6 * (-parseInt(b("0x1ff")) / 7) + -parseInt(b(506)) / 8 * (-parseInt(b(528)) / 9) + -parseInt(b(547)) / 10 * (parseInt(b(546)) / 11) + parseInt(b("0x1fb")) / 12;
      if (d === f) {
        break;
      } else {
        c.push(c.shift());
      }
    } catch (b) {
      c.push(c.shift());
    }
  }
})(l, 565107);
const a = {
  [o(494)]: true
};
Object["defineProp" + o("0x214")](exports, o(540), a);
exports[o(502)] = undefined;
const b = require("puerts");
const c = require("ue");
const p = require("../ModManager");
const e = require("../Utils/ModUtils");
const d = require("./ModMethod");
const f = require("./EntityManager");
const g = [o("0x1ed"), o(508), o("0x203"), o("0x217"), o(516), "Animal032"];
const h = [o("0x1f7"), o(545), "branch2.0_" + o("0x20c"), o("0x212") + "Animal042"];
const i = ["Animal006", o("0x206"), "Animal035", o(530) + "Animal039"];
class j extends f[o("0x20b") + o("0x215")] {
  static [o("0x1ec") + "ce"](f) {
    const b = o;
    try {
      let c = this[b(510) + "n"](f[b(495)]);
      if (!c) {
        return false;
      }
      let a = e[b(499)]["Getdistanc" + b(548)](c);
      return a < p[b("0x20d")][b("0x20e")][b(512) + b("0x1f2")] * 100;
    } catch (b) {
      return false;
    }
  }
  static async [o(501)](a) {
    const b = o;
    try {
      if (!a[b("0x1ef")]) {
        return;
      }
      if (this[b("0x1f4")](a) && this.isIndistance(a) && p[b(525)][b("0x20e")][b(531) + "ura"]) {
        return d[b(505)]["MonsterKil" + b("0x1f1")](a[b(495)]);
      }
      if (this[b(500)](a) && this.isIndistance(a) && p[b(525)][b("0x20e")][b(537) + "illAura"]) {
        return d[b(505)][b(513) + b(514) + b("0x216")](a.Entity);
      }
    } catch (b) {}
  }
  static [o("0x21e") + "a"]() {
    const d = o;
    try {
      if (!p.ModManager.settings[d(501)]) {
        return;
      }
      if (e[d(499)][d("0x207") + d(529)]()) {
        return;
      }
      f["EntityMana" + d(533)][d(549) + d(541)]()[d(522)](b => {
        const a = d;
        j[a("0x1f5")](b);
      });
    } catch (b) {
      Logger_1[d(504)][d("0x226")](b);
    }
  }
  static async [o(539)](e) {
    const b = o;
    try {
      if (!p[b("0x20d")][b(526)][b("0x21b")]) {
        return;
      }
      if (!e[b("0x1ef")]) {
        return;
      }
      let c = this[b(536) + "ntType2"](e);
      if (g[b(520)](c)) {
        d[b(505)][b("0x220") + b(509)](e[b("0x1ef")]);
      } else if (i[b(520)](c)) {
        d[b("0x1f9")][b("0x1f0") + "Request"](e[b(495)]);
      } else if (h[b("0x208")](c)) {}
    } catch (b) {}
  }
}
function k(d, a) {
  const e = l();
  k = function (c, f) {
    c = c - 492;
    let b = e[c];
    return b;
  };
  return k(d, a);
}
function l() {
  const b = ["220530VtZSVn", "KillAnimal", "__esModule", "ties", "RunKillAur", "350LEYtnk", "AnimalDieR", "Animal033", "22nFlKmc", "5616740fnuBNa", "e2Player", "GetAllEnti", "Error", "40544MWfyta", "isIndistan", "Animal001", "value", "Entity", "AnimalDrop", "lRequest", "dius", "ModUtils", "isMonster", "killAura", "KillAura", "Animal015", "Logger", "ModMethod", "16OQlOVM", "107808CfpyJt", "Animal002", "equest", "GetPositio", "7tIrPmh", "killAuraRa", "InstantMon", "sterKillRe", "Animal003", "Animal012", "377UzaBah", "Animal005", "isLoadingO", "includes", "468942tlsxmG", "forEach", "EntityMana", "Animal045", "ModManager", "settings", "1756UfqmrO", "2854341sSkakM", "rNotInGame", "branch2.0_", "isDotKillA", "erty", "ger", "quest", "Animal004", "GetBluepri", "isInstantK"];
  l = function () {
    return b;
  };
  return l();
}
exports[o("0x1f6")] = j;