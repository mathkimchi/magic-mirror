const AnyList = require('anylist');

const any = new AnyList({email: 'tothienbao6a@gmail.com', password: 'tothienbao2004'});
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  any.on('lists-update', lists => {
    console.log('Lists were updated!');
  });
  
  any.login().then(async () => {
    await any.getLists();
  
    // Add new item to the Walmart list
    const walmart = any.getListByName('Walmart');
  
    let chips = any.createItem({name: 'Chips'});
  
    chips = await walmart.addItem(chips)
  
    // Check off added item
    chips.checked = true;
    // And change the quantity
    chips.quantity = '2';
    // Save updated item
    await chips.save();
  
    // Delete item
    await walmart.removeItem(chips);
  
    any.teardown();
  });