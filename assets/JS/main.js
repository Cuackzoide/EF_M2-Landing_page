// Selección con javaScript puro
const nameInput = document.querySelector("#name");
const nameMessage = document.querySelector("#name-message");
const emailInput = document.querySelector("#email");
const emailMessage = document.querySelector("#email-message");
const jobInput = document.querySelector("#job");
const jobMessage = document.querySelector("#job-message");
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
const formBtn = document.querySelector("#form-btn");
const form = document.querySelector("#registrationForm");

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

//Validación simple del formulario
caracteresPermitidos = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/;
//Alertas en los inputs
nameInput.addEventListener("input", (e) => {
  if (!caracteresPermitidos.test(e.target.value)) {
    nameMessage.classList.add("hide");
  } else {
    nameMessage.classList.remove("hide");
  }
});

jobInput.addEventListener("input", (e) => {
  if (!caracteresPermitidos.test(e.target.value)) {
    jobMessage.classList.add("hide");
  } else {
    jobMessage.classList.remove("hide");
  }
});

emailInput.addEventListener("input", (e) => {
  if (e.target.value.includes("@") && e.target.value.includes(".")) {
    emailMessage.classList.add("hide");
  } else {
    emailMessage.classList.remove("hide");
  }
});

form.addEventListener("submit", (SubmitEvent) => {
  SubmitEvent.preventDefault();
  if (
    nameInput.value.trim() !== "" &&
    !caracteresPermitidos.test(nameInput.value) &&
    jobInput.value.trim() !== "" &&
    !caracteresPermitidos.test(jobInput.value) &&
    emailInput.value.trim() !== "" &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".")
  ) {
    modalTitle.innerText = "Registro exitoso";
    modalBody.innerText =
      "Tu registro se ha enviado exitosamente, nos vemos en el evento!";
  } else {
    modalTitle.innerText = "Registro erroneo";
    modalBody.innerText =
      "Los campos del registro son obligatorios y no se llenaron correctamente, porfavor intenta denuevo";
  }
});
