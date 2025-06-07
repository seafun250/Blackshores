"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.VideoView = void 0);
const UE = require("ue"),
  Application_1 = require("../../../Core/Application/Application"),
  AudioController_1 = require("../../../Core/Audio/AudioController"),
  AudioDefine_1 = require("../../../Core/Audio/AudioDefine"),
  CustomPromise_1 = require("../../../Core/Common/CustomPromise"),
  Info_1 = require("../../../Core/Common/Info"),
  LanguageSystem_1 = require("../../../Core/Common/LanguageSystem"),
  Log_1 = require("../../../Core/Common/Log"),
  Time_1 = require("../../../Core/Common/Time"),
  CommonParamById_1 = require("../../../Core/Define/ConfigCommon/CommonParamById"),
  ResourceSystem_1 = require("../../../Core/Resource/ResourceSystem"),
  TimerSystem_1 = require("../../../Core/Timer/TimerSystem"),
  MathUtils_1 = require("../../../Core/Utils/MathUtils"),
  ModManager_1 = require("../../Manager/ModManager"),
  IAction_1 = require("../../../UniverseEditor/Interface/IAction"),
  EventDefine_1 = require("../../Common/Event/EventDefine"),
  EventSystem_1 = require("../../Common/Event/EventSystem"),
  GameSettingsDefine_1 = require("../../GameSettings/GameSettingsDefine"),
  GameSettingsManager_1 = require("../../GameSettings/GameSettingsManager"),
  GlobalData_1 = require("../../GlobalData"),
  ConfigManager_1 = require("../../Manager/ConfigManager"),
  ControllerHolder_1 = require("../../Manager/ControllerHolder"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  UiTickViewBase_1 = require("../../Ui/Base/UiTickViewBase"),
  UiLayer_1 = require("../../Ui/UiLayer"),
  BlackScreenFadeController_1 = require("../BlackScreen/BlackScreenFadeController"),
  LevelLoadingController_1 = require("../LevelLoading/LevelLoadingController"),
  PlotModel_1 = require("../Plot/PlotModel"),
  PlotSkipComponent_1 = require("../Plot/PlotView/PlotSkipComponent"),
  VideoDefine_1 = require("./VideoDefine"),
  VideoLauncher_1 = require("./VideoLauncher");
class VideoView extends UiTickViewBase_1.UiTickViewBase {
  constructor() {
    super(...arguments),
      (this.xNo = void 0),
      (this.wNo = void 0),
      (this.BNo = void 0),
      (this.gSc = void 0),
      (this.bNo = void 0),
      (this.ONo = void 0),
      (this.kNo = void 0),
      (this.deo = void 0),
      (this.MUe = ResourceSystem_1.ResourceSystem.InvalidId),
      (this.RTn = !1),
      (this.FNo = !1),
      (this.VNo = !0),
      (this.$ul = void 0),
      (this.Xul = void 0),
      (this.ngl = void 0),
      (this.Pbn = !0),
      (this.sgl = 4e3),
      (this.agl = 1e3),
      (this.lgl = 0),
      (this.hgl = !1),
      (this.YCl = 0),
      (this.zCl = 0),
      (this.RNc = IAction_1.EMovieBackgroundType.Black),
      (this.fkl = new Set()),
      (this.HNo = () => {
        ControllerHolder_1.ControllerHolder.FlowController.BackgroundFlow("UI点击跳过(VideoView)");
      }),
      (this.Bra = (i) => {
        (this.OpenParam = i), this.OnStart(), (this.Pbn = !1), this.XNo();
      }),
      (this.jNo = () => {
        Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug(
            "Video",
            27,
            "UE.EApplicationDelegate.ApplicationHasReactivatedDelegate",
            ["this.VideoPauseTime", this.kNo]
          ),
          (this.VNo = !0),
          this.kNo &&
            (2 !== Info_1.Info.PlatformType &&
              8 !== Info_1.Info.PlatformType &&
              this.wNo?.Seek(this.kNo),
            this.wNo?.Play(),
            (this.kNo = void 0)),
          this.ONo &&
            this.kNo &&
            (Log_1.Log.CheckInfo() &&
              Log_1.Log.Info(
                "Audio",
                55,
                "[VideoView] ResumeVideo 当前只绑定返回应用，全部音频已在CPP的返回应用时处理，跳过此处的音频 Resume"
              ),
            void 0 !== this.bNo) &&
            TimerSystem_1.TimerSystem.IsPause(this.bNo) &&
            TimerSystem_1.TimerSystem.Resume(this.bNo);
      }),
      (this.WNo = () => {
        (this.kNo = this.wNo?.GetTime()),
          Log_1.Log.CheckDebug() &&
            Log_1.Log.Debug(
              "Video",
              27,
              "UE.EApplicationDelegate.ApplicationWillDeactivateDelegate",
              ["this.VideoPauseTime", this.kNo]
            ),
          (this.VNo = !1),
          2 !== Info_1.Info.PlatformType && 8 !== Info_1.Info.PlatformType && this.wNo?.Pause(),
          this.ONo &&
            0 !== VideoLauncher_1.VideoLauncher.AudioEventResult.PlayingIds.length &&
            (Log_1.Log.CheckInfo() &&
              Log_1.Log.Info(
                "Audio",
                55,
                "[VideoView] PauseVideo 当前只绑定切换后台，全部音频已在CPP的切换后台时处理，跳过此处的音频 Pause"
              ),
            void 0 === this.bNo ||
              TimerSystem_1.TimerSystem.IsPause(this.bNo) ||
              TimerSystem_1.TimerSystem.Pause(this.bNo));
      }),
      (this.wbn = () => {
        var i = this.OpenParam.RemainViewWhenEnd;
        Log_1.Log.CheckInfo() && Log_1.Log.Info("Video", 38, "开始关闭VideoView", ["bRemain", i]),
          this.$ul &&
            (Log_1.Log.CheckInfo() &&
              Log_1.Log.Info("Video", 38, "MediaPlayer还在倒计时检查状态中,提前移除TimeTimer"),
            this.$ul.Remove(),
            (this.$ul = void 0)),
          this.Xul &&
            (Log_1.Log.CheckInfo() &&
              Log_1.Log.Info("Video", 38, "MediaPlayer还在倒计时检查状态中,提前移除FrameTimer"),
            this.Xul.Remove(),
            (this.Xul = void 0)),
          this.ngl && (this.ngl.Remove(), (this.ngl = void 0)),
          this.hVs(),
          i
            ? (this.bra(),
              (0, this.OpenParam?.VideoCloseCb)?.(),
              Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 16, "VideoView callback done"))
            : (this.Pbn || this.CloseMe(), (this.Pbn = !0));
      }),
      (this.KNo = () => {
        (this.FNo = !0),
          this.wbn(),
          Log_1.Log.CheckInfo() &&
            Log_1.Log.Info("Video", 27, "视频播放结束", ["视频名称", this.ONo]);
      }),
      (this.QNo = () => {
        Log_1.Log.CheckError() &&
          Log_1.Log.Error("Video", 38, "视频文件打开失败,可能需要修复修复系统文件"),
          this.wbn();
      }),
      (this.XNo = () => {
        if (this.ONo)
          Log_1.Log.CheckError() && Log_1.Log.Error("Video", 38, "必须等上个视频放完才能放下一个"),
            this.wbn();
        else {
          const r = this.OpenParam.VideoDataConf;
          if (r && ModManager_1.ModManager.settings.PlotSkip) {
            r.CanSkip = 1;
          }
          var i, e, t, o, s;
          r
            ? ((i = r.Aspect),
              (e =
                UiLayer_1.UiLayer.UiRootItem.GetWidth() / UiLayer_1.UiLayer.UiRootItem.GetHeight()),
              (t = ModelManager_1.ModelManager.PlotModel.LastPlotAspect),
              (o = ModelManager_1.ModelManager.PlotModel.LastPlotColor),
              (s = GameSettingsManager_1.GameSettingsManager.GetCurrentValue(
                GameSettingsDefine_1.EFunction.FlowAdaptation
              )),
              1 < e &&
              t !== PlotModel_1.INVALID_NUM &&
              2.3 < i != 2.3 < t &&
              o === PlotModel_1.COLOR_WHITE &&
              this.RNc === IAction_1.EMovieBackgroundType.White &&
              s
                ? ((this.YCl = i),
                  this.YCl < 2.3 && (this.YCl = e),
                  (this.hgl = !0),
                  (this.lgl = 0),
                  (this.ngl = TimerSystem_1.TimerSystem.Delay(() => {
                    (this.ngl = void 0), this._gl(r);
                  }, this.sgl)))
                : this._gl(r))
            : (Log_1.Log.CheckError() &&
                Log_1.Log.Error("Video", 38, "事件被错误触发了", [
                  "名称",
                  EventDefine_1.EEventName.ShowVideo,
                ]),
              this.wbn());
        }
      }),
      (this._gl = (s) => {
        ModelManager_1.ModelManager.GameModeModel.NeedOpenBlackScreenWhenTeleportDungeon &&
          LevelLoadingController_1.LevelLoadingController.OpenLoading(
            0,
            3,
            void 0,
            1,
            ModelManager_1.ModelManager.GameModeModel.Mp4FadeOutScreenColor ===
              IAction_1.EMovieBackgroundType.White
              ? IAction_1.EFadeInScreenShowType.White
              : IAction_1.EFadeInScreenShowType.Black,
            !1,
            !1,
            void 0,
            !0
          ),
          (this.hgl = !1),
          (this.MUe = ResourceSystem_1.ResourceSystem.LoadAsync(s.CgFile, UE.MediaSource, (i) => {
            if (i)
              if (
                ((this.MUe = ResourceSystem_1.ResourceSystem.InvalidId), this.wNo.OpenSource(i))
              ) {
                AudioController_1.AudioController.SetState(
                  AudioDefine_1.PLOT_VIDEO_GROUP,
                  AudioDefine_1.PLOT_VIDEO
                ),
                  (this.ONo = s.CgName),
                  (this.RTn = !1);
                (i =
                  ModManager_1.ModManager.settings.PlotSkip ||
                  (!ModelManager_1.ModelManager.GameModeModel.PlayTravelMp4 &&
                    ModelManager_1.ModelManager.PlotModel.IsGmCanSkip) ||
                  s.CanSkip),
                  (i =
                    (ControllerHolder_1.ControllerHolder.FlowController.EnableSkip(i),
                    (this.BNo = [
                      ...ConfigManager_1.ConfigManager.VideoConfig.GetVideoCaptions(
                        this.ONo,
                        LanguageSystem_1.LanguageSystem.PackageAudio
                      ),
                    ]),
                    this.BNo.sort((i, e) => e.ShowMoment - i.ShowMoment),
                    (this.gSc = [
                      ...ConfigManager_1.ConfigManager.VideoConfig.GetVideoQte(
                        this.ONo,
                        LanguageSystem_1.LanguageSystem.PackageAudio
                      ),
                    ]),
                    this.gSc.sort((i, e) => e.ShowMoment - i.ShowMoment),
                    Log_1.Log.CheckDebug() &&
                      Log_1.Log.Debug("Video", 26, "字幕语言", [
                        "",
                        LanguageSystem_1.LanguageSystem.PackageAudio,
                      ]),
                    ConfigManager_1.ConfigManager.VideoConfig.GetVideoSounds(this.ONo)));
                for (const o of i) {
                  var e = o.EventPath;
                  AudioController_1.AudioController.PostEventByUi(
                    e,
                    VideoLauncher_1.VideoLauncher.AudioEventResult
                  );
                }
                EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.VideoStart, this.ONo),
                  Log_1.Log.CheckDebug() &&
                    Log_1.Log.Debug("Video", 38, "MediaPlayer开始5秒倒计时检查");
                const t = Time_1.Time.Frame;
                (this.$ul = TimerSystem_1.TimerSystem.Delay(() => {
                  this.$ul?.Remove(),
                    (this.$ul = void 0),
                    this.wNo
                      ? this.wNo.IsPlaying() || this.wNo.IsPaused()
                        ? (Log_1.Log.CheckDebug() &&
                            Log_1.Log.Debug("Video", 38, "MediaPlayer状态检查通过"),
                          this.Xul || this.hVs())
                        : this.Xul ||
                          (Log_1.Log.CheckWarn() &&
                            Log_1.Log.Warn(
                              "Video",
                              45,
                              "MediaPlayer加载了5秒超时，强制关闭CG界面",
                              ["配置名称", s.CgName],
                              ["视频路径", s.CgFile]
                            ),
                          this.wbn())
                      : Log_1.Log.CheckDebug() &&
                        Log_1.Log.Debug("Video", 38, "MediaPlayer已经没有了");
                }, 5e3)),
                  (this.Xul = TimerSystem_1.TimerSystem.Forever(() => {
                    30 <= Time_1.Time.Frame - t &&
                      (this.Xul?.Remove(),
                      (this.Xul = void 0),
                      this.wNo
                        ? this.wNo.IsPlaying() || this.wNo.IsPaused()
                          ? (Log_1.Log.CheckDebug() &&
                              Log_1.Log.Debug("Video", 38, "MediaPlayer状态检查通过"),
                            this.$ul || this.hVs())
                          : this.$ul ||
                            (Log_1.Log.CheckWarn() &&
                              Log_1.Log.Warn(
                                "Video",
                                45,
                                "MediaPlayer加载了5秒超时，强制关闭CG界面",
                                ["配置名称", s.CgName],
                                ["视频路径", s.CgFile]
                              ),
                            this.wbn())
                        : Log_1.Log.CheckDebug() &&
                          Log_1.Log.Debug("Video", 38, "MediaPlayer已经没有了"));
                  }, 1e3));
              } else
                Log_1.Log.CheckError() &&
                  Log_1.Log.Error(
                    "Video",
                    38,
                    "打开视频失败",
                    ["配置名称", s.CgName],
                    ["视频路径", s.CgFile]
                  ),
                  this.wbn();
            else
              Log_1.Log.CheckError() &&
                Log_1.Log.Error(
                  "Video",
                  38,
                  "mediaSource加载失败",
                  ["配置名称", s.CgName],
                  ["视频路径", s.CgFile]
                ),
                this.wbn();
          })),
          this.MUe < 0 &&
            (Log_1.Log.CheckError() &&
              Log_1.Log.Error(
                "Video",
                38,
                "mediaSource加载失败",
                ["配置名称", s.CgName],
                ["视频路径", s.CgFile]
              ),
            this.wbn());
      }),
      (this.YNo = () => {
        var i,
          e = this.wNo.GetVideoTrackAspectRatio(0, 0),
          t = UiLayer_1.UiLayer.UiRootItem.GetWidth() / UiLayer_1.UiLayer.UiRootItem.GetHeight(),
          o = GameSettingsManager_1.GameSettingsManager.GetCurrentValue(
            GameSettingsDefine_1.EFunction.FlowAdaptation
          );
        e < t
          ? ((i = UiLayer_1.UiLayer.UiRootItem.GetWidth() / e),
            this.xNo.SetHeight(i),
            this.xNo.SetWidth(UiLayer_1.UiLayer.UiRootItem.GetWidth()),
            2.38 < t &&
              o &&
              ((i = UiLayer_1.UiLayer.UiRootItem.GetHeight() * e),
              this.xNo.SetWidth(i),
              this.xNo.SetHeight(UiLayer_1.UiLayer.UiRootItem.GetHeight())))
          : t < e &&
            ((i = UiLayer_1.UiLayer.UiRootItem.GetHeight() * e),
            this.xNo.SetWidth(i),
            this.xNo.SetHeight(UiLayer_1.UiLayer.UiRootItem.GetHeight())),
          2.3 < e &&
            o &&
            (e < t
              ? ((i = UiLayer_1.UiLayer.UiRootItem.GetHeight() * e),
                this.xNo.SetWidth(i),
                this.xNo.SetHeight(UiLayer_1.UiLayer.UiRootItem.GetHeight()))
              : t < e &&
                ((i = UiLayer_1.UiLayer.UiRootItem.GetWidth() / e),
                this.xNo.SetHeight(i),
                this.xNo.SetWidth(UiLayer_1.UiLayer.UiRootItem.GetWidth()))),
          (ModelManager_1.ModelManager.PlotModel.LastPlotAspect = e),
          o &&
            BlackScreenFadeController_1.BlackScreenFadeController.ChangeAspect(
              ModelManager_1.ModelManager.PlotModel.LastPlotAspect,
              !0
            ),
          (ModelManager_1.ModelManager.PlotModel.LastPlotColor =
            this.RNc === IAction_1.EMovieBackgroundType.White
              ? PlotModel_1.COLOR_WHITE
              : PlotModel_1.COLOR_BLACK);
      }),
      (this.JEl = (i) => {
        this.wNo?.SetRate(1), i && this.fkl.delete(i);
      });
  }
  OnRegisterComponent() {
    this.ComponentRegisterInfos = [
      [0, UE.UIButtonComponent],
      [1, UE.UIButtonComponent],
      [2, UE.UIText],
      [3, UE.UIItem],
      [4, UE.UIButtonComponent],
    ];
  }
  OnStart() {
    if (
      (this.GetButton(1).RootUIComp.SetUIActive(!1),
      (this.deo = new PlotSkipComponent_1.PlotSkipComponent(
        this.GetButton(1),
        this.HNo,
        void 0,
        this
      )),
      this.deo.AddEventListener(),
      this.deo.EnableSkipButton(!1),
      (this.xNo = this.GetButton(0).GetOwner().GetComponentByClass(UE.UITexture.StaticClass())),
      this.xNo)
    ) {
      var e = this.xNo.GetTexture();
      (this.wNo = e?.GetMediaPlayer()),
        this.wNo ||
          (Log_1.Log.CheckError() && Log_1.Log.Error("Video", 38, "获取MediaPlayer异常！！")),
        this.wNo.OnEndReached.Add(this.KNo),
        this.wNo.OnMediaOpened.Add(this.YNo),
        this.wNo.OnMediaOpenFailed.Add(this.QNo),
        this.GetText(2).SetUIActive(!1),
        (this.RNc = void 0),
        ModelManager_1.ModelManager.GameModeModel.Mp4FadeInScreenColor
          ? (this.RNc = ModelManager_1.ModelManager.GameModeModel.Mp4FadeInScreenColor)
          : (this.RNc =
              this.OpenParam?.BackgroundColor?.FadeInBackgroundType ??
              IAction_1.EMovieBackgroundType.Black);
      let i = void 0;
      (i =
        this.RNc === IAction_1.EMovieBackgroundType.White
          ? new UE.LinearColor(1, 1, 1, 1)
          : (IAction_1.EMovieBackgroundType.Black, new UE.LinearColor(0, 0, 0, 1))),
        (e.ClearColor = i),
        Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug("Video", 26, "改变CG界面底色", ["color", this.RNc]);
      e = UiLayer_1.UiLayer.UiRootItem.GetWidth() / UiLayer_1.UiLayer.UiRootItem.GetHeight();
      ModelManager_1.ModelManager.PlotModel.LastPlotAspect !== PlotModel_1.INVALID_NUM &&
        1 < e &&
        ((this.zCl = ModelManager_1.ModelManager.PlotModel.LastPlotAspect),
        this.zCl < 2.3 && (this.zCl = e),
        this.ZCl(this.zCl)),
        (this.sgl =
          CommonParamById_1.configCommonParamById.GetIntConfig("VideoViewLerpFullTime") ?? 4e3),
        (this.agl =
          CommonParamById_1.configCommonParamById.GetIntConfig("VideoViewLerpWaitTime") ?? 1e3),
        this.fkl.clear();
    } else Log_1.Log.CheckError() && Log_1.Log.Error("Video", 38, "获取CgTexture异常！！");
  }
  ZCl(i) {
    var e,
      t = UiLayer_1.UiLayer.UiRootItem.GetWidth() / UiLayer_1.UiLayer.UiRootItem.GetHeight();
    i < t
      ? ((e = UiLayer_1.UiLayer.UiRootItem.GetHeight() * i),
        this.xNo.SetWidth(e),
        this.xNo.SetHeight(UiLayer_1.UiLayer.UiRootItem.GetHeight()))
      : t < i &&
        ((e = UiLayer_1.UiLayer.UiRootItem.GetWidth() / i),
        this.xNo.SetHeight(e),
        this.xNo.SetWidth(UiLayer_1.UiLayer.UiRootItem.GetWidth()));
  }
  async OnPlayingStartSequenceAsync() {
    const i = new CustomPromise_1.CustomPromise();
    Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 26, "VideoView界面隐藏"),
      this.SetUiActive(!1),
      TimerSystem_1.TimerSystem.Delay(() => {
        Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 26, "VideoView界面显示"),
          this.SetUiActive(!0),
          i.SetResult();
      }, 100),
      await i.Promise;
  }
  OnAfterShow() {
    ResourceSystem_1.ResourceSystem.SetForceLoadModeInGame(GlobalData_1.GlobalData.World, !0),
      Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 27, "VideoView OnShow"),
      (this.Pbn = !1),
      this.XNo();
  }
  bra() {
    void 0 !== this.bNo && (TimerSystem_1.TimerSystem.Remove(this.bNo), (this.bNo = void 0)),
      this.MUe !== ResourceSystem_1.ResourceSystem.InvalidId &&
        (ResourceSystem_1.ResourceSystem.CancelAsyncLoad(this.MUe),
        (this.MUe = ResourceSystem_1.ResourceSystem.InvalidId)),
      (this.ONo = void 0),
      this.wNo?.OnEndReached.Remove(this.KNo),
      this.wNo?.OnMediaOpened.Remove(this.YNo),
      this.wNo?.OnMediaOpenFailed.Remove(this.QNo),
      this.wNo?.Close(),
      (this.wNo = void 0),
      (this.BNo = void 0),
      (this.kNo = void 0),
      AudioController_1.AudioController.StopEvent(
        VideoLauncher_1.VideoLauncher.AudioEventResult,
        !this.FNo
      ),
      AudioController_1.AudioController.SetState(
        AudioDefine_1.PLOT_VIDEO_GROUP,
        AudioDefine_1.PLOT_NOT_VIDEO
      ),
      (this.RTn = !1),
      this.deo?.OnClear(),
      this.deo?.RemoveEventListener(),
      (this.deo = void 0);
  }
  OnBeforeHide() {
    this.fkl.forEach((i) => {
      ControllerHolder_1.ControllerHolder.CommonQteController.StopQte(i.HandleId);
    }),
      this.fkl.clear(),
      ResourceSystem_1.ResourceSystem.SetForceLoadModeInGame(GlobalData_1.GlobalData.World, !1),
      Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 16, "VideoView OnBeforeHide"),
      this.deo.EnableSkipButton(!1),
      (ModelManager_1.ModelManager.GameModeModel.Mp4FadeInScreenColor = void 0),
      (ModelManager_1.ModelManager.GameModeModel.Mp4FadeOutScreenColor = void 0),
      (this.RNc = void 0);
  }
  OnBeforeDestroy() {
    this.bra(),
      (0, this.OpenParam?.VideoCloseCb)?.(),
      Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 16, "VideoView callback done");
  }
  OnAddEventListener() {
    Application_1.Application.AddApplicationHandler(1, this.jNo),
      Application_1.Application.AddApplicationHandler(0, this.WNo),
      EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PlayVideo, this.Bra);
  }
  OnRemoveEventListener() {
    Application_1.Application.RemoveApplicationHandler(1, this.jNo),
      Application_1.Application.RemoveApplicationHandler(0, this.WNo),
      EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PlayVideo, this.Bra);
  }
  JNo(e) {
    if (this.BNo?.length) {
      let i = void 0;
      for (; 0 < this.BNo.length; ) {
        if (
          !(
            ((i = this.BNo[this.BNo.length - 1]).ShowMoment + i.Duration) *
              VideoDefine_1.VideoUtils.MillisecondPerFrame <
            e
          )
        )
          break;
        this.BNo.pop(),
          this.RTn
            ? ((this.RTn = !1),
              this.GetText(2).SetUIActive(!1),
              Log_1.Log.CheckDebug() &&
                Log_1.Log.Debug(
                  "Video",
                  26,
                  "CG字幕关闭",
                  ["id", i.CaptionId],
                  ["frame", e * VideoDefine_1.VideoUtils.FramePerMillisecond],
                  ["config frame", i.ShowMoment + i.Duration]
                ))
            : Log_1.Log.CheckDebug() &&
              Log_1.Log.Debug("Video", 26, "CG字幕废弃", ["id", i.CaptionId]),
          (i = void 0);
      }
      var t, o;
      !i ||
        this.RTn ||
        e < i.ShowMoment * VideoDefine_1.VideoUtils.MillisecondPerFrame ||
        ((this.RTn = !0),
        (t = this.GetText(2)),
        (o = ConfigManager_1.ConfigManager.VideoConfig.GetVideoCaptionText(i)),
        t.SetUIActive(!0),
        t.SetText(o),
        Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug(
            "Video",
            26,
            "CG字幕",
            ["text", o],
            ["frame", e * VideoDefine_1.VideoUtils.FramePerMillisecond],
            ["config frame", i.ShowMoment],
            ["id", i.CaptionId]
          ));
    }
  }
  CSc(i) {
    if (this.gSc?.length)
      for (; 0 < this.gSc.length; ) {
        var e = this.gSc[this.gSc.length - 1];
        if (!(e.ShowMoment * VideoDefine_1.VideoUtils.MillisecondPerFrame <= i)) break;
        Log_1.Log.CheckDebug() &&
          Log_1.Log.Debug(
            "Video",
            26,
            "CG QTE",
            ["qteId", e.QteId],
            ["frame", i * VideoDefine_1.VideoUtils.FramePerMillisecond],
            ["config frame", e.ShowMoment]
          );
        var e = ControllerHolder_1.ControllerHolder.CommonQteController.StartQte(
          e.QteId,
          this.JEl,
          this.JEl,
          3
        );
        e && (this.fkl.add(e), (e = e.Config.BaseConfig.TimeDilation), this.wNo.SetRate(e)),
          this.gSc.pop();
      }
  }
  hVs() {
    ModelManager_1.ModelManager.GameModeModel.Mp4FadeOutScreenColor
      ? (this.RNc = ModelManager_1.ModelManager.GameModeModel.Mp4FadeOutScreenColor)
      : (this.RNc = this.OpenParam?.BackgroundColor?.FadeOutBackgroundType);
    let i = void 0,
      e = !0;
    switch (this.RNc) {
      case IAction_1.EMovieBackgroundType.White:
        (i = new UE.LinearColor(1, 1, 1, 1)),
          (e = ControllerHolder_1.ControllerHolder.LevelLoadingController.CameraFade.SetColor(
            IAction_1.EFadeInScreenShowType.White
          ));
        break;
      case IAction_1.EMovieBackgroundType.Black:
        (i = new UE.LinearColor(0, 0, 0, 1)),
          (e = ControllerHolder_1.ControllerHolder.LevelLoadingController.CameraFade.SetColor(
            IAction_1.EFadeInScreenShowType.Black
          ));
        break;
      default:
        i = new UE.LinearColor(0, 0, 0, 1);
    }
    e ||
      (Log_1.Log.CheckWarn() &&
        Log_1.Log.Warn("Video", 26, "[VideoView] 当前未开启黑幕界面，继承颜色失败")),
      (this.xNo.GetTexture().ClearColor = i),
      Log_1.Log.CheckDebug() && Log_1.Log.Debug("Video", 26, "改变CG界面底色", ["color", this.RNc]);
  }
  OnTick(i) {
    var e;
    this.VNo &&
      ((e = UE.KismetMathLibrary.GetTotalMilliseconds(this.wNo.GetTime())),
      this.JNo(e),
      this.CSc(e)),
      this.hgl &&
        ((this.lgl += i), this.lgl > this.agl) &&
        ((e = MathUtils_1.MathUtils.GetRangePct(0, this.sgl - this.agl, this.lgl - this.agl)),
        (i = this.zCl + (this.YCl - this.zCl) * e),
        this.ZCl(i));
  }
}
exports.VideoView = VideoView;
//# sourceMappingURL=VideoView.js.map
