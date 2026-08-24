
const armor = [
    // --- FIGHTER ARMOR ---
    {
        id: 'arm_toe_biter',
        name: 'Toe Biter Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/toe_biter.png',
        stats: { durability: 105, defense: 'Head/Legs: 10, Body: 20', resistance: 'Head/Legs: 7.25%, Body: 14.5%' },
        setBonus: 'Barmy Buccaneer',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '1x Toe Biter Head', '3x Pupa Leather', '2x Crushed Quartz', 
            '6x Toe Biter Shell', '4x Pupa Leather', '3x Crushed Quartz', 
            '2x Toe Biter Claw', '2x Pupa Leather', '6x Pond Moss'
        ],
        repairCost: ['Toe Biter Shell', 'Pupa Leather', 'Crushed Quartz', 'Pond Moss']
    },
    {
        id: 'arm_snail_shell',
        name: 'Snail Shell Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/snail_shell.png',
        stats: { durability: 100, defense: 'Head/Legs: 8.5, Body: 17', resistance: 'Head/Legs: 7%, Body: 14%' },
        setBonus: 'Retaliation',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '3x Garden Snail Fragment', '2x Garden Snail Eyestalk', '2x Lingonberry Leather',
            '5x Garden Snail Fragment', '5x Acid Gland', '4x Lingonberry Leather',
            '4x Garden Snail Fragment', '2x Silk Rope', '3x Lingonberry Leather'
        ],
        repairCost: ['Garden Snail Eyestalk', 'Garden Snail Slime', 'Silk Rope', 'Lingonberry Leather']
    },
    {
        id: 'arm_potato_beetle',
        name: 'Potato Beetle Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/potato_beetle.png',
        stats: { durability: 100, defense: 'Head/Legs: 8.5, Body: 17', resistance: 'Head/Legs: 7%, Body: 14%' },
        setBonus: 'Spud Bud',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '1x Potato Beetle Head', '2x Lint Rope', '3x Black Ant Part',
            '5x Potato Beetle Shell', '3x Pinecone Piece', '3x Bug Rubber',
            '4x Potato Beetle Shell', '3x Lint Rope', '2x Bug Rubber'
        ],
        repairCost: ['Potato Beetle Shell', 'Lint Rope', 'Pinecone Piece', 'Bug Rubber']
    },
    {
        id: 'arm_earwig',
        name: 'Earwig Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/earwig.png',
        stats: { durability: 100, defense: 'Head/Legs: 8.5, Body: 17', resistance: 'Head/Legs: 7%, Body: 14%' },
        setBonus: 'Swarm Crusher',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '1x Earwig Head', '4x Earwig Part', '2x Woolly Aphid Fuzz',
            '5x Earwig Part', '4x Woolly Aphid Fuzz', '3x Lint Rope',
            '2x Earwig Pincer', '2x Raw Woolly Aphid Meat', '4x Lint Rope'
        ],
        repairCost: ['Earwig Part', 'Woolly Aphid Fuzz', 'Lint Rope']
    },
    {
        id: 'arm_wyrm_slayer',
        name: 'Wyrm Slayer Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/wyrm_slayer.png',
        stats: { durability: 100, defense: 'Head/Legs: 8.5, Body: 17', resistance: 'Head/Legs: 7%, Body: 14%' },
        setBonus: 'Searing Strikes',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '2x Ashen Leather', '2x Lizard Horn', '1x Searing Stone',
            '4x Ashen Leather', '3x Spicy Glob', '3x Lint Rope',
            '2x Ashen Leather', '2x Lizard Scale', '2x Lint Rope'
        ],
        repairCost: ['Lizard Horn', 'Lizard Scale', 'Spicy Shard', 'Lint Rope']
    },
    {
        id: 'arm_shell_shocker',
        name: 'Shell Shocker Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/shell_shocker.png',
        stats: { durability: 100, defense: 'Head/Legs: 8.5, Body: 17', resistance: 'Head/Legs: 7%, Body: 14%' },
        setBonus: 'Power Surge',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '3x Calcined Snail Fragment', '2x Garden Snail Eyestalk', '2x Chrysalis Leather',
            '5x Calcined Snail Fragment', '4x Pond Moss', '4x Chrysalis Leather',
            '4x Calcined Snail Fragment', '2x Bug Rubber', '3x Chrysalis Leather'
        ],
        repairCost: ['Calcined Snail Fragment', 'Chrysalis Leather']
    },
    {
        id: 'arm_ladybug',
        name: 'Ladybug Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/ladybug.png',
        stats: { durability: 90, defense: 'Head/Legs: 6.5, Body: 13', resistance: 'Head/Legs: 6.75%, Body: 13.5%' },
        setBonus: 'Scarlet Embrace',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '1x Ladybug Head', '2x Ladybug Part', '3x Blueberry Leather',
            '2x Flower Petal', '4x Ladybug Part', '4x Blueberry Leather',
            '5x Ladybug Part', '4x Blueberry Leather', '4x Flower Petal'
        ],
        repairCost: ['Ladybug Part', 'Blueberry Leather']
    },
    {
        id: 'arm_roach',
        name: 'Roach Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/roach.png',
        stats: { durability: 90, defense: 'Head/Legs: 6.5, Body: 13', resistance: 'Head/Legs: 6.75%, Body: 13.5%' },
        setBonus: 'Adaptive Resistance',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '1x Roach Head', '1x Stinkbug Gas Sack', '2x Roach Chunk',
            '5x Roach Chunk', '4x Boiling Gland', '3x Bug Rubber',
            '4x Roach Chunk', '2x Blue Butterfly Scales', '2x Bug Rubber'
        ],
        repairCost: ['Roach Chunk', 'Bug Rubber']
    },
    {
        id: 'arm_acorn',
        name: 'Acorn Armor Set',
        type: 'Fighter Armor',
        sprite: 'assets/sprites/armor/acorn.png',
        stats: { durability: 80, defense: 'Head/Legs: 4, Body: 8', resistance: 'Head/Legs: 6.5%, Body: 13%' },
        setBonus: 'Hardy Defense',
        description: 'Class Fighter Armor: Thirds Hits in a Combo Deal 1 Extra Stun.',
        materials: [
            '1x Acorn Shell', '1x Acorn Top', '5x Mite Fuzz',
            '4x Acorn Shell', '5x Clover Leaf', '4x Crude Rope',
            '2x Acorn Shell', '4x Sap', '2x Crude Rope'
        ],
        repairCost: ['Acorn Shell', 'Crude Rope']
    },

    // --- MAGE ARMOR ---
    {
        id: 'arm_rusty',
        name: 'Rusty Armor Set',
        type: 'Mage Armor',
        sprite: 'assets/sprites/armor/rusty.png',
        stats: { durability: 70, defense: 'Head/Legs: 7, Body: 14', resistance: 'Head/Legs: 3.25%, Body: 6.5%' },
        setBonus: 'Puck Luck',
        description: 'Class Mage Armor: 9% Stamina Usage Reduction with Staves',
        materials: [
            '2x Sour Glob', '2x Rust Beetle Parts', '2x Lingonberry Leather',
            '2x Boiling Gland', '4x Rust Beetle Parts', '5x Chrysalis Leather',
            '4x Rust Beetle Parts', '3x Lint Rope', '4x Chrysalis Leather'
        ],
        repairCost: ['Rust Beetle Parts', 'Lingonberry Leather', 'Chrysalis Leather']
    },
    {
        id: 'arm_serpent',
        name: 'Serpent Armor Set',
        type: 'Mage Armor',
        sprite: 'assets/sprites/armor/serpent.png',
        stats: { durability: 70, defense: 'Head/Legs: 7, Body: 14', resistance: 'Head/Legs: 3.25%, Body: 6.5%' },
        setBonus: 'Devastation',
        description: 'Class Mage Armor: 9% Stamina Usage Reduction with Staves',
        materials: [
            '1x Snake Scale', '2x Firefly Shell', '3x Glow Goo',
            '3x Snake Scale', '3x Firefly Shell', '3x Lint Rope',
            '2x Snake Scale', '2x Firefly Shell', '4x Chrysalis Leather'
        ],
        repairCost: ['Snake Scale', 'Glow Goo', 'Firefly Shell', 'Lint']
    },
    {
        id: 'arm_sizzling',
        name: 'Sizzling Armor Set',
        type: 'Mage Armor',
        sprite: 'assets/sprites/armor/sizzling.png',
        stats: { durability: 60, defense: 'Head/Legs: 5, Body: 10', resistance: 'Head/Legs: 3%, Body: 6%' },
        setBonus: 'Whizzy Wizard',
        description: 'Class Mage Armor: 9% Stamina Usage Reduction with Staves',
        materials: [
            '3x Bombardier Part', '1x Boiling Gland', '2x Lingonberry Leather',
            '4x Bombardier Part', '5x Spicy Shard', '5x Lingonberry Leather',
            '4x Bombardier Part', '3x Silk Rope', '4x Lingonberry Leather'
        ],
        repairCost: ['Bombardier Part', 'Lingonberry Leather']
    },
    {
        id: 'arm_butterfly',
        name: 'Butterfly Armor Set',
        type: 'Mage Armor',
        sprite: 'assets/sprites/armor/butterfly.png',
        stats: { durability: 60, defense: 'Head/Legs: 5, Body: 10', resistance: 'Head/Legs: 3%, Body: 6%' },
        setBonus: 'Chilly Dodge',
        description: 'Class Mage Armor: 9% Stamina Usage Reduction with Staves',
        materials: [
            '4x Blue Butterfly Scales', '4x Blue Butterfly Chunk', '5x Mint Shard',
            '2x Blue Butterfly Wing', '4x Blue Butterfly Scales', '5x Blueberry Leather',
            '5x Blue Butterfly Chunk', '3x Silk Rope', '4x Blueberry Leather'
        ],
        repairCost: ['Blue Butterfly Chunk', 'Blue Butterfly Scales', 'Blueberry Leather']
    },

    // --- RANGER ARMOR ---
    {
        id: 'arm_nightstalker',
        name: 'Nightstalker Armor Set',
        type: 'Ranger Armor',
        sprite: 'assets/sprites/armor/nightstalker.png',
        stats: { durability: 90, defense: 'Head/Legs: 8, Body: 16', resistance: 'Head/Legs: 5.75%, Body: 11.5%' },
        setBonus: 'Dreadful Duo',
        description: 'Class Ranger Armor: 5% Increased Weakpoint Damage',
        materials: [
            '2x Tarantula Chunk', '2x Tarantula Fang', '1x Tarantula Venom',
            '3x Tarantula Chunk', '3x Tarantula Talon', '10x Silk Rope',
            '2x Tarantula Chunk', '2x Tarantula Talon', '8x Pinecone Piece'
        ],
        repairCost: ['Tarantula Chunk', 'Silk Rope', 'Tarantula Talon']
    },
    {
        id: 'arm_wasp',
        name: 'Wasp Armor Set',
        type: 'Ranger Armor',
        sprite: 'assets/sprites/armor/wasp.png',
        stats: { durability: 90, defense: 'Head/Legs: 8, Body: 16', resistance: 'Head/Legs: 5.75%, Body: 11.5%' },
        setBonus: 'Perfect Combo',
        description: 'Class Ranger Armor: 5% Increased Weakpoint Damage',
        materials: [
            '2x Wasp Shell', '1x Chrysalis Leather', '3x Lint Rope',
            '5x Wasp Shell', '4x Wasp Leg', '2x Chrysalis Leather',
            '4x Wasp Shell', '2x Wasp Leg', '4x Lint Rope'
        ],
        repairCost: ['Wasp Shell', 'Lint Rope', 'Chrysalis Leather', 'Wasp Leg']
    },
    {
        id: 'arm_cricket',
        name: 'Cricket Armor Set',
        type: 'Ranger Armor',
        sprite: 'assets/sprites/armor/cricket.png',
        stats: { durability: 90, defense: 'Head/Legs: 8, Body: 16', resistance: 'Head/Legs: 5.75%, Body: 11.5%' },
        setBonus: 'Healthy Harmony',
        description: 'Class Ranger Armor: 5% Increased Weakpoint Damage',
        materials: [
            '1x Cricket Head', '3x Chrysalis Leather', '1x Flower Petal',
            '5x Cricket Part', '5x Chrysalis Leather', '2x Lint Rope',
            '3x Cricket Part', '2x Cricket Drumstick', '3x Lint Rope'
        ],
        repairCost: ['Cricket Part', 'Chrysalis Leather', 'Lint Rope']
    },
    {
        id: 'arm_bee',
        name: 'Bee Armor Set',
        type: 'Ranger Armor',
        sprite: 'assets/sprites/armor/bee.png',
        stats: { durability: 80, defense: 'Head/Legs: 6, Body: 12', resistance: 'Head/Legs: 5.5%, Body: 11%' },
        setBonus: 'Apex Pollinator',
        description: 'Class Ranger Armor: 5% Increased Weakpoint Damage',
        materials: [
            '4x Bee Fuzz', '1x Bee Stinger', '2x Blueberry Leather',
            '5x Bee Fuzz', '3x Silk Rope', '4x Blueberry Leather',
            '4x Bee Fuzz', '4x Silk Rope', '4x Blueberry Leather'
        ],
        repairCost: ['Bee Fuzz', 'Blueberry Leather']
    },
    {
        id: 'arm_grub',
        name: 'Grub Armor Set',
        type: 'Ranger Armor',
        sprite: 'assets/sprites/armor/grub.png',
        stats: { durability: 70, defense: 'Head/Legs: 3.5, Body: 7', resistance: 'Head/Legs: 5.25%, Body: 10.5%' },
        setBonus: 'Lone Ranger',
        description: 'Class Ranger Armor: 5% Increased Weakpoint Damage',
        materials: [
            '3x Grub Hide', '2x Raw Gnat Meat', '2x Gnat Fuzz',
            '4x Grub Hide', '2x Grub Sludge', '4x Dry Grass Chunk',
            '3x Grub Hide', '4x Dry Grass Chunk', '2x Gnat Fuzz'
        ],
        repairCost: ['Grub Hide', 'Gnat Fuzz', 'Grub Sludge']
    },

    // --- ROGUE ARMOR ---
    {
        id: 'arm_striped',
        name: 'Striped Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/striped.png',
        stats: { durability: 85, defense: 'Head/Legs: 9, Body: 18', resistance: 'Head/Legs: 4.75%, Body: 9.5%' },
        setBonus: 'Finale Force',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '4x Scorpion Venom', '2x Striped Scorpion Stinger', '3x Pupa Leather',
            '5x Striped Scorpion Chunk', '2x Striped Scorpion Pincer', '4x Lingonberry Leather',
            '4x Striped Scorpion Chunk', '5x Lint Rope', '2x Pupa Leather'
        ],
        repairCost: ['Striped Scorpion Chunk', 'Lingonberry Leather', 'Lint Rope']
    },
    {
        id: 'arm_wolf',
        name: 'Wolf Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/wolf.png',
        stats: { durability: 80, defense: 'Head/Legs: 7.5, Body: 15', resistance: 'Head/Legs: 4.5%, Body: 9%' },
        setBonus: 'Deadly Venom',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '2x Wolf Spider Fang', '3x Spider Venom', '2x Lint',
            '5x Wolf Spider Chunk', '4x Silk Rope', '4x Lint',
            '4x Wolf Spider Chunk', '3x Silk Rope', '2x Blueberry Leather'
        ],
        repairCost: ['Wolf Spider Chunk', 'Lint', 'Blueberry Leather']
    },
    {
        id: 'arm_praying_mantis',
        name: 'Praying Mantis Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/praying_mantis.png',
        stats: { durability: 80, defense: 'Head/Legs: 7.5, Body: 15', resistance: 'Head/Legs: 4.5%, Body: 9%' },
        setBonus: 'Critical Recovery',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '1x Praying Mantis Head', '2x Stinkbug Gas Sack', '2x Black Ant Part',
            '1x Praying Mantis Claw', '5x Praying Mantis Chunk', '4x Crow Feather Piece',
            '1x Praying Mantis Claw', '4x Lint Rope', '2x Black Ant Part'
        ],
        repairCost: ['Praying Mantis Chunk', 'Black Ant Part', 'Crow Feather Piece', 'Lint Rope']
    },
    {
        id: 'arm_black_ant',
        name: 'Black Ant Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/black_ant.png',
        stats: { durability: 80, defense: 'Head/Legs: 7.5, Body: 15', resistance: 'Head/Legs: 4.5%, Body: 9%' },
        setBonus: 'Formic Retort',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '1x Black Ant Head', '3x Black Ant Part', '1x Lint Rope',
            '6x Black Ant Part', '2x Black Ant Mandibles', '3x Lint Rope',
            '5x Black Ant Part', '4x Chrysalis Leather', '2x Lint Rope'
        ],
        repairCost: ['Black Ant Head', 'Black Ant Part', 'Black Ant Mandibles', 'Bee Fuzz']
    },
    {
        id: 'arm_weaver',
        name: 'Weaver Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/weaver.png',
        stats: { durability: 70, defense: 'Head/Legs: 5.5, Body: 11', resistance: 'Head/Legs: 4.25%, Body: 8.5%' },
        setBonus: 'Critical Momentum',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '3x Orb Weaver Chunk', '2x Orb Weaver Fang', '2x Spine Nub',
            '5x Orb Weaver Chunk', '4x Silk Rope', '2x Spine Nub',
            '4x Orb Weaver Chunk', '3x Silk Rope', '2x Spine Nub'
        ],
        repairCost: ['Orb Weaver Chunk', 'Spine Nub', 'Silk Rope']
    },
    {
        id: 'arm_northern',
        name: 'Northern Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/northern.png',
        stats: { durability: 70, defense: 'Head/Legs: 5.5, Body: 11', resistance: 'Head/Legs: 4.25%, Body: 8.5%' },
        setBonus: 'Crippling Strike',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '3x Scorpion Venom', '2x Northern Scorpion Chunk', '2x Blueberry Leather',
            '2x Northern Scorpion Stinger', '5x Northern Scorpion Chunk', '4x Blueberry Leather',
            '3x Silk Rope', '4x Northern Scorpion Chunk', '3x Blueberry Leather'
        ],
        repairCost: ['Scorpion Venom', 'Blueberry Leather', 'Northern Scorpion Chunk', 'Northern Scorpion Stinger']
    },
    {
        id: 'arm_red_ant',
        name: 'Red Ant Armor Set',
        type: 'Rogue Armor',
        sprite: 'assets/sprites/armor/red_ant.png',
        stats: { durability: 60, defense: 'Head/Legs: 3, Body: 6', resistance: 'Head/Legs: 4%, Body: 8%' },
        setBonus: 'Strength in Numbers',
        description: 'Class Rogue Armor: 3% Increased Critical Hit Chance on Third Hit of Combo',
        materials: [
            '1x Red Ant Head', '3x Red Ant Part', '5x Mite Fuzz',
            '5x Red Ant Part', '2x Acid Gland', '2x Mite Fuzz',
            '6x Red Ant Part', '2x Crude Rope', '4x Mite Fuzz'
        ],
        repairCost: ['Red Ant Part', 'Mite Fuzz']
    },

    // --- CLASSLESS ARMOR ---
    {
        id: 'arm_koi_scale',
        name: 'Koi Scale Armor Set',
        type: 'Classless Armor',
        sprite: 'assets/sprites/armor/koi_scale.png',
        stats: { durability: 80, defense: 'Head/Legs: 7.5, Body: 17', resistance: 'Head/Legs: 4.5%, Body: 9%' },
        setBonus: 'Bubble Struggle',
        description: 'Classless Armor with Veteran Diver & Swim Speed boosts.',
        materials: [
            '1x Gill Tube', '2x Koi Fish Scale', '2x Wax', '3x Silk Rope',
            '5x Koi Fish Scale', '3x Eelgrass Strand', '3x Horsetail Stem', '2x Sunken Bone',
            '1x Fin Flops', '3x Koi Fish Scale', '2x Horsetail Stem', '3x Sunken Bone'
        ],
        repairCost: ['Koi Fish Scale', 'Eelgrass Strand']
    },
    {
        id: 'arm_diving',
        name: 'Diving Armor Set',
        type: 'Classless Armor',
        sprite: 'assets/sprites/armor/diving.png',
        stats: { durability: 90, defense: 'Head/Legs: 8, Body: 16', resistance: 'Head/Legs: 5.75%, Body: 11.5%' },
        setBonus: 'Under Pressure',
        description: 'Classless Deep Sea Diving Armor.',
        materials: [
            '3x Quartz Glass', '2x Toe Biter Shell', '2x Cattail Fluff', '2x Wax',
            '5x Chrysalis Leather', '2x Quartz Glass', '5x Cattail Fluff', '4x Lint Rope',
            '4x Chrysalis Leather', '2x Fire Brick', '4x Toe Biter Shell', '3x Wax'
        ],
        repairCost: ['Quartz Glass', 'Toe Biter Shell', 'Chrysalis Leather']
    },
    {
        id: 'arm_fuzzy',
        name: 'Fuzzy Armor Set',
        type: 'Classless Armor',
        sprite: 'assets/sprites/armor/fuzzy.png',
        stats: { durability: 80, defense: 'Head/Legs: 6, Body: 12', resistance: 'Head/Legs: 5.5%, Body: 11%' },
        setBonus: 'Exertion',
        description: 'Classless Warm Fuzzy Armor.',
        materials: [
            '3x Bee Fuzz', '2x Gnat Fuzz', '2x Lingonberry Leather', '2x Silk Rope',
            '4x Bee Fuzz', '3x Milkweed Tuft', '4x Lingonberry Leather', '3x Silk Rope',
            '3x Bee Fuzz', '2x Bug Rubber', '3x Lingonberry Leather', '2x Silk Rope'
        ],
        repairCost: ['Bee Fuzz', 'Lingonberry Leather', 'Bug Rubber']
    },
    {
        id: 'arm_clover',
        name: 'Clover Armor Set',
        type: 'Classless Armor',
        sprite: 'assets/sprites/armor/clover.png',
        stats: { durability: 40, defense: 'Head/Legs: 1.5, Body: 5', resistance: 'Head/Legs: 1.25%, Body: 2.5%' },
        setBonus: 'Moist',
        description: 'Classless Starter Clover Armor.',
        materials: [
            '4x Clover Leaf', '1x Crude Rope',
            '6x Clover Leaf', '3x Crude Rope',
            '3x Clover Leaf', '2x Crude Rope', '2x Sprig'
        ],
        repairCost: ['Clover Leaf']
    }
];
