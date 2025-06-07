const {
  FeilianBeringal,
  ImpermanenceHeron,
  InfernoRider,
  LampylumenMyriad,
  Merch,
  MouringAix,
  Tempest,
  Thundering,
  BellBorne,
  Crownless,
} = require("./c4-boss");

const bossC4 = (loop = 5) => {
  const bosses = [
    FeilianBeringal,
    ImpermanenceHeron,
    InfernoRider,
    LampylumenMyriad,
    Merch,
    MouringAix,
    Tempest,
    Thundering,
    BellBorne,
    Crownless,
  ];

  let data = [];

  let idCounter = 1;

  for (let index = 0; index < loop; index++) {
    const clonedBosses = bosses.map((boss) => ({
      ...boss,
      filename: "All Boss",
      id: idCounter++,
    }));
    data = data.concat(clonedBosses);
  }

  return data;
};

module.exports = bossC4;
