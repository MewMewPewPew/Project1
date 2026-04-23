//battle menu options
/**
 * @typedef {keyof typeof BATTLE_MENU_OPTIONS} BattleMenuOptions
 */

//options + text for each option in battle menu
/** @enum {BattleMenuOptions} */
export const BATTLE_MENU_OPTIONS = Object.freeze({
    FIGHT: 'FIGHT', //fighting opponent
    SWITCH: 'WONDER', //switch monsters
    ITEM: 'CAKE', //use an item
    FLEE: 'FLEE', //leaving battle
});

/**
 * @typedef {keyof typeof ATTACK_MOVE_OPTIONS} AttackMoveOptions
 */

//choose among provided movesets for monster
/** @enum {AttackMoveOptions} */
export const ATTACK_MOVE_OPTIONS = Object.freeze({
    MOVE_1: 'MOVE_1',
    MOVE_2: 'MOVE_2',
    MOVE_3: 'MOVE_3',
    MOVE_4: 'MOVE_4',
});

/**
 * @typedef {keyof typeof ACTIVE_BATTLE_MENU} ActiveBattleMenu
 */

/** @enum {ActiveBattleMenu} */
export const ACTIVE_BATTLE_MENU = Object.freeze({
    BATTLE_MAIN: 'BATTLE_MAIN',
    BATTLE_MOVE_SELECT: 'BATTLE_MOVE_SELECT',
    BATTLE_ITEM: 'BATTLE_ITEM',
    BATTLE_SWITCH: 'BATTLE_SWITCH',
    BATTLE_FLEE: 'BATTLE_FLEE',
});