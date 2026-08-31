const allGroundedInsects = [
  // ==========================================
  // HARMLESS & NEUTRAL
  // ==========================================
  { 
    name: "Aphid", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/aphid.png",
    drops: [{ item: "Aphid Honeydew", amount: "1" }, { item: "Raw Aphid Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Woolly Aphid", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/woolly_aphid.png",
    drops: [{ item: "Aphid Honeydew", amount: "1" }, { item: "Fuzz", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Weevil", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/weevil.png",
    drops: [{ item: "Raw Weevil Meat", amount: "1" }, { item: "Weevil Nose", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Gnat", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/gnat.png",
    drops: [{ item: "Gnat Fuzz", amount: "1" }, { item: "Raw Gnat Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Grub", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/grub.png",
    drops: [{ item: "Grub Hide", amount: "1" }, { item: "Raw Grub Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Tadpole", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/tadpole.png",
    drops: [{ item: "Raw Tadpole Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Water Boatman", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/water_boatman.png",
    drops: [{ item: "Water Boatman Fin", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Blue Butterfly", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/blue_butterfly.png",
    drops: [{ item: "Butterfly Scale", amount: "1" }, { item: "Butterfly Fuzz", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Caterpillar", 
    category: "Harmless", 
    sprite: ".//assets/sprites/insects/caterpillar.png",
    drops: [{ item: "Caterpillar Fuzz", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Firefly", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/firefly.png",
    drops: [{ item: "Bioluminescent Goo", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Garden Snail", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/garden_snail.png",
    drops: [{ item: "Raw Snail Meat", amount: "2" }, { item: "Garden Snail Slime", amount: "1" }],
    rareDrops: [{ item: "Garden Snail Eyestalk", amount: "0-2" }, { item: "Garden Snail Slime", amount: "0-7" }],
    cardChance: "1%" 
  },
  { 
    name: "Baby Garden Snail", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/baby_garden_snail.png",
    drops: [{ item: "Snail Mucus", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Bee", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/bee.png",
    drops: [{ item: "Bee Fuzz", amount: "1" }, { item: "Bee Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Ladybug", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/ladybug.png",
    drops: [{ item: "Ladybug Part", amount: "1" }, { item: "Ladybug Head", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Black Worker Ant", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/black_worker_ant.png",
    drops: [{ item: "Black Ant Part", amount: "1" }, { item: "Black Ant Head", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Red Worker Ant", 
    category: "Neutral", 
    sprite: ".//assets/sprites/insects/red_worker_ant.png",
    drops: [{ item: "Red Ant Part", amount: "1" }, { item: "Red Ant Head", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // HOSTILE (ΕΧΘΡΙΚΑ)
  // ==========================================
  { 
    name: "Black Soldier Ant", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/black_soldier_ant.png",
    drops: [{ item: "Black Ant Part", amount: "1" }, { item: "Black Ant Mandibles", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Red Soldier Ant", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/red_soldier_ant.png",
    drops: [{ item: "Red Ant Part", amount: "1" }, { item: "Red Ant Mandibles", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Bombardier Beetle", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/bombardier_beetle.png",
    drops: [{ item: "Boiling Gland", amount: "1" }, { item: "Bombardier Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cockroach", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/cockroach.png",
    drops: [{ item: "Cockroach Part", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cockroach Nymph", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/cockroach_nymph.png",
    drops: [{ item: "Cockroach Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cricket", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/cricket.png",
    drops: [{ item: "Cricket Leg", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Diving Bell Spider", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/diving_bell_spider.png",
    drops: [{ item: "Diving Bell Spider Chunk", amount: "1" }, { item: "Spider Silk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Green Shield Bug", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/green_shield_bug.png",
    drops: [{ item: "Green Shield Bug Part", amount: "1" }, { item: "Super Gas Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Larva", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/larva.png",
    drops: [{ item: "Larva Spike", amount: "1" }, { item: "Acid Gland", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Lawn Mite", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/lawn_mite.png",
    drops: [{ item: "Mite Fuzz", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Mosquito", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/mosquito.png",
    drops: [{ item: "Mosquito Blood Sack", amount: "1" }, { item: "Mosquito Beak", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Tiger Mosquito", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/tiger_mosquito.png",
    drops: [{ item: "Tiger Mosquito Beak", amount: "1" }, { item: "Tiger Mosquito Blood Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Northern Scorpion", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/northern_scorpion.png",
    drops: [{ item: "Scorpion Stinger", amount: "1" }, { item: "Scorpion Carapace", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Striped Bark Scorpion", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/striped_bark_scorpion.png",
    drops: [{ item: "Scorpion Carapace", amount: "1" }, { item: "Scorpion Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Orb Weaver", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/orb_weaver.png",
    drops: [{ item: "Spider Chunk", amount: "1" }, { item: "Spider Venom", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Orb Weaver Jr", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/orb_weaver_jr.png",
    drops: [{ item: "Spider Chunk", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Wolf Spider", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/wolf_spider.png",
    drops: [{ item: "Spider Fang", amount: "1" }, { item: "Spider Chunk", amount: "1" }, { item: "Spider Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Spiderling", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/spiderling.png",
    drops: [{ item: "Spider Chunk", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Pincher Earwig", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/pincher_earwig.png",
    drops: [{ item: "Earwig Pincer", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Whipper Earwig", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/whipper_earwig.png",
    drops: [{ item: "Earwig Pincer", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Potato Beetle", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/potato_beetle.png",
    drops: [{ item: "Potato Beetle Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Rust Beetle", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/rust_beetle.png",
    drops: [{ item: "Rust Beetle Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Spiny Water Flea", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/spiny_water_flea.png",
    drops: [{ item: "Spiny Water Flea Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Water Flea", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/water_flea.png",
    drops: [{ item: "Water Flea Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Tick", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/tick.png",
    drops: [{ item: "Tick Fang", amount: "1" }, { item: "Lint", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Toe Biter", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/toe_biter.png",
    drops: [{ item: "Toe Biter Chunk", amount: "1" }, { item: "Water Bug Gland", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Toe Biter Nymph", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/toe_biter_nymph.png",
    drops: [{ item: "Toe Biter Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Wasp", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/wasp.png",
    drops: [{ item: "Wasp Paper", amount: "1" }, { item: "Wasp Legs", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Wasp Drone", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/wasp_drone.png",
    drops: [{ item: "Wasp Paper", amount: "1" }, { item: "Wasp Gland", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Stinkbug", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/stinkbug.png",
    drops: [{ item: "Stinkbug Part", amount: "1" }, { item: "Stinkbug Gas Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Pond Jockey", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/pond_jockey.png",
    drops: [{ item: "Algae", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Praying Mantis", 
    category: "Hostile", 
    sprite: ".//assets/sprites/insects/praying_mantis.png",
    drops: [{ item: "Mantis Chunk", amount: "1" }, { item: "Mantis Claw", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // O.R.C. FACTION
  // ==========================================
  { 
    name: "O.R.C. Bee", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_bee.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Bee Fuzz", amount: "1" }, { item: "Bee Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Blue Butterfly", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_blue_butterfly.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Butterfly Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Broodmother", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_broodmother.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Broodmother Chunk", amount: "1" }, { item: "Broodmother Fang", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Striped Bark Scorpion", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_striped_bark_scorpion.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Scorpion Carapace", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Toe Biter", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_toe_biter.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Toe Biter Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Black Worker Ant", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_black_worker_ant.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Black Ant Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Bombardier Beetle", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_bombardier_beetle.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Boiling Gland", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Spiderling", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_spiderling.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Tiger Mosquito", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_tiger_mosquito.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Tiger Mosquito Beak", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Wasp", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_wasp.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Wasp Paper", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Wolf Spider", 
    category: "O.R.C.", 
    sprite: ".//assets/sprites/insects/orc_wolf_spider.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Spider Fang", amount: "1" }, { item: "Spider Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // O.G.R.R. FACTION
  // ==========================================
  { 
    name: "O.G.R.R. Cricket", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_cricket.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Cricket Leg", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Ladybug", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_ladybug.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Ladybug Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Pincher Earwig", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_pincher_earwig.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Earwig Pincer", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Rust Beetle", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_rust_beetle.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Rust Beetle Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Tiger Mosquito", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_tiger_mosquito.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Tiger Mosquito Beak", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Wasp", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_wasp.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Wasp Paper", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Whipper Earwig", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_whipper_earwig.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Earwig Pincer", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Blue Butterfly", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_blue_butterfly.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Butterfly Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Green Shield Bug", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_green_shield_bug.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Super Gas Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Northern Scorpion", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_northern_scorpion.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Scorpion Carapace", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Praying Mantis", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_praying_mantis.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Mantis Claw", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Striped Bark Scorpion", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_striped_bark_scorpion.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Scorpion Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Toe Biter", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_toe_biter.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Toe Biter Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Wolf Spider", 
    category: "O.G.R.R.", 
    sprite: ".//assets/sprites/insects/ogrr_wolf_spider.png",
    drops: [{ item: "O.G.R.R. Tech", amount: "1" }, { item: "Spider Fang", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // NAMED BUGS / BOSSES & MINIBOSSES
  // ==========================================
  { 
    name: "Axl", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/axl.png",
    drops: [{ item: "Unique Boss Drop", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Masked Stranger", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/masked_stranger.png",
    drops: [{ item: "Stranger Mask Fragment", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Calico", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/calico.png",
    drops: [{ item: "Calico Fur", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Colonel Creep", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/colonel_creep.png",
    drops: [{ item: "Creep Insignia", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "General Puck", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/general_puck.png",
    drops: [{ item: "Puck Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Major Pain", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/major_pain.png",
    drops: [{ item: "Pain Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Officer Tang", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/officer_tang.png",
    drops: [{ item: "Tang Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Papa Toe Biter", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/papa_toe_biter.png",
    drops: [{ item: "Massive Toe Biter Chunk", amount: "1" }, { item: "Water Bug Gland", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Sergeant Stink", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/sergeant_stink.png",
    drops: [{ item: "Stink Insignia", amount: "1" }, { item: "Super Gas Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "The Red Baron", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/the_red_baron.png",
    drops: [{ item: "Baron Wings", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "King Dozer", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/king_dozer.png",
    drops: [{ item: "Dozer Crown", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Admiral Grand", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/admiral_grand.png",
    drops: [{ item: "Admiral Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Chief Titan", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/chief_titan.png",
    drops: [{ item: "Titan Shell", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Colonel Crush", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/colonel_crush.png",
    drops: [{ item: "Crush Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Major Dazzler", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/major_dazzler.png",
    drops: [{ item: "Dazzler Wings", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Mess Officer", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/mess_officer.png",
    drops: [{ item: "Officer Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Oriole", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/oriole.png",
    drops: [{ item: "Oriole Feather", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Private Bounce", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/private_bounce.png",
    drops: [{ item: "Bounce Badge", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Sunny", 
    category: "Named", 
    sprite: ".//assets/sprites/insects/sunny.png",
    drops: [{ item: "Sunny Scale", amount: "1" }, { item: "Tough Gunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  }
];
