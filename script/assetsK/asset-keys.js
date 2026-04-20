// "use strict";
//file to name identify and name assets

// import { DOM } from "phaser";

export const BATTLE_BACKGROUND_ASSET_KEYS = Object.freeze({
    FOREST: "FOREST", //this one is the wonder sea
    WONDERSEA: "WONDERSEA", // this one is the forest lol
});

//Tried here to name the player pet in different manner for a goal I couldn't meet YET !
// let User_petName = document.getElementById("vPetNameDisplay").textContent;
export let User_petName = Object({ 
    name: "your pet", //earth + the one used to name
});

export const MONSTER_ASSET_KEYS = Object({
    IGUANIGNITE: " pet ", //earth + the one used for sprite 
    //`${document.getElementById("vPetNameDisplay").textContent}` // User_petName ,//"Digi-Pet",//`${vPetNameValue}` `${vPetNamePhas3r}`, //"IGUANIGNITE",
    // IGUANIGNITE: document.getElementById("vPetNameDisplay").textContent ,
    // U_PET_NAME: `${vPetNamePhas3r}`, let vPetNameValue;  
    CARNODUSK: "Baqua beast", //water
    FIRE: "Fuergo beast",
    
})

// // console.log(named === true);
// updateVPetNameInput(MONSTER_ASSET_KEYS);
;

export const BATTLE_ASSET_KEYS = Object.freeze({
    HEALTH_BAR_BACKGROUND: "HEALTH_BAR_BACKGROUND",
});

export const HEALTH_BAR_ASSET_KEYS = Object.freeze({
    LEFT_CAP: "LEFT_CAP",
    MIDDLE: "MIDDLE",
    RIGHT_CAP: "RIGHT_CAP",
    LEFT_CAP_SHADOW: "LEFT_CAP_SHADOW",
    MIDDLE_SHADOW: "MIDDLE_SHADOW",
    RIGHT_CAP_SHADOW: "RIGHT_CAP_SHADOW",
});

export const UI_ASSET_KEYS = Object.freeze({
    CURSOR: "CURSOR",
});

export const DATA_ASSET_KEYS = Object.freeze({
    ATTACKS: "ATTACKS",
});
