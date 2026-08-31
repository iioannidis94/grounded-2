// Ασφαλής φόρτωση ή δημιουργία προόδου χρήστη (localStorage)
let userProgress = JSON.parse(localStorage.getItem('g2_progress'));

if (!userProgress || typeof userProgress !== 'object') {
    userProgress = { ownedItems: {}, wishlist: {}, gatheredMaterials: {}, completedInsects: {} };
} else {
    if (!userProgress.ownedItems) userProgress.ownedItems = {};
    if (!userProgress.wishlist) userProgress.wishlist = {};
    if (!userProgress.gatheredMaterials) userProgress.gatheredMaterials = {};
    if (!userProgress.completedInsects) userProgress.completedInsects = {}; // ΝΕΟ: Για τα έντομα
}

function saveProgress() {
    localStorage.setItem('g2_progress', JSON.stringify(userProgress));
}

// Router: Διαχείριση οθονών με υποστήριξη History API & Refresh state
function showView(viewId, categoryFilter = null, pushState = true) {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const targetView = document.getElementById(viewId);
    if (targetView) targetView.style.display = 'block';

    // Φόρτωση περιεχομένου ανάλογα με το view
    if (viewId === 'weapons-subcategories-view') {
        renderWeaponSubcategories();
    } else if (viewId === 'weapons-list-view' && categoryFilter) {
        renderWeaponsList(categoryFilter);
    } else if (viewId === 'armor-subcategories-view') {
        renderArmorSubcategories();
    } else if (viewId === 'armor-list-view' && categoryFilter) {
        renderArmorList(categoryFilter);
    } else if (viewId === 'tools-subcategories-view') {
        renderToolsSubcategories();
    } else if (viewId === 'tools-list-view' && categoryFilter) {
        renderToolsList(categoryFilter);
    } else if (viewId === 'insects-list-view') {
        renderInsects(); // ΝΕΟ: Φόρτωση εντόμων
    } else if (viewId === 'dashboard-view') {
        renderDashboard();
    }

    // Αποθήκευση της κατάστασης στο ιστορικό του browser (για το refresh και τα κουμπιά ποντικιού)
    if (pushState) {
        const stateObj = { viewId, categoryFilter };
        const url = `#${viewId}${categoryFilter ? '-' + encodeURIComponent(categoryFilter) : ''}`;
        history.pushState(stateObj, '', url);
    }
}

// Ακρόαση για τα κουμπιά Μπρος / Πίσω του ποντικιού / browser
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.viewId) {
        showView(event.state.viewId, event.state.categoryFilter, false);
    } else {
        showView('dashboard-view', null, false);
    }
});

