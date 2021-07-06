let result = 0;

function addition(x) {
  result = result + x;
}
function zero(x) {
  result = 0;
}
addition(3);
addition(7);
addition(7);
console.log(result);

let boutons = document.querySelectorAll(".button");
let resultat = document.querySelector(".resultat");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", (e) => {
    if (
      (result === 0 || result < 0 || result > 0) &&
      e.target.innerText !== "CE"
    ) {
      resultat.textContent += e.target.innerText;
    } else if (e.target.innerText == "CE") {
      resultat.textContent = 0;
    } else {
      result = 0;
      resultat.textContent = result;
    }
    console.log(e.target.innerText);
  });
});

console.log(result);
