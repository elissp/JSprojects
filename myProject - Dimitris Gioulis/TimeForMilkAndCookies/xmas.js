const d = new Date('December 24,');

function timeForMilkAndCookies() {
  let day = d.getDay();
  let month = m.getMonth()+1;
  if (day&&month == d ) {
    console.log("Time for milk and cookies");
    return true;
  } else {
    console.log("Not time for milk and cookies");
    return false;
  }
}
