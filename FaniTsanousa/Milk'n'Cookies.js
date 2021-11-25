function timeForMilkAndCookies(date) {
	const getDate = new Date(date);
	const monthDate = getDate.getMonth();
	const dayDate = getDate.getDate();
	
	if (monthDate == 11 && dayDate == 24) {
		return true;
	} else {
		return false;
	}
}