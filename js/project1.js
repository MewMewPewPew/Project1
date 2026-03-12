//CART 263
//This is the code for Project 1 - aka: Digi smt ?
//By Ash Oest O'Leary & Elle lilin ...

window.onload = function (){
    let sleep = false;
    let dreaming = true;
    let clickAct = 0;
    //img of the tamagotchi 
    let tamagochiImg = document.getElementById("tamagochiOff");
    let tamagotchi = document.getElementById("chiikaBoxOnly");
    //virtual pet ID
    let virtualPetDoc = document.getElementById("pet"); 
    let questionNameBox = document.getElementById("inputBoxOnly");
    let vPetNameValue;  
    let vPetName = document.getElementById("vPetNameDisplay");
    let nameList = [];
    let named = false;
    //buttons
        //check petRef.png to know which number refers to which button
    let wakeUpButton = document.getElementById("awakeButton");
    let actButton = document.getElementById("interactButton");
    let actButtonHappy = document.getElementById("interactButton2");
    let actButtonSad = document.getElementById("interactButton3");
    let actButtonPlay = document.getElementById("interactButton4");
    let actButtonEat = document.getElementById("interactButton5");
    
    //Virtual pet dream/mind Box animation
    let mindBox = this.document.getElementById("mindBoxOnly");
    let canvas = document.getElementById("dreamCanvas");
    let context = canvas.getContext("2d");
    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
    let r1 = 50;
    let counter = 0;
    let counterNum = 0.005;
    
    if (!sleep) {
        dreamAnimation();
        
        // else {
            //             cancelAnimationFrame(animateFlowerDream) ;
            //         }
            
        } 
        function dreamAnimation (){
        // if (clickAct<= 1) {
            tamagotchi.addEventListener("mouseenter",function(e){
                
                console.log(counterNum);
                // if (clickAct >= 1) {
                //     counterNum = 0.06;
                // }else if (sleep) {
                //     counterNum = 0.04;
                // }  
                if (dreaming) {
                    counterNum += 0.03;
                }
                else if (clickAct === 1){
                counterNum = 0.07;
                }
                else if(clickAct === 2){
                    counterNum = 0;
                }
                else {
                    counterNum = 0.05;
                }
                
            })
            tamagotchi.addEventListener("mouseleave",function(e){
                
                // console.log(counterNum);
                // if (clickAct >=1) {
                //     counterNum = 0.06;
                // } else if (sleep) {
                //     counterNum = 0.04;
                // } 
                if (dreaming) {
                    counterNum -= 0.03;
                }
                else if (clickAct === 1){
                counterNum = 0.07;
                }
                else if(clickAct === 2){
                    counterNum = 0;
                }
                else {
                    counterNum = 0.05;
                }
                
            })
            requestAnimationFrame(animateFlowerDream);
        // } 
        console.log("dreaming...");
        
        // context.fillRect(canvas.width / 2, canvas.height / 2, 20, 20);
        canvas.style.background = "#121f1bb7";
        createFlower(canvas.width / 2,canvas.height / 2, 30,["rgb(241, 148, 195)","rgba(241, 148, 194, 0.45)", "#86aca013", "#00000001"], ["#86aca095", "#86aca095","rgb(0, 0, 0)", "rgb(253, 181, 204)","rgba(241, 148, 194, 0.69)"])
        
    }
    function createFlower(xPos,yPos,radius,colors, colorS){
        //bottom +
        drawSinglePetal(xPos,yPos+3*radius/2,radius,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos+3*radius/2 +5,radius/1.2,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos+3*radius/2 +10,radius/1.5,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos+3*radius/2 +15,radius/2,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos+3*radius/2 +20,radius/3,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos+3*radius/2 +25,radius/6,colors[2], colorS[0])
        //top
        drawSinglePetal(xPos,yPos-3*radius/2,radius,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos-3*radius/2 -5,radius/1.2,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos-3*radius/2 -10,radius/1.5,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos-3*radius/2 -15,radius/2,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos-3*radius/2 -20,radius/3,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos-3*radius/2 -25,radius/6,colors[2], colorS[0])
        //left
        drawSinglePetal(xPos-3*radius/2,yPos,radius,colors[2], colorS[0])
        drawSinglePetal(xPos-3*radius/2 -5,yPos,radius/1.2,colors[2], colorS[0])
        drawSinglePetal(xPos-3*radius/2 -10,yPos,radius/1.5,colors[2], colorS[0])
        drawSinglePetal(xPos-3*radius/2 -15,yPos,radius/2,colors[2], colorS[0])
        drawSinglePetal(xPos-3*radius/2 -20,yPos,radius/3,colors[2], colorS[0])
        drawSinglePetal(xPos-3*radius/2 -25,yPos,radius/6,colors[2], colorS[0])
        //right
        drawSinglePetal(xPos+3*radius/2,yPos,radius,colors[2], colorS[0])
        drawSinglePetal(xPos+3*radius/2 +5,yPos,radius/1.2,colors[2], colorS[0])
        drawSinglePetal(xPos+3*radius/2 +10,yPos,radius/1.5,colors[2], colorS[0])
        drawSinglePetal(xPos+3*radius/2 +15,yPos,radius/2,colors[2], colorS[0])
        drawSinglePetal(xPos+3*radius/2 +20,yPos,radius/3,colors[2], colorS[0])
        drawSinglePetal(xPos+3*radius/2 +25,yPos,radius/6,colors[2], colorS[0])
        //middle
        drawSinglePetal(xPos,yPos,radius,colors[3], colorS[1])
        drawSinglePetal(xPos,yPos,radius/1.2,colors[3], colorS[1])
        drawSinglePetal(xPos,yPos,radius/1.5,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos,radius/2,colors[2], colorS[0])
        drawSinglePetal(xPos,yPos,radius/3,colors[1], colorS[1])
        drawSinglePetal(xPos,yPos,radius/6,colors[0], colorS[1])

    }
    function drawSinglePetal(x,y,r,fillColor, strokeColor){
        context.fillStyle = fillColor; // change the color we are using
        context.strokeStyle = strokeColor; // change the color we are using
        context.beginPath();
        context.arc(x,y,r,startAngle,endAngle, true);
        context.fill(); // set the fill
        context.lineWidth=2; //change stroke
        context.stroke();//set the stroke
        context.closePath();
    }
    // requestAnimationFrame(animateFlowerDream);
    function animateFlowerDream(){
        counter += counterNum;
        //repaint with a black rect... like the background in draw in p5.js
        context.clearRect(0,0,canvas.width,canvas.height);
        //console.log("go")
        context.clearRect(0, 0, canvas.width, canvas.height);
        //we will make a scaling animation:
        //math.sin goes from [-1,1]*30 == -30,30
        //then if we add 30 to the min ==0 and to the max will be 60 :)
        let newSize = Math.sin(counter) * r1 + r1;
        let newSize2 = Math.sin(counter*2) * r1 + r1;
        createFlower(canvas.width / 2, canvas.height / 2, newSize, ["rgb(241, 148, 195)","rgba(241, 148, 194, 0.45)", "#86aca063", "#00000001"], ["#86aca095", "#86aca095","rgb(0, 0, 0)", "rgb(253, 181, 204)","rgba(241, 148, 194, 0.69)"]);
        //another flower 
        createFlower(canvas.width / 2, canvas.height / 4, newSize2/2, ["rgb(241, 148, 195)","rgba(241, 148, 194, 0.45)", "#86aca063", "#00000001"], ["#86aca095", "#86aca095","rgb(0, 0, 0)", "rgb(253, 181, 204)","rgba(241, 148, 194, 0.69)"]);
        //having fun
        createFlower(canvas.width / 2, canvas.height / 1.35, newSize2/2, ["rgb(241, 148, 195)","rgba(241, 148, 194, 0.45)", "#86aca063", "#00000001"], ["#86aca095", "#86aca095","rgb(0, 0, 0)", "rgb(253, 181, 204)","rgba(241, 148, 194, 0.69)"]);
        createFlower(canvas.width / 4, canvas.height / 2, newSize2/2, ["rgb(241, 148, 195)","rgba(241, 148, 194, 0.45)", "#86aca063", "#00000001"], ["#86aca095", "#86aca095","rgb(0, 0, 0)", "rgb(253, 181, 204)","rgba(241, 148, 194, 0.69)"]);
        createFlower(canvas.width / 1.35, canvas.height / 2, newSize2/2, ["rgb(241, 148, 195)","rgba(241, 148, 194, 0.45)", "#86aca063", "#00000001"], ["#86aca095", "#86aca095","rgb(0, 0, 0)", "rgb(253, 181, 204)","rgba(241, 148, 194, 0.69)"]);
        requestAnimationFrame(animateFlowerDream);
    }
 

    //Event when power button is clicked
    wakeUpButton.addEventListener("click", chiikaAwake);
    function chiikaAwake(){
        if (!sleep){
            //console.log("chiika is awake");
            sleep = true;
            dreaming = false;
            canvas.style.background = "#f6b9fc";
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
            dreaming = true;
            counterNum = 0.005;
            canvas.style.background = "#121f1bb7";
            canvas.style.display="block";
            //Asleep mode
            wakeUpButton.src = "assets/img/buttonPink-off.png";
            tamagochiImg.src = "assets/img/Tamagochi_off.png";
            virtualPetDoc.style.display ="none";

            //Resetting the virtual pet
            virtualPetDoc.src = "assets/gif/eggIMG.png";
            vPetName.style.display = "none";
            named = false;
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
       
        actButton.src = "assets/img/button-base.png";
            // clicks to crack the egg
        actButton.addEventListener("click", function (e){
            
            virtualPetDoc.src = "assets/gif/egg.gif";
            if (sleep){
                clickAct ++;
                console.log(sleep);
                
            }
            console.log(clickAct);
            if (clickAct === 1){
                counterNum = 0.07;
            }
            else if(clickAct === 2){
                counterNum = 0;
                virtualPetDoc.src = "assets/gif/babyKittyegg.gif";
            }
            else if (clickAct >= 3){
                //When egg cracks, give a name to the pet
                canvas.style.display="none";
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
        // change the gif source when button is clicked
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
 