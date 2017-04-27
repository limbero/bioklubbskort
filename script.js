var namn, kortnummer;
if (localStorage.getItem("namn") !== null && localStorage.getItem("kortnummer") !== null) {
  namn = localStorage.getItem("namn");
  kortnummer = localStorage.getItem("kortnummer");
  skapaKortet();
}
function skapaKortet() {
  if (document.querySelector("#kundnamn").value !== "" && document.querySelector("#kundkortnummer").value !== "") {
    namn = document.querySelector("#kundnamn").value;
    kortnummer = document.querySelector("#kundkortnummer").value;
  }

  localStorage.setItem("namn", namn);
  localStorage.setItem("kortnummer", kortnummer);

  console.log(localStorage.getItem("namn"));
  console.log(localStorage.getItem("kortnummer"));

  document.querySelector("form").style.display = "none";
  document.querySelector(".kort").style.display = "block";

  kortnummer = kortnummer.replace(/\s+/g, "");
  JsBarcode("#streckkod", "-L3" + kortnummer, {
    text: kortnummer.substring(0,8) + " " + kortnummer.substring(8,11),
    height: 50
  });
  document.querySelector("#namn").innerHTML = namn.toUpperCase();
}
function reset() {
  localStorage.removeItem("namn");
  localStorage.removeItem("kortnummer");

  document.querySelector("form").style.display = "block";
  document.querySelector(".kort").style.display = "none";
}

document.querySelector("#kortknapp").addEventListener("click", skapaKortet);
document.querySelector("#kortform").addEventListener("submit", skapaKortet);
document.querySelector("#x").addEventListener("click", reset);
