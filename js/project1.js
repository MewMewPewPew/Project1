window.onload = function (){
//div documents
let mindBox = this.document.getElementById("mindBoxOnly");

    //button on&off interactivity
    let wakeUpButton = document.getElementById("awakeButton");
    let sleep = false;
    wakeUpButton.addEventListener("click", chiikaAwake);
    

    function chiikaAwake(){
        if (sleep === false){
            console.log("chiika is awake")
            wakeUpButton.src = "assets/img/buttonPink-on.png";
            sleep = true;
            //css changes
            document.body.style.background = "rgb(253, 181, 204)";
            mindBox.style.display = "none";
        }
        else if(sleep === true){
            console.log("chiika is asleep")
            wakeUpButton.src = "assets/img/buttonPink-off.png";
            sleep = false;
            //css changes
            document.body.style.background = "rgb(197, 131, 152)";
            
        } 
    }
    
}
