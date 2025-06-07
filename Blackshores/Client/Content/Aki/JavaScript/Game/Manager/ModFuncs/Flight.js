'use strict';

const p = q;
function q(b, a) {
  const e = k();
  q = function (d, f) {
    d = d - 312;
    let b = e[d];
    return b;
  };
  return q(b, a);
}
(function (b, f) {
  const c = q;
  const d = b();
  while (true) {
    try {
      const b = -parseInt(c(319)) / 1 * (parseInt(c("0x14e")) / 2) + parseInt(c("0x173")) / 3 * (parseInt(c("0x172")) / 4) + -parseInt(c(373)) / 5 + -parseInt(c(348)) / 6 * (parseInt(c("0x168")) / 7) + -parseInt(c("0x14a")) / 8 + parseInt(c("0x16b")) / 9 * (-parseInt(c("0x163")) / 10) + parseInt(c("0x178")) / 11 * (parseInt(c("0x146")) / 12);
      if (b === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(k, 815010);
const a = {
  [p("0x145")]: true
};
Object["defineProp" + p(362)](exports, p(333), a);
exports[p(369)] = undefined;
const b = require("ue");
const r = require("./EntityManager");
const e = require("../Utils/ModUtils");
const f = require("../ModManager");
const g = require("../../NewWorld/Character/Common/Component/Move/CustomMovementDefine");
const h = require("../ListComponent");
const i = require("./buffMethod");
const c = require("puerts");
const d = {
  [p("0x13b") + "ight"]: 640012028,
  soaring: 7000000000
};
const j = {};
function k() {
  const b = ["HasTag", "settings", "8131024UJEfAL", "SOAR", "EntityMana", "htMode", "Xte", "AddBuffReq", "onEvade", "infiniteFl", "CharacterM", "IsInGame", "flightMode", "26PItBXB", "ovement", "error", "isHasBuffF", "buffMethod", "RoleTag", "value", "24DpLufE", "tMode", "Add buff f", "Add tag fl", "125336HmdVOA", "setFlightM", "hasBuff", "__esModule", "49336rwEaUU", "ight mode", "htState", "allowFligh", "Remove buf", "GetCompone", "Log", "CUSTOM_MOV", "onFlight", "tagId", "ode", "ModManager", "buffIds", "ntity", "234WctJQR", "RemoveBuff", "ModUtils", "Component", "uest", "Request", "soaring", "28150FDmtUB", "applyBuff", "timerApply", "ger", "listenFlig", "15687FLJQuq", "light", "erty", "783kwEYRu", "EMENTMODE_", "Buff", "toggleFlig", "GetPlayerE", "AddTag", "Flight", "3556940myxypW", "3WZUVrM", "ight", "2816270RMMoHc"];
  k = function () {
    return b;
  };
  return k();
}
j[p("0x151") + "t"] = 1151923109;
j.onFlight = -2027866845;
j.climbing = 504239013;
j[p(314)] = -1800191060;
class l {
  static [p(357) + p("0x16d")] = null;
  static [p(346)] = d;
  static [p(343)] = j;
  static [p("0x142") + p("0x169")]() {
    const a = p;
    return i[a("0x143")][a(332)](this[a(346)][a("0x13b") + a(372)]);
  }
  static setFlightMode(a) {
    const b = p;
    if (!e[b("0x15e")][b("0x13d")]()) {
      return;
    }
    if (!i[b("0x143")][b("0x14c")](this[b(346)][b("0x162")])) {
      i[b("0x143")]["AddBuffReq" + b(352)](this.buffIds.soaring);
    }
    const c = r["EntityMana" + b("0x166")][b("0x16f") + b("0x15b")]()?.[b("0x153") + "nt"](h[b("0x15f")][b("0x13c") + b(320)]);
    if (!c) {
      return;
    }
    if (a) {
      c[b(316) + b("0x140")].SetMovementMode(6, g[b(341) + b("0x16c") + b("0x179")]);
    } else {
      c[b(316) + b("0x140")]["SetMovemen" + b("0x147")](3, 0);
    }
  }
  static [p(366) + p("0x17b")]() {
    const a = p;
    const b = r[a("0x17a") + a(358)][a(367) + a(347)]().GetComponent(h[a("0x15f")][a(324)]);
    if (!b) {
      return;
    }
    if (b[a("0x176")](this.tagId.onEvade)) {
      b.RemoveTag(this[a(343)][a(314)]);
    }
    if (b[a("0x176")](this.tagId[a("0x156")])) {
      return this[a(331) + a("0x158")](false);
    } else {
      return this[a("0x14b") + a(344)](true);
    }
  }
  static [p(359) + p(336)]() {
    const g = p;
    try {
      const b = r["EntityMana" + g(358)][g(367) + g("0x15b")]();
      if (!b) {
        return;
      }
      const a = b[g(339) + "nt"](h[g("0x15f")][g("0x144")]);
      let c = b[g(339) + "nt"](h[g("0x15f")].GlideComp);
      if (this[g(322) + g(361)]() && f.ModManager[g(375)].flightMode && a[g(374)](this[g("0x157")].allowFlight)) {
        return;
      }
      if (f[g(345)][g(375)][g("0x13e")]) {
        if (!c.Xte) {
          c[g(312)] = r[g(378) + "ger"][g("0x16f") + g("0x15b")]().GetComponent(h[g("0x15f")][g(324)]);
        }
        if (!a[g(374)](this.tagId[g("0x151") + "t"])) {
          e[g(350)][g(340)](g("0x149") + g(335));
          a[g(368)](this.tagId[g(337) + "t"]);
        }
        if (!this[g(322) + "light"]()) {
          this.applyBuff(true);
        }
      } else if (this[g(322) + g(361)]()) {
        this[g("0x164")](false);
      }
    } catch (b) {
      e.ModUtils.Log(b, g("0x141"));
    }
  }
  static [p("0x164")](a) {
    const b = p;
    if (a) {
      i[b("0x143")][b(313) + "uest"](this[b("0x15a")][b("0x13b") + b("0x174")]);
      e.ModUtils[b("0x154")](b("0x148") + "light!");
    } else {
      i[b("0x143")][b(349) + b(353)](this[b("0x15a")][b("0x13b") + b("0x174")]);
      e[b(350)][b("0x154")](b("0x152") + "f flight!");
    }
  }
}
exports[p(369)] = l;