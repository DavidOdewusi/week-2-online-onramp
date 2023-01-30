const inputAll = document.querySelectorAll(".input");
const inputName = document.querySelector(".input__name");
const inputEmail = document.querySelector(".input__email");
const inputPhone = document.querySelector(".input__phone");
const inputMessage = document.querySelector(".message");
const btnCancel = document.querySelector(".btn-cancel");
const btnSend = document.querySelector(".btn-send");

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  inputAll.forEach((e) => (e.value = ""));
});

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  let count = 0;
  inputAll.forEach((e) => {
    if (e.value === "") count++;
  });
  if (count > 1) alert("All input boxes must be filled");
  else if (!Number(inputPhone.value))
    alert("Phone Number field must only contain numbers");
  else if (inputMessage.value.length > 100)
    alert(`Message field cannot have more than 100 characters`);
  else alert(`Welcome ${inputName.value}`);

  inputAll.forEach((e) => (e.value = ""));
});
