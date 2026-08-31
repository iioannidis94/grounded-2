const allGroundedInsects = [
  // ==========================================
  // HARMLESS & NEUTRAL
  // ==========================================
  { name: "Aphid", category: "Harmless", drops: ["Aphid Honeydew", "Raw Aphid Meat"] },
  { name: "Woolly Aphid", category: "Harmless", drops: ["Aphid Honeydew", "Fuzz"] },
  { name: "Weevil", category: "Harmless", drops: ["Raw Weevil Meat", "Weevil Nose"] },
  { name: "Gnat", category: "Harmless", drops: ["Gnat Fuzz", "Raw Gnat Meat"] },
  { name: "Grub", category: "Harmless", drops: ["Grub Hide", "Raw Grub Meat"] },
  { name: "Tadpole", category: "Harmless", drops: ["Raw Tadpole Meat"] },
  { name: "Water Boatman", category: "Harmless", drops: ["Water Boatman Fin"] },
  { name: "Blue Butterfly", category: "Harmless", drops: ["Butterfly Scale", "Butterfly Fuzz"] },
  { name: "Caterpillar", category: "Harmless", drops: ["Caterpillar Fuzz"] },
  { name: "Firefly", category: "Neutral", drops: ["Bioluminescent Goo"] },
  { name: "Garden Snail", category: "Neutral", drops: ["Snail Shell", "Snail Mucus"] },
  { name: "Baby Garden Snail", category: "Neutral", drops: ["Snail Mucus"] },
  { name: "Bee", category: "Neutral", drops: ["Bee Fuzz", "Bee Stinger"] },
  { name: "Ladybug", category: "Neutral", drops: ["Ladybug Part", "Ladybug Head"] },
  { name: "Black Worker Ant", category: "Neutral", drops: ["Black Ant Part", "Black Ant Head"] },
  { name: "Red Worker Ant", category: "Neutral", drops: ["Red Ant Part", "Red Ant Head"] },

  // ==========================================
  // HOSTILE (ΕΧΘΡΙΚΑ)
  // ==========================================
  { name: "Black Soldier Ant", category: "Hostile", drops: ["Black Ant Part", "Black Ant Mandibles"] },
  { name: "Red Soldier Ant", category: "Hostile", drops: ["Red Ant Part", "Red Ant Mandibles"] },
  { name: "Bombardier Beetle", category: "Hostile", drops: ["Boiling Gland", "Bombardier Part"] },
  { name: "Cockroach", category: "Hostile", drops: ["Cockroach Part", "Tough Gunk"] },
  { name: "Cockroach Nymph", category: "Hostile", drops: ["Cockroach Part"] },
  { name: "Cricket", category: "Hostile", drops: ["Cricket Leg", "Tough Gunk"] },
  { name: "Diving Bell Spider", category: "Hostile", drops: ["Diving Bell Spider Chunk", "Spider Silk"] },
  { name: "Green Shield Bug", category: "Hostile", drops: ["Green Shield Bug Part", "Super Gas Sack"] },
  { name: "Larva", category: "Hostile", drops: ["Larva Spike", "Acid Gland"] },
  { name: "Lawn Mite", category: "Hostile", drops: ["Mite Fuzz"] },
  { name: "Mosquito", category: "Hostile", drops: ["Mosquito Blood Sack", "Mosquito Beak"] },
  { name: "Tiger Mosquito", category: "Hostile", drops: ["Tiger Mosquito Beak", "Tiger Mosquito Blood Sack"] },
  { name: "Northern Scorpion", category: "Hostile", drops: ["Scorpion Stinger", "Scorpion Carapace"] },
  { name: "Striped Bark Scorpion", category: "Hostile", drops: ["Scorpion Carapace", "Scorpion Venom"] },
  { name: "Orb Weaver", category: "Hostile", drops: ["Spider Chunk", "Spider Venom", "Web Fiber"] },
  { name: "Orb Weaver Jr", category: "Hostile", drops: ["Spider Chunk", "Web Fiber"] },
  { name: "Wolf Spider", category: "Hostile", drops: ["Spider Fang", "Spider Chunk", "Spider Venom"] },
  { name: "Spiderling", category: "Hostile", drops: ["Spider Chunk", "Web Fiber"] },
  { name: "Pincher Earwig", category: "Hostile", drops: ["Earwig Pincer", "Tough Gunk"] },
  { name: "Whipper Earwig", category: "Hostile", drops: ["Earwig Pincer", "Tough Gunk"] },
  { name: "Potato Beetle", category: "Hostile", drops: ["Potato Beetle Shell"] },
  { name: "Rust Beetle", category: "Hostile", drops: ["Rust Beetle Shell"] },
  { name: "Spiny Water Flea", category: "Hostile", drops: ["Spiny Water Flea Meat"] },
  { name: "Water Flea", category: "Hostile", drops: ["Water Flea Meat"] },
  { name: "Tick", category: "Hostile", drops: ["Tick Fang", "Lint"] },
  { name: "Toe Biter", category: "Hostile", drops: ["Toe Biter Chunk", "Water Bug Gland"] },
  { name: "Toe Biter Nymph", category: "Hostile", drops: ["Toe Biter Chunk"] },
  { name: "Wasp", category: "Hostile", drops: ["Wasp Paper", "Wasp Legs"] },
  { name: "Wasp Drone", category: "Hostile", drops: ["Wasp Paper", "Wasp Gland"] },
  { name: "Stinkbug", category: "Hostile", drops: ["Stinkbug Part", "Stinkbug Gas Sack"] },
  { name: "Pond Jockey", category: "Hostile", drops: ["Algae", "Tough Gunk"] },
  { name: "Praying Mantis", category: "Hostile", drops: ["Mantis Chunk", "Mantis Claw"] },

  // ==========================================
  // O.R.C. FACTION
  // ==========================================
  { name: "O.R.C. Bee", category: "O.R.C.", drops: ["O.R.C. Receiver", "Bee Fuzz", "Bee Stinger"] },
  { name: "O.R.C. Blue Butterfly", category: "O.R.C.", drops: ["O.R.C. Receiver", "Butterfly Scale"] },
  { name: "O.R.C. Broodmother", category: "O.R.C.", drops: ["O.R.C. Receiver", "Broodmother Chunk", "Broodmother Fang"] },
  { name: "O.R.C. Striped Bark Scorpion", category: "O.R.C.", drops: ["O.R.C. Receiver", "Scorpion Carapace"] },
  { name: "O.R.C. Toe Biter", category: "O.R.C.", drops: ["O.R.C. Receiver", "Toe Biter Chunk"] },
  { name: "O.R.C. Black Worker Ant", category: "O.R.C.", drops: ["O.R.C. Receiver", "Black Ant Part"] },
  { name: "O.R.C. Bombardier Beetle", category: "O.R.C.", drops: ["O.R.C. Receiver", "Boiling Gland"] },
  { name: "O.R.C. Spiderling", category: "O.R.C.", drops: ["O.R.C. Receiver", "Web Fiber"] },
  { name: "O.R.C. Tiger Mosquito", category: "O.R.C.", drops: ["O.R.C. Receiver", "Tiger Mosquito Beak"] },
  { name: "O.R.C. Wasp", category: "O.R.C.", drops: ["O.R.C. Receiver", "Wasp Paper"] },
  { name: "O.R.C. Wolf Spider", category: "O.R.C.", drops: ["O.R.C. Receiver", "Spider Fang", "Spider Venom"] },

  // ==========================================
  // O.G.R.R. FACTION (Νέα παραλλαγή)
  // ==========================================
  { name: "O.G.R.R. Cricket", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Cricket Leg"] },
  { name: "O.G.R.R. Ladybug", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Ladybug Part"] },
  { name: "O.G.R.R. Pincher Earwig", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Earwig Pincer"] },
  { name: "O.G.R.R. Rust Beetle", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Rust Beetle Shell"] },
  { name: "O.G.R.R. Tiger Mosquito", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Tiger Mosquito Beak"] },
  { name: "O.G.R.R. Wasp", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Wasp Paper"] },
  { name: "O.G.R.R. Whipper Earwig", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Earwig Pincer"] },
  { name: "O.G.R.R. Blue Butterfly", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Butterfly Scale"] },
  { name: "O.G.R.R. Green Shield Bug", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Super Gas Sack"] },
  { name: "O.G.R.R. Northern Scorpion", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Scorpion Carapace"] },
  { name: "O.G.R.R. Praying Mantis", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Mantis Claw"] },
  { name: "O.G.R.R. Striped Bark Scorpion", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Scorpion Venom"] },
  { name: "O.G.R.R. Toe Biter", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Toe Biter Chunk"] },
  { name: "O.G.R.R. Wolf Spider", category: "O.G.R.R.", drops: ["O.G.R.R. Tech", "Spider Fang"] },

  // ==========================================
  // NAMED BUGS / BOSSES & MINIBOSSES
  // ==========================================
  { name: "Axl", category: "Named", drops: ["Unique Boss Drop", "Tough Gunk"] },
  { name: "Masked Stranger", category: "Named", drops: ["Stranger Mask Fragment", "Tough Gunk"] },
  { name: "Calico", category: "Named", drops: ["Calico Fur", "Tough Gunk"] },
  { name: "Colonel Creep", category: "Named", drops: ["Creep Insignia", "Tough Gunk"] },
  { name: "General Puck", category: "Named", drops: ["Puck Badge", "Tough Gunk"] },
  { name: "Major Pain", category: "Named", drops: ["Pain Badge", "Tough Gunk"] },
  { name: "Officer Tang", category: "Named", drops: ["Tang Badge", "Tough Gunk"] },
  { name: "Papa Toe Biter", category: "Named", drops: ["Massive Toe Biter Chunk", "Water Bug Gland"] },
  { name: "Sergeant Stink", category: "Named", drops: ["Stink Insignia", "Super Gas Sack"] },
  { name: "The Red Baron", category: "Named", drops: ["Baron Wings", "Tough Gunk"] },
  { name: "King Dozer", category: "Named", drops: ["Dozer Crown", "Tough Gunk"] },
  { name: "Admiral Grand", category: "Named", drops: ["Admiral Badge", "Tough Gunk"] },
  { name: "Chief Titan", category: "Named", drops: ["Titan Shell", "Tough Gunk"] },
  { name: "Colonel Crush", category: "Named", drops: ["Crush Badge", "Tough Gunk"] },
  { name: "Major Dazzler", category: "Named", drops: ["Dazzler Wings", "Tough Gunk"] },
  { name: "Mess Officer", category: "Named", drops: ["Officer Badge", "Tough Gunk"] },
  { name: "Oriole", category: "Named", drops: ["Oriole Feather", "Tough Gunk"] },
  { name: "Private Bounce", category: "Named", drops: ["Bounce Badge", "Tough Gunk"] },
  { name: "Sunny", category: "Named", drops: ["Sunny Scale", "Tough Gunk"] }
];


