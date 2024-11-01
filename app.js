//#region STATE
let cheese = 0;

//#endregion



//#region LOGIC
function increaseCheese() {
  cheese += 1
  console.log(cheese)
  drawCheese()
}


//#endregion



//#region GRAPHICS
function drawCheese() {
  const increaseCheeseElm = document.getElementById('cheesePoints')
  console.log('moon click points', increaseCheeseElm)
  increaseCheeseElm.innerText = cheese.toString()
}


//#endregion