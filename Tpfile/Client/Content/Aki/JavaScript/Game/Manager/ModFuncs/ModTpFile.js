"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.ModTpFile = void 0);

// Farm echoes set
const C1_Farm = require("./CustomTpData/c1-farm"),
  C4_Boss = require("./CustomTpData/allboss"),
  Aero = require("./CustomTpData/FarmSet/aero"),
  Fusion = require("./CustomTpData/FarmSet/fusion"),
  Glacio = require("./CustomTpData/FarmSet/glacio"),
  Havoc = require("./CustomTpData/FarmSet/havoc"),
  Moonlith = require("./CustomTpData/FarmSet/moonlith"),
  Spectro = require("./CustomTpData/FarmSet/spectro"),
  VoidThunder = require("./CustomTpData/FarmSet/voidThunder"),
  C3_Farm = require("./CustomTpData/c3-farm");

// V1.0 100% MAP
const CentralPlains = require("./CustomTpData/v10/100-exploration/central-plains"),
  Desorock = require("./CustomTpData/v10/100-exploration/desorock"),
  WimingArea = require("./CustomTpData/v10/100-exploration/wiming-area"),
  WhumingBay = require("./CustomTpData/v10/100-exploration/whuming-bay"),
  TigersMaw = require("./CustomTpData/v10/100-exploration/tigers-maw"),
  NorfallArea = require("./CustomTpData/v10/100-exploration/norfall-area"),
  DimForest = require("./CustomTpData/v10/100-exploration/dim-forest"),
  JinzhouArea = require("./CustomTpData/v10/100-exploration/jinzhou-area"),
  GuixuiArea = require("./CustomTpData/v10/100-exploration/guixui-area"),
  GeorgesArea = require("./CustomTpData/v10/100-exploration/georges-area"),
  Rinascita_area = require("./CustomTpData/v10/100-exploration/Risascita_Area"),
  Firmament = require("./CustomTpData/v10/100-exploration/firmament"),
  { Blackshore, Blackshore_Under } = require("./CustomTpData/v10/100-exploration/black-shore"),
  Riccioli_Islands = require("./CustomTpData/v10/100-exploration/riccioli_islands"),
  MutterflyAio = require("./CustomTpData/v10/100-exploration/Mutterfly-aio"),
  MusicflyAio = require("./CustomTpData/v10/100-exploration/Musicfly-aio"),
  // Ores
  Orev10 = require("./CustomTpData/v10/ore_materialsv10"),
  Orev20 = require("./CustomTpData/v20/ore_materialsv20"),
  // Monster echoes
  RedElite = require("./CustomTpData/v10/monster/redelite");

// v2.0 Challenge
const EchoChallenge = require("./CustomTpData/v20/challenge/echo-challenge"),
  SimulationTraining = require("./CustomTpData/v20/challenge/simulation-training"),
  // Echoes
  C3rinascita = require("./CustomTpData/v20/monster/C3_rinascita"),
  NightmareBoss = require("./CustomTpData/v20/monster/nightmare"),
  // EchoSet
  FrostyResolve = require("./CustomTpData/v20/EchoSets/frostyresolve"),
  MidnightVeil = require("./CustomTpData/v20/EchoSets/midnightveil"),
  EternalRadiance = require("./CustomTpData/v20/EchoSets/eternalradiance"),
  // Treasure
  ChestRinascita = require("./CustomTpData/v20/treasure/chest-rinascita"),
  SonanceCasket = require("./CustomTpData/v20/treasure/sonanceCasket");

// V2.1
const Treasure_Monster_Under = require("./CustomTpData/v21/Echo/C3_under_v21"),
  Treasure_Monster = require("./CustomTpData/v21/Echo/C3_v21"),
  Vault_Underground = require("./CustomTpData/v21/treasure/vault_underground"); // Moved location

// V2.2
const All_Waveplate_Activities_Avinoleum = require("./CustomTpData/v22/challenge/All_Waveplate_Activities_Avinoleum"),
  Overflowing_Palette_V22_Beohr_Waters = require("./CustomTpData/v22/challenge/Overflowing_Palette_V22_Beohr_Waters"),
  Felicitous_Olives = require("./CustomTpData/v22/material/Felicitous_Olives"),
  Viscum_Berry = require("./CustomTpData/v22/material/Viscum_Berry"),
  Seaside_Candrelis_Avinoleum = require("./CustomTpData/v22/material/Seaside_Candrelis_Avinoleum"),
  Resonant_Calcite = require("./CustomTpData/v22/material/Resonant_Calcite"),
  Heliobane_Fungia = require("./CustomTpData/v22/material/Heliobane_Fungia"),
  Fools_Gold = require("./CustomTpData/v22/material/Fools_Gold"),
  All_Echoes_Avinoleum = require("./CustomTpData/v22/monster/All_Echoes_Avinoleum"),
  All_Echoes_Beohr_Waters = require("./CustomTpData/v22/monster/All_Echoes_Beohr_Waters"),
  Resonance_Beacon_Nexus_Avinoleum = require("./CustomTpData/v22/resonance/Resonance_Beacon_Nexus_Avinoleum"),
  Resonance_Beacon_Nexus_Beohr_Waters = require("./CustomTpData/v22/resonance/Resonance_Beacon_Nexus_Beohr_Waters"),
  Supply_Chest_Tidal_Avinoleum = require("./CustomTpData/v22/treasure/Supply_Chest_Tidal_Avinoleum"),
  Supply_Chest_Tidal_2_2_Beohr_Waters = require("./CustomTpData/v22/treasure/Supply_Chest_Tidal_Beohr_Waters"),
  reroll = require("./CustomTpData/v22/treasure/reroll");

