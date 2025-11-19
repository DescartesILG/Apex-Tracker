export const cruiserData = {
  // 2 ships with 4 variants each
  "Aegis-Class": {
    variants: {
      "Aegis A - Support Type": {
        "Base Model": { hp: 7200, buffs: "" },
        "Apex 5": { hp: "+4800hp", buffs: "+20 support, +2 hp upgrades" },
        "Apex 10": { hp: "+8800hp", buffs: "+30 support" },
        "Apex 15": { hp: "+12800hp", buffs: "+40 support" },
        "Apex 20": { hp: "+16800hp", buffs: "+50 support, +1 module" }
      },
      "Aegis B - Anti-Ship Type": {
        "Base Model": { hp: 7000, buffs: "" },
        "Apex 5": { hp: "+4300hp", buffs: "+6% kinetic dmg" },
        "Apex 10": { hp: "+8600hp", buffs: "+12% kinetic dmg" },
        "Apex 15": { hp: "+12800hp", buffs: "+18% kinetic dmg" },
        "Apex 20": { hp: "+17000hp", buffs: "+24% kinetic dmg" }
      },
      "Aegis C - Recon Type": {
        "Base Model": { hp: 6300, buffs: "" },
        "Apex 5": { hp: "+3500hp", buffs: "+12 sensor range" },
        "Apex 10": { hp: "+7000hp", buffs: "+25 sensor range" },
        "Apex 15": { hp: "+10500hp", buffs: "+35 sensor & stealth" },
        "Apex 20": { hp: "+14000hp", buffs: "+50 sensor, +1 module" }
      },
      "Aegis D - Electronic Warfare Type": {
        "Base Model": { hp: 6500, buffs: "" },
        "Apex 5": { hp: "+3800hp", buffs: "+10% jamming strength" },
        "Apex 10": { hp: "+7600hp", buffs: "+20% jamming strength" },
        "Apex 15": { hp: "+11400hp", buffs: "+30% jamming strength" },
        "Apex 20": { hp: "+15200hp", buffs: "+45% jamming, +1 module" }
      }
    }
  },

  "Jaegar": {
    variants: {
      "Jaegar A - Support Type": {
        "Base Model": { hp: 7500, buffs: "" },
        "Apex 5": { hp: "+5500hp", buffs: "+15 support, +2 hp upgrades" },
        "Apex 10": { hp: "+9000hp", buffs: "+20 support" },
        "Apex 15": { hp: "+12500hp", buffs: "+25 support" },
        "Apex 20": { hp: "+16000hp", buffs: "+30 support, +1 module" }
      },
      "Jaegar B - Anti-Ship Type": {
        "Base Model": { hp: 7200, buffs: "" },
        "Apex 5": { hp: "+4800hp", buffs: "+5% kinetic dmg" },
        "Apex 10": { hp: "+9400hp", buffs: "+10% kinetic dmg" },
        "Apex 15": { hp: "+13600hp", buffs: "+15% kinetic dmg" },
        "Apex 20": { hp: "+18000hp", buffs: "+20% kinetic dmg" }
      },
      "Jaegar C - Interceptor Type": {
        "Base Model": { hp: 6800, buffs: "" },
        "Apex 5": { hp: "+4200hp", buffs: "+8% evasion" },
        "Apex 10": { hp: "+8400hp", buffs: "+15% evasion" },
        "Apex 15": { hp: "+12600hp", buffs: "+22% evasion" },
        "Apex 20": { hp: "+16800hp", buffs: "+30% evasion" }
      },
      "Jaegar D - Tank Type": {
        "Base Model": { hp: 9900, buffs: "" },
        "Apex 5": { hp: "+6000hp", buffs: "+10% armor" },
        "Apex 10": { hp: "+12000hp", buffs: "+20% armor" },
        "Apex 15": { hp: "+18000hp", buffs: "+30% armor" },
        "Apex 20": { hp: "+24000hp", buffs: "+45% armor, +1 module" }
      }
    }
  },

  // 5 ships with 3 variants each
  "Sable": {
    variants: {
      "Sable A - Escort": {
        "Base Model": { hp: 5600, buffs: "" },
        "Apex 5": { hp: "+3000hp", buffs: "+10% shield recharge" },
        "Apex 10": { hp: "+6200hp", buffs: "+18% shield recharge" },
        "Apex 15": { hp: "+9200hp", buffs: "+26% shield recharge" },
        "Apex 20": { hp: "+12200hp", buffs: "+35% shield recharge" }
      },
      "Sable B - Bomber": {
        "Base Model": { hp: 5800, buffs: "" },
        "Apex 5": { hp: "+3100hp", buffs: "+8% explosive dmg" },
        "Apex 10": { hp: "+6200hp", buffs: "+16% explosive dmg" },
        "Apex 15": { hp: "+9300hp", buffs: "+24% explosive dmg" },
        "Apex 20": { hp: "+12400hp", buffs: "+32% explosive dmg" }
      },
      "Sable C - Scout": {
        "Base Model": { hp: 4900, buffs: "" },
        "Apex 5": { hp: "+2600hp", buffs: "+14 sensor" },
        "Apex 10": { hp: "+5200hp", buffs: "+28 sensor" },
        "Apex 15": { hp: "+7800hp", buffs: "+42 sensor" },
        "Apex 20": { hp: "+10400hp", buffs: "+60 sensor" }
      }
    }
  },

  "Dahlia": {
    variants: {
      "Dahlia A - Support": {
        "Base Model": { hp: 6000, buffs: "" },
        "Apex 5": { hp: "+3600hp", buffs: "+12 support" },
        "Apex 10": { hp: "+7200hp", buffs: "+24 support" },
        "Apex 15": { hp: "+10800hp", buffs: "+36 support" },
        "Apex 20": { hp: "+14400hp", buffs: "+48 support" }
      },
      "Dahlia B - Strike": {
        "Base Model": { hp: 6400, buffs: "" },
        "Apex 5": { hp: "+3800hp", buffs: "+7% energy dmg" },
        "Apex 10": { hp: "+7600hp", buffs: "+14% energy dmg" },
        "Apex 15": { hp: "+11400hp", buffs: "+21% energy dmg" },
        "Apex 20": { hp: "+15200hp", buffs: "+28% energy dmg" }
      },
      "Dahlia C - Patrol": {
        "Base Model": { hp: 6100, buffs: "" },
        "Apex 5": { hp: "+3400hp", buffs: "+6% speed" },
        "Apex 10": { hp: "+6800hp", buffs: "+12% speed" },
        "Apex 15": { hp: "+10200hp", buffs: "+18% speed" },
        "Apex 20": { hp: "+13600hp", buffs: "+25% speed" }
      }
    }
  },

  "Lyra": {
    variants: {
      "Lyra A - Skirmisher": {
        "Base Model": { hp: 5400, buffs: "" },
        "Apex 5": { hp: "+3000hp", buffs: "+10% crit chance" },
        "Apex 10": { hp: "+6000hp", buffs: "+20% crit chance" },
        "Apex 15": { hp: "+9000hp", buffs: "+30% crit chance" },
        "Apex 20": { hp: "+12000hp", buffs: "+40% crit chance" }
      },
      "Lyra B - Defender": {
        "Base Model": { hp: 7600, buffs: "" },
        "Apex 5": { hp: "+4200hp", buffs: "+8% block" },
        "Apex 10": { hp: "+8400hp", buffs: "+16% block" },
        "Apex 15": { hp: "+12600hp", buffs: "+24% block" },
        "Apex 20": { hp: "+16800hp", buffs: "+36% block" }
      },
      "Lyra C - Cruiser": {
        "Base Model": { hp: 6800, buffs: "" },
        "Apex 5": { hp: "+3800hp", buffs: "+6% armor" },
        "Apex 10": { hp: "+7600hp", buffs: "+12% armor" },
        "Apex 15": { hp: "+11400hp", buffs: "+18% armor" },
        "Apex 20": { hp: "+15200hp", buffs: "+30% armor" }
      }
    }
  },

  "Vesper": {
    variants: {
      "Vesper A - Raider": {
        "Base Model": { hp: 6100, buffs: "" },
        "Apex 5": { hp: "+3500hp", buffs: "+9% burst dmg" },
        "Apex 10": { hp: "+7000hp", buffs: "+18% burst dmg" },
        "Apex 15": { hp: "+10500hp", buffs: "+27% burst dmg" },
        "Apex 20": { hp: "+14000hp", buffs: "+36% burst dmg" }
      },
      "Vesper B - Harrier": {
        "Base Model": { hp: 5900, buffs: "" },
        "Apex 5": { hp: "+3300hp", buffs: "+10% agility" },
        "Apex 10": { hp: "+6600hp", buffs: "+20% agility" },
        "Apex 15": { hp: "+9900hp", buffs: "+30% agility" },
        "Apex 20": { hp: "+13200hp", buffs: "+40% agility" }
      },
      "Vesper C - Carrier": {
        "Base Model": { hp: 7000, buffs: "" },
        "Apex 5": { hp: "+4200hp", buffs: "+2 fighter cap" },
        "Apex 10": { hp: "+8400hp", buffs: "+4 fighter cap" },
        "Apex 15": { hp: "+12600hp", buffs: "+6 fighter cap" },
        "Apex 20": { hp: "+16800hp", buffs: "+8 fighter cap" }
      }
    }
  },

  // 3 ships with 2 variants each
  "Mistral": {
    variants: {
      "Mistral A - Light": {
        "Base Model": { hp: 4900, buffs: "" },
        "Apex 5": { hp: "+2600hp", buffs: "+8 speed" },
        "Apex 10": { hp: "+5200hp", buffs: "+16 speed" },
        "Apex 15": { hp: "+7800hp", buffs: "+24 speed" },
        "Apex 20": { hp: "+10400hp", buffs: "+36 speed" }
      },
      "Mistral B - Heavy": {
        "Base Model": { hp: 7200, buffs: "" },
        "Apex 5": { hp: "+4200hp", buffs: "+10% armor" },
        "Apex 10": { hp: "+8400hp", buffs: "+20% armor" },
        "Apex 15": { hp: "+12600hp", buffs: "+30% armor" },
        "Apex 20": { hp: "+16800hp", buffs: "+40% armor" }
      }
    }
  },

  "S-Levy9": {
    variants: {
      "S-Levy9 A - Corvette": {
        "Base Model": { hp: 4300, buffs: "" },
        "Apex 5": { hp: "+2300hp", buffs: "+6% speed" },
        "Apex 10": { hp: "+4600hp", buffs: "+12% speed" },
        "Apex 15": { hp: "+6900hp", buffs: "+18% speed" },
        "Apex 20": { hp: "+9200hp", buffs: "+26% speed" }
      },
      "S-Levy9 B - Mobile": {
        "Base Model": { hp: 4700, buffs: "" },
        "Apex 5": { hp: "+2500hp", buffs: "+8% agility" },
        "Apex 10": { hp: "+5000hp", buffs: "+16% agility" },
        "Apex 15": { hp: "+7500hp", buffs: "+24% agility" },
        "Apex 20": { hp: "+10000hp", buffs: "+32% agility" }
      }
    }
  },

  "Corsair": {
    variants: {
      "Corsair A - Skiff": {
        "Base Model": { hp: 5100, buffs: "" },
        "Apex 5": { hp: "+3000hp", buffs: "+7% crit" },
        "Apex 10": { hp: "+6000hp", buffs: "+14% crit" },
        "Apex 15": { hp: "+9000hp", buffs: "+21% crit" },
        "Apex 20": { hp: "+12000hp", buffs: "+30% crit" }
      },
      "Corsair B - Raider": {
        "Base Model": { hp: 5500, buffs: "" },
        "Apex 5": { hp: "+3300hp", buffs: "+9% burst" },
        "Apex 10": { hp: "+6600hp", buffs: "+18% burst" },
        "Apex 15": { hp: "+9900hp", buffs: "+27% burst" },
        "Apex 20": { hp: "+13200hp", buffs: "+36% burst" }
      }
    }
  }
};
