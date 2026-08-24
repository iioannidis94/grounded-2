// Δεν χρειαζόμαστε import πια! 
// Τα weapons και omniTools είναι ήδη διαθέσιμα από τα προηγούμενα scripts.

// Φορτώνουμε την πρόοδο του χρήστη (μόνο τα IDs των αντικειμένων)
let userProgress = JSON.parse(localStorage.getItem('g2_progress')) || {};

function saveProgress() {
    localStorage.setItem('g2_progress', JSON.stringify(userProgress));
}

function renderSection(dataArray, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; 

    dataArray.forEach(item => {
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

        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                userProgress[item.id] = true;
                div.classList.add('completed');
            } else {
                delete userProgress[item.id];
                div.classList.remove('completed');
            }
            saveProgress();
        });

        container.appendChild(div);
    });
}

// Τρέχουμε την απεικόνιση
document.addEventListener('DOMContentLoaded', () => {
    // Επειδή βάλαμε defer στο HTML, τα δεδομένα είναι σίγουρα έτοιμα εδώ
    renderSection(weapons, 'weapons-container');
    renderSection(omniTools, 'tools-container');
});
