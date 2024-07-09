// effects

const pulverizeBlue = new Effect(16, e => {
	Draw.color(Color.white, Pal.lancerLaser, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.poly(e.x + x, e.y + y, 4, e.fout() * 9, 0);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 40.0, 0, 180.0, hl);
});

const ruxoniumConveyorLoad = new Effect(25, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fin() * 4)
	Lines.square(e.x, e.y, e.fout(Interp.pow5Out) * 8, 45);
	Lines.stroke(e.fin() * 2)
	Lines.square(e.x, e.y, e.fout(Interp.pow5Out) * 4, 45);
});

const ruxoniumConveyorUnload = new Effect(25, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout(Interp.pow5Out) * 4)
	Lines.square(e.x, e.y, e.fin() * 8, 45);
	Lines.stroke(e.fout(Interp.pow5Out) * 2)
	Lines.square(e.x, e.y, e.fin() * 4, 45);
});

// items

const ironOre = extend(Item, "iron-ore", {});

const coke = extend(Item, "coke", {});

const steel = extend(Item, "steel", {});

const quarzite = extend(Item, "quarzite", {});

const ruxonium = extend(Item, "ruxonium", {});

const osmium = extend(Item, "osmium", {});

const alphaSteel = extend(Item, "alpha-steel", {});

const betaSteel = extend(Item, "beta-steel", {});

const gammaSteel = extend(Item, "gamma-steel", {});

// blocks/environment

const oreIron = extend(OreBlock, "ore-iron", {});

const oreQuarzite = extend(OreBlock, "ore-quarzite", {});

const oreOsmium = extend(OreBlock, "ore-osmium", {});

// blocks/power

const batteryMedium = extend(Battery, "battery-medium", {});

// blocks/production

const cokeOven = extend(GenericCrafter, "coke-oven", {});

const blastFurnace = extend(GenericCrafter, "blast-furnace", {});

const ruxoniumSmelter = extend(GenericCrafter, "ruxonium-smelter", {});

const alphaCrucible = extend(GenericCrafter, "alpha-crucible", {});

const betaFurnace = extend(GenericCrafter, "beta-furnace", {});

const gammaForge = extend(GenericCrafter, "gamma-forge", {});

// blocks/turrets

const shock = extend(PowerTurret, "shock", {});

const shatter = extend(ItemTurret, "shatter", {});

const tempest = extend(ItemTurret, "tempest", {});

// blocks/walls

const wallHealthMultiplier = 4

const steelWall = extend(Wall, "steel-wall", {
  health: 100 * wallHealthMultiplier
});

const steelWallLarge = extend(Wall, "steel-wall-large", {
  health: 100 * 4 * wallHealthMultiplier
});

const quarziteWall = extend(Wall, "quarzite-wall", {
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

const osmiumWall = extend(Wall, "osmium-wall", {
  health: 400 * wallHealthMultiplier
});

const osmiumWallLarge = extend(Wall, "osmium-wall-large", {
  health: 400 * 4 * wallHealthMultiplier
});

const alphaWall = extend(Wall, "alpha-wall", {
  health: 440 * wallHealthMultiplier
});

const alphaWallLarge = extend(Wall, "alpha-wall-large", {
  health: 440 * 4 * wallHealthMultiplier
});

const betaWall = extend(Wall, "beta-wall", {
  health: 475 * wallHealthMultiplier
});

const betaWallLarge = extend(Wall, "beta-wall-large", {
  health: 475 * 4 * wallHealthMultiplier
});

const gammaWall = extend(Wall, "gamma-wall", {
  health: 520 * wallHealthMultiplier
});

const gammaWallLarge = extend(Wall, "gamma-wall-large", {
  health: 520 * 4 * wallHealthMultiplier
});

// blocks/drills

const arcDrill = extend(Drill, "arc-drill", {
	updateEffect: pulverizeBlue
});

// blocks/distribution

const ruxoniumConveyor = extend(StackConveyor, "ruxonium-conveyor", {
	loadEffect: ruxoniumConveyorLoad,
	unloadEffect: ruxoniumConveyorUnload
});

