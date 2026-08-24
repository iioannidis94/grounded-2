const omniTools = [
    // --- OMNI-AXE ---
    {
        id: 'ot_omni_axe_1',
        name: 'Omni-Axe (Tier 1)',
        type: 'Omni-Axe',
        sprite: 'assets/sprites/tools/omni_axe.png',
        stats: { tier: 1, cost: 'Unlocked by default' },
        description: 'Βασικό εργαλείο κοπής για την αρχή.',
        materials: ['Unlocked by default'],
        repairCost: ['1x Pebblet', '1x Sprig']
    },
    {
        id: 'ot_omni_axe_2',
        name: 'Omni-Axe (Tier 2)',
        type: 'Omni-Axe',
        sprite: 'assets/sprites/tools/omni_axe.png',
        stats: { tier: 2, cost: '2,000 Raw Science' },
        description: 'Αναβαθμισμένο τσεκούρι για πιο σκληρά υλικά.',
        materials: ['2,000 Raw Science', '2x Roach Chunks', '2x Blueberry Leather'],
        repairCost: ['1x Roach Chunk', '1x Pupa Leather']
    },
    {
        id: 'ot_omni_axe_3',
        name: 'Omni-Axe (Tier 3)',
        type: 'Omni-Axe',
        sprite: 'assets/sprites/tools/omni_axe.png',
        stats: { tier: 3, cost: '3,000 Raw Science' },
        description: 'Προχωρημένο τσεκούρι end-game.',
        materials: ['3,000 Raw Science', '2x Praying Mantis Claw', '3x Black Ant Mandibles'],
        repairCost: ['1x Praying Mantis Claw', '1x Black Ant Mandibles']
    },
    {
        id: 'ot_omni_axe_4',
        name: 'Omni-Axe (Tier 4)',
        type: 'Omni-Axe',
        sprite: 'assets/sprites/tools/omni_axe.png',
        stats: { tier: 4, cost: '???' },
        description: 'Μυστική αναβάθμιση Tier 4.',
        materials: ['???'],
        repairCost: ['???']
    },
    {
        id: 'ot_omni_axe_5',
        name: 'Omni-Axe (Tier 5)',
        type: 'Omni-Axe',
        sprite: 'assets/sprites/tools/omni_axe.png',
        stats: { tier: 5, cost: '???' },
        description: 'Η απόλυτη αναβάθμιση τσεκουριού.',
        materials: ['???'],
        repairCost: ['???']
    },

    // --- OMNI-HAMMER ---
    {
        id: 'ot_omni_hammer_1',
        name: 'Omni-Hammer (Tier 1)',
        type: 'Omni-Hammer',
        sprite: 'assets/sprites/tools/omni_hammer.png',
        stats: { tier: 1, cost: '350 Raw Science' },
        description: 'Βασικό σφυρί για θραύση.',
        materials: ['350 Raw Science', '2x Pebblets', '1x Sap'],
        repairCost: ['1x Pebblet', '1x Sap']
    },
    {
        id: 'ot_omni_hammer_2',
        name: 'Omni-Hammer (Tier 2)',
        type: 'Omni-Hammer',
        sprite: 'assets/sprites/tools/omni_hammer.png',
        stats: { tier: 2, cost: '2,000 Raw Science' },
        description: 'Σφυρί Tier 2 για μέντες και σκληρούς πόρους.',
        materials: ['2,000 Raw Science', '1x Ladybug Head', '3x Lingonberry Leather'],
        repairCost: ['1x Ladybug Part', '1x Lingonberry Leather']
    },
    {
        id: 'ot_omni_hammer_3',
        name: 'Omni-Hammer (Tier 3)',
        type: 'Omni-Hammer',
        sprite: 'assets/sprites/tools/omni_hammer.png',
        stats: { tier: 3, cost: '3,000 Raw Science' },
        description: 'Δυνατό σφυρί end-game.',
        materials: ['3,000 Raw Science', '3x Gunpowder Clump', '1x Potato Beetle Head'],
        repairCost: ['1x Gunpowder Clump', '1x Potato Beetle Shell']
    },
    {
        id: 'ot_omni_hammer_4',
        name: 'Omni-Hammer (Tier 4)',
        type: 'Omni-Hammer',
        sprite: 'assets/sprites/tools/omni_hammer.png',
        stats: { tier: 4, cost: '???' },
        description: 'Μυστική αναβάθμιση Tier 4.',
        materials: ['???'],
        repairCost: ['???']
    },
    {
        id: 'ot_omni_hammer_5',
        name: 'Omni-Hammer (Tier 5)',
        type: 'Omni-Hammer',
        sprite: 'assets/sprites/tools/omni_hammer.png',
        stats: { tier: 5, cost: '???' },
        description: 'Η απόλυτη αναβάθμιση σφυριού.',
        materials: ['???'],
        repairCost: ['???']
    },

    // --- OMNI-SHOVEL ---
    {
        id: 'ot_omni_shovel_1',
        name: 'Omni-Shovel (Tier 1)',
        type: 'Omni-Shovel',
        sprite: 'assets/sprites/tools/omni_shovel.png',
        stats: { tier: 1, cost: '350 Raw Science' },
        description: 'Βασικό φτυάρι για χώμα και θαμμένα αντικείμενα.',
        materials: ['350 Raw Science', '1x Grass Seed', '2x Sprigs'],
        repairCost: ['1x Sprig', '1x Pebblet']
    },
    {
        id: 'ot_omni_shovel_2',
        name: 'Omni-Shovel (Tier 2)',
        type: 'Omni-Shovel',
        sprite: 'assets/sprites/tools/omni_shovel.png',
        stats: { tier: 2, cost: '3,000 Raw Science' },
        description: 'Αναβαθμισμένο φτυάρι.',
        materials: ['3,000 Raw Science', '1x Northern Scorpion Stinger', '2x Pine Needles'],
        repairCost: ['1x Northern Scorpion Stinger', '1x Pine Needle']
    },
    {
        id: 'ot_omni_shovel_3',
        name: 'Omni-Shovel (Tier 3)',
        type: 'Omni-Shovel',
        sprite: 'assets/sprites/tools/omni_shovel.png',
        stats: { tier: 3, cost: '???' },
        description: 'Μυστική αναβάθμιση Tier 3.',
        materials: ['???'],
        repairCost: ['???']
    },

    // --- OMNI-WRENCH ---
    {
        id: 'ot_omni_wrench_1',
        name: 'Omni-Wrench (Tier 1)',
        type: 'Omni-Wrench',
        sprite: 'assets/sprites/tools/omni_wrench.png',
        stats: { tier: 1, cost: '1,000 Science' },
        description: 'Βασικό εργαλείο για επιδιόρθωση/μηχανισμούς.',
        materials: ['1,000 Science', '2x Red Ant Parts', '2x Clay'],
        repairCost: ['1x Red Ant Part', '1x Clay']
    },
    {
        id: 'ot_omni_wrench_2',
        name: 'Omni-Wrench (Tier 2)',
        type: 'Omni-Wrench',
        sprite: 'assets/sprites/tools/omni_wrench.png',
        stats: { tier: 2, cost: '2,500 Science' },
        description: 'Αναβαθμισμένο γαλλικό κλειδί.',
        materials: ['2,500 Science', '3x Gum Nuggets', '2x Rust Beetle Parts'],
        repairCost: ['1x Gum Nugget', '1x Rust Beetle Parts']
    },
    {
        id: 'ot_omni_wrench_3',
        name: 'Omni-Wrench (Tier 3)',
        type: 'Omni-Wrench',
        sprite: 'assets/sprites/tools/omni_wrench.png',
        stats: { tier: 3, cost: '???' },
        description: 'Μυστική αναβάθμιση Tier 3.',
        materials: ['???'],
        repairCost: ['???']
    },
    // --- OMNI-CLIPPER ---
    {
        id: 'ot_omni_clipper_1',
        name: 'Omni-Clipper (Tier 1)',
        type: 'Omni-Clipper',
        sprite: 'assets/sprites/tools/omni_clipper.png',
        stats: { tier: 1, cost: '1,000 Science points' },
        description: 'Βασική λειτουργία κοπής. (Water Boatmen found near Skunk Pond & Bridge POIs, Wax on lilypads).',
        materials: ['1,000 Science points', '1x Water Boatman Fin', '2x Wax'],
        repairCost: ['1x Water Boatman Fin', '1x Wax']
    },
    {
        id: 'ot_omni_clipper_2',
        name: 'Omni-Clipper (Tier 2)',
        type: 'Omni-Clipper',
        sprite: 'assets/sprites/tools/omni_clipper.png',
        stats: { tier: 2, cost: '2,000 Science points' },
        description: 'Αναβάθμιση Clipper II. (Diving Bell Spiders in pond/bridge, Crow Feathers in Snack Bar, Picnic Table, Ice Cream Cart).',
        materials: ['2,000 Science points', '1x Diving Bell Spider Chunk', '2x Crow Feather Pieces'],
        repairCost: ['1x Diving Bell Spider Chunk', '1x Crow Feather Piece']
    },
    {
        id: 'ot_omni_clipper_3',
        name: 'Omni-Clipper (Tier 3)',
        type: 'Omni-Clipper',
        sprite: 'assets/sprites/tools/omni_clipper.png',
        stats: { tier: 3, cost: '3,000 Science points' },
        description: 'Προχωρημένη αναβάθμιση Clipper III.',
        materials: ['3,000 Science points', '1x Toe Biter Claw', '2x Sunken Bone'],
        repairCost: ['1x Toe Biter Claw', '1x Sunken Bone']
    }
    
];
