import creatorObj from "./ObjCreator.js";
import render from "./render.js";

let form = document.getElementById("formMain");
let userFull = document.getElementById("name");
let userGroup = document.getElementById("group");
let userGen = document.getElementById("gender");
let userSuccess = document.getElementById("success");
let list = document.getElementById("table");

let databas = window.localStorage;
let inf;

if (databas.getItem("pupils")) {
  inf = JSON.parse(databas.getItem("pupils"));
} else {
  inf = [];
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUs = new creatorObj(
    userFull.value,
    userGroup.value,
    userGen.value,
    userSuccess.value
  );

  inf.push(newUs);
  databas.setItem("pupils", JSON.stringify(inf));

  render(list, inf);
});

render(list, inf);
