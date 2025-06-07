'use strict';

const k = l;
(function (c, f) {
  const b = l;
  const d = c();
  while (true) {
    try {
      const c = -parseInt(b("0x1f7")) / 1 + parseInt(b("0x1e7")) / 2 + -parseInt(b(471)) / 3 * (-parseInt(b("0x1df")) / 4) + parseInt(b("0x1ec")) / 5 + parseInt(b("0x1e9")) / 6 * (-parseInt(b("0x1f5")) / 7) + -parseInt(b("0x1d2")) / 8 * (parseInt(b("0x1ef")) / 9) + -parseInt(b(493)) / 10;
      if (c === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(c, 480234);
const a = {
  [k("0x1e5")]: true
};
Object[k("0x1e0") + k("0x1d8")](exports, k(498), a);
exports.Logger = undefined;
function l(e, a) {
  const f = c();
  l = function (d, e) {
    d = d - 466;
    let b = f[d];
    return b;
  };
  return l(e, a);
}
const m = require("ue");
const d = require("./ModUtils");
const e = require("./ConfigManager");
const f = k(477) + "og";
const g = require("puerts");
class b {
  static SaveLogging(g, b) {
    const c = k;
    try {
      let h = "[" + d[c("0x1da")][c(497)]()[c(483)] + c("0x1e2") + g[c(490) + "e"]() + c("0x1d3") + b + "\n";
      let a = e[c("0x1d5") + c(484)][c("0x1d9")](f);
      m[c("0x1ee") + "Library"][c(470) + c("0x1dc")](a + h, e[c("0x1d5") + c("0x1e4")][c(488) + c("0x1e1")]() + f);
    } catch (b) {
      d[c("0x1da")].Log(b, c(468));
    }
  }
  static ClearLog() {
    const a = k;
    try {
      if (!e[a("0x1d5") + a("0x1e4")][a(473)](f)) {
        return;
      }
      m["KuroStatic" + a("0x1f3")][a("0x1d6") + a("0x1dc")]("", e[a(469) + "ger"][a("0x1e8") + a("0x1e1")]() + f);
    } catch (b) {}
  }
  static [k("0x1f0")](...a) {
    const b = k;
    this[b(475) + "g"](b("0x1f4"), a);
    g[b(486)][b("0x1d4")](...a);
  }
  static Info(...a) {
    const b = k;
    this[b(475) + "g"](b("0x1de"), a);
    g[b("0x1e6")].info(...a);
  }
  static [k("0x1eb")](...a) {
    const b = k;
    this.SaveLogging("SUCCESS", a);
    g[b(486)].log(...a);
  }
}
function c() {
  const b = ["value", "logger", "1444180RritZE", "LoadConfig", "6aIVYyT", "toUpperCas", "Success", "3234060TrbWBR", "11984290wOifzn", "KuroStatic", "90Wrlzzy", "Error", "getDate", "__esModule", "Library", "ERROR", "253029DjlxlK", "Logger", "72081CVDNRs", "235032vlDiOf", "] - ", "error", "ConfigMana", "SaveString", "49659NkIzmR", "erty", "GetConfig", "ModUtils", "SaveLoggin", "ToFile", "WavesMod.l", "INFO", "172aHVRuO", "defineProp", "Dir", "] [", "date", "ger"];
  c = function () {
    return b;
  };
  return c();
}
exports[k(502)] = b;