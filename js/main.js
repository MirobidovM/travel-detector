var elText = document.querySelector(".js-text");

var DOLLAR = 11191.0;
var EURO = 11747.42;

var bilet = 500;
var hotel = 250;
var enjoy = 120;

var biletSumm = bilet * DOLLAR;
var hotelSumm = hotel * DOLLAR;
var enjoySumm = enjoy * EURO;

var summ = biletSumm + hotelSumm + enjoySumm;

var userMoney = prompt("Qancha pullingiz bor? (SUMM)");
-0;

if (userMoney >= summ) {
  elText.textContent = "Pul yetdi";
} else {
  elText.textContent = "Pul yeq";
}
