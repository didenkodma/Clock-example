function clock() {
   let arrDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   let now = new Date();
   let day = now.getDay();
   let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
   let min = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
   let sec = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

   document.querySelector('.clock-day').innerHTML = arrDays[day];
   document.querySelector('.clock-hour').innerHTML = hour;
   document.querySelector('.clock-min').innerHTML = min;
   document.querySelector('.clock-sec').innerHTML = sec;

   setTimeout(clock, 1000);
}
clock();