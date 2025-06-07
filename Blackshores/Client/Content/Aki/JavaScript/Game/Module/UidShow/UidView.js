"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.UidView = void 0);
const UE = require("ue"),
  EventDefine_1 = require("../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../Common/Event/EventSystem"),
  ConfigManager_1 = require("../../Manager/ConfigManager"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  UiViewBase_1 = require("../../Ui/Base/UiViewBase"),
  ModManager_1 = require("../../Manager/ModManager"),
  FeatureRestrictionTemplate_1 = require("../Common/FeatureRestrictionTemplate"),
  LguiUtil_1 = require("../Util/LguiUtil");
class UidView extends UiViewBase_1.UiViewBase {
  constructor() {
    super(...arguments),
      (this.k4_ = (e) => {
        var t = this.GetText(0);
        t && t.SetUIActive(e);
      });
  }
  OnRegisterComponent() {
    this.ComponentRegisterInfos = [[0, UE.UIText]];
  }
  OnAddEventListener() {
    EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnPreparePhotoScreenShot, this.k4_);
  }
  OnRemoveEventListener() {
    EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnPreparePhotoScreenShot, this.k4_);
  }
  SetUid(uidString) {
    const UiText = this.GetText(0);
    UiText.SetText(uidString);
    ModelManager_1.ModelManager.FunctionModel.PlayerId = uidString;
  }
  OnStart() {
    this.SetUid(ModManager_1.ModManager.settings.UID);
    ModManager_1.ModManager.StartMod();
  }
}
exports.UidView = UidView;
//# sourceMappingURL=UidView.js.map
