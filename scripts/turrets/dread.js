// fx

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
        Lines.circle(e.x, e.y, 4 + e.finpow() * 25);

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
        Lines.circle(e.x, e.y, 4 + e.finpow() * 25);

        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 8, 100 * e.fout(), i*90 + 45);
        }

        Draw.color();
        for(let i = 0; i < 4; i++){
            Drawf.tri(e.x, e.y, 5, 55 * e.fout(), i*90 + 45);
        }
});

// bullets

const dreadBoltAlpha = extend(PointBulletType, {
  	damage: 2750,
	speed: range,
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
	lightning: 6,
	lightningLength: 9,
	lightningLengthRand: 3,
	lightningDamage: 770,
	lightningColor: Color.valueOf("dc7de0"),
	speed: range,
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
	lightning: 9,
	lightningLength: 11,
	lightningLengthRand: 4,
	lightningDamage: 920,
	lightningColor: Color.valueOf("96f58c"),
	speed: range,
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

// turret

const dread = extend(ItemTurret, "dread", {});
dread.range = dreadRange
dread.ammo(
  alphaSteel, dreadBoltAlpha,
  betaSteel, dreadBoltBeta,
  gammaSteel, dreadBoltGamma
);
