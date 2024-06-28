// items

const stone = extend(Item, "stone", {});

const denseAlloy = extend(Item, "dense-alloy", {});

const crimsite = extend(Item, "crimsite", {});

const chargedIngot = extend(Item, "charged-ingot", {});

// blocks / production

const denseSmelter = extend(GenericCrafter, "dense-smelter", {});

const crimsiteSynthesizer = extend(GenericCrafter, "crimsite-synthesizer", {});

const chargeSmelter = extend(GenericCrafter, "charge-smelter", {});

// blocks / turrets

const raven = extend(PowerTurret, "raven", {});

const blade = extend(ContinuousTurret, "blade", {});
