// Κάνουμε Import τα δεδομένα μας
import { weapons } from '../data/weapons.js';
import { omniTools } from '../data/omni_tools.js';
// import { areas } from '../data/areas.js';
// import { armor } from '../data/armor.js';

// Φορτώνουμε την πρόοδο του χρήστη (μόνο τα IDs των αντικειμένων που έχει βρει)
// Αν δεν υπάρχει τίποτα, ξεκινάμε με ένα άδειο αντικείμενο {}
let userProgress = JSON.parse(localStorage.getItem('g2_progress')) || {};

// Συνάρτηση για αποθήκευση
function saveProgress() {
    localStorage.setItem('g2_progress', JSON.stringify(userProgress));
}

// Συνάρτηση που χτίζει το HTML για μια κατηγορία
function renderSection(dataArray, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; // Καθαρισμός

    dataArray.forEach(item => {
        // Ελέγχουμε αν ο χρήστης έχει ήδη το αντικείμενο (αν υπάρχει το ID του στο userProgress)
        const isChecked = userProgress[item.id] ? true : false;

        const div = document.createElement('div');
        div.className = `item-card ${isChecked ? 'completed' : ''}`;
        
        div.innerHTML = `
            <img src="${item.sprite}" alt="${item.name}" class="item-sprite" onerror="this.src='assets/sprites/placeholder.png'">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
        `;

        // Event Listener για το checkbox
        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                userProgress[item.id] = true; // Προσθήκη στην πρόοδο
                div.classList.add('completed');
            } else {
                delete userProgress[item.id]; // Αφαίρεση από την πρόοδο
                div.classList.remove('completed');
            }
            saveProgress();
        });

        container.appendChild(div);
    });
}

// Όταν φορτώσει η σελίδα, τρέχουμε την απεικόνιση
document.addEventListener('DOMContentLoaded', () => {
    renderSection(weapons, 'weapons-container');
    renderSection(omniTools, 'tools-container');
    // renderSection(areas, 'areas-container');
});
