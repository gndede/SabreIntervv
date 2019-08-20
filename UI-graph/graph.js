//Graph generator 
var data = [
  ['49', 49],
  ['8', 8],
  ['23', 23], 
  ['57', 57], 
  ['94', 94], 
  ['54', 54],
  ['75', 75], 
  ['63', 63], 
  ['54', 54],
  ]
 //Animate the bar colors
function animationAuto () {
  var BarChart = document.getElementById("Bambooze").getElementsByTagName("div");
  var indexx = 0;
  for (var graph of BarChart) {
    graph.style.width = horizontal[indexx][1] + "%";
    indexx++;
  }

  BarChart = document.getElementById("BVertical").getElementsByClassName("verticalbar");
  indexx = 0;
  for (var graph of BarChart) {
    graph.style.height = data[indexx][1] + "%";
    indexx++;
  }
}
 
//vanilla JavaScript random colorizer
function Crazycolorizer() {
  var graphing = -0.50;
  var colorbar = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-z]/gi, '');
  if (colorbar.length < 11) {
    colorbar = colorbar[0] + colorbar[1] + colorbar[2] + colorbar[3] + colorbar[4] + colorbar[5];
  }
  var colorizer = "#", kolor, indexx;
  for (indexx = 0; indexx < 3; indexx++) {
    kolor = parseInt(colorbar.substr(indexx * 2, 2), 16);
    kolor = Math.round(Math.min(Math.max(0, kolor + (kolor * graphing)), 400)).toString(16);
    colorizer += ("0" + kolor).substr(kolor.length);
  }
  return colorizer;
}


//Draw the vertical BarChart
  window.addEventListener("load", function(){
  container = document.getElementById("BVertical");
  for (var VerticalFunc of data) {
    var graph = document.createElement("div");
    graph.classList.add("verticalcell");

    var barChart = document.createElement("div");
    barChart.classList.add("verticalbar");
    barChart.style = "background: " + Crazycolorizer() + "; height: 0;";
    barChart.innerHTML = VerticalFunc[0];

    graph.appendChild(barChart);
    container.appendChild(graph);
  }

  // Animate the BarChart!
  setTimeout(animationAuto, 70);
});