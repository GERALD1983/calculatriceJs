let result = 0;

function addition(x) {
  result = result + x;
}
function zero(x) {
  result = 0;
}

let boutons = document.querySelectorAll(".button");
let resultat = document.querySelector(".resultat");
// let zero = document.getElementById("zero");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", (e) => {
    // if (e.target.id == "zero" && resultat.textContent == "") {
    //   resultat.textContent = "";
    //   console.log("salut");
    // } else
    if (
      (result === 0 || result < 0 || result > 0) &&
      e.target.innerText !== "CE" &&
      e.target.innerText !== "="
    ) {
      resultat.textContent += e.target.innerText;
    } else if (e.target.innerText == "CE") {
      resultat.textContent = "";
    } else if (e.target.innerText === "=") {
      resultat.textContent = eval(resultat.textContent);
    } else {
      result = "";
      resultat.textContent = result;
    }
    console.log(e.target.innerText);
    console.log(resultat.textContent);
  });
});
