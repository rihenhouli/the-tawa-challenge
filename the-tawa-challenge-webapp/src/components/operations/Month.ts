export const MonthNameGenerator = (month: string) => {
  let monthName = parseInt(month);
  switch (monthName) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  return month
};

export const MonthNumberGenerator = (month: string) => {
  let monthNumber = 0;
  switch (month) {
    case "January":
      monthNumber = 1;
      break;
    case "February":
      monthNumber = 2;
      break;
    case "March":
      monthNumber = 3;
      break;
    case "April":
      monthNumber = 4;
      break;
    case "May":
      monthNumber = 5 ;
      break;
    case "June":
      monthNumber = 6;
      break;
    case "July":
      monthNumber = 7 ;
      break;
    case "August":
      monthNumber = 8;
      break;
    case "September":
      monthNumber = 9;
      break;
    case "October":
      monthNumber = 10;
      break;
    case "November":
      monthNumber = 11;
      break;
    case "December":
      monthNumber = 12;
      break;
  }
  return monthNumber
};
