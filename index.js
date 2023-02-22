/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var links = document.getElementById("myLinks");
var middle = document.getElementById("middle");
var interior = document.getElementById("interior");
var iconB = document.getElementById("burger");
var iconX = document.getElementById("x-icon");
var foot = document.getElementById("footer");
var iconA = document.getElementById("icon-a");


function displayManager() {

    if (links.style.display === "flex") {
      hideLinks();
    } else {
      visibleLinks();
    }
  }


  function hideLinks(){
    links.style.display = "none";
    middle.style.display = "block";
    interior.style.display = "block";
    iconB.style.visibility = "visible";
    iconX.style.visibility = "hidden";
    foot.style.display = "block";
    

  }
  function visibleLinks(){
    links.style.display = "flex";
    middle.style.display = "none";
    interior.style.display = "none";
    iconB.style.visibility = "hidden";
    iconX.style.visibility = "visible";
    foot.style.display = "none";
  }

let box = document.querySelector('body');


//alert(width);
window.addEventListener('resize', function(event) {
  let width = box.offsetWidth;
  if(width >= 1024){
    links.style.display = "flex";
    
    middle.style.display = "flex";
    iconA.style.display = "none";
    
  } else {
    links.style.display = "none";
    
    middle.style.display = "block";
    iconA.style.display = "block";
  }
}, true);