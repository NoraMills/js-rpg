"use strict"

let hercules = [100, 10, "heAtk1", "heAtk2", "heAtk3"];
let lion = [100, 10, "lionAtk1", "lionAtk2", "lionAtk3"];
let hyrdra = [100, 10, "hyAtk1", "hyAtk2", "hyAtk3"];
let cerberus =[];

let gameOver = false; //game state

function story(){
    console.log("The sage begins...")
    console.log("You are Hercules, the greatest of the Greek Heroes! You have been tasked by King Eurystheus to slay the vicious Nemean Lion, defeat the impossible nine-headed Lernaean Hydra, and capture the guard dog of the underworld—Cerberus.");
}


function startAdventure(){  //first choice
    let action = prompt ("Will you face the vicious Nemean Lion (enter 1), or will you attempt the impossible and defeat the Lernaean Hydra (enter 2)?");
    validateAction(action);
    if (action == 1){
        battle(lion);
    } else {
        battle(hydra);
    }
}

function validateAction(action){ //validate input from startAdventure (or any other functions that call this one)
    while (action < 1 || action > 2) {
        action = prompt("Will you face the vicious Nemean Lion (enter 1), or will you attempt the impossible and defeat the Lernaean Hydra (enter 2)?");
    }
}

function attackChoice(fight){ //player chooses attack being used by Hercules
    console.log("Enter flavor text, etc here");
    let attack = prompt("Which attack will you use? Enter 1 for heAtk1, 2 for heAtk2, 3 for heAtk3");
}

function validateAtk(attack){ //validating attackChoice
    while (attack < 1 || > 3){
        let attack = prompt("Which attack will you use? Enter 1 for heAtk1, 2 for heAtk2, 3 for heAtk3");    
    }
}

function runGame(){
    story();
    startAdventure();
}

