'use strict';

const k = l;
(function (b, f) {
  const c = l;
  const d = b();
  while (true) {
    try {
      const b = -parseInt(c(191)) / 1 + parseInt(c(205)) / 2 * (-parseInt(c(201)) / 3) + parseInt(c("0xb4")) / 4 + -parseInt(c(167)) / 5 * (-parseInt(c(208)) / 6) + parseInt(c(170)) / 7 + parseInt(c(188)) / 8 + -parseInt(c("0xa4")) / 9 * (parseInt(c(203)) / 10);
      if (b === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(b, 231009);
function l(d, a) {
  const f = b();
  l = function (d, e) {
    d = d - 161;
    let b = f[d];
    return b;
  };
  return l(d, a);
}
const a = {};
function b() {
  const c = ["velPlayNam", "TypeIdName", "1051865eFLUFH", "eDungeonIn", "ame_0_4", "1207416FyoBwe", "2900002_Le", "UnkownType", "ntroller", "Dungeon", "291800007_", "dungeonIlu", "value", "isInTower", "RogueA_1.1", "1692944GqwXtk", "IsInInstan", "siveRealm", "LevelPlay_", "TowerModel", "GetInstanc", "nfig", "includes", "1130176yJYzgL", "isInIlusiv", "eRealm", "221664SAqAeU", "IdName", "CheckInTow", "ngeonModel", "InfoConfig", "DungeonGam", "riskDungeo", "eplay", "Holder", "ModelManag", "57MbwhER", "UnkownDung", "1314340zXXKtA", "isInDungeo", "5042pyxGYo", "getDungeon", "TidName", "12zUNzAk", "erty", "Controller", "InstanceDu", "ter", "e_2_1", "DungeonFil", "eDungeonCo", "45yTwpQw"];
  b = function () {
    return c;
  };
  return b();
}
a[k("0xb1")] = true;
Object["defineProp" + k(209)](exports, "__esModule", a);
exports[k("0xa2") + k("0xd4")] = undefined;
const c = require("puerts");
const d = require("../ModelManager");
const e = require("../ControllerHolder");
const f = require("ue");
const g = {
  id: 2900002
};
g.en_name = k("0xb3") + "主控";
g.TidName = k("0xb7") + k("0xab") + k("0xa5") + k(161);
g.type = k(174);
class h {
  static [k(196) + k("0xc6")] = [];
  static [k("0xb0") + k(182)] = g;
  static [k("0xc5") + "nList"] = ["LevelPlay_" + k("0xaf") + "LevelPlayN" + k(169)];
  static [k(206) + "InfoConfig"]() {
    const a = k;
    try {
      return d[a(200) + "er"][a("0xd3") + a("0xc2")][a(185) + a(168) + "fo"]()[a(185) + a(163) + a("0xba")]();
    } catch (b) {}
  }
  static getDungeonType() {
    const c = k;
    try {
      let b = this[c("0xce") + "InfoConfig"]();
      return b.Type;
    } catch (b) {
      return c("0xca") + "eonType";
    }
  }
  static [k("0xce") + k("0xa6")]() {
    const c = k;
    try {
      let b = this["getDungeon" + c(195)]();
      return b[c(207)];
    } catch (b) {
      return c("0xac") + c(192);
    }
  }
  static [k(204) + "nFilter"](a) {
    const b = k;
    if (!Array.isArray(a)) {
      return false;
    }
    if (!this[b(181) + "ce"]()) {
      return false;
    }
    return a.includes(this["getDungeon" + b("0xa6")]());
  }
  static [k("0xb5") + "ce"]() {
    const a = k;
    try {
      return e[a(210) + a(199)]["GameModeCo" + a(173)][a(181) + "ce"]();
    } catch (b) {
      return false;
    }
  }
  static [k("0xbd") + k("0xbe")]() {
    const a = k;
    if (!this.IsInInstance()) {
      return false;
    }
    return this["dungeonIlu" + a("0xb6")][a("0xcf")][a(187)](this[a("0xce") + a(166)]());
  }
  static [k(178)]() {
    const a = k;
    try {
      return d.ModelManager[a("0xb8")][a(193) + "er"]();
    } catch (b) {
      return false;
    }
  }
  static [k(204) + "n"]() {
    const a = k;
    return this[a(181) + "ce"]();
  }
}
exports[k(162) + k("0xd4")] = h;