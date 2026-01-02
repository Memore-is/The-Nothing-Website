var button = document.getElementById("button");
var text = document.getElementById("text");

var messages = [
  "Take A Break",
  "eHh HeM",
  "Why u stilll here?",
  "trust me I just wanted fudge :)",
  "70UCH GR455",
  "HAPPY NEW YEAR!!!!",
  "Dont U Wait",
  "B-L-A-N-K",
  "ain't it gnarly?",
  "want a song rec?",
  "FUDGE COLORED SITE YESS",
  "new year, old u",
  "well hello there friend",
  "404 FUN NOT FOUND",
  "what even is life?",
  "+ P_E_A_K + ",
  "><>*<><",
  "~",
  "is tis a trap?",
  "6-7",
  "u da typ dat likes schooool",
  "does this button love you back?",
  "spaghetti has feelings",
  "my cat owns you",
  "play chess",
  "u done yet?",
  "*|*|*|*",
  "HELPLESS",
  "wash ur own dishes",
  "the fridge is judging you",
  "we dont talk bout u",
  "friends? nah",
  "hehehe",
  "ain't I a genius?",
  "D+RAM+A",
  "IHATEJAVASCRIPT",
  "go .",

];

button.addEventListener("click", function () {
  var randex = Math.floor(Math.random() * messages.length);
  text.textContent = messages[randex];
});