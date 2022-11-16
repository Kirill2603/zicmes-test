import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "./styles/style.scss";

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", orderFormSubmit);
const alert = document.querySelector(".errorAlert");
const succeed = document.querySelector(".succeedAlert");

function orderFormSubmit(event) {
  event.preventDefault();
  const phone = new FormData(orderForm).get("phone");
  if (phone.length < 7) {
    alert.classList.add("show");
    setTimeout(() => alert.classList.remove("show"), 2000);
  } else {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "",
      }),
    })
      .then((res) => res.json())
      .then(() => alert.classList.remove("show"))
      .then(() => succeed.classList.add("show"))
      .then(() => setTimeout(() => succeed.classList.remove("show"), 2000));
    document.getElementById("orderForm").reset();
  }
}
