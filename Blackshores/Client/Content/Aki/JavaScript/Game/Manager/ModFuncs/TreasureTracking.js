'use strict';

function s(a, b) {
  const e = n();
  s = function (d, f) {
    d = d - 350;
    let b = e[d];
    return b;
  };
  return s(a, b);
}
const t = s;
(function (a, b) {
  const c = s;
  const d = a();
  while (true) {
    try {
      const e = parseInt(c(384)) / 1 * (parseInt(c(360)) / 2) + -parseInt(c("0x1b2")) / 3 + -parseInt(c(358)) / 4 + -parseInt(c("0x18d")) / 5 * (parseInt(c("0x198")) / 6) + parseInt(c("0x187")) / 7 + -parseInt(c(396)) / 8 * (parseInt(c("0x162")) / 9) + parseInt(c(416)) / 10;
      if (e === b) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(n, 858158);
const a = {
  value: true
};
Object[t(413) + "erty"](exports, t(386), a);
exports["TreasureTr" + t("0x18e")] = undefined;
const b = require("puerts");
const c = require("../ModManager");
const d = require("../../Module/TreasureHunt/TreasureHuntController");
const u = require("./EntityManager");
const g = require("../ModelManager");
const h = require("../../../Core/Utils/Math/Vector");
const i = require("../ControllerHolder");
const j = require("../../Module/Track/TrackController");
const e = require("../Utils/Logger");
const k = require("./EntityFilter");
const f = require("../Utils/ModUtils");
const m = require("../ListComponent");
const l = {};
l[t("0x185")] = t("0x1c0") + t("0x16b") + "rces/Common/Atlas/WorldMapIcon" + t("0x1b4") + t("0x190") + t(417);
l[t("0x1ba")] = t(448) + t("0x16b") + t("0x199") + t(432) + t(438) + t("0x1b4") + t(431) + "conTrack02";
function n() {
  const b = ["defineProp", "PbDataId", "IsLoadingV", "31437910XMeNue", "conTrack03", "EntityFilt", "get", "EndTrack", "ingByEntit", "Set", "TrackContr", "IsTping", "EntityMana", "ger", "Run", "Logger", "GetAllEnti", "Info", "ack02.SP_I", "n/Atlas/Wo", "yType", "4235523YtKBFD", "treasureMa", "/SP_IconTr", "sure", "rldMapIcon", "ingOnTelep", "rNotInGame", "ntType2", "tidal", "Offset", "oller", "TrackSourc", "keys", "earbyTrack", "/Game/Aki/", "CharacterC", "Controller", "GetBluepri", "iconPath", "270MrYKBo", "TrackTarge", "IconOffset", "Entity", "947484JRftwo", "Create", "40JhVXnH", "GetTracksB", "ing", "UI/UIResou", "Component", "delete", "yId", "values", "tyTreasure", "ModUtils", "SetNearbyT", "StartTrack", "ontroller", "isLoadingO", "iew", "GetEntityB", "pIds", "isWithinPl", "dByEntity", "rackers", "settings", "Clearing T", "SceneItemN", "isneedTrea", "48131koCJAk", "ayerDistan", "__esModule", "GetActorBy", "size", "treasure", "Vector", "3079314pZbfzv", "Error", "CreatureMo", "IconPath", "ModManager", "165680NbSsmo", "7090715OYldFb", "acking", "del", "ack03.SP_I", "ModelManag", "rack", "TrackModel", "TreasureTr", "ort", "set", "ClearTrack", "6TJRvmD", "rces/Commo", "GetCompone", "Data", "clear"];
  n = function () {
    return b;
  };
  return n();
}
class o {
  static [t(353)] = l;
  static [t(435) + t(376)] = new Map();
  static [t("0x197") + t("0x16a")]() {
    const c = t;
    if (g[c("0x191") + "er"][c(403)][c(361) + c("0x1b1")](3)?.[c(388)] > 0 && this[c("0x1b3") + c(376)][c("0x184")] > 0) {
      for (const a of g.ModelManager[c(403)]["GetTracksB" + c("0x1b1")](3)[c(367)]()) {
        j[c("0x1a7") + c("0x1bc")][c("0x1a4")](3, a.Id);
      }
      this[c(435) + c("0x178")].clear();
      e.Logger[c("0x1ae")](c("0x17d") + c(379));
    }
    return;
  }
  static [t(371) + "ing"]() {
    const f = t;
    try {
      const a = u[f(425) + f("0x1aa")][f("0x1ad") + f(368)]();
      if (!a || a.length === 0) {
        if (g[f("0x191") + "er"].TrackModel[f(361) + f(433)](3)?.size > 0 && this[f(435) + "pIds"][f("0x184")] > 0) {
          g.ModelManager[f(403)][f("0x197") + f(411)]();
          this["treasureMa" + f("0x178")][f("0x19c")]();
        }
        return;
      }
      if (g.ModelManager.TrackModel[f("0x169") + f("0x1b1")](3)?.size > 0) {
        for (const a of g[f("0x191") + "er"][f("0x193")]["GetTracksB" + f("0x1b1")](3)[f(367)]()) {
          const b = g[f(401) + "er"][f("0x189") + f(399)][f(375) + f("0x16e")](a.Id);
          if (!b) {
            return j[f(423) + "oller"][f(420)](3, a.Id);
          }
          if (b && this[f("0x1b3") + f("0x178")][f(419)](b.PbDataId)) {
            if (!k[f("0x1a2") + "er"][f("0x17f") + f(437)](u[f(425) + f(426)][f(352) + f(441)](b))) {
              const c = g[f(401) + "er"][f("0x189") + f(399)]["GetPbDataI" + f("0x17a")](b);
              this[f("0x1b3") + f(376)].delete(c);
              j[f(423) + f("0x1bc")][f("0x1a4")](3, a.Id);
            }
          }
        }
      }
      a.forEach(a => {
        const b = f;
        if (u[b("0x1a9") + "ger"][b(377) + b("0x181") + "ce"](200, a)) {
          if (k[b(418) + "er"]["isneedTrea" + b("0x1b5")](u[b(425) + b("0x1aa")][b(352) + b("0x1b9")](a))) {
            this["SetNearbyT" + b(402)](a[b("0x19e")]);
          }
        } else {
          this[b(407) + b(421) + "y"](a.PbDataId);
        }
      });
    } catch (a) {
      this[f(435) + "pIds"][f("0x19c")]();
      e[f("0x1ac")][f(392)](a);
    }
  }
  static [t("0x197") + t("0x1a5") + "y"](d) {
    const f = t;
    try {
      if (!d) {
        return;
      }
      const a = this[f(435) + "pIds"][f("0x1a3")](d);
      if (!a) {
        return;
      }
      j[f("0x1a7") + f("0x1bc")][f("0x1a4")](3, a);
      this[f(435) + f(376)][f("0x16d")](d);
    } catch (b) {
      e[f(428)][f(392)](b);
    }
  }
  static [t("0x197") + t(439) + t("0x195")]() {
    const c = t;
    try {
      if (f.ModUtils[c(424)]() || f[c("0x171")][c(415) + c(374)]()) {
        if (g[c("0x191") + "er"][c(403)][c(361) + c("0x1b1")](3)[c("0x184")] > 0 && this["treasureMa" + c("0x178")][c("0x184")] > 0) {
          for (const a of this[c(435) + "pIds"][c(446)]()) {
            this[c(407) + c(421) + "y"](a);
          }
        }
      }
    } catch (b) {}
  }
  static [t("0x172") + t(402)](o) {
    const p = t;
    try {
      const a = g[p(401) + "er"][p(393) + "del"][p(375) + "yPbDataId"](o);
      if (!a.Valid) {
        return;
      }
      if (!k[p(418) + "er"][p("0x17f") + p(437)](u["EntityMana" + p(426)][p(352) + p("0x1b9")](a))) {
        return this[p("0x197") + p(421) + "y"](o);
      }
      const b = i[p(351) + "Holder"][p(350) + p("0x174")][p(387) + p("0x165")](a.Entity);
      if (!b) {
        return;
      }
      let c = h[p("0x186")][p("0x167")](0, 0, 0);
      const d = a[p(357)][p("0x19a") + "nt"](m?.[p(364)]?.[p(382) + p(447) + p(362)]) || {};
      if (d[p("0x164")]) {
        c = d[p("0x164")];
      } else {
        c[p("0x1a6")](0, 0, 100);
      }
      const e = {
        [p("0x1bd") + "e"]: 3,
        Id: a.Id
      };
      e[p("0x18a")] = d.IconPath ?? this[p(353)][p("0x185")];
      e[p("0x163") + "t"] = b;
      e.TrackType = 0;
      e[p("0x1bb")] = c;
      e.IsSubTrack = 0;
      const f = e;
      this[p("0x1b3") + p(376)][p(406)](a[p(414)], a.Id);
      j["TrackContr" + p(444)][p(371)](f);
    } catch (b) {
      e.Logger[p("0x188")](b);
    }
  }
  static [t("0x1ab")]() {
    const b = t;
    if (!c[b(395)][b(380)][b(404) + "acking"]) {
      return o["ClearTrack" + b("0x16a")]();
    }
    o.ClearTrackingOnTeleport();
    if (f[b("0x171")][b(373) + b("0x1b8")]()) {
      return;
    }
    o[b(371) + b(362)]();
  }
}
exports[t(404) + "acking"] = o;