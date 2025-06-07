'use strict';

function z(a, b) {
  const d = A();
  z = function (e, f) {
    e = e - 189;
    let b = d[e];
    return b;
  };
  return z(a, b);
}
function A() {
  const b = ["Rotator", "hicle", "eDataId", "updateList", "GoToPrevio", "IsInGame", "474571DRLEZe", "-- Select ", "lay", "ModUtils", "ing...", "12rdthwE", "GetTpInfo", "CustomTpLi", "PrevPosNam", "time: ", "GetPosInfo", "dataFile", "CurrPosNum", "File", "Library", "aded", "filter", "MainMenu", "Dir", "IsInBoat", "isLoaded", "ShowTip", "settings", "496256ErIouj", "Delay", "100150OEzQyp", "IsShipDriv", "OnUpdateDe", "isCountdow", "defineProp", "size", "ger", "andle", "ssage", "erty", "PortPositi", "GetCreatur", "info", "dIndex", "Location", "TeleportCo", "tion", "GetSelecte", "MapUtil", "Custom Tel", "go to ", "KuroStatic", "ClearOptio", "TrackTarge", "ConfigMana", "includes", "NextPosNam", "ModManager", "is the fir", "LoopTelepo", "Create", "49419eaYLVV", "CustomTp", "rld", "filename", "ing", "floor", "yType", "farmTracke", "ModTp.json", "isTpFileLo", "GoToNextPo", "lastFarmTr", "GoTp", "rtTrackedM", "34aYUkPk", "nActive", "getMsgNext", " success", "ist", "Loop", "GetShipDat", "Logger", "teleport", "SaveConfig", "t position", "Remaining ", "AddOption", "d tp retry", "VectorDoub", "GetNamePos", "Log", "8bXAYVZ", "Init custo", "4597376rCryVG", "error", "IsInGameWo", "TotalPosNu", "PositionNo", "AutoTpTrac", "stringify", "isTimerRun", "forEach", "ToFile", "onSelected", "CurrPosNam", "59703jBCWdr", "GetCompone", "acked", " seconds", "Sleep", "SaveString", "Teleportin", "isUpdatedL", " teleport ", " | ", "listLocati", "IsAutoMove", "SelectLoca", "ntroller", "length", "LoadConfig", "isTpLoaded", "g...", "InputManag", "ort disabl", "IsTping", "Menu", "Error", "TeleportTo", "ition", "toString", "ning", "CheckConfi", "gExists", "CurrFileNu", "AutoMode", "oster", "TrackModel", "PrevFileNa", "nter", "CursorToCe", "savingStat", "dActivate", "GetTracksB", "saveTimer", "logger", "s the last", "Entity", "ive", "parse", "ModelManag", "SetSelecte", "map", "IsVisible", "ackTarget", "Saving con", "m teleport", "11135640UfGVSN", "Auto telep", "kedMonster", "ed. This i", "CurrFileNa", "AutoTelepo", "name"];
  A = function () {
    return b;
  };
  return A();
}
const B = z;
(function (a, b) {
  const c = z;
  const d = a();
  while (true) {
    try {
      const e = parseInt(c("0x162")) / 1 + parseInt(c(258)) / 2 * (parseInt(c("0x121")) / 3) + parseInt(c("0xd3")) / 4 + -parseInt(c(213)) / 5 * (parseInt(c("0xc1")) / 6) + parseInt(c(277)) / 7 + -parseInt(c("0x113")) / 8 * (-parseInt(c("0xf4")) / 9) + -parseInt(c("0x155")) / 10;
      if (e === b) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(A, 445587);
const a = {
  value: true
};
Object[B("0xd9") + B(222)](exports, "__esModule", a);
exports.CustomTp = undefined;
const c = require("puerts");
const e = B("0xfc");
const C = require("../Utils/ModUtils");
const d = require("../Utils/UI");
const g = require("../../Module/Teleport/TeleportController");
const f = require("../../Ui/Input/InputManager");
const i = require("../ModelManager");
const b = require("../../../Core/Utils/Math/Vector");
const k = require("../../Module/Map/MapUtil");
const h = require("../ListComponent");
const m = require("../../../Core/Utils/Math/Rotator");
const j = require("../../ModMenu");
const l = require("../Utils/Logger");
const n = require("../../Global");
const o = require("../Utils/ConfigManager");
const p = require("../../Module/Activity/ActivityContent/Fishing/FishingController");
const q = require("../ConfigManager");
const r = require("../ModManager");
const s = require("ue");
const t = {
  [B("0x159") + "me"]: "-",
  [B("0x142") + "me"]: "-",
  NextFileName: "-",
  [B(196) + "e"]: "-",
  [B("0x120") + "e"]: null,
  [B(239) + "e"]: "-",
  [B(280) + "m"]: 0,
  [B(200)]: -1,
  TotalFileNum: 0,
  [B("0x13e") + "m"]: 0,
  [B("0x13f")]: false,
  [B(263)]: false,
  Delay: 15000
};
class u {
  constructor() {
    this.Init();
  }
  Init() {
    const c = B;
    try {
      let a = require("./ModTpFile");
      u.CustomTpList = a.ModTpFile[c(195) + "st"];
      u["isTpFileLo" + c("0xcb")] = true;
    } catch (a) {
      C[c(191)][c(274)](a, c("0x116"));
    }
    if (!u[c("0xfd") + c("0xcb")]) {
      C[c(191)][c(274)]("Failed loa" + c(271) + c(192), "error");
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        this.Init();
      }, 2500);
      return;
    }
    C[c("0xbf")][c(274)](c(276) + c(340) + c("0x105"));
    try {
      u[c("0xc7")] = u.CustomTpList[c(336)](a => a[0][c(247)]);
      u[c(299) + "on"] = u[c("0xc3") + "st"][u.settings[c(318) + "m"]];
      u.isTpLoaded = true;
      u[c("0xc2")]();
    } catch (a) {
      l[c("0x109")][c(311)](c("0xe8") + "eport Error: " + a);
    }
  }
  static settings = t;
  static [B(199)] = [];
  static [B(299) + "on"] = [];
  static ["isCountdow" + B("0x103")] = false;
  static [B("0x11c") + B(315)] = false;
  static [B("0x148")] = null;
  static ["isUpdatedL" + B("0x106")] = false;
  static [B(305)] = false;
  static ["lastFarmTr" + B(291)] = null;
  static [B("0xc3") + "st"] = [];
  static [B("0xfd") + "aded"] = false;
  static [B(251) + B(326)] = null;
  static [B("0xc2")]() {
    const c = B;
    this[c(210)][c(280) + "m"] = this.CustomTpList[this[c("0xd2")][c("0x13e") + "m"]][c(303)] - 1;
    this[c(210)].TotalFileNum = this[c("0xc3") + "st"][c("0x12f")] - 1;
    this[c(210)].CurrFileName = this[c(195) + "st"][this[c(210)].CurrFileNum][0][c("0xf7")];
    try {
      this[c("0xd2")][c("0x120") + "e"] = this[c("0xd2")][c(200)] + 1 + c(298) + this[c("0x111") + c(313)](this[c(210)][c(318) + "m"], this[c(210)][c(200)]);
    } catch {
      this[c("0xd2")][c("0x120") + "e"] = null;
    }
    try {
      this.settings[c("0xc4") + "e"] = this[c(273) + "ition"](this[c("0xd2")].CurrFileNum, this[c(210)][c(200)] - 1);
    } catch (a) {
      this[c("0xd2")][c("0xc4") + "e"] = "-";
    }
    try {
      this.settings.NextPosName = this[c("0x111") + c("0x139")](this[c(210)][c("0x13e") + "m"], this.settings[c("0xc8")] + 1);
    } catch (a) {
      this.settings[c("0xef") + "e"] = "-";
    }
  }
  static [B("0xc6")](c, a) {
    const b = B;
    var d = this[b(195) + "st"][c][a].x;
    var e = this.CustomTpList[c][a].y;
    var f = this[b("0xc3") + "st"][c][a].z;
    var g = "(" + Math[b("0xf9")](d / 100)[b(314)]() + "," + Math.floor(e / 100)[b(314)]() + "," + Math[b(249)](f / 100)[b(314)]() + ")";
    return g;
  }
  static [B(273) + "ition"](c, a) {
    const b = B;
    const d = this[b("0xc3") + "st"][c][a][b("0x15b")];
    return d;
  }
  static updateListLocation() {
    const e = B;
    j[e(205)][e(310)][e(301) + e(229)][e(235) + "ns"]();
    j[e(205)][e(310)][e("0x12d") + "tion"].AddOption(e("0xbd") + "--");
    j.MainMenu.Menu[e(301) + e(229)][e(335) + "dOption"](e("0xbd") + "--");
    this[e("0x12b") + "on"][e("0x11d")]((a, b) => {
      const c = e;
      j[c("0xcd")].Menu[c(301) + "tion"][c(270)](b + 1 + c(298) + a[c("0x15b")]);
    });
    this[e(296) + e(262)] = false;
  }
  static [B(287) + B(201)]() {
    const c = B;
    this[c(296) + c(262)] = true;
    this[c("0xd2")][c(200)] = -1;
    const a = j.MainMenu.Menu.SelectFile[c("0xe6") + c("0xe2")]();
    this[c(210)][c(318) + "m"] = a;
    this[c("0x12b") + "on"] = this.CustomTpList[a];
    this[c("0xc2")]();
    this[c("0x15f") + c(227)]();
  }
  static [B("0x11f") + "Location"]() {
    const c = B;
    const a = j.MainMenu[c(310)][c(301) + c(229)]["GetSelecte" + c("0xe2")]();
    if (a < 0) {
      return;
    }
    this.settings[c(200)] = a - 1;
    this[c(194)]();
    this[c("0x145") + "e"]();
    this[c("0x100")]();
  }
  static [B(254) + "s"]() {
    const b = B;
    if (!C[b(191)][b("0x161")]() || C[b(191)][b("0x135")]()) {
      return;
    }
    if (this.settings.CurrPosNum < this[b(210)][b("0x118") + "m"]) {
      this[b("0xd2")][b(200)]++;
    } else {
      d.UI[b(209)]("is the las" + b(268));
    }
    this.GetTpInfo();
    this.savingState();
    j[b(205)].Menu["SelectLoca" + b("0xe5")][b("0x14f") + "dOption"](this[b("0xd2")][b(288) + "e"]);
  }
  static [B(352) + "usPos"]() {
    const b = B;
    if (!C[b("0xbf")][b(353)]() || C[b("0xbf")][b(309)]()) {
      return;
    }
    if (this[b("0xd2")][b(200)] > 0) {
      this[b("0xd2")][b(200)]--;
    } else {
      d.UI[b("0xd1")](b("0xf1") + "st position");
    }
    this[b("0xc2")]();
    this[b("0x145") + "e"]();
    j[b(205)][b("0x136")]["SelectLoca" + b(229)].SetSelectedOption(this[b("0xd2")][b(288) + "e"]);
  }
  static async [B("0x10a")]({
    x: c,
    y: a,
    z: b
  }) {
    const d = B;
    if (!C[d("0xbf")][d("0x161")]()) {
      return;
    }
    await g[d("0xe4") + d("0x12e")][d(312) + d("0x119") + "Loading"](new s[d(272) + "le"](c, a, b), new s[d(348)](0, 0, 0), "comment/me" + d(221));
  }
  static async [B(256)]() {
    const e = B;
    if (!C[e(191)][e(353)]() || C[e(191)].IsTping()) {
      return;
    }
    const a = this[e("0xc3") + "st"][this[e(210)][e(318) + "m"]][this.settings[e("0xc8")]].x;
    const b = this[e("0xc3") + "st"][this[e("0xd2")].CurrFileNum][this.settings[e(200)]].y;
    const d = this[e("0xc3") + "st"][this[e(210)][e("0x13e") + "m"]][this[e("0xd2")].CurrPosNum].z;
    this[e("0x104") + e(227)]();
    try {
      const f = {
        x: a,
        y: b,
        z: d
      };
      await this[e(266)](f);
    } catch (a) {
      c[e("0x149")][e("0x116")](a);
    }
  }
  static [B("0x104") + "Location"]() {
    const b = B;
    d.UI.ShowTip(b(233) + this[b("0xc3") + "st"][this[b(210)][b("0x13e") + "m"]][this.settings.CurrPosNum][b(347)]);
  }
  static [B(312) + B("0xdf") + "on"]() {
    const n = B;
    try {
      if (!C[n(191)][n(207)]()) {
        return;
      }
      const a = i[n(334) + "er"][n("0x141")].GetTracksByType(1);
      if (!a) {
        return;
      }
      const b = Array.from(a);
      if (b.length === 0 || !b[0][1]?.[n(236) + "t"]) {
        return;
      }
      const c = k[n("0xe7")]["GetTrackPositionByTr" + n(338)](b[0][1][n(236) + "t"], true);
      const d = i.ModelManager.FishingModel[n(264) + "a"]();
      const e = new s[n(272) + "le"](c.X, c.Y, c.Z);
      const f = m[n(348)][n("0xf3")](0, 0, 0);
      d["GetEntityH" + n(220)]()?.[n("0x14b")]?.[n("0x122") + "nt"](269)?.["ExecuteRev" + n("0x14c")]();
      const h = d[n(224) + n("0x15e")]();
      const j = d[n("0xd6") + n("0xf8")]();
      g[n(228) + n("0x12e")]["TeleportVe" + n("0x15d")](h, j, e, f, false, "", "");
    } catch (a) {
      C[n("0xbf")][n("0x112")](a, n("0x116"));
    }
  }
  static async [B(346) + B("0x101") + B(320)]() {
    const e = B;
    if (this.farmTrackedActivate) {
      return;
    }
    this[e("0xfb") + e("0x146")] = true;
    while (r[e("0xf0")][e(210)][e("0x11a") + e("0x157")]) {
      if (!C[e(191)][e(279) + e(246)]() && !C[e(191)].IsInMapView()) {
        await C.ModUtils[e("0x125")](2000);
        continue;
      }
      while (C.ModUtils[e("0x135")]()) {
        await C[e(191)][e("0x125")](2000);
        continue;
      }
      const a = i[e(334) + "er"][e("0x141")][e(327) + e(250)](1);
      if (!a || a[e(218)] === 0) {
        await C[e(191)].Sleep(2000);
        continue;
      }
      const b = Array.from(a);
      const c = b[a[e(218)] - 1][1];
      if (!this["lastFarmTr" + e("0x123")] || this.lastFarmTracked.Id !== c.Id) {
        const a = !this[e(255) + e("0x123")];
        this[e("0xff") + e("0x123")] = c;
        if (!a) {
          for (let a = this[e("0xd2")].Delay / 1000; a > 0; a--) {
            if (!r.ModManager[e("0xd2")][e(282) + e(343)]) {
              this[e(255) + "acked"] = null;
              break;
            }
            while (j.MainMenu[e(310)].IsVisible()) {
              await C[e("0xbf")].Sleep(1000);
            }
            d.UI.ShowTip(a === 1 ? e("0x127") + e(306) : e("0x10d") + e("0xc5") + a + e(292));
            await C.ModUtils[e("0x125")](1000);
          }
        } else {
          d.UI[e("0xd1")]("Teleportin" + e(306));
          await C[e("0xbf")][e(293)](2500);
        }
        if (!r[e(240)][e("0xd2")][e("0x11a") + "kedMonster"]) {
          this[e("0xff") + e(291)] = null;
          break;
        }
        if (!C[e(191)][e(309)]()) {
          const a = {
            x: c.TrackTarget.X
          };
          a.y = c[e("0xec") + "t"].Y;
          a.z = c[e("0xec") + "t"].Z;
          this.teleport(a);
        }
      } else {
        if (!r.ModManager[e("0xd2")][e(282) + e(343)]) {
          this[e("0xff") + e("0x123")] = null;
          break;
        }
        await C.ModUtils[e(293)](2000);
      }
    }
    this[e(251) + e("0x146")] = false;
  }
  static async [B("0xd7") + B("0xbe")](c) {
    const a = B;
    if (!c) {
      return;
    }
    this[a(210)][a("0xd4")] = c * 1000;
    if (this[a("0xd2")][a("0x13f")]) {
      this[a("0xd8") + "nActive"] = false;
    }
  }
  static async AutoTeleport() {
    const c = B;
    if (this[c(284) + c("0x13b")]) {
      return;
    }
    this[c(284) + "ning"] = true;
    while (this[c("0xd2")][c("0x13f")]) {
      while (C[c("0xbf")][c("0x135")]() || !C[c(191)]["IsInGameWo" + c("0xf6")]()) {
        await C.ModUtils.Sleep(1000);
      }
      this["isCountdow" + c("0x103")] = true;
      if (this[c(210)][c("0x118") + "m"] === this[c("0xd2")][c(200)]) {
        if (!this[c("0xf2") + "rt"]()) {
          d.UI[c(209)](c(342) + c("0x134") + c("0x158") + c("0x14a") + c("0x129") + "location.");
          this[c("0xd2")].AutoMode = false;
          f[c("0x133") + "er"]["IsAutoMove" + c("0x144") + c("0x143")] = true;
          await C[c("0xbf")].Sleep(2000);
          break;
        }
      }
      for (let a = this[c("0xd2")].Delay / 1000; a > 0; a--) {
        f[c("0x133") + "er"][c(300) + c(324) + "nter"] = false;
        while (j[c(205)][c("0x136")][c("0x151")]()) {
          if (!this[c(216) + c("0x103")] || !this[c(210)][c(319)]) {
            this["isTimerRun" + c("0x13b")] = false;
            break;
          }
          await C.ModUtils[c(293)](50);
        }
        if (!this["isCountdow" + c(259)] || !this[c("0xd2")][c(319)]) {
          this[c(284) + "ning"] = false;
          f[c("0x133") + "er"][c("0x12c") + "CursorToCe" + c(323)] = true;
          break;
        }
        d.UI[c(209)](a === 1 ? "Go" : "Remaining " + c("0xc5") + a + c("0x124"));
        await C.ModUtils.Sleep(1000);
      }
      if (!this[c("0xd2")][c(319)]) {
        this["isTimerRun" + c(315)] = false;
        break;
      }
      if (!this[c("0xd8") + c("0x103")]) {
        continue;
      }
      if (!C[c("0xbf")][c("0x135")]()) {
        this[c("0xd8") + c("0x103")] = false;
        this.GoToNextPos();
        this[c(260) + "Location"]();
        await C.ModUtils.Sleep(250);
        this[c(256)]();
      }
    }
    this[c("0x11c") + c(315)] = false;
  }
  static [B(242) + "rt"]() {
    const c = B;
    let a = false;
    if (this[c(210)][c(263)] && this[c(210)][c("0x118") + "m"] === this[c("0xd2")].CurrPosNum) {
      this[c("0xd2")][c(200)] = -1;
      a = true;
    }
    return a;
  }
  static [B("0xd0")]() {
    const b = B;
    return this[b(305)];
  }
  static savingState() {
    const d = B;
    if (this.saveTimer) {
      clearTimeout(this[d("0x148")]);
    }
    this.saveTimer = // TOLOOK
    // TOLOOK
    setTimeout(() => {
      const a = d;
      this.SaveConfig();
      c[a("0x149")][a("0xe1")](a(339) + "fig...");
      this[a("0x148")] = null;
    }, 1500);
  }
  static [B("0x10b")]() {
    const c = B;
    const a = {
      ...this[c("0xd2")]
    };
    let b = a;
    delete b.AutoMode;
    delete b[c("0x107")];
    s[c(234) + c("0xca")][c(294) + c("0x11e")](JSON[c(283)](b, null, 2), o[c("0xed") + c("0xdb")][c("0x130") + c("0xce")]() + e);
  }
  static [B("0x13c") + B(317)]() {
    const c = B;
    const a = o[c("0xed") + "ger"][c("0x13c") + c("0x13d")](e);
    return a;
  }
  static [B("0x130")]() {
    const f = B;
    let a = o[f("0xed") + f(219)].GetConfig(e);
    a = JSON[f(333)](a);
    const g = Object.keys(u[f(210)])[f("0xcc")](b => !Object.keys(a)[f("0xee")](b));
    if (g[f("0x12f")] > 0) {
      for (const b in g) {
        a[g[b]] = u[f("0xd2")][g[b]];
      }
    }
    this.settings = a;
  }
}
exports[B("0xf5")] = u;