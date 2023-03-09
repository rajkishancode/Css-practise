// Add JavaScript code here

const form = document.querySelector(".donate_form");

let timeout;
const showAlert = (value) => {
  clearTimeout(timeout);

  const alert = document.querySelector(".alert");
  alert.innerHTML = value;
  alert.setAttribute("aria-hidden", false);

  timeout = setTimeout(() => {
    alert.setAttribute("aria-hidden", true);
  }, 1000 * 4);
};

const btnAdd = document.querySelector(".btn_add");

const addDonor = () => {
  const inputElmnt = document.createElement("input");
  inputElmnt.setAttribute("type", "text");
  inputElmnt.setAttribute("placeholder", "Enter the name");
  inputElmnt.setAttribute("name", "donors[]");

  const donorsElmt = document.querySelector(".donors");
  donorsElmt.appendChild(inputElmnt);
};

btnAdd.addEventListener("click", addDonor);

const onSubmit = (e) => {
  const payingType = e.target.elements["paying_type"].value;
  const amount = e.target.elements["amount"].value;
  const amount_other = e.target.elements["amount_other"].value;
  const payFee = e.target.elements["pay_fee"].checked;
  const donor = e.target.elements["donor"].value;
  const donorsElmt = e.target.elements["donors[]"] || [];

  let donors = [];
  if (donorsElmt.length) {
    for (let i = 0; i < donorsElmt.length; i += 1) {
      const input = donorsElmt[i];
      donors.push(input.value);
    }
  } else if (donorsElmt?.value) {
    donors.push(donorsElmt?.value);
  }

  showAlert(
    `Thanks you ${donor}${donors.length > 0 ? ", " : ""}${donors.join(
      ", "
    )} for your support of ${
      amount === "other" ? amount_other : amount
    }€ ${payingType}`
  );

  event.preventDefault();
};

form.addEventListener("submit", onSubmit);
