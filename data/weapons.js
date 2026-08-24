const weapons = [
    // ==========================================
    // ONE-HANDED
    // ==========================================
    { 
        id: 'w_toenail_cutlass', name: 'Toenail Cutlass', type: 'One-Handed', sprite: 'assets/sprites/weapons/toenail_cutlass.png',
        stats: { damage: '48/48/60', stun: 5, speed: 'Fast', critChance: '5%' },
        description: '"A weapon fit for the scourge of Skunk Pond, forged from serrated toenail clippings, wrapping in luxurious gold foil."',
        unlockedBy: 'Analyzing Toenail',
        materials: ['5 Toenail', '1 Pupa Leather', '2 Gold Foil', '1 Crushed Quartz'], repairCost: ['2 Toenail', '1 Gold Foil']
    },
    { 
        id: 'w_axls_talon', name: "Axl's Talon", type: 'One-Handed', sprite: 'assets/sprites/weapons/axls_talon.png',
        stats: { damage: '40/40/50', stun: 5, speed: 'Fast', critChance: '5%' },
        description: '"A broad spear forged from one of Axl\'s great talons. It oozes fresh venom with every strike."',
        unlockedBy: 'Analyzing Tarantula Venom',
        materials: ['2 Tarantula Talon', '3 Tarantula Chunk', '2 Tarantula Venom'], repairCost: ['1 Tarantula Venom']
    },
    { 
        id: 'w_ash_maw', name: 'Ash Maw', type: 'One-Handed', sprite: 'assets/sprites/weapons/ash_maw.png',
        stats: { damage: '42/42/53', stun: 6, speed: 'Average', critChance: '2%' },
        description: '"A hammer so spicy it rivals dragon breath. Forged with a searing stone plucked from a lizard\'s gullet."',
        unlockedBy: 'Analyzing Searing Stone',
        materials: ['1 Lizard Horn', '1 Searing Stone', '2 Lizard Scale', '2 Lingonberry Leather'], repairCost: ['1 Lizard Scale', '2 Spicy Shard']
    },
    { 
        id: 'w_black_ant_sword', name: 'Black Ant Sword', type: 'One-Handed', sprite: 'assets/sprites/weapons/black_ant_sword.png',
        stats: { damage: '40/40/50', stun: 5, speed: 'Fast', critChance: '5%' },
        description: '"A clean blade with the cutting power of ants."',
        unlockedBy: 'Analyzing Black Ant Head',
        materials: ['2 Black Ant Mandibles', '3 Black Ant Part', '4 Blueberry Leather'], repairCost: ['2 Black Ant Part', '1 Black Ant Mandibles']
    },
    { 
        id: 'w_rusty_spear', name: 'Rusty Spear', type: 'One-Handed', sprite: 'assets/sprites/weapons/rusty_spear.png',
        stats: { damage: '40/40/50', stun: 5, speed: 'Fast', critChance: '3%' },
        description: '"A bacterially infectious spear crafted from sharp flakes of rust."',
        unlockedBy: 'Analyzing Rust',
        materials: ['6 Rust', '3 Spiky Bur', '2 Lint Rope'], repairCost: ['2 Rust']
    },
    { 
        id: 'w_crystal_trident', name: 'Crystal Trident', type: 'One-Handed', sprite: 'assets/sprites/weapons/crystal_trident.png',
        stats: { damage: '41/41/51', stun: 5, speed: 'Fast', critChance: '3%' },
        description: '"A hydrodynamic crystal and bone weapon that excels at underwater combat."',
        unlockedBy: 'Analyzing Phantom Quartz Shard or Sunken Bone',
        materials: ['3 Phantom Quartz Shard', '3 Eelgrass Strand', '2 Diving Bell Spider Chunk', '2 Sunken Bone'], repairCost: ['1 Phantom Quartz Shard', '1 Diving Bell Spider Chunk']
    },
    { 
        id: 'w_tiger_mosquito_rapier', name: 'Tiger Mosquito Rapier', type: 'One-Handed', sprite: 'assets/sprites/weapons/tiger_mosquito_rapier.png',
        stats: { damage: '39/39/49', stun: 4, speed: 'Fast', critChance: '5%' },
        description: '"A rapier fashioned out of a deadly tiger mosquito\'s beak, with enhanced life leeching properties."',
        unlockedBy: 'Analyzing Tiger Mosquito Beak',
        materials: ['2 Tiger Mosquito Beak', '4 Rust', '4 Mosquito Blood Sack'], repairCost: ['1 Tiger Mosquito Beak', '1 Mosquito Blood Sack']
    },
    { 
        id: 'w_stinger_spear', name: 'Stinger Spear', type: 'One-Handed', sprite: 'assets/sprites/weapons/stinger_spear.png',
        stats: { damage: '32/32/40', stun: 5, speed: 'Fast', critChance: '4%' },
        description: '"Supreme stinging apparatus."',
        unlockedBy: 'Analyzing Bee Stinger or Reaching Brainpower Level 7',
        materials: ['1 Bee Stinger', '5 Bee Fuzz', '3 Silk Rope'], repairCost: ['1 Bee Stinger', '2 Bee Fuzz']
    },
    { 
        id: 'w_mosquito_needle', name: 'Mosquito Needle', type: 'One-Handed', sprite: 'assets/sprites/weapons/mosquito_needle.png',
        stats: { damage: '29/29/36', stun: 4, speed: 'Fast', critChance: '5%' },
        description: '"A fast and deadly rapier that mimics the functionality of a mosquito\'s blood sucking tool."',
        unlockedBy: 'Analyzing Mosquito Beak',
        materials: ['2 Mosquito Beak', '2 Silk Rope', '2 Mosquito Blood Sack'], repairCost: ['1 Mosquito Beak', '1 Mosquito Blood Sack']
    },
    { 
        id: 'w_roach_club', name: 'Roach Club', type: 'One-Handed', sprite: 'assets/sprites/weapons/roach_club.png',
        stats: { damage: '32/32/40', stun: 6, speed: 'Slow', critChance: '2%' },
        description: '"A one-handed club optimized for crushing."',
        unlockedBy: 'Analyzing Roach Head',
        materials: ['2 Roach Head', '3 Roach Chunk', '2 Blueberry Leather'], repairCost: ['2 Roach Chunk', '1 Blueberry Leather']
    },
    { 
        id: 'w_pebblet_spear', name: 'Pebblet Spear', type: 'One-Handed', sprite: 'assets/sprites/weapons/pebblet_spear.png',
        stats: { damage: '20/20/25', stun: 5, speed: 'Fast', critChance: '1%' },
        description: '"A basic stabby weapon to keep creatures at bay. Can also be thrown for a deadly amount of damage."',
        unlockedBy: 'Analyzing Pebblet',
        materials: ['2 Sprig', '1 Crude Rope', '1 Pebblet'], repairCost: ['1 Pebblet']
    },
    { 
        id: 'w_crimson_saber', name: 'Crimson Saber', type: 'One-Handed', sprite: 'assets/sprites/weapons/crimson_saber.png',
        stats: { damage: '21/21/26', stun: 5, speed: 'Fast', critChance: '4%' },
        description: '"A balanced blade with the cutting power of red ants."',
        unlockedBy: 'Analyzing Red Ant Mandibles or Reaching Brainpower Level 3',
        materials: ['2 Red Ant Mandibles', '3 Red Ant Part', '2 Grub Hide'], repairCost: ['2 Red Ant Part', '1 Red Ant Mandibles']
    },
    { 
        id: 'w_larvalance', name: 'Larvalance', type: 'One-Handed', sprite: 'assets/sprites/weapons/larvalance.png',
        stats: { damage: '22/22/28', stun: 5, speed: 'Fast', critChance: '3%' },
        description: '"An ant part shaft topped with a serrated larva spike. Ouch!"',
        unlockedBy: 'Analyzing Larva Spike or Reaching Brainpower Level 2',
        materials: ['2 Larva Spike', '4 Red Ant Part', '2 Crude Rope'], repairCost: ['1 Larva Spike', '2 Red Ant Part']
    },

    // ==========================================
    // STRANGER ONE-HANDED VARIANTS
    // ==========================================
    { 
        id: 'w_stranger_cut_lass', name: 'Cut Lass', type: 'Stranger One-Handed', sprite: 'assets/sprites/weapons/cut_lass.png',
        stats: { damage: '48/48/60', stun: 4, speed: 'Fast', critChance: '6%' },
        description: '"Forged from Dr. Tully\'s toenail, this blade will see vengeance through."',
        unlockedBy: 'Found: In a O.R.C. Stash cave located deep in a Tang lake north of the pile of bricks in the Pergola Area.',
        materials: ['1 Toenail Cutlass', '1 Hyper Beam', '2 Gold Foil'], repairCost: ['2 Toenail', '1 O.R.C. Receiver']
    },
    { 
        id: 'w_crimson_avenger', name: 'Crimson Avenger', type: 'Stranger One-Handed', sprite: 'assets/sprites/weapons/crimson_avenger.png',
        stats: { damage: '32/32/40', stun: 5, speed: 'Fast', critChance: '4%' },
        description: '"Forged from the mandible of a veteran soldier ant, defy the invaders."',
        unlockedBy: 'Found: In the Memorial Crate within the Spider Den Anthill stuck in a Chewed Gum.',
        materials: ['1 Crimson Saber', '2 Orb Weaver Fang', '2 Unstable Goo'], repairCost: ['1 Red Ant Mandibles', '1 Silk Rope']
    },
    { 
        id: 'w_gloom_skewer', name: 'Gloom Skewer', type: 'Stranger One-Handed', sprite: 'assets/sprites/weapons/gloom_skewer.png',
        stats: { damage: '30/30/38', stun: 4, speed: 'Fast', critChance: '5%' },
        description: '"A keen pincer of a larva tops this spear. Dangerously sharp."',
        unlockedBy: 'Found: At the bottom of the Toxic Anthill, guarded by the Cockroach Queen.',
        materials: ['1 Larvalance', '2 Gloom Sap', '1 O.R.C. Receiver'], repairCost: ['2 Larva Spike', '2 Red Ant Part']
    },
    { 
        id: 'w_pinch_whacker', name: 'Pinch Whacker', type: 'Stranger One-Handed', sprite: 'assets/sprites/weapons/pinch_whacker.png',
        stats: { damage: '30/30/15', stun: 6, speed: 'Slow', critChance: '3%' },
        description: '"A grabby arm from a stripped down robot repurposed as a weapon. Still crackles with energy."',
        unlockedBy: 'Found: In a O.R.C. Cave located north of the Fire Pit.',
        materials: ['1 Volatile Capacitor', '2 O.R.C. Receiver', '3 Unstable Goo'], repairCost: ['1 O.R.C. Receiver']
    },

    // ==========================================
    // SHIELDS
    // ==========================================
    { 
        id: 'sh_horned_heater', name: 'Horned Heater', type: 'Shield', sprite: 'assets/sprites/weapons/Horned_Heater.png',
        stats: { blockReduction: '100%', staminaCost: 21 },
        description: '"A scaly heavy shield decked with lizard horns."',
        unlockedBy: 'Analyzing Lizard Horn',
        materials: ['1 Lizard Horn', '2 Ashen Leather', '2 Pinecone Piece', '2 Lint Rope'], repairCost: ['1 Lizard Scale', '1 Pinecone Piece']
    },
    { 
        id: 'sh_shellshocker', name: 'Shellshocker', type: 'Shield', sprite: 'assets/sprites/weapons/Shellshocker.png',
        stats: { blockReduction: '100%', staminaCost: 21 },
        description: '"A heavy shield made with garden snail fragments. Block attacks in style!"',
        unlockedBy: 'Analyzing Garden Snail Eyestalk',
        materials: ['5 Garden Snail Fragment', '2 Garden Snail Eyestalk', '3 Chrysalis Leather', '2 Silk Rope'], repairCost: ['1 Garden Snail Fragment']
    },
    { 
        id: 'sh_black_ant_shield', name: 'Black Ant Shield', type: 'Shield', sprite: 'assets/sprites/weapons/Black_ant_Shield.png',
        stats: { blockReduction: '82%', staminaCost: 30 },
        description: '"A sturdy shield made of black ant parts."',
        unlockedBy: 'Analyzing Black Ant Part',
        materials: ['5 Black Ant Part', '3 Chrysalis Leather', '2 Lint Rope'], repairCost: ['3 Black Ant Part']
    },
    { 
        id: 'sh_koi_scale_shield', name: 'Koi Scale Shield', type: 'Shield', sprite: 'assets/sprites/weapons/Koi_Scale_Shield.png',
        stats: { blockReduction: '80%', staminaCost: 34 },
        description: '"A hydrodynamic shield that offers fluid underwater movement made from shiny koi fish scales."',
        unlockedBy: 'Analyzing Koi Fish Scale',
        materials: ['3 Koi Fish Scale', '2 Sunken Bone', '2 Eelgrass Strand'], repairCost: ['1 Koi Fish Scale', '1 Eelgrass Strand']
    },
    { 
        id: 'sh_bombuckler', name: 'Bombuckler', type: 'Shield', sprite: 'assets/sprites/weapons/Bombuckler.png',
        stats: { blockReduction: '81%', staminaCost: 30 },
        description: '"A light shield made of sizzling bombardier beetle parts."',
        unlockedBy: 'Analyzing Bombardier Part',
        materials: ['4 Bombardier Part', '2 Silk Rope', '3 Spine Nub'], repairCost: ['2 Bombardier Part']
    },
    { 
        id: 'sh_ladyguard', name: 'Ladyguard', type: 'Shield', sprite: 'assets/sprites/weapons/Ladyguard.png',
        stats: { blockReduction: '100%', staminaCost: 22 },
        description: '"A sturdy shield crafted from the red shell of a ladybug."',
        unlockedBy: 'Analyzing Ladybug Part or Reaching Brainpower Level 6',
        materials: ['4 Ladybug Part', '2 Crude Rope', '3 Sap'], repairCost: ['2 Ladybug Part']
    },
    { 
        id: 'sh_weevil_shield', name: 'Weevil Shield', type: 'Shield', sprite: 'assets/sprites/weapons/Weevil_Shield.png',
        stats: { blockReduction: '79%', staminaCost: 30 },
        description: '"Hopefully this shell will defend you better than the weevil it came from."',
        unlockedBy: 'Analyzing Raw Weevil Meat or Reaching Brainpower Level 2',
        materials: ['2 Raw Weevil Meat', '2 Grub Hide', '1 Crude Rope'], repairCost: ['1 Raw Weevil Meat']
    },
    { 
        id: 'sh_crimson_buckler', name: 'Crimson Buckler', type: 'Shield', sprite: 'assets/sprites/weapons/crimson_buckler.png',
        stats: { blockReduction: '80%', staminaCost: 34 },
        description: '"A light shield made of red ant parts and lawn mite fangs."',
        unlockedBy: 'Analyzing Red Ant Part or Reaching Brainpower Level 4',
        materials: ['4 Red Ant Part', '4 Mite Fang', '2 Grub Hide'], repairCost: ['2 Red Ant Part', '1 Mite Fang']
    },
    
    // STRANGER SHIELD VARIANTS
    { 
        id: 'sh_scarlet_aegis', name: 'Scarlet Aegis', type: 'Stranger Shield', sprite: 'assets/sprites/weapons/scarlet_aegis.png',
        stats: { blockReduction: '100%', staminaCost: 22 },
        description: '"A exceptionally well crafted Ladyguard. Inspires buggies to persevere."',
        unlockedBy: 'Found: In a O.R.C. Cave inbetween the podium and the large rock in the Ceremony Area.',
        materials: ['1 Ladyguard', '1 Sturdy Shell', '2 O.R.C. Receiver'], repairCost: ['1 Ladybug Part', '1 Caterpillar Goop']
    },

    // ==========================================
    // TWO-HANDED
    // ==========================================
    { 
        id: 'w_toe_biter_scythe', name: 'Toe Biter Scythe', type: 'Two-Handed', sprite: 'assets/sprites/weapons/toe_biter_scythe.png',
        stats: { damage: '62/62/78', stun: 6, speed: 'Average', critChance: '5%' },
        description: '"Go all Grim Reaper on your foes with a scythe forged from the sharpest toe biter claws, capable of piercing the toughest shells."',
        unlockedBy: 'Analyzing Toe Biter Venom',
        materials: ['1 Toe Biter Claw', '2 Toe Biter Shell', '3 Pond Moss', '2 Cattail Fluff'], repairCost: ['1 Toe Biter Claw', '1 Pond Moss']
    },
    { 
        id: 'w_spicy_coaltana', name: 'Spicy Coaltana', type: 'Two-Handed', sprite: 'assets/sprites/weapons/spicy_coaltana.png',
        stats: { damage: '52/52/65', stun: 6, speed: 'Average', critChance: '5%' },
        description: '"Sear foes with a finely crafted blade, hammered out of tempered spicy globs and always-hot EverChar coal chunks."',
        unlockedBy: 'Discovering Charred Recipe',
        materials: ['2 Spicy Glob', '5 EverChar Coal Chunk', '4 Wolf Spider Chunk'], repairCost: ['2 EverChar Coal Chunk', '2 Spicy Shard']
    },
    { 
        id: 'w_mantis_blade', name: 'Mantis Blade', type: 'Two-Handed', sprite: 'assets/sprites/weapons/mantis_blade.png',
        stats: { damage: '55/55/69', stun: 6, speed: 'Average', critChance: '5%' },
        description: '"A hefty two-handed blade forged from a massive praying mantis claw."',
        unlockedBy: 'Analyzing Praying Mantis Claw',
        materials: ['2 Praying Mantis Claw', '4 Praying Mantis Chunk', '3 Lingonberry Leather'], repairCost: ['1 Praying Mantis Claw', '2 Lingonberry Leather']
    },
    { 
        id: 'w_sour_katanga', name: 'Sour Katanga', type: 'Two-Handed', sprite: 'assets/sprites/weapons/sour_katanga.png',
        stats: { damage: '54/54/68', stun: 6, speed: 'Average', critChance: '5%' },
        description: '"Pucker foes with this finely crafted tangy blade. The mysterious stranger mastered the technique of folding sour globs into a deadly katana."',
        unlockedBy: 'Analyzing Broodmother Chunk',
        materials: ['2 Sour Glob', '3 Broodmother Chunk', '3 Chrysalis Leather'], repairCost: ['4 Sour Lump']
    },
    { 
        id: 'w_ticky_maul', name: 'Ticky Maul', type: 'Two-Handed', sprite: 'assets/sprites/weapons/ticky_maul.png',
        stats: { damage: '68/68/85', stun: 9, speed: 'Slow', critChance: '2%' },
        description: '"A toothy maul covering in blood-sucking tick fangs. Drains the life force of creatures."',
        unlockedBy: 'Analyzing Tick Fang',
        materials: ['6 Tick Fang', '1 Fire Brick', '3 Spiky Bur', '4 Cattail Fluff'], repairCost: ['2 Tick Fang', '1 Cattail Fluff']
    },
    { 
        id: 'w_prod_smacker', name: 'Prod Smacker', type: 'Two-Handed', sprite: 'assets/sprites/weapons/prod_smacker.png',
        stats: { damage: '69/69/86', stun: 9, speed: 'Slow', critChance: '2%' },
        description: '"An electric prod arm from a fallen service robot given a second life as a tool for smacking enemies."',
        unlockedBy: 'Reaching Brainpower Level 12',
        materials: ['1 Volatile Capacitor', "1 Roby's Diode", "3 Roby's Scrap Parts", '1 O.R.C. Receiver'], repairCost: ["1 Roby's Scrap Parts", '1 O.R.C. Receiver']
    },
    { 
        id: 'w_red_ant_club', name: 'Red Ant Club', type: 'Two-Handed', sprite: 'assets/sprites/weapons/red_ant_club.png',
        stats: { damage: '52/52/65', stun: 9, speed: 'Slow', critChance: '2%' },
        description: '"Meaty red ant leg perfect for beatings."',
        unlockedBy: 'Analyzing Red Ant Mandibles or Reaching Brainpower Level 4',
        materials: ['3 Red Ant Mandibles', '4 Red Ant Part', '3 Sap', '2 Crude Rope'], repairCost: ['2 Red Ant Mandibles', '1 Red Ant Part']
    },
    { 
        id: 'w_warhammerlet', name: 'Warhammerlet', type: 'Two-Handed', sprite: 'assets/sprites/weapons/warhammerlet.png',
        stats: { damage: '36/36/45', stun: 9, speed: 'Slow', critChance: '1%' },
        description: '"A crude but sturdy pebblet warhammer to smash bugs into goo!"',
        unlockedBy: 'Reaching Brainpower Level 1',
        materials: ['2 Sprig', '3 Sap', '2 Pebblet', '1 Acid Gland'], repairCost: ['1 Pebblet', '1 Sap']
    },

    // STRANGER TWO-HANDED VARIANTS
    { 
        id: 'w_boom_stick', name: 'Boom Stick', type: 'Stranger Two-Handed', sprite: 'assets/sprites/weapons/boom_stick.png',
        stats: { damage: '68/68/85', stun: 9, speed: 'Slow', critChance: '2%' },
        description: '"A boosted variant of the Wallopeño, when charged it deals extra spicy damage."',
        unlockedBy: 'Found: In a large cave connected to the area where the player fixes the leaky valve in the Veggie Garden.',
        materials: ['3 Spicy Glob', '1 Blistering Boiler', '1 Hyper Beam', '3 Gunpowder Clump'], repairCost: ['4 Spicy Shard', '1 Gunpowder Clump']
    },
    { 
        id: 'w_fellfeast', name: 'Fellfeast', type: 'Stranger Two-Handed', sprite: 'assets/sprites/weapons/fellfeast.png',
        stats: { damage: '68/68/85', stun: 9, speed: 'Slow', critChance: '2%' },
        description: '"A pox on Ominent, a hex on Sloane, a feast of blood for that vile crone."',
        unlockedBy: 'Found: In a underwater cave located below the bridge in the Bridge Area.',
        materials: ['1 Ticky Maul', '1 Insulating Larva Spike', '1 Hyper Beam'], repairCost: ['2 Tick Fang', '1 O.R.C. Receiver']
    },

    // ==========================================
    // DUAL WIELD
    // ==========================================
    { 
        id: 'w_striped_slashers', name: 'Striped Slashers', type: 'Dual Wield', sprite: 'assets/sprites/weapons/striped_slashers.png',
        stats: { damage: '48/48/65', stun: 5, speed: 'Fast', critChance: '5%' },
        description: '"Chitin from a striped bark scorpion shaped into a pair of bladed fists."',
        unlockedBy: 'Analyzing Striped Scorpion Pincer',
        materials: ['2 Striped Scorpion Pincer', '4 Striped Scorpion Chunk', '2 Pupa Leather'], repairCost: ['1 Striped Scorpion Pincer', '1 Pupa Leather']
    },
    { 
        id: 'w_woolly_whoppers', name: 'Woolly Whoppers', type: 'Dual Wield', sprite: 'assets/sprites/weapons/woolly_whoppers.png',
        stats: { damage: '41/41/55', stun: 5, speed: 'Fast', critChance: '4%' },
        description: '"Thwop your foes silly with a pair of woolly aphid mitts."',
        unlockedBy: 'Analyzing Raw Woolly Aphid Meat',
        materials: ['2 Raw Woolly Aphid Meat', '4 Woolly Aphid Fuzz', '4 Mint Shard', '3 Lint'], repairCost: ['2 Woolly Aphid Fuzz', '2 Mint Shard']
    },
    { 
        id: 'w_ice_sickles', name: 'Ice Sickles', type: 'Dual Wield', sprite: 'assets/sprites/weapons/ice_sickles.png',
        stats: { damage: '36/36/49', stun: 4, speed: 'Fast', critChance: '5%' },
        description: '"Legendary frigid blades with a keen edge, forged from mint globs. Perfect for chilling out enemies."',
        unlockedBy: 'Defending The Frozen Ice Sickles In The Ice Cream Cart',
        materials: ['2 Mint Glob', '2 Northern Scorpion Pincer', '6 Northern Scorpion Chunk'], repairCost: ['2 Mint Shard']
    },
    { 
        id: 'w_wolfsbane_fangs', name: 'Wolfsbane Fangs', type: 'Dual Wield', sprite: 'assets/sprites/weapons/wolfsbane_fangs.png',
        stats: { damage: '34/34/46', stun: 3, speed: 'Fast', critChance: '6%' },
        description: '"A pair of nimble daggers made from wolf spider fangs that inflict venom."',
        unlockedBy: 'Analyzing Wolf Spider Fang',
        materials: ['2 Wolf Spider Fang', '4 Wolf Spider Chunk', '4 Spider Venom', '2 Silk Rope'], repairCost: ['1 Wolf Spider Fang', '1 Spider Venom']
    },
    { 
        id: 'w_dusk_blades', name: 'Dusk Blades', type: 'Dual Wield', sprite: 'assets/sprites/weapons/dusk_blades.png',
        stats: { damage: '35/35/47', stun: 4, speed: 'Fast', critChance: '6%' },
        description: '"A pair of earwig pincers fashioned into sickle blades."',
        unlockedBy: 'Analyzing Earwig Pincer',
        materials: ['2 Earwig Pincer', '2 Earwig Part', '2 Raw Woolly Aphid Meat', '2 Lint Rope'], repairCost: ['1 Earwig Pincer', '1 Woolly Aphid Fuzz']
    },
    { 
        id: 'w_northern_shredders', name: 'Northern Shredders', type: 'Dual Wield', sprite: 'assets/sprites/weapons/northern_shredders.png',
        stats: { damage: '32/32/43', stun: 5, speed: 'Fast', critChance: '4%' },
        description: '"Fist weapon made with the venom of northern scorpions and caterpillar."',
        unlockedBy: 'Discovering Cryptic Recipe',
        materials: ['4 Northern Scorpion Chunk', '2 Scorpion Venom', '3 Spine Nub', '2 Silk Rope'], repairCost: ['1 Northern Scorpion Chunk', '1 Spine Nub']
    },
    { 
        id: 'w_weaver_daggers', name: 'Weaver Daggers', type: 'Dual Wield', sprite: 'assets/sprites/weapons/weaver_daggers.png',
        stats: { damage: '27/27/36', stun: 3, speed: 'Fast', critChance: '5%' },
        description: '"A pair of daggers made from orb weaver fangs."',
        unlockedBy: 'Analyzing Orb Weaver Fang or Reaching Brainpower Level 5',
        materials: ['2 Orb Weaver Fang', '4 Orb Weaver Chunk', '2 Silk Rope'], repairCost: ['2 Orb Weaver Fang']
    },
    { 
        id: 'w_mitey_claws', name: 'Mitey Claws', type: 'Dual Wield', sprite: 'assets/sprites/weapons/mitey_claws.png',
        stats: { damage: '22/22/28', stun: 5, speed: 'Fast', critChance: '3%' },
        description: '"The keen fangs of lawn mites fused with red ant parts into a pair of fighting claws."',
        unlockedBy: 'Analyzing Mite Fang',
        materials: ['4 Mite Fang', '3 Mite Fuzz', '4 Red Ant Part'], repairCost: ['2 Red Ant Mandibles', '1 Red Ant Part']
    },

    // STRANGER DUAL WIELD VARIANTS
    { 
        id: 'w_ice_breakers', name: 'Ice Breakers', type: 'Stranger Dual Wield', sprite: 'assets/sprites/weapons/ice_breakers.png',
        stats: { damage: '40/40/54', stun: 4, speed: 'Fast', critChance: '5%' },
        description: '"This tweaked version of the Woolly Whopperss deals devestating damage to frozen creatures."',
        unlockedBy: 'Found: Inside a cave in the Greenhouse, found in the southeastern corner of the biome behind a large pot.',
        materials: ['1 Woolly Whoppers', '1 Shivering Scale', '2 Mint Glob', '2 O.R.C. Receiver'], repairCost: ['2 Woolly Aphid Fuzz', '4 Mint Shard']
    },
    { 
        id: 'w_crimson_reapers', name: 'Crimson Reapers', type: 'Stranger Dual Wield', sprite: 'assets/sprites/weapons/crimson_reapers.png',
        stats: { damage: '35/35/47', stun: 4, speed: 'Fast', critChance: '5%' },
        description: '"This stranger-modified version of the classic Dusk Blades gives you health for your kills! How vampiric!"',
        unlockedBy: 'Found: Inside a pumpkin on the eastern-most side of the Pumpkin Patch...',
        materials: ['1 Dusk Blades', '1 Pincer Pincher', '3 Mosquito Blood Sack', '2 Unstable Goo'], repairCost: ['1 Earwig Pincer', '1 Mosquito Blood Sack']
    },

    // ==========================================
    // BOWS & ARROWS
    // ==========================================
    { 
        id: 'w_wolf_stringer', name: 'Wolf Stringer', type: 'Bow', sprite: 'assets/sprites/weapons/wolf_stringer.png',
        stats: { damageMult: '20%', stun: 0, speed: 'Average', critChance: '5%' },
        description: '"A high quality bow made of sinewy wolf spider bow."',
        unlockedBy: 'Analyzing Spider Venom',
        materials: ['2 Wolf Spider Fang', '3 Wolf Spider Chunk', '3 Silk Rope', '2 Spider Venom'], repairCost: ['2 Silk Rope']
    },
    { 
        id: 'w_cricket_lute_bow', name: 'Cricket Lute Bow', type: 'Bow', sprite: 'assets/sprites/weapons/cricket_lute_bow.png',
        stats: { damageMult: '20%', stun: 0, speed: 'Average', critChance: '4%' },
        description: '"Impress your friends with the rallying twang of this musical bow."',
        unlockedBy: 'Analyzing Cricket Drumstick or Reaching Brainpower Level 11',
        materials: ['1 Cricket Drumstick', '2 Cricket Part', '3 Lint Rope', '1 Lingonberry Leather'], repairCost: ['1 Cricket Part', '1 Lint Rope']
    },
    { 
        id: 'w_harpoon_gun', name: 'Harpoon Gun', type: 'Bow', sprite: 'assets/sprites/weapons/harpoon_gun.png',
        stats: { damageMult: '0%', stun: 0, speed: 'Slow', critChance: '3%' },
        description: '"Its unconventional firing mechanism means this ranged weapon can only be used underwater."',
        unlockedBy: 'Analyzing Raw Pond Jockey Meat or Sunken Bone',
        materials: ['1 Sunken Bone', '2 Horsetail Stem', '2 Eelgrass Strand'], repairCost: ['1 Horsetail Stem', '1 Eelgrass Strand']
    },
    { 
        id: 'w_spider_stringer', name: 'Spider Stringer', type: 'Bow', sprite: 'assets/sprites/weapons/spider_stringer.png',
        stats: { damageMult: '10%', stun: 0, speed: 'Average', critChance: '4%' },
        description: '"A high quality bow made of sinewy orb weaver chunks."',
        unlockedBy: 'Analyzing Orb Weaver Fang',
        materials: ['2 Orb Weaver Fang', '3 Orb Weaver Chunk', '3 Silk Rope'], repairCost: ['2 Silk Rope']
    },
    { 
        id: 'w_sprig_bow', name: 'Sprig Bow', type: 'Bow', sprite: 'assets/sprites/weapons/sprig_bow.png',
        stats: { damageMult: '0%', stun: 0, speed: 'Average', critChance: '3%' },
        description: '"Preform attacks from a long distance. Requires arrows to be useful."',
        unlockedBy: 'Analyzing Gnat Fuzz or Sprig',
        materials: ['3 Sprig', '4 Gnat Fuzz', '2 Crude Rope'], repairCost: ['1 Sprig']
    },

    // STRANGER BOW VARIANTS
    { 
        id: 'w_discord', name: 'Discord', type: 'Stranger Bow', sprite: 'assets/sprites/weapons/discord.png',
        stats: { damageMult: '20%', speed: 'Average', critChance: '5%' },
        description: '"A Cricket Lute Bow modified by the masked stranger to sow chaos on the battlefield."',
        unlockedBy: 'Found: On the southern side roof of the O.G.R.R. Labs.',
        materials: ['1 Cricket Lute Bow', '1 Fabulous Femur', '3 Gloom Sap', '2 O.R.C. Receiver'], repairCost: ['1 Cricket Part', '2 Gloom Sap']
    },
    { 
        id: 'w_bushwacker', name: 'Bushwacker', type: 'Stranger Bow', sprite: 'assets/sprites/weapons/bushwacker.png',
        stats: { damageMult: '15%', speed: 'Average', critChance: '4%' },
        description: '"A modified Spider Stringer, tuned to make your first shot count."',
        unlockedBy: 'Found: In the hedge along the left side of Pine Hill...',
        materials: ['1 Spider Stringer', '1 Nifty Needle', '2 O.R.C. Receiver'], repairCost: ['1 Wolf Spider Fang', '1 Silk Rope']
    },

    // GREATBOW
    { 
        id: 'w_black_fang_greatbow', name: 'Black Fang Greatbow', type: 'Greatbow', sprite: 'assets/sprites/weapons/black_fang_greatbow.png',
        stats: { chargedMult: '15%', stun: 0, speed: 'Slow', critChance: '2%' },
        description: '"A massive greatbow crafted from the dreadful fangs of Axl, the fallen tarantula."',
        unlockedBy: 'Analyzing Tarantula Fang',
        materials: ['2 Tarantula Fang', '2 Tarantula Chunk', '1 Tarantula Venom', '5 Silk Rope'], repairCost: ['2 Silk Rope']
    },

    // AMMO (Arrows & Bolts)
    { id: 'am_splinter_arrow', name: 'Splinter Arrow', type: 'Ammo', stats: { damage: 45, stun: 1 }, description: '"Sharp and deadly arrow..."', materials: ['5 Wooden Splinter', '2 Woolly Aphid Fuzz'] },
    { id: 'am_sour_arrow', name: 'Sour Arrow', type: 'Ammo', stats: { damage: 45, stun: 1 }, description: '"A simple arrow that deals sour damage..."', materials: ['10 Feather Arrow', '1 Sour Lump'] },
    { id: 'am_super_gas_arrow', name: 'Super Gas Arrow', type: 'Ammo', stats: { damage: 45, stun: 1 }, description: '"Creates an extremely woozy gas cloud..."', materials: ['5 Wooden Splinter', '1 Super Stink Sack'] },
    { id: 'am_harpoon_bolt', name: 'Harpoon Bolt', type: 'Ammo', stats: { damage: 90, stun: 1 }, description: '"A rigid bolt for use with the harpoon gun."', materials: ['1 Sunken Bone', '3 Eelgrass Strand'] },
    { id: 'am_feather_arrow', name: 'Feather Arrow', type: 'Ammo', stats: { damage: 35, stun: 1 }, description: '"A fancy arrow crafted from sleek crow feather bits..."', materials: ['1 Crow Feather Piece', '3 Silk Rope'] },
    { id: 'am_venom_arrow', name: 'Venom Arrow', type: 'Ammo', stats: { damage: 35, stun: 1 }, description: '"Deals toxic damage."', materials: ['5 Feather Arrow', '1 Spider Venom'] },
    { id: 'am_mint_arrow', name: 'Mint Arrow', type: 'Ammo', stats: { damage: 35, stun: 1 }, description: '"Deals fresh damage..."', materials: ['10 Feather Arrow', '1 Mint Shard'] },
    { id: 'am_spicy_arrow', name: 'Spicy Arrow', type: 'Ammo', stats: { damage: 35, stun: 1 }, description: '"Deals spicy damage..."', materials: ['10 Feather Arrow', '1 Spicy Shard'] },
    { id: 'am_disruptor_arrow', name: 'Disruptor Arrow', type: 'Ammo', stats: { damage: 35, stun: 5 }, description: '"Deals shock damage in a small blast area."', materials: ['5 Feather Arrow', '1 O.R.C. Receiver'] },
    { id: 'am_hearty_arrow', name: 'Hearty Arrow', type: 'Ammo', stats: { damage: 0, stun: 0 }, description: '"Showers the target with a healing splash..."', materials: ['10 Feather Arrow', '1 Mosquito Blood Sack', '1 Silk Rope'] },
    { id: 'am_cupids_arrow', name: "Cupid's Arrow", type: 'Ammo', stats: { damage: 0.01, stun: 0 }, description: '"Forces target to fight alongside you."', materials: ['5 Feather Arrow', '5 Smoochies Chunk'] },
    { id: 'am_arrow', name: 'Arrow', type: 'Ammo', stats: { damage: 25, stun: 1 }, description: '"Simple thistle prickle arrow..."', materials: ['2 Mite Fuzz', '5 Thistle Needle'] },
    { id: 'am_gas_arrow', name: 'Gas Arrow', type: 'Ammo', stats: { damage: 25, stun: 1 }, description: '"Creates a noxious gas zone..."', materials: ['5 Arrow', '1 Stinkbug Gas Sack'] },
    { id: 'am_pollen_arrow', name: 'Pollen Arrow', type: 'Ammo', stats: { damage: 25, stun: 1 }, description: '"Perfect for bringing down pesky flying critters."', materials: ['2 Pollen', '5 Arrow'] },
    
    // GREAT AMMO
    { id: 'am_great_arrow', name: 'Great Arrow', type: 'Ammo', stats: { damage: 50, stun: 6 }, description: '"An arrow made from northern scorpion chitin."', materials: ['1 Northern Scorpion Chunk', '1 Crow Feather Piece', '1 Pinecone Piece', '2 Silk Rope'] },
    { id: 'am_great_venom_arrow', name: 'Great Venom Arrow', type: 'Ammo', stats: { damage: 50, stun: 6 }, description: '"A barbed great arrow dunked in scorpion venom."', materials: ['5 Great Arrow', '1 Scorpion Venom'] },
    { id: 'am_great_spicy_arrow', name: 'Great Spicy Arrow', type: 'Ammo', stats: { damage: 50, stun: 6 }, description: '"Deals spicy damage and sizzle on hit."', materials: ['5 Great Arrow', '1 Spicy Shard'] },
    { id: 'am_great_mint_arrow', name: 'Great Mint Arrow', type: 'Ammo', stats: { damage: 50, stun: 6 }, description: '"Deals fresh damage and chill on hit."', materials: ['5 Great Arrow', '1 Mint Shard'] },
    { id: 'am_great_sour_arrow', name: 'Great Sour Arrow', type: 'Ammo', stats: { damage: 50, stun: 6 }, description: '"Deals sour damage and tang on hit."', materials: ['5 Great Arrow', '1 Sour Lump'] },
    { id: 'am_great_cupids_arrow', name: "Great Cupid's Arrow", type: 'Ammo', stats: { damage: 0.01, stun: 0 }, description: '"Forces target to fight alongside you."', materials: ['5 Great Arrow', '5 Smoochies Chunk'] },

    // ==========================================
    // CANDY STAVES
    // ==========================================
    { 
        id: 'st_acid_ruin', name: 'Acid Ruin', type: 'Candy Staff', sprite: 'assets/sprites/weapons/acid_ruin.png',
        stats: { damage: '56/56/70', stun: 1, speed: 'Slow', critChance: '3%' },
        description: '"A candy staff infused with the power of sour candy. Fires globs of tangy goo that linger and apply tang to foes."',
        unlockedBy: 'Analyzing Earwig Pincer',
        materials: ['2 Sour Glob', '2 Earwig Pincer', '4 Spiky Bur', '4 Lint Rope'], repairCost: ['4 Sour Lump']
    },
    { 
        id: 'st_scorching_orb', name: 'Scorching Orb', type: 'Candy Staff', sprite: 'assets/sprites/weapons/scorching_orb.png',
        stats: { damage: '44/44/55', stun: 1, speed: 'Slow', critChance: '3%' },
        description: '"This staff blends boiling glands with spicy candy. Launches globs of boiling goo that linger and sizzle foes."',
        unlockedBy: 'Analyzing Boiling Gland or Spicy Shard',
        materials: ['4 Spicy Shard', '3 Bombardier Part', '1 Boiling Gland'], repairCost: ['2 Spicy Shard', '1 Bombardier Part']
    },
    { 
        id: 'st_glacial_sting', name: 'Glacial Sting', type: 'Candy Staff', sprite: 'assets/sprites/weapons/glacial_sting.png',
        stats: { damage: '46/46/57', stun: 1, speed: 'Slow', critChance: '2%' },
        description: '"This staff blends a northern scorpion stinger with fresh candy. Launches globs of lingering frigid goo which chills foes."',
        unlockedBy: 'Analyzing Northern Scorpion Stinger',
        materials: ['4 Mint Shard', '1 Northern Scorpion Stinger', '2 Pine Needle'], repairCost: ['2 Mint Shard']
    },

    // STRANGER STAFF VARIANTS
    { 
        id: 'st_wither_sting', name: 'Wither Sting', type: 'Stranger Staff', sprite: 'assets/sprites/weapons/wither_sting.png',
        stats: { damage: '56/56/70', stun: 1, speed: 'Slow', critChance: '2%' },
        description: '"A modified version of the deadly Acid Ruin. The Stranger made it extra tangy!"',
        unlockedBy: 'Found: In a cave in the Fire Pit...',
        materials: ['1 Acid Ruin', '1 Pucker Charm', '3 Key Lime Chunk', '1 Hyper Beam'], repairCost: ['4 Sour Lump', '1 Key Lime Chunk']
    },
    { 
        id: 'st_rime_rend', name: 'Rime Rend', type: 'Stranger Staff', sprite: 'assets/sprites/weapons/rime_rend.png',
        stats: { damage: '58/58/73', stun: 1, speed: 'Slow', critChance: '3%' },
        description: '"Topped with the most suspicious of mints, this staff will give your foes a cold snap they may never recover from."',
        unlockedBy: 'Found: In a O.R.C. Stash cave located along the western-most tip of the border...',
        materials: ['1 Glacial Sting', '1 Suspicious Mint', '2 Gold Foil'], repairCost: ['2 Mint Shard', '1 Gold Foil']
    },
    { 
        id: 'st_heatwave', name: 'Heatwave', type: 'Stranger Staff', sprite: 'assets/sprites/weapons/heatwave.png',
        stats: { damage: '44/44/55', stun: 1, speed: 'Slow', critChance: '4%' },
        description: '"This masterwork Scorching Orb staff packs extra heat."',
        unlockedBy: 'Found: In the bottom of the center of the Fire Pit.',
        materials: ['1 Scorching Orb', '1 Blistering Boiler', '2 Unstable Goo'], repairCost: ['2 Spicy Shard', '1 Boiling Gland']
    },

    // ==========================================
    // TURRET AMMO
    // ==========================================
    { id: 'tu_splody_rounds', name: 'Splody Rounds', type: 'Turret Ammo', stats: { damage: 120, stun: 0, fireRate: '3.5 Sec' }, description: '"They explode. Nuff said."', materials: ['2 Spiky Bur', '2 Gunpowder Clump'] },
    { id: 'tu_merica_rounds', name: "'Merica Rounds", type: 'Turret Ammo', stats: { damage: 75, stun: 0, fireRate: '2 Sec' }, description: '"Force your foes to celebrate independence from their mortal coils."', materials: ['2 Acorn Shell', '2 Gunpowder Clump'] },
    { id: 'tu_pointy_rounds', name: 'Pointy Rounds', type: 'Turret Ammo', stats: { damage: 25, stun: 0, fireRate: '0.2 Sec' }, description: '"These sharp, little rounds aren\'t complicated but they get the point across."', materials: ['20 Thistle Needle', '1 Crow Feather Piece'] },
    { id: 'tu_sappy_rounds', name: 'Sappy Rounds', type: 'Turret Ammo', stats: { damage: 40, stun: 5, fireRate: '1 Sec' }, description: '"These gooey rounds are perfect for slowing down enemy crawlers..."', materials: ['5 Sap', '2 Salt Shard'] },
    { id: 'tu_burny_rounds', name: 'Burny Rounds', type: 'Turret Ammo', stats: { damage: 40, stun: 5, fireRate: '2.5 Sec' }, description: '"These hot suckers can set the ground around them ablaze."', materials: ['2 EverChar Coal Chunk', '1 Boiling Gland'] },
    { id: 'tu_rocky_rounds', name: 'Rocky Rounds', type: 'Turret Ammo', stats: { damage: 60, stun: 0, fireRate: '1 Sec' }, description: '"These pebblet rounds were smoothed with bug acid to be more aerodynamic."', materials: ['25 Pebblet', '3 Acid Gland'] },
    { id: 'tu_groundy_rounds', name: 'Groundy Rounds', type: 'Turret Ammo', stats: { damage: 30, stun: 25, fireRate: '1 Sec' }, description: '"These sticky turret rounds don\'t do a lot of damage but they can ground flying insects with ease."', materials: ['5 Web Fiber', '2 Pollen'] }
];
