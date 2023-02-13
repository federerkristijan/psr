function calculatemonthlypayment() {
  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;
  var monthlypayment = (principal * years * rate) / 100;
  document.getElementById("result").innerHTML =
    "Your monthly payment is " + monthlypayment;
}
nfjhgfztf;
