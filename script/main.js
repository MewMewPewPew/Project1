//CART 263: Creative computation II 	
//This is the code for Project 1 & 2 - Digi Chiika (デジ ちいか)
//By Ash Oest O'Leary & Elle lilin Lim-Fauteux
//This Phaser part was inspired by Scott Westover and his Monster Tamer game
"use strict";

import Phaser from "./library/phaser.js";
import {SCENE_KEYS} from "./scenes/scene-keys.js";
import {PreloadScene} from "./scenes/preload-scene.js";
import { BattleScene } from "./scenes/battle-scene.js";

const game = new Phaser.Game({
    type: Phaser.CANVAS,
    pixelArt: false,
    scale: {
        parent: 'game-container',
        width: 1024,
        height: 575,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: "#000000",
    audio: {
        disableWebAudio: true,
    },
});

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
