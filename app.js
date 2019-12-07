function clickMe() {
  let player = prompt("What is your screen name?");
  alert("hello " + player);
  let usernameEl = document.getElementById("player_username");
  usernameEl.innerText = "Hello, " + player;
}

function talk() {
  console.log("hello!");
}

function moveGamePlayer() {
  console.log("move game player!");
  let elem = document.getElementById("game-player");
  let position = 0;

  elem.style.top = position + "px";
  elem.style.left = position + "px";
}

(function() {
  console.log("hello");
})();

function setHeaderDate() {
  // set header date
  console.log('hello from set header date')
  const date = new Date();
  const headerDateEl = document.querySelector('[id="header-date"]');
  headerDateEl.innerText = date;
}
