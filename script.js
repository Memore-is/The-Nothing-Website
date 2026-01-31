const catImg = document.getElementById("cats");
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
  "the fudge is judging you",
  "we dont talk bout u",
  "friends? nah",
  "hehehe",
  "ain't I a genius?",
  "D+RAM+A",
  "IHATEJAVASCRIPT",
  "go .",
];

var x = 0;
document.getElementById("button").onclick = function () {
  if (x < messages.length) {
    document.getElementById("text").textContent = messages[x];
    x = x + 1;

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      catImg.src = data[0].url;
    })
    .catch(e => console.log(e));

  } else {
    document.getElementById("link").click()
  }
};