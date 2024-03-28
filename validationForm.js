// Validation functions
function validateString(str) {
  console.log(`str ${str} es de tipo ${typeof str}`);
  const s = str;
  console.log(`s ${s} es de tipo ${typeof s}`);
  if (str.trim() === null || str.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

function validateInt(num) {
  return !isNaN(parseInt(num)) && isFinite(num);
}

function validateExt(fileName, extensions) {}

// Validate form data
const form = document.getElementById("goalForm");

form.addEventListener("submit", (e) => {
  const goalTitle = document.getElementById("goalTitle").value;
  const goalArea = document.getElementById("goalArea").value;
  const goalDescription = document.getElementById("goalDescription").value;
  const goalImage = document.getElementById("goalImage");
  const errorTitle = document.getElementById("errorTitle");
  const errorArea = document.getElementById("errorArea");
  const errorDescription = document.getElementById("errorDescription");
  const errorImage = document.getElementById("errorImage");
  var withError = false;

  console.log(
    `Validating title: ${goalTitle}, result: ${validateString(goalTitle)}`
  );
  if (validateString(goalTitle) === false) {
    e.preventDefault();
    withError = true;
    console.log("No es un título válido");
    errorTitle.innerHTML = "Debes completar el campo.";
  } else {
    errorTitle.innerHTML = "";
  }

  console.log(`Validating area: ${goalArea}, result: ${validateInt(goalArea)}`);
  if (validateInt(goalArea) === false) {
    e.preventDefault();
    withError = true;
    console.log("No es un área válida");
    errorArea.innerHTML = "No es un área válida";
  } else {
    errorArea.innerHTML = "";
  }

  console.log(
    `Validating descr: ${goalDescription}, result: ${validateString(
      goalDescription
    )}`
  );
  if (validateString(goalDescription) === false) {
    e.preventDefault();
    withError = true;
    console.log("No es una descripción válida");
    errorDescription.innerHTML = "No es una descripción válida";
  } else {
    errorDescription.innerHTML = "";
  }

  // TODO: Global validation
  if (withError === true) {
    console.log("There are errors in the form, we cannot post data.");
  } else {
    getElements();
    postData();
  }
});
