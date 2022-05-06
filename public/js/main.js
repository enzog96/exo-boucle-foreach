//exo1
// let classe = ["tommy", "johnny", "edward", "paul", "george"];

// for( i in classe){
//     alert("Bonjour " + classe[i])
// }

//exo2
// let classe = ["tommy", "johnny", "edward", "paul", "george"];

// classe.forEach(element => console.log(element))

//exo3

// let multiplicateur = 5;
// let resulat;

// for (let index = 0 ; index <=9 ; index++){
//     let multiple = index;
//     resulat = multiplicateur * multiple;
//     console.log(multiplicateur + "x" + multiple + "=" + resulat);

// }

//exo 4

// let multiplicateur = 5;
// let resulat;

// for (let index = 0 ; index <=9 ; index +=2){
//     let multiple = index;
//     resulat = multiplicateur * multiple;
//     console.log(multiplicateur + "x" + multiple + "=" + resulat);

// }

//exo 5

// let start = 20;

// for (let i = 10; i > 0; i--){
//     console.log(start -=2)
// }

//exo 6

// let classe = ["tommy", "johnny", "edward", "paul", "george"];
// let longnames = [];

// for (let i = 0; i < classe.length; i++) {
//     if (classe[i].length > 5) {
//         longnames.push(classe[i])
//     }
// }
// console.table(longnames);
// console.table(classe);

//exo 7

// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grosseSommes = [];

// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grosseSommes.push(sommes[i])
//         sommes.splice(i, 1);
//     }
// }
// console.log(grosseSommes)
// console.log(sommes)#


//exo 8
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

for(let i = 0; i < donnees.length; i++){
    if (typeof donnees[i] === "string"){
        typeString.push(donnees[i])
        donnees.splice(i, 1)
        i--;
    }else if (typeof donnees[i] === "number"){
        typeNumber.push(donnees[i])
        donnees.splice(i, 1)
        i--;

    }else if (typeof donnees[i] === "object"){
        typeObject.push(donnees[i])
        donnees.splice(i, 1)
        i--;

    }else if (typeof donnees[i] === "boolean"){
        typeAutre.push(donnees[i])
        donnees.splice(i, 1)
        i--;
    }   
}

console.log(donnees)
console.log(typeString)
console.log(typeNumber)
console.log(typeObject)
console.log(typeAutre)
    
