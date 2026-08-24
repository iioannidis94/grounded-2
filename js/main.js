// Δεδομένα προόδου χρήστη (localStorage)
let userProgress = JSON.parse(localStorage.getItem('g2_progress')) || {
    ownedItems: {},     // ID όπλου -> true (αν το έχεις βρει/φτιάξει)
    wishlist: {},       // ID όπλου -> true (αν το έχεις βάλει στο "Θέλω να το φτιάξω")
    gatheredMaterials: {} // 'weaponId_materialName' -> true (checkboxes για υλικά)
};

function saveProgress() {
    localStorage.setItem('g2_progress', JSON.stringify(userProgress));
}

// Router: Διαχείριση οθονών
function showView(viewId, categoryFilter = null) {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById(viewId).style.display = 'block';

    if (viewId === 'weapons-subcategories-view') {
        renderWeaponSubcategories();
    } else if (viewId === 'weapons-list-view' && categoryFilter) {
        renderWeaponsList(categoryFilter);
    } else if (viewId === 'dashboard-view') {
        renderDashboard();
    }
}

// 1. Dashboard: Κεντρική σελίδα & Wishlist Tracker
function renderDashboard() {
    const wishlistContainer = document.getElementById('wishlist-container');
    wishlistContainer.innerHTML = '';

    let hasWishlistItems = false;

    weapons.forEach(weapon => {
        if (userProgress.wishlist[weapon.id]) {
            hasWishlistItems = true;
            const card = document.createElement('div');
            card.className = 'wishlist-card';
            
            let materialsHTML = '<ul>';
            // Έλεγχος ασφαλείας: Αν υπάρχουν υλικά
            if (weapon.materials && Array.isArray(weapon.materials)) {
                weapon.materials.forEach((mat, index) => {
                    const matKey = `${weapon.id}_mat_${index}`;
                    const isGathered = userProgress.gatheredMaterials[matKey] || false;
                    materialsHTML += `
                        <li>
                            <label>
                                <input type="checkbox" class="mat-checkbox" data-key="${matKey}" ${isGathered ? 'checked' : ''}>
                                ${mat}
                            </label>
                        </li>`;
                });
            }
            materialsHTML += '</ul>';

            card.innerHTML = `
                <h3>🎯 ${weapon.name || 'Άγνωστο Όπλο'}</h3>
                <p>Υλικά που απαιτούνται:</p>
                ${materialsHTML}
            `;

            card.querySelectorAll('.mat-checkbox').forEach(chk => {
                chk.addEventListener('change', (e) => {
                    const key = e.target.dataset.key;
                    userProgress.gatheredMaterials[key] = e.target.checked;
                    saveProgress();
                });
            });

            wishlistContainer.appendChild(card);
        }
    });

    if (!hasWishlistItems) {
        wishlistContainer.innerHTML = '<p class="empty-msg">Δεν έχεις προσθέσει κάποιο όπλο στο "Θέλω να το φτιάξω". Πήγαινε στα Όπλα και διάλεξε!</p>';
    }
}

// 2. Υποκατηγορίες Όπλων (Cards: One-Handed, Two-Handed, Staves κλπ)
function renderWeaponSubcategories() {
    const container = document.getElementById('subcategories-container');
    container.innerHTML = '';

    // Παίρνουμε μοναδικά types από τα όπλα
    const types = [...new Set(weapons.map(w => w.type))];

    types.forEach(type => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h3>⚔️ ${type}</h3><p>Δες τα όπλα της κατηγορίας</p>`;
        
        card.addEventListener('click', () => {
            showView('weapons-list-view', type);
        });

        container.appendChild(card);
    });
}

// 3. Λίστα Όπλων Συγκεκριμένης Κατηγορίας
function renderWeaponsList(categoryType) {
    const container = document.getElementById('weapons-items-container');
    document.getElementById('weapons-category-title').innerText = `Κατηγορία: ${categoryType}`;
    container.innerHTML = '';

    const filteredWeapons = weapons.filter(w => {
        if (!w.type) return false;
        return w.type.trim().toLowerCase() === categoryType.trim().toLowerCase();
    });

    if (filteredWeapons.length === 0) {
        container.innerHTML = `<p class="empty-msg" style="color: #ff5252;">Δεν βρέθηκαν αντικείμενα για την κατηγορία "${categoryType}".</p>`;
        return;
    }

    filteredWeapons.forEach(weapon => {
        const isWishlisted = userProgress.wishlist[weapon.id] || false;
        const isOwned = userProgress.ownedItems[weapon.id] || false;

        const card = document.createElement('div');
        card.className = `item-card ${isOwned ? 'completed' : ''}`;
        
        // Ασφαλής ανάγνωση stats
        let statsText = '';
        if (weapon.stats) {
            if (weapon.stats.damage) statsText += `Damage: ${weapon.stats.damage} | `;
            if (weapon.stats.blockReduction) statsText += `Block Reduction: ${weapon.stats.blockReduction} | `;
            if (weapon.stats.damageMult) statsText += `Damage Mult: ${weapon.stats.damageMult} | `;
            if (weapon.stats.chargedMult) statsText += `Charged Mult: ${weapon.stats.chargedMult} | `;
            if (weapon.stats.stun !== undefined) statsText += `Stun: ${weapon.stats.stun} | `;
            if (weapon.stats.speed) statsText += `Speed: ${weapon.stats.speed} | `;
            if (weapon.stats.fireRate) statsText += `Fire Rate: ${weapon.stats.fireRate}`;
        }

        // Ασφαλής ανάγνωση materials και repairCost
        const materialsList = (weapon.materials && Array.isArray(weapon.materials)) ? weapon.materials.join(', ') : 'N/A';
        const repairList = (weapon.repairCost && Array.isArray(weapon.repairCost)) ? weapon.repairCost.join(', ') : 'N/A';

        card.innerHTML = `
            <img src="${weapon.sprite || 'assets/sprites/placeholder.png'}" alt="${weapon.name}" onerror="this.src='assets/sprites/placeholder.png'" class="item-sprite">
            <div class="item-info">
                <h3>${weapon.name}</h3>
                <p class="desc">${weapon.description || ''}</p>
                <p class="stats"><strong>Stats:</strong> ${statsText || 'N/A'}</p>
                <p class="materials"><strong>Υλικά:</strong> ${materialsList}</p>
                <p class="repair"><strong>Repair Cost:</strong> ${repairList}</p>
            </div>
            <div class="actions">
                <label><input type="checkbox" class="owned-chk" ${isOwned ? 'checked' : ''}> Το έχω</label>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}">${isWishlisted ? '⭐ Στο Wishlist' : '➕ Θέλω να το φτιάξω'}</button>
            </div>
        `;

        card.querySelector('.owned-chk').addEventListener('change', (e) => {
            userProgress.ownedItems[weapon.id] = e.target.checked;
            if(e.target.checked) card.classList.add('completed');
            else card.classList.remove('completed');
            saveProgress();
        });

        const wishBtn = card.querySelector('.wishlist-btn');
        wishBtn.addEventListener('click', () => {
            userProgress.wishlist[weapon.id] = !isWishlisted;
            saveProgress();
            renderWeaponsList(categoryType);
        });

        container.appendChild(card);
    });
}

// Αρχικοποίηση εφαρμογής
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav-weapons').addEventListener('click', () => showView('weapons-subcategories-view'));
    document.querySelectorAll('.back-to-dashboard').forEach(btn => {
        btn.addEventListener('click', () => showView('dashboard-view'));
    });

    showView('dashboard-view');
});
