// "use strict";
//file to name identify and name assets

// import { DOM } from "phaser";

export const BATTLE_BACKGROUND_ASSET_KEYS = Object.freeze({
    FOREST: "FOREST",
    WONDERSEA: "WONDERSEA",
});
// let User_petName = document.getElementById("vPetNameDisplay").textContent;
export let User_petName = Object({ 
    name: "your pet",
});

export const MONSTER_ASSET_KEYS = Object({
    IGUANIGNITE: " pet ", //`${document.getElementById("vPetNameDisplay").textContent}` // User_petName ,//"Digi-Pet",//`${vPetNameValue}` `${vPetNamePhas3r}`, //"IGUANIGNITE",
    // IGUANIGNITE: document.getElementById("vPetNameDisplay").textContent ,
    // U_PET_NAME: `${vPetNamePhas3r}`, let vPetNameValue;  
    // U_PET_NAME: `${User_petName}` + " ",
    CARNODUSK: "Baqua beast", //
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

export const AUDIO_ASSET_KEYS = Object.freeze({
    BATTLE: "BATTLE",
});