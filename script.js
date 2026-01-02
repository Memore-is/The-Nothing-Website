var button = document.getElementById("button");
var text = document.getElementById("text");

var messages = [
  "Take A Break",
  "eH HEm",
  "Trust me I just wanted fudge :)",
  "Roses are red, violets are blue, ",
  "HAPPY NEW YEAR!!!!"
];

button.addEventListener("click", function () {
  var randomIndex = Math.floor(Math.random() * messages.length);
  text.textContent = messages[randomIndex];
});