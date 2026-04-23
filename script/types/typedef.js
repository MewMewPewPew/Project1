import Phaser from "../library/phaser";

//for battle monster scene
/**
 * @typedef BattleMonsterConfig
 * @type {Object}
 * @property {Phaser.Scene} scene
 * @property {Monster} monsterDetails
 * @property {number} [scaleHealthBarBackgroundImageByY=1]
 */

//for the monsters themselves
/**
 * @typedef Monster
 * @type {Object}
 * @property {string} name
 * @property {string} assetKey
 * @property {number} [assetFrame=0] //[assetFrame=0]
 * @property {number} currentLevel
 * @property {number} maxHp
 * @property {number} currentHp
 * @property {number} baseAttack
 * @property {number[]} attackIds
 */

//monster's placement
/**
 * @typedef Coordinate
 * @type {Object}
 * @property {number} x
 * @property {number} y
 */

//for the monsters' attacks
/**
 * @typedef Attack
 * @type {Object}
 * @property {number} id
 * @property {string} name
 * @property {string} animationName
 */