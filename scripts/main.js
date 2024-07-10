// effects

const pulverizeBlue = new Effect(16, e => {
	Draw.color(Color.white, Pal.lancerLaser, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.poly(e.x + x, e.y + y, 4, e.fout() * 9, 0);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 40.0, 0, 180.0, hl);
});

const ruxoniumConveyorLoad = new Effect(10, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fin() * 4)
	Lines.square(e.x, e.y, e.fout() * 8, 45);
	Lines.stroke(e.fin() * 2)
	Lines.square(e.x, e.y, e.fout() * 4, 45);
});

const ruxoniumConveyorUnload = new Effect(10, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout() * 4)
	Lines.square(e.x, e.y, e.fin() * 8, 45);
	Lines.stroke(e.fout() * 2)
	Lines.square(e.x, e.y, e.fin() * 4, 45);
});

const stormShoot = new Effect(28, e => {
	Draw.color(Color.white, Color.valueOf("ff7272").shiftHue(Time.time), e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.circle(e.x + x, e.y + y, e.fout() * 0.75);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 21.0, e.rotation, 40.0, hl);
});

const stormHit = new Effect(28, e => {
	Draw.color(Color.white, Color.valueOf("ff7272").shiftHue(Time.time), e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.poly(e.x + x, e.y + y, 4, e.fout() * 5, 0);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 21.0, 0, 180.0, hl);
});

const dreadShootAlpha = new Effect(35, e => {
	Draw.color(Color.valueOf("7a8cdc"));
	Lines.stroke(e.fout() * 5)
	Lines.square(e.x, e.y, e.fin() * 24, 45);
	Lines.stroke(e.fout() * 2.5)
	Lines.square(e.x, e.y, e.fin() * 12, 45);
});

const dreadShootBeta = new Effect(35, e => {
	Draw.color(Color.valueOf("dc7de0"));
	Lines.stroke(e.fout() * 5)
	Lines.square(e.x, e.y, e.fin() * 24, 45);
	Lines.stroke(e.fout() * 2.5)
	Lines.square(e.x, e.y, e.fin() * 12, 45);
});

const dreadShootGamma = new Effect(35, e => {
	Draw.color(Color.valueOf("96f58c"));
	Lines.stroke(e.fout() * 5)
	Lines.square(e.x, e.y, e.fin() * 24, 45);
	Lines.stroke(e.fout() * 2.5)
	Lines.square(e.x, e.y, e.fin() * 12, 45);
});

const dreadTrailAlpha = new Effect(25, e => {
	Draw.color(Color.valueOf("7a8cdc"));
	Lines.stroke(e.fout() * 4)
	Lines.lineAngle(e.x, e.y, e.rotation, 10);
});

const dreadTrailBeta = new Effect(25, e => {
	Draw.color(Color.valueOf("dc7de0"));
	Lines.stroke(e.fout() * 4)
	Lines.lineAngle(e.x, e.y, e.rotation, 10);
});

const dreadTrailGamma = new Effect(25, e => {
	Draw.color(Color.valueOf("96f58c"));
	Lines.stroke(e.fout() * 4)
	Lines.lineAngle(e.x, e.y, e.rotation, 10);
});

const dreadHitAlpha = new Effect(25, e => {
	Draw.color(Color.valueOf("7a8cdc"));
        Lines.stroke(e.fout() * 4);
        Lines.circle(e.x, e.y, 4 + e.finpow() * 25);

        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 8, 100 * e.fout(), i*90 + 45);
        }

        Draw.color();
        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 5, 55 * e.fout(), i*90 + 45);
        }
});

const dreadHitBeta = new Effect(25, e => {
	Draw.color(Color.valueOf("dc7de0"));
        Lines.stroke(e.fout() * 4);
        Lines.circle(e.x, e.y, 4 + e.finpow() * 35);

        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 8, 100 * e.fout(), i*90 + 45);
        }

        Draw.color();
        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 5, 55 * e.fout(), i*90 + 45);
        }
});

const dreadHitGamma = new Effect(25, e => {
	Draw.color(Color.valueOf("96f58c"));
        Lines.stroke(e.fout() * 4);
        Lines.circle(e.x, e.y, 4 + e.finpow() * 50);

        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 8, 100 * e.fout(), i*90 + 45);
        }

        Draw.color();
        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 5, 55 * e.fout(), i*90 + 45);
        }
});

