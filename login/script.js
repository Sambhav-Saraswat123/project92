console.log(
  "%cWelcome to console, a  place where you can play with JavaScript",
  "font-size: 35px;color: limegreen;font-family:Arial;font-weight:bolder;"
);
function login() {
  const loginInput1 = document.getElementById("loginInput1");
  const loginInput2 = document.getElementById("loginInput2");
  localStorage.setItem("player1", loginInput1.value);
  localStorage.setItem("player2", loginInput2.value);
  window.location = '../game/'
}
