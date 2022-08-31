const toCamelCase = (names) => {
    let size = names.length
    let heroesArr = names;
    let heroes;
    for (let i = 0; i < size; i++){
        //loops through all names
        //assign array of strings into temp array "heroes"
        heroes = names[i].toLowerCase() 

        // looks for the space char within the temp variable "heroes"
        for(let j = 0; j < heroes.length; j++){
            if(heroes.charAt(j) === " ")
            {
                //stores the chars defined by slice
                let temp = heroes.slice(0, j) 
                let temp1 = heroes.slice(j).trim() //trims leading space
                let temp2 = temp1.slice(1)
                let temp3 = temp1[0].toUpperCase()
                heroes = temp + temp3 + temp2 //concats
            }
        }
        heroesArr[i] = heroes
    }
    return heroesArr;
}

const avengersAssemble = (names) => {
    let oneLineString = ""
    for (let i = 0; i < names.length - 1; i++){
        oneLineString += names[i] + ", "
    }
    console.log(`${oneLineString}and ${names[names.length - 1]} arrived. Avengers, ASSEMBLE!`);
}

const getWinner = (a1, a2) => {
    let winner = null;
    if(a1.attack > a2.attack){
        winner = a1.name
    }
    else if(a1.attack < a2.attack){
        winner = a2.name
    }
    else{
        let stop = 0;
        // cycles through the letters until a winner is determined
        for(let i = 0; i < a1.name.length && stop === 0; i++){
            let letter1 = a1.name[i]
            let letter2 = a2.name[i]
            if(letter1 < letter2){
                winner = a1.name
                stop = 1
            }
            else if (letter1 > letter2){
                winner = a2.name
                stop = 1
            }
        }
        if (winner == null){ // if names and power are identical
            winner = a1.name // the first parameter wins (but both names are the same anyways)
        }
    }
    return winner
}

const findAvenger = (name, avengersList) => {
    let match = {};
    for(let i = 0; i < avengersList.length; i++){
        if(avengersList[i].name == name){
            match = avengersList[i]
        }
    }
    return match;
}

const fingerSnaps = (avengersList) => {
    for(let i = 0; i < avengersList.length; i++){
        if(avengersList[i].hp >= 15){
            avengersList[i].hp -= 15
        }
        // if hp is less than 15, subtract by hp to go to 0
        else if(avengersList[i].hp < 15){ 
            avengersList[i].hp -= avengersList[i].hp
        }
    }
    return avengersList
}

// DO NOT REMOVE OR MODIFY THE FOLLOWING CODE
exports.avengersAssemble = avengersAssemble
exports.toCamelCase = toCamelCase 
exports.getWinner = getWinner
exports.findAvenger = findAvenger
exports.fingerSnaps = fingerSnaps