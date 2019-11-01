msg = ["Pick One: Paintabll or a VR arcade.",
"Find a festival happening in Chicago right now and go check it out.",
 "Grab a couple of scooters and go exploring in a new area.",
 "Pick One: A Turkish or Moroccan cafe.",
"Merchandise Mart Date",
"Find a French Cafe.",
  "Chocolate Night: Pick a movie, chocolate dessert, and make cinnamon or whiskey hot chocolate.",
 "Popcorn and History Movie Night",
  "Make some coffee/tea, grab a bunch of blankets, and spend the day doing some coding.",
  "Watch some Netflix and order in Panera"
];

window.onload = function(){
  var x = Math.floor((Math.random() * 9) + 0);
    document.getElementById("text").innerHTML = msg[x];
};
