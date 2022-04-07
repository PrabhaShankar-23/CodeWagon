/*  We will first find the month  & loop through the first of each month using a counter*/

// let day = new Date();
// dayName = day.getDay();

// console.log(day);
// console.log(dayName);

function getsundayNames(Year) {
  let sundays = 0;
  for (let month = 1; month <= 12; month++) {
    if (new Date(Year, month, 1).getDay() === 0) {
      sundays++;
    }
  }
  console.log(sundays + "  😍");
  return sundays;
}

getsundayNames(2000);
getsundayNames(2005);
getsundayNames(2006);
getsundayNames(2009);
getsundayNames(2022);
getsundayNames(2021);
