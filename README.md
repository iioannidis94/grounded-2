# Grounded 2 - Progress Tracker & Database

Ένα static web application σχεδιασμένο για να παρακολουθείτε την πρόοδό σας στο παιχνίδι Grounded 2 (περιοχές, όπλα, πανοπλίες, Omni Tools). Σχεδιασμένο με HTML, CSS και Vanilla JavaScript.

## 📌 Χαρακτηριστικά
* **Τοπική Αποθήκευση (Local Storage):** Η πρόοδος αποθηκεύεται τοπικά στον browser.
* **100% Offline & Portable:** Δεν απαιτείται κανένας server για να τρέξει! Απλά κάνετε διπλό κλικ στο `index.html`.
* **Ανεξάρτητα Data Files:** Τα δεδομένα του παιχνιδιού είναι οργανωμένα σε ξεχωριστά `.js` αρχεία μέσα στον φάκελο `data/`.

## 📂 Αρχιτεκτονική Έργου
* `data/` -> Περιέχει αρχεία JavaScript με τα δεδομένα (π.χ., `weapons.js`). Αυτά φορτώνονται αυτόματα μέσω `<script defer>` στο HTML.
* `js/main.js` -> Αναλαμβάνει την εμφάνιση και την αποθήκευση της προόδου.
* `assets/sprites/` -> Εδώ αποθηκεύονται οι εικόνες.

## 🛠️ Πώς να προσθέσετε νέα αντικείμενα
1. Τοποθετήστε την εικόνα του όπλου στον φάκελο `assets/sprites/weapons/`.
2. Ανοίξτε το αρχείο `data/weapons.js`.
3. Προσθέστε ένα νέο αντικείμενο στο array:
   ```javascript
   { 
       id: 'w_new_sword', 
       name: 'The Epic Sword', 
       sprite: 'assets/sprites/weapons/new_sword.png',
       description: 'Περιγραφή του όπλου εδώ.'
   }
