"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.MainMenu = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue");

function hook() {
  const ReConnectController_1 = require("./Module/ReConnect/ReConnectController"),
    LoginController_1 = require("./Module/Login/LoginController"),
    ModelManager_1 = require("./Manager/ModelManager");

  LoginController_1.LoginController.SMi = (e) => {
    // puerts_1.logger.info("notified logout");
    // ModUtils_1.ModUtils.jsLog(ModUtils_1.ModUtils.StackTrace());
  };

  ReConnectController_1.ReConnectController.qGi = () => {
    ModelManager_1.ModelManager.LoginModel.HasBackToGameData() &&
      ReConnectController_1.ReConnectController.TryBackToGame(),
      ReConnectController_1.ReConnectController.Cso();
  };
}

async function main() {
  try {
    // wait for mount, then this require will work
    let Load = require("./ModMenu");

    if (Load) {
      new Load.MainMenu();
    }
  } catch (error) {
    puerts_1.logger.error(error);
  }
  hook();
  const GameProcedure_1 = require("./GameProcedure"); // this has to be here for the pak to load first
  GameProcedure_1.GameProcedure.Start(puerts_1.argv.getByName("GameInstance"));
}

main();
//# sourceMappingURL=Main.js.map
