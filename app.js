//#region STATE
let cheese = 0;

let clickUpgrades = [
  {
    name: 'knife',
    price: 10,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'drill',
    price: 15,
    quantity: 0,
    bonus: 10
  }
];

let autoUpgrades = [
  {
    name: 'mousetronaut',
    price: 25,
    quantity: 0,
    bonus: 100
  },
  {
    name: 'rover',
    price: 30,
    quantity: 0,
    bonus: 500
  }
];

//#endregion



//#region LOGIC
function increaseCheese() {
  cheese += 1
  console.log(cheese)
  drawCheese()
}

function buyKnife() {
  console.log(clickUpgrades[0].name)
  if (cheese >= clickUpgrades[0].price) {
    clickUpgrades[0].quantity += 1
    cheese -= clickUpgrades[0].price
    console.log(clickUpgrades[0])
    drawKnives()
    drawCheese()
  }
}

function buyDrill() {
  console.log(clickUpgrades[1].name)
  if (cheese >= clickUpgrades[1].price) {
    clickUpgrades[1].quantity += 1
    cheese -= clickUpgrades[1].price
    console.log(clickUpgrades[1])
    drawDrills()
    drawCheese()
  }
}

function buyMousetronaut() {
  console.log(autoUpgrades[0].name)
  if (cheese >= autoUpgrades[0].price) {
    autoUpgrades[0].quantity += 1
    cheese -= autoUpgrades[0].price
    console.log(autoUpgrades[0])
    drawMousetronauts()
    drawCheese()
  }
}

function buySpaceStations() {
  console.log(autoUpgrades[1].name)
  if (cheese >= autoUpgrades[1].price) {
    autoUpgrades[1].quantity += 1
    cheese -= autoUpgrades[1].price
    console.log(autoUpgrades[1])
    drawSpaceStations()
    drawCheese()
  }
}


//#endregion



//#region GRAPHICS
function drawCheese() {
  const increaseCheeseElm = document.getElementById('cheesePoints')
  console.log('moon click points', increaseCheeseElm)
  increaseCheeseElm.innerText = cheese.toString()
}

function drawKnives() {
  const increaseKnivesElm = document.getElementById('knifeTotal')
  console.log('knifeTotal', increaseKnivesElm)
  increaseKnivesElm.innerText = clickUpgrades[0].quantity.toString()
}

function drawDrills() {
  const increaseDrillsElm = document.getElementById('drillTotal')
  console.log('drillTotal', increaseDrillsElm)
  increaseDrillsElm.innerText = clickUpgrades[1].quantity.toString()
}

//#endregion