// 1. Dashboard: Κεντρική σελίδα & Wishlist Tracker (Weapons, Armors, Tools)
function renderDashboard() {
    const wishlistContainer = document.getElementById('wishlist-container');
    if (!wishlistContainer) return;
    wishlistContainer.innerHTML = '';

    const allItems = [
        ...(typeof weapons !== 'undefined' ? weapons : []),
        ...(typeof armor !== 'undefined' ? armor : []),
        ...(typeof omniTools !== 'undefined' ? omniTools : [])
    ];

    if (allItems.length === 0) {
        wishlistContainer.innerHTML = '<p class="empty-msg">Φορτώνουν τα δεδομένα...</p>';
        return;
    }

    let hasWishlistItems = false;

    allItems.forEach(item => {
        if (userProgress.wishlist && userProgress.wishlist[item.id]) {
            hasWishlistItems = true;
            const card = document.createElement('div');
            card.className = 'wishlist-card';
            
            let materialsHTML = '<ul>';
            if (item.materials && Array.isArray(item.materials)) {
                item.materials.forEach((mat, index) => {
                    const matKey = `${item.id}_mat_${index}`;
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
                <div class="wishlist-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <h3 style="margin: 0;">🎯 ${item.name || 'Άγνωστο Αντικείμενο'}</h3>
                    <button class="remove-wishlist-btn" data-id="${item.id}" style="background-color: #d32f2f; padding: 4px 8px; font-size: 0.75rem;">❌ Διαγραφή</button>
                </div>
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

            card.querySelector('.remove-wishlist-btn').addEventListener('click', (e) => {
                const itemId = e.target.dataset.id;
                delete userProgress.wishlist[itemId];
                
                Object.keys(userProgress.gatheredMaterials).forEach(key => {
                    if (key.startsWith(`${itemId}_mat_`)) {
                        delete userProgress.gatheredMaterials[key];
                    }
                });

                saveProgress();
                renderDashboard();
            });

            wishlistContainer.appendChild(card);
        }
    });

    if (!hasWishlistItems) {
        wishlistContainer.innerHTML = '<p class="empty-msg">Δεν έχεις προσθέσει κάποιο αντικείμενο στο "Θέλω να το φτιάξω". Πήγαινε στις κατηγορίες και διάλεξε!</p>';
    }
}

// 2. Υποκατηγορίες Όπλων
function renderWeaponSubcategories() {
    const container = document.getElementById('subcategories-container');
    if (!container) return;
    container.innerHTML = '';
    if (typeof weapons === 'undefined' || !Array.isArray(weapons)) return;

    const types = [...new Set(weapons.map(w => w.type).filter(Boolean))];
    types.forEach(type => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h3>⚔️ ${type}</h3><p>Δες τα όπλα της κατηγορίας</p>`;
        card.addEventListener('click', () => showView('weapons-list-view', type));
        container.appendChild(card);
    });
}

// 3. Λίστα Όπλων
function renderWeaponsList(categoryType) {
    const container = document.getElementById('weapons-items-container');
    const titleElem = document.getElementById('weapons-category-title');
    if (!container || !titleElem) return;

    titleElem.innerText = `Κατηγορία: ${categoryType}`;
    container.innerHTML = '';
    if (typeof weapons === 'undefined' || !Array.isArray(weapons)) return;

    const filteredWeapons = weapons.filter(w => w.type && w.type.trim().toLowerCase() === categoryType.trim().toLowerCase());

    filteredWeapons.forEach(weapon => {
        const isWishlisted = userProgress.wishlist[weapon.id] || false;
        const isOwned = userProgress.ownedItems[weapon.id] || false;

        const card = document.createElement('div');
        card.className = `item-card ${isOwned ? 'completed' : ''}`;
        
        let statsText = '';
        if (weapon.stats) {
            if (weapon.stats.damage) statsText += `Damage: ${weapon.stats.damage} | `;
            if (weapon.stats.blockReduction) statsText += `Block: ${weapon.stats.blockReduction} | `;
            if (weapon.stats.stun !== undefined) statsText += `Stun: ${weapon.stats.stun} | `;
            if (weapon.stats.speed) statsText += `Speed: ${weapon.stats.speed}`;
        }

        card.innerHTML = `
            <img src="${weapon.sprite || 'assets/sprites/placeholder.png'}" alt="${weapon.name}" onerror="this.src='assets/sprites/placeholder.png'" class="item-sprite">
            <div class="item-info">
                <h3>${weapon.name}</h3>
                <p class="desc">${weapon.description || ''}</p>
                <p class="stats"><strong>Stats:</strong> ${statsText || 'N/A'}</p>
                <p class="materials"><strong>Υλικά:</strong> ${weapon.materials ? weapon.materials.join(', ') : 'N/A'}</p>
                <p class="repair"><strong>Repair:</strong> ${weapon.repairCost ? weapon.repairCost.join(', ') : 'N/A'}</p>
            </div>
            <div class="actions">
                <label><input type="checkbox" class="owned-chk" ${isOwned ? 'checked' : ''}> Το έχω</label>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}">${isWishlisted ? '⭐ Στο Wishlist' : '➕ Θέλω να το φτιάξω'}</button>
            </div>
        `;

        card.querySelector('.owned-chk').addEventListener('change', (e) => {
            userProgress.ownedItems[weapon.id] = e.target.checked;
            e.target.checked ? card.classList.add('completed') : card.classList.remove('completed');
            saveProgress();
        });

        card.querySelector('.wishlist-btn').addEventListener('click', () => {
            userProgress.wishlist[weapon.id] = !isWishlisted;
            saveProgress();
            renderWeaponsList(categoryType);
            renderDashboard();
        });

        container.appendChild(card);
    });
}

// 4. Υποκατηγορίες Πανοπλιών
function renderArmorSubcategories() {
    const container = document.getElementById('armor-subcategories-container');
    if (!container) return;
    container.innerHTML = '';
    if (typeof armor === 'undefined' || !Array.isArray(armor)) return;

    const types = [...new Set(armor.map(a => a.type).filter(Boolean))];
    types.forEach(type => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h3>🛡️ ${type}</h3><p>Δες τα σετ πανοπλιών</p>`;
        card.addEventListener('click', () => showView('armor-list-view', type));
        container.appendChild(card);
    });
}

// 5. Λίστα Πανοπλιών
function renderArmorList(categoryType) {
    const container = document.getElementById('armor-items-container');
    const titleElem = document.getElementById('armor-category-title');
    if (!container || !titleElem) return;

    titleElem.innerText = `Κατηγορία: ${categoryType}`;
    container.innerHTML = '';
    if (typeof armor === 'undefined' || !Array.isArray(armor)) return;

    const filteredArmor = armor.filter(a => a.type && a.type.trim().toLowerCase() === categoryType.trim().toLowerCase());

    filteredArmor.forEach(item => {
        const isWishlisted = userProgress.wishlist[item.id] || false;
        const isOwned = userProgress.ownedItems[item.id] || false;

        const card = document.createElement('div');
        card.className = `item-card ${isOwned ? 'completed' : ''}`;
        
        let statsText = '';
        if (item.stats) {
            if (item.stats.durability) statsText += `Durability: ${item.stats.durability} | `;
            if (item.stats.defense) statsText += `Defense: ${item.stats.defense}`;
        }

        card.innerHTML = `
            <img src="${item.sprite || 'assets/sprites/placeholder.png'}" alt="${item.name}" onerror="this.src='assets/sprites/placeholder.png'" class="item-sprite">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="desc"><strong>Set Bonus:</strong> ${item.setBonus || 'N/A'}</p>
                <p class="stats"><strong>Stats:</strong> ${statsText || 'N/A'}</p>
                <p class="materials"><strong>Υλικά:</strong> ${item.materials ? item.materials.join(', ') : 'N/A'}</p>
            </div>
            <div class="actions">
                <label><input type="checkbox" class="owned-chk" ${isOwned ? 'checked' : ''}> Το έχω</label>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}">${isWishlisted ? '⭐ Στο Wishlist' : '➕ Θέλω να το φτιάξω'}</button>
            </div>
        `;

        card.querySelector('.owned-chk').addEventListener('change', (e) => {
            userProgress.ownedItems[item.id] = e.target.checked;
            e.target.checked ? card.classList.add('completed') : card.classList.remove('completed');
            saveProgress();
        });

        card.querySelector('.wishlist-btn').addEventListener('click', () => {
            userProgress.wishlist[item.id] = !isWishlisted;
            saveProgress();
            renderArmorList(categoryType);
            renderDashboard();
        });

        container.appendChild(card);
    });
}

// 6. Υποκατηγορίες Omni Tools
function renderToolsSubcategories() {
    const container = document.getElementById('tools-subcategories-container');
    if (!container) return;
    container.innerHTML = '';
    if (typeof omniTools === 'undefined' || !Array.isArray(omniTools)) return;

    const types = [...new Set(omniTools.map(t => t.type).filter(Boolean))];
    types.forEach(type => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h3>🛠️ ${type}</h3><p>Δες τα Tiers του εργαλείου</p>`;
        card.addEventListener('click', () => showView('tools-list-view', type));
        container.appendChild(card);
    });
}

// 7. Λίστα Omni Tools
function renderToolsList(categoryType) {
    const container = document.getElementById('tools-items-container');
    const titleElem = document.getElementById('tools-category-title');
    if (!container || !titleElem) return;

    titleElem.innerText = `Κατηγορία: ${categoryType}`;
    container.innerHTML = '';
    if (typeof omniTools === 'undefined' || !Array.isArray(omniTools)) return;

    const filteredTools = omniTools.filter(t => t.type && t.type.trim().toLowerCase() === categoryType.trim().toLowerCase());

    filteredTools.forEach(tool => {
        const isWishlisted = userProgress.wishlist[tool.id] || false;
        const isOwned = userProgress.ownedItems[tool.id] || false;

        const card = document.createElement('div');
        card.className = `item-card ${isOwned ? 'completed' : ''}`;

        card.innerHTML = `
            <img src="${tool.sprite || 'assets/sprites/placeholder.png'}" alt="${tool.name}" onerror="this.src='assets/sprites/placeholder.png'" class="item-sprite">
            <div class="item-info">
                <h3>${tool.name}</h3>
                <p class="desc">${tool.description || ''}</p>
                <p class="stats"><strong>Κόστος Science:</strong> ${tool.stats ? tool.stats.cost : 'N/A'}</p>
                <p class="materials"><strong>Υλικά:</strong> ${tool.materials ? tool.materials.join(', ') : 'N/A'}</p>
            </div>
            <div class="actions">
                <label><input type="checkbox" class="owned-chk" ${isOwned ? 'checked' : ''}> Το έχω</label>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}">${isWishlisted ? '⭐ Στο Wishlist' : '➕ Θέλω να το φτιάξω'}</button>
            </div>
        `;

        card.querySelector('.owned-chk').addEventListener('change', (e) => {
            userProgress.ownedItems[tool.id] = e.target.checked;
            e.target.checked ? card.classList.add('completed') : card.classList.remove('completed');
            saveProgress();
        });

        card.querySelector('.wishlist-btn').addEventListener('click', () => {
            userProgress.wishlist[tool.id] = !isWishlisted;
            saveProgress();
            renderToolsList(categoryType);
            renderDashboard();
        });

        container.appendChild(card);
    });
}

// 8. Λίστα Εντόμων (ΝΕΟ)
function renderInsects() {
    const container = document.getElementById('insects-items-container');
    if (!container) return;
    container.innerHTML = ''; 

    if (typeof allGroundedInsects === 'undefined' || !Array.isArray(allGroundedInsects)) {
        container.innerHTML = '<p class="empty-msg">Τα δεδομένα των εντόμων δεν βρέθηκαν. Σιγουρέψου ότι φορτώνεις το insects.js στο HTML σου!</p>';
        return;
    }

    allGroundedInsects.forEach((insect) => {
        // Ελέγχουμε αν το έχουμε σώσει (από το κοινό g2_progress)
        const isCompleted = userProgress.completedInsects[insect.name] || false;
        
        const card = document.createElement('div');
        card.className = `item-card ${isCompleted ? 'completed' : ''}`;
        
        // Χρωματίζουμε το όνομα της κατηγορίας ανάλογα με την επικινδυνότητα
        let catColor = '#81c784'; // Default (Neutral/Harmless)
        if (insect.category === 'Hostile' || insect.category === 'O.R.C.' || insect.category === 'O.G.R.R.') catColor = '#e57373';
        if (insect.category === 'Named') catColor = '#ffb74d';

        card.innerHTML = `
            <div class="item-info">
                <h3>${insect.name} <span style="font-size: 0.8rem; color: ${catColor};">(${insect.category})</span></h3>
                <p class="materials"><strong>Drops:</strong> ${insect.drops.join(', ')}</p>
            </div>
            <div class="actions">
                <label>
                    <input type="checkbox" class="insect-chk" ${isCompleted ? 'checked' : ''}>
                    Το βρήκα
                </label>
            </div>
        `;

        card.querySelector('.insect-chk').addEventListener('change', (e) => {
            userProgress.completedInsects[insect.name] = e.target.checked;
            e.target.checked ? card.classList.add('completed') : card.classList.remove('completed');
            saveProgress();
        });

        container.appendChild(card);
    });
}

// Αρχικοποίηση εφαρμογής κατά τη φόρτωση
document.addEventListener('DOMContentLoaded', () => {
    const navWeapons = document.getElementById('nav-weapons');
    if (navWeapons) navWeapons.addEventListener('click', () => showView('weapons-subcategories-view'));

    const navArmors = document.getElementById('nav-armors');
    if (navArmors) navArmors.addEventListener('click', () => showView('armor-subcategories-view'));

    const navTools = document.getElementById('nav-tools');
    if (navTools) navTools.addEventListener('click', () => showView('tools-subcategories-view'));

    const navAreas = document.getElementById('nav-areas');
    if (navAreas) navAreas.addEventListener('click', () => showView('map-view'));

    // ΝΕΟ: Προσθήκη Event Listener για την κάρτα των εντόμων στο Dashboard
    const navInsects = document.getElementById('nav-insects');
    if (navInsects) navInsects.addEventListener('click', () => showView('insects-list-view'));
    
    document.querySelectorAll('.back-to-dashboard').forEach(btn => {
        btn.addEventListener('click', () => showView('dashboard-view'));
    });

    // Έλεγχος αν υπάρχει αποθηκευμένο state στο ιστορικό κατά το refresh
    if (history.state && history.state.viewId) {
        showView(history.state.viewId, history.state.categoryFilter, false);
    } else {
        // Εναλλακτικά, έλεγχος με βάση το URL hash αν έγινε απευθείας refresh
        const hash = window.location.hash.replace('#', '');
        if (hash.startsWith('weapons-list-')) {
            const cat = decodeURIComponent(hash.replace('weapons-list-', ''));
            showView('weapons-list-view', cat, false);
        } else if (hash.startsWith('armor-list-')) {
            const cat = decodeURIComponent(hash.replace('armor-list-', ''));
            showView('armor-list-view', cat, false);
        } else if (hash.startsWith('tools-list-')) {
            const cat = decodeURIComponent(hash.replace('tools-list-', ''));
            showView('tools-list-view', cat, false);
        } else if (hash === 'insects-list-view') {
            showView('insects-list-view', null, false);
        } else if (hash && document.getElementById(hash)) {
            showView(hash, null, false);
        } else {
            showView('dashboard-view', null, false);
        }
    }
});
