window.onload = function (){
//div documents
let mindBox = this.document.getElementById("mindBoxOnly");

    //button on&off interactivity
    let wakeUpButton = document.getElementById("awakeButton");
    let sleep = false;
    wakeUpButton.addEventListener("click", chiikaAwake);
    //img of the tamagotchi
    let tamagochiImg = document.getElementById("tamagochiOff");
    //virtual pet Id
    let virtualPetDoc = this.document.getElementById("pet");
    let egg = true; 
    let eggCracked = false;
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

            //Crack the egg, yay pet
            virtualPet();
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
            egg = true;
            eggCracked = false;

            //css changes
            document.body.style.background = "rgb(116, 94, 113)";
            
        } 
    }
    function virtualPet(){
        //will have maybe more complicated state of the pet
        if(egg){
            if(!eggCracked){
                //makes the egg move when mouse over
                virtualPetDoc.addEventListener("mouseover", function(e){
                    console.log("What could be in the egg?");
                    this.src = "assets/gif/egg.gif";
                })
                virtualPetDoc.addEventListener("mouseout", function(e){
                    this.src = "assets/gif/eggIMG.png";
                })
            } 
            //makes the egg hatch
            virtualPetDoc.addEventListener("click", function(e){ // has to be done only once
                console.log("New kitty has been born");
                this.src = "assets/gif/babyKittyegg.gif";
                egg = false;
                eggCracked = true;
            })
            // else if (!egg){
            // }
        }
        else if (eggCracked){
            
            virtualPetDoc.addEventListener("click", function(e){
                console.log("Hello Kitty baby");
                this.src = "assets/gif/babyKitty.gif";
            })
        }
        

    }
    
}
