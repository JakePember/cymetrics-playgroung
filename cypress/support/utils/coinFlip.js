/*
returns true or false randomly
 */
function coinFlip() {
  return Math.random() > 0.5 ? true : false
}

module.exports = {coinFlip}