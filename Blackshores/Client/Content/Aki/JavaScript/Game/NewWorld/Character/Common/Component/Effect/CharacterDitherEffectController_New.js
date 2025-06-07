"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.CharacterDitherEffectController = void 0);
const MathUtils_1 = require("../../../../../../Core/Utils/MathUtils"),
  ObjectUtils_1 = require("../../../../../../Core/Utils/ObjectUtils"),
  TsBaseCharacter_1 = require("../../../../../Character/TsBaseCharacter"),
  MILLISECOND_TO_SECOND = 0.001;
class CharacterDitherEffectController {
  constructor(t, i) {
    (this.qYo = !1),
      (this.GYo = 1),
      (this.NYo = 0),
      (this.OYo = 1),
      (this.kYo = !1),
      (this.Ane = void 0),
      (this.Pne = void 0),
      (this.I1a = !1),
      (this.OC = t),
      (this.l9e = i),
      ObjectUtils_1.ObjectUtils.IsValid(this.l9e) || (this.kYo = !1);
  }
  get FYo() {
    return !this.OC || !this.OC.IsValid() || this.OC.bHidden;
  }
  get CurrentDitherValue() {
    return this.GYo;
  }
  get IsInAutoAnimationValue() {
    return this.qYo;
  }
  get DitherSpeedRateValue() {
    return this.OYo;
  }
  get IsDisableValue() {
    return this.kYo;
  }
  SetIsDisable(t, i = 0) {
    this.kYo !== t &&
      ((this.kYo = t)
        ? this.SetHiddenInGame(!0, !1)
        : (!this.qYo &&
          MathUtils_1.MathUtils.IsNearlyZero(this.GYo, MathUtils_1.MathUtils.KindaSmallNumber)
            ? this.SetHiddenInGame(!0, !1)
            : this.SetHiddenInGame(!1, !1),
          0 !== this.NYo && this.l9e.SetDitherEffect(this.GYo, this.NYo)));
  }
  EnterAppearEffect(t = 1, i = 3, s = !0) {
    this.FYo && this.SetHiddenInGame(!1, !0),
      (this.I1a = !1),
      (this.qYo = !0),
      (this.NYo = i),
      (this.OYo = t),
      s && ((this.GYo = 0), this.l9e.SetDitherEffect(this.GYo, this.NYo));
  }
  EnterDisappearEffect(t = 1, i = 3, s = !0) {
    this.FYo
      ? ((this.GYo = 0), (this.NYo = i), this.T1a())
      : ((this.qYo = !0),
        (this.NYo = i),
        (this.OYo = -t),
        s && ((this.GYo = 1), this.l9e.SetDitherEffect(this.GYo, this.NYo)));
  }
  SetDitherEffect(t, i = 3, s = !0) {
    var ModManager_1 = require("../../../../../Manager/ModManager");

    if (ModManager_1.ModManager.settings.AntiDither) {
      this.NYo = 1;
    } else {
      this.NYo = MathUtils_1.MathUtils.Clamp(t, 0, 1);
      (this.GYo = MathUtils_1.MathUtils.Clamp(t, 0, 1)),
        (this.NYo = i),
        this.kYo ||
          (this.SetHiddenInGame(
            MathUtils_1.MathUtils.IsNearlyZero(this.GYo, MathUtils_1.MathUtils.KindaSmallNumber),
            s
          ),
          this.l9e?.SetDitherEffect(this.GYo, i));
    }
  }
  SetHiddenInGame(t, i) {
    if (this.OC) {
      if (this.OC instanceof TsBaseCharacter_1.default) {
        var s = this.OC.CharacterActorComponent;
        if (!s) return;
        if (t) {
          if (this.Ane) return;
          (this.Ane = s.DisableActor("[CharacterDitherEffectController.SetHiddenInGame]")),
            s.Entity.GetComponent(184)?.IsNpcOutShowRange ||
              (this.Pne = s.DisableCollision("[CharacterDitherEffectController.SetHiddenInGame]"));
        } else
          this.Ane && (s.EnableActor(this.Ane), (this.Ane = void 0)),
            this.Pne && (s.EnableCollision(this.Pne), (this.Pne = void 0));
      } else if (this.OC.IsValid()) {
        if (this.FYo === t) return;
        this.OC.SetActorHiddenInGame(t), this.OC.SetActorEnableCollision(!t);
      }
      t && i && this.qYo && ((this.qYo = !1), (this.GYo = 0));
    }
  }
  Update(t) {
    !this.kYo && this.qYo && ((t = t * MILLISECOND_TO_SECOND * this.OYo), this.VYo(t, this.NYo));
  }
  T1a() {
    this.I1a ||
      ((this.I1a = !0),
      this.SetHiddenInGame(
        MathUtils_1.MathUtils.IsNearlyZero(this.GYo, MathUtils_1.MathUtils.KindaSmallNumber),
        !0
      ),
      this.l9e.SetDitherEffect(this.GYo, this.NYo));
  }
  ForceResetDither() {
    (this.GYo = 0), (this.NYo = 1), this.T1a();
  }
  VYo(t, i) {
    (this.GYo = MathUtils_1.MathUtils.Clamp(this.GYo + t, 0, 1)),
      0 === this.GYo && t < 0
        ? ((this.qYo = !1), this.SetHiddenInGame(!0, !0))
        : 1 === this.GYo && 0 < t && (this.qYo = !1),
      this.l9e.SetDitherEffect(this.GYo, i);
  }
  Clear() {
    (this.OC = void 0),
      this.l9e && this.l9e.ResetAllRenderingState(),
      (this.l9e = void 0),
      (this.Ane = void 0),
      (this.Pne = void 0);
  }
}
exports.CharacterDitherEffectController = CharacterDitherEffectController;
//# sourceMappingURL=CharacterDitherEffectController.js.map
