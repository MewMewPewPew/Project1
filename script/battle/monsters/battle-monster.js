// Class for all creatures

import { BATTLE_ASSET_KEYS, 
    MONSTER_ASSET_KEYS,
    User_petName,} from "../../assetsK/asset-keys.js";
import { DataUtils } from "../../utils/data-utils.js";
import { HealthBar } from "../ui/health-bar.js";


export class BattleMonster{
    /** @protected @type {Phaser.Scene} */
    _scene;
    /** @protected @type {import("../../types/typedef.js").Monster} */
    _monsterDetails;
    /** @protected @type {HealthBar} */
    _healthBar;
    /** @protected @type {Phaser.GameObjects.Sprite |Phaser.GameObjects.Image} */ //Phaser.GameObjects.Image | | undefined
    _phaserGameObject;
    /** @protected @type {number} */
    _currentHealth;
    /** @protected @type {number} */
    _maxHealth;
    /** @protected @type {import("../../types/typedef.js").Attack} */
    _monsterAttacks;
    /** @protected @type {Phaser.GameObjects.Container} */
    _phaserHealthBarGameContainer;

    /**
     * @param {import("../../types/typedef.js").BattleMonsterConfig} config 
     * @param {import("../../types/typedef.js").Coordinate} position 
     */
    constructor(config, position){
        this._scene = config.scene;
        this._monsterDetails = config.monsterDetails;
        this._currentHealth = this._monsterDetails.currentHp;
        this._maxHealth = this._monsterDetails.maxHp;
        this._monsterAttacks = [];
    // this._monsterDetails.assetKey.freeze = false; //trying smt 
        this._phaserGameObject = this._scene.add.sprite(
            position.x, 
            position.y, 
            this._monsterDetails.assetKey, 
            //this._monsterDetails.assetFrame || 20 
            )
            //.setScale(4)
            ;

        this.#createHealthBarComponents(config.scaleHealthBarBackgroundImageByY);

        this._monsterDetails.attackIds.forEach((attackId) => {
            const monsterAttack = DataUtils.getMonsterAttack(this._scene, attackId);
            if(monsterAttack !== undefined){
                this._monsterAttacks.push(monsterAttack);
            }
        });
    }

// function for the animation to play 
playAnimationPlayer() {
    this._phaserGameObject.play(`playerPetAnim`);
}
playAnimationEnemy() {
    this._phaserGameObject.play(`attackerPetAnim`); //won't play? 
    // this._phaserGameObject.play(`attackerPetAnim2`); //won't play? 
} 


    /** @type {boolean} */
    get isFainted(){
        return this._currentHealth <= 0;
    }

    /** @type {string} */
    get name(){
        return this._monsterDetails.name;
    }
    
    /** @type {import("../../types/typedef.js").Attack[]} */
    get attacks(){
        return [...this._monsterAttacks];
    }

    /** @type {number} */
    get baseAttack(){
        return this._monsterDetails.baseAttack;
    }

    /** @type {number} */
    get level(){
        return this._monsterDetails.currentLevel;
    }

    /**
     * 
     * @param {number} damage 
     * @param {() => void} [callback]
     */
    takeDamage(damage, callback){
        //update current monster health and animate hp bar
        this._currentHealth -= damage;
        if(this._currentHealth < 0){
            this._currentHealth = 0;
        }
        this._healthBar.setMeterPercentageAnimated(this._currentHealth / this._maxHealth, {callback});
    }
    // text style determined below
    #createHealthBarComponents(scaleHealthBarBackgroundImageByY = 1){
        this._healthBar = new HealthBar(this._scene, 34, 37);
        //const enemyHealthBar = this.#activeEnemyMonster._healthBar;
       
        const monsterNameGameText = this._scene.add.text(30, 20, 
            this.name, {
                color: "#000000",
                fontSize: "32px",
                fontFamily: `gothicFont`,
            }
        );

        const healthBarBgImage = this._scene.add.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
        .setOrigin(0).setScale(1, scaleHealthBarBackgroundImageByY)

        const monsterHealthBarLevelText = this._scene.add.text(monsterNameGameText.width + 35, 22, `L${this.level}`, {
            color: "#88ff84",
            fontSize: "28px",
            fontFamily: `gothicFont`,
        });

        const monsterHpText = this._scene.add.text(30, 55, "HP", {
            color: "#fb84ff",
            fontSize: "20px",
            fontStyle: "italic",
            fontFamily: `gothicFont`,
        });

        //container for enemy health
        this._phaserHealthBarGameContainer = this._scene.add.container(0, 0, [
            healthBarBgImage,
            monsterNameGameText,
            this._healthBar.container,
            monsterHealthBarLevelText,
            monsterHpText,
        ]);
    }
}