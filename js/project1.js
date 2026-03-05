window.onload = function (){
    let sleep = false;
    let egg = true; 
    let eggCracked = false;
    let hatched = false;
    let clickAct = 0;
    //div documents
    let mindBox = this.document.getElementById("mindBoxOnly");
    //img of the tamagotchi (machine)
    let tamagochiImg = document.getElementById("tamagochiOff");
    //virtual pet Id
    let virtualPetDoc = this.document.getElementById("pet");

    //buttons
    let wakeUpButton = document.getElementById("awakeButton");
    let actButton = document.getElementById("interactButton");

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
            //css changes
            document.body.style.background = "rgb(116, 94, 113)";
            
        } 
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
                }
            })
        // }
    }

}
        // if(egg){
            // console.log(egg);
            //makes the egg move when mouse over
            
            // make array of gif, loop each clickAct ?
             
            
                
        //     //makes the egg hatch
        //     virtualPetDoc.addEventListener("clickAct", function(e){ // has to be done only once
        //         console.log("New kitty has been born");
        //         this.src = "assets/gif/babyKittyegg.gif";
        //         egg = false;
        //         if (!egg){
        //             console.log(egg + "2");
        //             return;   
        //         } 
        //     })
        // }
        // else if (!egg){
        //     virtualPetDoc.addEventListener("clickAct", function(e){
        //     this.src = "assets/gif/babyKitty.gif";
        //     })
            
        // }

        // if(egg){
        //     if (!hatched) {
        //         //makes the egg move when mouse over
        //         virtualPetDoc.addEventListener("mouseover", function(e){
        //             console.log("What could be in the egg?");
        //             this.src = "assets/gif/egg.gif";
        //             // eggCracked = true;
        //             if (hatched) {
        //                 virtualPetDoc.addEventListener("mouseover", function(e){
        //                 this.src = "assets/gif/babyKitty.gif";
        //                 })
        //             }
        //         });
        //         virtualPetDoc.addEventListener("mouseout", function(e){
        //             this.src = "assets/gif/eggIMG.png";
        //             console.log("mouseOut");
        //             // eggCracked = true;
        //             if (hatched) {
        //                 virtualPetDoc.addEventListener("mouseout", function(e){
        //                 this.src = this.src;
        //                 })
        //             }
        //         });
        //         //makes the egg hatch
        //         virtualPetDoc.addEventListener("clickAct", function(e){ // has to be done only once
        //             console.log("New kitty has been born");
        //             this.src = "assets/gif/babyKittyegg.gif";
        //             // egg = false;
        //             hatched = true;
        //              if (hatched) {
        //                 virtualPetDoc.addEventListener("mouseout", function(e){
        //                 this.src = "assets/gif/babyKitty.gif";
        //                 })
        //             }
        //         });

        //         }
        //     // else if (!egg){
        //     // }
        // }
        

    // }
    
