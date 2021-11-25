function timeForMilkAndCookies(year, month, day) {
  if (month === 11 && day === 24 && year > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(timeForMilkAndCookies(2013, 11, 24));
