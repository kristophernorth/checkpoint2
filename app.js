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
// NOTE - can I do this much easier with a for-loop??
function increaseCheese() {
  cheese += 1
  if (clickUpgrades[0].quantity > 0) {
    cheese += clickUpgrades[0].bonus * clickUpgrades[0].quantity
  }
  if (clickUpgrades[1].quantity > 0) {
    cheese += clickUpgrades[1].bonus * clickUpgrades[1].quantity
  }
  if (autoUpgrades[0].quantity > 0) {
    cheese += autoUpgrades[0].bonus * autoUpgrades[0].quantity
  }
  if (autoUpgrades[1].quantity > 0) {
    cheese += autoUpgrades[1].bonus * autoUpgrades[1].quantity
  }
  drawCheese()
  // drawClickBonus()
}


// function calcClickBonus() {

// }

function buyKnife() {
  if (cheese >= clickUpgrades[0].price) {
    clickUpgrades[0].quantity += 1
    cheese -= clickUpgrades[0].price
    drawKnives()
    drawCheese()
  }
}

function buyDrill() {
  if (cheese >= clickUpgrades[1].price) {
    clickUpgrades[1].quantity += 1
    cheese -= clickUpgrades[1].price
    drawDrills()
    drawCheese()
  }
}

function buyMousetronaut() {
  if (cheese >= autoUpgrades[0].price) {
    autoUpgrades[0].quantity += 1
    cheese -= autoUpgrades[0].price
    drawMousetronauts()
    drawCheese()
  }
}

function buySpaceStation() {
  if (cheese >= autoUpgrades[1].price) {
    autoUpgrades[1].quantity += 1
    cheese -= autoUpgrades[1].price
    drawSpaceStations()
    drawCheese()
  }
}



// function collectAutoUpgrades() {
//   // for (let i = 0; i < autoUpgrades.length; i++) {
//   //   const autoIncrease = autoUpgrades[i]

//   //   let autoIncrease = autoUpgrades[i].bonus

// }
// }

//#endregion



//#region GRAPHICS
function drawCheese() {
  const increaseCheeseElm = document.getElementById('cheesePoints')
  increaseCheeseElm.innerText = cheese.toString()
}

// function drawClickBonus() {
//   const increaseClickBonusElm = document.getElementById('clickBonus')
//   increaseClickBonusElm.innerText = cheese.toString()
// }

// function drawAutoBonus() {
//   const increaseAutoBonusElm = document.getElementById('autoBonus')
//   increaseAutoBonusElm.innerText = cheese.toString()
// }

function drawKnives() {
  const increaseKnivesElm = document.getElementById('knifeTotal')
  increaseKnivesElm.innerText = clickUpgrades[0].quantity.toString()
}

function drawDrills() {
  const increaseDrillsElm = document.getElementById('drillTotal')
  increaseDrillsElm.innerText = clickUpgrades[1].quantity.toString()
}
function drawMousetronauts() {
  const increaseMousetronautsElm = document.getElementById('mousetronautTotal')
  increaseMousetronautsElm.innerText = autoUpgrades[0].quantity.toString()
}

function drawSpaceStations() {
  const increaseSpaceStationsElm = document.getElementById('spaceStationTotal')
  increaseSpaceStationsElm.innerText = autoUpgrades[1].quantity.toString()
}

// setInterval(collectAutoUpgrades, 3000);
//#endregion