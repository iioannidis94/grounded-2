// Ασφαλής φόρτωση ή δημιουργία προόδου χρήστη (localStorage)
let userProgress = JSON.parse(localStorage.getItem('g2_progress'));

if (!userProgress || typeof userProgress !== 'object') {
    userProgress = { ownedItems: {}, wishlist: {}, gatheredMaterials: {} };
} else {
    if (!userProgress.ownedItems) userProgress.ownedItems = {};
    if (!userProgress.wishlist) userProgress.wishlist = {};
    if (!userProgress.gatheredMaterials) userProgress.gatheredMaterials = {};
}

function saveProgress() {
    localStorage.setItem('g2_progress', JSON.stringify(userProgress));
}

// Router: Διαχείριση οθονών
function showView(viewId, categoryFilter = null) {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const targetView = document.getElementById(viewId);
    if (targetView) targetView.style.display = 'block';

    if (viewId === 'weapons-subcategories-view') {
        renderWeaponSubcategories();
    } else if (viewId === 'weapons-list-view' && categoryFilter) {
        renderWeaponsList(categoryFilter);
    } else if (viewId === 'armor-subcategories-view') {
        renderArmorSubcategories();
    } else if (viewId === 'armor-list-view' && categoryFilter) {
        renderArmorList(categoryFilter);
    } else if (viewId === 'dashboard-view') {
        renderDashboard();
    }
}

// 1. Dashboard: Κεντρική σελίδα & Wishlist Tracker (Ενοποιημένο για Weapons & Armors)
function renderDashboard() {
    const wishlistContainer = document.getElementById('wishlist-container');
    if (!wishlistContainer) return;
    wishlistContainer.innerHTML = '';

    // Συνενώνουμε όπλα και πανοπλίες για να τα διαβάζει όλα το wishlist
    const allItems = [
        ...(typeof weapons !== 'undefined' ? weapons : []),
        ...(typeof armor !== 'undefined' ? armor : [])
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
        wishlistContainer.innerHTML = '<p class="empty-msg">Δεν έχεις προσθέσει κάποιο αντικείμενο στο "Θέλω να το φτιάξω". Πήγαινε στα Όπλα ή στις Πανοπλίες και διάλεξε!</p>';
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
        
        card.addEventListener('click', () => {
            showView('weapons-list-view', type);
        });

        container.appendChild(card);
    });
}

// 3. Λίστα Όπλων Συγκεκριμένης Κατηγορίας
function renderWeaponsList(categoryType) {
    const container = document.getElementById('weapons-items-container');
    const titleElem = document.getElementById('weapons-category-title');
    if (!container || !titleElem) return;

    titleElem.innerText = `Κατηγορία: ${categoryType}`;
    container.innerHTML = '';

    if (typeof weapons === 'undefined' || !Array.isArray(weapons)) return;

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
            renderDashboard();
        });

        container.appendChild(card);
    });
}

// 4. Υποκατηγορίες Πανοπλιών (Armors)
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
        
        card.addEventListener('click', () => {
            showView('armor-list-view', type);
        });

        container.appendChild(card);
    });
}

// 5. Λίστα Πανοπλιών Συγκεκριμένης Κατηγορίας
function renderArmorList(categoryType) {
    const container = document.getElementById('armor-items-container');
    const titleElem = document.getElementById('armor-category-title');
    if (!container || !titleElem) return;

    titleElem.innerText = `Κατηγορία: ${categoryType}`;
    container.innerHTML = '';

    if (typeof armor === 'undefined' || !Array.isArray(armor)) return;

    const filteredArmor = armor.filter(a => {
        if (!a.type) return false;
        return a.type.trim().toLowerCase() === categoryType.trim().toLowerCase();
    });

    if (filteredArmor.length === 0) {
        container.innerHTML = `<p class="empty-msg" style="color: #ff5252;">Δεν βρέθηκαν πανοπλίες για την κατηγορία "${categoryType}".</p>`;
        return;
    }

    filteredArmor.forEach(item => {
        const isWishlisted = userProgress.wishlist[item.id] || false;
        const isOwned = userProgress.ownedItems[item.id] || false;

        const card = document.createElement('div');
        card.className = `item-card ${isOwned ? 'completed' : ''}`;
        
        let statsText = '';
        if (item.stats) {
            if (item.stats.durability) statsText += `Durability: ${item.stats.durability} | `;
            if (item.stats.defense) statsText += `Defense: ${item.stats.defense} | `;
            if (item.stats.resistance) statsText += `Resistance: ${item.stats.resistance}`;
        }

        const materialsList = (item.materials && Array.isArray(item.materials)) ? item.materials.join(', ') : 'N/A';
        const repairList = (item.repairCost && Array.isArray(item.repairCost)) ? item.repairCost.join(', ') : 'N/A';

        card.innerHTML = `
            <img src="${item.sprite || 'assets/sprites/placeholder.png'}" alt="${item.name}" onerror="this.src='assets/sprites/placeholder.png'" class="item-sprite">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="desc"><strong>Set Bonus:</strong> ${item.setBonus || 'N/A'} - ${item.description || ''}</p>
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
            userProgress.ownedItems[item.id] = e.target.checked;
            if(e.target.checked) card.classList.add('completed');
            else card.classList.remove('completed');
            saveProgress();
        });

        const wishBtn = card.querySelector('.wishlist-btn');
        wishBtn.addEventListener('click', () => {
            userProgress.wishlist[item.id] = !isWishlisted;
            saveProgress();
            renderArmorList(categoryType);
            renderDashboard();
        });

        container.appendChild(card);
    });
}

// Αρχικοποίηση εφαρμογής
document.addEventListener('DOMContentLoaded', () => {
    const navWeapons = document.getElementById('nav-weapons');
    if (navWeapons) {
        navWeapons.addEventListener('click', () => showView('weapons-subcategories-view'));
    }

    const navArmors = document.getElementById('nav-armors');
    if (navArmors) {
        navArmors.addEventListener('click', () => showView('armor-subcategories-view'));
    }

    // 👉 ΠΡΟΣΘΕΣΕ ΑΥΤΟ ΕΔΩ ΓΙΑ ΤΟΝ ΧΑΡΤΗ:
    const navMap = document.getElementById('nav-map');
    if (navMap) {
        navMap.addEventListener('click', () => showView('map-view'));
    }
    
    document.querySelectorAll('.back-to-dashboard').forEach(btn => {
        btn.addEventListener('click', () => showView('dashboard-view'));
    });

    showView('dashboard-view');
});
