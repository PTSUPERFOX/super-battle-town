function position() {
  let height = 9
  let width = 12
  let posX = Math.ceil(Math.random()*height)
  let posY = Math.ceil(Math.random()*width)
  return {posX: posX, posY: posY}
}

console.log(position());
