addLayer("P", {
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Protons", // Name of prestige currency
    baseResource: "Electrons", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)



        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Protons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Lvl. 1 Electron Blasters",
            description: "Increases Electron Gain by +25%",
            cost: new Decimal(5)
        },
        12: {
            title: "Lvl. 2 Electron Blasters",
            description: "Increases Electron Gain by +50%",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade("P", 11)}
        },
        13: {
            title: "Lvl. 3 Electron Blasters",
            description: "Increases Electron Gain by +75%",
            cost: new Decimal(30),
            unlocked() {return hasUpgrade("P", 12)}
        },
        21: {
            title: "Proton Rays",
            description: "Complicated Formula [+Electrons/s = 50((0.97^0.05x)+1)]",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade("P", 11)},
            effect() {
                let E21_a = 1;
                let E21_b = 2;
                let E21_c = 3; //NOTE - Logarithm: Higher => Lower gain over time
                return player[this.layer].points.plus(1).mul(E21_b).log(E21_c).mul(E21_a).plus(1);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"}
        }
    }
})


///////////////////////////////////////////////////////////////////////


addLayer("N", {
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Neutrons", // Name of prestige currency
    baseResource: "Protons", // Name of resource prestige is based on
    baseAmount() {return player["P"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)



        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "N", description: "N: Reset for Neutrons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
       
    }
})


addLayer("H", {
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true, //hasUpgrade("N", 0)
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Hydrogen", // Name of prestige currency
    baseResource: "Neutrons", // Name of resource prestige is based on
    baseAmount() {return player["N"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)



        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "H", description: "H: Reset for Hydrogen Atoms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
       
    }
})