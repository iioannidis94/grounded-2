// Τα αρχικά μας δεδομένα (μπορείς να προσθέσεις όσα θες εδώ)
const defaultData = {
    areas: [
        { id: 'a1', name: 'The New Porch', checked: false },
        { id: 'a2', name: 'Under the Shed', checked: false }
    ],
    weapons: [
        { id: 'w1', name: 'Pebblet Spear Tier II', checked: false },
        { id: 'w2', name: 'Mint Mace', checked: false }
    ],
    armor: [
        { id: 'ar1', name: 'Acorn Armor Set', checked: false },
        { id: 'ar2', name: 'Ladybug Armor Set', checked: false }
    ]
};

// Φόρτωση δεδομένων από το Cache (localStorage) ή φόρτωση των default
let gameData = JSON.parse(localStorage.getItem('grounded2_data')) || defaultData;

// Συνάρτηση που "ζωγραφίζει" τις λίστες στο HTML
function renderLists() {
    renderCategory('areas', 'areas-list');
    renderCategory('weapons', 'weapons-list');
    renderCategory('armor', 'armor-list');
}

function renderCategory(categoryKey, elementId) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = ''; // Καθαρίζουμε τη λίστα πριν την ξαναγράψουμε

    gameData[categoryKey].forEach(item => {
        const li = document.createElement('li');
        if (item.checked) li.classList.add('completed');

        li.innerHTML = `
            <input type="checkbox" id="${item.id}" ${item.checked ? 'checked' : ''}>
            <label for="${item.id}" style="cursor:pointer; width:100%;">${item.name}</label>
        `;

        // Όταν αλλάζει το checkbox, αποθηκεύουμε την αλλαγή
        li.querySelector('input').addEventListener('change', (e) => {
            item.checked = e.target.checked;
            saveData();
            renderLists();
        });

        listElement.appendChild(li);
    });
}

// Αποθήκευση στο localStorage
function saveData() {
    localStorage.setItem('grounded2_data', JSON.stringify(gameData));
}

// Κουμπί Reset (αν θέλετε να ξεκινήσετε από την αρχή)
document.getElementById('resetBtn').addEventListener('click', () => {
    if(confirm('Είσαι σίγουρος ότι θες να σβήσεις όλη την πρόοδο;')) {
        localStorage.removeItem('grounded2_data');
        gameData = JSON.parse(JSON.stringify(defaultData)); // Επαναφορά
        renderLists();
    }
});

// Τρέχουμε την συνάρτηση όταν φορτώσει η σελίδα
renderLists();
