var day = new Date();
var today = parseInt(day.getDay());
var hour = parseInt(day.getHours());
var minutes = parseInt(day.getMinutes());
var imgElem = document.getElementById('image_1');

(function () {
  if (today == 1) {
    if (hour >= 8 && hour < 9 && minutes >= 0 && minutes <= 50) { // Monday A Block
      imgElem.src = 'MonA.png';
    }
    else if (hour >= 9 && hour <= 10) { // Monday B Block
      imgElem.src = 'MonB.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 15) { // Monday B Block
      imgElem.src = 'MonB.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 25) { // Monday C Block
      imgElem.src = 'MonC.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >= 0 && minutes <= 15) { // Monday C Block
      imgElem.src = 'MonC.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >15) { // Monday Lunch / Chapel
      imgElem.src = 'MonLunch.png';
    }
    else if (hour >= 12 && hour <= 13 && minutes >= 0 && minutes < 55) { // Monday Lunch / Chapel
      imgElem.src = 'MonLunch.jpg';
    }
    else if (hour >= 12 && hour <= 13 && minutes >=55) { // Monday D Block
      imgElem.src = 'MonD.jpg';
    }
    else if (hour >= 13 && hour <= 14) { // Monday D Block
      imgElem.src = 'MonD.jpg';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 0 && minutes < 10) { // D Block
      imgElem.src = 'MonD.jpg';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 10) { // Monday E Block
      imgElem.src = 'MonE.jpg';
    }
    else if (hour >= 15 && hour <= 16 && minutes >= 0 && minutes < 10) { // E Block
      imgElem.src = 'MonE.jpg';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 2) {
    if (hour >= 8 && hour < 9 && minutes >= 0 && minutes <= 50) { // Tuesday F Block
      imgElem.src = 'TuesF.png';
    }
    else if (hour >= 9 && hour <= 10) { // Tuesday G Block
      imgElem.src = 'TuesG.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 15) { // Tuesday G Block
      imgElem.src = 'TuesG.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 25) { // Tuesday A Block
      imgElem.src = 'TuesA.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >= 0 && minutes <= 15) { // Tuesday A Block
      imgElem.src = 'TuesA.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >15) { // Tuesday Lunch / DMX
      imgElem.src = 'TuesLunch.png';
    }
    else if (hour >= 12 && hour <= 13) { // Tuesday Lunch / DMX
      imgElem.src = 'TuesLunch.png';
    }
    else if (hour >= 13 && hour <= 14 && minutes >= 0 && minutes < 20) { // Tuesday Lunch / DMX
      imgElem.src = 'TuesLunch.png';
    }
    else if (hour >= 13 && hour <= 14 && minutes >=20) { // Tuesday C Block
      imgElem.src = 'TuesC.png';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 0 && minutes < 10) { // Tuesday C Block
      imgElem.src = 'TuesC.png';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 10) { // Tuesday B Block
      imgElem.src = 'TuesB.png';
    }
    else if (hour >= 15 && hour <= 16 && minutes >= 0 && minutes < 10) { // Tuesday B Block
      imgElem.src = 'TuesB.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 3) {
    if (hour >= 8 && hour < 9 && minutes >= 0 && minutes <= 50) { // Wednesday D Block
      imgElem.src = 'WedD.png';
    }
    else if (hour >= 9 && hour <= 10) { // Wednesday E Block
      imgElem.src = 'WedE.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 15) { // Wednesday E Block 
      imgElem.src = 'WedE.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 25) { // Wednesday G Block
      imgElem.src = 'WedG.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >= 0 && minutes <= 15) { // Wednesday G Block
      imgElem.src = 'WedG.png';
    }
    else if (hour >= 11 && hour <= 12) { // Wednesday Lunch / Community Meeting
      imgElem.src = 'WedLunch.png';
    }
    else if (hour >= 12 && hour <= 13 && minutes >= 0 && minutes < 55) { // Wednesday Lunch / Community Meeting
      imgElem.src = 'WedLunch.png';
    }
    else if (hour >= 12 && hour <= 13) { // Wednesday F Block
      imgElem.src = 'WedF.png';
    }
    else if (hour >= 13 && hour <= 14 && minutes >= 0 && minutes <= 45 ) { // Wednesday F Block
      imgElem.src = 'WedF.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 4) {
    if (hour >= 8 && hour < 9 && minutes >= 0 && minutes <= 50) { // Thursday B Block
      imgElem.src = 'ThursB.png';
    }
    else if (hour >= 9 && hour <= 10) { // Thursday C Block
      imgElem.src = 'ThursC.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 15) { // Thursday C Block
      imgElem.src = 'ThursC.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 25) { // Thursday D Block
      imgElem.src = 'ThursD.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >= 0 && minutes <= 15) { // Thursday D Block
      imgElem.src = 'ThursD.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >15) { // Thursday Lunch / DMX
      imgElem.src = 'ThursLunch.png';
    }
    else if (hour >= 12 && hour <= 13) { // Thursday Lunch / DMX
      imgElem.src = 'ThursLunch.png';
    }
    else if (hour >= 13 && hour <= 14 && minutes >= 0 && minutes < 20) { // Thursday Lunch / DMX
      imgElem.src = 'ThursLunch.png';
    }
    else if (hour >= 13 && hour <= 14 && minutes >=20) { // Thursday E Block
      imgElem.src = 'ThursE.png';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 0 && minutes < 10) { // Thursday E Block
      imgElem.src = 'ThursE.png';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 10) { // Thursday A Block
      imgElem.src = 'ThursA.png';
    }
    else if (hour >= 15 && hour <= 16 && minutes >= 0 && minutes < 10) { // Thursday A Block
      imgElem.src = 'ThursA.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 5) {
    if (hour >= 8 && hour < 9 && minutes >= 0 && minutes <= 50) { // Friday G Block
      imgElem.src = 'FriG.png';
    }
    else if (hour >= 9 && hour <= 10) { // Friday F Block
      imgElem.src = 'FriF.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 15) { // Friday F Block
      imgElem.src = 'FriF.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 25) { // Friday B Block
      imgElem.src = 'FriB.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >= 0 && minutes <= 15) { // Friday B Block
      imgElem.src = 'FriB.png';
    }
    else if (hour >= 11 && hour <= 12 && minutes >15) { // Friday Lunch / Chapel
      imgElem.src = 'FriLunch.png';
    }
    else if (hour >= 12 && hour <= 13 && minutes >= 0 && minutes < 55) { // Friday Lunch / Chapel
      imgElem.src = 'FriLunch.png';
    }
    else if (hour >= 12 && hour <= 13 && minutes >=55) { // Friday A Block
      imgElem.src = 'FriA.png';
    }
    else if (hour >= 13 && hour <= 14) { // Friday A Block
      imgElem.src = 'FriA.png';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 0 && minutes < 10) { // Friday A Block
      imgElem.src = 'FriA.png';
    }
    else if (hour >= 14 && hour <= 15 && minutes >= 10) { // Friday C Block
      imgElem.src = 'FriC.png';
    }
    else if (hour >= 15 && hour <= 16 && minutes >= 0 && minutes < 10) { // Friday C Block
      imgElem.src = 'FriC.png';
    }
    else {
      imgElem.src = 'dailyschedule.png';
    }
  }
  if (today == 6) {
    if (hour >= 8 && hour < 9 && minutes >= 0 && minutes <= 50) { // Saturday E Block
      imgElem.src = 'SatE.png';
    }
    else if (hour >= 9 && hour <= 10 && minutes >= 0 && minutes <= 50) { // Saturday D Block
      imgElem.src = 'SatD.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 50) { // Saturday F Block
      imgElem.src = 'SatF.png';
    }
    else if (hour >= 10 && hour <= 11 && minutes >= 0 && minutes <= 50) { // Saturday G Block
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