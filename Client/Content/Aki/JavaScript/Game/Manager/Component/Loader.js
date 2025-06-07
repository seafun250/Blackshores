'use strict';

function l(a, b) {
  const d = n();
  l = function (e, f) {
    e = e - 315;
    let b = d[e];
    return b;
  };
  return l(a, b);
}
const m = l;
(function (a, b) {
  const c = l;
  const d = a();
  while (true) {
    try {
      const e = -parseInt(c(315)) / 1 * (-parseInt(c("0x148")) / 2) + -parseInt(c("0x142")) / 3 + -parseInt(c("0x15b")) / 4 * (parseInt(c(359)) / 5) + parseInt(c(326)) / 6 + -parseInt(c(341)) / 7 + parseInt(c("0x16f")) / 8 + parseInt(c(330)) / 9;
      if (e === b) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(n, 741680);
function n() {
  const b = ["LoaderWidg", "3303468cEDWwk", "aded", "GlobalData", "__esModule", "ProgressTe", "der_C", "4uotQTd", "ModUtils", "Log", "Initializi", "retryCount", "rval", "ProgressBa", "Load", "/Game/Aki/", "LoaderInte", "UMGManager", "ng mod men", "4784755kDokyu", "ity", "progress", "AddToViewp", "defineProp", "IncreasePr", "art.", "msg", "6593528WEBlSX", "erty", "SetPercent", "ing widget", "Loader sho", "value", "stem", "Loader.Loa", "9199bODhQY", "ogress", " Loader fa", "oaded!", "Loader", "maxRetries", "intervalPr", "333012sSQljH", "s reached.", "LoadingTex", "MainMenu", "8014854RLRsrl", "SetVisibil", "18FKXsTc", "rMod", "348912azZHEv", "Error load", "error", "World", "mod menu..", "isLoaderLo", "CreateWidg", "SetText", "iled to st", "ort"];
  n = function () {
    return b;
  };
  return n();
}
const a = {
  [m("0x174")]: true
};
Object[m("0x16b") + m(368)](exports, m(344), a);
exports.Loader = undefined;
const b = require("puerts");
const c = require("ue");
const d = require("../../GlobalData");
const e = require("../Utils/ModUtils");
const f = require("../../ModMenu");
const g = require("../../../Core/Resource/ResourceSystem");
class h {
  static [m("0x154") + "et"] = null;
  static ["isLoaderLo" + m("0x156")] = false;
  static [m("0x141") + m(316)] = null;
  static progress = 0;
  static retryCount = 0;
  static [m("0x140")] = 5;
  static async RenderLoader() {
    const i = m;
    if (!h[i("0x14f") + i("0x156")]) {
      try {
        h.LoaderWidget = c[i("0x165")][i(336) + "et"](d[i(343)][i("0x14d")], g["ResourceSy" + i("0x175")][i("0x162")](i("0x163") + i("0x176") + i("0x15a"), c.Class));
      } catch (a) {
        e[i("0x15c")][i(349)](i("0x14b") + i(370) + ": " + a, i("0x14c"));
        return;
      }
    }
    try {
      if (h[i("0x154") + "et"]) {
        h[i("0x154") + "et"][i(353) + i(329)].SetPercent(0);
        h[i(340) + "et"][i("0x159") + "xt"].SetText("0%");
        h[i("0x154") + "et"][i("0x16a") + i(339)](100);
        h[i("0x154") + "et"][i(327) + i(360)](0);
        clearInterval(f[i(325)]["LoaderInte" + i("0x160")]);
        f[i("0x145")][i(356) + "rval"] = null;
        e[i("0x15c")][i(349)](i(371) + "w!");
        h[i("0x14f") + "aded"] = true;
        this[i(364) + i("0x13c")]();
      }
    } catch (a) {
      e[i("0x15c")][i(349)](a, "error");
      if (h[i("0x15f")] < h.maxRetries) {
        h[i("0x15f")]++;
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          h.RenderLoader();
        }, 1500);
      } else {
        e[i(348)][i(349)]("Max retrie" + i(323) + i(317) + i("0x152") + i(365), i(332));
      }
    }
  }
  static [m("0x16e")]() {
    const b = m;
    if (this.progress < 40) {
      this[b("0x154") + "et"][b("0x144") + "t"][b("0x151")]("Preparing " + b("0x14e") + ".");
    } else if (this[b("0x169")] >= 40 && this[b(361)] < 100) {
      this[b(340) + "et"][b("0x144") + "t"][b(337)](b(350) + b("0x166") + "u...");
    } else if (this[b("0x169")] >= 100) {
      this[b(340) + "et"][b(324) + "t"][b(337)]("Mod menu l" + b("0x13e"));
    }
  }
  static [m(364) + m(316)]() {
    const d = m;
    try {
      this["intervalPr" + d(316)] = // TOLOOK
      // TOLOOK
      setInterval(() => {
        const e = d;
        if (!this[e("0x154") + "et"]) {
          return;
        }
        this[e("0x16e")]();
        let a = this.progress / 100;
        this[e(340) + "et"][e("0x161") + e("0x149")][e("0x171")](a);
        this[e(340) + "et"][e("0x159") + "xt"][e(337)](this[e(361)] + "%");
        if (this[e(361)] >= 100) {
          clearInterval(this[e("0x141") + e(316)]);
          this[e("0x141") + e(316)] = null;
          // TOLOOK
          // TOLOOK
          setTimeout(() => {
            const b = e;
            this.LoaderWidget["SetVisibil" + b(360)](2);
          }, 3000);
          return;
        }
        if (this[e(361)] < 80) {
          this.progress += 20;
        }
      }, 1000);
    } catch (a) {
      e[d(348)].Log(a, d("0x14c"));
    }
  }
}
exports[m("0x13f")] = h;