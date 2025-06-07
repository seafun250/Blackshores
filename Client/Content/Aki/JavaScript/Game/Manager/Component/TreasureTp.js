'use strict';

const s = t;
(function (b, f) {
  const c = t;
  const d = b();
  while (true) {
    try {
      const b = -parseInt(c("0x148")) / 1 + -parseInt(c(337)) / 2 + parseInt(c("0x12a")) / 3 + parseInt(c(254)) / 4 + -parseInt(c("0xff")) / 5 + parseInt(c("0x10f")) / 6 + parseInt(c(291)) / 7;
      if (b === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(b, 115872);
function t(c, a) {
  const d = b();
  t = function (e, f) {
    e = e - 245;
    let b = d[e];
    return b;
  };
  return t(c, a);
}
function b() {
  const c = ["GetCompone", "Component", "Treasure", "nal", "GetDistanc", "MainMenu", "ext", "World", "SetColorAn", "ger", "ayerDistan", "SetVisibil", "160265pZwvRh", "teleport", "BaseActor", "floor", "length", "tyTreasure", "SetInforma", "TeleportTo", "LinearColo", "346342YBxuto", "CreateWidg", "Empty", "OnClicked", "CustomTp", "AddToViewp", "getPositio", "UpdatePosi", "ChestNameT", "isWithinPl", "rfaceChest", "262520XlkBSS", "1023715vQOleo", "stem", "defineProp", "Add", "nceText", "GlobalData", "error", "ResourceSy", "VISIBILITY", "dOpacity", "tInvisible", "isWidgetLo", "ModManager", "TreasureWi", "tionTreasu", "ChestDista", "682974HSvrqb", "Teleport", "Error", "Unknown", "nNearest", "Logger", "Success", "InitAction", "ActorInter", "EntityMana", "easure", "dget", "SetText", "eFromPlaye", "Entity", "position", "Class", "Overlay", "Treasure r", "SlateColor", "1707972XoAIrU", "name", "est.Telepo", "endered!", "filter", "aded", "SetEmptyTr", "691788KKDjaO", "RenderInte", "GetBluepri", "TeleportCh", "ntities fo", "GetAllEnti", "rLocation", "onTick", "estBtn", "settings", "K2_GetActo", "__esModule", "/Game/Aki/", "ort", "value", "sfxMod", "TreasureTp", "range"];
  b = function () {
    return c;
  };
  return b();
}
const a = {
  [s(312)]: true
};
Object[s(257) + "erty"](exports, s("0x135"), a);
exports[s(314)] = undefined;
const c = require("puerts");
const u = require("ue");
const d = require("../../GlobalData");
const e = require("../Utils/ModUtils");
const f = require("../Utils/Logger");
const g = require("../ModMenuDefine");
const j = require("../ListComponent");
const h = require("../ModFuncs/CustomTp");
const i = require("../../ModMenu");
const k = require("../ModManager");
const l = require("../ModFuncs/Keybind/KeybindController");
const m = require("../ModFuncs/EntityManager");
const n = require("../../../Core/Resource/ResourceSystem");
class o {
  constructor() {
    // TOLOOK
    // TOLOOK
    setTimeout(() => {
      const b = t;
      this[b(299) + b("0xfd")]();
    }, 1500);
  }
  [s(299) + s("0xfd")]() {
    const h = s;
    try {
      if (!o.isWidgetLoaded) {
        o[h("0x10c") + "dget"] = u.UMGManager[h("0x152") + "et"](d[h(260)][h("0x143")], n[h(262) + h("0x100")].Load(h("0x136") + h("0x12d") + h(293) + "rtChest_C", u[h(287)]));
        o[h(266) + h(296)] = true;
      }
      if (o[h(266) + "aded"]) {
        o[h(268) + h(282)][h(248) + h(311)](4);
        if (k[h("0x10b")][h("0x133")][h(314) + h(288)]) {
          o["TreasureWi" + h(282)].SetVisibility(g[h("0x107")]["SelfHitTes" + h(265)]);
        } else {
          o[h(268) + h("0x11a")][h("0x147") + "ity"](g[h("0x107")].Hidden);
        }
        o[h(268) + h(282)][h("0xfb") + h("0x142")][h("0x11b")](h("0xf5"));
        o.TreasureWidget[h("0x10e") + "nceText"][h(283)](h(245));
        let b = new u.LinearColor(1, 1, 0, 1);
        let a = new u[h("0x122")](b);
        o[h(268) + "dget"][h("0xfb") + h(322)][h(324) + "dOpacity"](a);
        o[h(268) + h(282)]["ChestDista" + h(259)][h("0x144") + h(264)](a);
        o[h("0x131")]();
        o["InitAction" + h("0x110")]();
        f[h("0x114")][h("0x115")](h(289) + h("0x126"));
      }
    } catch (b) {
      e.ModUtils.Log(b, h("0x105"));
    }
  }
  static [s("0x10c") + s(282)] = null;
  static [s(266) + s(296)] = false;
  static [s("0x11e")] = {
    x: null,
    y: null,
    z: null
  };
  static [s(305)]() {
    // TOLOOK
    // TOLOOK
    setInterval(() => {
      const b = t;
      this[b("0xfa") + b("0x10d") + "re"]();
    }, 1500);
  }
  static [s(249) + s(275)](a) {
    const k = s;
    try {
      let c = null;
      let h = null;
      let d = null;
      let e = Infinity;
      for (let a of a) {
        if (!a || !a.Entity) {
          continue;
        }
        const f = m[k(280) + k(325)].GetEntityLocation(a[k(285)]);
        if (!f) {
          continue;
        }
        let b = a[k("0x11d")][k("0x13c") + "nt"](j[k("0x13d")][k("0x14a")])[k(279) + k("0x13f")][k(308) + k("0x130")]();
        let g = m[k(280) + k("0x145")][k(320) + k("0x11c") + "r"](b);
        if (g < e) {
          e = g;
          c = {
            X: Math[k("0x14b")](f.X),
            Y: Math[k("0x14b")](f.Y) + 200,
            Z: Math[k(331)](f.Z) + 200
          };
          h = m[k(280) + k("0x145")][k("0x12c") + "ntType2"](a);
          d = g;
        }
      }
      if (e === Infinity) {
        f[k("0x114")][k("0x111")]("No valid e" + k("0x12e") + "und near player.");
        const b = {
          [k("0x11e")]: {
            X: 0,
            Y: 0,
            Z: 0
          }
        };
        b.name = k("0x112");
        b.range = 0;
        return b;
      }
      const b = {
        [k(286)]: c,
        [k("0x124")]: h,
        [k(315)]: d
      };
      return b;
    } catch (c) {
      f[k("0x114")].Error(c);
      const a = {
        [k("0x11e")]: {
          X: 0,
          Y: 0,
          Z: 0
        },
        [k(292)]: "Unknown",
        [k(315)]: 0
      };
      return a;
    }
  }
  static [s(250) + "tionTreasure"]() {
    const g = s;
    try {
      const b = m[g("0x118") + "ger"][g(303) + g("0x14d")]();
      if (!b || b[g("0x14c")] === 0) {
        return this[g(297) + "easure"]();
      }
      const a = b[g(295)](b => b[g("0x11d")] && m[g(280) + g("0x145")][g(252) + g("0x146") + "ce"](300, b));
      if (a[g(332)] === 0) {
        return this[g("0x129") + g(281)]();
      }
      const c = this[g(249) + g(275)](a);
      if (!c) {
        return this[g("0x129") + g("0x119")]();
      }
      const d = {
        [g("0x124")]: c.name
      };
      d[g("0x13b")] = c[g(315)];
      d[g(286)] = c[g("0x11e")];
      this[g("0x14e") + g(269) + "re"](d);
    } catch (b) {
      f.Logger[g(273)](b);
    }
  }
  static [s(297) + "easure"]() {
    const d = s;
    try {
      o[d(286)] = {
        x: 0,
        y: 0,
        z: 0
      };
      o.TreasureWidget["ChestNameT" + d(322)][d(283)](d("0xf5"));
      o[d(268) + d("0x11a")].ChestDistanceText[d("0x11b")]("Empty");
      let b = new u.LinearColor(1, 1, 0, 1);
      let a = new u[d("0x122")](b);
      o[d(268) + "dget"].ChestNameText[d(324) + "dOpacity"](a);
      o[d("0x10c") + "dget"]["ChestDista" + d(259)].SetColorAndOpacity(a);
    } catch (b) {
      f[d("0x114")][d("0x111")](b);
    }
  }
  static ["SetInforma" + s(269) + "re"]({
    name: i,
    range: b,
    position: c
  }) {
    const d = s;
    try {
      this[d(268) + "dget"][d(251) + d("0x142")][d(283)](i);
      this[d("0x10c") + "dget"][d("0x10e") + d("0x103")][d(283)](b + "m");
      const e = {
        x: c.X,
        y: c.Y,
        z: c.Z
      };
      o[d(286)] = e;
      let a = new u[d(336) + "r"](0, 1, 0, 1);
      let f = new u[d("0x122")](a);
      this[d(268) + d(282)][d(251) + "ext"][d(324) + d("0x108")](f);
      this[d("0x10c") + "dget"][d("0x10e") + d("0x103")][d(324) + d("0x108")](f);
    } catch (b) {
      f[d(276)][d(273)](b);
    }
  }
  static [s(278) + s(272)]() {
    const c = s;
    o[c("0x10c") + c("0x11a")]["TeleportCh" + c(306)][c("0xf6")][c("0x102")](() => {
      const b = c;
      i[b("0x141")][b("0x139")]();
      this[b("0x14f") + b(318)]();
    });
  }
  static [s(335) + "Treasure"]() {
    const a = s;
    if (o[a(286)].x !== 0 && o.position.y !== 0 && o[a(286)].z !== 0) {
      h[a(247)][a("0x149")](o[a("0x11e")]);
    }
  }
}
exports[s("0x13a")] = o;