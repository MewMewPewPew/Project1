//CART 263
//This is the code for Project 1 - aka: Digi smt ?
//By Ash Oest O'Leary & Elle lilin ...

window.onload = function (){
    let sleep = false;
    let clickAct = 0;
    //div documents
    let mindBox = this.document.getElementById("mindBoxOnly");
    //img of the tamagotchi (machine)
    let tamagochiImg = document.getElementById("tamagochiOff");
    //virtual pet Id
    let virtualPetDoc = this.document.getElementById("pet");
    //buttons
    //check petRef.png to know which number refers to which button
    let wakeUpButton = document.getElementById("awakeButton");
    let actButton = document.getElementById("interactButton");
    let actButton2 = document.getElementById("interactButton2");
    let actButton3 = document.getElementById("interactButton3");
    let actButton4 = document.getElementById("interactButton4");
    let actButton5 = document.getElementById("interactButton5");

    wakeUpButton.addEventListener("click", chiikaAwake);
    function chiikaAwake(){
        if (!sleep){
            //console.log("chiika is awake");
            sleep = true;
            //Awaken mode
            wakeUpButton.src = "assets/img/buttonPink-on.png";
            tamagochiImg.src = "assets/img/Tamagochi_on.png";
            
            virtualPetDoc.style.display ="block";
            //css changes
            document.body.style.background = "rgb(253, 181, 204)";
            // make the back ground a video ? add pretty clouds drifting ...

            // mindBox.style.display = "none";

            //make the buttons accessable
            interactPet();
            actButton.src = "assets/img/button-base.png";
        }
        else if(sleep){
            //console.log("chiika is asleep");
            sleep = false;
            //Asleep mode
            wakeUpButton.src = "assets/img/buttonPink-off.png";
            tamagochiImg.src = "assets/img/Tamagochi_off.png";
            virtualPetDoc.style.display ="none";


            //Resetting the virtual pet
            virtualPetDoc.src = "assets/gif/eggIMG.png";
            // egg = true;
            // eggCracked = false;
            clickAct = 0;
            console.log(clickAct);
            actButton.src = "assets/img/button-base-off.png";
            actButton2.src = "assets/img/button-base-off.png";
            actButton3.src = "assets/img/button-base-off.png";
            actButton4.src = "assets/img/button-base-off.png";
            actButton5.src = "assets/img/button-base-off.png";
            //css changes
            document.body.style.background = "rgb(0, 0, 0)";
        } 
        // make the button "light up" when pressed
        wakeUpButton.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPPink-click.png";
        })
        wakeUpButton.addEventListener("mouseup", function(e){
            this.src = "assets/img/buttonPink-on.png";
        }) 
    }
    
    function interactPet(){
        //button interact with pet for now 
        // if (!sleep) {
            
        // clicks to crack the egg
        actButton.addEventListener("click", function (e){
            virtualPetDoc.src = "assets/gif/egg.gif";
            if (sleep){
                clickAct ++;
                console.log(sleep);
                
            }
            console.log(clickAct);
            if(clickAct === 2){
                virtualPetDoc.src = "assets/gif/babyKittyegg.gif";
            }
            else if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/babyKitty.gif";
                //make buttons pink when usable
                actButton2.src = "assets/img/button-base.png";
                actButton3.src = "assets/img/button-base.png";
                actButton4.src = "assets/img/button-base.png";
                actButton5.src = "assets/img/button-base.png";
            }
        })
        actButton2.addEventListener("click", function (e){
            console.log("b2");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittyHappy.gif";
            } 
        })
        actButton3.addEventListener("click", function (e){
            console.log("b3");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittySad.gif";
            }
        })
        actButton4.addEventListener("click", function (e){
            console.log("b4");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittyPlay.gif";
            }
        })
        actButton5.addEventListener("click", function (e){
            console.log("b5");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittyEat.gif";
            }
        })
        // make the buttons "light up" when pressed
        actButton.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButton.addEventListener("mouseup", function(e){
            this.src = "assets/img/button-base.png";
        }) 

        actButton2.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButton2.addEventListener("mouseup", function(e){
            this.src = "assets/img/button-base.png";
        }) 

        actButton3.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButton3.addEventListener("mouseup", function(e){
            this.src = "assets/img/button-base.png";
        }) 

        actButton4.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButton4.addEventListener("mouseup", function(e){
            this.src = "assets/img/button-base.png";
        }) 

        actButton5.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButton5.addEventListener("mouseup", function(e){
            this.src = "assets/img/button-base.png";
        }) 
    }
    
}
 