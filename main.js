const submitBtn = document.getElementById("btn-submit");

submitBtn.addEventListener("click", function () {
  const thanksContainer = document.querySelector(".thanks-container"),
    cardContainer = document.querySelector(".card-container"),
    calification = document.getElementById("calification"),
    selectedNumber = document.querySelector('input[name="rating"]:checked')?.value;

  if (!selectedNumber) {
    alert("Selecciona una calificación");
  } else {
    cardContainer.style.display = "none";
    thanksContainer.style.display = "flex";
    calification.textContent = selectedNumber;
  }
  setTimeout(() => {
    const checkedRadio = document.querySelector('input[name="rating"]:checked');
    cardContainer.style.display = "flex";
    thanksContainer.style.display = "none";
    if (checkedRadio) {
      checkedRadio.checked = false;
    }
  }, 3500);
});
