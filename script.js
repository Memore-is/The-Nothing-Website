const catImg = document.getElementById("cats");
var messages = [
  "Take A Break",
  "eHh HeM",
  "Why u stilll here?",
  "???",
  "trust me I just wanted fudge :)",
  "lazy is fun hah",
  "70UCH GR455",
  "yeah the one on the other side",
  "HAPPY NEW YEAR!!!!",
  "Dont U Wait",
  "B-L-A-N-K",
  "ain't it gnarly?",
  "want a song rec?",
  "FUDGE COLORED SITE YESS",
  "new year, old u",
  "solid",
  "relationship",
  "advice: ",
  "stay single lol cause why not",
  "well hello there friend",
  "404 FUN NOT FOUND",
  "what even is life?",
  "+ P_E_A_K + ",
  "><>*<><",
  "~",
  "copyrights are for copies, right?",
  "u thisss bored?",
  "tis is random",
  "remember to leaf",
  "is tis a trap?",
  "6-7",
  "SIX-SEVEN",
  "u can leaf, 6-7 can't",
  "u da typ dat likes schooool",
  "no?",
  "why not?",
  "does this button love you back?",
  "spaghetti has feelings",
  "my cat owns you",
  "awwww",
  "play chess",
  "u done yet?",
  "*|*|*|*",
  "HELPLESS",
  "hehehehe",
  "wash ur own dishes",
  "a sad is what i see",
  "(h)(e)(l)(l)(o)",
  "Idontrememberthatnightjustguess why",
  "the fudge is judging you",
  "we dont talk bout u",
  "doncha get bored?",
  "oui oui, je'mapelle laf-",
  "friends? nah",
  "hehehe",
  "ain't I a genius?",
  "D+RAM+A",
  "cant afford such jokes",
  "un-employed + going broke",
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