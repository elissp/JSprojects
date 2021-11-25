function timeForMilkAndCookies() {
  var newDate = document.getElementById("ChristmasEve").value
  newDate = new Date(newDate);

  var day = newDate.getDate();
  var month = newDate.getMonth()+1;

  if (day === 24 && month === 12) {
    alert("Time for milk and cookies!");
    return true;
  } else {
    alert("Not time for milk and cookies");
    return false;
  }
}
