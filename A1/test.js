// DO NOT REMOVE OR MODIFY THIS
const { toCamelCase, avengersAssemble, getWinner, findAvenger, fingerSnaps } = require('./a1');

// To test your functions, call the functions here
// example: 
console.log(toCamelCase(["Iron man", "sPiDeRmaN", "White Wolf", "thE QuiCk brown fox juMps over a laZY Dog"]))

avengersAssemble(["Wanda", "Nebula", "Shuri", "Wasp", "Captain Marvel"])
avengersAssemble(["Spiderman", "Thor", "Hulk"])


// example:
let thor = {name:"Thor", attack:100, hp:500}
let mysterio = {name:"Thor", attack:100, hp:15}
let ironman = {name:"Ironman", attack:120, hp:14}
let spiderman = {name:"Spiderman", attack:60, hp:2}

let winner = getWinner(thor, mysterio)
console.log(`The winner is: ${winner}`)
winner = findAvenger("spiderman", [thor, mysterio, ironman, spiderman])
console.log(`We found ${winner.name}`)
console.log(fingerSnaps([thor, mysterio, ironman, spiderman]))