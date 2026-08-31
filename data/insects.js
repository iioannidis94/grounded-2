const allGroundedInsects = [
  // ==========================================
  // HARMLESS & NEUTRAL
  // ==========================================
  { 
    name: "Aphid", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Aphid.png",
    drops: [{ item: "Aphid Honeydew", amount: "1" }, { item: "Raw Aphid Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Weevil", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Weevil.png",
    drops: [{ item: "Mushroom Chunk", amount: "1" }, { item: "Raw Weevil Meat", amount: "1" }, { item: "Weevil Nose", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Grub", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Grub.png",
    drops: [{ item: "Grub Sludge", amount: "1" }, { item: "Grub Hide", amount: "1" }, { item: "Raw Grub Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Gnat", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Gnat.png",
    drops: [{ item: "Apple Bits", amount: "1" }, { item: "Billy Hog Bite", amount: "1" }, { item: "Cookie Sandwich Bits", amount: "1" }, { item: "Gnat Fuzz", amount: "1" }, { item: "Raw Gnat Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Caterpillar", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Caterpillar.png",
    drops: [{ item: "Caterpillar Goop", amount: "1" }, { item: "Raw Caterpillar Meat", amount: "1" }, { item: "Spine Nub", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Baby Garden Snail", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Baby_Garden_Snail.png",
    drops: [{ item: "Garden Snail Fragment", amount: "1" }, { item: "Garden Snail Eyestalk", amount: "1" }, { item: "Garden Snail Slime", amount: "1" }, { item: "Raw Snail Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Garden Snail", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Garden_Snail.png",
    drops: [{ item: "Garden Snail Fragment", amount: "1" }, { item: "Raw Snail Meat", amount: "2" }, { item: "Garden Snail Slime", amount: "1" }],
    rareDrops: [{ item: "Garden Snail Eyestalk", amount: "0-2" }, { item: "Garden Snail Slime", amount: "0-7" }],
    cardChance: "1%" 
  },
  { 
    name: "Woolly Aphid", 
    category: "Harmless", 
    sprite: "assets/sprites/insects/Woolly_Aphid.png",
    drops: [{ item: "Aphid Honeydew", amount: "1" }, { item: "Woolly Aphid Fuzz", amount: "1" }, { item: "Raw Woolly Aphid Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Crow", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Crow.png",
    drops: [{ item: "Crow Feather", amount: "1" }, { item: "Crow Feather Piece", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Red Worker Ant", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Red_Worker_Ant.png",
    drops: [{ item: "Red Ant Egg", amount: "1" }, { item: "Red Ant Head", amount: "1" }, { item: "Red Ant Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Ladybug", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Ladybug.png",
    drops: [{ item: "Ladybug Head", amount: "1" }, { item: "Ladybug Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Bee", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Bee.png",
    drops: [{ item: "Bee Fuzz", amount: "1" }, { item: "Bee Stinger", amount: "1" }, { item: "Pollen", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Blue Butterfly", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Blue_Butterfly.png",
    drops: [{ item: "Blue Butterfly Chunk", amount: "1" }, { item: "Blue Butterfly Scales", amount: "1" }, { item: "Blue Butterfly Wing", amount: "1" }, { item: "Shivering Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cockroach Nymph", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Cockroach_Nymph.png",
    drops: [{ item: "Roach Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cockroach", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Cockroach.png",
    drops: [{ item: "Apple Bits", amount: "1" }, { item: "Billy Hog Bite", amount: "1" }, { item: "Cookie Sandwich Bits", amount: "1" }, { item: "Roach Chunk", amount: "1" }, { item: "Roach Head", amount: "1" }, { item: "Rotten Food", amount: "1" }, { item: "Spoiled Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Black Worker Ant", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Black_Worker_Ant.png",
    drops: [{ item: "Black Ant Egg", amount: "1" }, { item: "Black Ant Head", amount: "1" }, { item: "Black Ant Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cricket", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Cricket.png",
    drops: [{ item: "Cricket Drumstick", amount: "1" }, { item: "Cricket Head", amount: "1" }, { item: "Cricket Part", amount: "1" }, { item: "Fabulous Femur", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Firefly", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Firefly.png",
    drops: [{ item: "Firefly Shell", amount: "1" }, { item: "Glow Goo", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Potato Beetle", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Potato_Beetle.png",
    drops: [{ item: "Potato Beetle Head", amount: "1" }, { item: "Potato Beetle Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Garter Snake", 
    category: "Neutral", 
    sprite: "assets/sprites/insects/Garter_Snake.png",
    drops: [{ item: "Snake Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // HOSTILE (ΕΧΘΡΙΚΑ)
  // ==========================================
  { 
    name: "Water Flea", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Water_Flea.png",
    drops: [{ item: "Algae", amount: "1" }, { item: "Water Flea Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Red Soldier Ant", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Red_Soldier_AntG2.png",
    drops: [{ item: "Acid Gland", amount: "1" }, { item: "Red Ant Head", amount: "1" }, { item: "Red Ant Mandibles", amount: "1" }, { item: "Red Ant Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Lawn Mite", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Lawn_Mite.png",
    drops: [{ item: "Mite Fang", amount: "1" }, { item: "Mite Fuzz", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Larva", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Larva.png",
    drops: [{ item: "Acid Gland", amount: "1" }, { item: "Larva Spike", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Orb Weaver Jr.", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Orb_Weaver_Jr..png",
    drops: [{ item: "Orb Weaver Chunk", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Spiderling", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Spiderling.png",
    drops: [{ item: "Orb Weaver Chunk", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "C.K.U.", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/C.K.U..png",
    drops: [{ item: "Raw Pond Jockey Meat", amount: "1" }, { item: "Roby's Diode", amount: "1" }, { item: "Roby's Scrap Parts", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Mosquito", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Mosquito.png",
    drops: [{ item: "Mosquito Beak", amount: "1" }, { item: "Mosquito Blood Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Stinkbug", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Stinkbug.png",
    drops: [{ item: "Stinkbug Gas Sack", amount: "1" }, { item: "Stinkbug Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Orb Weaver", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Orb_Weaver.png",
    drops: [{ item: "Orb Weaver Chunk", amount: "1" }, { item: "Orb Weaver Fang", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Bombardier Beetle", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Bombardier_Beetle.png",
    drops: [{ item: "Blistering Boiler", amount: "1" }, { item: "Boiling Gland", amount: "1" }, { item: "Bombardier Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Northern Scorpling", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Northern_Scorpling.png",
    drops: [{ item: "Northern Scorpion Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Northern Scorpion", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Northern_Scorpion.png",
    drops: [{ item: "Northern Scorpion Chunk", amount: "1" }, { item: "Northern Scorpion Pincer", amount: "1" }, { item: "Northern Scorpion Stinger", amount: "1" }, { item: "Scorpion Venom", amount: "1" }, { item: "Stabby Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Northern Scorpion Jr.", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Northern_Scorpion_Jr..png",
    drops: [{ item: "Northern Scorpion Chunk", amount: "1" }, { item: "Scorpion Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Cockroach Queen", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Cockroach_Queen.png",
    drops: [{ item: "Apple Bits", amount: "1" }, { item: "Billy Hog Bite", amount: "1" }, { item: "Cookie Sandwich Bits", amount: "1" }, { item: "Everlasting Hogstopper", amount: "1" }, { item: "Fresh Apple Bits", amount: "1" }, { item: "Fresh Billy Hog Bite", amount: "1" }, { item: "Fresh Cookie Sandwich Bits", amount: "1" }, { item: "Roach Chunk", amount: "1" }, { item: "Roach Head", amount: "1" }, { item: "Roach Milk", amount: "1" }, { item: "Rotten Food", amount: "1" }, { item: "Spoiled Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Diving Bell Spider", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Diving_Bell_Spider.png",
    drops: [{ item: "Diving Bell Spider Chunk", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "SAUC.R", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/SAUC.R.png",
    drops: [{ item: "Spicy Shard", amount: "1" }, { item: "Roby's Diode", amount: "1" }, { item: "Roby's Scrap Parts", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "CHOP.R", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/CHOP.R.png",
    drops: [{ item: "Cooked Tadpole Meat", amount: "1" }, { item: "Pond Jockey Roast", amount: "1" }, { item: "Roby's Diode", amount: "1" }, { item: "Roby's Scrap Parts", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Wolf Spider", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Wolf_Spider.png",
    drops: [{ item: "Spider Venom", amount: "1" }, { item: "Wolf Spider Chunk", amount: "1" }, { item: "Wolf Spider Fang", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Praying Mantis Nymph", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Praying_Mantis_Nymph.png",
    drops: [{ item: "Cleaving Claw", amount: "1" }, { item: "Praying Mantis Chunk", amount: "1" }, { item: "Praying Mantis Claw", amount: "1" }, { item: "Praying Mantis Head", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Black Soldier Ant", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Black_Soldier_Ant.png",
    drops: [{ item: "Black Ant Head", amount: "1" }, { item: "Black Ant Mandibles", amount: "1" }, { item: "Black Ant Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Pincher Earwig", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Pincher_Earwig.png",
    drops: [{ item: "Earwig Head", amount: "1" }, { item: "Earwig Part", amount: "1" }, { item: "Earwig Pincer", amount: "1" }, { item: "Pincer Pincher", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Rust Beetle", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Rust_Beetle.png",
    drops: [{ item: "Boiling Gland", amount: "1" }, { item: "Rust Beetle Parts", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Wasp", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Wasp.png",
    drops: [{ item: "Pollen", amount: "1" }, { item: "Wasp Leg", amount: "1" }, { item: "Wasp Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Wasp Drone", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Wasp_Drone.png",
    drops: [{ item: "Pollen", amount: "1" }, { item: "Wasp Leg", amount: "1" }, { item: "Wasp Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Whipper Earwig", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Whipper_Earwig.png",
    drops: [{ item: "Earwig Head", amount: "1" }, { item: "Earwig Part", amount: "1" }, { item: "Earwig Pincer", amount: "1" }, { item: "Pincer Pincher", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Striped Bark Scorpling", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Striped_Bark_Scorpling.png",
    drops: [{ item: "Striped Scorpion Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Striped Bark Scorpion Jr.", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Striped_Bark_Scorpion_Jr..png",
    drops: [{ item: "Scorpion Venom", amount: "1" }, { item: "Striped Scorpion Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Tiger Mosquito", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Tiger_Mosquito.png",
    drops: [{ item: "Mosquito Blood Sack", amount: "1" }, { item: "Tiger Mosquito Beak", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Tick", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Tick.png",
    drops: [{ item: "Feasting Fangs", amount: "1" }, { item: "Tick Fang", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Spiny Water Flea", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Spiny_Water_Flea.png",
    drops: [{ item: "Algae", amount: "1" }, { item: "Water Flea Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Green Shield Bug", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Green_Shield_Bug.png",
    drops: [{ item: "Green Shield Bug Parts", amount: "1" }, { item: "Stinkbug Gas Sack", amount: "1" }, { item: "Super Stink Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Toe Biter Nymph", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Toe_Biter_Nymph.png",
    drops: [{ item: "Toe Biter Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Toe Biter", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Toe_Biter.png",
    drops: [{ item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Pond Jockey Swarm", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Pond_Jockey_Swarm.png",
    drops: [{ item: "Algae", amount: "1" }, { item: "Raw Pond Jockey Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Ancient Pond Jockey Swarm", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Ancient_Pond_Jockey_Swarm.png",
    drops: [{ item: "Algae", amount: "1" }, { item: "Raw Pond Jockey Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "Striped Bark Scorpion", 
    category: "Hostile", 
    sprite: "assets/sprites/insects/Striped_Bark_Scorpion.png",
    drops: [{ item: "Scorpion Venom", amount: "1" }, { item: "Stabby Stinger", amount: "1" }, { item: "Striped Scorpion Chunk", amount: "1" }, { item: "Striped Scorpion Pincer", amount: "1" }, { item: "Striped Scorpion Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // O.R.C. FACTION
  // ==========================================
  { 
    name: "O.R.C. Red Soldier Ant", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Red_Soldier_Ant.png",
    drops: [{ item: "Acid Gland", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Red Ant Head", amount: "1" }, { item: "Red Ant Mandibles", amount: "1" }, { item: "Red Ant Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Larva", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Larva.png",
    drops: [{ item: "Acid Gland", amount: "1" }, { item: "Larva Spike", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Weaver Jr.", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Weaver_Jr..png",
    drops: [{ item: "Orb Weaver Chunk", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Spiderling", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Spiderling.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Ladybug", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Ladybug.png",
    drops: [{ item: "Ladybug Head", amount: "1" }, { item: "Ladybug Part", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Bee", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Bee.png",
    drops: [{ item: "Bee Fuzz", amount: "1" }, { item: "Bee Stinger", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Pollen", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Mosquito", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Mosquito.png",
    drops: [{ item: "Mosquito Beak", amount: "1" }, { item: "Mosquito Blood Sack", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Stinkbug", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Stinkbug.png",
    drops: [{ item: "Stinkbug Gas Sack", amount: "1" }, { item: "Stinkbug Part", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Weaver", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Weaver.png",
    drops: [{ item: "Orb Weaver Chunk", amount: "1" }, { item: "Orb Weaver Fang", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Web Fiber", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Bombardier Beetle", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Bombardier_Beetle.png",
    drops: [{ item: "Blistering Boiler", amount: "1" }, { item: "Boiling Gland", amount: "1" }, { item: "Bombardier Part", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Weevil", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Weevil.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Unstable Goo", amount: "1" }, { item: "Weevil Nose", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Northern Scorpling", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Northern_Scorpling.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Northern Scorpion Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Northern Scorpion", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Northern_Scorpion.png",
    drops: [{ item: "Northern Scorpion Chunk", amount: "1" }, { item: "Northern Scorpion Pincer", amount: "1" }, { item: "Northern Scorpion Stinger", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Scorpion Venom", amount: "1" }, { item: "Stabby Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Northern Scorpion Jr.", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Northern_Scorpion_Jr..png",
    drops: [{ item: "Northern Scorpion Chunk", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Scorpion Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Blue Butterfly", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Blue_Butterfly.png",
    drops: [{ item: "Blue Butterfly Chunk", amount: "1" }, { item: "Blue Butterfly Scales", amount: "1" }, { item: "Blue Butterfly Wing", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Shivering Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Cockroach Nymph", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Cockroach_Nymph.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Roach Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Cockroach", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Cockroach.png",
    drops: [{ item: "Apple Bits", amount: "1" }, { item: "Billy Hog Bite", amount: "1" }, { item: "Cookie Sandwich Bits", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Roach Chunk", amount: "1" }, { item: "Roach Head", amount: "1" }, { item: "Rotten Food", amount: "1" }, { item: "Spoiled Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Cockroach Queen", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Cockroach_Queen.png",
    drops: [{ item: "Apple Bits", amount: "1" }, { item: "Billy Hog Bite", amount: "1" }, { item: "Cookie Sandwich Bits", amount: "1" }, { item: "Everlasting Hogstopper", amount: "1" }, { item: "Fresh Apple Bits", amount: "1" }, { item: "Fresh Billy Hog Bite", amount: "1" }, { item: "Fresh Cookie Sandwich Bits", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Roach Chunk", amount: "1" }, { item: "Roach Head", amount: "1" }, { item: "Roach Rage", amount: "1" }, { item: "Rotten Food", amount: "1" }, { item: "Spoiled Meat", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Wolf Spider", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Wolf_Spider.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Spider Venom", amount: "1" }, { item: "Wolf Spider Chunk", amount: "1" }, { item: "Wolf Spider Fang", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Praying Mantis Nymph", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Praying_Mantis_Nymph.png",
    drops: [{ item: "Cleaving Claw", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Praying Mantis Chunk", amount: "1" }, { item: "Praying Mantis Claw", amount: "1" }, { item: "Praying Mantis Head", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Cricket", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Cricket.png",
    drops: [{ item: "Cricket Drumstick", amount: "1" }, { item: "Cricket Head", amount: "1" }, { item: "Cricket Part", amount: "1" }, { item: "Fabulous Femur", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Wasp", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Wasp.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Pollen", amount: "1" }, { item: "Wasp Leg", amount: "1" }, { item: "Wasp Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Wasp Drone", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Wasp_Drone.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Pollen", amount: "1" }, { item: "Wasp Leg", amount: "1" }, { item: "Wasp Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Pincher Earwig", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Pincher_Earwig.png",
    drops: [{ item: "Earwig Head", amount: "1" }, { item: "Earwig Part", amount: "1" }, { item: "Earwig Pincer", amount: "1" }, { item: "Pincer Pincher", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Whipper Earwig", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Whipper_Earwig.png",
    drops: [{ item: "Earwig Head", amount: "1" }, { item: "Earwig Part", amount: "1" }, { item: "Earwig Pincer", amount: "1" }, { item: "Pincer Pincher", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Potato Beetle", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Potato_Beetle.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Potato Beetle Head", amount: "1" }, { item: "Potato Beetle Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Rust Beetle", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Rust_Beetle.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Boiling Gland", amount: "1" }, { item: "Rust Beetle Parts", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Firefly", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Firefly.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Firefly Shell", amount: "1" }, { item: "Glow Goo", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Black Soldier Ant", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Black_Soldier_Ant.png",
    drops: [{ item: "Black Ant Head", amount: "1" }, { item: "Black Ant Mandibles", amount: "1" }, { item: "Black Ant Part", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Green Shield Bug", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Green_Shield_Bug.png",
    drops: [{ item: "Green Shield Bug Parts", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Super Stink Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Toe Biter Nymph", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Toe_Biter_Nymph.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Toe Biter", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Toe_Biter.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Striped Bark Scorpling", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Striped_Bark_Scorpling.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Striped Scorpion Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Striped Bark Scorpion Jr.", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Striped_Bark_Scorpion_Jr..png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Scorpion Venom", amount: "1" }, { item: "Striped Scorpion Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.R.C. Tiger Mosquito", 
    category: "O.R.C.", 
    sprite: "assets/sprites/insects/O.R.C._Tiger_Mosquito.png",
    drops: [{ item: "Mosquito Blood Sack", amount: "1" }, { item: "O.R.C. Receiver", amount: "1" }, { item: "Tiger Mosquito Beak", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // O.G.R.R. FACTION
  // ==========================================
  { 
    name: "O.G.R.R. Northern Scorpion", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Northern_Scorpion.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Northern Scorpion Chunk", amount: "1" }, { item: "Northern Scorpion Pincer", amount: "1" }, { item: "Northern Scorpion Stinger", amount: "1" }, { item: "Scorpion Venom", amount: "1" }, { item: "Stabby Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Blue Butterfly", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Blue_Butterfly.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Blue Butterfly Chunk", amount: "1" }, { item: "Blue Butterfly Scales", amount: "1" }, { item: "Blue Butterfly Wing", amount: "1" }, { item: "Shivering Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Ladybug", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Ladybug.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Ladybug Head", amount: "1" }, { item: "Ladybug Part", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Cricket", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Cricket.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Cricket Drumstick", amount: "1" }, { item: "Cricket Head", amount: "1" }, { item: "Cricket Part", amount: "1" }, { item: "Fabulous Femur", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Rust Beetle", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Rust_Beetle.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Boiling Gland", amount: "1" }, { item: "Rust Beetle Parts", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Pincher Earwig", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Pincher_Earwig.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Earwig Head", amount: "1" }, { item: "Earwig Part", amount: "1" }, { item: "Earwig Pincer", amount: "1" }, { item: "Pincer Pincher", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Whipper Earwig", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Whipper_Earwig.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Earwig Head", amount: "1" }, { item: "Earwig Part", amount: "1" }, { item: "Earwig Pincer", amount: "1" }, { item: "Pincer Pincher", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Wasp", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Wasp.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Pollen", amount: "1" }, { item: "Wasp Leg", amount: "1" }, { item: "Wasp Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Wasp Drone", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Wasp_Drone.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Pollen", amount: "1" }, { item: "Wasp Leg", amount: "1" }, { item: "Wasp Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Praying Mantis Nymph", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Praying_Mantis_Nymph.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Cleaving Claw", amount: "1" }, { item: "Praying Mantis Chunk", amount: "1" }, { item: "Praying Mantis Claw", amount: "1" }, { item: "Praying Mantis Head", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Wolf Spider", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Wolf_Spider.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Spider Venom", amount: "1" }, { item: "Wolf Spider Chunk", amount: "1" }, { item: "Wolf Spider Fang", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Tiger Mosquito", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Tiger_Mosquito.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Mosquito Blood Sack", amount: "1" }, { item: "Tiger Mosquito Beak", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Green Shield Bug", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Green_Shield_Bug.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Green Shield Bug Parts", amount: "1" }, { item: "Super Stink Sack", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Toe Biter", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Toe_Biter.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },
  { 
    name: "O.G.R.R. Striped Bark Scorpion", 
    category: "O.G.R.R.", 
    sprite: "assets/sprites/insects/O.G.R.R._Striped_Bark_Scorpion.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Scorpion Venom", amount: "1" }, { item: "Stabby Stinger", amount: "1" }, { item: "Striped Scorpion Chunk", amount: "1" }, { item: "Striped Scorpion Pincer", amount: "1" }, { item: "Striped Scorpion Stinger", amount: "1" }],
    rareDrops: [],
    cardChance: "1%" 
  },

  // ==========================================
  // NAMED BUGS / BOSSES & MINIBOSSES
  // ==========================================
  { 
    name: "Toe Biter Leviathan", 
    category: "Named", 
    sprite: "assets/sprites/insects/Toe_Biter_Leviathan.png",
    drops: [{ item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Head", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }, { item: "Toe Biter Venom", amount: "1" }, { item: "Tickled Toenail", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Papa Toe Biter", 
    category: "Named", 
    sprite: "assets/sprites/insects/Papa_Toe_Biter.png",
    drops: [{ item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Egg", amount: "1" }, { item: "Toe Biter Head", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }, { item: "Toe Biter Venom", amount: "1" }, { item: "Tickled Toenail", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Sunny", 
    category: "Named", 
    sprite: "assets/sprites/insects/Sunny.png",
    drops: [{ item: "Koi Fish Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Calico", 
    category: "Named", 
    sprite: "assets/sprites/insects/Calico.png",
    drops: [{ item: "Koi Fish Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Oriole", 
    category: "Named", 
    sprite: "assets/sprites/insects/Oriole.png",
    drops: [{ item: "Koi Fish Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Dagon", 
    category: "Named", 
    sprite: "assets/sprites/insects/Dagon.png",
    drops: [{ item: "Koi Fish Scale", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "O.R.C. Toe Biter Leviathan", 
    category: "Named", 
    sprite: "assets/sprites/insects/O.R.C._Toe_Biter_Leviathan.png",
    drops: [{ item: "O.R.C. Receiver", amount: "1" }, { item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Head", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }, { item: "Toe Biter Venom", amount: "1" }, { item: "Tickled Toenail", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "O.G.R.R. Toe Biter Leviathan", 
    category: "Named", 
    sprite: "assets/sprites/insects/O.G.R.R._Toe_Biter_Leviathan.png",
    drops: [{ item: "Buffin' Gland", amount: "1" }, { item: "Infused Ooze", amount: "1" }, { item: "Toe Biter Claw", amount: "1" }, { item: "Toe Biter Head", amount: "1" }, { item: "Toe Biter Shell", amount: "1" }, { item: "Toe Biter Venom", amount: "1" }, { item: "Tickled Toenail", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Masked Stranger", 
    category: "Boss", 
    sprite: "assets/sprites/insects/Masked_Stranger.png",
    drops: [],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Axl", 
    category: "Boss", 
    sprite: "assets/sprites/insects/Axl.png",
    drops: [{ item: "Nightstalker's Bane", amount: "1" }, { item: "Tarantula Chunk", amount: "1" }, { item: "Tarantula Fang", amount: "1" }, { item: "Tarantula Talon", amount: "1" }, { item: "Tarantula Venom", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "King Dozer", 
    category: "Boss", 
    sprite: "assets/sprites/insects/King_Dozer.png",
    drops: [{ item: "King Dozer's Light", amount: "1" }, { item: "Lizard Horn", amount: "1" }, { item: "Lizard Scale", amount: "1" }, { item: "Searing Stone", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "O.R.C. Broodmother & Masked Fighter", 
    category: "Boss", 
    sprite: "assets/sprites/insects/O.R.C._Broodmother_&_Masked_Fighter.png",
    drops: [{ item: "Broodmother Chunk", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },

  // ==========================================
  // PLAYGROUND EXCLUSIVES
  // ==========================================
  { 
    name: "Orchid Mantis", 
    category: "Playground", 
    sprite: "assets/sprites/insects/Orchid_Mantis.png",
    drops: [{ item: "Mantis Trinket", amount: "1" }, { item: "Orchid Mantis Chunk", amount: "1" }, { item: "Orchid Mantis Claw", amount: "1" }, { item: "Orchid Mantis Head", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Wasp Queen", 
    category: "Playground", 
    sprite: "assets/sprites/insects/Wasp_Queen.png",
    drops: [{ item: "Wasp Queen Chunk", amount: "1" }, { item: "Wasp Queen Head", amount: "1" }, { item: "Wasp Queen Trinket", amount: "1" }, { item: "Wasp Queen Wing", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Assistant Manager", 
    category: "Playground", 
    sprite: "assets/sprites/insects/Assistant_Manager.png",
    drops: [{ item: "Raw Science", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  },
  { 
    name: "Director Schmector", 
    category: "Playground", 
    sprite: "assets/sprites/insects/Director_Schmector.png",
    drops: [{ item: "Raw Science", amount: "1" }],
    rareDrops: [],
    cardChance: "100%" 
  }
];
