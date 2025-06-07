'use strict';

const r = s;
function s(c, a) {
  const d = b();
  s = function (e, f) {
    e = e - 413;
    let b = d[e];
    return b;
  };
  return s(c, a);
}
function b() {
  const c = ["EntityMana", "Capitalize", "UiManager", "InputBox", "OpenView", "IsFadeIn", "EnterGameR", "substring", "4291878AGxMpp", "time", "IsInCutsce", "10DigPTK", "331iNSsON", "Library", "24792VkNYwy", "AudioSyste", "IsLoginSta", "Wait", "FishingMod", "IsLoadingV", "IsInGame", "PlotModel", "IsInGameWo", "Getdistanc", "Log", "IsOnShipVe", "LoadingVie", "defineProp", "Sleep", "getDate", "IsCheckNon", "PlayAudio", "rld", "__esModule", "9045680jkgnyp", "iew", "ModelManag", "ackTarget", "sitionByTr", "ler", "5302470smVzkB", "3478328sTXFoj", "MapUtil", "ger", "1522QrkLru", "IsInBoat", "IsViewShow", "erty", "getFormatX", "leInputVie", "IsLoginVie", "getFullYea", "ataControl", "toUpperCas", "hicle", "Fight", "date", "isLoadingO", "ModUtils", "IsInPlot", "padStart", "Vector_Dis", "IsTping", "onButton", "ELoginStat", "BattleView", "isInPlot", "GetTrackPo", "LoginModel", "FormationD", "KismetMath", "getHours", "logger", "WaitAsync", "e2Player", "TimerSyste", "Title", "PostEvent", "getMinutes", "charAt", "ShowTip", "IsTeleport", "VideoView", "value", "WorldMapVi", "GetPlayerP", "tus", "rNotInGame", "995nBmUXZ", "3858102ClGViJ", "NeedFuncti"];
  b = function () {
    return c;
  };
  return b();
}
(function (b, f) {
  const c = s;
  const d = b();
  while (true) {
    try {
      const b = -parseInt(c("0x1a1")) / 1 * (-parseInt(c(449)) / 2) + parseInt(c("0x19d")) / 3 + parseInt(c("0x1a3")) / 4 * (-parseInt(c("0x1ed")) / 5) + -parseInt(c(445)) / 6 + parseInt(c(446)) / 7 + parseInt(c("0x1b7")) / 8 + -parseInt(c("0x1ee")) / 9 * (parseInt(c(416)) / 10);
      if (b === f) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(b, 764306);
const a = {
  [r(488)]: true
};
Object[r("0x1b0") + r(452)](exports, r(438), a);
exports[r("0x1cf")] = undefined;
const t = require("puerts");
const u = require("ue");
const c = require("../../Module/Util/LguiUtil");
const d = require("./UI");
const e = require("../../../Core/Timer/TimerSystem");
const f = require("../ModelManager");
const g = require("../../Module/Login/Data/LoginDefine");
const h = require("../../Module/Map/MapUtil");
const i = require("../../Module/Abilities/FormationDataController");
const j = require("../ModFuncs/EntityManager");
const k = require("../../../Core/Audio/AudioSystem");
const l = require("../../../Ui/UiManager");
class m {
  static [r(425)]() {
    const a = r;
    let b = null;
    try {
      b = f[a(441) + "er"][a(473)][a(421) + a("0x1eb")](g[a("0x1d5") + "us"][a(502) + "et"]);
    } catch {}
    return b;
  }
  static [r(453) + "YZ"](c) {
    const a = c.split(",");
    return {
      x: parseFloat(a[0]),
      y: parseFloat(a[1]),
      z: parseFloat(a[2])
    };
  }
  static IsInMapView() {
    const a = r;
    return l[a("0x1f2")][a("0x1c3")](a(489) + "ew");
  }
  static [r("0x1ce") + r("0x1ec")]() {
    const a = r;
    return Boolean(!m[a("0x1ab") + a("0x1b5")]() || m[a(424) + a("0x1b8")]());
  }
  static [r(415) + "ne"]() {
    const a = r;
    return f[a(441) + "er"][a("0x1aa")][a("0x1f5")] || l.UiManager[a("0x1c3")](a(487));
  }
  static [r(471)]() {
    const a = r;
    return Boolean(f[a(441) + "er"][a(426)][a("0x1d0")] || f.ModelManager[a("0x1aa")][a("0x1f5")]);
  }
  static [r("0x1b2")]() {
    const a = r;
    let b = new Date();
    let c = String(b[a(434)]()).padStart(2, "0");
    let d = String(b.getMonth() + 1).padStart(2, "0");
    let e = b[a(456) + "r"]();
    let f = String(b[a(476)]())[a("0x1d1")](2, "0");
    let g = String(b[a(483)]()).padStart(2, "0");
    let h = String(b.getSeconds()).padStart(2, "0");
    const i = {
      [a(461)]: c + "-" + d + "-" + e,
      [a("0x19e")]: f + ":" + g + ":" + h
    };
    return i;
  }
  static [r("0x1de")](c) {
    return new Promise(a => // TOLOOK
    // TOLOOK
    setTimeout(a, c));
  }
  static [r(427) + r(437)]() {
    const a = r;
    return l[a("0x1f2")][a("0x1c3")](a(470));
  }
  static [r("0x1c7") + "w"]() {
    const a = r;
    return l[a("0x1f2")][a("0x1c3")]("LoginView");
  }
  static ["IsLoadingV" + r("0x1b8")]() {
    const a = r;
    return l.UiManager.IsViewShow(a(431) + "w");
  }
  static IsInFight() {
    const a = r;
    return Boolean(i[a(474) + a("0x1c9") + a("0x1bc")]["GlobalIsIn" + a("0x1cc")]);
  }
  static [r(450)]() {
    const a = r;
    return Boolean(f[a(441) + "er"][a(423) + "el"][a("0x1ae") + a(459)]());
  }
  static [r(428) + r(479)](a) {
    const b = r;
    let c = j[b(496) + b(448)][b("0x1ea") + "os"]();
    let d = u[b("0x1db") + "Library"][b(466) + "tance"](a, c);
    return d;
  }
  static [r("0x1ac") + "e"](a, b) {
    const c = r;
    let d = u[c("0x1db") + c(418)].Vector_Distance(a, b);
    return d;
  }
  static [r("0x1d3")]() {
    const a = r;
    return f[a(441) + "er"].TeleportModel[a(486)];
  }
  static async [r(433)](a) {
    const b = r;
    await e[b("0x1e0") + "m"][b(422)](a);
  }
  static [r(436)](a) {
    const b = r;
    k[b(420) + "m"][b(482)](a);
  }
  static [r("0x1f1")](a) {
    const b = r;
    return a[b(484)](0)[b(458) + "e"]() + a[b("0x1f7")](1);
  }
  static StringToInt(a) {
    const b = r;
    var c = parseInt(a);
    if (isNaN(c)) {
      d.UI[b(485)]("str is not int");
      return "error";
    } else {
      return c;
    }
  }
  static [r(429)](a, b = "info") {
    const c = r;
    t[c("0x1dd")][b](a);
  }
  static ["KuroSingle" + r("0x1f3")]({
    title: a,
    customFunc: b,
    inputText: c,
    defaultText: d,
    isCheckNone: e,
    needFunctionButton: f
  }) {
    const g = r;
    const h = {
      [g("0x1e1")]: a,
      CustomFunc: b,
      InputText: c,
      DefaultText: d,
      [g(435) + "e"]: e,
      [g("0x1ef") + g(468)]: f
    };
    l[g(498)][g(500)]("CommonSing" + g("0x1c6") + "w", h);
  }
  static [r(472) + r(443) + r("0x1ba")](a) {
    const b = r;
    try {
      return h[b(447)][b(472) + b(443) + "ackTarget"](a);
    } catch (b) {}
  }
}
exports.ModUtils = m;