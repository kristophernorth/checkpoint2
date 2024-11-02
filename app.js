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
}

// function totalClickUpgradeBonus() {
//   clickUpgradeBonus
// }


// let total = 0
// for (let i = 0; i < clickUpgrades.length; i++) {
//   const item = clickUpgrades[i];
//   total += item.bonus * item.quantity
// }
// return total
// function increasePrice() {

// }

// function calcClickBonus() {
//   cheese += 1
//   if (clickUpgrades[0].quantity > 0) {
//     cheese += clickUpgrades[0].bonus * clickUpgrades[0].quantity
//   }
//   if (clickUpgrades[1].quantity > 0) {
//     cheese += clickUpgrades[1].bonus * clickUpgrades[1].quantity
//   }
//   drawClickBonus
// }

//   let totalKnifeBonus = clickUpgrades[0].quantity * clickUpgrades[0].bonus
//   let totalDrillBonus = clickUpgrades[1].quantity * clickUpgrades[1].bonus
//   let totalClickBonus = totalKnifeBonus += totalDrillBonus
//   return totalClickBonus
// }
//   for (let i = 0; i < clickUpgrades.length; i++) {
//     const clickUpgrade = clickUpgrades[i];
//     totalClickBonus += clickUpgrade.bonus
//     console.log(clickUpgrade.bonus)
//   }
//   return totalClickBonus
// }
// if (clickUpgrades[0].quantity > 0) {
//   cheese += clickUpgrades[0].bonus * clickUpgrades[0].quantity
// }
// if (clickUpgrades[1].quantity > 0) {
//   cheese += clickUpgrades[1].bonus * clickUpgrades[1].quantity
// // }
// drawClickBonus()


// function increaseAutoBonus() {
//   cheese = 0
//   if (autoUpgrades[0].quantity > 0) {
//     cheese += autoUpgrades[0].bonus * autoUpgrades[0].quantity
//   }
//   if (autoUpgrades[1].quantity > 0) {
//     cheese += autoUpgrades[1].bonus * autoUpgrades[1].quantity
//   }
//   drawAutoBonus()
// }



function buyKnife() {
  if (cheese >= clickUpgrades[0].price) {
    clickUpgrades[0].quantity += 1
    cheese -= clickUpgrades[0].price
    drawKnives()
    drawCheese()
    drawClickBonus()
  }
}

function buyDrill() {
  if (cheese >= clickUpgrades[1].price) {
    clickUpgrades[1].quantity += 1
    cheese -= clickUpgrades[1].price
    drawDrills()
    drawCheese()
    drawClickBonus()
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

//#endregion



//#region GRAPHICS
function drawCheese() {
  const increaseCheeseElm = document.getElementById('cheesePoints')
  increaseCheeseElm.innerText = cheese.toString()
}

function drawClickBonus() {
  const increaseClickBonusElm = document.getElementById('clickBonus')
  for (let i = 0; i < clickUpgrades.length; i++) {
    const upgrade = clickUpgrades[i];
    if (upgrade.quantity > 0) {
      increaseClickBonusElm.innerText == upgrade.bonus * upgrade.quantity
    }
  }
}

// function drawClickBonus() {
//   for (let i = 0; i < clickUpgrades.length; i++) {
//     const clickUpgrade = clickUpgrades[i];
//     const clickBonusElm = document.getElementById('clickBonus')
//     clickBonusElm.innerText = clickUpgrade.bonus
//   }

//   let clickBonus = (clickUpgrades[0].bonus * clickUpgrades[0].quantity)
//   const clickBonusElm = document.getElementById('clickBonus')
//   clickBonusElm.innerText = clickBonus.toString
//   // }
// }

// function drawAutoBonus() {
//   const autoBonusElm = document.getElementById('autoBonus')
//   autoBonusElm.innerText = autoBonus.toString
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

// setInterval(buySpaceStation, 3000);
//#endregion