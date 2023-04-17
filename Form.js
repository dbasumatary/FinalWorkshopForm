var nameInput = document.getElementById("name");
var fatherNameInput = document.getElementById("father-name");
var incomeInput = document.getElementById("income");

function validateForm() {
  var income = incomeInput.value;
  var scholarship = 0;

  // Checking if the student has already applied for scholarship
  if (localStorage.getItem('name')) {
    alert("You have already applied for the scholarship.");
    scholarship = localStorage.getItem('name');
  }

  // Calculating the scholarship amount
  else if (income < 500000) {
    scholarship = Math.round(0.1 * (500000 - income));
    alert("Congratulations! You have been awarded a scholarship of Rs. " + scholarship);

    // Storing the scholarship amount in local storage
    localStorage.setItem('name', scholarship);
  } 
  else {
    alert('You are not applicable for the scholarship');
  }
}
