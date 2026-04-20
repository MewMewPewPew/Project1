import {
    BATTLE_ASSET_KEYS,
    BATTLE_BACKGROUND_ASSET_KEYS,
    DATA_ASSET_KEYS,
    HEALTH_BAR_ASSET_KEYS,
    MONSTER_ASSET_KEYS,
    User_petName,
    UI_ASSET_KEYS,
} from "../assets/asset-keys.js";
import Phaser from "../library/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
            //active: true, //another way to start scene
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }
    
    //lifecycle events
    //init() {console.log("init");}

    //preloading images
    preload() {
        //console.log("preload");
        console.log(`[${PreloadScene.name}:preload] invoked`);

        const monsterTamerAssetPath = "assets/images/monster-tamer";
        const kenneysAssetPath = "assets/images/kenneys-assets";

        const soundPath = "../../assets/sound"; 
        //battle backgrounds
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
            `${monsterTamerAssetPath}/battle-backgrounds/rainbow-background.png`
        );
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.WONDERSEA,
            `${monsterTamerAssetPath}/battle-backgrounds/forest-background2.png`
        );

        //battle assets
        this.load.image(
            BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
            `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`
        );

        //health bar assets
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`
        );

        //health bar SHADOW assets
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP_SHADOW,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_shadow_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE_SHADOW,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_shadow_mid.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP_SHADOW,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_shadow_left.png`
        );

        //monster assets
        this.load.spritesheet( 
            MONSTER_ASSET_KEYS.CARNODUSK, //water type
            `${monsterTamerAssetPath}/monsters/babyegg_water_emo.png`, { //water
            frameWidth: 320,
            frameHeight: 320,
            endFrame: 56,
        }
        );
        this.load.spritesheet( 
            MONSTER_ASSET_KEYS.FIRE,
            `${monsterTamerAssetPath}/monsters/babyegg_fire_emo.png`, { //fire
            frameWidth: 320,
            frameHeight: 320,
            endFrame: 55,
        }
        );
        // enemy Image
        // this.load.image(
        //     MONSTER_ASSET_KEYS.CARNODUSK, //water
        //     `${monsterTamerAssetPath}/monsters/babyegg_water_emo-25.png.png`
        // );
        // this.load.image(
        //     MONSTER_ASSET_KEYS.CARNODUSK, //fire
        //     `${monsterTamerAssetPath}/monsters/babyegg_fire_emo-26.png.png`
        // );
        //player spritesheet
                
        
            this.load.spritesheet(
                MONSTER_ASSET_KEYS.IGUANIGNITE,
                `${monsterTamerAssetPath}/monsters/babyKittyegg_emoG.png`, {
                    frameWidth: 320,
                    frameHeight: 320,
                    endFrame: 57,
                }
                
            );
     
        
        // load game sound
        
        this.load.audio(`battleMusic`, `${soundPath}/BattleSoundtrack.mp3`);
        
        // //game display? html id
        // var gameDisplay  = document.getElementById("game-container");
        // this.load.html( //game-container
        //     `gameDisplay`, "../index.html"
        // )
        // // load user pet name ?
        // this.load.html(
        //     MONSTER_ASSET_KEYS.U_PET_NAME, "../index.html"
            
        // );
        // this.load.script(
        //     MONSTER_ASSET_KEYS.U_PET_NAME_, "../js/project1.js" //, "script"
        // );
        
        // console.log(MONSTER_ASSET_KEYS.U_PET_NAME);
        // this.load.image(
        //     MONSTER_ASSET_KEYS.IGUANIGNITE, 
        //     `${monsterTamerAssetPath}/monsters/iguanignite.png`
        // );
        // load font
        this.load.font('gothicFont', "../assets/font/DotGothic16-Regular.ttf" , 'truetype' ); // "https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
        //ui assets
        this.load.image(
            UI_ASSET_KEYS.CURSOR,
            `${monsterTamerAssetPath}/ui/cursor.png`
        );

        //load json data
        this.load.json(DATA_ASSET_KEYS.ATTACKS, "assets/data/attacks.json");
    }

    create() {
        console.log(`[${PreloadScene.name}:create] invoked`);
        //console.log(this.textures.get("background"));
        // console.log(MONSTER_ASSET_KEYS.U_PET_NAME);
        this.scene.start(SCENE_KEYS.BATTLE_SCENE);
        //drawing test
        //corner left = 0,0 -> thats where it starts off
        //this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
        //this.add.image(this.scale.width / 2, this.scale.height / 2,  BATTLE_BACKGROUND_ASSET_KEYS.FOREST);
    }

    // update() {console.log("update")
        
    // ;}
}