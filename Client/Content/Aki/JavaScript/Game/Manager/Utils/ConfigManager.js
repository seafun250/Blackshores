'use strict';

const i = j;
(function (c, f) {
  const b = j;
  const d = c();
  while (true) {
    try {
      const c = parseInt(b("0x12b")) / 1 + -parseInt(b(285)) / 2 + -parseInt(b("0x11c")) / 3 + parseInt(b("0x126")) / 4 + -parseInt(b(280)) / 5 * (-parseInt(b(286)) / 6) + -parseInt(b(300)) / 7 * (-parseInt(b(283)) / 8) + parseInt(b("0x128")) / 9;
      if (c === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(c, 772102);
const a = {
  value: true
};
Object[i(291) + i(308)](exports, i(287), a);
exports[i(297) + i(306)] = undefined;
function j(d, a) {
  const f = c();
  j = function (d, e) {
    d = d - 275;
    let b = f[d];
    return b;
  };
  return j(d, a);
}
function c() {
  const b = ["saved_conf", "Dir", "ger", "ig.json", "erty", "gExists", "logger", "BlueprintP", "athsLibrar", "LoadFileTo", "612515uiDIKV", "Failed to ", "FileExists", "18144wfeZXw", "2205498aPyRqt", "2156282HmeUrv", "12rLVIOO", "__esModule", "$ref", "parse JSON", "Library", "defineProp", "Binaries/W", "error", "954648axOorg", "$unref", "13095972dQeweF", "ConfigMana", "KuroStatic", "333649lAtlJf", "966bdYcjr", "LoadConfig", "in64/", "CheckConfi"];
  c = function () {
    return b;
  };
  return c();
}
const k = require("ue");
const e = i("0x130") + i(307);
const l = require("puerts");
class b {
  static [i(303) + i(275)](a) {
    const b = i;
    const c = k["BlueprintP" + b(278) + "y"][b(282)](this[b("0x12d") + b("0x131")]() + a);
    return c;
  }
  static ["LoadConfig" + i("0x131")]() {
    const f = i;
    const a = k[f("0x115") + f("0x116") + "y"].ProjectDir() + (f(292) + f("0x12e"));
    let b = l[f("0x120")]("");
    k[f(298) + f("0x122")][f("0x117") + "String"](b, a + e);
    let c = l[f(295)](b);
    try {
      let b = JSON.parse(c);
      return b.launcherPath;
    } catch (b) {
      l[f("0x114")][f(293)](f("0x119") + f(289) + ":", b);
      return null;
    }
  }
  static GetConfig(a) {
    const b = i;
    const c = this[b(301) + b("0x131")]();
    let d = l[b("0x120")]("");
    k[b(298) + b("0x122")].LoadFileToString(d, c + a);
    let e = l[b(295)](d);
    return e;
  }
}
exports[i("0x129") + i("0x132")] = b;