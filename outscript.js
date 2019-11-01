msg = ["Pick One: Paintabll or a VR arcade.",
"Find a festival happening in Chicago right now and go check it out.",
 "Grab a couple of scooters and go exploring in a new area.",
 "Pick One: A Turkish or Moroccan cafe.",
"Merchandise Mart Date",
"Find a French Cafe."];

window.onload = function(){
  var x = Math.floor((Math.random() * 5) + 0);
    document.getElementById("text").innerHTML = msg[x];
};
