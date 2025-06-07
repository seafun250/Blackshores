"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0,
}),
  (exports.ModLanguage = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Info_1 = require("../../../Core/Common/Info"),
  Log_1 = require("../../../Core/Common/Log"),
  ModManager_1 = require("../ModManager"),
  ModMenuDefine_1 = require("../ModMenuDefine"),
  LanguageSystem_1 = require("../../../Core/Common/LanguageSystem");

class ModLanguage {
  static Attr = ModMenuDefine_1.ATTRIBUTE_MOD_TEXT;

  static GetCurrLang() {
    switch (ModManager_1.ModManager.settings.Language) {
      case "English":
        return "en";
      case "简体中文":
        return "chs";
      case "日本語":
        return "ja";
      case "Español":
        return "es";
      case "Indonesia":
        return "id";
      case "Vietnamese":
        return "vi";
      case "Korean":
        return "ko";
      case "Brazil":
        return "pt";
      case "Polish":
        return "pl";
      case "Russian":
        return "ru";
      case "French":
        return "fr";
      case "Turkish":
        return "tr";
      case "Italian":
        return "it";
      default:
        return "en";
    }
  }

  // static Langs = ["English", "简体中文", "日本語", "Español", "Indonesia", "Vietnamese", "Korean"];
  static Langs = [
    "English",
    "Indonesia",
    "简体中文",
    "日本語",
    "Español",
    "Vietnamese",
    "Korean",
    "Brazil",
    "Polish",
    "Russian",
    "French",
    "Turkish",
    "Italian",
  ];
  static Menus = [
    {
      Text: this.Attr.PlayerMenu.ATTRIBUTE,
      chs: "玩家",
      en: "Player",
      id: "Pemain",
      es: "Jugador",
      ja: "プレイヤー",
      ko: "플레이어",
      vi: "Người chơi",
      pt: "Jogador",
      pl: "Gracz",
      ru: "Игрок",
      fr: "Joueur",
      hi: "खिलाड़ी",
      ar: "لاعب",
      tr: "Oyuncu",
      it: "Giocatore",
    },
    {
      Text: this.Attr.WorldMenu.ATTRIBUTE,
      chs: "世界",
      en: "World",
      id: "Dunia",
      es: "Mundo",
      ja: "ワールド",
      ko: "세계",
      vi: "Thế giới",
      pt: "Mundo",
      pl: "Świat",
      ru: "Мир",
      fr: "Monde",
      hi: "विश्व",
      ar: "العالم",
      tr: "Dünya",
      it: "Mondo",
    },
    {
      Text: this.Attr.BuffMenu.ATTRIBUTE,
      chs: "Buff",
      en: "Buff",
      id: "Buff",
      es: "Buff",
      ja: "バフ",
      ko: "버프",
      vi: "Buff",
      pt: "Buff",
      pl: "Buff",
      ru: "Бафф",
      fr: "Buff",
      hi: "बफ़",
      ar: "بوف",
      tr: "Buff",
      it: "Buff",
    },
    {
      Text: this.Attr.ESPMenu.ATTRIBUTE,
      chs: "ESP",
      en: "ESP",
      id: "ESP",
      es: "ESP",
      ja: "ESP",
      ko: "ESP",
      vi: "ESP",
      pt: "ESP",
      pl: "ESP",
      ru: "ESP",
      fr: "ESP",
      hi: "ईएसपी",
      ar: "إي إس بي",
      tr: "ESP",
      it: "ESP",
    },
    {
      Text: this.Attr.TeleportMenu.ATTRIBUTE,
      chs: "传送",
      en: "Teleport",
      id: "Teleportasi",
      es: "Teletransporte",
      ja: "テレポート",
      ko: "텔레포트",
      vi: "Dịch chuyển",
      pt: "Teleporte",
      pl: "Teleportacja",
      ru: "Телепорт",
      fr: "Téléportation",
      hi: "टेलीपोर्ट",
      ar: "انتقال فوري",
      tr: "Işınlanma",
      it: "Teletrasporto",
    },
    {
      Text: this.Attr.MiscMenu.ATTRIBUTE,
      chs: "杂项",
      en: "Misc",
      id: "Lain-lain",
      es: "Varios",
      ja: "その他",
      ko: "기타",
      vi: "Khác",
      pt: "Diversos",
      pl: "Różne",
      ru: "Разное",
      fr: "Divers",
      hi: "विविध",
      ar: "متفرقات",
      tr: "Çeşitli",
      it: "Varie",
    },
    {
      Text: this.Attr.KeybindMenu.ATTRIBUTE,
      chs: "按键绑定",
      en: "Keybind",
      id: "Keybind",
      es: "Atajos",
      ja: "キーバインド",
      ko: "단축키",
      vi: "Phím tắt",
      pt: "Atalhos",
      pl: "Klawisze",
      ru: "Сочетания клавиш",
      fr: "Raccourci clavier",
      hi: "कुंजी बाइंड",
      ar: "ربط المفاتيح",
      tr: "Tuş ataması",
      it: "Associazione tasti",
    },
    {
      Text: this.Attr.SaveConfigMenu.ATTRIBUTE,
      chs: "保存配置",
      en: "Save Config",
      id: "Simpan Config",
      es: "Guardar Configuración",
      ja: "設定を保存",
      ko: "설정 저장",
      vi: "Lưu cấu hình",
      pt: "Salvar Config",
      pl: "Zapisz Config",
      ru: "Сохранить Конфигурацию",
      fr: "Enregistrer la configuration",
      hi: "कॉन्फ़िग सहेजें",
      ar: "حفظ الإعدادات",
      tr: "Yapılandırmayı Kaydet",
      it: "Salva Configurazione",
    },
  ];

  static translate = [
    ...this.Menus,
    {
      Text: ModMenuDefine_1.MOD_STATE_TEXT.ON,
      chs: ": <color=green>开启</color>",
      en: ": <color=green>ON</color>",
      es: ": <color=green>ACTIVO</color>",
      id: ": <color=green>ON</color>",
      ja: ": <color=green>オン</color>",
      ko: ": <color=green>켬</color>",
      vi: ": <color=green>BẬT</color>",
      pt: ": <color=green>LIGADO</color>",
      pl: ": <color=green>WŁĄCZONE</color>",
      ru: ": <color=green>ВКЛЮЧЕНО</color>",
      fr: ": <color=green>MARCHE</color>",
      ar: ": <color=green>تشغيل</color>",
      tr: ": <color=green>AÇIK</color>",
      tr: ": <color=green>AÇIK</color>",
      it: ": <color=green>ON</color>",
    },
    {
      Text: ModMenuDefine_1.MOD_STATE_TEXT.OFF,
      chs: ": <color=red>关闭</color>",
      en: ": <color=red>OFF</color>",
      es: ": <color=red>DESACTIVADO</color>",
      id: ": <color=red>OFF</color>",
      ja: ": <color=red>オフ</color>",
      ko: ": <color=red>끔</color>",
      vi: ": <color=red>TẮT</color>",
      pt: ": <color=red>DESLIGADO</color>",
      pl: ": <color=red>WYŁĄCZONE</color>",
      ru: ": <color=red>ВЫКЛЮЧЕНО</color>",
      fr: ": <color=red>ÉTEINT</color>",
      hi: ": <color=red>बंद</color>",
      ar: ": <color=red>إيقاف</color>",
      tr: ": <color=red>KAPALI</color>",
      it: ": <color=red>SPENTO</color>",
    },
    {
      Text: this.Attr.PlayerSpeed.ATTRIBUTE,
      chs: "玩家速度",
      en: "Player Speed",
      es: "Velocidad del Jugador",
      id: "Kecepatan Pemain",
      ja: "プレイヤーの速度",
      ko: "플레이어 속도",
      vi: "Tốc độ nhân vật",
      pt: "Speed do Jogador",
      pl: "Szybkość Gracza",
      ru: "Скорость Игрока",
      fr: "Vitesse du joueur",
      hi: "खिलाड़ी की गति",
      ar: "سرعة اللاعب",
      tr: "Oyuncu Hızı",
      it: "Velocità del giocatore",
    },
    {
      Text: this.Attr.GodMode.ATTRIBUTE,
      chs: "无敌模式",
      en: "God Mode",
      es: "Modo Dios",
      id: "Mode Dewa",
      ja: "ゴッドモード",
      ko: "신 모드",
      vi: "Chế độ Bất Tử",
      pt: "Modo Deus",
      pl: "Nieśmiertelność",
      ru: "Режим Бога",
      fr: "Mode Dieu",
      hi: "गॉड मोड",
      ar: "وضع الله",
      tr: "Tanrı Modu",
      it: "Modalità Dio",
    },
    {
      Text: this.Attr.HitMultiplier.ATTRIBUTE,
      chs: "多倍攻击",
      en: "Hit Multiplier",
      es: "Multiplicador de Golpe",
      id: "Hit Multiplier",
      ja: "ヒット倍率",
      ko: "공격 배율",
      vi: "Nhân số đòn đánh",
      pt: "Multiplicador de Acerto",
      pl: "Mnożnik Trafień",
      ru: "Множитель Попадания",
      fr: "Multiplicateur de coups",
      hi: "हिट गुणक",
      ar: "مضاعف الضربات",
      tr: "Vuruş Çarpanı",
      it: "Moltiplicatore di colpi",
    },
    {
      Text: this.Attr.NoCD.ATTRIBUTE,
      chs: "无冷却",
      en: "No Cooldown",
      es: "Sin Enfriamiento",
      id: "Tanpa Cooldown",
      ja: "クールダウンなし",
      ko: "쿨다운 없음",
      vi: "không thời gian hồi chiêu",
      pt: "Sem Tempo de Recarga",
      pl: "Nieskończone Umiejętności",
      ru: "Без Времени Перезарядки",
      fr: "Pas de temps de recharge",
      hi: "कोई कूलडाउन नहीं",
      ar: "بدون فترة تهدئة",
      tr: "Bekleme Yok",
      it: "Nessun cooldown",
    },
    {
      Text: this.Attr.AlwaysCriticalHit.ATTRIBUTE,
      chs: "总是致命一击",
      en: "Always Critical Hit",
      es: "Siempre Crítico",
      id: "Selalu Serangan Kritis",
      ja: "常にクリティカルヒット",
      ko: "항상 치명타",
      vi: "Đòn đánh luôn chí mạng",
      pt: "Crítico Sempre",
      pl: "Zawsze Krytyczne Hity",
      ru: "Всегда критический удар",
      fr: "Toujours un coup critique",
      hi: "हमेशा क्रिटिकल हिट",
      ar: "دائمًا ضربة حاسمة",
      tr: "Daima Kritik Vuruş",
      it: "Sempre colpo critico",
    },
    {
      Text: this.Attr.InfiniteStamina.ATTRIBUTE,
      chs: "无限体力",
      en: "Infinite Stamina",
      es: "Resistencia Infinita",
      id: "Stamina Tak Terbatas",
      ja: "無限スタミナ",
      ko: "무한 스태미나",
      vi: "Vô hạn thể lực",
      pt: "Stamina Infinita",
      pl: "Niekończąca Się Stamina",
      ru: "Бесконечная Выносливость",
      fr: "Endurance infinie",
      hi: "अनंत सहनशक्ति",
      ar: "قدرة تحمل لانهائية",
      tr: "Sonsuz Dayanıklılık",
      it: "Stamina infinita",
    },
    {
      Text: this.Attr.NoClip.ATTRIBUTE,
      chs: "空中飞人",
      en: "No Clip",
      es: "No Clip",
      id: "No Clip",
      ja: "ノークリップ",
      ko: "노 클립",
      vi: "No Clip",
      pt: "Sem Clip",
      pl: "No Clip",
      ru: "No Clip",
      fr: "Pas de clip",
      hi: "नो क्लिप",
      ar: "لا يوجد مقطع",
      tr: "Klip Yok",
      it: "Nessun Clip",
    },
    {
      Text: this.Attr.FlightMode.ATTRIBUTE,
      chs: "无限飞行模式 [5]",
      en: "Flight Mode [5]",
      es: "Modo Vuelo Infinito [5]",
      id: "Flight Mode [5]",
      ja: "無限飛行モード [5]",
      ko: "무한 비행 모드 [5]",
      vi: "Chế độ bay [5]",
      pt: "Modo Voo Infinito [5]",
      pl: "Tryb Latania [5]",
      ru: "Бесконечный полет [5]",
      fr: "Mode Vol Infini [5]",
      hi: "अनंत उड़ान मोड [5]",
      ar: "وضع الطيران اللانهائي [5]",
      tr: "Sonsuz Uçuş Modu [5]",
      it: "Modalità Volo Infinito [5]",
    },
    {
      Text: this.Attr.QuestTp.ATTRIBUTE,
      chs: "任务传送 [V]",
      en: "Quest Teleport [V]",
      es: "Misión de Teletransporte [V]",
      id: "Teleportasi Quest [V]",
      ja: "クエストテレポート [V]",
      ko: "퀘스트 텔레포트 [V]",
      vi: "Dịch chuyển đến điểm tiếp theo trong nhiệm vụ [V]",
      pt: "Teleportar para a Missão [V]",
      pl: "Teleportowanie do Misji [V]",
      ru: "Телепорт квеста [V]",
      fr: "Téléportation de quête [V]",
      hi: "खोज टेलीपोर्ट [V]",
      ar: "نقل المهمة [V]",
      tr: "Görev Teleportu [V]",
      it: "Teletrasporto missione [V]",
    },
    {
      Text: this.Attr.MarkTp.ATTRIBUTE,
      chs: "标记传送 [T]",
      en: "Mark Teleport [T]",
      es: "Marcar Teletransporte [T]",
      id: "Tandai Teleport [T]",
      ja: "マークテレポート [T]",
      ko: "표시 텔레포트 [T]",
      vi: "Đánh dấu điểm dịch chuyển [T]",
      pt: "Marcar Teleporte [T]",
      pl: "Teleportowanie do Znacznika [T]",
      ru: "Метка телепорта [T]",
      fr: "Téléportation de marque [T]",
      hi: "टेलीपोर्ट को चिह्नित करें [T]",
      ar: "تعليم النقل الفوري [T]",
      tr: "Teleport'u İşaretle [T]",
      it: "Teletrasporto Marchio [T]",
    },
    {
      Text: this.Attr.LrInteraction.ATTRIBUTE,
      chs: "远程交互",
      en: "Long Range Interaction",
      es: "Interacción a Larga Distancia",
      id: "Interaksi Jarak Jauh",
      ja: "長距離インタラクション",
      ko: "장거리 상호작용",
      vi: "Tương tác tầm xa",
      pt: "Interação de Longo Alcance",
      pl: "Interakcja dalekiego Zasięgu",
      ru: "Взаимодействие на Большом Расстоянии",
      fr: "Interaction à longue portée",
      hi: "लंबी दूरी की बातचीत",
      ar: "تفاعل بعيد المدى",
      tr: "Uzun Menzilli Etkileşim",
      it: "Interazione a lungo raggio",
    },
    {
      Text: this.Attr.LrWaypoints.ATTRIBUTE,
      chs: "远程航点",
      en: "Long Range Waypoints",
      es: "Puntos de Ruta Remotos",
      id: "Titik Navigasi Jarak Jauh",
      ja: "長距離ウェイポイント",
      ko: "장거리 웨이포인트",
      vi: "Điểm dịch chuyển tầm xa",
      pt: "Pontos de Referência Remotos",
      pl: "Punkty Teleportacyjne dalekiego Zasięgu",
      ru: "Путевые точки дальней дистанции",
      fr: "Points de cheminement longue distance",
      hi: "लंबी दूरी के मार्ग बिंदु",
      ar: "نقاط طريق طويلة المدى",
      tr: "Uzun Menzilli Rota Noktaları",
      it: "Waypoint a lungo raggio",
    },
    {
      Text: this.Attr.WorldSpeed.ATTRIBUTE,
      chs: "世界速度",
      en: "World Speed",
      es: "Velocidad Mundial",
      id: "Kecepatan Dunia",
      ja: "ワールド速度",
      ko: "세계 속도",
      vi: "Tốc độ của thế giới",
      pt: "Velocidade do Mundo",
      pl: "Szybkość Świata",
      ru: "Скорость Мира",
      fr: "Vitesse Mondiale",
      hi: "विश्व गति",
      ar: "سرعة العالم",
      tr: "Dünya Hızı",
      it: "Velocità Mondiale",
    },
    {
      Text: this.Attr.KillAura.ATTRIBUTE,
      chs: "杀戮光环",
      en: "Auto Kill Enemies",
      es: "Eliminación Automática",
      id: "Bunuh Musuh Otomatis",
      ja: "自動敵撃破",
      ko: "자동 적 처치",
      vi: "Tự động giết kẻ địch",
      pt: "Matar Inimigos Auto",
      pl: "Automatyczne Zabijanie",
      ru: "Автоматическое убийство врагов",
      fr: "Auto-tuer les ennemis",
      hi: "शत्रुओं को स्वतः मारें",
      ar: "قتل الأعداء تلقائيًا",
      tr: "Düşmanları Otomatik Öldür",
      it: "Uccisione automatica dei nemici",
    },
    {
      Text: this.Attr.KillAnimal.ATTRIBUTE,
      chs: "杀死动物",
      en: "Kill Animal",
      es: "Matar Animales",
      id: "Bunuh Hewan",
      ja: "動物を殺す",
      ko: "동물 죽이기",
      vi: "Tự động giết động vật",
      pt: "Matar Animais",
      pl: "Zabijaj Zwierzęta",
      ru: "Убить животное",
      fr: "Tuer un animal",
      hi: "जानवर को मार डालो",
      ar: "قتل حيوان",
      tr: "Hayvanı Öldür",
      it: "Uccidi l'animale",
    },
    {
      Text: this.Attr.SkipCutscene.ATTRIBUTE,
      chs: "启用剧情跳过",
      en: "Enable Plot Skip",
      es: "Activar salto de historia",
      id: "Aktifkan Lewati Cerita",
      ja: "プロットスキップを有効化",
      ko: "스토리 스킵 활성화",
      vi: "Bật chế độ bỏ qua cốt truyện",
      pt: "Ativar pulo de enredo",
      pl: "Włącz pomijanie fabuły",
      ru: "Включить пропуск сюжета",
      fr: "Activer le saut de l'histoire",
      hi: "कहानी छोड़ना सक्षम करें",
      ar: "تفعيل تخطي القصة",
      tr: "Hikaye Atlamayı Etkinleştir",
      it: "Abilita salta trama",
    },
    {
      Text: this.Attr.MobVacuum.ATTRIBUTE,
      chs: "吸怪",
      en: "Monster Vacuum",
      id: "Vakum Musuh",
      ja: "モンスターバキューム",
      es: "Aspiradora de Monstruos",
      ko: "몬스터 흡입",
      vi: "Hút quái vật",
      pt: "Aspirador de Monstros",
      pl: "Zbieracz Mobów",
      ru: "Пылесос для монстров",
      fr: "Aspirateur de monstre",
      hi: "राक्षस वैक्यूम",
      ar: "مكنسة الوحش",
      tr: "Canavar Vakum",
      it: "Aspiratore di mostri",
    },
    {
      Text: this.Attr.CollectionVacuum.ATTRIBUTE,
      chs: "吸收集品",
      en: "Collection Vacuum",
      id: "Vakum Koleksi",
      ja: "収集物吸引",
      es: "Aspiradora de Colección",
      ko: "수집품 흡입",
      vi: "Hút vật phẩm",
      pt: "Aspirador de Coleções",
      pl: "Zbieracz Zasobów",
      ru: "Пылесос Коллекций",
      fr: "Aspirateur de collection",
      hi: "संग्रह वैक्यूम",
      ar: "مكنسة كهربائية للمجموعة",
      tr: "Koleksiyon Vakumu",
      it: "Aspirapolvere da collezione",
    },
    {
      Text: this.Attr.AutoAbsorb.ATTRIBUTE,
      chs: "自动吸收",
      en: "Auto Absorb",
      es: "Auto Absorción",
      id: "Absorpsi Echo Otomatis",
      ja: "自動吸収",
      ko: "자동 흡수",
      vi: "Tự động nhặt Echo",
      pt: "Absorção Automática",
      pl: "Autoabsorbcja Echo",
      ru: "Автоматическое поглощение",
      fr: "Absorption automatique",
      hi: "ऑटो एब्जॉर्ब",
      ar: "امتصاص تلقائي",
      tr: "Otomatik Emilim",
      it: "Assorbimento automatico",
    },
    {
      Text: this.Attr.AutoPuzzle.ATTRIBUTE,
      chs: "自动解谜",
      en: "Auto Solve Puzzle",
      es: "Resolver Rompecabezas Automáticamente",
      id: "Pemecahan Teka-teki Otomatis",
      ja: "自動パズル解決",
      ko: "자동 퍼즐 해결",
      vi: "Tự động giải đố",
      pt: "Resolver Puzzle Automaticamente",
      pl: "Automatyczne Puzzle",
      ru: "Автоматическое решение головоломки",
      fr: "Résoudre le puzzle automatiquement",
      hi: "पहेली अपने आप हल करें",
      ar: "حل اللغز تلقائيًا",
      tr: "Bulmacayı Otomatik Çöz",
      it: "Risolvi automaticamente il puzzle",
    },
    {
      Text: this.Attr.AutoSonanceCasket.ATTRIBUTE,
      chs: "拾取声匣",
      en: "Auto Sonance Casket",
      es: "Caja Sonora Automática",
      id: "Sonance Casket Otomatis",
      ja: "自動ソナンスカスケット",
      ko: "자동 소넌스 캐스켓",
      vi: "Tự động thu thập Sonance Casket",
      pt: "Cápsula Sonora Automática",
      pl: "Automatyczne Sonance Caskety",
      ru: "Автоматическая Звуковая Шкатулка",
      fr: "Cercueil à sonance automatique",
      hi: "ऑटो सोनेंस कास्केट",
      ar: "تابوت الرنين التلقائي",
      tr: "Otomatik Sonans Sandığı",
      it: "Scrigno di risonanza automatica",
    },
    {
      Text: this.Attr.AutoTreasure.ATTRIBUTE,
      chs: "拾取宝箱",
      en: "Auto Pick Treasure",
      es: "Recoger Tesoro Automáticamente",
      id: "Ambil Harta Otomatis",
      ja: "自動宝箱回収",
      ko: "자동 보물 획득",
      vi: "Tự động mở rương",
      pt: "Pegar Tesouro Auto",
      pl: "Automatyczne Skrzynie",
      ru: "Автоматический подбор сокровищ",
      fr: "Ramasser automatiquement le trésor",
      hi: "स्वचालित रूप से खजाना उठाओ",
      ar: "التقاط الكنز تلقائيًا",
      tr: "Otomatik Hazine Toplama",
      it: "Raccolta automatica del tesoro",
    },
    {
      Text: this.Attr.AutoLoot.ATTRIBUTE,
      chs: "自动拾取",
      en: "Auto Loot",
      es: "Botín Automático",
      id: "Pengambil Koleksi Otomatis",
      ja: "自動回収",
      ko: "자동 수집",
      vi: "Tự động nhặt",
      pt: "Saque Automático",
      pl: "Automatyczne Zbieranie",
      ru: "Автоматический сбор добычи",
      fr: "Butin automatique",
      hi: "स्वतः लूट",
      ar: "نهب تلقائي",
      tr: "Otomatik Ganimet",
      it: "Bottino automatico",
    },
    {
      Text: this.Attr.AutoMining.ATTRIBUTE,
      chs: "自动挖掘",
      en: "Auto Mining",
      es: "Minería Automática",
      id: "Penambangan Otomatis",
      ja: "自動採掘",
      ko: "자동 채굴",
      vi: "Tự động thu thập khoáng sản",
      pt: "Mineração Automática",
      pl: "Automatyczne Zbieranie Kamieni",
      ru: "Автоматическая добыча",
      fr: "Minière automatique",
      hi: "स्वचालित खनन",
      ar: "تعدين تلقائي",
      tr: "Otomatik Madencilik",
      it: "Estrazione automatica",
    },
    {
      Text: this.Attr.SprintBuff.ATTRIBUTE,
      chs: "疾跑BUFF",
      en: "Sprint Buff",
      es: "Mejora de Carrera",
      id: "Buff Lari Cepat",
      ja: "スプリント強化",
      ko: "전력 질주 버프",
      vi: "Tăng tốc độ chạy",
      pt: "Buff Corrida",
      pl: "Buff do Sprintu",
      ru: "Ускорение",
      fr: "Bonus de sprint",
      hi: "स्प्रिंट बफ़",
      ar: "تعزيز السرعة",
      tr: "Hız Takviyesi",
      it: "Potenziamento Scatto",
    },
    {
      Text: this.Attr.OneHitKill.ATTRIBUTE,
      chs: "一击必杀",
      en: "One Hit Kill",
      es: "Golpe Letal",
      id: "Sekali Pukul Mati",
      ja: "一撃必殺",
      ko: "원 히트 킬",
      vi: "Hạ gục bằng một cú đánh",
      pt: "Matar Com um Golpe",
      pl: "Zabijanie na Hita",
      ru: "Убийство с одного удара",
      fr: "Tuer d'un coup",
      hi: "एक हिट में मार डालो",
      ar: "قتل بضربة واحدة",
      tr: "Tek Vuruşta Öldürme",
      it: "Uccisione con un colpo",
    },
    {
      Text: this.Attr.SelectBuff.ATTRIBUTE,
      chs: "选择BUFF",
      en: "Select Buff",
      es: "Seleccionar Buff",
      id: "Pilih Buff",
      ja: "バフを選択",
      ko: "버프 선택",
      vi: "Chọn buff",
      pt: "Selecionar Buff",
      pl: "Wybierz Buff",
      ru: "Выберите Бафф",
      fr: "Sélectionner un Buff",
      hi: "बफ़ चुनें",
      ar: "حدد المخزن المؤقت",
      tr: "Buff Seç",
      it: "Seleziona Buff",
    },
    {
      Text: this.Attr.EnterBuffId.ATTRIBUTE,
      chs: "输入 Buff ID",
      en: "Enter Buff ID",
      es: "Ingresar ID de Buff",
      id: "Masukan Buff ID",
      ja: "バフIDを入力",
      ko: "버프 ID 입력",
      vi: "Nhập Buff ID",
      pt: "Inserir ID do Buff",
      pl: "Wpisz Buff ID",
      ru: "Введите ID баффа",
      fr: "Entrez l'ID du Buff",
      hi: "बफ़ आईडी दर्ज करें",
      ar: "أدخل مُعرّف التعزيز",
      tr: "Buff Kimliğini Girin",
      it: "Inserisci ID Buff",
    },
    {
      Text: this.Attr.ESP.ATTRIBUTE,
      chs: "ESP",
      en: "ESP",
      es: "ESP",
      id: "ESP",
      ja: "ESP",
      ko: "ESP",
      vi: "ESP",
      pt: "ESP",
      pl: "ESP",
      ru: "ESP",
      fr: "ESP",
      hi: "ESP",
      ar: "ESP",
      tr: "ESP",
      it: "ESP",
    },
    {
      Text: this.Attr.ShowNameEsp.ATTRIBUTE,
      chs: "显示名称",
      en: "Show Name",
      es: "Mostrar Nombre",
      id: "Tampilkan Nama",
      ja: "名前を表示",
      ko: "이름 표시",
      vi: "Hiển thị tên",
      pt: "Mostrar Nome",
      pl: "Pokaż Nazwę",
      ru: "Показать имя",
      fr: "Nom de l'émission",
      hi: "शो का नाम",
      ar: "اسم العرض",
      tr: "Şov Adı",
      it: "Nome dello spettacolo",
    },
    {
      Text: this.Attr.ShowDistanceEsp.ATTRIBUTE,
      chs: "显示距离",
      en: "Show Distance",
      es: "Mostrar Distancia",
      id: "Tampilkan Jarak",
      ja: "距離を表示",
      ko: "거리 표시",
      vi: "Hiển thị khoảng cách",
      pt: "Mostrar Distância",
      pl: "Pokaż Dystans",
      ru: "Показать расстояние",
      fr: "Afficher la distance",
      hi: "दूरी दिखाएं",
      ar: "إظهار المسافة",
      tr: "Mesafeyi Göster",
      it: "Mostra distanza",
    },
    {
      Text: this.Attr.ShowBoxEsp.ATTRIBUTE,
      chs: "方框显示",
      en: "Show Box",
      es: "Mostrar Caja",
      id: "Tampilkan Kotak",
      ja: "ボックスを表示",
      ko: "상자 표시",
      vi: "Hiển thị hộp",
      pt: "Mostrar Caixa",
      pl: "Pokaż Obramowanie",
      ru: "Показать ящик",
      fr: "Afficher la boîte",
      hi: "शो बॉक्स",
      ar: "إظهار مربع",
      tr: "Kutuyu Göster",
      it: "Mostra riquadro",
    },
    {
      Text: this.Attr.Monster.ATTRIBUTE,
      chs: "声骇",
      en: "Monster",
      es: "Monstruo",
      id: "Monster",
      ja: "モンスター",
      ko: "몬스터",
      vi: "Quái vật",
      pt: "Monstro",
      pl: "Potwory",
      ru: "Монстр",
      fr: "Monstre",
      hi: "राक्षस",
      ar: "وحش",
      tr: "Canavar",
      it: "Mostro",
    },
    {
      Text: this.Attr.Collection.ATTRIBUTE,
      chs: "收集品",
      en: "Collection",
      es: "Colección",
      id: "Collection",
      ja: "コレクション",
      ko: "수집",
      vi: "Bộ sưu tập",
      pt: "Coleção",
      pl: "Przedmioty",
      ru: "Коллекция",
      fr: "Collection",
      hi: "संग्रह",
      ar: "مجموعة",
      tr: "Koleksiyon",
      it: "Collezione",
    },
    {
      Text: this.Attr.Treasure.ATTRIBUTE,
      chs: "宝箱",
      en: "Treasure",
      es: "Tesoro",
      id: "Treasure",
      ja: "宝物",
      ko: "보물",
      vi: "Rương kho báu",
      pt: "Tesouro",
      pl: "Skrzynie",
      ru: "Сокровище",
      fr: "Trésor",
      hi: "खजाना",
      ar: "كنز",
      tr: "Hazine",
      it: "Tesoro",
    },
    {
      Text: this.Attr.Animal.ATTRIBUTE,
      chs: "动物",
      en: "Animal",
      es: "Animal",
      id: "Animal",
      ja: "動物",
      ko: "동물",
      vi: "Động vật",
      pt: "Animal",
      pl: "Zwierzęta",
      ru: "Животное",
      fr: "Animal",
      hi: "जानवर",
      ar: "حيوان",
      tr: "Hayvan",
      it: "Animale",
    },
    {
      Text: this.Attr.Puzzle.ATTRIBUTE,
      chs: "解密",
      en: "Puzzle",
      es: "Rompecabezas",
      id: "Puzzle",
      ja: "パズル",
      ko: "퍼즐",
      vi: "Câu đố",
      pt: "Puzzle",
      pl: "Puzzle",
      ru: "Головоломка",
      fr: "Puzzle",
      hi: "पहेली",
      ar: "لغز",
      tr: "Yapboz",
      it: "Puzzle",
    },
    {
      Text: this.Attr.Casket.ATTRIBUTE,
      chs: "箱子",
      en: "Casket",
      es: "Cofre",
      id: "Casket",
      ja: "棺桶",
      ko: "관",
      vi: "Hộp Sonar",
      pt: "Urna",
      pl: "Casket",
      ru: "Ларец",
      fr: "Cercueil",
      hi: "ताबूत",
      ar: "نعش",
      tr: "Tabut",
      it: "Bara",
    },
    {
      Text: this.Attr.Rock.ATTRIBUTE,
      chs: "岩石",
      en: "Rock",
      es: "Roca",
      id: "Rock",
      ja: "岩",
      ko: "바위",
      vi: "Hòn đá",
      pt: "Rocha",
      pl: "Kamienie",
      ru: "Камень",
      fr: "Roche",
      hi: "चट्टान",
      ar: "صخرة",
      tr: "Kaya",
      it: "Roccia",
    },
    {
      Text: this.Attr.Mutterfly.ATTRIBUTE,
      chs: "隙声蝶",
      en: "Mutterfly",
      es: "Mutterfly",
      id: "Mutterfly",
      ja: "マターフライ",
      ko: "머터플라이",
      vi: "Mutterfly",
      pt: "Mutterfly",
      pl: "Mutterfly",
      ru: "Mutterfly",
      fr: "Mutterfly",
      hi: "मटरफ्लाई",
      ar: "متر فلاي",
      tr: "Mutterfly",
      it: "Mutterfly",
    },
    {
      Text: this.Attr.Blobify.ATTRIBUTE,
      chs: "飞猎手",
      en: "Blobify",
      es: "Blobify",
      id: "Blobify",
      ja: "ブロビファイ",
      ko: "블로비파이",
      vi: "Blobify",
      pt: "Blobify",
      pl: "Blobify",
      ru: "Blobify",
      fr: "Blobify",
      hi: "ब्लॉबीफाई",
      ar: "تبقع",
      tr: "Blobify",
      it: "Blobify",
    },
    {
      Text: this.Attr.CustomTp.ATTRIBUTE,
      chs: "自定义传送",
      en: "Custom Teleport",
      es: "Teletransportación Personalizada",
      id: "Custom Teleport",
      ja: "カスタムテレポート",
      ko: "사용자 지정 텔레포트",
      vi: "Tùy chỉnh dịch chuyển",
      pt: "Teleporte Personalizado",
      pl: "Niestandardowy Teleport",
      ru: "Пользовательская Телепортация",
      fr: "Téléportation personnalisée",
      hi: "कस्टम टेलीपोर्ट",
      ar: "نقل فوري مخصص",
      tr: "Özel Işınlanma",
      it: "Teletrasporto personalizzato",
    },
    {
      Text: this.Attr.SelectFileTp.ATTRIBUTE,
      chs: "选择文件",
      en: "Select File",
      es: "Seleccionar Archivo",
      id: "Select File",
      ja: "ファイル選択",
      ko: "파일 선택",
      vi: "Chọn tệp",
      pt: "Selecionar Arquivo",
      pl: "Wybierz Typ",
      ru: "Выбрать Файл",
      fr: "Sélectionner un fichier",
      hi: "फ़ाइल का चयन करें",
      ar: "اختر ملفا",
      tr: "Dosya Seç",
      it: "Seleziona file",
    },
    {
      Text: this.Attr.SelectLocTp.ATTRIBUTE,
      chs: "选择位置",
      en: "Select Location",
      es: "Elegir Ubicación",
      id: "Select Location",
      ja: "場所選択",
      ko: "위치 선택",
      vi: "Chọn vị trí dịch chuyển",
      pt: "Escolher Local",
      pl: "Wybierz Lokalizację",
      ru: "Выбрать Место",
      fr: "Choisir un lieu",
      hi: "स्थान चुनें",
      ar: "اختيار موقع",
      tr: "Konum Seç",
      it: "Seleziona posizione",
    },
    {
      Text: this.Attr.TotalLocTp.ATTRIBUTE,
      chs: "总位置",
      en: "Total Location",
      es: "Ubicación Total",
      id: "Total Location",
      ja: "全体の場所",
      ko: "전체 위치",
      vi: "Tổng tất cả vị trí",
      pt: "Localização Total",
      pl: "Łącznie Lokacji",
      ru: "Общая локация",
      fr: "Emplacement total",
      hi: "कुल स्थान",
      ar: "الموقع الإجمالي",
      tr: "Toplam Konum",
      it: "Posizione totale",
    },
    {
      Text: this.Attr.NextTpLoc.ATTRIBUTE,
      chs: "下一个位置",
      en: "Next Location",
      es: "Próxima Ubicación",
      id: "Next Location",
      ja: "次の場所",
      ko: "다음 위치",
      vi: "Vị trí tiếp theo",
      pt: "Próxima Localização",
      pl: "Następna Lokacja",
      ru: "Следующая локация",
      fr: "Emplacement suivant",
      hi: "अगला स्थान",
      ar: "الموقع التالي",
      tr: "Sonraki Konum",
      it: "Posizione successiva",
    },
    {
      Text: this.Attr.PrevTpLoc.ATTRIBUTE,
      chs: "上一个位置",
      en: "Previous Location",
      es: "Ubicación Anterior",
      id: "Previous Location",
      ja: "前の場所",
      ko: "이전 위치",
      vi: "Vị trí trước đó",
      pt: "Localização Anterior",
      pl: "Poprzednia Lokacja",
      ru: "Предыдущая локация",
      fr: "Emplacement précédent",
      hi: "पिछला स्थान",
      ar: "الموقع السابق",
      tr: "Önceki Konum",
      it: "Posizione precedente",
    },
    {
      Text: this.Attr.AutoTp.ATTRIBUTE,
      chs: "自动传送",
      en: "Auto Teleport",
      es: "Teletransportación Automática",
      id: "Auto Teleport",
      ja: "オートテレポート",
      ko: "자동 텔레포트",
      vi: "Dịch chuyển tự động",
      pt: "Teletransporte Automático",
      pl: "Automatyczna Teleportacja",
      ru: "Авто Телепорт",
      fr: "Téléportation automatique",
      hi: "स्वतः टेलीपोर्ट",
      ar: "النقل الفوري التلقائي",
      tr: "Otomatik Işınlanma",
      it: "Teletrasporto automatico",
    },
    {
      Text: this.Attr.ChangeLocTp.ATTRIBUTE,
      chs: "更改位置",
      en: "Change Location",
      es: "Cambiar Ubicación",
      id: "Change Location",
      ja: "場所変更",
      ko: "위치 변경",
      vi: "Thay đổi vị trí",
      pt: "Mudar Localização",
      pl: "Zmień Lokację",
      ru: "Сменить Локацию",
      fr: "Changer de lieu",
      hi: "स्थान बदलें",
      ar: "تغيير الموقع",
      tr: "Konum Değiştir",
      it: "Cambia posizione",
    },
    {
      Text: this.Attr.PrevButtonTp.ATTRIBUTE,
      chs: "上一个",
      en: "Previous",
      es: "Anterior",
      id: "Previous",
      ja: "前",
      ko: "이전",
      vi: "Trước",
      pt: "Anterior",
      pl: "Poprzednia",
      ru: "Предыдущий",
      fr: "Précédent",
      hi: "पिछला",
      ar: "السابق",
      tr: "Önceki",
      it: "Precedente",
    },
    {
      Text: this.Attr.NextButtonTp.ATTRIBUTE,
      chs: "下一个",
      en: "Next",
      es: "Siguiente",
      id: "Next",
      ja: "次",
      ko: "다음",
      vi: "Tiếp theo",
      pt: "Próximo",
      pl: "Następna",
      ru: "Далее",
      fr: "Suivant",
      hi: "अगला",
      ar: "التالي",
      tr: "Sonraki",
      it: "Prossimo",
    },
    {
      Text: this.Attr.AutoTpTrackedMonster.ATTRIBUTE,
      chs: "自动回声狩猎",
      en: "Auto Echo Hunting",
      es: "Caza de Eco Automática",
      id: "Perburuan Echo Otomatis",
      ja: "自動エコーハンティング",
      ko: "자동 에코 사냥",
      vi: "Săn Vọng Âm Tự Động",
      pt: "Caça de Eco Automática",
      pl: "Automatyczne Polowanie na Echo",
      ru: "Автоматическая Эхо-Охота",
      fr: "Chasse d'Écho Automatique",
      hi: "स्वचालित इको शिकार",
      ar: "صيد الصدى التلقائي",
      tr: "Otomatik Yankı Avı",
      it: "Caccia Eco Automatica",
    },
    {
      Text: this.Attr.AutoTpDelay.ATTRIBUTE,
      chs: "延迟 (秒)",
      en: "Delay (seconds)",
      es: "Retraso (segundos)",
      id: "Delay (seconds)",
      ja: "遅延（秒）",
      ko: "지연 (초)",
      vi: "Độ trễ (giây)",
      pt: "Atraso (segundos)",
      pl: "Opóźnienie (sekundy)",
      ru: "Задержка (секунды)",
      fr: "Délai (secondes)",
      hi: "देरी (सेकंड)",
      ar: "تأخير (ثوان)",
      tr: "Gecikme (saniye)",
      it: "Ritardo (secondi)",
    },
    {
      Text: this.Attr.ShowFps.ATTRIBUTE,
      chs: "FPS显示",
      en: "Show FPS",
      es: "Mostrar FPS",
      id: "Show FPS",
      ja: "FPSを表示",
      ko: "FPS 표시",
      vi: "Hiển thị FPS",
      pt: "Mostrar FPS",
      pl: "Pokaż FPS",
      ru: "Показать FPS",
      fr: "Afficher les FPS",
      hi: "FPS दिखाएं",
      ar: "إظهار FPS",
      tr: "FPS'yi Göster",
      it: "Mostra FPS",
    },
    {
      Text: this.Attr.DebugEntity.ATTRIBUTE,
      chs: "实体调试",
      en: "Debug Entity",
      es: "Depurar Entidad",
      id: "Debug Entity",
      ja: "エンティティデバッグ",
      ko: "엔티티 디버그",
      vi: "Kiểm tra, gỡ lỗi Thực Thể",
      pt: "Debug de Depuração",
      pl: "Debugowanie",
      ru: "Отладка отладки",
      fr: "Entité de débogage",
      hi: "डीबग इकाई",
      ar: "كيان التصحيح",
      tr: "Hata Ayıklama Varlığı",
      it: "Entità di debug",
    },
    {
      Text: this.Attr.FpsUnlocker.ATTRIBUTE,
      chs: "FPS解锁",
      en: "FPS Unlocker",
      es: "Desbloqueador de FPS",
      id: "FPS Unlocker",
      ja: "FPSロック解除",
      ko: "FPS 잠금 해제",
      vi: "Mở Khóa FPS",
      pt: "Desbloquear FPS",
      pl: "Odblokowanie FPS",
      ru: "Разблокировать FPS",
      fr: "Débloqueur de FPS",
      hi: "एफपीएस अनलॉकर",
      ar: "فاتح FPS",
      tr: "FPS Kilitleyici Açıcı",
      it: "Sblocco FPS",
    },
    {
      Text: this.Attr.ChangeUid.ATTRIBUTE,
      chs: "更改UID",
      en: "Change UID",
      es: "Cambiar UID",
      id: "Change UID",
      ja: "UID変更",
      ko: "UID 변경",
      vi: "Thay Đổi UID",
      pt: "Mudar UID",
      pl: "Zmień UID",
      ru: "Сменить UID",
      fr: "Changer l'UID",
      hi: "UID बदलें",
      ar: "تغيير UID",
      tr: "UID'yi Değiştir",
      it: "Cambia UID",
    },
    {
      Text: this.Attr.ConsoleCommand.ATTRIBUTE,
      chs: "控制台命令",
      en: "Console Command",
      es: "Comando de Consola",
      id: "Console Command",
      ja: "コンソールコマンド",
      ko: "콘솔 명령",
      vi: "Lệnh Console",
      pt: "Comando do Console",
      pl: "Konsola Komend",
      ru: "Консольная команда",
      fr: "Commande Console",
      hi: "कंसोल कमांड",
      ar: "أمر وحدة التحكم",
      tr: "Konsol Komutu",
      it: "Comando Console",
    },
    {
      Text: this.Attr.KillAuraHighRisk.ATTRIBUTE,
      chs: "高风险: 可能会导致您的账户在某些任务中变砖",
      en: "High risk may brick your account in some quests",
      es: "Alto Riesgo: Puede bloquear permanentemente tu cuenta en algunas misiones",
      id: "Risiko Tinggi: Bisa membuat akun Anda rusak permanen di beberapa quest",
      ja: "高リスク: 一部のクエストでアカウントが使用不能になる可能性があります",
      ko: "높은 위험: 일부 퀘스트에서 계정이 영구적으로 사용할 수 없게 될 수 있음",
      vi: "Nguy cơ cao: Có thể khiến tài khoản của bạn bị vô hiệu hóa vĩnh viễn hoặc lỗi trong một số nhiệm vụ",
      pt: "Alto Risco: Pode tornar BANIR em algumas missões",
      pl: "Wysokie ryzyko: Może sprawić, że twoje konto stanie się bezużyteczne w niektórych zadaniach",
      ru: "Высокий риск: Может привести к полной неработоспособности аккаунта в некоторых квестах",
      fr: "Risque Élevé : Peut rendre votre compte inutilisable dans certaines quêtes",
      hi: "उच्च जोखिम: कुछ quests में आपका खाता स्थायी रूप से निष्क्रिय हो सकता है",
      ar: "خطر عالي: قد يؤدي إلى تعطيل حسابك بشكل دائم في بعض المهام",
      tr: "Yüksek Risk: Bazı görevlerde hesabınızı kalıcı olarak kullanılamaz hale getirebilir",
      it: "Alto Rischio: Potrebbe rendere il tuo account inutilizzabile in alcune missioni",
    },
    {
      Text: this.Attr.InstantKillDanger.ATTRIBUTE,
      chs: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      en: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      es: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      id: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      ja: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      ko: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      vi: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      pt: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      pl: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      ru: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      fr: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      hi: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      ar: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      tr: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
      it: `Avoid using Instant Kill if you are in:
- Boss: Fallacy of No Return
- Tacet Fields

Known issues:
- You can't claim the reward after defeating Boss Fallacy of No Return.
- Enemy won't spawn in Tacet Fields`,
    },
    {
      Text: this.Attr.DropEchoBuff.ATTRIBUTE,
      chs: "掉落回声提升 +50%",
      en: "Increase Drop Echo +50%",
      es: "Aumento de Eco de caída +50%",
      id: "Tingkatkan Drop Echo +50%",
      ja: "ドロップエコー+50%増加",
      ko: "드롭 에코 +50% 증가",
      vi: "Tăng tỉ lệ Echo Rơi +50%",
      pt: "Aumenta o Drop de Echo +50%",
      pl: "Zwiększenie Echo Upuszczenia +50%",
      ru: "Увеличение эха выпадения на 50%",
      fr: "Augmente l'Écho de Chute de 50%",
      hi: "ड्रॉप इको +50% बढ़ाएं",
      ar: "زيادة صدى الإسقاط بنسبة 50%",
      tr: "Düşüş Yankısını %50 Artır",
      it: "Aumenta l'Eco della Caduta del 50%",
    },
    {
      Text: this.Attr.MaterialAndShellBuff.ATTRIBUTE,
      chs: "掉落材料 & 货币提升 +50%",
      en: "Increase Drop Material & Coin +50%",
      es: "Aumento de Material y Monedas +50%",
      id: "Tingkatkan Drop Material & Koin +50%",
      ja: "ドロップ素材＆コイン+50%増加",
      ko: "드롭 재료 및 코인 +50% 증가",
      vi: "Tăng tỉ lệ rơi vật liệu & tiền xu +50%",
      pt: "Aumenta o Drop de materiais e moedas em +50%",
      pl: "Zwiększenie Materiału i Monety Upuszczenia +50%",
      ru: "Увеличение выпадения материалов и монет на 50%",
      fr: "Augmente la Chute de Matériaux & Pièces de 50%",
      hi: "ड्रॉप सामग्री और सिक्के +50% बढ़ाएं",
      ar: "زيادة سقوط المواد والعملات بنسبة 50%",
      tr: "Düşüş Malzeme ve Para %50 Artır",
      it: "Aumenta il Materiale & Monete della Caduta del 50%",
    },
    {
      Text: this.Attr.MaxResonanceChain.ATTRIBUTE,
      chs: "最大共鸣链",
      en: "Max Resonance Chain",
      es: "Cadena de Resonancia Máxima",
      id: "Rantai Resonansi Maksimum",
      ja: "最大共鳴チェーン",
      ko: "최대 공명 체인",
      vi: "Đầy thanh cộng hưởng",
      pt: "Cadeia de Ressonância Máxima",
      pl: "Maksymalny Łańcuch Rezonansu",
      ru: "Максимальная Цепь Резонанса",
      fr: "Chaîne de Résonance Maximale",
      hi: "अधिकतम अनुनाद श्रृंखला",
      ar: "سلسلة الرنين القصوى",
      tr: "Maksimum Rezonans Zinciri",
      it: "Catena di Risonanza Massima",
    },
    {
      Text: this.Attr.SuperBuff.ATTRIBUTE,
      chs: "超级增益",
      en: "Super Buff",
      es: "Súper Beneficio",
      id: "Buff Super",
      ja: "スーパーバフ",
      ko: "슈퍼 버프",
      vi: "Siêu Buff",
      pt: "Super Buff",
      pl: "Super Wzmocnienie",
      ru: "Супер-бафф",
      fr: "Super Buff",
      hi: "सुपर बफ",
      ar: "تعزيز فائق",
      tr: "Süper Güçlendirme",
      it: "Super Potenziamento",
    },
    {
      Text: this.Attr.SuperBuffTooltip.ATTRIBUTE,
      chs: `超级增益:
      - ATK +3.000
      - Crit Damage +200%
      - Crit Rate +100%`,
      en: `Stats Boost:
      - ATK +3.000
      - Crit Damage +200%
      - Crit Rate +100%`,
      es: `Súper Beneficio:
      - ATK +3.000
      - Daño Crítico +200%
      - Probabilidad de Crítico +100%`,
      id: `Buff Super:
      - ATK +3.000
      - Damage Kritis +200%
      - Peluang Kritis +100%`,
      ja: `スーパーバフ:
      - ATK +3.000
      - クリティカルダメージ +200%
      - クリティカル率 +100%`,
      ko: `슈퍼 버프:
      - ATK +3.000
      - 치명타 피해 +200%
      - 치명타 확률 +100%`,
      vi: `Siêu Buff:
      - Tỉ lệ tấn công +3.000
      - Sát thương chí mạng +200%
      - Tỷ lệ chí mạng +100%`,
      pt: `Super Buff:
      - ATK +3.000
      - Dano Crítico +200%
      - Taxa de Crítico +100%`,
      pl: `Super Wzmocnienie:
      - ATK +3.000
      - Obrażenia Krytyczne +200%
      - Szansa na Krytyk +100%`,
      ru: `Супер-бафф:
      - АТК +3.000
      - Критический урон +200%
      - Шанс критического удара +100%`,
      fr: `Super Buff:
      - ATK +3.000
      - Dégâts Critiques +200%
      - Taux de Critique +100%`,
      hi: `सुपर बफ:
      - ATK +3.000
      - क्रिटिकल डैमेज +200%
      - क्रिटिकल रेट +100%`,
      ar: `تعزيز فائق:
      - ATK +3.000
      - ضرر الضربة الحرجة +200%
      - معدل الضربة الحرجة +100%`,
      tr: `Süper Güçlendirme:
      - ATK +3.000
      - Kritik Hasar +200%
      - Kritik Oranı +100%`,
      it: `Super Potenziamento:
      - ATK +3.000
      - Danno Critico +200%
      - Probabilità Critico +100%`,
    },
    {
      Text: this.Attr.KbTeleportPrev.ATTRIBUTE,
      chs: "上一次传送",
      en: "Previous Teleport",
      es: "Teletransporte Anterior",
      id: "Teleport Sebelumnya",
      ja: "前回のテレポート",
      ko: "이전 텔레포트",
      vi: "Dịch chuyển đén điểm trước đó",
      pt: "Teleporte Anterior",
      pl: "Poprzedni Teleport",
      ru: "Предыдущий Телепорт",
      fr: "Téléportation Précédente",
      hi: "पिछला टेलीपोर्ट",
      ar: "النقل الفوري السابق",
      tr: "Önceki Işınlanma",
      it: "Teletrasporto Precedente",
    },
    {
      Text: this.Attr.KbTeleportNext.ATTRIBUTE,
      chs: "下一次传送",
      en: "Next Teleport",
      es: "Siguiente Teletransporte",
      id: "Teleport Berikutnya",
      ja: "次回のテレポート",
      ko: "다음 텔레포트",
      vi: "Dịch chuyển đén điểm tiếp theo",
      pt: "Próximo Teleporte",
      pl: "Następny Teleport",
      ru: "Следующий Телепорт",
      fr: "Téléportation Suivante",
      hi: "अगला टेलीपोर्ट",
      ar: "النقل الفوري التالي",
      tr: "Sonraki Işınlanma",
      it: "Teletrasporto Successivo",
    },
    {
      Text: this.Attr.AutoTpTrackedMonsterTooltip.ATTRIBUTE,
      chs: `此功能适用于回声狩猎，如何使用？
      
    - 从暂停菜单打开数据银行。
    - 滚动到回声图库。
    - 选择您想要追踪的回声并选择“追踪”。
    - 这会将您传送到回声狩猎界面。
    - 选择“检测”。
    - 等待直到看到“传送中..”，您将自动传送到目标位置。`,
      en: `This feature works for echo hunting, how to use it?
      
    - Open the Data Bank from the pause menu.
    - Scroll to Echo Gallery.
    - Select the Echo you want to track and select “Track.”
    - This transfers you to the Echo Hunting screen.
    - Select “Detect.”
    - Wait until you see "Teleporting.." you will automatically teleport to the target location.`,
      es: `Esta función sirve para la caza de ecos, ¿cómo usarla?
      
    - Abre el Banco de Datos desde el menú de pausa.
    - Desplázate hasta la Galería de Ecos.
    - Selecciona el Eco que deseas rastrear y elige "Rastrear."
    - Esto te transferirá a la pantalla de Caza de Ecos.
    - Selecciona "Detectar."
    - Espera hasta ver "Teleportando.." serás teletransportado automáticamente a la ubicación objetivo.`,
      id: `Fitur ini berfungsi untuk berburu echo, bagaimana cara menggunakannya?
      
    - Buka Data Bank dari menu jeda.
    - Gulir ke Echo Gallery.
    - Pilih Echo yang ingin dilacak dan pilih "Track."
    - Ini akan membawa Anda ke layar Echo Hunting.
    - Pilih “Detect."
    - Tunggu hingga muncul "Teleporting.." Anda akan secara otomatis berpindah ke lokasi target.`,
      ja: `この機能はエコーハンティング用です。使用方法は？
      
    - 一時停止メニューからデータバンクを開く。
    - エコーギャラリーまでスクロールする。
    - 追跡したいエコーを選択し、「追跡」を選ぶ。
    - するとエコーハンティング画面へ移動する。
    - 「検出」を選択する。
    - 「テレポート中..」が表示されるまで待つと、自動的にターゲットの場所へテレポートされる。`,
      ko: `이 기능은 에코 사냥을 위한 것입니다. 사용하는 방법은?  
      
    - 일시 정지 메뉴에서 데이터 뱅크를 엽니다.
    - 에코 갤러리로 스크롤합니다.
    - 추적할 에코를 선택하고 "추적"을 선택합니다.
    - 그러면 에코 사냥 화면으로 이동합니다.
    - "탐지"를 선택합니다.
    - "텔레포트 중.." 메시지가 나타날 때까지 기다리면 자동으로 목표 위치로 순간이동합니다.`,
      vi: `Tính năng này dùng để săn echo, cách sử dụng?
      
    - Mở Ngân hàng Dữ liệu từ menu tạm dừng.
    - Cuộn đến Bộ sưu tập Echo.
    - Chọn Echo bạn muốn theo dõi và nhấn "Theo dõi."
    - Bạn sẽ được chuyển đến màn hình Săn Echo.
    - Chọn "Phát hiện."
    - Chờ đến khi thấy "Đang dịch chuyển.." bạn sẽ tự động dịch chuyển đến vị trí mục tiêu.`,
      pt: `Este recurso funciona para caça de ecos, como usá-lo?
      
    - Abra o Banco de Dados no menu de pausa.
    - Role até a Galeria de Ecos.
    - Selecione o Eco que deseja rastrear e clique em "Rastrear".
    - Isso o levará para a tela de Caça de Ecos.
    - Selecione "Detectar".
    - Aguarde até ver "Teleportando.." e você será teletransportado automaticamente para o local-alvo.`,
      pl: `Ta funkcja działa dla polowania na echo, jak jej używać?
      
    - Otwórz Bank Danych z menu pauzy.
    - Przewiń do Galerii Echo.
    - Wybierz Echo, które chcesz śledzić i kliknij „Śledź”.
    - Zostaniesz przeniesiony do ekranu Polowania na Echo.
    - Wybierz „Wykryj”.
    - Poczekaj, aż zobaczysz „Teleportowanie..”, a następnie automatycznie przeniesiesz się do lokalizacji docelowej.`,
      ru: `Эта функция предназначена для охоты на эхо, как ее использовать?
      
    - Откройте Банк Данных в меню паузы.
    - Пролистайте до Галереи Эхо.
    - Выберите Эхо, которое хотите отслеживать, и нажмите «Отслеживать».
    - Вы попадете на экран Охоты на Эхо.
    - Выберите «Обнаружить».
    - Подождите, пока появится сообщение "Телепортация..", и вас автоматически телепортирует в место назначения.`,
      fr: `Cette fonctionnalité est destinée à la chasse aux échos, comment l'utiliser ?
      
    - Ouvrez la Banque de Données depuis le menu pause.
    - Faites défiler jusqu'à la Galerie d'Échos.
    - Sélectionnez l'Écho que vous souhaitez suivre et cliquez sur "Suivre".
    - Cela vous transfère à l'écran de Chasse aux Échos.
    - Sélectionnez "Détecter".
    - Attendez jusqu'à voir "Téléportation.." et vous serez automatiquement téléporté à l'emplacement cible.`,
      hi: `यह सुविधा गूंज शिकार के लिए है, इसे कैसे उपयोग करें?
      
    - पॉज मेनू से डेटा बैंक खोलें।
    - गूंज गैलरी तक स्क्रॉल करें।
    - जिस गूंज को ट्रैक करना चाहते हैं उसे चुनें और "ट्रैक" पर क्लिक करें।
    - इससे आप गूंज शिकार स्क्रीन पर चले जाएंगे।
    - "डिटेक्ट" चुनें।
    - "टेलीपोर्टिंग.." दिखने तक प्रतीक्षा करें, फिर आप स्वचालित रूप से लक्ष्य स्थान पर टेलीपोर्ट हो जाएंगे।`,
      ar: `تعمل هذه الميزة لصيد الصدى، كيف تستخدمها؟
      
    - افتح بنك البيانات من قائمة التوقف المؤقت.
    - قم بالتمرير إلى معرض الصدى.
    - اختر الصدى الذي تريد تتبعه واضغط على "تتبع".
    - سيتم نقلك إلى شاشة صيد الصدى.
    - اختر "اكتشاف".
    - انتظر حتى ترى "يتم النقل الفوري.." وستنتقل تلقائيًا إلى الموقع المستهدف.`,
      tr: `Bu özellik yankı avcılığı için çalışır, nasıl kullanılır?
      
    - Duraklatma menüsünden Veri Bankasını açın.
    - Yankı Galerisine kaydırın.
    - Takip etmek istediğiniz Yankıyı seçin ve "Takip Et" düğmesine basın.
    - Bu sizi Yankı Avcılığı ekranına götürecektir.
    - "Tespit Et" seçeneğini seçin.
    - "Işınlanıyor.." ifadesini görene kadar bekleyin, ardından otomatik olarak hedef konuma ışınlanacaksınız.`,
      it: `Questa funzione è utile per la caccia agli echi, come usarla?
      
    - Apri la Banca Dati dal menu di pausa.
    - Scorri fino alla Galleria degli Echi.
    - Seleziona l'Eco che vuoi tracciare e clicca su "Traccia".
    - Verrai trasferito alla schermata di Caccia agli Echi.
    - Seleziona "Rileva".
    - Aspetta fino a vedere "Teleportando.." e verrai teletrasportato automaticamente alla posizione target.`,
    },
    {
      Text: this.Attr.QuitGameMenu.ATTRIBUTE,
      chs: "退出游戏",
      en: "Quit Game",
      id: "Quit Game",
      es: "Salir del Juego",
      ja: "ゲームを終了",
      ko: "게임 종료",
      vi: "Thoát trò chơi",
      pt: "Sair do Jogo",
      pl: "Wyłącz Grę",
      ru: "Выйти из игры",
      fr: "Quitter le jeu",
      hi: "खेल छोड़ें",
      ar: "إنهاء اللعبة",
      tr: "Oyundan Çık",
      it: "Esci dal gioco",
    },
  ];

  static ModTr = (string) => {
    const Find = ModLanguage.translate.find((translate) => translate.Text === string);
    if (Find) {
      return Find[this.GetCurrLang()] || Find.Text;
    } else {
      return `${string} - Error`; // return original string if no translation found
    }
  };
}

exports.ModLanguage = ModLanguage;
