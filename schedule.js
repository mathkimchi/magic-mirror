var day = new Date();
var today = parseInt(day.getDay());
var hour = parseInt(day.getHours());
var minutes = parseInt(day.getMinutes());
var imgElem = document.getElementById('image_1');

(function () {
  if (today == 1) {
    if (hour == 8 && minutes <= 50) { // Monday A Block
      imgElem.src = 'MonA.PNG';
    }
    else if (hour == 9) { // Monday B Block
      imgElem.src = 'MonB.PNG';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Monday B Block
      imgElem.src = 'MonB.PNG';
    }
    else if (hour == 10 && minutes >= 20) { // Monday Chapel and Conference Block
      imgElem.src = 'MonChapel.PNG';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Monday Chapel and Conference Block
      imgElem.src = 'MonChapel.PNG';
    }
    else if (hour == 11 && minutes >=20) { // Monday C Block
      imgElem.src = 'MonC.PNG';
    }
    else if (hour == 12 && minutes <=10) { // Monday C Block
      imgElem.src = 'MonC.PNG';
    }
    else if (hour == 12 && minutes > 10 && minutes < 55) { // Monday Lunch
      imgElem.src = 'MonLunch.PNG';
    }
    else if (hour == 12 && minutes >=55) { // Monday D Block
      imgElem.src = 'MonD.PNG';
    }
    else if (hour == 13) { // Monday D Block
      imgElem.src = 'MonD.PNG';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // D Block
      imgElem.src = 'MonD.PNG';
    }
    else if (hour == 14 && minutes >= 10) { // Monday E Block
      imgElem.src = 'MonE.PNG';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // E Block
      imgElem.src = 'MonE.PNG';
    }
    else {
      imgElem.src = 'DailySchedule.PNG';
    }
  }
  if (today == 2) {
    if (hour == 8 && minutes <= 50) { // Tuesday F Block
      imgElem.src = 'TuesF.PNG';
    }
    else if (hour == 9) { // Tuesday G Block
      imgElem.src = 'TuesG.PNG';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Tuesday G Block
      imgElem.src = 'TuesG.PNG';
    }
    else if (hour == 10 && minutes >= 20) { // Tuesday DMX Block
      imgElem.src = 'TuesDMX.PNG';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Tuesday DMX Block
      imgElem.src = 'TuesDMX.PNG';
    }
    else if (hour == 11 && minutes >=15) { // Tuesday A Block
      imgElem.src = 'TuesA.PNG';
    }
    else if (hour == 12 && minutes <=10) { // Tuesday A BLock
      imgElem.src = 'TuesA.PNG';
    }
    else if (hour == 12 && minutes >10) { // Tuesday Lunch 
      imgElem.src = 'TuesLunch.PNG';
    }
    else if (hour == 13 && minutes >= 0 && minutes < 20) { // Tuesday Lunch 
      imgElem.src = 'TuesLunch.PNG';
    }
    else if (hour == 13 && minutes >=20) { // Tuesday C Block
      imgElem.src = 'TuesC.PNG';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // Tuesday C Block
      imgElem.src = 'TuesC.PNG';
    }
    else if (hour == 14 && minutes >= 10) { // Tuesday B Block
      imgElem.src = 'TuesB.PNG';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // Tuesday B Block
      imgElem.src = 'TuesB.PNG';
    }
    else {
      imgElem.src = 'DailySchedule.PNG';
    }
  }
  if (today == 3) {
    if (hour == 8 && minutes <= 50) { // Wednesday D Block
      imgElem.src = 'WedD.PNG';
    }
    else if (hour == 9) { // Wednesday E Block
      imgElem.src = 'WedE.PNG';
    }
    else if (hour == 10 && minutes >= 20) { // Wednesday Community Meeting
      imgElem.src = 'WedComm.PNG';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Wednesday Community Meeting
      imgElem.src = 'WedComm.PNG';
    }
    else if (hour == 11 && minutes >=20) { // Wednesday G Block
      imgElem.src = 'WedG.PNG';
    }
    else if (hour == 12 && minutes <= 10) { // Wednesday G Block
      imgElem.src = 'WedG.PNG';
    }
    else if (hour == 12 && minutes > 10 && minutes<55) { // Wednesday Lunch
      imgElem.src = 'WedLunch.PNG';
    }
    else if (hour == 12 && minutes>=55) { // Wednesday F Block
      imgElem.src = 'WedF.PNG';
    }
    else if (hour == 13 && minutes >= 0 && minutes <= 45 ) { // Wednesday F Block
      imgElem.src = 'WedF.PNG';
    }
    else {
      imgElem.src = 'DailySchedule.PNG';
    }
  }
  if (today == 4) {
    if (hour == 8 && minutes <= 50) { // Thursday B Block
      imgElem.src = 'ThursB.PNG';
    }
    else if (hour == 9) { // Thursday C Block
      imgElem.src = 'ThursC.PNG';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Thursday C Block
      imgElem.src = 'ThursC.PNG';
    }
    else if (hour == 10 && minutes >= 20) { // Thursday DMX Block
      imgElem.src = 'ThursDMX.PNG';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Thursday DMX Block
      imgElem.src = 'ThursDMX.PNG';
    }
    else if (hour == 11 && minutes >=15) { // Thursday D Block
      imgElem.src = 'ThursD.PNG';
    }
    else if (hour == 12 && minutes <=10) { // Thursday D BLock
      imgElem.src = 'ThursD.PNG';
    }
    else if (hour == 12 && minutes >10) { // Thursday Lunch 
      imgElem.src = 'ThursLunch.PNG';
    }
    else if (hour == 13 && minutes >= 0 && minutes < 20) { // Thursday Lunch 
      imgElem.src = 'ThursLunch.PNG';
    }
    else if (hour == 13 && minutes >=20) { // Thursday E Block
      imgElem.src = 'ThursE.PNG';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // Thursday E Block
      imgElem.src = 'ThursE.PNG';
    }
    else if (hour == 14 && minutes >= 10) { // Thursday A Block
      imgElem.src = 'ThursA.PNG';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // Thursday A Block
      imgElem.src = 'ThursA.PNG';
    }
    else {
      imgElem.src = 'DailySchedule.PNG';
    }
  }
  if (today == 5) {
    if (hour == 8 && minutes <= 50) { // Friday G Block
      imgElem.src = 'FriG.PNG';
    }
    else if (hour == 9) { // Friday F Block
      imgElem.src = 'FriF.PNG';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Friday F Block
      imgElem.src = 'FriF.PNG';
    }
    else if (hour == 10 && minutes >= 20) { // Friday Chapel and Conference Block
      imgElem.src = 'FriChapel.PNG';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Friday Chapel and Conference Block
      imgElem.src = 'FriChapel.PNG';
    }
    else if (hour == 11 && minutes >=20) { // Friday B Block
      imgElem.src = 'FriB.PNG';
    }
    else if (hour == 12 && minutes <=10) { // Friday C Block
      imgElem.src = 'FriB.PNG';
    }
    else if (hour == 12 && minutes > 10 && minutes < 55) { // Friday Lunch
      imgElem.src = 'FriLunch.PNG';
    }
    else if (hour == 12 && minutes >=55) { // Friday A Block
      imgElem.src = 'FriA.PNG';
    }
    else if (hour == 13) { // Friday A Block
      imgElem.src = 'FriA.PNG';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // Friday A Block
      imgElem.src = 'FriA.PNG';
    }
    else if (hour == 14 && minutes >= 10) { // Friday C Block
      imgElem.src = 'FriC.PNG';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // Friday C Block
      imgElem.src = 'FriC.PNG';
    }
    else {
      imgElem.src = 'DailySchedule.PNG';
    }
  }
  if (today == 6) {
    if (hour == 8 && minutes <= 50) { // Saturday E Block
      imgElem.src = 'SatE.PNG';
    }
    else if (hour == 9 && minutes <= 50) { // Saturday D Block
      imgElem.src = 'SatD.PNG';
    }
    else if (hour == 10  && minutes <= 50) { // Saturday F Block
      imgElem.src = 'SatF.PNG';
    }
    else if (hour == 11 && minutes <= 50) { // Saturday G Block
      imgElem.src = 'SatG.PNG';
    }
    else {
      imgElem.src = 'DailySchedule.PNG';
    }
  }
  if (today == 0) {
    imgElem.src = 'DailySchedule.PNG';
  }
  if (hour == 8 && minutes == 0 && seconds ==0 ) {
    window.location.reload();
  }
  else if (hour == 9 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 10 && minutes == 20 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 11 && minutes == 20 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 12 && minutes == 10 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 14 && minutes == 20 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 15 && minutes > 10 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 16 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 17 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 18 && minutes == 0 && seconds ==0  ) { 
    window.location.reload();
  }
  else if (hour == 19 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 20 && minutes == 0 && seconds ==0)  { 
    window.location.reload();
  }
  else if (hour == 21 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 22 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 23 && minutes == 0 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 24 && minutes ==0 && seconds ==0) { 
    window.location.reload();
  }
  if (today == 1 || today == 3 || today ==5) {
    if (hour == 12 && minutes == 55 && seconds ==0) {
      window.location.reload();
    }
  }
  else if (today == 2 || today == 4) {
    if (hour == 13 && minutes == 20 && seconds ==0) {
      window.location.reload();
  }
  }
  else if (today == 6 ) {
    if (hour == 11 && minutes == 51 && seconds ==0) {
      window.location.reload();
  }
  }
  else if (today == 3 ) {
    if (hour == 13 && minutes == 46 && seconds ==0) {
      window.location.reload();
  }
  else if (hour == 1  && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 2 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 3 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 4 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 5 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 6 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 7 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  }

})();