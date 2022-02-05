var day = new Date();
var today = parseInt(day.getDay());
var hour = parseInt(day.getHours());
var minutes = parseInt(day.getMinutes());
var imgElem = document.getElementById('image_1');

(function () {
  if (today == 1) {
    if (hour == 8 && minutes <= 50) { // Monday A Block
      imgElem.src = 'MonA.png';
    }
    else if (hour == 9) { // Monday B Block
      imgElem.src = 'MonB.png';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Monday B Block
      imgElem.src = 'MonB.png';
    }
    else if (hour == 10 && minutes >= 20) { // Monday Chapel and Conference Block
      imgElem.src = 'MonChapel.png';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Monday Chapel and Conference Block
      imgElem.src = 'MonChapel.png';
    }
    else if (hour == 11 && minutes >=20) { // Monday C Block
      imgElem.src = 'MonC.png';
    }
    else if (hour == 12 && minutes <=10) { // Monday C Block
      imgElem.src = 'MonC.png';
    }
    else if (hour == 12 && minutes > 10 && minutes < 55) { // Monday Lunch
      imgElem.src = 'MonLunch.jpg';
    }
    else if (hour == 12 && minutes >=55) { // Monday D Block
      imgElem.src = 'MonD.jpg';
    }
    else if (hour == 13) { // Monday D Block
      imgElem.src = 'MonD.jpg';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // D Block
      imgElem.src = 'MonD.jpg';
    }
    else if (hour == 14 && minutes >= 10) { // Monday E Block
      imgElem.src = 'MonE.jpg';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // E Block
      imgElem.src = 'MonE.jpg';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 2) {
    if (hour == 8 && minutes <= 50) { // Tuesday F Block
      imgElem.src = 'TuesF.png';
    }
    else if (hour == 9) { // Tuesday G Block
      imgElem.src = 'TuesG.png';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Tuesday G Block
      imgElem.src = 'TuesG.png';
    }
    else if (hour == 10 && minutes >= 20) { // Tuesday DMX Block
      imgElem.src = 'TuesDMX.png';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Tuesday DMX Block
      imgElem.src = 'TuesDMX.png';
    }
    else if (hour == 11 && minutes >=15) { // Tuesday A Block
      imgElem.src = 'TuesA.png';
    }
    else if (hour == 12 && minutes <=10) { // Tuesday A BLock
      imgElem.src = 'TuesA.png';
    }
    else if (hour == 12 && minutes >10) { // Tuesday Lunch 
      imgElem.src = 'TuesLunch.png';
    }
    else if (hour == 13 && minutes >= 0 && minutes < 20) { // Tuesday Lunch 
      imgElem.src = 'TuesLunch.png';
    }
    else if (hour == 13 && minutes >=20) { // Tuesday C Block
      imgElem.src = 'TuesC.png';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // Tuesday C Block
      imgElem.src = 'TuesC.png';
    }
    else if (hour == 14 && minutes >= 10) { // Tuesday B Block
      imgElem.src = 'TuesB.png';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // Tuesday B Block
      imgElem.src = 'TuesB.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 3) {
    if (hour == 8 && minutes <= 50) { // Wednesday D Block
      imgElem.src = 'WedD.png';
    }
    else if (hour == 9) { // Wednesday E Block
      imgElem.src = 'WedE.png';
    }
    else if (hour == 10 && minutes >= 20) { // Wednesday Community Meeting
      imgElem.src = 'WedComm.png';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Wednesday Community Meeting
      imgElem.src = 'WedComm.png';
    }
    else if (hour == 11 && minutes >=20) { // Wednesday G Block
      imgElem.src = 'WedLunch.png';
    }
    else if (hour == 12 && minutes <= 10) { // Wednesday G Block
      imgElem.src = 'WedLunch.png';
    }
    else if (hour == 12 && minutes > 10 && minutes<55) { // Wednesday Lunch
      imgElem.src = 'WedLunch.png';
    }
    else if (hour == 12 && minutes>=55) { // Wednesday F Block
      imgElem.src = 'WedLunch.png';
    }
    else if (hour == 13 && minutes >= 0 && minutes <= 45 ) { // Wednesday F Block
      imgElem.src = 'WedF.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 4) {
    if (hour == 8 && minutes <= 50) { // Thursday B Block
      imgElem.src = 'ThursB.png';
    }
    else if (hour == 9) { // Thursday C Block
      imgElem.src = 'ThursC.png';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Thursday C Block
      imgElem.src = 'ThursC.png';
    }
    else if (hour == 10 && minutes >= 20) { // Thursday DMX Block
      imgElem.src = 'ThursDMX.png';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Thursday DMX Block
      imgElem.src = 'ThursDMX.png';
    }
    else if (hour == 11 && minutes >=15) { // Thursday D Block
      imgElem.src = 'ThursD.png';
    }
    else if (hour == 12 && minutes <=10) { // Thursday D BLock
      imgElem.src = 'ThursD.png';
    }
    else if (hour == 12 && minutes >10) { // Thursday Lunch 
      imgElem.src = 'ThursLunch.png';
    }
    else if (hour == 13 && minutes >= 0 && minutes < 20) { // Thursday Lunch 
      imgElem.src = 'ThursLunch.png';
    }
    else if (hour == 13 && minutes >=20) { // Thursday E Block
      imgElem.src = 'ThursE.png';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // Thursday E Block
      imgElem.src = 'ThursE.png';
    }
    else if (hour == 14 && minutes >= 10) { // Thursday A Block
      imgElem.src = 'ThursA.png';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // Thursday A Block
      imgElem.src = 'ThursA.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 5) {
    if (hour == 8 && minutes <= 50) { // Friday G Block
      imgElem.src = 'FriG.png';
    }
    else if (hour == 9) { // Friday F Block
      imgElem.src = 'FriF.png';
    }
    else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Friday F Block
      imgElem.src = 'FriF.png';
    }
    else if (hour == 10 && minutes >= 20) { // Friday Chapel and Conference Block
      imgElem.src = 'FriChapel.png';
    }
    else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Friday Chapel and Conference Block
      imgElem.src = 'FriChapel.png';
    }
    else if (hour == 11 && minutes >=20) { // Friday B Block
      imgElem.src = 'FriB.png';
    }
    else if (hour == 12 && minutes <=10) { // Friday C Block
      imgElem.src = 'FriB.png';
    }
    else if (hour == 12 && minutes > 10 && minutes < 55) { // Friday Lunch
      imgElem.src = 'FriLunch.jpg';
    }
    else if (hour == 12 && minutes >=55) { // Friday A Block
      imgElem.src = 'FriA.png';
    }
    else if (hour == 13) { // Friday A Block
      imgElem.src = 'FriA.png';
    }
    else if (hour == 14 && minutes >= 0 && minutes < 10) { // Friday A Block
      imgElem.src = 'FriA.png';
    }
    else if (hour == 14 && minutes >= 10) { // Friday C Block
      imgElem.src = 'FriC.png';
    }
    else if (hour == 15 && minutes >= 0 && minutes < 10) { // Friday C Block
      imgElem.src = 'FriC.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 6) {
    if (hour == 8 && minutes <= 50) { // Saturday E Block
      imgElem.src = 'SatE.png';
    }
    else if (hour == 9 && minutes <= 50) { // Saturday D Block
      imgElem.src = 'SatD.png';
    }
    else if (hour == 10  && minutes <= 50) { // Saturday F Block
      imgElem.src = 'SatF.png';
    }
    else if (hour == 11 && minutes <= 50) { // Saturday G Block
      imgElem.src = 'SatG.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 0) {
    imgElem.src = 'dailyschedule.png';
  }
})();