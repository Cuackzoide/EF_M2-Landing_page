// Selección con javaScript puro
const formBtn = document.querySelector("#form-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const jobInput = document.querySelector("#job");
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

console.log(formBtn);
// Funcion de navegación con Enter (ADICIONAL UX)
const darleEnter = (nextInput) => (e) => {
  if (e.key === "Enter") {
    nextInput.focus();
  }
};

// Navegación con Enter JavaScript puro
nameInput.addEventListener("keydown", darleEnter(emailInput));
emailInput.addEventListener("keydown", darleEnter(jobInput));
jobInput.addEventListener("keydown", darleEnter(formBtn));
formBtn.addEventListener("focus", (e) => {
  if (e.key === "Enter") {
    formBtn.click();
  }
});

// Validación de formulario con modal de respuesta
formBtn.addEventListener("click", () => {
  if (
    nameInput.value.length >= 5 &&
    emailInput.value.includes("@", ".") &&
    jobInput.value.length >= 5
  ) {
    modalTitle.innerText = "Registro exitoso";
    modalBody.innerText =
      "Tu registro fue exitoso, nos vemos en la conferencia!";
  } else {
    modalTitle.innerText = "Registro erroneo";
    modalBody.innerText =
      "Los campos del registro son obligatorios y no se llenaron correctamente, porfavor intenta denuevo";
  }
});
