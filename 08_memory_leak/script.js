/*
Memory heap a memory leak

Memory leak
• únik paměti
• nastává, když tato data zůstanou v heapu, i když už nejsou potřebná, 
  kvůli nechtěným referencím – což může postupně vyčerpávat paměť a 
  zpomalovat aplikaci.
*/

// Špatný přístup ke garbage collectoru
const names = ['David', 'Lea', 'Jan'];

for (let i = 2; i > 1; i++) {
    names.push('Dejv');
    // Dochází k memory leaku - přeteče
}