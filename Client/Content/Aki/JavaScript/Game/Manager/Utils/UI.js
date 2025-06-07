"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.UI = void 0);
const UE = require("ue"),
  ModManager_1 = require("../ModManager"),
  ConfirmBox = require("../../Module/ConfirmBox/ConfirmBoxController"),
  ConfirmBoxDefine = require("../../Module/ConfirmBox/ConfirmBoxDefine"),
  ModLanguage_1 = require("../ModFuncs/ModLanguage"),
  ModMenuDefine_1 = require("../ModMenuDefine"),
  UiManager_1 = require("../../Ui/UiManager"),
  ModUtils_1 = require("./ModUtils"),
  ScrollingTipsController_1 = require("../../Module/ScrollingTips/ScrollingTipsController");

class UI extends UiManager_1.UiManager {
  static ShowTip(string) {
    try {
      return ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(string);
    } catch (error) {
      ModUtils_1.ModUtils.Log("Failed to show tip", "error");
    }
  }

  static ShowStatusMod(key, msg) {
    let translated = ModMenuDefine_1.ATTRIBUTE_MOD_TEXT[key]?.ATTRIBUTE;
    if (translated) {
      translated = ModLanguage_1.ModLanguage.ModTr(translated);
    } else {
      translated = msg;
    }
    ModManager_1.ModManager.settings[key]
      ? UI.ShowTip(
          `${translated} ${ModLanguage_1.ModLanguage.ModTr(ModMenuDefine_1.MOD_STATE_TEXT.ON)}`
        )
      : UI.ShowTip(
          `${translated} ${ModLanguage_1.ModLanguage.ModTr(ModMenuDefine_1.MOD_STATE_TEXT.OFF)}`
        );
  }

  static ShowConfirmBox({ title, desc, id, closeFunc }) {
    const newBox = new ConfirmBoxDefine.ConfirmBoxDataNew(id);
    newBox.SetTitle(title);
    newBox.SetTextArgs(desc);
    closeFunc && newBox.SetCloseFunction(closeFunc);
    ConfirmBox.ConfirmBoxController.ShowConfirmBoxNew(newBox);
  }
}

exports.UI = UI;
