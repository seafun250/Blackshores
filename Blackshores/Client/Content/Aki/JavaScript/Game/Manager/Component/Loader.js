'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = undefined;

const puerts = require("puerts");
const ue = require("ue");
const GlobalData = require("../../GlobalData");
const ModUtils = require("../Utils/ModUtils");
const ModMenu = require("../../ModMenu");
const ResourceSystem = require("../../../Core/Resource/ResourceSystem");

class Loader {
  static LoaderWidget = null;
  static isLoaderLoaded = false;
  static intervalProgress = null;
  static progress = 0;
  static retryCount = 0;
  static maxRetries = 5;

  static async RenderLoader() {
    if (!Loader.isLoaderLoaded) {
      try {
        Loader.LoaderWidget = ue.UMGManager.CreateWidget(
          GlobalData.GlobalData.LoaderClass,
          ResourceSystem.ResourceSystem.GetResource("/Game/Aki/UMG/Loader.Loader_C", ue.Class)
        );
      } catch (error) {
        ModUtils.Log.Error("Error loading widget: " + error, "error");
        return;
      }
    }

    try {
      if (Loader.LoaderWidget) {
        Loader.LoaderWidget.ProgressBar.SetPercent(0);
        Loader.LoaderWidget.LoadingText.SetText("0%");
        Loader.LoaderWidget.SetVisibility(100);
        Loader.LoaderWidget.AddToViewport(0);
        clearInterval(ModMenu.ModMenu.LoaderInterval);
        ModMenu.ModMenu.LoaderInterval = null;
        ModUtils.Log.Info("Loader showed!");
        Loader.isLoaderLoaded = true;
        this.IncreaseProgress();
      }
    } catch (error) {
      ModUtils.Log.Error(error, "error");
      if (Loader.retryCount < Loader.maxRetries) {
        Loader.retryCount++;
        setTimeout(() => {
          Loader.RenderLoader();
        }, 1500);
      } else {
        ModUtils.Log.Error("Max retries reached. Failed to start mod menu...", "error");
      }
    }
  }

  static UpdateLoadingText() {
    if (this.progress < 40) {
      this.LoaderWidget.LoadingText.SetText("Preparing mod menu.");
    } else if (this.progress >= 40 && this.progress < 100) {
      this.LoaderWidget.LoadingText.SetText("Loading mod menu...");
    } else if (this.progress >= 100) {
      this.LoaderWidget.LoadingText.SetText("Mod menu loaded!");
    }
  }

  static IncreaseProgress() {
    try {
      this.intervalProgress = setInterval(() => {
        if (!this.LoaderWidget) return;

        this.UpdateLoadingText();
        let progressValue = this.progress / 100;
        this.LoaderWidget.ProgressBar.SetPercent(progressValue);
        this.LoaderWidget.LoadingText.SetText(this.progress + "%");

        if (this.progress >= 100) {
          clearInterval(this.intervalProgress);
          this.intervalProgress = null;
          setTimeout(() => {
            this.LoaderWidget.SetVisibility(2);
          }, 3000);
          return;
        }

        if (this.progress < 80) {
          this.progress += 20;
        }
      }, 1000);
    } catch (error) {
      ModUtils.Log.Error(error, "error");
    }
  }
}

exports.Loader = Loader;