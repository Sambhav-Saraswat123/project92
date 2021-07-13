{
  document.getElementById("player1").innerHTML += `${localStorage.getItem(
    "player1"
  )} : `;
  document.getElementById("player2").innerHTML += `${localStorage.getItem(
    "player2"
  )} : `;
}
let questionTurn = "player2";
let ansTurn = "player1";
let player1_score = 0;
let player2_score = 0;
let actAns, number1, number2;
document.querySelector("#player1score").innerHTML = player1_score;
document.querySelector("#player2score").innerHTML = player2_score;
function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actAns = parseInt(number1) * parseInt(number2);
  const qNo = "<h3>" + number1 + " X " + number2 + "</h3>";
  const input = "<br /><p>Answer :</p> <input type='text' id='inputCheckBox'>";
  const checkBtn =
    "<br /><br /><button button class='btn btn-primary' onclick = 'check()' > Check my ans</button > ";
  const final = `${qNo} ${input} ${checkBtn}`;
  document.getElementById("output").innerHTML = final;
  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";
}
document.getElementById("send").addEventListener("click", (e) => {
  send();
});
function check() {
  ans = document.getElementById("inputCheckBox").value;
  if (ans == actAns) {
    if (questionTurn === "player2") {
      document.getElementById("player1score").innerHTML =
        parseInt(document.getElementById("player1score").innerHTML) + 1;
    } else {
      document.getElementById("player2score").innerHTML =
        parseInt(document.getElementById("player2score").innerHTML) + 1;
    }
  }
  document.getElementById("output").innerHTML = "";
  if (questionTurn === "player2") {
    questionTurn = "player1";
    ansTurn = "player2";
  } else {
    questionTurn = "player2";
    ansTurn = "player1";
  }
}
