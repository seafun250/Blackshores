"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.PlotSkipComponent = void 0);
const Log_1 = require("../../../../Core/Common/Log"),
  StringUtils_1 = require("../../../../Core/Utils/StringUtils"),
  EventDefine_1 = require("../../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../../Common/Event/EventSystem"),
  PublicUtil_1 = require("../../../Common/PublicUtil"),
  ConfigManager_1 = require("../../../Manager/ConfigManager"),
  ControllerHolder_1 = require("../../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../../Manager/ModelManager"),
  UiManager_1 = require("../../../Ui/UiManager"),
  ModManager_1 = require("../../../Manager/ModManager"),
  ModUtils_1 = require("../../../Manager/Utils/ModUtils"),
  ConfirmBoxDefine_1 = require("../../ConfirmBox/ConfirmBoxDefine");
class PlotSkipComponent {
  constructor(i, t, e, s, o) {
    (this.dce = !1),
      (this.Zzi = void 0),
      (this.eZi = StringUtils_1.EMPTY_STRING),
      (this.tZi = !0),
      (this.iZi = void 0),
      (this.uCa = void 0),
      (this.ro_ = !1),
      (this.EnableSkipButton = (i) => {
        if (ModManager_1.ModManager.settings.PlotSkip) {
          if (ModUtils_1.ModUtils.isInPlot()) {
            this.dce = true;
            this.oZi.SetUIActive(this.dce);
            if (this.ro_) {
              this.ro_ = false;
              ControllerHolder_1.ControllerHolder.ConfirmBoxController.CloseConfirmBoxView();
            }
            if (UiManager_1.UiManager.IsViewOpen("SummaryPopView")) {
              UiManager_1.UiManager.CloseView("SummaryPopView");
            }
            this.rsa?.();
          }
        } else {
          (i && !ModelManager_1.ModelManager.PlotModel.PlotConfig.CanSkip) ||
            this.dce === i ||
            ((this.dce = i), this.oZi.SetUIActive(this.dce), this.dce) ||
            (this.ro_ &&
              ((this.ro_ = !1),
              ControllerHolder_1.ControllerHolder.ConfirmBoxController.CloseConfirmBoxView()),
            UiManager_1.UiManager.IsViewOpen("SummaryPopView") &&
              UiManager_1.UiManager.CloseView("SummaryPopView"),
            this.rsa?.());
        }
      }),
      (this.rZi = () => {
        var i;
        this.dce &&
          (this.NTt?.(),
          StringUtils_1.StringUtils.IsEmpty(this.uCa)
            ? ModelManager_1.ModelManager.PlotModel.PlotConfig.IsSkipConfirmBoxShow
              ? ((this.tZi = !0),
                ((i = new ConfirmBoxDefine_1.ConfirmBoxDataNew(180)).HasToggle = !0),
                (i.ToggleText = this.eZi),
                i.SetToggleFunction(this.Cke),
                (i.AttachView = this.iZi),
                i.FunctionMap.set(1, () => {
                  this?.dce && ((this.ro_ = !1), this.rsa?.());
                }),
                i.FunctionMap.set(2, () => {
                  this?.dce &&
                    ((ModelManager_1.ModelManager.PlotModel.PlotConfig.IsSkipConfirmBoxShow =
                      this.tZi),
                    (this.dce = !1),
                    (this.ro_ = !1),
                    this.nZi?.());
                }),
                (this.ro_ =
                  ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(i)))
              : this.nZi?.()
            : (Log_1.Log.CheckDebug() &&
                Log_1.Log.Debug("Plot", 26, "剧情梗概", ["text", this.uCa]),
              (i = {
                Text: this.uCa,
                ConfirmFunc: () => {
                  this?.dce && ((this.dce = !1), this.nZi?.());
                },
                CancelFunc: () => {
                  this?.dce && this.rsa?.();
                },
              }),
              UiManager_1.UiManager.OpenView("SummaryPopView", i)));
      }),
      (this.Cke = (i) => {
        this?.dce && (this.tZi = !i);
      }),
      (this.Zzi = i),
      (this.oZi = i.RootUIComp),
      (this.nZi = t),
      (this.NTt = e),
      (this.rsa = o),
      (this.iZi = s),
      (this.dce = !1),
      (this.uCa = void 0),
      this.Zzi.OnClickCallBack.Bind(this.rZi),
      (this.eZi = ConfigManager_1.ConfigManager.TextConfig?.GetTextById("PlotSkipConfirmToggle")),
      StringUtils_1.StringUtils.IsEmpty(this.eZi) &&
        (ControllerHolder_1.ControllerHolder.FlowController.LogError(
          '剧情跳过二次确认框读不到Toggle文本 "PlotSkipConfirmToggle"'
        ),
        (this.eZi = ""));
  }
  OnClear() {
    (this.dce = !1),
      this.Zzi?.OnClickCallBack.Unbind(),
      (this.Zzi = void 0),
      (this.oZi = void 0),
      (this.iZi = void 0),
      (this.uCa = void 0),
      (this.nZi = void 0),
      (this.NTt = void 0),
      (this.rsa = void 0),
      this.ro_ &&
        ((this.ro_ = !1),
        ControllerHolder_1.ControllerHolder.ConfirmBoxController.CloseConfirmBoxView());
  }
  AddEventListener() {
    EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.EnableSkipPlot, this.EnableSkipButton);
  }
  RemoveEventListener() {
    EventSystem_1.EventSystem.Remove(
      EventDefine_1.EEventName.EnableSkipPlot,
      this.EnableSkipButton
    );
  }
  AddSummary(i) {
    i &&
      !StringUtils_1.StringUtils.IsEmpty(i.TidOutline) &&
      ((i = PublicUtil_1.PublicUtil.GetFlowConfigLocalText(i.TidOutline)),
      (this.uCa = ModelManager_1.ModelManager.PlotModel.PlotTextReplacer.Replace(i)));
  }
}
exports.PlotSkipComponent = PlotSkipComponent;
//# sourceMappingURL=PlotSkipComponent.js.map
