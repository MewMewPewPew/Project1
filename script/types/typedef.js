import Phaser from "../library/phaser";

/**
 * @typedef BattleMonsterConfig
 * @type {Object}
 * @property {Phaser.Scene} scene
 * @property {Monster} monsterDetails
 * @property {number} [scaleHealthBarBackgroundImageByY=1]
 */

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

/**
 * @typedef Coordinate
 * @type {Object}
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef Attack
 * @type {Object}
 * @property {number} id
 * @property {number} idAttackB
 * @property {string} name
 * @property {string} animationName
 */
//  * @property {import('../battle/attacks/attack-keys.js').AttackKeys} animationName the animation key that is tied to this attack, will be used to play the attack animation when attack is used.
// */

/**
 * @typedef Animation
 * @type {object}
 * @property {string} key
 * @property {number[]} [frames]
 * @property {number} frameRate
 * @property {number} repeat
 * @property {number} delay
 * @property {boolean} yoyo
 * @property {string} assetKey
 */

/**
 * @typedef Item
 * @type {object}
 * @property {number} id the unique id of this item
 * @property {string} name the name of this item
 * @property {ItemEffect} effect the effect of using this item
 * @property {string} description the description of the item to show in the inventory bag
 */