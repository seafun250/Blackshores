"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.UnopenedAreaCheck = void 0);
const UE = require("ue"),
  ActorSystem_1 = require("../../../Core/Actor/ActorSystem"),
  Log_1 = require("../../../Core/Common/Log"),
  AreaByAreaId_1 = require("../../../Core/Define/ConfigQuery/AreaByAreaId"),
  ResourceSystem_1 = require("../../../Core/Resource/ResourceSystem"),
  Rotator_1 = require("../../../Core/Utils/Math/Rotator"),
  Vector2D_1 = require("../../../Core/Utils/Math/Vector2D"),
  MathUtils_1 = require("../../../Core/Utils/MathUtils"),
  TEST_AREA_COUNT = 30,
  FAILURE_COUNT = 7;
class UnopenedAreaCheck {
  constructor() {
    (this.IsSplineInit = !1),
      (this.Xwe = 0),
      (this.$we = new Map()),
      (this.Ywe = new Map()),
      (this.Vj = new Map());
  }
  AreaInit(t) {
    for (const e of t) this.Jwe(e.p6n, e.Y4n ?? !1);
    0 === t.length && Log_1.Log.CheckInfo() && Log_1.Log.Info("Map", 42, "初始化区域数量为零"),
      (this.Xwe = 0),
      (this.IsSplineInit = !0);
  }
  AreaStatesChange(t) {
    this.Jwe(t.GRs.p6n, t.GRs.Y4n ?? !1),
      Log_1.Log.CheckInfo() &&
        Log_1.Log.Info(
          "Map",
          42,
          "AreaStatesChange更新区域边界状态",
          ["AreaState.Proto_AreaId", t.GRs.p6n],
          ["AreaState.Proto_State", t.GRs.Y4n ?? !1]
        );
  }
  Jwe(e, t) {}
  BinTest(t, e, i) {}
  Clear() {
    (this.IsSplineInit = !1), this.$we.clear();
  }
}
exports.UnopenedAreaCheck = UnopenedAreaCheck;
class BinItem {
  constructor() {
    (this.MapId = -1),
      (this.DungeonId = -1),
      (this.BinSet = new BinSet()),
      (this.TestPoints = new Array()),
      (this.InitCallback = void 0);
  }
  Init(e) {
    ResourceSystem_1.ResourceSystem.LoadAsync(e, UE.Class, (t) => {
      this.zwe(t)
        ? (this.Zwe(this.TestPoints, TEST_AREA_COUNT, this.BinSet),
          this.InitCallback && this.InitCallback())
        : Log_1.Log.CheckError() &&
          Log_1.Log.Error(
            "Map",
            42,
            "样条Asset资源加载错误，或选中的目标样条非BP_BasePathLine_Edgewall类",
            ["Path", e]
          );
    });
  }
  zwe(t) {
    t = ActorSystem_1.ActorSystem.Get(t, MathUtils_1.MathUtils.DefaultTransformDouble);
    let e = void 0;
    if (!t.IsA(UE.BP_BasePathLine_Edgewall_C.StaticClass())) return !1;
    var i = (e = t).OriginalLocation,
      i = UE.KismetMathLibrary.Conv_VectorToVectorDouble(i),
      r =
        (t.D_K2_SetActorLocationAndRotation(i, Rotator_1.Rotator.ZeroRotator, !1, void 0, !1),
        e.Spline),
      i = r.GetNumberOfSplinePoints();
    this.TestPoints.slice(0, i);
    for (let t = 0, e = i; t < e; t++) {
      var s = r.D_GetLocationAtSplinePoint(t, 1);
      this.TestPoints.push(new Vector2D_1.Vector2D(s.X, s.Y));
    }
    return t.K2_DestroyActor(), !0;
  }
  eBe(t, e, i, r, s) {
    let o = i,
      a = r;
    r < i && ((o = r), (a = i)),
      s.Bins[t].MinX > o && (s.Bins[t].MinX = o),
      s.Bins[t].MaxX < a && (s.Bins[t].MaxX = a),
      (s.Bins[t].EdgeSet[e].MinX = o),
      (s.Bins[t].EdgeSet[e].MaxX = a);
  }
  BinTest(t) {
    var e = new Vector2D_1.Vector2D(t.X, t.Y),
      t = this.BinSet,
      i = this.TestPoints;
    if (e.Y < t.MinY || e.Y >= t.MaxY || e.X < t.MinX || e.X >= t.MaxX) return !1;
    var r = Math.floor((e.Y - t.MinY) * t.ReciprocalDeltaY),
      t = t.Bins[r];
    if (e.X < t.MinX || e.X > t.MaxX) return !1;
    var s,
      o,
      a,
      h = t.EdgeSet,
      n = t.Count;
    let _ = 0,
      l = !1;
    for (let t = 0; t < n; t++, _++) {
      if (e.X < h[_].MinX) {
        do {
          (!h[_].FullCross && ((s = h[_].Id), e.Y <= i[s].Y == e.Y <= i[(s + 1) % i.length].Y)) ||
            (l = !l),
            (_ += 1);
        } while (++t < n);
        return l;
      }
      e.X < h[_].MaxX &&
        ((o = i[(a = h[_].Id)]),
        (a = i[(a + 1) % i.length]),
        h[_].FullCross || e.Y <= o.Y != e.Y <= a.Y) &&
        o.X - ((o.Y - e.Y) * (a.X - o.X)) / (a.Y - o.Y) >= e.X &&
        (l = !l);
    }
    return l;
  }
  Zwe(e, t, o) {
    var i = new Array(t);
    (o.BinNum = t), (o.Bins = new Array(t)), (o.MinX = o.MaxX = e[0].X), (o.MinY = o.MaxY = e[0].Y);
    for (let t = 1; t < e.length; t++) {
      var r = e[t];
      o.MinX > r.X ? (o.MinX = r.X) : o.MaxX < r.X && (o.MaxX = r.X),
        o.MinY > r.Y ? (o.MinY = r.Y) : o.MaxY < r.Y && (o.MaxY = r.Y);
    }
    (o.MinY -= MathUtils_1.MathUtils.SmallNumber * (o.MaxY - o.MinY)),
      (o.MaxY += MathUtils_1.MathUtils.SmallNumber * (o.MaxY - o.MinY)),
      (o.DeltaY = (o.MaxY - o.MinY) / t),
      (o.ReciprocalDeltaY = 1 / o.DeltaY);
    let a = e[e.length - 1],
      h = void 0,
      n = void 0,
      _ = void 0;
    for (const h of e) {
      if (a.Y !== h.Y) {
        _ = a.Y < h.Y ? ((n = h), a) : ((n = a), h);
        var s = Math.floor((_.Y - o.MinY) * o.ReciprocalDeltaY),
          l = (n.Y - o.MinY) * o.ReciprocalDeltaY;
        let e = Math.floor(l);
        l - e == 0 && (e -= 1);
        for (let t = s; t <= e; t++) i[t] = (i[t] ?? 0) + 1;
      }
      a = h;
    }
    for (let e = 0; e < t; e++) {
      o.Bins[e] = new Bin();
      var c = new Array(i[e]);
      for (let t = 0; t < i[e]; t++) c[t] = new Edge();
      (o.Bins[e].EdgeSet = c),
        (o.Bins[e].MinX = o.MaxX),
        (o.Bins[e].MaxX = o.MinX),
        (o.Bins[e].Count = 0);
    }
    a = e[e.length - 1];
    let A = e.length - 1;
    for (let t = 0; t < e.length; t++) {
      if (((h = e[t]), a.Y !== h.Y)) {
        var u = ((_ = a.Y < h.Y ? ((n = h), a) : ((n = a), h)).Y - o.MinY) * o.ReciprocalDeltaY,
          p = Math.floor(u),
          f = (n.Y - o.MinY) * o.ReciprocalDeltaY;
        let e = Math.floor(f),
          i = (f - e == 0 && (e -= 1), _.X);
        var M = (o.DeltaY * (n.X - _.X)) / (n.Y - _.Y);
        let r = i,
          s = !1;
        for (let t = p; t < e; t++, i = r) {
          r = _.X + (t + 1 - u) * M;
          var g = o.Bins[t].Count;
          o.Bins[t].Count++,
            (o.Bins[t].EdgeSet[g].Id = A),
            (o.Bins[t].EdgeSet[g].FullCross = s),
            this.eBe(t, g, i, r, o),
            (s = !0);
        }
        (i = r), (r = n.X);
        f = o.Bins[e].Count++;
        (o.Bins[e].EdgeSet[f].Id = A),
          (o.Bins[e].EdgeSet[f].FullCross = !1),
          this.eBe(e, f, i, r, o);
      }
      (a = h), (A = t);
    }
    for (let t = 0; t < o.BinNum; t++)
      o.Bins[t].EdgeSet.sort((t, e) => (t.MinX === e.MinX ? 0 : t.MinX < e.MinX ? -1 : 1));
  }
}
class Edge {
  constructor() {
    (this.Id = 0), (this.FullCross = !1), (this.MinX = 0), (this.MaxX = 0);
  }
}
class Bin {
  constructor() {
    (this.EdgeSet = void 0), (this.MinX = 0), (this.MaxX = 0), (this.Count = 0);
  }
}
class BinSet {
  constructor() {
    (this.BinNum = 0),
      (this.MinX = 0),
      (this.MaxX = 0),
      (this.MaxY = 0),
      (this.DeltaY = 0),
      (this.ReciprocalDeltaY = 0),
      (this.Bins = void 0),
      (this.MinY = 0);
  }
}
//# sourceMappingURL=UnopenedAreaCheck.js.map
