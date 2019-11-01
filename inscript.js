msg = ["Chocolate Night: Pick a movie, chocolate dessert, and make cinnamon or whiskey hot chocolate.",
 "Popcorn and History Movie Night",
  "Make some coffee/tea, grab a bunch of blankets, and spend the day doing some coding.",
  "Watch some Netflix and order in Panera"
];

window.onload = function(){
  var x = Math.floor((Math.random() * 3) + 0);
    document.getElementById("text").innerHTML = msg[x];
};
