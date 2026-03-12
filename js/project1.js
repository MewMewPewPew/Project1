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
    //virtual pet ID
    let virtualPetDoc = this.document.getElementById("pet"); 
    let questionNameBox = document.getElementById("inputBoxOnly");
    let vPetNameValue;  
    let vPetName = document.getElementById("vPetNameDisplay");
    let nameList = [];
    let named = false;
    // let storageVPetName;
    //buttons
    //check petRef.png to know which number refers to which button
    let wakeUpButton = document.getElementById("awakeButton");
    let actButton = document.getElementById("interactButton");
    let actButtonHappy = document.getElementById("interactButton2");
    let actButtonSad = document.getElementById("interactButton3");
    let actButtonPlay = document.getElementById("interactButton4");
    let actButtonEat = document.getElementById("interactButton5");

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
            // actButton.src = "assets/img/button-base.png";
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
            vPetName.style.display = "none";
            named = false;
            // egg = true;
            // eggCracked = false;
            //Resetting the console/pet 
            vPetNameValue = "NoName";
            clickAct = 0;
            console.log(clickAct);
            actButton.src = "assets/img/button-base-off.png";
            actButtonHappy.src = "assets/img/button-base-off.png";
            actButtonSad.src = "assets/img/button-base-off.png";
            actButtonPlay.src = "assets/img/button-base-off.png";
            actButtonEat.src = "assets/img/button-base-off.png";
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
            // }
        actButton.src = "assets/img/button-base.png";
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
                //When egg cracks, give a name to the pet
                if (!named) {
                    petNameInput();
                }
                virtualPetDoc.src = "assets/gif/babyKitty.gif";
                //make buttons pink when usable
                actButtonHappy.src = "assets/img/button-base.png";
                actButtonSad.src = "assets/img/button-base.png";
                actButtonPlay.src = "assets/img/button-base.png";
                actButtonEat.src = "assets/img/button-base.png";
            }
        })
        actButtonHappy.addEventListener("click", function (e){
            console.log("b2");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittyHappy.gif";
            } 
        })
        actButtonSad.addEventListener("click", function (e){
            console.log("b3");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittySad.gif";
            }
        })
        actButtonPlay.addEventListener("click", function (e){
            console.log("b4");
            if (clickAct >= 3){
                virtualPetDoc.src = "assets/gif/kittyPlay.gif";
            }
        })
        actButtonEat.addEventListener("click", function (e){
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
            if (!sleep){
                this.src = "assets/img/button-base-off.png";
            }else { 
                this.src = "assets/img/button-base.png";
            }
        }) 
        // Happy button
        actButtonHappy.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonHappy.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3){
                this.src = "assets/img/button-base-off.png";
            }else { 
                this.src = "assets/img/button-base.png";
            }
        }) 
        // Sad button
        actButtonSad.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonSad.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3 ){
                this.src = "assets/img/button-base-off.png";
            }else { 
                this.src = "assets/img/button-base.png";
            }
        }) 
        // Play button
        actButtonPlay.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonPlay.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3){
                this.src = "assets/img/button-base-off.png";
            }else { 
                this.src = "assets/img/button-base.png";
            }
        }) 
        // Eat button
        actButtonEat.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonEat.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3){
                this.src = "assets/img/button-base-off.png";
            }else { 
                this.src = "assets/img/button-base.png";
            }
        }) 
    }
    
    function petNameInput(){
        questionNameBox.style.display = "block";
        document.getElementById("submitName").onclick = function(){
            vPetNameValue = document.getElementById("vPetName").value;
            if (vPetNameValue === ""){
                alert("Name your pet !");
            } else {
                named = true; 
                console.log(vPetNameValue + " is your new pet !");
                questionNameBox.style.display = "none";
                vPetName.style.display = "block";
                vPetName.textContent = `${vPetNameValue}` ;

                //Local storage 
                let parentID = this.parentElement.id;
                let storageVPetName = this.parentElement.querySelector("input").value;
                if(storageVPetName == vPetNameValue) {
                    // addNewPetName(storageVPetName);
                    // console.log(getAllNames());
                    // convert object to JSON string
                    let jsonVPNames = JSON.stringify(storageVPetName);
                    nameList.push(storageVPetName);
                    console.log(nameList);
                    // save to localStorage
                    localStorage.setItem(parentID, nameList);
                    // // get the string
                    // const str = localStorage.getItem("storageVPetName");
                    // // convert string to valid object
                    // const parsedVPNames = JSON.parse(str);
                    
                    // console.log(parsedVPNames);
                    // localStorage.setItem(parentID,storageVPetName);
                } 
            }
        } 
    }

}
 