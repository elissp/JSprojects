function timeForMilkAndCookies(dateInput) {
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    if(dateInput=Date(11,24)){
        return true
    } else { return false }
}
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))