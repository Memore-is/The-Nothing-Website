document.getElementById("giftbox").onclick = function () {
    window.location.href = "broken.html";

document.getElementById("button").onclick = function () {
    fetch("https://icanhazdadjoke.com/", {
        headers: {"Accept": "text/plain"}
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("text").textContent = data
    })
    .catch(e => console.log(e));
    };
}