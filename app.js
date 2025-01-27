//#region STATE
let cheese = 0;

let clickUpgrades = [
  {
    name: 'knife',
    price: 5,
    quantity: 0,
    bonus: 10
  },
  {
    name: 'drill',
    price: 10,
    quantity: 0,
    bonus: 15
  }
];

let autoUpgrades = [
  {
    name: 'mousetronaut',
    price: 15,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'spaceStation',
    price: 20,
    quantity: 0,
    bonus: 2
  }
];

//#endregion



//#region LOGIC
function increaseCheese() {
  cheese += 1
  if (clickUpgrades[0].quantity > 0) {
    cheese += clickUpgrades[0].bonus * clickUpgrades[0].quantity
  }
  if (clickUpgrades[1].quantity > 0) {
    cheese += clickUpgrades[1].bonus * clickUpgrades[1].quantity
  }
  drawCheese()
}

// FIXME - Do not apply the auto upgrades here - For loop is best solution here (but not needed)
// Move this below logic to a collect auto function
//NOTE - call drawCheese in the collectAuto function

function collectAuto() {
  if (autoUpgrades[0].quantity > 0) {
    cheese += autoUpgrades[0].bonus * autoUpgrades[0].quantity
  }
  if (autoUpgrades[1].quantity > 0) {
    cheese += autoUpgrades[1].bonus * autoUpgrades[1].quantity
  }
  drawCheese()
}

// NOTE - this isn't working
function drawClickBonus() {
  let clickBonus = (clickUpgrades[0].bonus * clickUpgrades[0].quantity + clickUpgrades[1].bonus * clickUpgrades[1].quantity)
  const increaseClickBonusElm = document.getElementById('clickBonus')
  increaseClickBonusElm.innerText = clickBonus.toString()
}

function drawAutoBonus() {
  let autoBonus = (autoUpgrades[0].bonus * autoUpgrades[0].quantity + autoUpgrades[1].bonus * autoUpgrades[1].quantity)
  console.log(autoBonus)
  const increaseClickBonusElm = document.getElementById('autoBonus')
  increaseClickBonusElm.innerText = autoBonus.toString()
}


//#endregion




//FIXME - In all buy functions make the price of the upgrade increase
function buyKnife() {
  if (cheese >= clickUpgrades[0].price) {
    clickUpgrades[0].quantity += 1
    cheese -= clickUpgrades[0].price
    clickUpgrades[0].price += 1
    drawKnives()
    drawCheese()
    drawClickBonus()
  }
}

function buyDrill() {
  if (cheese >= clickUpgrades[1].price) {
    clickUpgrades[1].quantity += 1
    //FIXME - add new line similar to above to increase price +1, for all buy functions
    cheese -= clickUpgrades[1].price
    clickUpgrades[1].price += 1
    drawDrills()
    drawCheese()
    drawClickBonus()
  }
}

function buyMousetronaut() {
  if (cheese >= autoUpgrades[0].price) {
    autoUpgrades[0].quantity += 1
    cheese -= autoUpgrades[0].price
    autoUpgrades[0].price += 1
    drawMousetronauts()
    drawCheese()
    drawAutoBonus()
  }
}

function buySpaceStation() {
  if (cheese >= autoUpgrades[1].price) {
    autoUpgrades[1].quantity += 1
    cheese -= autoUpgrades[1].price
    autoUpgrades[1].price += 1
    drawSpaceStations()
    drawCheese()
    drawAutoBonus()
  }
}





//#region GRAPHICS
function drawCheese() {
  const increaseCheeseElm = document.getElementById('cheesePoints')
  increaseCheeseElm.innerText = cheese.toString()
}


// FIXME - create a new variable ('let') and total up the upgrades. 

// function drawAutoBonus() {
//   const increaseClickBonusElm = document.getElementById('autoBonus')
//   increaseClickBonusElm.innerText = cheese.toString()
// }


function drawKnives() {
  const increaseKnivesElm = document.getElementById('knifeTotal')
  increaseKnivesElm.innerText = clickUpgrades[0].quantity.toString()
  const knivesPriceElm = document.getElementById('knifeCost')
  knivesPriceElm.innerText = clickUpgrades[0].price.toString()
}

function drawDrills() {
  const increaseDrillsElm = document.getElementById('drillTotal')
  increaseDrillsElm.innerText = clickUpgrades[1].quantity.toString()
  const drillsPriceElm = document.getElementById('drillCost')
  drillsPriceElm.innerText = clickUpgrades[1].price.toString()

  //FIXME - add another ID on page called "drill price" 
  // get the drill price element by it's ID
  // change the drill price elements innertext to the price of the drill object
  //do this for all of tool-specific draw functions
}
function drawMousetronauts() {
  const increaseMousetronautsElm = document.getElementById('mousetronautTotal')
  increaseMousetronautsElm.innerText = autoUpgrades[0].quantity.toString()
  const mousetronautsPriceElm = document.getElementById('mousetronautCost')
  mousetronautsPriceElm.innerText = autoUpgrades[0].price.toString()
}

function drawSpaceStations() {
  const increaseSpaceStationsElm = document.getElementById('spaceStationTotal')
  increaseSpaceStationsElm.innerText = autoUpgrades[1].quantity.toString()
  const spaceStationsPriceElm = document.getElementById('spaceStationCost')
  spaceStationsPriceElm.innerText = autoUpgrades[1].price.toString()
}

setInterval(collectAuto, 3000);
//#endregion

// TODO - Write another function that applies the bonuses from my auto upgrades.
// TODO - set up an interval that will call "collectAuto"