// bullets

const stormBullet = extend(BasicBulletType, {
  	damage: 17,
	speed: 6,
	lifetime: 30,
	hitEffect: stormHit,
	homingPower: 0.08,
	despawnHit: true,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Color.valueOf("ff7272").shiftHue(Time.time));
		Fill.circle(b.x, b.y, 3);
		Draw.reset();
	}
});

const dreadRange = 700;

const dreadBoltAlpha = extend(PointBulletType, {
  	damage: 2750,
	splashDamage: 1720,
	splashDamageRadius: 25,
	speed: dreadRange,
	shootEffect: dreadShootAlpha,
	hitShake: 6.5,
	trailSpacing: 10,
	buildingDamageMultiplier: 0.12,
	trailEffect: dreadTrailAlpha,
	hitEffect: dreadHitAlpha,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1
});

const dreadBoltBeta = extend(PointBulletType, {
  	damage: 3250,
	splashDamage: 2250,
	splashDamageRadius: 35,
	lightning: 6,
	lightningLength: 9,
	lightningLengthRand: 3,
	lightningDamage: 770,
	lightningColor: Color.valueOf("dc7de0"),
	speed: dreadRange,
	shootEffect: dreadShootBeta,
	hitShake: 9,
	trailSpacing: 10,
	buildingDamageMultiplier: 0.12,
	trailEffect: dreadTrailBeta,
	hitEffect: dreadHitBeta,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1,
	reloadMultiplier: 0.88
});

const dreadBoltGamma = extend(PointBulletType, {
  	damage: 4920,
	splashDamage: 3850,
	splashDamageRadius: 50,
	lightning: 9,
	lightningLength: 11,
	lightningLengthRand: 4,
	lightningDamage: 920,
	lightningColor: Color.valueOf("96f58c"),
	speed: dreadRange,
	lifetime: 30,
	shootEffect: dreadShootGamma,
	hitShake: 15,
	trailSpacing: 10,
	buildingDamageMultiplier: 0.12,
	trailEffect: dreadTrailGamma,
	hitEffect: dreadHitGamma,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1,
	reloadMultiplier: 0.63
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

const chargeGenerator = extend(ConsumeGenerator, "charge-generator", {});
chargeGenerator.consume(new ConsumeItemCharged());

// blocks/production

const cokeOven = extend(GenericCrafter, "coke-oven", {});

const blastFurnace = extend(GenericCrafter, "blast-furnace", {});

const ruxoniumSmelter = extend(GenericCrafter, "ruxonium-smelter", {});

const alphaCrucible = extend(GenericCrafter, "alpha-crucible", {});

const betaFurnace = extend(GenericCrafter, "beta-furnace", {});

const gammaForge = extend(GenericCrafter, "gamma-forge", {});

// blocks/turrets

const shock = extend(PowerTurret, "shock", {});

const storm = extend(PowerTurret, "storm", {
  	load() {
          	this.super$load()
	  	this.region = Core.atlas.find(this.name);
          	this.rainbowRegion = Core.atlas.find(this.name + "-rainbow");
	  	this.baseRegion = Core.atlas.find("block-" + this.size)
  	}
});
storm.shootType = stormBullet;
storm.shootEffect = stormShoot;
storm.range = 180;
storm.buildType = () => extend(PowerTurret.PowerTurretBuild, storm,  {
  draw() {
	  Draw.rect(storm.baseRegion, this.x, this.y, 0);
	  Draw.rect(storm.region, this.x, this.y, this.rotation - 90);
	  Draw.color(Color.valueOf("ff727250").shiftHue(Time.time));
          Draw.rect(storm.rainbowRegion, this.x, this.y, this.rotation - 90);
          Draw.color()
  }
});

const shatter = extend(ItemTurret, "shatter", {});

const tempest = extend(ItemTurret, "tempest", {});

const dread = extend(ItemTurret, "dread", {});
dread.range = dreadRange
dread.ammo(
  alphaSteel, dreadBoltAlpha,
  betaSteel, dreadBoltBeta,
  gammaSteel, dreadBoltGamma
);

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

