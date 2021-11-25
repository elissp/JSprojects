/*Is it Time for Milk and Cookies?

    Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
    Create a function that accepts aDateobject and returnstrueif it's Christmas Eve (December 24th) andfalseotherwise.
    Keep in mind JavaScript'sDatemonth is 0 based, meaning December is the 11th month while January is 0.
    
    timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
    timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
    timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
    
    Notes:
    Dates are zero zero based (see resources).
    All test cases contain valid dates.
*/
function timeForMilkAndCookies(year, month, day) {
  if (month === 11 && day === 24 && year > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(timeForMilkAndCookies(2013, 11, 24));
