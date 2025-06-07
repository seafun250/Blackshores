'use strict';

function C(a, b) {
  const d = E();
  C = function (e, f) {
    e = e - 135;
    let b = d[e];
    return b;
  };
  return C(a, b);
}
const D = C;
(function (a, b) {
  const c = C;
  const d = a();
  while (true) {
    try {
      const e = -parseInt(c(239)) / 1 + -parseInt(c(184)) / 2 + parseInt(c(159)) / 3 + -parseInt(c(144)) / 4 + parseInt(c(158)) / 5 + parseInt(c(252)) / 6 * (-parseInt(c("0xb3")) / 7) + -parseInt(c("0xaf")) / 8 * (-parseInt(c(236)) / 9);
      if (e === b) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(E, 128748);
const a = {};
function E() {
  const b = ["FightReque", "Log", " or higher", "nceControl", "isAllowed", " Geochelon", "enter dung", "ModelManag", "al)", "ance", "title", "51644GFGpek", "ngeonEntra", "Inferno Ri", "ShowConfir", "desc", "vel", "nk ", "get level ", "rld", "tanceIdLis", "Dirge (Tri", "ce Id: ", "ngeonContr", "rip)", "446505VUCqZg", "393819QdfnCj", "currDungeo", "CurWorldLe", "Dungeon", "e (Trial)", "Flaming Re", " to access", "ModUtils", "Failed to ", "mBox", " dungeon.", "rial)", "wning Ligh", "etalic Dri", "Dungeon | ", "nId", "40luxtOu", "Model", "Mourning A", "ler", "1559817fLEdxZ", "elix)", "ShowTip", "EnterInsta", "Controller", "379000cksEhi", "nceUnlock", "Fallacy of", "Lorelei (T", "PrewarTeam", "ises Bloom", "3 Phase Ra", "GetLastIns", " this dung", "EnterEntra", "msg", "t (When Ir", "Entrance", "error", "ix (Trial)", " (Trial)", "CheckInsta", "length", "IsInGameWo", "Holder", "state", "dungeonLis", "GetSortedE", "name", "nce dungeo", "ger", "instance", "IsInstance", "Entity", "Salvation ", "struct (Tr", "ist", "Enter Inst", "SceneTeamM", "eon", "GetCurrent", "(Metalic D", "You must a", "Instance", "isCanEnter", "nceModel", "e world", "mmnants (M", "GetTeamRol", "nName", "Unlock", "minSol", "tanceLevel", "Lampylumen", "Residue)", "InstanceDu", "eon, pleas", "609831WLqHvS", "der (Trial", "ngeon", "5379KKYxnw", "defineProp", "hasLevelIn", "erty", "e enter th", "quickEnter", "stance", "nce", "WorldLevel", "isHasLevel", "minSOL", "EntityMana", "Sentry Con", "6IsxBUv", "Weekly: Da"];
  E = function () {
    return b;
  };
  return E();
}
a.value = true;
Object[D(240) + D(242)](exports, "__esModule", a);
exports[D(162)] = undefined;
const b = require("puerts");
const e = require("../Utils/ModUtils");
const c = require("../../ModMenu");
const d = require("./EntityManager");
const f = require("../ModelManager");
const g = require("../ModManager");
const h = require("../Utils/UI");
const i = require("../Utils/Logger");
const j = require("../ControllerHolder");
const k = {};
k[D(207)] = "Abyss of Initiation (Andante H" + D("0xb4");
k.id = 303000;
k[D(230)] = 3;
const l = {};
l[D(207)] = D(164) + D(226) + D("0xac") + "p)";
l.id = 301000;
l[D(230)] = 3;
const m = {};
m[D(207)] = "Garden of " + D("0xd5") + D("0xdc") + D("0x9d");
m.id = 306000;
m[D(230)] = 3;
const n = {};
n[D(207)] = "Garden of Adoration (Waveworn " + D(233);
n.id = 307000;
n[D("0xe6")] = 3;
const o = {};
o[D(207)] = D(253) + D(171) + D(195) + D(189) + ")";
o.id = 2061;
o[D(230)] = 2;
const p = {};
p[D(207)] = "Bell-Borne" + D(138) + D("0xa3");
p.id = 1101001;
p.minSol = 1;
const q = {};
q[D(207)] = D("0xfb") + D(214) + "ial)";
q.id = 1101002;
q.minSol = 1;
const r = {};
r[D("0xcf")] = D("0xbb") + D("0xaa");
r.id = 1101003;
r.minSol = 1;
const s = {};
s.name = D("0xb1") + D(198);
s.id = 1101004;
s.minSol = 1;
const t = {};
t[D("0xcf")] = D(232) + " Myriad (T" + D("0xaa");
t.id = 1101005;
t.minSol = 1;
const u = {};
u[D(207)] = "Dragon of " + D("0x9a") + D("0x8d");
u.id = 1101006;
u[D(230)] = 1;
const v = {};
v[D(207)] = D(146) + D("0xed") + ")";
v.id = 1101007;
v[D("0xe6")] = 1;
const w = {};
w[D("0xcf")] = D(186) + " No Return" + D("0xc7");
w.id = 1101008;
w.minSol = 1;
const x = {
  [D(160) + D(228)]: null,
  [D("0xa0") + "nId"]: -1,
  [D("0xf1") + D(245)]: false,
  isAllowed: false,
  minSOL: 2,
  [D("0xdf")]: true
};
class y {
  static dungeonLists = [k, l, m, n, o, p, q, r, s, t, u, v, w];
  static [D(204)] = x;
  static async [D(193) + D("0xf6")](b) {
    const d = D;
    try {
      await j[d("0xb7") + d(203)][d("0xea") + d("0x91") + d("0x88") + d("0xb2")][d("0xc1") + d(246)](b);
    } catch (b) {
      e[d("0xa6")].Log(b, d("0xc5"));
    }
  }
  static onSelectedDungeon(b) {
    const d = D;
    try {
      if (b < 0) {
        return;
      }
      this[d(204)][d(160) + d(228)] = this[d("0xcd") + "ts"][b].name;
      this.state[d("0xa0") + d(174)] = this[d(205) + "ts"][b].id;
      this.state[d(241) + d("0xf5")] = this["isHasLevel" + d(222)](this[d(205) + "ts"][b].id);
      this[d(204)][d("0xf9")] = this[d(248) + d(222)](this[d(205) + "ts"][b].minSol);
      this.state[d(137)] = Boolean(f.ModelManager[d(247) + d("0xb0")][d("0xa1") + d(149)] >= this[d("0xcd") + "ts"][b][d("0xe6")]);
    } catch (b) {
      e.ModUtils[d(255)](b, d("0xc5"));
    }
  }
  static async [D("0xb6") + D("0xf6")](g, a) {
    const c = D;
    try {
      if (!g || !a) {
        return;
      }
      const d = f[c("0x8c") + "er"][c(217) + "odel"][c("0xe3") + "eConfigIdL" + c(215)]();
      await j[c("0xb7") + c("0xcb")][c(234) + c(156) + "oller"][c("0xbc") + c("0xfe") + "st"](a, d, g);
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        const b = c;
        this.state[b(223)] = true;
      }, 3000);
      e[c("0xa6")].Log(c("0xd8") + c("0x8e"));
    } catch (b) {
      e.ModUtils[c("0xff")](b, "error");
    }
  }
  static [D(211) + D("0xe5")](b = null) {
    const a = D;
    return f[a(140) + "er"]["InstanceDu" + a("0x91") + a(224)][a(200) + "nceUnlock"](b);
  }
  static [D(191) + D(231)](g) {
    const h = D;
    try {
      const c = f[h(140) + "er"]["InstanceDu" + h(145) + h("0xe0")][h(206) + "ntranceIns" + h("0x99") + "t"](g);
      if (!c || c[h("0xc9")] === 0) {
        return;
      }
      let b = null;
      for (let d = c[h("0xc9")] - 1; d >= 0; d--) {
        if (f[h("0x8c") + "er"][h(234) + h(145) + h(224)][h("0xc8") + h("0xb9")](c[d])) {
          b = c[d];
          e[h(166)][h(255)]("Unlocked last instan" + h(155) + b);
          break;
        }
      }
      return b;
    } catch (c) {
      const a = {};
      a[h(194)] = h("0xa7") + h(151) + h("0xd2");
      a[h("0xc5")] = c;
      e[h(166)][h("0xff")](a, "error");
    }
  }
  static [D(244) + D(234) + D("0xee")](f) {
    const g = D;
    try {
      if (!e[g("0xa6")].IsInGameWorld() || !this[g(204)][g(223)] || !d[g("0xfa") + g("0xd1")][g(219) + g("0xd4")]()) {
        h.UI[g(181)]("Failed to " + g(139) + g(218));
        e[g(166)][g(255)](g(167) + g(139) + g(218), "error");
        return;
      }
      if (!f || isNaN(f)) {
        return;
      }
      if (!this[g(204)].isAllowed) {
        const b = {
          id: 50
        };
        b[g("0x8f")] = g("0xad") + this.state["currDungeo" + g("0xe4")];
        b[g("0x94")] = g("0xdd") + "chieve SOL3 Phase Ra" + g("0x96") + this[g(204)][g(249)] + (g(135) + g("0xa5") + g(169));
        return h.UI[g(147) + "mBox"](b);
      }
      const a = this[g(191) + g("0xe7")](this.state["currDungeo" + g("0xae")]);
      if (!a) {
        const b = {
          id: 50
        };
        b[g("0x8f")] = g(173) + this[g(204)]["currDungeo" + g("0xe4")];
        b[g(148)] = g(221) + "chieve SOL" + g(190) + g(150) + this.state[g("0xf9")] + (g("0x87") + g(165) + g("0xc0") + "eon.");
        return h.UI["ShowConfir" + g("0xa8")](b);
      }
      this.state[g("0xdf")] = false;
      this[g(182) + g("0xf6")](this[g("0xcc")][g(160) + g("0xae")], a);
    } catch (c) {
      const a = {};
      a[g("0xc2")] = g(167) + "skip entra" + g(208) + "n";
      a[g("0xc5")] = c;
      e.ModUtils[g("0xff")](a, g(197));
    }
  }
  static [D(248) + D("0xde")](b) {
    const d = D;
    try {
      return Boolean(this[d("0xbf") + d(231)](b));
    } catch (b) {
      e[d(166)][d(255)](b, d("0xc5"));
      return false;
    }
  }
  static ["OnEntering" + D(196)](b) {
    const d = D;
    try {
      if (!e.ModUtils[d("0xca") + d(152)]() || !this.state[d("0xdf")]) {
        h.UI[d(181)](d("0xa7") + "enter dung" + d(235) + d("0xf3") + d("0xe1"));
        e[d(166)][d("0xff")]("Failed to " + d("0x8b") + "eon, pleas" + d(243) + d(225), "error");
        return;
      }
      this.EnterEntrance(b);
    } catch (b) {
      e.ModUtils[d(255)](b, d(197));
    }
  }
}
exports[D("0xa2")] = y;