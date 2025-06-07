'use strict';

const t = o;
(function (e, f) {
  const b = o;
  const c = e();
  while (true) {
    try {
      const d = -parseInt(b(361)) / 1 * (-parseInt(b(419)) / 2) + -parseInt(b(375)) / 3 * (parseInt(b(360)) / 4) + parseInt(b(358)) / 5 * (-parseInt(b("0x167")) / 6) + -parseInt(b(355)) / 7 + -parseInt(b("0x17f")) / 8 * (parseInt(b(365)) / 9) + -parseInt(b("0x178")) / 10 + parseInt(b(427)) / 11;
      if (d === f) {
        break;
      } else {
        c.push(c.shift());
      }
    } catch (b) {
      c.push(c.shift());
    }
  }
})(u, 489847);
function u() {
  const b = ["ceModel", "defineProp", "ignalDevic", "Gameplay00", "Model", "AutoSolveL", "autoFishin", "Error", "LifePoint", "ger", "ShowTip", "AutoPuzzle", "Valid", "viceComple", "tHitGearSt", "2nCSFAf", "equest", "ModMethod", "GetCompone", "FishingQte", "LifePointM", "IsDataInit", "EmitWithTa", "33351780fUzTeC", "ted", "iew", "isLifePoin", "EventSyste", "GetViewByN", "Gameplay11", "__esModule", "ceView", "5086963qaBsqD", "View", "tSolved", "115OYNQsn", "225966WMTiWY", "44IGxbre", "306407NxVOKS", "SignalDevi", "Component", "ifePoint", "99JrtwIs", "AutoSolveS", "isSignalDe", "SetGuideRa", "eItemState", "odel", "AutoMutter", "IsViewOpen", "Entity", "GmFinish", "77907blLkih", "1242340VpTwCV", "LifePointV", "uest", "Solved!", "ModManager", "GameInfo", "PawnPercep", "615080GPzhOT", "Config", "gInterval", "HitGear", "AutoSolve", "isneed", "ame", "ntType2", "ateChangeR", "ler", "Logger", "tion", "value", "OnPerfectO", "eChangeReq", "GetBluepri", "ModelManag", "includes", "Type", "LevelGameP", "settings"];
  u = function () {
    return b;
  };
  return u();
}
const a = {
  [t("0x18b")]: true
};
Object[t(405) + "erty"](exports, t("0x161"), a);
exports[t("0x19f")] = undefined;
const b = require("puerts");
const c = require("ue");
const v = require("../ModManager");
const d = require("./ModMethod");
const f = require("../Utils/UI");
const e = require("../ModelManager");
const g = require("../../LevelGamePlay/LevelGamePlayController");
const h = require("../Utils/Logger");
const i = require("../../Common/Event/EventDefine");
const j = require("../../Common/Event/EventSystem");
const k = require("../ListComponent");
const l = require("./EntityManager");
const m = ["Gameplay059"];
const n = [t(352) + "1"];
function o(b, a) {
  const e = u();
  o = function (d, f) {
    d = d - 352;
    let b = e[d];
    return b;
  };
  return o(b, a);
}
class p extends l["EntityMana" + t(413)] {
  static [t(388)](a, b) {
    const c = t;
    let d = this["GetBluepri" + c(390)](a);
    return b[c(400)](d);
  }
  static async [t(415)](a) {
    const b = t;
    if (v[b(380)][b("0x193")][b(415)]) {
      this[b(386)](a);
    }
  }
  static [t("0x182")](e) {
    const b = t;
    if (this[b(388)](e, m)) {
      g[b(402) + "layControl" + b("0x188")]["ShootTarge" + b(418) + b(391) + b("0x1a4")](e[b("0x175")].Id, c => {
        const a = b;
        if (c && e.Entity?.[a(416)]) {
          j[a("0x1af") + "m"][a("0x1aa") + "rget"](e.Entity, i.EEventName["UpdateScen" + a("0x171")]);
        }
      });
    }
  }
  static [t(407) + "4"](a) {
    const b = t;
    if (this[b(398) + "ntType2"](a) == b(407) + "4") {
      d[b("0x1a5")]["ThrowDamag" + b(397) + b("0x17a")](a.Entity, 3, 0xc846051n);
    }
  }
  static [t(371) + "fly"](a) {
    const b = t;
    if (!v[b("0x17c")][b(403)][b("0x19f")]) {
      return;
    }
    if (!this[b("0x184")](a, n)) {
      return;
    }
    const c = a[b("0x175")][b(422) + "nt"](k[b(363)][b("0x17e") + b(394)]);
    if (!c) {
      return;
    }
    try {
      const d = 1000000;
      c[b("0x170") + "nge"](d);
    } catch (b) {}
  }
  static [t(367) + t(417) + "ted"] = false;
  static [t(366) + t("0x196") + "e"]() {
    const a = t;
    try {
      if (f.UI.IsViewOpen("SignalDevi" + a(354))) {
        if (!this[a("0x16f") + a(417) + a(428)]) {
          e[a("0x18f") + "er"][a(362) + a(404)].EDe();
          this[a("0x16f") + a(417) + "ted"] = true;
          f.UI[a("0x19e")](a(379));
        }
      } else {
        this[a(367) + a(417) + "ted"] = false;
      }
    } catch (b) {}
  }
  static [t("0x19a") + t("0x181")] = null;
  static async AutoFishing() {
    const g = t;
    const a = () => {
      const b = o;
      if (this[b(410) + b(385)]) {
        clearInterval(this["autoFishin" + b(385)]);
        this[b("0x19a") + b("0x181")] = null;
      }
    };
    const b = f.UI[g("0x174")](g("0x1a7") + g(356));
    const c = f.UI["GetViewByN" + g("0x185")](g(423) + "View");
    if (!v[g("0x17c")][g("0x193")].AutoPuzzle) {
      a();
      return;
    }
    if (b && c) {
      if (!this.autoFishingInterval) {
        this[g(410) + g("0x181")] = // TOLOOK
        // TOLOOK
        setInterval(() => {
          const b = g;
          if (!c[b("0x17d")].IsGamePause() && !c[b("0x17d")].IsGameEnd()) {
            e[b(399) + "er"][b("0x1a7") + b("0x198")][b(396) + "n"]();
          }
        }, 250);
      }
    } else {
      a();
    }
  }
  static [t("0x1ae") + "tSolved"] = false;
  static [t(409) + t("0x16c")]() {
    const a = t;
    try {
      if (e[a(399) + "er"][a(424) + a(370)].Config && e.ModelManager[a(424) + "odel"][a("0x180")][a("0x191")] === a("0x19c") && e[a(399) + "er"][a(424) + a("0x172")][a(425)] && f.UI[a(372)]("LifePointView")) {
        if (!this[a(430) + a("0x165")]) {
          f.UI[a(432) + a(389)](a(377) + a(429))[a(374)]();
          this["isLifePoin" + a("0x165")] = true;
          f.UI[a(414)](a("0x17b"));
        }
      } else {
        this[a("0x1ae") + "tSolved"] = false;
      }
    } catch (b) {}
  }
  static [t(387)]() {
    const c = t;
    try {
      this["AutoSolveS" + c("0x196") + "e"]();
      this[c(409) + c("0x16c")]();
    } catch (b) {
      h[c(393)][c("0x19b")](b);
    }
  }
}
exports[t("0x19f")] = p;