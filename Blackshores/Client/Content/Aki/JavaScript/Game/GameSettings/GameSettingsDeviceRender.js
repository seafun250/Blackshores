"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.GameSettingsDeviceRender = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Info_1 = require("../../Core/Common/Info"),
  Log_1 = require("../../Core/Common/Log"),
  MathUtils_1 = require("../../Core/Utils/MathUtils"),
  Platform_1 = require("../../Launcher/Platform/Platform"),
  EventDefine_1 = require("../Common/Event/EventDefine"),
  EventSystem_1 = require("../Common/Event/EventSystem"),
  GlobalData_1 = require("../GlobalData"),
  ConfigManager_1 = require("../Manager/ConfigManager"),
  PerfSightController_1 = require("../PerfSight/PerfSightController"),
  GameSettingsDefine_1 = require("./GameSettingsDefine"),
  GameSettingsDeviceRenderDefine_1 = require("./GameSettingsDeviceRenderDefine"),
  GameSettingsManager_1 = require("./GameSettingsManager");
class GameSettingsDeviceRender {
  static get Qlc() {
    if (void 0 === this.Klc) {
      var e =
        ConfigManager_1.ConfigManager.GameSettingsConfig.GetDeviceRenderFeatureConfigListByDeviceId(
          this.DeviceType
        );
      if (void 0 === e)
        return void (
          Log_1.Log.CheckError() &&
          Log_1.Log.Error("GameSettings", 64, "当前机型未定义RenderFeature", [
            "deviceType",
            this.DeviceType,
          ])
        );
      this.Klc = new Map();
      for (const t of e) this.Klc.set(t.QualityType, t);
    }
    return this.Klc;
  }
  static get oml() {
    if (void 0 === this.Xlc) {
      var e =
        ConfigManager_1.ConfigManager.GameSettingsConfig.GetDeviceRenderFeatureConfigListByDeviceId(
          this.DeviceType
        );
      if (void 0 === e)
        return void (
          Log_1.Log.CheckError() &&
          Log_1.Log.Error("GameSettings", 64, "当前机型未定义RenderFeature", [
            "deviceType",
            this.DeviceType,
          ])
        );
      for (const t of e)
        if (1 === t.DefaultQuality) {
          this.Xlc = t.QualityType;
          break;
        }
    }
    return this.Xlc;
  }
  static get GameQualitySettingLevel() {
    return GameSettingsManager_1.GameSettingsManager.GetCurrentValueSafely(
      GameSettingsDefine_1.EFunction.IMAGEQUALITY,
      2
    );
  }
  static get eMe() {
    return GameSettingsDeviceRender.IsRedMagic()
      ? GameSettingsDeviceRenderDefine_1.frameRateListAndroidForRedMagic
      : GameSettingsDeviceRenderDefine_1.frameRateListAndroid;
  }
  static InitializeBaseInfo() {
    (this.ANa = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetPhysicalGBRam()),
      (this.DNa = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRHIVendorName()),
      (this.RNa = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRHIDeviceName()),
      (this.UNa = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetDeviceProfileBaseProfileName()),
      (this.DeviceScore = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetDeviceProfileDeviceScore()),
      (this.xNa = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRHIName()),
      (this.PNa = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetDeviceHardwareLevel()),
      (this.DriverDate = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRHIDriverDate()),
      (this.IsAdreno =
        UE.KuroRenderingRuntimeBPPluginBPLibrary.GetDeviceProfileProfileName().includes("Adreno")),
      (this.kE1 = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetMobileDeviceModel()),
      (this.CPUFrequency = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetCPUFrequency()),
      (this.CPUCores = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetCPUCores()),
      (this.CPUCoresIncludingHyperthreads =
        UE.KuroRenderingRuntimeBPPluginBPLibrary.GetCPUCoresIncludingHyperthreads()),
      (this.CPUBrand = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetCPUBrand()),
      (this.IsSupportedAFME = UE.KismetRenderingLibrary.IsSupportedAFME()),
      Platform_1.Platform.IsMobilePlatform()
        ? UE.KismetSystemLibrary.ExecuteConsoleCommand(
            GlobalData_1.GlobalData.World,
            "r.Mobile.UseClusteredDeferredShading -1"
          )
        : UE.KismetSystemLibrary.ExecuteConsoleCommand(
            GlobalData_1.GlobalData.World,
            "r.Mobile.UseClusteredDeferredShading 2"
          ),
      Platform_1.Platform.IsIOSPlatform()
        ? ((this.DeviceType = 32),
          this.DeviceScore < 150
            ? (this.DeviceType = 31)
            : 250 < this.DeviceScore && this.DeviceScore < 360
              ? (this.DeviceType = 33)
              : 360 <= this.DeviceScore && (this.DeviceType = 34),
          this.ANa < 4 && (this.DeviceType = 31))
        : Platform_1.Platform.IsAndroidPlatform() ||
            0 ===
              UE.KuroRenderingRuntimeBPPluginBPLibrary.GetWorldFeatureLevel(
                GlobalData_1.GlobalData.World
              )
          ? ("Android_Low" === this.UNa
              ? (this.DeviceType = 21)
              : "Android_Mid" === this.UNa
                ? (this.DeviceType = 22)
                : "Android_High" === this.UNa
                  ? (this.DeviceType = 23)
                  : "Android_VeryHigh" === this.UNa
                    ? (this.DeviceType = 24)
                    : (this.DeviceType = 22),
            this.IsHuaweiNewPhone() ||
              this.IsMaliNewSocOrXclipseOrPowerVR() ||
              UE.KismetSystemLibrary.ExecuteConsoleCommand(
                GlobalData_1.GlobalData.World,
                "r.HZBOcclusion 2"
              ))
          : Platform_1.Platform.IsPs5Platform()
            ? (this.DeviceType = 41)
            : Platform_1.Platform.IsMacPlatform()
              ? "Mac_Low" === this.UNa
                ? (this.DeviceType = 11)
                : "Mac_Mid" === this.UNa || "Mac_High" === this.UNa
                  ? (this.DeviceType = 12)
                  : "Mac_VeryHigh" === this.UNa
                    ? ((this.DeviceType = 13), (this.DeviceScore = 550))
                    : (this.DeviceType = 13)
              : Platform_1.Platform.IsCloudGame()
                ? (this.DeviceType = 51)
                : "Windows_Low" === this.UNa
                  ? (this.DeviceType = 11)
                  : "Windows_Mid" === this.UNa
                    ? (this.DeviceType = 12)
                    : "Windows_High" !== this.UNa &&
                        ("Windows_VeryHigh" === this.UNa || "Windows" === this.UNa)
                      ? (this.DeviceType = 14)
                      : (this.DeviceType = 13),
      this.iml(),
      Log_1.Log.CheckInfo() &&
        Log_1.Log.Info(
          "Render",
          64,
          "初始化当前设备基本信息",
          ["VendorName", this.DNa],
          ["DeviceName", this.RNa],
          ["BaseProfileName", this.UNa],
          ["PhysicalGBRam", this.ANa],
          ["DeviceScore", this.DeviceScore],
          ["RHIName", this.xNa],
          ["HardwareLevel", this.PNa],
          ["DeviceType", this.DeviceType],
          ["QualityRange", this.rml],
          ["platform", Platform_1.Platform.Type],
          ["MobileDeviceModel", this.kE1]
        );
  }
  static Initialize() {
    EventSystem_1.EventSystem.Emit(
      EventDefine_1.EEventName.AfterGameQualitySettingsManagerInitialize
    );
  }
  static Clear() {
    this.CancelAllPerformanceLimit();
  }
  static IsDriverNeedUpdate() {
    var e = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(this.DriverDate);
    return (
      (4 === e?.length && Number(e[3]) < 2023) ||
      !UE.KuroRenderingRuntimeBPPluginBPLibrary.GetDriverValid()
    );
  }
  static IsDriverNeedUpdateForRayTracing() {
    var e = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(this.DriverDate);
    return (
      (4 === e?.length && Number(e[3]) < 2024) ||
      (4 === e?.length && 2024 === Number(e[3]) && Number(e[1]) < 6) ||
      (4 === e?.length && 2024 === Number(e[3]) && 6 === Number(e[1]) && Number(e[2]) < 4)
    );
  }
  static IsDxr1_1NotSupported() {
    return 1 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType();
  }
  static iml() {
    switch (this.DeviceType) {
      case 11:
      case 12:
      case 15:
      case 21:
      case 22:
      case 31:
      case 32:
        break;
      case 13:
      case 14:
      case 23:
      case 24:
      case 33:
      case 34:
        this.rml = 1;
        break;
      case 35:
        break;
      case 41:
        this.rml = 2;
        break;
      case 51:
        this.rml = 3;
        break;
      default:
        this.rml = 0;
    }
  }
  static GetDeviceRenderFeature(e) {
    return this.Qlc?.get(e);
  }
  static GetCurrentDeviceRenderFeature() {
    return this.Qlc?.get(this.GameQualitySettingLevel);
  }
  static GetDefaultDeviceRenderFeature() {
    var e = this.Qlc;
    if (void 0 !== e) for (var [, t] of e) if (1 === t.DefaultQuality) return t;
  }
  static GetOtherChangedValue(e) {
    return (
      this.Ylc.clear(),
      this.Ylc.set(GameSettingsDefine_1.EFunction.HIGHESTFPS, this.GetFrameIndexByList(e.FPS)),
      this.Ylc.set(GameSettingsDefine_1.EFunction.SHADOWQUALITY, e.ShadowQuality),
      this.Ylc.set(GameSettingsDefine_1.EFunction.NIAGARAQUALITY, e.FxQuality),
      this.Ylc.set(GameSettingsDefine_1.EFunction.IMAGEDETAIL, e.ImageDetail),
      this.Ylc.set(GameSettingsDefine_1.EFunction.ANTIALISING, e.AntiAliasing),
      this.Ylc.set(GameSettingsDefine_1.EFunction.SCENEAO, e.AO),
      this.Ylc.set(GameSettingsDefine_1.EFunction.VOLUMEFOG, e.VolumeFog),
      this.Ylc.set(GameSettingsDefine_1.EFunction.VOLUMELIGHT, e.VolumeLight),
      this.Ylc.set(GameSettingsDefine_1.EFunction.MOTIONBLUR, e.MotionBlur),
      this.Ylc.set(GameSettingsDefine_1.EFunction.PCVSYNC, e.VSync),
      this.Ylc.set(GameSettingsDefine_1.EFunction.MOBILERESOLUTION, e.ScreenPercentage),
      this.Ylc.set(GameSettingsDefine_1.EFunction.NPCDENSITY, e.NpcDensity),
      this.Ylc.set(GameSettingsDefine_1.EFunction.BLOOM, e.Bloom),
      this.Ylc
    );
  }
  static IsIosAndAndroidHighDevice() {
    return (
      23 === this.DeviceType ||
      24 === this.DeviceType ||
      33 === this.DeviceType ||
      34 === this.DeviceType
    );
  }
  static IsAndroidPlatformNotLow() {
    return 22 === this.DeviceType || 23 === this.DeviceType || 24 === this.DeviceType;
  }
  static IsAndroidPlatformScreenBetter() {
    return 23 === this.DeviceType || 24 === this.DeviceType;
  }
  static IsAndroidPlatformScreenBad() {
    return 21 === this.DeviceType || 22 === this.DeviceType;
  }
  static IsAndroidPlatformLow() {
    return 21 === this.DeviceType;
  }
  static IsPcPlatformVeryHigh() {
    return 15 === this.DeviceType;
  }
  static IsAndroidAdreno() {
    return this.IsAdreno;
  }
  static IsRedMagic() {
    return this.kE1.includes("NX789J");
  }
  static IsLowMemoryDevice() {
    return (
      (1 === Info_1.Info.PlatformType && this.ANa < 4) ||
      (2 === Info_1.Info.PlatformType && this.ANa <= 4)
    );
  }
  static GetD3D12Type() {
    return this.xNa.includes("D3D12") ? 1 : 0;
  }
  static IsVulkanRHI() {
    return this.xNa.includes("Vulkan") ? 1 : 0;
  }
  static IsFoldingScreen() {
    var e =
      UE.KuroRenderingRuntimeBPPluginBPLibrary.GetAndroidRawResolution().X /
      UE.KuroRenderingRuntimeBPPluginBPLibrary.GetAndroidRawResolution().Y;
    return (
      (e < 1.8 || 2.6 < e) &&
      (Log_1.Log.CheckInfo() && Log_1.Log.Info("Render", 59, "折叠屏适配", ["ScreenRatio", e]), !0)
    );
  }
  static IsMaliNewSocOrXclipseOrPowerVR() {
    return !!(
      this.RNa.includes("G710") ||
      this.RNa.includes("G715") ||
      this.RNa.includes("G720") ||
      this.RNa.includes("G610") ||
      this.RNa.includes("G615") ||
      this.RNa.includes("G620") ||
      this.RNa.includes("Xclipse") ||
      this.RNa.includes("BXM-8-256")
    );
  }
  static IsHuaweiNewPhone() {
    return this.DNa
      ? !!this.RNa.includes("Maleoon")
      : (Log_1.Log.CheckError() && Log_1.Log.Error("Render", 40, "GameSettingsManager尚未初始化"),
        !1);
  }
  static IsUltraGpuDevice() {
    return this.DNa
      ? !("NVIDIA" !== this.DNa || !this.RNa.includes("RTX"))
      : (Log_1.Log.CheckError() && Log_1.Log.Error("Render", 40, "GameSettingsManager尚未初始化"),
        !1);
  }
  static IsNvidia4060() {
    return "NVIDIA" === this.DNa && this.RNa.includes("4060");
  }
  static Is120FrameGPU() {
    return this.DNa
      ? ("AMD" === this.DNa || "NVIDIA" === this.DNa) && 1300 < this.DeviceScore
      : (Log_1.Log.CheckError() &&
          Log_1.Log.Error("Render", 40, "GameQualitySettingsManager尚未初始化"),
        !1);
  }
  static IsLaptopCPU() {
    return !!(
      this.CPUBrand.includes("14900") ||
      this.CPUBrand.includes("14790") ||
      this.CPUBrand.includes("14700") ||
      this.CPUBrand.includes("14650") ||
      this.CPUBrand.includes("14600") ||
      this.CPUBrand.includes("14500") ||
      this.CPUBrand.includes("14490") ||
      this.CPUBrand.includes("14450") ||
      this.CPUBrand.includes("14400") ||
      this.CPUBrand.includes("13980") ||
      this.CPUBrand.includes("13950") ||
      this.CPUBrand.includes("13905") ||
      this.CPUBrand.includes("13900") ||
      this.CPUBrand.includes("13800") ||
      this.CPUBrand.includes("13790") ||
      this.CPUBrand.includes("13705") ||
      this.CPUBrand.includes("13700") ||
      this.CPUBrand.includes("13650") ||
      this.CPUBrand.includes("13620") ||
      this.CPUBrand.includes("13600") ||
      this.CPUBrand.includes("13500") ||
      this.CPUBrand.includes("13490") ||
      this.CPUBrand.includes("13450") ||
      this.CPUBrand.includes("13400") ||
      this.CPUBrand.includes("12950") ||
      this.CPUBrand.includes("12900") ||
      this.CPUBrand.includes("12850") ||
      this.CPUBrand.includes("12800") ||
      this.CPUBrand.includes("12700") ||
      this.CPUBrand.includes("12650") ||
      this.CPUBrand.includes("12600") ||
      this.CPUBrand.includes("12500") ||
      this.CPUBrand.includes("11980") ||
      this.CPUBrand.includes("11950") ||
      this.CPUBrand.includes("11900") ||
      this.CPUBrand.includes("11850") ||
      this.CPUBrand.includes("11800") ||
      this.CPUBrand.includes("11700") ||
      this.CPUBrand.includes("10980") ||
      this.CPUBrand.includes("10940") ||
      this.CPUBrand.includes("10920") ||
      this.CPUBrand.includes("10900") ||
      this.CPUBrand.includes("10885") ||
      this.CPUBrand.includes("10875") ||
      this.CPUBrand.includes("10870") ||
      this.CPUBrand.includes("10850") ||
      this.CPUBrand.includes("10700") ||
      this.CPUBrand.includes("9980") ||
      this.CPUBrand.includes("9940") ||
      this.CPUBrand.includes("9920") ||
      this.CPUBrand.includes("9900") ||
      this.CPUBrand.includes("9880") ||
      this.CPUBrand.includes("9820") ||
      this.CPUBrand.includes("9800") ||
      this.CPUBrand.includes("9-7900") ||
      this.CPUBrand.includes("7-7820") ||
      this.CPUBrand.includes("7-6900") ||
      this.CPUBrand.includes("9-185") ||
      this.CPUBrand.includes("7-165") ||
      this.CPUBrand.includes("7-155") ||
      this.CPUBrand.includes("5-135") ||
      this.CPUBrand.includes("5-125") ||
      this.CPUBrand.includes("9-3495") ||
      this.CPUBrand.includes("9-3475") ||
      this.CPUBrand.includes("7-3465") ||
      this.CPUBrand.includes("7-3455") ||
      this.CPUBrand.includes("7-3445") ||
      this.CPUBrand.includes("5-3435") ||
      this.CPUBrand.includes("5-3425") ||
      this.CPUBrand.includes("7-1270") ||
      this.CPUBrand.includes("7-1260") ||
      this.CPUBrand.includes("5-1250") ||
      this.CPUBrand.includes("5-1240") ||
      this.CPUBrand.includes("9700") ||
      this.CPUBrand.includes("9600") ||
      this.CPUBrand.includes("8945") ||
      this.CPUBrand.includes("8845") ||
      this.CPUBrand.includes("8840") ||
      this.CPUBrand.includes("8700") ||
      this.CPUBrand.includes("7980") ||
      this.CPUBrand.includes("7970") ||
      this.CPUBrand.includes("7960") ||
      this.CPUBrand.includes("7950") ||
      this.CPUBrand.includes("7945") ||
      this.CPUBrand.includes("7940") ||
      this.CPUBrand.includes("7900") ||
      this.CPUBrand.includes("7845") ||
      this.CPUBrand.includes("7840") ||
      this.CPUBrand.includes("7800") ||
      this.CPUBrand.includes("7745") ||
      this.CPUBrand.includes("7735") ||
      this.CPUBrand.includes("7700") ||
      this.CPUBrand.includes("6980") ||
      this.CPUBrand.includes("6900") ||
      this.CPUBrand.includes("6800") ||
      this.CPUBrand.includes("5980") ||
      this.CPUBrand.includes("5975") ||
      this.CPUBrand.includes("5965") ||
      this.CPUBrand.includes("5955") ||
      this.CPUBrand.includes("5950") ||
      this.CPUBrand.includes("5945") ||
      this.CPUBrand.includes("5900") ||
      this.CPUBrand.includes("5800") ||
      this.CPUBrand.includes("5700") ||
      this.CPUBrand.includes("4900") ||
      this.CPUBrand.includes("4800") ||
      this.CPUBrand.includes("4700") ||
      this.CPUBrand.includes("3975") ||
      this.CPUBrand.includes("3970") ||
      this.CPUBrand.includes("3960") ||
      this.CPUBrand.includes("3955") ||
      this.CPUBrand.includes("3950") ||
      this.CPUBrand.includes("3945") ||
      this.CPUBrand.includes("3900") ||
      this.CPUBrand.includes("3800") ||
      this.CPUBrand.includes("3700") ||
      this.CPUBrand.includes("2950") ||
      this.CPUBrand.includes("2920") ||
      this.CPUBrand.includes("2700") ||
      this.CPUBrand.includes("1950") ||
      this.CPUBrand.includes("1920") ||
      this.CPUBrand.includes("1900") ||
      this.CPUBrand.includes("1800") ||
      this.CPUBrand.includes("1700")
    );
  }
  static IsFrameRate120IOSDevice() {
    return 1 === Info_1.Info.PlatformType && 500 < this.DeviceScore;
  }
  static IsFrameRate120MacDevice() {
    return 4 === Info_1.Info.PlatformType && 500 < this.DeviceScore;
  }
  static IsFrameRate120Device() {
    return true;
    return (
      Log_1.Log.CheckInfo() &&
        Log_1.Log.Info(
          "Render",
          68,
          "判断IsFrameRate120Device",
          ["this.CPUFrequency", this.CPUFrequency],
          ["this.CPUCoresIncludingHyperthreads", this.CPUCoresIncludingHyperthreads],
          ["this.IsLaptopCPU", this.IsLaptopCPU()],
          ["this.Is120FrameGPU", this.Is120FrameGPU()]
        ),
      !(
        !(
          (3e3 <= this.CPUFrequency && 16 <= this.CPUCoresIncludingHyperthreads) ||
          this.IsLaptopCPU()
        ) || !this.Is120FrameGPU()
      )
    );
  }
  static IsAndroidHighestResolutionDevice() {
    return 24 === this.DeviceType;
  }
  static IsAndroidHighResolutionDevice() {
    return 23 === this.DeviceType || 24 === this.DeviceType;
  }
  static IsMetalFxDevice() {
    return UE.KuroRenderingRuntimeBPPluginBPLibrary.IsSupportsMetalFx();
  }
  static IsPWSDKDevice() {
    return !1;
  }
  static IsIRXActive() {
    return 2 === Info_1.Info.PlatformType && 2 === UE.PWSDKInterfaceBP.GetDeviceIRXState();
  }
  static TurnOffIRX() {
    this.IsPWSDKDevice() && UE.PWSDKInterfaceBP.TurnOffSRAndFRC();
  }
  static TurnOnIRX() {
    this.IsPWSDKDevice() && UE.PWSDKInterfaceBP.TurnOnSRAndFRC();
  }
  static IsNvidiaDlessPluginLoaded() {
    return 1 === UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.NGX.Enable");
  }
  static IsNvidiaStreamlinePluginLoaded() {
    return UE.KismetSystemLibrary.GetConsoleVariableBoolValue(
      "r.Streamline.UnregisterReflexPlugin"
    );
  }
  static IsNvidiaDlssPluginLoaded() {
    return 1 === UE.KismetSystemLibrary.GetConsoleVariableIntValue("r.NGX.Enable");
  }
  static IsDlssGpuDevice() {
    return this.DNa
      ? !("NVIDIA" !== this.DNa || !this.RNa.includes("RTX"))
      : (Log_1.Log.CheckError() && Log_1.Log.Error("Render", 40, "GameSettingsManager尚未初始化"),
        !1);
  }
  static jT1(e) {
    return (e = e && /RTX\s*(\d+)/i.exec(e)) && e[1] ? parseInt(e[1]) : void 0;
  }
  static LA1(e) {
    return (e = e && /RX\s*(\d+)/i.exec(e)) && e[1] ? parseInt(e[1]) : void 0;
  }
  static IsRayTracingGpuDevice() {
    if ("intel" === this.DNa.toLowerCase())
      return 0 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType();
    if ("amd" === this.DNa.toLowerCase())
      return void 0 === (e = this.LA1(this.RNa))
        ? (Log_1.Log.CheckWarn() &&
            Log_1.Log.Warn("Render", 64, "非AMD RX系列，或者型号解析不出来，不能开启光追"),
          !1)
        : MathUtils_1.MathUtils.InRangeArray(e, [6700, 6799]) ||
            MathUtils_1.MathUtils.InRangeArray(e, [7600, 7699]) ||
            MathUtils_1.MathUtils.InRangeArray(e, [9e3, 9999])
          ? (Log_1.Log.CheckWarn() && Log_1.Log.Warn("Render", 64, "AMD RX 某些型号不支持光追"), !1)
          : 0 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType();
    if ("nvidia" === this.DNa.toLowerCase()) {
      if (this.RNa.toLowerCase().includes("titan rtx"))
        return 0 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType();
      var e = this.jT1(this.RNa);
      if (void 0 === e)
        Log_1.Log.CheckWarn() &&
          Log_1.Log.Warn("Render", 64, "非RTX系列，或者型号解析不出来，不能开启光追");
      else {
        if (2070 <= e && (e < 3e3 || 3060 <= e))
          return 0 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType();
        Log_1.Log.CheckWarn() && Log_1.Log.Warn("Render", 64, "NVIDIA RTX 某些型号不支持光追");
      }
    } else
      Log_1.Log.CheckWarn() &&
        Log_1.Log.Warn(
          "Render",
          64,
          "不可识别的显卡类型，不能开启光追",
          ["vendorName", this.DNa],
          ["deviceName", this.RNa]
        );
    return !1;
  }
  static IsShowRayTracingSetting() {
    return (
      this.IsRayTracingGpuDevice() ||
      1 === UE.KuroRenderingRuntimeBPPluginBPLibrary.GetRayTracingSupportedType()
    );
  }
  static IsDlss3HardwareSchedulingDisabled() {
    return this.DNa
      ? GameSettingsDeviceRender.IsNvidiaDlssPluginLoaded() &&
        GameSettingsDeviceRender.IsNvidiaStreamlinePluginLoaded()
        ? 5 === UE.StreamlineLibraryDLSSG.QueryDLSSGSupport()
        : (Log_1.Log.CheckError() && Log_1.Log.Error("Render", 73, "DlSS or Streamline尚未加载"),
          !1)
      : (Log_1.Log.CheckError() && Log_1.Log.Error("Render", 40, "GameSettingsManager尚未初始化"),
        !1);
  }
  static IsDlss3GpuDevice() {
    return this.DNa
      ? !("NVIDIA" !== this.DNa || (!this.RNa.includes("RTX 40") && !this.RNa.includes("RTX 50")))
      : (Log_1.Log.CheckError() && Log_1.Log.Error("Render", 40, "GameSettingsManager尚未初始化"),
        !1);
  }
  static IsFsrDevice() {
    var e = GameSettingsDeviceRender.IsDlssGpuDevice(),
      t = UE.XeSSBlueprintLibrary.IsXeSSSupported();
    return !e && !t && !GameSettingsDeviceRender.IsMetalFxDevice();
  }
  static IsVulkanDevice() {
    let e = !1;
    if (UE.KismetSystemLibrary.IsVulkanAutoDetectMode())
      e = UE.KuroRenderingRuntimeBPPluginBPLibrary.SupportVulkan();
    else {
      var s = UE.KismetSystemLibrary.GetVulkanAllowedModels(),
        a = UE.KismetSystemLibrary.GetVulkanBlockedModels(),
        r = UE.KuroRenderingRuntimeBPPluginBPLibrary.GetMobileDeviceModel();
      if (0 !== r.length) {
        let t = !1;
        for (let e = 0; e < s.Num(); ++e)
          if (s.Get(e).includes(r)) {
            t = !0;
            break;
          }
        let i = !1;
        for (let e = 0; e < a.Num(); ++e)
          if (a.Get(e).includes(r)) {
            i = !0;
            break;
          }
        e = t && !i;
      }
    }
    return e;
  }
  static IsEnableVolumeFog() {
    return this.dMe;
  }
  static CloseVolumeFog() {
    (this.dMe = !1),
      UE.KismetSystemLibrary.ExecuteConsoleCommand(
        GlobalData_1.GlobalData.World,
        "r.volumetricfog 0"
      );
  }
  static GetResolutionByList(e) {
    var t = this.GetResolutionList();
    return t[MathUtils_1.MathUtils.Clamp(e, 0, t.length - 1)];
  }
  static GetResolutionList() {
    var t = [];
    if (!t.length) {
      if (
        ((this.Vve = (0, puerts_1.$ref)(UE.NewArray(UE.IntPoint))),
        UE.KismetSystemLibrary.GetSupportedFullscreenResolutions(this.Vve))
      ) {
        var i = (0, puerts_1.$unref)(this.Vve);
        for (let e = i.Num() - 1; 0 <= e; --e) {
          var s = i.Get(e);
          s && t.push(s),
            Log_1.Log.CheckDebug() && Log_1.Log.Debug("Menu", 64, "", ["resolution", s]);
        }
      }
      t.length
        ? t.sort((e, t) => (e.X === t.X ? t.Y - e.Y : t.X - e.X))
        : (t.push(UE.GameUserSettings.GetGameUserSettings().GetDesktopResolution()),
          Log_1.Log.CheckWarn() && Log_1.Log.Warn("Menu", 40, "获取分辨率列表失败"));
    }
    return 0 < t.length && 3620 === t[0].X && 2036 === t[0].Y && t.shift(), t;
  }
  static GetResolutionIndexByList(e) {
    var t = this.GetResolutionList();
    Log_1.Log.CheckInfo() &&
      Log_1.Log.Info(
        "Render",
        64,
        "获取分辨率索引时的列表",
        ["resolutionList", t],
        ["current resolution", e]
      );
    let i = 0;
    for (const s of t) {
      if (s.op_Equality(e)) return i;
      ++i;
    }
    return -1;
  }
  static GetDefaultScreenResolution() {
    if (!this.jve) {
      var t = this.GetResolutionList();
      if (t.length) {
        let e = t[0];
        if (
          !this.IsUltraGpuDevice() &&
          (e.X > GameSettingsDeviceRenderDefine_1.HD_SCREEN_WIDTH ||
            e.Y > GameSettingsDeviceRenderDefine_1.HD_SCREEN_HEIGHT)
        )
          for (const i of t)
            if (
              i.X < GameSettingsDeviceRenderDefine_1.HD_SCREEN_WIDTH &&
              i.Y < GameSettingsDeviceRenderDefine_1.HD_SCREEN_HEIGHT
            ) {
              e = i;
              break;
            }
        this.jve = e;
      } else this.jve = UE.GameUserSettings.GetGameUserSettings().GetDesktopResolution();
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug("Render", 40, `默认分辨率：${this.jve.X}x` + this.jve.Y);
    }
    return this.jve;
  }
  static GetMobileResolutionByIndex(e) {
    return (
      1 === Info_1.Info.PlatformType
        ? [70, 80, 85, 100]
        : this.IsAndroidPlatformLow()
          ? [60, 80, 85, 90]
          : this.IsAndroidHighestResolutionDevice()
            ? [66, 75, 83, 100]
            : [80, 90, 100, 100]
    )[e];
  }
  static GetFrameIndexByList(e) {
    return 1 === Info_1.Info.PlatformType
      ? GameSettingsDeviceRenderDefine_1.frameRateListIos.includes(e)
        ? GameSettingsDeviceRenderDefine_1.frameRateListIos.indexOf(e)
        : (Log_1.Log.CheckError() &&
            Log_1.Log.Error(
              "GameSettings",
              64,
              "[ios]当前帧数不在帧数列表中，返回0",
              ["frameRate", e],
              ["list", GameSettingsDeviceRenderDefine_1.frameRateListIos]
            ),
          0)
      : 2 === Info_1.Info.PlatformType
        ? GameSettingsDeviceRender.eMe.includes(e)
          ? GameSettingsDeviceRender.eMe.indexOf(e)
          : 40 <= e && e <= 45 && GameSettingsDeviceRender.eMe.includes(40)
            ? GameSettingsDeviceRender.eMe.indexOf(40)
            : (Log_1.Log.CheckError() &&
                Log_1.Log.Error(
                  "GameSettings",
                  64,
                  "[android]当前帧数不在帧数列表中，返回0",
                  ["frameRate", e],
                  ["list", GameSettingsDeviceRender.eMe]
                ),
              0)
        : GameSettingsDeviceRenderDefine_1.frameRateListPc.includes(e)
          ? GameSettingsDeviceRenderDefine_1.frameRateListPc.indexOf(e)
          : (Log_1.Log.CheckError() &&
              Log_1.Log.Error(
                "GameSettings",
                64,
                "[pc]当前帧数不在帧数列表中，返回0",
                ["frameRate", e],
                ["list", GameSettingsDeviceRender.eMe]
              ),
            0);
  }
  static GetFrameByList(e) {
    if (1 === Info_1.Info.PlatformType) {
      const t = MathUtils_1.MathUtils.Clamp(
        e,
        0,
        GameSettingsDeviceRenderDefine_1.frameRateListIos.length - 1
      );
      return GameSettingsDeviceRenderDefine_1.frameRateListIos[t];
    }
    if (2 === Info_1.Info.PlatformType) {
      const t = MathUtils_1.MathUtils.Clamp(e, 0, GameSettingsDeviceRender.eMe.length - 1);
      return GameSettingsDeviceRender.eMe[t];
    }
    const t = MathUtils_1.MathUtils.Clamp(
      e,
      0,
      GameSettingsDeviceRenderDefine_1.frameRateListPc.length - 1
    );
    return GameSettingsDeviceRenderDefine_1.frameRateListPc[t];
  }
  static ApplyDLSSG(e) {
    0 === e
      ? (this.ApplyFrameRate(this.BNa),
        UE.StreamlineLibraryDLSSG.SetDLSSGMode(0),
        Log_1.Log.CheckInfo() && Log_1.Log.Info("Game", 47, "EnableDLSSG 0"))
      : this.Xn_ &&
        (this.ApplyFrameRate(0),
        UE.StreamlineLibraryDLSSG.SetDLSSGMode(2),
        Log_1.Log.CheckInfo()) &&
        Log_1.Log.Info("Game", 47, "EnableDLSSG 1");
  }
  static EnableDLSSG(e) {
    (this.Xn_ = 0 !== e),
      0 === e
        ? (UE.StreamlineLibraryReflex.SetReflexMode(0),
          Log_1.Log.CheckInfo() && Log_1.Log.Info("Game", 47, "SetReflexMode 0"))
        : (UE.StreamlineLibraryReflex.SetReflexMode(3),
          Log_1.Log.CheckInfo() && Log_1.Log.Info("Game", 47, "SetReflexMode 3"));
  }
  static IsEnableDLSSG() {
    return this.Xn_;
  }
  static TemporaryDisableDLSSG(e) {
    GameSettingsDeviceRender.IsDlss3GpuDevice() &&
      GameSettingsDeviceRender.IsNvidiaStreamlinePluginLoaded() &&
      (this.cZ_.set(e, 1),
      0 < this.cZ_.size && GameSettingsDeviceRender.ApplyDLSSG(0),
      Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info(
        "Functional",
        47,
        "disable DLSSG temploary",
        ["key", e],
        ["num", this.cZ_.size]
      );
  }
  static CancelTemporaryDisableDLSSG(e) {
    GameSettingsDeviceRender.IsDlss3GpuDevice() &&
      GameSettingsDeviceRender.IsNvidiaStreamlinePluginLoaded() &&
      (this.cZ_.delete(e),
      0 === this.cZ_.size &&
        GameSettingsDeviceRender.IsEnableDLSSG() &&
        GameSettingsDeviceRender.ApplyDLSSG(1),
      Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info("Functional", 47, "recover DLSSG", ["key", e], ["num", this.cZ_.size]);
  }
  static EnableAFME(e) {
    (this.FA1 = 0 !== e), this.ApplyAFME();
  }
  static ApplyAFME() {
    !(0 < this.NA1.size) && this.FA1
      ? UE.KismetSystemLibrary.ExecuteConsoleCommand(
          GlobalData_1.GlobalData.World,
          "r.FEstimation.Option 0"
        )
      : UE.KismetSystemLibrary.ExecuteConsoleCommand(
          GlobalData_1.GlobalData.World,
          "r.FEstimation.Option 1"
        );
  }
  static TemporaryDisableAFME(e) {
    var t;
    this.IsSupportedAFME &&
      ((t = 0 === this.NA1.size),
      this.NA1.set(e, 1),
      t && this.ApplyAFME(),
      Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info(
        "Functional",
        40,
        "disable AFME temploary",
        ["key", e],
        ["num", this.NA1.size],
        ["ApplyAFME", t]
      );
  }
  static CancelTemporaryDisableAFME(e) {
    var t;
    this.IsSupportedAFME &&
      0 < this.NA1.size &&
      (this.NA1.delete(e), (t = 0 === this.NA1.size) && this.ApplyAFME(), Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info(
        "Functional",
        40,
        "recover AFME",
        ["key", e],
        ["num", this.NA1.size],
        ["ApplyAFME", t]
      );
  }
  static TemporaryDisableFrameGeneration(e) {
    this.IsSupportedAFME && this.TemporaryDisableAFME(e),
      GameSettingsDeviceRender.IsDlss3GpuDevice() &&
        GameSettingsDeviceRender.IsNvidiaStreamlinePluginLoaded() &&
        this.TemporaryDisableDLSSG(e);
  }
  static CancelTemporaryDisableFrameGeneration(e) {
    this.IsSupportedAFME && this.CancelTemporaryDisableAFME(e),
      GameSettingsDeviceRender.IsDlss3GpuDevice() &&
        GameSettingsDeviceRender.IsNvidiaStreamlinePluginLoaded() &&
        this.CancelTemporaryDisableDLSSG(e);
  }
  static ApplyFrameRate(e) {
    let t = 0;
    0 < e &&
      ((this.BNa = MathUtils_1.MathUtils.Clamp(e, 24, 120)),
      this.IsIRXActive() &&
        1 ===
          GameSettingsManager_1.GameSettingsManager.GetCurrentValue(
            GameSettingsDefine_1.EFunction.IRX
          ) &&
        (this.BNa = 30),
      (this.bNa = 1 / this.BNa),
      (t = this.BNa),
      0 < this.yve) &&
      (t = this.yve);
    e = UE.GameUserSettings.GetGameUserSettings();
    e.SetFrameRateLimit(t),
      e.ApplySettings(!0),
      PerfSightController_1.PerfSightController.IsEnable &&
        UE.PerfSightHelper.PostEvent(801, t.toString()),
      EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.SettingFrameRateChanged, t);
  }
  static get FrameRate() {
    return this.BNa;
  }
  static get FrameSeconds() {
    return this.bNa;
  }
  static GetMaxRoleShadowNum() {
    var e = GameSettingsDeviceRender.GameQualitySettingLevel;
    return (
      Info_1.Info.IsPcOrGamepadPlatform()
        ? GameSettingsDeviceRenderDefine_1.maxRoleShadowNumWithGameGraphQualityPc
        : GameSettingsDeviceRenderDefine_1.maxRoleShadowNumWithGameGraphQualityMobile
    )[e];
  }
  static GetMaxRoleShadowDistance() {
    var e = GameSettingsDeviceRender.GameQualitySettingLevel;
    return (
      Info_1.Info.IsPcOrGamepadPlatform()
        ? GameSettingsDeviceRenderDefine_1.maxRoleShadowDistanceWithGameGraphQualityPc
        : GameSettingsDeviceRenderDefine_1.maxRoleShadowDistanceWithGameGraphQualityMobile
    )[e];
  }
  static GetMaxDecalShadowDistance() {
    var e = GameSettingsDeviceRender.GameQualitySettingLevel;
    return (
      Info_1.Info.IsPcOrGamepadPlatform()
        ? GameSettingsDeviceRenderDefine_1.maxDecalShadowDistanceWithGameGraphQualityPc
        : GameSettingsDeviceRenderDefine_1.maxDecalShadowDistanceWithGameGraphQualityMobile
    )[e];
  }
  static IsMainPlayerUseRealRoleShadow() {
    var e = GameSettingsDeviceRender.GameQualitySettingLevel;
    return GameSettingsDeviceRenderDefine_1.mainPlayerRealShadow[e];
  }
  static SetFrameRateTemploary(e) {
    (this.yve = MathUtils_1.MathUtils.Clamp(e, 24, 120)), (this.bNa = 1 / this.yve);
  }
  static SetSequenceFrameRateLimit() {
    1 === Info_1.Info.PlatformType
      ? 31 < this.BNa && (this.SetFrameRateTemploary(30), this.ApplyFrameRate(this.BNa))
      : 2 === Info_1.Info.PlatformType &&
        31 < this.BNa &&
        (this.SetFrameRateTemploary(30), this.ApplyFrameRate(this.BNa)),
      Info_1.Info.IsMobilePlatform() && this.TryReduceCsmUpdateFrequency("Plot");
  }
  static CancleSequenceFrameRateLimit() {
    this.CancelFrameRateTemploary(),
      this.ApplyFrameRate(this.BNa),
      (1 !== Info_1.Info.PlatformType && 2 !== Info_1.Info.PlatformType) ||
        this.TryRestoreCsmUpdateFrequency("Plot");
  }
  static CancelFrameRateTemploary() {
    (this.yve = 0), (this.bNa = 1 / this.BNa);
  }
  static TryReduceCsmUpdateFrequency(e) {
    var t = this.Tve.size;
    this.Tve.add(e), 0 === t && 1 === this.Tve.size && this.Gve();
  }
  static TryRestoreCsmUpdateFrequency(e) {
    this.Tve.delete(e) && 0 === this.Tve.size && this.Nve();
  }
  static Nve() {
    UE.KismetSystemLibrary.ExecuteConsoleCommand(
      GlobalData_1.GlobalData.World,
      "r.Shadow.CSMMode3EnableUpdateIntervalOverride 0"
    ),
      UE.KismetSystemLibrary.ExecuteConsoleCommand(
        GlobalData_1.GlobalData.World,
        "r.PSO.IOSCompilationTimeLimit 2.0"
      );
  }
  static Gve() {
    UE.KismetSystemLibrary.ExecuteConsoleCommand(
      GlobalData_1.GlobalData.World,
      "r.Shadow.CSMMode3EnableUpdateIntervalOverride 1"
    ),
      UE.KismetSystemLibrary.ExecuteConsoleCommand(
        GlobalData_1.GlobalData.World,
        'r.Shadow.CacheMode3CacheUpdateIntervalsOverride "3000,3000,3000,3000,3000,3000"'
      ),
      UE.KismetSystemLibrary.ExecuteConsoleCommand(
        GlobalData_1.GlobalData.World,
        "r.PSO.IOSCompilationTimeLimit 0.1"
      );
  }
  static RefreshPerformanceLimit(e) {
    let i = 0,
      s = 0;
    this.PerformanceLimitRunning.forEach((e, t) => {
      e.FrameLimit && i++, e.CacheWorldFrame && s++;
    }),
      Info_1.Info.IsPcOrGamepadPlatform() ||
        (0 < i ? this.SetFrameRateTemploary(30) : this.CancelFrameRateTemploary(),
        this.ApplyFrameRate(this.BNa)),
      1 === s
        ? (UE.KismetSystemLibrary.ExecuteConsoleCommand(
            GlobalData_1.GlobalData.World,
            "r.CacheSceneColor.Start"
          ),
          (this.InCacheSceneColorMode = 1))
        : 0 === s &&
          (UE.KismetSystemLibrary.ExecuteConsoleCommand(
            GlobalData_1.GlobalData.World,
            "r.CacheSceneColor.Stop"
          ),
          (this.InCacheSceneColorMode = 0)),
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug(
          "Game",
          47,
          "performanceControl:RefreshPerformanceLimit result",
          ["reason", e],
          ["frameLimit", i],
          ["cacheWorldFrame", s]
        );
  }
  static ApplyPerformanceLimit(e) {
    var t;
    GameSettingsDeviceRenderDefine_1.performanceLimitConfigs.has(e) &&
      (t = GameSettingsDeviceRenderDefine_1.performanceLimitConfigs.get(e)) &&
      (this.PerformanceLimitRunning.set(e, t),
      Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug(
          "Game",
          47,
          "performanceControl:ApplyPerformanceLimit",
          ["source", e],
          ["frameLimit", t.FrameLimit],
          ["cacheWorldFrame", t.CacheWorldFrame]
        ),
      this.RefreshPerformanceLimit(e));
  }
  static CancelPerformanceLimit(e) {
    this.PerformanceLimitRunning.delete(e) &&
      (Log_1.Log.CheckDebug() &&
        Log_1.Log.Debug("Game", 47, "performanceControl:CancelPerformanceLimit", ["source", e]),
      this.RefreshPerformanceLimit(e));
  }
  static ApplyPerformanceSeqLimit(e) {
    this.ApplyPerformanceLimit(e + GameSettingsDeviceRenderDefine_1.PERFORMENCELIMIT_SEQ_TAIL);
  }
  static CancelPerformanceSeqLimit(e) {
    this.CancelPerformanceLimit(e + GameSettingsDeviceRenderDefine_1.PERFORMENCELIMIT_SEQ_TAIL);
  }
  static CancelAllPerformanceLimit() {
    this.PerformanceLimitRunning.clear(),
      this.CancelFrameRateTemploary(),
      this.ApplyFrameRate(this.BNa),
      this.RefreshPerformanceLimit("[CancelAll]");
  }
  static SetIsAutoAdjustImageQuality(e) {
    e
      ? UE.KismetSystemLibrary.ExecuteConsoleCommand(
          GlobalData_1.GlobalData.World,
          "r.Kuro.AutoCoolUIEnable 1"
        )
      : UE.KismetSystemLibrary.ExecuteConsoleCommand(
          GlobalData_1.GlobalData.World,
          "r.Kuro.AutoCoolUIEnable 0"
        );
  }
  static GetRecommendQualityLv() {
    return this.oml;
  }
  static GetQualityRange() {
    return this.rml;
  }
}
((exports.GameSettingsDeviceRender = GameSettingsDeviceRender).Klc = void 0),
  (GameSettingsDeviceRender.Xlc = void 0),
  (GameSettingsDeviceRender.ANa = 0),
  (GameSettingsDeviceRender.CPUFrequency = 0),
  (GameSettingsDeviceRender.CPUCores = 0),
  (GameSettingsDeviceRender.CPUCoresIncludingHyperthreads = 0),
  (GameSettingsDeviceRender.CPUBrand = ""),
  (GameSettingsDeviceRender.IsSupportedAFME = !1),
  (GameSettingsDeviceRender.DriverDate = "Unknown"),
  (GameSettingsDeviceRender.IsAdreno = !1),
  (GameSettingsDeviceRender.kE1 = ""),
  (GameSettingsDeviceRender.DNa = ""),
  (GameSettingsDeviceRender.RNa = ""),
  (GameSettingsDeviceRender.UNa = ""),
  (GameSettingsDeviceRender.DeviceScore = 0),
  (GameSettingsDeviceRender.xNa = ""),
  (GameSettingsDeviceRender.PNa = 0),
  (GameSettingsDeviceRender.DeviceType = 14),
  (GameSettingsDeviceRender.rml = 1),
  (GameSettingsDeviceRender.dMe = !0),
  (GameSettingsDeviceRender.jve = void 0),
  (GameSettingsDeviceRender.Vve = void 0),
  (GameSettingsDeviceRender.yve = 0),
  (GameSettingsDeviceRender.BNa = 0),
  (GameSettingsDeviceRender.Xn_ = !1),
  (GameSettingsDeviceRender.FA1 = !1),
  (GameSettingsDeviceRender.bNa = -0),
  (GameSettingsDeviceRender.Tve = new Set()),
  (GameSettingsDeviceRender.PerformanceLimitRunning = new Map()),
  (GameSettingsDeviceRender.InCacheSceneColorMode = 0),
  (GameSettingsDeviceRender.Ylc = new Map()),
  (GameSettingsDeviceRender.cZ_ = new Map()),
  (GameSettingsDeviceRender.NA1 = new Map());
//# sourceMappingURL=GameSettingsDeviceRender.js.map
