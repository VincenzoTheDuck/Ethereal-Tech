// items

const stone = extend(Item, "stone", {});

const denseAlloy = extend(Item, "dense-alloy", {});

const crimsite = extend(Item, "crimsite", {});

const chargedIngot = extend(Item, "charged-ingot", {});

const astrolium = extend(Item, "astrolium", {});

// liquids

const astrogen = extend(Liquid, "astrogen", {});

// blocks/production

const denseSmelter = extend(GenericCrafter, "dense-smelter", {});

const crimsiteSynthesizer = extend(GenericCrafter, "crimsite-synthesizer", {});

const chargeSmelter = extend(GenericCrafter, "charge-smelter", {});

const astrogenChamber = extend(GenericCrafter, "astrogen-chamber", {});

const astroliumCrystallizer = extend(GenericCrafter, "astrolium-crystallizer", {});

// blocks/turrets

const raven = extend(PowerTurret, "raven", {});

const slash = extend(PowerTurret, "slash", {});

const blade = extend(ContinuousTurret, "blade", {});

const twinkle = extend(PowerTurret, "twinkle", {});

const corona = extend(ItemTurret, "corona", {});
