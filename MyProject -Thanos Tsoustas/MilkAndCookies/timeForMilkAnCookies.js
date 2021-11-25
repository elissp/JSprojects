const timeForMilkAndCookies = (date) =>
  date.getMonth() === 11 && date.getDate() === 24
    ? console.log("It's Milk and Cookies time!")
    : console.log("It's not Milk and Cookies time!");

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
