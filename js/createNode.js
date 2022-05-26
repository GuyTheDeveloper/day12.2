export default function ({ name, group, gender, success }, count) {
  let template = document.getElementById("template");
  let newTemplate = template.content.cloneNode(true);

  newTemplate.querySelector(".name").textContent = name;
  newTemplate.querySelector(".group").textContent = group;
  newTemplate.querySelector(".gender").textContent = gender;
  newTemplate.querySelector(".success").textContent = success;
  newTemplate.querySelector(".numb").textContent = count;

  return newTemplate;
}
