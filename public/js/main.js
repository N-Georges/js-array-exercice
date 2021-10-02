let classe = ["jo", "phil", "ayahan", "georges"];
console.log(classe);
console.log(classe[3]);
console.log(classe.length);

//exo2
let nom =["georges"];
console.log(nom);
nom.push("nodari")
console.log(nom);


//3
let coding = [];
coding.push('ayhan');
console.log(`Ayhan est arrvié à 8h43`);
coding.push('bene');
console.log(`Bene est arrvié à 8h44 et met ses notes  à jours`);
coding.push('louise', 'jamila');
console.log(`louise et jamila sont arrviées à 8h45 `);
coding.push('seb', 'adame');
console.log('seb et adame sont rentré mais ils voient nicolas et decident de sortir');
console.log(coding);
coding.splice(coding.indexOf('seb'), 2)
console.log(coding);
coding.push('dawid', "malo");
coding.push('alex');
coding.splice(coding.indexOf('alex'),1);
coding.push('maxence', 'mohamed');

//Mettre en MAJ
coding[coding.indexOf('maxence')] = coding[coding.indexOf('maxence')].toUpperCase()
coding[coding.indexOf('louise')] = coding[coding.indexOf('louise')].toUpperCase()

coding.push('saliou');
coding.push('zulma', "maximilien");
coding.push('natchez');
coding.push('zak', 'ayoub');
coding.splice(coding.indexOf('zak'),2)
coding.push('achraf');
coding.push('abder');
console.log(coding);

console.log("_______");
// BONUS
let myTab = ['test', 'test2', "Aaaaaabc"];
// console.log(myTab);
// const result = myTab.filter(myTab => myTab.length > 5)
// console.log(result);
