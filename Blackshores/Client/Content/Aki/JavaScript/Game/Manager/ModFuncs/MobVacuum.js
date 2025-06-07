'use strict';

function o() {
  const a = ["EnableMove", "Entity", "push", "TimerSyste", "SyncMonste", "16BJanoF", "ons", "561613IsPuvz", "61854VuZHki", "ActorInter", "2785363TqOxGE", "ModUtils", "ect", "fos", "nent InFig", "Location", "__esModule", "ntType2", "ger", "nal", "SetEnableM", "origPositi", "MonsterBeh", "ovementSyn", "orwardVect", "ModManager", "652378LlmmFy", "erty", "VacuumRadi", "6UGQFQE", "e2Player", "Forever", "settings", "1mDBxxA", "GetPlayerP", "create", "K2_SetActo", "rLocation", "144Tktdlx", "EchoVacuum", "GetCurrent", "GetPositio", "Getdistanc", "mentSync", "MoveSample", "isMonster", "Remove", "GetCompone", "Aki", "862675NvXrwp", "MobVacuum", "isIndistan", "EntityMana", "CollectPen", "isneedLoot", "GetPlayerF", "8StxPQN", "592465PJfJlq", "10NpqGFN", "Protocol", "PendingMov", "VacuumColl", "EntityFilt", "dingMoveIn", "1416096DPjLjk", "WRs"];
  o = function () {
    return a;
  };
  return o();
}
const p = q;
(function (c, f) {
  const b = q;
  const d = c();
  while (true) {
    try {
      const c = -parseInt(b(484)) / 1 * (-parseInt(b(477)) / 2) + -parseInt(b(525)) / 3 * (parseInt(b("0x20a")) / 4) + -parseInt(b(508)) / 5 * (parseInt(b(480)) / 6) + parseInt(b(461)) / 7 * (parseInt(b("0x1fb")) / 8) + parseInt(b("0x203")) / 9 + parseInt(b(509)) / 10 * (parseInt(b("0x1f4")) / 11) + parseInt(b("0x1e9")) / 12 * (-parseInt(b("0x20c")) / 13);
      if (c === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(o, 240490);
function q(a, b) {
  const d = o();
  q = function (e, f) {
    e = e - 460;
    let b = d[e];
    return b;
  };
  return q(a, b);
}
const a = {
  value: true
};
Object["defineProp" + p(478)](exports, p("0x1d3"), a);
exports.MobVacuum = undefined;
const b = require("puerts");
const c = require("ue");
const r = require("../ModManager");
const g = require("../Utils/ModUtils");
const h = require("../../../Core/Define/Net/Protocol");
const s = require("../../../Core/Timer/TimerSystem");
const d = require("../../../Core/Net/Net");
const e = require("./EntityManager");
const f = require("./EntityFilter");
class i extends e[p(503) + p(469)] {
  static [p("0x1f6") + "ce"](b) {
    const a = p;
    let c = this[a(492) + "n"](b[a(518)]);
    let d = g[a(462)][a("0x1ed") + a("0x1e1")](c);
    if (d < r[a(476)].settings[a(479) + "us"] * 100) {
      return true;
    } else {
      return false;
    }
  }
  static [p("0x1d8") + p(523)] = {};
  static async [p("0x1f5")](h) {
    const a = p;
    if (!r[a("0x1dc")].settings[a("0x1f5")]) {
      return;
    }
    let b = h[a(518)].GetComponent(1);
    if (!b) {
      return;
    }
    if (!b.ActorInternal) {
      return;
    }
    if (this[a(496)](h) && this[a(502) + "ce"](h)) {
      const c = h[a(518)].Id;
      if (!(c in this[a("0x1d8") + "ons"])) {
        let b = this[a(492) + "n"](h[a(518)]);
        if (!b.X) {
          return;
        }
        this.origPositions[c] = b;
      }
      let b = null;
      let d = 0;
      let e = 5;
      b = s[a("0x208") + "m"][a(482)](() => {
        const f = a;
        if (!h[f(518)] || d > e) {
          s.TimerSystem[f(497)](b);
          return;
        }
        d++;
        let i = g[f(462)][f(493) + f(481)](this[f(492) + "n"](h[f("0x206")]));
        if (i < 500) {
          s[f(520) + "m"][f(497)](b);
          return;
        }
        let j = this[f(485) + "os"]();
        let k = g[f("0x1ce")][f(493) + "e"](this[f("0x1d8") + f("0x20b")][c], j);
        if (k > r[f("0x1dc")][f(483)][f(479) + "us"] * 100) {
          s[f(520) + "m"].Remove(b);
          return;
        }
        if (!this[f("0x1f6") + "ce"](h)) {
          s[f(520) + "m"].Remove(b);
          return;
        }
        j.Z += 100;
        let l = this[f(506) + f(475) + "or"]();
        j.X = j.X - l.X * 200;
        j.Y = j.Y - l.Y * 200;
        let m = h[f("0x206")].GetComponent(1);
        m[f(460) + f(470)][f("0x1e7") + f("0x1e8")](j);
        this[f(521) + "r"](h, j);
      }, 333);
    }
  }
  static async ["VacuumColl" + p("0x1cf")](e) {
    const a = p;
    if (!r[a("0x1dc")][a(483)][a("0x200") + a(463)]) {
      return;
    }
    if (f[a("0x201") + "er"][a(505)](this["GetBluepri" + a("0x1d4")](e)) && this[a(502) + "ce"](e)) {
      let c = this[a("0x1e5") + "os"]();
      let b = e.Entity[a(498) + "nt"](1);
      if (b[a("0x1cc") + "nal"]) {
        b[a("0x1cc") + a("0x1d6")][a(487) + a(488)](c);
      }
    }
  }
  static async EchoVacuum(f) {
    const a = p;
    if (!r[a(476)][a("0x1e3")][a("0x1ea")]) {
      return;
    }
    if (e["EntityMana" + a("0x1d5")].isVision(f) && this[a(502) + "ce"](f)) {
      let c = this[a("0x1e5") + "os"]();
      let b = f[a("0x206")][a(498) + "nt"](1);
      if (b[a(460) + a("0x1d6")]) {
        b[a(460) + a("0x1d6")][a(487) + "rLocation"](c);
      }
    }
  }
  static [p("0x209") + "r"](b, a) {
    const c = p;
    var d = b.Entity[c("0x1f2") + "nt"](60);
    if (!d[c(517) + "mentSync"]) {
      d[c("0x1d7") + c("0x1da") + "c"](true, c("0x1d9") + "aviorCompo" + c(465) + "ht");
      d[c("0x205") + c(494)] = true;
    }
    var e = d[c(491) + c(495)]();
    e[c("0x1d2")] = a;
    d[c(511) + "eInfos"][c(519)](e);
    var f = h[c(499)][c(510)].Yus[c(486)]();
    f[c("0x204")][c(519)](d[c("0x1f8") + c("0x202") + c(464)]());
  }
}
exports[p(501)] = i;