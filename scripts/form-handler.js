const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);

  function clearMessage() {
    status.innerHTML = "";
  }

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Съобщението е изпратено успешно!";
      setTimeout(clearMessage, 3000);
      form.reset();
    })
    .catch((error) => {
      status.style.color = "red";
      status.innerHTML = "Съобщението не беше изпратено!";
      setTimeout(clearMessage, 3000);
    });
}

form.addEventListener("submit", handleSubmit);
