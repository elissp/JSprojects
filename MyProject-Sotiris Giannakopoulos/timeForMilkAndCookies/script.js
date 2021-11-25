function timeForMilkAndCookies(date) {
   var month = date.getMonth();
   var day = date.getDate();
   if (month == 11 && day == 24) {
      return true;
   } else {
      return false;
   }
}


console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); //true 
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));  //false

