// items

const ironOre = extend(Item, "iron-ore", {});

const coke = extend(Item, "coke", {});

const steel = extend(Item, "steel", {});

const quarzite = extend(Item, "quarzite", {});

const ruxonium = extend(Item, "ruxonium", {});

// blocks/environment

const oreIron = extend(OreBlock, "ore-iron", {});

const oreQuarzite = extend(OreBlock, "ore-quarzite", {});

// blocks/power

const batteryMedium = extend(Battery, "battery-medium", {});

// blocks/production

const cokeOven = extend(GenericCrafter, "coke-oven", {});

const blastFurnace = extend(GenericCrafter, "blast-furnace", {});

const ruxoniumSmelter = extend(GenericCrafter, "ruxonium-smelter", {});

// blocks/turrets

const shock = extend(PowerTurret, "shock", {});

const shatter = extend(ItemTurret, "shatter", {});

// blocks/walls

const wallHealthMultiplier = 4

const steelWall = extend(Wall, "steel-wall", {
  health: 100 * wallHealthMultiplier
});

const steelWallLarge = extend(Wall, "steel-wall-large", {
  health: 100 * 4 * wallHealthMultiplier
});

const quarziteWall = extend(Wall, "ruxonium-wall", {
  health: 295 * wallHealthMultiplier
});

const quarziteWallLarge = extend(Wall, "quarzite-wall-large", {
  health: 295 * 4 * wallHealthMultiplier
});

const ruxoniumWall = extend(Wall, "ruxonium-wall", {
  health: 360 * wallHealthMultiplier
});

const ruxoniumWallLarge = extend(Wall, "ruxonium-wall-large", {
  health: 360 * 4 * wallHealthMultiplier
});

