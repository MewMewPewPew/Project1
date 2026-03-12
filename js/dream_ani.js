window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("dreamCanvas");
    //get the context
    let context = canvas.getContext("2d");
    
    let rectSize = 50
  //a draw a rect:
  context.fillStyle = "#000000";
  // draw a rect
  context.fillRect(canvas.width / 2, canvas.height / 2, rectSize, rectSize);
 
}