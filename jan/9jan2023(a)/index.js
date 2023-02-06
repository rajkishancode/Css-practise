// Add JavaScript code here
/**
 * ! For Showing Number of tickets and total price
 **/

let selectedTickets = 0;

const totalTickets = document.getElementById("totalTickets");
const totalPrice = document.getElementById("totalPrice");
const showTotalPrice = (noOfSelectedTickets) => {
  let price = 10 * noOfSelectedTickets;
  totalTickets.innerHTML = noOfSelectedTickets;
  totalPrice.innerHTML = price;
};

// showTotalPrice(7);

/**
 * ! For Handling Click on Booked Seats --> giving alert
 **/

const bookedSeats = document.querySelectorAll(".seat-matrix .booked");
for (let i = 0; i < bookedSeats.length; i++) {
  bookedSeats[i].addEventListener("click", () => {
    alert("This seat is already booked!");
  });
}

/**
 * ! For Handling Click on Available/Selected Seats --> Toggling that seat state
 **/

const availableSeats = document.querySelectorAll(".seat-matrix .available");
for (let j = 0; j < availableSeats.length; j++) {
  let seat = availableSeats[j];
  seat.addEventListener("click", () => {
    if (!seat.classList.contains("selected")) {
      seat.classList.add("selected");
      selectedTickets++;
      showTotalPrice(selectedTickets);
    } else {
      seat.classList.remove("selected");
      selectedTickets--;
      showTotalPrice(selectedTickets);
    }
  });
}

/**
 * ! For Handling Click on Next Btn
 **/

const nextBtn = document.getElementById("next-btn");
const bookMoreBtn = document.getElementById("book-more-btn");
const movieTicket = document.getElementsByClassName("movie-ticket")[0];
const card = document.getElementsByClassName("card")[0];
nextBtn.addEventListener("click", () => {
  if (selectedTickets === 0) {
    alert("Please select the seats");
  } else {
    movieTicket.classList.add("hidden");
    card.classList.remove("hidden");
    document.getElementById("total").innerHTML = selectedTickets;
    document.getElementById("money").innerHTML = selectedTickets * 10;
  }
});

bookMoreBtn.addEventListener("click", () => {
  movieTicket.classList.remove("hidden");
  card.classList.add("hidden");
});
