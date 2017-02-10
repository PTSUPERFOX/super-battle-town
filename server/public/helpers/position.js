module.exports = function position () {
  let height = 4
  let width = 8
  let posX = Math.ceil(Math.random() * height)
  let posY = Math.ceil(Math.random() * width)
  return {posX: posX, posY: posY}
}
