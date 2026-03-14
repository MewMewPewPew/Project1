//CART 263: Creative computation II 	
//This is the code for Project 1 - Digi Chiika (デジ ちいか)
//By Ash Oest O'Leary & Elle lilin Lim-Fauteux

window.onload = function (){
    let sleep = false;
    let dreaming = true;
    // let powerOff = false;
    let clickAct = 0;
    let clickPlay = 0;
    let clickHappy = 0;
    let clickSad = 0;
    let clickEat = 0;
    let deathCounter = 0;
    // let parentDom = document.getElementById("chiikaBoxOnly");
    let barEmotionBox = document.getElementById("awakeCover");
    let barPlay = document.getElementById("barPlayP");
    let barHappy = document.getElementById("barHappyP");
    let barSad = document.getElementById("barSadP");
    let barEat = document.getElementById("barEatP");
    const purrSound = document.getElementById("soundHappy"); 
    const whineSound = document.getElementById("soundSad");
    const nananaSound = document.getElementById("soundPlay");
    const buttonSound = document.getElementById("soundButton");
    let emoPetDeathArray = ["₍^. .^₎Ⳋ", "ฅ^•ﻌ•^ฅ", "૮꒰◞ ˕ ◟ ྀི꒱ა", "♡/ᐠ •ヮ• マ Ⳋ", "/ᐠ - ˕ -マ"];
    let emoPetDeathNum = 0;
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
    let deadname = false;
    let totaldeathNum;
    let deadnameS;
    let storageVPetName;
    //buttons
        //check petRef.png to know which number refers to which button
    let wakeUpButton = document.getElementById("awakeButton");
    let actButton = document.getElementById("interactButton");
    let actButtonHappy = document.getElementById("interactButton2");
    let actButtonSad = document.getElementById("interactButton3");
    let actButtonPlay = document.getElementById("interactButton4");
    let actButtonEat = document.getElementById("interactButton5");
    let playMusicButton = document.getElementById("playButton");
    let artistStatementButton = document.getElementById("statementboxButton");
    let progress;
    
    //Virtual pet dream/mind Box animation
    let mindBox = this.document.getElementById("mindBoxOnly");
    let canvas = document.getElementById("dreamCanvas");
    let context = canvas.getContext("2d");
    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
    let r1 = 50;
    let counter = 0;
    let counterNum = 0.005;
    
    //Artist Statement render
    let textOpen = false;
    let statementBox = document.getElementById("statementBoxOnly");
    artistStatementButton.addEventListener("click",function(e){
        if (!textOpen){
            statementBox.style.display = "block";
            artistStatementButton.style.opacity ="100%";
            textOpen =true;
        } else {
            statementBox.style.display = "none";
            artistStatementButton.style.opacity ="40%";
            textOpen =false;
        }
    })
    //start the animation before it had the change to go to sleep
    if (!sleep) {
        dreamAnimation();   
        } 
        //dream animation
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
                else if(clickAct >= 2){
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
                else if(clickAct >= 2){
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
    // changed the function used in class make the dream animation
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
    // console.log(deathCounter);
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
            document.body.style.background = "#f6b9fc";
            // make the back ground a video ? add pretty clouds drifting ...

            // mindBox.style.display = "none";

            //make the buttons accessable
            interactPet();
            // actButton.src = "assets/img/button-base.png";
        }
        else if (named){ 
            confirm("Pressing this button will power off your digital pet ... ૮꒰◞ ˕ ◟ ྀི꒱ა");
            //from  https://www.w3schools.com/jsref/met_win_confirm.asp
            // let text; 
            // if (confirm("This will power off your digital pet ... ૮꒰◞ ˕ ◟ ྀི꒱ა") === true) {
            // text = "You can say you goodbyes now before pressing the power off";
            // } else {
            // text = "♡₍^. .^₎Ⳋ"; ꒰^. .^ ꒱Ⳋ ฅ^•ﻌ•^ฅ 
            // }
            sleep = true;
            named = false;
            deadname = true;

        }
        else if(sleep && !named ){
            // alert("!This will power off your digital pet!")
            //console.log("chiika is asleep");
            sleep = false;
            dreaming = true;
            counterNum = 0.005;
            canvas.style.background = "#121f1bb7";
            // canvas.style.display="block";
            barEmotionBox.style.display="none";
            //Asleep mode
            wakeUpButton.src = "assets/img/buttonPink-off.png";
            tamagochiImg.src = "assets/img/Tamagochi_off.png";
            virtualPetDoc.style.display ="none";

            //Resetting the virtual pet
            virtualPetDoc.src = "assets/gif/eggIMG.png";
            vPetName.style.display = "none";
            whineSound.pause();
            purrSound.pause();
            //Resetting the console/pet 
            vPetNameValue = "NoName";
            clickAct = 0;
            // console.log(clickAct);
            actButton.src = "assets/img/button-base-off.png";
            actButtonHappy.src = "assets/img/button-happy-off.png";
            actButtonSad.src = "assets/img/button-sad-off.png";
            actButtonPlay.src = "assets/img/button-play-off.png";
            actButtonEat.src = "assets/img/button-eat-offpng.png";
            clickHappy = 0; 
            clickSad = 0; 
            clickEat = 0; 
            clickPlay = 0; 
            progress = 0;
            barPlay.style.width = progress +"%";
            barSad.style.width = progress +"%";
            barHappy.style.width = progress +"%";
            barEat.style.width = progress +"%";
            document.getElementById("sadEnd").style.display="none"; 
            document.getElementById("playEnd").style.display="none";
            document.getElementById("sadPoem").style.display="none";
            document.getElementById("happyPoem").style.display="none";
            document.getElementById("happyEnd").style.display="none";
            document.getElementById("cake").style.display="none";
            //css changes
            document.body.style.background = "rgb(0, 0, 0)";
            // buttonSounds();

            //showing the "death" of pet 
            if (deadname){
                deathCounter++
                console.log(deathCounter + "pet(s) gone T-T");
                deadname = false;
                // Storage 
                localStorage.setItem("deadPetNum", deathCounter);
                totaldeathNum = localStorage.getItem("deadPetNum");
                createElement()*totaldeathNum;
            }
        } 
        // creates a "+" sign that is supposed to represent a pet now gone :( 
        // local storage ? not successfull
        function createElement(){
            // for (let i = 0; i> nameList.length; i++){
                newElementP = document.createElement("p");
                newElementP.classList.add("deathCount");
                // newElementP.innerHTML = "<p>+</p>";
                 //+ parsedVPNames[deathCounter]
                //  console.log(nameList[deathCounter-1]);

                newElementP.textContent = emoPetDeathArray[emoPetDeathNum] +nameList[deathCounter-1];
                // /ᐠ - ˕ -マ / ฅ^•ﻌ•^ฅ  / ૮꒰◞ ˕ ◟ ྀི꒱ა /  ♡/ᐠ •ヮ• マ Ⳋ / ₍^. .^₎Ⳋ
                
                // newElementP.textContent = "+" + deadnameS[i];
                document.body.appendChild(newElementP);
            // }
        }
        // make the button "light up" when pressed
        wakeUpButton.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPPink-click.png";
            
        })
        wakeUpButton.addEventListener("mouseup", function(e){
            this.src = "assets/img/buttonPink-on.png";
        }) 
        
        
    }
    // interaction with Digi Chiika, buttons & events
    function interactPet(){

        actButton.src = "assets/img/button-base.png";
            // clicks to crack the egg
        actButton.addEventListener("click", function (e){
            buttonSound.play();  
            virtualPetDoc.src = "assets/gif/egg.gif";
            if (sleep){
                clickAct ++;
                // console.log(sleep);
                
            }
            // console.log(clickAct);
            if (clickAct === 1){
                counterNum = 0.07;
            }
            else if(clickAct === 2){
                counterNum = 0;
                virtualPetDoc.src = "assets/gif/babyKittyegg.gif";
            }
            else if (clickAct >= 3){
                //When egg cracks, give a name to the pet
                // canvas.style.display="none";
                console.log("ฅ^•ﻌ•^ฅ - a Digi Chiika is born")
                counterNum = 0;
                barEmotionBox.style.display ="block";
                if (!named) {
                    petNameInput();
                }
                virtualPetDoc.src = "assets/gif/babyKitty.gif";
                //make buttons pink when usable
                actButtonHappy.src = "assets/img/button-happy-on.png";
                actButtonSad.src = "assets/img/button-sad-on.png";
                actButtonPlay.src = "assets/img/button-play-on.png";
                actButtonEat.src = "assets/img/button-eat-on.png";
            }
        })
        // change the gif source when button is clicked + bar levels 
        // if bar levels = 100%, unique outcomes happen
        actButtonHappy.addEventListener("click", function (e){
            progress = clickHappy * 10;
            if (clickAct >= 3){
                buttonSound.play();
                virtualPetDoc.src = "assets/gif/kittyHappy.gif";
                // console.log("clickHappy "+clickHappy+" b2");

                barHappy.style.width = progress +"%";
                if (progress >=100){
                    document.getElementById("happyEnd").style.display="block";
                    document.getElementById("happyPoem").style.display="block";
                    document.body.style.background = "#f6b9fc";
                    purrSound.play();
                    emoPetDeathNum = 3;
                    // progress = 0;
                }else {
                    clickHappy++
                }
            } 
            
        })
        actButtonSad.addEventListener("click", function (e){
            progress = clickSad * 10;
            if (clickAct >= 3){
                buttonSound.play();
                virtualPetDoc.src = "assets/gif/kittySad.gif";
                
                // console.log("clickSad"+ clickSad+"b3");
                
                barSad.style.width = progress +"%";
                if (progress >=100){
                    mySound.play();
                    document.getElementById("sadEnd").style.display="block";
                    document.getElementById("sadPoem").style.display="block";
                    document.body.style.background = "rgb(18, 24, 44)";
                    whineSound.play();
                    emoPetDeathNum = 2;
                    // progress = 0;
            
                }
                else {
                    clickSad++
                }
            }
            
        })
        actButtonPlay.addEventListener("click", function (e){
            progress = clickPlay * 10;
            if (clickAct >= 3){
                buttonSound.play();
                virtualPetDoc.src = "assets/gif/kittyPlay.gif";
                
                // console.log("clickPlay"+ clickPlay+"b4");
                barPlay.style.width = progress +"%";
                if (progress >=100){
                    playMusicButton.src = "assets/img/playButton-on.png";
                    mySound.play();
                    document.getElementById("playEnd").style.display="block";
                    document.body.style.background = "#f6b9fc";
                    nananaSound.play();
                    buttonPlayMusic();
                    emoPetDeathNum = 1;
                    // progress = 0;
                }
                else {
                    clickPlay++
                }
            
            }
        })
        actButtonEat.addEventListener("click", function (e){
            progress = clickEat * 10;
            if (clickAct >= 3){
                buttonSound.play();
                virtualPetDoc.src = "assets/gif/kittyEat.gif";
                
                // console.log("clickEat"+ clickEat+"b5");
                barEat.style.width = progress +"%";
                if (progress >=100){
                    mySound.play();
                    //the cake is a lie 
                    document.getElementById("cake").style.display="block";
                    document.body.style.background = "#f6b9fc";
                    emoPetDeathNum = 4;
                    // progress = 0;
                }
                
                else {
                    clickEat++
                }
            }
        })
        // make the buttons "light up" when pressed
        actButton.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButton.addEventListener("mouseup", function(e){
            if (!sleep){
                this.src = "assets/img/button-base-off.png";
            }
            else { 
                this.src = "assets/img/button-base.png";
            }
        }) 
        // Happy button
        actButtonHappy.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonHappy.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3){
                this.src = "assets/img/button-happy-off.png";
            }else { 
                this.src = "assets/img/button-happy-on.png";
            }
        }) 
        // Sad button
        actButtonSad.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonSad.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3 ){
                this.src = "assets/img/button-sad-off.png";
            }else { 
                this.src = "assets/img/button-sad-on.png";
            }
        }) 
        // Play button
        actButtonPlay.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonPlay.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3){
                this.src = "assets/img/button-play-off.png";
            }else { 
                this.src = "assets/img/button-play-on.png";
            }
        }) 
        // Eat button
        actButtonEat.addEventListener("mousedown", function(e){
            this.src = "assets/img/buttonPink-click.png";
        })
        actButtonEat.addEventListener("mouseup", function(e){
            if (!sleep || clickAct < 3){
                this.src = "assets/img/button-eat-offpng.png";
            }else { 
                this.src = "assets/img/button-eat-on.png";
            }
        }) 
    }
    //function when 100% of play bar is completed, music start, function can pause it
    function buttonPlayMusic(){
        let music = true;
            playMusicButton.addEventListener("click",function(e){
                
                if(nananaSound.duration > 0 && music){
                    // console.log("music stopped");
                    music = false;
                    nananaSound.pause();
                    playMusicButton.src = "assets/img/playButton-off.png";
                }
                else if (!music){ 
                    // console.log("music");
                    music = true;
                    nananaSound.play();
                    playMusicButton.src = "assets/img/playButton-on.png";
                }

            })
        if (!sleep){
            // console.log("sleep");
            // music = false;
            nananaSound.pause();
            playMusicButton.src = "assets/img/playButton-off.png";
        }
    }
    //makes the naming boxed displayed and usable (+ storage.....?)
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
                storageVPetName = this.parentElement.querySelector("input").value;
                nameList.push(storageVPetName);
                console.log(nameList);
                localStorage.setItem("alldeadnames", nameList);
                deadnameS = localStorage.getItem("alldeadnames");
                // console.log(deadnameS);
                // let parentID = this.parentElement.id;
                
                // if(storageVPetName == vPetNameValue) {
                //     // addNewPetName(storageVPetName);
                //     // console.log(getAllNames());
                //     // convert object to JSON string
                //     let jsonVPNames = JSON.stringify(storageVPetName);
                //     nameList.push(storageVPetName);
                //     console.log(nameList);
                //     // save to localStorage
                //     // localStorage.setItem(nameList, storageVPetName);
                //     // // get the string
                //     // const str = localStorage.getItem("storageVPetName");
                //     // // convert string to valid object
                //     // parsedVPNames = JSON.parse(str);

                //     // console.log(parsedVPNames);
                //     // localStorage.setItem(parentID,storageVPetName);
                // } 
            }
        } 
    }

    // function buttonSounds(){
    //         const buttonsClicked = document.getElementsByClassName("buttons");
    //                 const buttonNoise = document.getElementById("soundButton");

    //                 for (let i = 0; i < buttonsClicked.length; i++){
    //                     buttonsClicked[i].addEventListener("click", function(e) {
    //                         console.log("clicked");
    //                         buttonNoise.play();
    //                     })
    //                 }
    // }
 
}
