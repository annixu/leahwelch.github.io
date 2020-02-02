
//////////////////////////////////
    // MAKE A STICKY DASHBOARD
//////////////////////////////////
var intro = document.getElementById("intro");
var recipe = document.getElementById("recipe");
var dashboard = document.getElementById("dashboard");
    dashboard.style.opacity = 0;
var sticky = recipe.offsetTop;

function makeSticky() {

  if (window.pageYOffset > sticky ) {
  dashboard.style.opacity = 1;
  } else {
  dashboard.style.opacity = 0;
  }
};

//////////////////////////////////
    // DEFINE SVG AND DIMENSION VARIABLES
//////////////////////////////////

var margin = {top: 200, left: 100, right: 100, bottom: 200};
var width = document.querySelector("#recipe").clientWidth;
var viewHeight = document.querySelector("#recipe").clientHeight;
var height = document.querySelector("#recipe").scrollHeight;

var carrotContainer = document.getElementById("carrots");
var carrotTop = carrotContainer.getBoundingClientRect().height;
var cucumberContainer = document.getElementById("cucumbers");
var cucumberTop = (.9 * sticky) + cucumberContainer.getBoundingClientRect().height;

//////////////////////////////////
    // LISTEN FOR SCROLL POSITION AND MAKE CHANGES
//////////////////////////////////
var scrollTop = [0];
var timeToEat = [];

window.addEventListener("scroll", function() { 
        
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  makeSticky();

  //for (var i = 0; divs.length > i; i++) {

    if (scrollTop > sticky && scrollTop < cucumberTop) {
      dashboard.className = ("carrots");
    } else if (scrollTop >= cucumberTop) {
      dashboard.className = ("cucumbers");
    }

});

//////////////////////////////////
    // MAKE SCALES THAT MAP SCROLLING POSITION TO OTHER THINGS
//////////////////////////////////

// SCALE TO CONVERT SCROLL TOP POSITION TO TIME UNTIL EATING
var scrollToTimeToEat = d3.scaleLinear() 
    .domain([sticky+10, height-margin.bottom]) 
    .range([0, 36]) //need to figure out the time mapping and inserting data here?
    .clamp(true);
