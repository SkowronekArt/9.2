var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    concatAllNames = femaleNames.concat(maleNames),
    newName = 'Marian';

console.log(concatAllNames);

if (concatAllNames.indexOf(newName) === -1) {
    var pushAllNames = concatAllNames.push(newName);
} else {
    alert('Nie było nic o indexOf() póki co, ale…');
}

console.log('Nie było nic o indexOf() póki co, ale…');
console.log(concatAllNames);
console.log(pushAllNames);