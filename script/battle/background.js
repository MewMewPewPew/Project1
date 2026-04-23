import Phaser from '../library/phaser.js';
import { BATTLE_BACKGROUND_ASSET_KEYS } from '../assetsK/asset-keys.js';

export class Background {
    /** @type {Phaser.Scene} */
    #scene;
    /** @type {Phaser.GameObjects.Image} */
    #backgroundGameObject;

    /**
     * 
     * @param {Phaser.Scene} scene the Phaser 3 Scene the battle menu will be added
     */
    constructor(scene){
        this.#scene = scene;

        //creating and linking background to scene
        this.#backgroundGameObject = this.#scene.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST)
        .setOrigin(0).setAlpha(0);
    }

    //showing background + updating it to correct layer
    showForest(){
        this.#backgroundGameObject.setTexture(BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setAlpha(1);
    }
}