class ModTpFile {
  // Echoes
  static C4_Boss = C4_Boss();
  static C1_Farm = C1_Farm;
  static C3_Farm = C3_Farm;
  static Aero = Aero;
  static Fusion = Fusion;
  static Glacio = Glacio;
  static Havoc = Havoc;
  static Moonlith = Moonlith;
  static Spectro = Spectro;
  static VoidThunder = VoidThunder;

  // 1.0
  static RedElite = RedElite;
  static Orev10 = Orev10;
  static Orev20 = Orev20;
  static CentralPlains = CentralPlains;
  static Desorock = Desorock;
  static WimingArea = WimingArea;
  static WhumingBay = WhumingBay;
  static TigersMaw = TigersMaw;
  static NorfallArea = NorfallArea;
  static DimForest = DimForest;
  static JinzhouArea = JinzhouArea;
  static GuixuiArea = GuixuiArea;
  static GeorgesArea = GeorgesArea;
  static Firmament = Firmament;
  static Blackshore_Under = Blackshore_Under;
  static Blackshore = Blackshore;
  static Rinascita_Area = Rinascita_area;
  static Riccioli_Islands = Riccioli_Islands;
  static MutterflyAio = MutterflyAio;
  static MusicflyAio = MusicflyAio;

  // v2.0
  static ChestRinascita = ChestRinascita;
  static SonanceCasket = SonanceCasket;
  static EchoChallenge = EchoChallenge;
  static SimulationTraining = SimulationTraining;
  static FrostyResolve = FrostyResolve;
  static MidnightVeil = MidnightVeil;
  static EternalRadiance = EternalRadiance;
  static C3rinascita = C3rinascita;
  static NightmareBoss = NightmareBoss; 

  // V2.1
  static Treasure_Monster = Treasure_Monster;
  static Treasure_Monster_Under = Treasure_Monster_Under;
  static Vault_Underground = Vault_Underground; // Moved to V2.1

  // V2.2
  static All_Waveplate_Activities_Avinoleum = All_Waveplate_Activities_Avinoleum;
  static Overflowing_Palette_V22_Beohr_Waters = Overflowing_Palette_V22_Beohr_Waters;
  static Felicitous_Olives = Felicitous_Olives;
  static Viscum_Berry = Viscum_Berry;
  static Seaside_Candrelis_Avinoleum = Seaside_Candrelis_Avinoleum;
  static Resonant_Calcite = Resonant_Calcite;
  static Heliobane_Fungia = Heliobane_Fungia;
  static Fools_Gold = Fools_Gold;
  static All_Echoes_Avinoleum = All_Echoes_Avinoleum;
  static All_Echoes_Beohr_Waters = All_Echoes_Beohr_Waters;
  static Resonance_Beacon_Nexus_Avinoleum = Resonance_Beacon_Nexus_Avinoleum;
  static Resonance_Beacon_Nexus_Beohr_Waters = Resonance_Beacon_Nexus_Beohr_Waters;
  static Supply_Chest_Tidal_Avinoleum = Supply_Chest_Tidal_Avinoleum;
  static Supply_Chest_Tidal_2_2_Beohr_Waters = Supply_Chest_Tidal_2_2_Beohr_Waters;
  static reroll = reroll;

  static CustomTpList = [
    // Echoes
    this.C4_Boss,
    this.C1_Farm,
    this.C3_Farm,
    this.Aero,
    this.Fusion,
    this.Glacio,
    this.Havoc,
    this.Moonlith,
    this.Spectro,
    this.VoidThunder,

    // 1.0
    this.RedElite,
    this.CentralPlains,
    this.Desorock,
    this.WimingArea,
    this.WhumingBay,
    this.TigersMaw,
    this.NorfallArea,
    this.DimForest,
    this.JinzhouArea,
    this.GuixuiArea,
    this.GeorgesArea,
    this.Firmament,
    this.Blackshore_Under,
    this.Blackshore,
    this.Rinascita_Area,
    this.Riccioli_Islands,
    this.MutterflyAio,
    this.MusicflyAio,
    this.Orev10,
    this.Orev20,

    // v2.0
    this.ChestRinascita,
    this.SonanceCasket,
    this.EchoChallenge,
    this.SimulationTraining,
    this.FrostyResolve,
    this.MidnightVeil,
    this.EternalRadiance,
    this.C3rinascita,
    this.NightmareBoss,

    // V2.1
    this.Treasure_Monster,
    this.Treasure_Monster_Under,
    this.Vault_Underground, // Now in V2.1 section

    // V2.2
    this.All_Waveplate_Activities_Avinoleum,
    this.Overflowing_Palette_V22_Beohr_Waters,
    this.Felicitous_Olives,
    this.Viscum_Berry,
    this.Seaside_Candrelis_Avinoleum,
    this.Resonant_Calcite,
    this.Heliobane_Fungia,
    this.Fools_Gold,
    this.All_Echoes_Avinoleum,
    this.All_Echoes_Beohr_Waters,
    this.Resonance_Beacon_Nexus_Avinoleum,
    this.Resonance_Beacon_Nexus_Beohr_Waters,
    this.Supply_Chest_Tidal_Avinoleum,
    this.Supply_Chest_Tidal_2_2_Beohr_Waters,
    this.reroll,
  ];
}
exports.ModTpFile = ModTpFile;